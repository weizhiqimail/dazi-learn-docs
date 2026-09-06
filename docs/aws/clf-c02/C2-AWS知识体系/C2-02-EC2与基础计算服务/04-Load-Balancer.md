---
id: 04-Load-Balancer
sidebar_position: 4
---

# C2-02-04-Load-Balancer

> 本篇是《C2-02-EC2与基础计算服务》的第4个分篇，主要包含：Load-Balancer。

## 8-Load-Balancer

**Load Balancer**：负载均衡器。

核心工作：

```text
大量请求
    │
    ▼
Load Balancer
    │
 ┌──┼──┐
 ▼  ▼  ▼
EC2 EC2 EC2
```

把流量分散到多个 Backend Target。

---

### 8.1-★★★★★-Elastic-Load-Balancing

正式名称：**Elastic Load Balancing**。

简称：**ELB**。

中文：**弹性负载均衡**。

注意：ELB 是整个服务体系名称。

不是所有场景下某一种具体 Load Balancer 的名称。

当前主要有：Application Load Balancer、Network Load Balancer、Gateway Load Balancer、Classic Load Balancer。

([AWS Documentation](https://docs.aws.amazon.com/elasticloadbalancing/latest/network/introduction.html))

---

### 8.2-★★★★★-Application-Load-Balancer

正式名称：**Application Load Balancer**。

简称：**ALB**。

中文：**应用负载均衡器**。

ALB 主要处理 HTTP 和 HTTPS 流量，工作在 OSI 第 7 层（应用层）。

它不仅能够接收连接，还能根据 Host、Path 和 HTTP Request 等应用层内容执行路由。

([AWS Documentation](https://docs.aws.amazon.com/jp_ja/elasticloadbalancing/latest/application/introduction.html))

---

### 8.3-Application-Load-Balancer(ALB)-的实际价值

例如 GlobalShop：

```text
globalshop.com/products/*
        ↓
Product Target Group

globalshop.com/orders/*
        ↓
Order Target Group

seller.globalshop.com/*
        ↓
Seller Target Group
```

也就是根据请求内容路由。

架构：

```text
                 ALB
                  │
         ┌────────┼────────┐
         │        │        │
         ▼        ▼        ▼
     Product    Order    Seller
     Target     Target   Target
     Group      Group    Group
```

---

### 8.4-Listener

**Listener**：监听器。

例如：HTTP :80、HTTPS :443 ALB Listener 接收请求，然后根据 Rule 决定把请求转发到哪个 Target Group。

([AWS Documentation](https://docs.aws.amazon.com/jp_ja/elasticloadbalancing/latest/application/introduction.html))

---

### 8.5-Target-Group

**Target Group**：目标组。

例如：

```text
Product Target Group

├── EC2 #1
├── EC2 #2
├── EC2 #3
└── EC2 #4
```

Load Balancer 实际把流量发到 Target Group 中健康的 Target。

---

### 8.6-★★★★★-Health-Check

**Health Check**：健康检查。

Load Balancer 会定期检查 Backend：

```text
EC2 #1 → Healthy
EC2 #2 → Healthy
EC2 #3 → Unhealthy
```

然后：

```text
Request
   ↓
ALB
   ├── EC2 #1 ✓
   ├── EC2 #2 ✓
   └── EC2 #3 ✗
```

不再把正常请求继续发送到故障 Target。

这也是 Load Balancing 对 High Availability 很重要的原因之一。

([AWS Documentation](https://docs.aws.amazon.com/jp_ja/elasticloadbalancing/latest/application/introduction.html))

---

### 8.7-★★★★-Network-Load-Balancer

正式名称：**Network Load Balancer**。

简称：**NLB**。

中文：**网络负载均衡器**。

NLB 主要工作在 OSI 第 4 层，支持 TCP、UDP 和 TLS 等协议，适合需要超高性能、低延迟或静态 IP 地址的网络流量。

AWS 官方当前文档指出 NLB 工作在 OSI 第四层，并能够处理极大量连接/请求。

([AWS Documentation](https://docs.aws.amazon.com/elasticloadbalancing/latest/network/introduction.html))

---

### 8.8-Application-Load-Balancer(ALB)-vs-Network-Load-Balancer(NLB)

CLF 层面可以这样理解：

|                 | ALB          | NLB               |
| --------------- | ------------ | ----------------- |
| 主要层级            | Layer 7      | Layer 4           |
| 主要协议            | HTTP / HTTPS | TCP / UDP / TLS 等 |
| 是否理解 HTTP 内容    | 是            | 核心不是这个            |
| 内容路由            | 强            | 非主要定位             |
| 超高性能网络连接        | 可以           | 更典型               |
| Web Application | 非常典型         | 特殊需求              |

一句话：

```text
Web / HTTP Routing
→ ALB

TCP / UDP / extreme network performance
→ NLB
```

---

### 8.9-Gateway-Load-Balancer

正式名称：**Gateway Load Balancer**。

简称：**GWLB**。

中文：**网关负载均衡器**。

GWLB 主要用于部署和扩展 Firewall、Intrusion Detection、Intrusion Prevention、Deep Packet Inspection 等第三方网络虚拟设备。

不是普通 Web Application：

```text
HTTP → EC2
```

场景的默认选择。

([AWS Documentation](https://docs.aws.amazon.com/decision-guides/latest/decision-guides/choosing-aws-compute-service.html))

---

### 8.10-Classic-Load-Balancer

正式名称：**Classic Load Balancer**。

简称：**CLB**。

中文：**经典负载均衡器**。

CLB 是上一代 ELB 类型。

现代新架构通常优先考虑 ALB、NLB 或 GWLB；CLB 主要用于理解和维护旧系统。

---

### 8.11-★★★★★-Elastic-Load-Balancing(ELB)-+-Auto-Scaling

这是 EC2 架构最重要的组合之一：

```text
                    Users
                      │
                      ▼
                     ALB
                      │
            ┌─────────┴─────────┐
            │                   │
          AZ-A                AZ-B
            │                   │
       ┌────┴────┐         ┌────┴────┐
       ▼         ▼         ▼         ▼
      EC2       EC2       EC2       EC2
       \          \       /          /
        \          \     /          /
         └──── Auto Scaling ───────┘
```

Auto Scaling：管理 EC2 数量。

ELB：管理请求如何分发。

两者完全不是同一个服务。

---

### 8.12-GlobalShop-双十一完整计算层

平时：

```text
Users
  │
  ▼
 ALB
  │
  ▼
20 EC2
```

双十一开始：

```text
Traffic ↑
    │
    ▼
CloudWatch Metrics
    │
    ▼
Auto Scaling
    │
    ▼
20 → 50 → 100 → 300 EC2
```

请求仍然只访问 ALB，客户不需要知道后端当前有 20 台、100 台还是 300 台 EC2 实例。

活动结束后：

```text
Traffic ↓
    │
    ▼
Auto Scaling
    │
    ▼
300 → 100 → 50 → 20
```

这就是：Elasticity。

真正落地到系统架构中的样子。

---

### 8.13-Multi-AZ-+-Elastic-Load-Balancing(ELB)-+-Auto-Scaling

如果所有 EC2 都在：AZ-A。

那么：

```text
AZ-A 故障
↓
所有 EC2 同时不可用
```

正确架构应该：

```text
                    ALB
                 /       \
                /         \
               ▼           ▼
             AZ-A         AZ-B
             │             │
          ┌──┴──┐       ┌──┴──┐
          EC2  EC2      EC2  EC2
```

这样：

```text
AZ-A Failure
       ↓
ALB
       ↓
继续将流量发给 AZ-B 的 Healthy Target
```

这正是 Multi-AZ + Load Balancing + Auto Scaling 共同构建高可用 Web 计算层的典型方式。

---

## 本篇概述

- 本篇梳理了Load-Balancer相关的核心知识、适用场景与判断要点。

[返回本章总述](./00-总述.md)｜[查看本章概述](./99-概述.md)

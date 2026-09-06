---
id: 05-Edge-什么叫“边缘”？
sidebar_position: 5
---

# C2-01-05-Edge-什么叫“边缘”？

> 本篇是《C2-01-云计算核心概念与全球基础设施》的第5个分篇，主要包含：Edge-什么叫“边缘”。

## 5-★★★★-Edge：什么叫“边缘”？

现在进入一个很容易被一句：

> “离用户更近。”

糊弄过去的概念。

---

### 5.1-网络中的-Core-与-Edge

**Core**。

核心。

**Edge**。

边缘。

这里的 Edge 不是。

> 城市边缘。

而是 

> 相对于云中心基础设施而言，更靠近终端用户和接入网络的位置。

想象：

```text
                  Cloud Core
                 AWS Region
                     │
                     │
                Backbone
                     │
                     │
                Edge Network
                     │
                     ▼
                   Users
```

越靠近：最终用户。

越接近：**Network Edge**。

网络边缘。

---

### 5.2-★★★★-Edge-Location：边缘站点

**Edge Location**。

中文常理解为：**边缘站点 / 边缘节点**。

主要服务于：CDN、DNS、Network Acceleration、Edge Security。

等全球网络能力。

---

### 5.3-为什么需要-Edge-Location？

GlobalShop 所有商品图片原文件存在：Tokyo、S3。

日本用户：

```text
Tokyo User
    │
    ▼
Tokyo Region
```

距离较近。

美国用户：

```text
US User
   │
   │ long network path
   │
   ▼
Tokyo Region
```

每次都跑东京，网络路径很长。

---

### 5.4-★★★★-CloudFront-怎么使用-Edge-Location？

后面 C2-07 会完整讲 CloudFront。

现在只理解边缘节点。

第一次访问：

```text
US User
   │
   ▼
US Edge Location
   │
Cache miss
   │
   ▼
Tokyo Origin
S3
   │
   ▼
Object returned
   │
   ▼
Edge Cache
```

下一位附近用户：

```text
US User
   │
   ▼
Nearby Edge Location
   │
   ▼
Cached Object
   │
   ▼
直接返回
```

不必每次跨越远距离到 Tokyo。

---

### 5.5-★★★-Origin-是什么？

**Origin**，中文为：**源站**。

在 CDN 中：

> 保存原始内容、CloudFront 最终回源访问的位置。

GlobalShop：S3 Bucket。

可以作为 CloudFront Origin。

也可以是：Load Balancer、HTTP Server等。

---

### 5.6-★★★★-Cache-是什么？

**Cache**，中文为：**缓存**。

其思想：

> 把经常需要的数据暂时保存在离使用者更近或访问更快的位置。

例如：

```text
Original:
Tokyo S3

Cached Copy:
US Edge
```

这样后续请求可以直接从 Cache 返回。

---

### 5.7-★★★★★-Edge-Location-与-Availability-Zone-最大区别

| 对比   | Availability Zone | Edge Location        |
| ---- | ----------------- | -------------------- |
| 中文   | 可用区               | 边缘站点                 |
| 所属逻辑 | Region 内基础设施      | 全球边缘网络               |
| 主要目标 | 故障隔离、高可用          | 靠近用户、降低内容访问延迟        |
| 常见服务 | EC2、RDS、EBS 等     | CloudFront、DNS/边缘能力等 |
| 典型问题 | 一个 AZ 挂了怎么办       | 全球用户离源站太远怎么办         |

不要因为两个地方都有服务器就认为是同一个概念。

---

### 5.8-★★-Regional-Edge-Cache

CloudFront 还存在：**Regional Edge Cache**，中文为：**区域边缘缓存**。

可以粗略理解为：

> 位于 Edge Location 与 Origin 之间更大一级的中间缓存层。

概念图：

```text
User
 │
 ▼
Edge Location
 │
 ▼
Regional Edge Cache
 │
 ▼
Origin
```

它可以进一步减少：每次都直接回源。

的需求。

CLF-C02 一般不要求深入 CloudFront 多级缓存实现，本章知道层级即可。

---

### 5.9-★★★-Local-Zone：本地区域

**AWS Local Zones**。

中文通常：**AWS 本地区域**。

它是：

> **AWS Region 向特定大城市或人口/产业中心方向的基础设施延伸。

**。

AWS 官方定义：

> Local Zone 将计算、存储、数据库等部分 AWS 资源部署到更靠近大型人口和产业中心的位置，以提供低延迟访问。

([AWS Documentation](https://docs.aws.amazon.com/local-zones/latest/ug/what-is-aws-local-zones.html))

---

### 5.10-为什么已经有-Region，还要-Local-Zone？

假设：Parent Region:、Oregon。

而你的用户/业务就在：Los Angeles。

某些业务要求：极低延迟。

但并不一定有一个完整 AWS Region 就建在那个城市。

于是 AWS 可以提供：**Local Zone**。

把部分：Compute、Storage、Database。

资源放到更接近当地用户的位置。

---

### 5.11-一个真实-Local-Zone-例子

AWS 当前文档给出的典型 Local Zone：us-west-2-lax-1a。

其中：

```text
us-west-2
Parent Region
美国西部（俄勒冈）

lax
Los Angeles
洛杉矶
```

所以它表达的是：

> 这个 Local Zone 属于 `us-west-2` Region 的扩展，但基础设施靠近 Los Angeles。

([AWS Documentation](https://docs.aws.amazon.com/local-zones/latest/ug/available-local-zones.html))

---

### 5.12-GlobalShop-为什么可能用-Local-Zone？

普通电商页面：几十毫秒差异。

往往没有必要专门使用 Local Zone。

但如果 GlobalShop 开始做：

```text
AR虚拟试衣

直播电商实时视频处理

仓库实时视觉系统

远程图形工作站
```

这些业务对：**Low Latency**。

低延迟非常敏感。

如果目标用户靠近 Local Zone：可以考虑。

AWS 官方列出的 Local Zone 典型用途也包括实时游戏、直播、AR/VR、虚拟工作站以及低延迟混合部署。

([AWS Documentation](https://docs.aws.amazon.com/local-zones/latest/ug/what-is-aws-local-zones.html))

---

### 5.13-★★★★-Local-Zone-和-Edge-Location-的区别

两者都说：

> 靠近用户。

但不是一个东西。

#### 5.13.1-Edge-Location

更偏：Cache、Content Delivery、DNS、Edge Network。

#### 5.13.2-Local-Zone

可以真正部署部分：EC2、Storage、Database、Application Workload。

所以：

```text
CloudFront缓存商品图片
→ Edge Location

在洛杉矶本地运行低延迟EC2 workload
→ Local Zone
```

---

### 5.14-★★★-AWS-Outposts

**Outpost**。

英文原义：**前哨 / 前哨站**。

产品：**AWS Outposts**。

中文一般仍直接叫：**AWS Outposts**。

---

### 5.15-Outposts-为什么存在？

有些公司说：

> 我想使用 AWS 的服务器、API 和运维模式。

但是又说：

> 我的计算资源必须放在我自己的机房里。

原因可能：

```text
需要极低本地延迟

大量数据不适合一直传Cloud Region

本地数据处理

法规 / Residency

现有系统高度依赖本地网络
```

于是：只使用普通AWS Region。

不能完全满足。

---

### 5.16-Outposts-做了什么？

AWS 把AWS managed hardware、AWS compute capacity、AWS storage capacity、AWS APIs、AWS tools。

直接延伸到：**Customer Premises**，中文为：**客户现场 / 客户自己的数据中心**。

AWS 官方当前定义：

> Outposts 是完全托管服务，将 AWS 基础设施、服务、API 和工具扩展到客户所在地。

Outpost 本身是部署在客户现场的一组 AWS 计算和存储容量，并由 AWS 作为其关联 Region 的一部分进行运营、监控和管理。

([AWS Documentation](https://docs.aws.amazon.com/outposts/latest/userguide/what-is-outposts.html))

---

### 5.17-Outposts-实际结构

```text
GlobalShop Data Center
企业自己的机房
│
├── Legacy Server
├── Mainframe
├── Local Database
│
└── AWS Outposts Rack
       │
       ├── AWS Compute
       ├── AWS Storage
       └── AWS Services
              │
              │ Service Link
              ▼
          AWS Region
```

这里非常关键：

> Outposts 不是“通过专线访问 AWS Region”。

而是 

> **AWS 的基础设施本身真的部署进客户现场。

**

---

### 5.18-Outposts-与-Direct-Connect-不一样

后面 C2-07 会详细讲。

先记：

```text
Direct Connect
→ 网络连接

Outposts
→ AWS基础设施部署到客户现场
```

比如：

```text
自己家没有AWS服务器
只拉了一条专线
→ Direct Connect

自己机房里真的放了AWS管理的Rack
→ Outposts
```

---

### 5.19-GlobalShop-Outposts-场景

假设 GlobalShop 有一个大型物流中心。

仓库自动化系统：摄像头、机械臂、分拣机、传送带。

需要：极低延迟本地控制。

不能每个控制信号：

```text
仓库
↓
公网
↓
Tokyo Region
↓
计算
↓
再回来
```

但公司又希望：使用AWS API、AWS管理方式、与AWS VPC集成。

于是：**Outposts**。

可能成为方案之一。

---

### 5.20-Outposts-当前产品状态补充

【AWS 当前】AWS 当前文档注明，原来的 1U 和 2U Outposts Server 已停止销售，AWS 正把重点放到 Outposts Rack 以及新的形态上。

Outposts 本身仍然是当前 AWS 服务。

([AWS Documentation](https://docs.aws.amazon.com/outposts/latest/server-userguide/what-is-outposts.html))

CLF-C02 不需要记这种产品生命周期细节。

这里只是为了保证文档与当前 AWS 状态一致。

---

### 5.21-★-AWS-Wavelength

【题库补充】【CURRENT-OUT-OF-SCOPE】。

AWS 当前 CLF-C02 官方 Out-of-Scope 页面已经明确将：**AWS Wavelength**。

列在：Compute、Out-of-Scope。

中。

([AWS Documentation](https://docs.aws.amazon.com/aws-certification/latest/cloud-practitioner-02/clf-02-out-of-scope-services.html))。

但是你的 719 题中存在 Wavelength，因此仍然需要知道它是什么。

---

### 5.22-Wavelength-是什么？

AWS Wavelength 将部分标准 AWS 计算和存储能力部署到：**Telecommunication Carrier 5G Edge**，中文为：**电信运营商的 5G 网络边缘**。

AWS 当前 Global Infrastructure 文档仍然这样描述 Wavelength Zone：

> 用于让开发者构建面向 5G 设备和终端用户的超低延迟应用。

([AWS Documentation](https://docs.aws.amazon.com/global-infrastructure/latest/regions/aws-regions-availability-zones.html))

---

### 5.23-普通移动应用路径

```text
5G Phone
   │
   ▼
Telecom Network
运营商网络
   │
   ▼
Internet / Backbone
   │
   ▼
AWS Region
   │
   ▼
EC2
```

---

### 5.24-Wavelength

```text
5G Phone
   │
   ▼
Telecom Network
   │
   ▼
Wavelength Zone
   │
   └── Compute / Storage
          │
          ▼
      AWS Region
```

某些实时业务不需要每一次都走到较远的核心 Region 再回来。

---

### 5.25-Wavelength-场景

比如：实时多人云游戏、AR / VR、联网汽车、实时视频分析。

这些业务可能对：几毫秒级延迟。

非常敏感。

普通 GlobalShop 商品页通常并不需要这种能力。

---

### 5.26-★★★★★-Local-Zone、Wavelength、Outposts、Edge-Location-对比

| 技术                | 中文理解       | 基础设施在哪里                  | 主要目的               |
| ----------------- | ---------- | ------------------------ | ------------------ |
| Availability Zone | 可用区        | AWS Region 内             | 高可用、故障隔离           |
| Edge Location     | 边缘站点       | 靠近终端用户的 AWS Edge Network | CDN、DNS、内容与网络加速    |
| Local Zone        | 本地区域       | 靠近特定城市/产业中心              | 运行低延迟 AWS workload |
| Wavelength Zone   | 5G 边缘区域    | 电信运营商 5G 网络边缘            | 移动设备超低延迟           |
| Outposts          | AWS 本地基础设施 | 客户自己的机房                  | 本地运行 AWS 基础设施      |

这五个概念都涉及：Location、位置。

但目的完全不同。

---

### 5.27-★★★★★-一张位置层级图

```text
                         AWS GLOBAL
                             │
             ┌───────────────┴───────────────┐
             │                               │
             ▼                               ▼
       Tokyo Region                    Oregon Region
             │                               │
   ┌─────────┼─────────┐                ┌────┼────┐
   ▼         ▼         ▼                ▼    ▼    ▼
  AZ1       AZ2       AZ3              AZ1  AZ2  AZ3
   │
   └── Data Centers

Region Extension:

Oregon Region
     │
     └──── Los Angeles Local Zone

Near Users:

User
 │
 ▼
Edge Location
 │
 ▼
CloudFront
 │
 ▼
Region

5G:

Mobile User
 │
 ▼
Carrier Network
 │
 ▼
Wavelength Zone
 │
 ▼
Region

Customer Premises:

GlobalShop Data Center
 │
 └── AWS Outposts
        │
        ▼
     AWS Region
```

---

## 本篇概述

- 本篇梳理了Edge-什么叫“边缘”？

相关的核心知识、适用场景与判断要点。

[返回本章总述](./00-总述.md)｜[查看本章概述](./99-概述.md)

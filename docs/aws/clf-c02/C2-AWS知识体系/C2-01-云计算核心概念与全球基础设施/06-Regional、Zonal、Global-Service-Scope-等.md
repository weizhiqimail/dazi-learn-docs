---
id: 06-Regional、Zonal、Global-Service-Scope-等
sidebar_position: 6
---

# C2-01-06-Regional、Zonal、Global-Service-Scope与GlobalShop-的完整基础设施选择过程与题库中的本章主要考法

> 本篇是《C2-01-云计算核心概念与全球基础设施》的第6个分篇，主要包含：Regional、Zonal、Global-Service-Scope、GlobalShop-的完整基础设施选择过程、题库中的本章主要考法。

## 6-★★★★-Regional、Zonal、Global-Service-Scope

AWS 服务并不都是一个地理作用域。

可以粗略分成：

```text
Global
全球

Regional
区域级

Zonal
可用区级
```

理解这一点非常重要。

---

### 6.1-Regional-Resource：区域资源

例如很多 AWS 服务的资源：在某一个Region创建。

比如 EC2：Tokyo Region。

和：Oregon Region。

里的实例是两个不同 Region 内的资源。

---

### 6.2-Zonal-Resource：可用区资源

有些资源与具体 AZ 强关联。

例如后续会学习：**Amazon EBS Volume**。

通常创建在：某个Availability Zone。

如果EBS in AZ-A。

要直接挂到：EC2 in AZ-B。

就不能把它当普通本地硬盘一样理解。

后面 C2-04 详细讲。

---

### 6.3-Global-Services：全球服务

有一些服务的管理范围呈全球性质。

例如：

```text
AWS IAM

Amazon Route 53

Amazon CloudFront
```

但“Global Service”不代表：

> 所有数据和行为都完全没有地域概念。

这部分涉及具体服务细节，后续相关章节再准确说明。

当前只需要知道：

> AWS 资源存在不同地理 Scope，不能假设所有服务都绑在同一个 AZ。

---

### 6.4-★★★★-Latency：延迟

**Latency**，中文为：**延迟**。

例如：

```text
用户发送请求
12:00:00.000

收到响应
12:00:00.100
```

总耗时：100ms其中存在：网络延迟、服务器处理时间、数据库时间。

---

### 6.5-为什么-Region-位置影响-Latency？

光纤再快，也不能突破物理规律。

日本用户：

```text
Tokyo
↓
Tokyo Region
```

网络路径通常比：

```text
Tokyo
↓
US East
```

短。

所以 AWS 官方也把：

> 靠近主要用户以降低 network latency。

列为选择 Region 的考虑因素。

([AWS Documentation](https://docs.aws.amazon.com/global-infrastructure/latest/regions/aws-regions.html))

---

### 6.6-★★★-Throughput：吞吐量

**Throughput**，中文为：**吞吐量**。

不要与 Latency 混淆。

---

#### 6.6.1-Latency

回答：

> 一次需要多久？

例如：50 ms

---

#### 6.6.2-Throughput

回答：

> 一段时间能够处理多少？

例如：

```text
10 GB/s

100,000 requests/second
```

所以：

```text
Latency
像：
一个快递包裹多久送到

Throughput
像：
一天一共能运多少包裹
```

---

### 6.7-★★★-Bandwidth：带宽

**Bandwidth**，中文为：**带宽**。

可以粗略理解为：

> 网络链路理论上可以承载的数据传输能力。

虽然：Bandwidth、Throughput。

经常相关，但不是完全同义。

---

### 6.8-Availability、Latency、Cost-不一定可以同时做到最好

真实架构必须做：**Trade-off**，中文为：**权衡 / 取舍**。

例如：

```text
只部署东京
↓
成本较简单
日本用户很好
美国用户延迟可能较高
Region级DR能力有限

全球多Region Active-Active
↓
全球性能更强
区域级韧性更好
但是：
成本更高
架构更复杂
数据同步更难
```

所以：

> 云架构不是“选最贵的就是最好”。

而是 业务需求 + 风险 + 成本 + 复杂度。

之间取得平衡。

---

---

## 7-GlobalShop-的完整基础设施选择过程

现在把本章所有概念串起来。

---

### 7.1-Step-1：用户主要在哪？

Japan、US、Europe。

所以需要考虑：Regions、Edge Network。

---

### 7.2-Step-2：日本核心系统在哪里？

选择：Asia Pacific (Tokyo)、ap-northeast-1。

---

### 7.3-Step-3：东京只有一个-AZ-可以吗？

不希望。

生产环境：AZ-A + AZ-B。

至少形成 Multi-AZ 思维。

---

### 7.4-Step-4：商品图片美国用户怎么办？

S3 Origin + CloudFront Edge Network。

后面 C2-07 详细实现。

---

### 7.5-Step-5：某城市有超低延迟业务怎么办？

如果有合适 Local Zone：Local Zone。

可能考虑。

---

### 7.6-Step-6：物流中心必须本地处理怎么办？

可能考虑：Outposts

---

### 7.7-Step-7：整个东京-Region-都不可用怎么办？

如果业务真的有这个要求：Multi-Region DR。

例如：Tokyo + Osaka。

---

### 7.8-Step-8：能停多久？

定义：RTO

---

### 7.9-Step-9：能丢多少数据？

定义：RPO

---

### 7.10-★★★★★-GlobalShop-基础设施总图

```text
                         Global Users
             Japan          US          Europe
               │             │             │
               ▼             ▼             ▼
          Edge Location  Edge Location  Edge Location
               │             │             │
               └─────────────┼─────────────┘
                             │
                         CloudFront
                             │
                             ▼
                    Asia Pacific (Tokyo)
                       ap-northeast-1
                             │
               ┌─────────────┼─────────────┐
               │             │             │
               ▼             ▼             ▼
             AZ-1          AZ-2          AZ-3
               │             │
              EC2           EC2
               │             │
               └──────┬──────┘
                      │
                 Multi-AZ
                      │
                      ▼
               High Availability

                         DR
Tokyo Region ───────────────────────── Osaka Region
    │                                      │
 Primary                                Recovery
 Workload                                Region

Local Requirement:

Large City
   │
   ▼
Local Zone

On-Prem Requirement:

GlobalShop Data Center
   │
   ▼
AWS Outposts
   │
   ▼
AWS Region
```

---

---

## 8-题库中的本章主要考法

根据 719 题，本章知识主要以以下几种方式出现。

---

### 8.1-类型-1：云计算优势

例如：

```text
固定成本还是可变成本？

为什么AWS可以降低单位成本？

为什么Cloud提高Agility？

为什么不用提前Overprovision？
```

高频答案方向：

```text
Variable expense

Economies of scale

Speed and agility

Elastic capacity
```

题库中也反复讨论“Trade fixed expense for variable expense”以及规模经济等云价值。

---

### 8.2-类型-2：Elasticity/Scalability/Availability-区分

典型选项：

```text
Agility

Elasticity

Scalability

High Availability
```

判断：

```text
快速上线资源
→ Agility

规模越来越大还能撑
→ Scalability

随流量自动增加又减少
→ Elasticity

故障以后还能提供服务
→ High Availability
```

---

### 8.3-类型-3：Region/AZ

题目可能问：

> one or more data centers

→ Availability Zone。

或者：

> choose geographic deployment area

→ Region。

题库中也有题直接将 RDS 的 deployment area 选择和 AWS Regions 联系起来。

---

### 8.4-类型-4：法规和地理要求

题目：

```text
specific geographic location

regulatory requirements

data must remain...
```

通常首先想到：Region Selection，而不是Availability Zone。

因为 Region 才是：**Geographic Area**。

更高层级的位置概念。

---

### 8.5-类型-5：High-Availability

题目：

```text
AZ failure

highly available

fault tolerant
```

通常考虑：Multiple Availability Zones。

---

### 8.6-类型-6：Geographic-Disaster

题目：

```text
natural disaster

entire geographic area

Regional failure
```

需要开始考虑：Multiple Regions。

但不要机械：

```text
Disaster
=
Multi-Region
```

现实 AWS 架构中，Multi-AZ 也能缓解许多火灾、洪水、电力等局部灾害。

只有当业务要求保护到整个 Region 无法运行这种级别，才真正需要跨 Region 策略。

AWS 当前 Reliability 指导也明确区分了这两级。

([AWS Documentation](https://docs.aws.amazon.com/wellarchitected/latest/reliability-pillar/rel_planning_for_recovery_disaster_recovery.html))

---

### 8.7-类型-7：Edge/Local/Outposts

判断：

```text
CDN / content near users
→ Edge Location

run AWS compute near a metro area
→ Local Zone

AWS infrastructure in customer's own data center
→ Outposts

5G ultra-low-latency
→ Wavelength
【当前CLF-C02范围外】
```

---

## 本篇概述

- 本篇梳理了Regional、Zonal、Global-Service-Scope相关的核心知识、适用场景与判断要点。
- 本篇梳理了GlobalShop-的完整基础设施选择过程相关的核心知识、适用场景与判断要点。
- 本篇梳理了题库中的本章主要考法相关的核心知识、适用场景与判断要点。

[返回本章总述](./00-总述.md)｜[查看本章概述](./99-概述.md)

---
id: 03-AWS-Global-Infrastructure-AWS-全球基础设施
sidebar_position: 3
---

# C2-01-03-AWS-Global-Infrastructure-AWS-全球基础设施

> 本篇是《C2-01-云计算核心概念与全球基础设施》的第3个分篇，主要包含：AWS-Global-Infrastructure-AWS-全球基础设施。

## 3-★★★★★-AWS-Global-Infrastructure：AWS-全球基础设施

到这里，我们已经回答：

> Cloud 为什么有价值？

接下来要回答：

> **这些云服务器实际在哪里？

**

AWS 的云不是漂浮在空气中。

底层仍然是：真实土地、真实建筑、真实服务器、真实交换机、真实光纤、真实电力系统。

只是这些物理基础设施由 AWS 建设和运营。

---

### 3.1-当前-AWS-全球规模

【AWS 当前｜2026-09】。

截至本章编写时，AWS 官方 Global Infrastructure 页面显示：

```text
Geographic Regions
地理区域：
39

Availability Zones
可用区：
124

CloudFront POPs
以及 Regional Edge Caches：
750+
```

这些数字会持续增加，因此不建议把具体数字作为长期死记内容。

考试更重要的是理解 Region、AZ 和 Edge Network 之间的关系。

([Amazon Web Services](https://aws.amazon.com/cn/about-aws/global-infrastructure/regions_az/))

---

### 3.2-★★★★★-AWS-全球基础设施第一张总图

```text
                           AWS Global
                        全球AWS基础设施
                              │
       ┌──────────────────────┼──────────────────────┐
       │                      │                      │
       ▼                      ▼                      ▼
 Tokyo Region            Oregon Region          Frankfurt Region
 东京区域                  俄勒冈区域               法兰克福区域
       │
 ┌─────┼─────┬─────┐
 ▼     ▼     ▼     ▼
AZ-1  AZ-2  AZ-3  AZ-4
 │
 ├── Data Center
 └── Data Center

另外还有：

Edge Locations
Local Zones
Outposts
Wavelength Zones
```

---

### 3.3-★★★★★-Region：区域

**Region**，中文为：**区域**。

AWS 官方定义非常直接：

> 每一个 AWS Region 是一个独立的地理区域。

([AWS Documentation](https://docs.aws.amazon.com/global-infrastructure/latest/regions/aws-regions-availability-zones.html))

---

### 3.4-一个真实-Region：东京

GlobalShop 的日本核心系统可以选择：**Asia Pacific (Tokyo)**，中文为：**亚太（东京）区域**。

Region Code：ap-northeast-1。

拆开来看：

```text
ap
Asia Pacific
亚太

northeast
东北方向

1
该系列中的编号
```

实际使用 AWS API、CLI、SDK 时，经常会看到：ap-northeast-1，而不是完整的：Asia Pacific (Tokyo)。

---

### 3.5-日本目前有两个-AWS-Region

【AWS 当前】。

例如：

```text
Asia Pacific (Tokyo)
ap-northeast-1
4 AZs

Asia Pacific (Osaka)
ap-northeast-3
3 AZs
```

AWS 当前 Region 列表确认东京为 4 个 AZ、大阪为 3 个 AZ。

([AWS Documentation](https://docs.aws.amazon.com/global-infrastructure/latest/regions/aws-regions.html))。

这两个都是：**Region**。

不是。

```text
Tokyo = AZ
Osaka = AZ
```

---

### 3.6-为什么-AWS-要划分-Region？

有几个核心原因。

---

#### 3.6.1-Geographic-Proximity：地理接近

**Geographic Proximity**，中文为：**地理接近性**。

假设用户主要都在日本。

部署：Tokyo。

通常比部署：Virginia。

更有机会获得较低的网络传播延迟。

AWS 官方 Region 指南也明确建议，可以选择靠近主要用户的 Region 来降低网络延迟。

([AWS Documentation](https://docs.aws.amazon.com/global-infrastructure/latest/regions/aws-regions.html))

---

#### 3.6.2-Regulatory/Compliance：监管和合规

**Regulatory**。

监管。

**Compliance**。

合规。

有些业务可能规定：某类数据必须保存在指定国家/地区。

于是 Region 选择不再只是性能问题。

可能是法律和监管问题。

---

#### 3.6.3-Service-Availability：服务可用范围

不是所有 AWS 服务：从发布第一天起。

都一定在全球每一个 Region 同时提供。

所以部署业务前，需要考虑：

> 我需要的 AWS Service 在这个 Region 有没有？

AWS Region 官方指南将所需服务和功能是否可用明确列为 Region 选择因素。

([AWS Documentation](https://docs.aws.amazon.com/global-infrastructure/latest/regions/aws-regions.html))

---

### 3.7-GlobalShop-Region-选择案例

GlobalShop 日本站：

```text
主要用户：
日本

监管：
部分用户数据希望放在日本

主要业务团队：
东京
```

可能选择：Asia Pacific (Tokyo)、ap-northeast-1。

欧洲业务如果存在数据和法律要求：Europe Region。

可能更适合。

所以：

```text
Region Selection
区域选择

不是只看：
“哪个Region最快？”

而是：

用户位置
+
法律/监管
+
服务Availability
+
业务需求
```

---

### 3.8-★★★★★-Availability-Zone：可用区

完整英文：**Availability Zone**。

简称：**AZ**，中文为：**可用区**。

---

### 3.9-AZ-到底是什么？

这是非常重要的一句话：

> **一个 Availability Zone 是一个 Region 内相互隔离的基础设施位置，可以包含一个或多个离散的数据中心。

**。

题库第 150 题就直接问：

> 哪一个环境由一个或多个 Data Center 组成？

题库答案：**Availability Zone**。

---

### 3.10-Region-与-AZ-的真实层级

不要这样理解：

```text
Tokyo
=
一个机房
```

正确结构更接近：

```text
Japan
│
├── Asia Pacific (Tokyo) Region
│      │
│      ├── Availability Zone 1
│      │      ├── Data Center
│      │      └── Data Center
│      │
│      ├── Availability Zone 2
│      │      └── Data Center(s)
│      │
│      ├── Availability Zone 3
│      │
│      └── Availability Zone 4
│
└── Asia Pacific (Osaka) Region
       │
       ├── AZ
       ├── AZ
       └── AZ
```

---

### 3.11-东京-Region-的实际-AZ

【AWS 当前】。

Tokyo Region：ap-northeast-1。

当前包含四个稳定 AZ ID：apne1-az1、apne1-az2、apne1-az3、apne1-az4。

AWS 官方 Availability Zone 列表明确列出了这四个 Tokyo AZ ID。

([AWS Documentation](https://docs.aws.amazon.com/global-infrastructure/latest/regions/aws-availability-zones.html))

---

### 3.12-为什么有-AZ-ID-和-ap-northeast-1a-这种名字？

这是一个可以了解、但 CLF-C02 不需要深入的细节。

你有时会看到：ap-northeast-1a、ap-northeast-1b、...。

这是：**Availability Zone Code**。

而 AWS 还提供：apne1-az1。

这种：**AZ ID**。

AZ ID 用于稳定标识一个具体的物理 AZ。

AWS 当前文档还说明：对于较早创建的账户，在一些老 Region 中，类似 `us-east-1a` 这样的字母代码过去可能在不同账户映射到不同的物理 AZ。

AZ ID 则跨账户一致。

新账户的映射策略已经发生变化。

([AWS Documentation](https://docs.aws.amazon.com/global-infrastructure/latest/regions/aws-availability-zones.html))

对 CLF-C02 来说，只需知道：

```text
Region
包含多个AZ

AZ
是Region内部的隔离故障域
```

就足够。

---

### 3.13-为什么一个-Region-不能只有一个-AZ？

因为

> 数据中心也会故障。

例如：停电、网络中断、硬件故障、火灾、洪水、人为故障。

如果整个东京 Region 只有一个位置：

```text
Tokyo

└── Data Center
      │
      ├── EC2
      ├── RDS
      └── Application
```

这个地方发生重大故障：

```text
Tokyo
  X
```

业务全部停止。

因此 AWS Region 采用多个相互隔离的：**Availability Zones**当前 AWS 官方文档指出，每个 Region 至少有三个 AZ，用于帮助设计高可用应用。

([AWS Documentation](https://docs.aws.amazon.com/global-infrastructure/latest/regions/aws-availability-zones.html))

---

### 3.14-AZ-为什么要相互隔离？

如果两个所谓“可用区”：共用同一个电源、共用同一个交换机、共用同一个建筑。

那么：

```text
电源故障
↓
两个一起挂
```

就失去了意义。

所以 AZ 的设计重点是：**Fault Isolation**，中文为：**故障隔离**。

也就是：

> 尽可能防止一个基础设施位置发生故障时，把其他位置一起带走。

---

### 3.15-为什么多个-AZ-之间还要高速连接？

另一方面，如果 AZ：完全隔离、但是彼此网络很慢。

也很难组成一个实时业务系统。

所以一个 Region 内的 AZ 既需要：故障隔离。

又需要：高带宽、低延迟的网络连接。

让：AZ-A Application。

能够和：AZ-B Database。

进行可靠通信。

---

### 3.16-★★★★★-Multi-AZ：多可用区

**Multi**。

多个。

**AZ**。

Availability Zone。

**Multi-AZ**，中文为：**多可用区部署**。

它不是一个单独的 AWS 产品名称。

它是一种：**Architecture Pattern**，中文为：**架构模式**。

---

### 3.17-Single-AZ-的问题

GlobalShop：

```text
Tokyo Region
│
└── AZ-A
      │
      ├── EC2
      └── Database
```

如果

```text
AZ-A
  X
```

整个服务：X

---

### 3.18-Multi-AZ-架构

```text
                 Tokyo Region
                      │
             Load Balancer
                  /       \
                 /         \
                ▼           ▼
             AZ-A         AZ-B
              │             │
             EC2           EC2
```

数据库也可以采取适当的 Multi-AZ 高可用设计。

当：

```text
AZ-A
  X
```

还有：

```text
AZ-B
 ✓
```

所以服务仍有机会继续提供。

---

### 3.19-★★★★★-Multi-AZ-的主要目的是什么？

主要：

```text
High Availability
高可用

Fault Isolation
故障隔离

Resilience
韧性
```

而不是服务美国用户更快。

因为AZ-A、AZ-B。

仍然都属于：Tokyo Region。

---

### 3.20-题库如何考-Multi-AZ？

例如题库存在典型数据库题：

> Database must be highly available and fault tolerant.

选项包括：

```text
RDS Single-AZ

RDS Snapshot

RDS Multi-AZ

DMS
```

题库对应：**RDS with multiple Availability Zones**。

这类题真正考的是：

```text
High Availability
+
AZ Failure protection
↓
Multi-AZ
```

而不是简单背：

```text
RDS = Multi-AZ
```

---

### 3.21-★★★★★-Multi-Region：多区域

**Multi-Region**，中文为：**多区域部署**。

这里比 Multi-AZ 再高一层。

---

### 3.22-Multi-AZ-与-Multi-Region

```text
Japan

┌────────────────────────┐
│ Tokyo Region           │
│                        │
│ AZ-A  AZ-B  AZ-C AZ-D  │
└────────────────────────┘

          │
          │ Multi-Region
          ▼

┌────────────────────────┐
│ Osaka Region           │
│                        │
│ AZ-A  AZ-B  AZ-C       │
└────────────────────────┘
```

---

### 3.23-Multi-AZ-主要保护什么？

例如：某个数据中心故障、某个Availability Zone故障、部分基础设施问题。

---

### 3.24-Multi-Region-主要进一步考虑什么？

例如：整个地理区域重大灾害、区域级业务连续性、全球业务、跨区域灾难恢复、部分法规需求。

---

### 3.25-★★★★★-一个非常重要的原则

不要理解成：

> “只要系统重要，就一定 Multi-Region。”

不一定。

Multi-Region 会引入：更高成本、更复杂数据复制、一致性问题、跨Region网络、Failover机制、运维复杂性。

AWS 当前架构指导也明确指出：

> 不是所有 workload 都需要 Multi-Region。

对于很多场景，同一 Region 内良好的 Multi-AZ 已经能够提供高可用。

([AWS Documentation](https://docs.aws.amazon.com/prescriptive-guidance/latest/security-reference-architecture/multi-region-architecture.html))

所以：

```text
Multi-AZ
≠ 低级架构

Multi-Region
≠ 永远更正确
```

要根据业务要求。

---

### 3.26-题库中的-Multi-Region-场景

题库第 147 题：

> EC2 必须保持高可用，即使某一个特定 geographic area 发生 natural disaster。

选项中包括：

```text
multiple AWS Regions

multiple CloudFront locations

multiple Edge Locations

Local Zones
```

题库答案：**multiple AWS Regions**。

为什么？

因为natural disaster + particular geographic area。

已经超出了单纯：离用户更近。

的问题。

---

## 本篇概述

- 本篇梳理了AWS-Global-Infrastructure-AWS-全球基础设施相关的核心知识、适用场景与判断要点。

[返回本章总述](./00-总述.md)｜[查看本章概述](./99-概述.md)

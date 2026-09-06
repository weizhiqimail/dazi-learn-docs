---
id: 04-Disaster-Recovery-灾难恢复
sidebar_position: 4
---

# C2-01-04-Disaster-Recovery-灾难恢复

> 本篇是《C2-01-云计算核心概念与全球基础设施》的第4个分篇，主要包含：Disaster-Recovery-灾难恢复。

## 4-★★★★-Disaster-Recovery：灾难恢复

简称：**DR**。

完整英文：**Disaster Recovery**，中文为：**灾难恢复 / 灾备**。

---

### 4.1-DR-和-High-Availability-不完全一样

High Availability：

> 主要希望正常运行期间，即使局部组件发生故障，也尽量维持服务。

Disaster Recovery：

> 发生重大灾害之后，如何恢复整个 workload。

AWS 官方 Reliability 文档明确区分：Availability 关注一段时间内对组件故障、负载尖峰、软件 Bug 等事件的韧性。

DR 则关注面对自然灾害、大规模技术故障或攻击/人为错误时的一次恢复目标。

([AWS Documentation](https://docs.aws.amazon.com/wellarchitected/latest/reliability-pillar/disaster-recovery-dr-objectives.html))

---

### 4.2-GlobalShop-的-DR-场景

正常：

```text
Tokyo Region
     │
     ├── AZ-A
     └── AZ-B

正常提供业务
```

另外：

```text
Osaka Region
     │
     └── 保留备份 / 副本 / 恢复能力
```

重大区域事件：

```text
Tokyo Region
     X

      │
      │ Disaster Recovery
      ▼

Osaka Region
恢复业务
```

---

### 4.3-★★★★-RTO：Recovery-Time-Objective

完整英文：**Recovery Time Objective**。

简称：**RTO**，中文为：**恢复时间目标**。

核心问题：

> **最多允许业务停多久？

**

例如：GlobalShop 定义：

```text
RTO = 30 minutes
```

意思：

> 发生灾害以后，希望最多 30 分钟以内恢复业务。

---

### 4.4-★★★★-RPO：Recovery-Point-Objective

完整英文：**Recovery Point Objective**。

简称：**RPO**，中文为：**恢复点目标**。

核心问题：

> **最多允许丢多少时间范围的数据？

**

例如：

```text
RPO = 5 minutes
```

意味着

> 灾害发生后，最多接受最近约 5 分钟的数据无法恢复。

AWS 官方定义也是：

* RTO：服务中断到恢复之间最大可接受时间。
* RPO：最后可恢复的数据点与故障之间最大可接受时间。

([AWS Documentation](https://docs.aws.amazon.com/wellarchitected/latest/reliability-pillar/disaster-recovery-dr-objectives.html))

---

### 4.5-★★★★★-RTO/RPO-文字时间轴

假设：

```text
10:00
最后一次可恢复数据

10:05
灾害发生

10:25
业务恢复
```

则：

```text
             Disaster
                │
                ▼
09:55  10:00  10:05             10:25
─────────●───────X────────────────●────→
         │                         │
         │                         │
      RPO范围                   RTO范围
```

简单理解：

```text
RPO
向灾害之前看

“最多丢多少数据？”

RTO
向灾害之后看

“最多停多久？”
```

---

### 4.6-RTO-越低意味着什么？

例如：

```text
RTO = 24 hours
```

业务允许慢慢恢复。

成本可能相对较低。

而：

```text
RTO = 30 seconds
```

意味着

> 灾害发生以后几乎马上恢复。

通常需要：更多预先运行的资源、更多自动化、更复杂架构、更高成本。

---

### 4.7-RPO-越低意味着什么？

例如：

```text
RPO = 24 hours
```

每天备份一次或许有机会满足。

而：RPO ≈ 0。

意味着几乎不能丢数据。

通常需要：持续复制、实时复制、更复杂的数据架构。

所以：

```text
RTO ↓
RPO ↓

通常意味着：

Cost ↑
Complexity ↑
```

---

### 4.8-★★★-DR-的四种典型思想

AWS Reliability 指导中常见四种 DR 策略：

```text
Backup and Restore
备份与恢复

Pilot Light
指示灯 / 最小核心环境

Warm Standby
温备

Multi-Site Active/Active
多站点双活 / 多活
```

它们通常：

```text
成本逐渐增加
↓
恢复速度逐渐提高
↓
RTO / RPO 通常逐渐降低
```

AWS 当前 Well-Architected Reliability 文档仍使用这些恢复策略。

([AWS Documentation](https://docs.aws.amazon.com/wellarchitected/latest/reliability-pillar/rel_planning_for_recovery_disaster_recovery.html))C2-16 和后续架构章节会详细展开。

本章只建立概念。

---

### 4.9-★★★★-Data-Residency：数据驻留

**Data**。

数据。

**Residency**。

驻留。

**Data Residency**，中文为：**数据驻留**。

AWS 对其定义可以简单理解为：

> **数据在物理或地理上存储和处理在哪里。

**

([AWS Documentation](https://docs.aws.amazon.com/pdfs/wellarchitected/latest/digital-sovereignty-lens/digital-sovereignty-lens.pdf))

---

### 4.10-GlobalShop-数据驻留例子

假设监管要求：

> 日本客户的特定敏感数据必须留在日本。

那么架构不能随便：

```text
Japan Data
    │
    ▼
US Region
```

而要根据法规和业务要求选择合适：Japan Region。

例如：Tokyo、Osaka。

Region 就变成一个非常重要的合规控制点。

---

### 4.11-★★★-Data-Sovereignty：数据主权

**Sovereignty**。

主权。

**Data Sovereignty**，中文为：**数据主权**。

它比 Data Residency 范围更广。

AWS 当前的解释是：

> 数据受到其物理位置对应法律和监管体系的约束。

Data Residency 强调数据实际在哪里。

Data Sovereignty 进一步强调该地的法律和治理如何作用于数据。

([Amazon Web Services](https://aws.amazon.com/what-is/data-sovereignty/))

---

### 4.12-★★★★★-Data-Residency-与-Data-Sovereignty

可以先记：

```text
Data Residency
↓
数据在哪里？

Data Sovereignty
↓
数据受到哪里的法律、
监管和治理体系约束？
```

例如：日本客户数据、实际存储：、Tokyo Region。

这是：**Residency**。

然后：

> 这些数据如何受到日本相关法律和监管制度约束？

属于：**Sovereignty**

---

### 4.13-题库怎样考地理位置和法规？

题库第 529 题：

> 公司需要在 specific geographic area 部署应用以满足 regulations。

题库把 AWS 的：**Global Footprint**。

作为相关优势，并在评论中把它和 Region/AZ 的全球分布以及数据驻留联系起来。

真正理解应该是：

```text
Compliance Requirement
        │
        ▼
需要控制部署地理位置
        │
        ▼
选择适合的 AWS Region
```

而不是死记：

```text
regulation = global footprint
```

---

### 4.14-★★★-Global-Footprint-是什么？

**Global**。

全球。

**Footprint**。

原意是“足迹”。

这里：**Global Footprint**。

可以理解：**全球基础设施覆盖范围**。

AWS 在全球存在许多：Regions、Availability Zones、Edge Locations、Local Zones。

因此企业可以根据用户位置、法律、延迟、业务连续性。

选择部署地点。

---

## 本篇概述

- 本篇梳理了Disaster-Recovery-灾难恢复相关的核心知识、适用场景与判断要点。

[返回本章总述](./00-总述.md)｜[查看本章概述](./99-概述.md)

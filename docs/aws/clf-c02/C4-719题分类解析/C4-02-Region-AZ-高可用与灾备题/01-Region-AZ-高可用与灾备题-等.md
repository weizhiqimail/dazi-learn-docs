---
id: 01-Region-AZ-高可用与灾备题-等
sidebar_position: 1
---

# C4-02-Region-AZ-高可用与灾备题-Region-AZ-高可用与灾备题与Region-AZ-高可用与灾备题与Region-AZ-高可用与灾备题与Region-AZ-高可用与灾备题与Region-AZ-高可用与灾备题与Region-AZ-高可用与灾备题与Region-AZ-高可用与灾备题

> 本篇是《C4-02-Region-AZ-高可用与灾备题》的第1个分篇，主要包含：Region-AZ-高可用与灾备题、Region-AZ-高可用与灾备题、Region-AZ-高可用与灾备题、Region-AZ-高可用与灾备题、Region-AZ-高可用与灾备题、Region-AZ-高可用与灾备题、Region-AZ-高可用与灾备题。

## Q186-Region-AZ-高可用与灾备题

**题目：** A company that uses AWS needs to transfer 2 TB of data. Which type of transfer of that data would result in no cost for the company?。

**选项：**

- A. Inbound data transfer from the internet
- B. Outbound data transfer to the internet
- C. Data transfer between AWS Regions
- D. Data transfer between Availability Zones

**主分类：** C4-02 Region-AZ-高可用与灾备题。

**题库记录答案：** `A`。

**社区投票：** A 73%, D 20%, C 7%。

### Q186.1-题干怎么拆

现有题库没有提供独立 explanation。

这里按题干中的动作、对象和所有选项的服务定位进行比较。

### Q186.2-每个选项的定位

| 选项 | 题库内容 | 服务/概念定位 | 题库答案关系 |
|---|---|---|---|
| A | Inbound data transfer from the internet | 该选项是题库中的概念/服务描述。现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为正确选项 |
| B | Outbound data transfer to the internet | 该选项是题库中的概念/服务描述。现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为非正确选项 |
| C | Data transfer between AWS Regions | Region 是 AWS 独立的地理区域，内部包含多个 Availability Zone。 | 题库记录为非正确选项 |
| D | Data transfer between Availability Zones | Availability Zone 是 Region 内相互隔离的故障域/部署位置。 | 题库记录为非正确选项 |

### Q186.3-为什么题库会这样选

题库记录的正确选项定位为：该选项是题库中的概念/服务描述。

现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。

它与题干要求的对象/约束直接对应。

其余选项虽然可能也属于同一大类，但主要解决不同问题。

### Q186.4-⚠-争议/版本提示

- 社区评论存在明显质疑/版本差异信号
- 本题同时收录到 `C4-27-旧题争议题与当前AWS差异.md`，不在这里强行替题库修正答案。

---

---

## Q275-Region-AZ-高可用与灾备题

**题目：** Which cloud computing advantage is a company applying when it uses AWS Regions to increase application availability to users in different countries?。

**选项：**

- A. Pay-as-you-go pricing
- B. Capacity forecasting
- C. Economies of scale
- D. Global reach

**主分类：** C4-02 Region-AZ-高可用与灾备题。

**题库记录答案：** `D`。

**社区投票：** D 100%

### Q275.1-题干怎么拆

现有题库没有提供独立 explanation。

这里按题干中的动作、对象和所有选项的服务定位进行比较。

### Q275.2-每个选项的定位

| 选项 | 题库内容 | 服务/概念定位 | 题库答案关系 |
|---|---|---|---|
| A | Pay-as-you-go pricing | OPEX/可变支出强调按实际使用支付。 | 题库记录为非正确选项 |
| B | Capacity forecasting | 该选项是题库中的概念/服务描述。现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为非正确选项 |
| C | Economies of scale | 可扩展性关注系统承载更大规模工作负载的能力。 | 题库记录为非正确选项 |
| D | Global reach | 该选项是题库中的概念/服务描述。现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为正确选项 |

### Q275.3-为什么题库会这样选

题库记录的正确选项定位为：该选项是题库中的概念/服务描述。

现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。

它与题干要求的对象/约束直接对应。

其余选项虽然可能也属于同一大类，但主要解决不同问题。

---

---

## Q341-Region-AZ-高可用与灾备题

**题目：** A company wants to use the AWS Cloud to deploy an application globally. Which architecture deployment model should the company use to meet this requirement?。

**选项：**

- A. Multi-Region
- B. Single-Region
- C. Multi-AZ
- D. Single-AZ

**主分类：** C4-02 Region-AZ-高可用与灾备题。

**题库记录答案：** `A`。

**社区投票：** A 100%

### Q341.1-题干怎么拆

现有题库没有提供独立 explanation。

这里按题干中的动作、对象和所有选项的服务定位进行比较。

### Q341.2-每个选项的定位

| 选项 | 题库内容 | 服务/概念定位 | 题库答案关系 |
|---|---|---|---|
| A | Multi-Region | Region 是 AWS 独立的地理区域，内部包含多个 Availability Zone。 | 题库记录为正确选项 |
| B | Single-Region | Region 是 AWS 独立的地理区域，内部包含多个 Availability Zone。 | 题库记录为非正确选项 |
| C | Multi-AZ | Availability Zone 是 Region 内相互隔离的故障域/部署位置。 | 题库记录为非正确选项 |
| D | Single-AZ | Availability Zone 是 Region 内相互隔离的故障域/部署位置。 | 题库记录为非正确选项 |

### Q341.3-为什么题库会这样选

题库记录的正确选项定位为：Region 是 AWS 独立的地理区域，内部包含多个 Availability Zone。

它与题干要求的对象/约束直接对应。

其余选项虽然可能也属于同一大类，但主要解决不同问题。

---

---

## Q347-Region-AZ-高可用与灾备题

**题目：** Which architecture concept describes the ability to deploy resources on demand and release resources when they are no longer needed?。

**选项：**

- A. High availability
- B. Decoupled architecture
- C. Resilience
- D. Elasticity

**主分类：** C4-02 Region-AZ-高可用与灾备题。

**题库记录答案：** `D`。

**社区投票：** D 100%

### Q347.1-题干怎么拆

现有题库没有提供独立 explanation。

这里按题干中的动作、对象和所有选项的服务定位进行比较。

### Q347.2-每个选项的定位

| 选项 | 题库内容 | 服务/概念定位 | 题库答案关系 |
|---|---|---|---|
| A | High availability | 高可用关注组件故障时尽量维持服务可用。 | 题库记录为非正确选项 |
| B | Decoupled architecture | 该选项是题库中的概念/服务描述。现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为非正确选项 |
| C | Resilience | 该选项是题库中的概念/服务描述。现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为非正确选项 |
| D | Elasticity | 弹性是资源随当前负载自动扩大或缩小。 | 题库记录为正确选项 |

### Q347.3-为什么题库会这样选

题库记录的正确选项定位为：弹性是资源随当前负载自动扩大或缩小。

它与题干要求的对象/约束直接对应。

其余选项虽然可能也属于同一大类，但主要解决不同问题。

---

---

## Q527-Region-AZ-高可用与灾备题

**题目：** Which statements accurately describe the relationships among components of AWS global infrastructure? (Choose two.)。

**选项：**

- A. There are more AWS Regions than Availability Zones.
- B. There are more edge locations than AWS Regions.
- C. An edge location is an Availability Zone.
- D. There are more AWS Regions than edge locations.
- E. There are more Availability Zones than AWS Regions.

**主分类：** C4-02 Region-AZ-高可用与灾备题。

**题库记录答案：** `BE`。

**社区投票：** BE 100%

### Q527.1-题干怎么拆

现有题库没有提供独立 explanation。

这里按题干中的动作、对象和所有选项的服务定位进行比较。

### Q527.2-每个选项的定位

| 选项 | 题库内容 | 服务/概念定位 | 题库答案关系 |
|---|---|---|---|
| A | There are more AWS Regions than Availability Zones. | Region 是 AWS 独立的地理区域，内部包含多个 Availability Zone。 | 题库记录为非正确选项 |
| B | There are more edge locations than AWS Regions. | Region 是 AWS 独立的地理区域，内部包含多个 Availability Zone。 | 题库记录为正确选项 |
| C | An edge location is an Availability Zone. | Availability Zone 是 Region 内相互隔离的故障域/部署位置。 | 题库记录为非正确选项 |
| D | There are more AWS Regions than edge locations. | Region 是 AWS 独立的地理区域，内部包含多个 Availability Zone。 | 题库记录为非正确选项 |
| E | There are more Availability Zones than AWS Regions. | Region 是 AWS 独立的地理区域，内部包含多个 Availability Zone。 | 题库记录为正确选项 |

### Q527.3-为什么题库会这样选

题库记录的正确选项定位为：Region 是 AWS 独立的地理区域，内部包含多个 Availability Zone。

它与题干要求的对象/约束直接对应。

其余选项虽然可能也属于同一大类，但主要解决不同问题。

---

---

## Q529-Region-AZ-高可用与灾备题

**题目：** A company needs to host an application in a specific geographic area to comply with regulations. Which feature of the AWS global infrastructure will help the company meet this requirement?。

**选项：**

- A. Scalability
- B. Global footprint
- C. Availability
- D. Performance

**主分类：** C4-02 Region-AZ-高可用与灾备题。

**题库记录答案：** `B`。

**社区投票：** B 75%, C 25%。

### Q529.1-题干怎么拆

现有题库没有提供独立 explanation。

这里按题干中的动作、对象和所有选项的服务定位进行比较。

### Q529.2-每个选项的定位

| 选项 | 题库内容 | 服务/概念定位 | 题库答案关系 |
|---|---|---|---|
| A | Scalability | 可扩展性关注系统承载更大规模工作负载的能力。 | 题库记录为非正确选项 |
| B | Global footprint | 该选项是题库中的概念/服务描述。现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为正确选项 |
| C | Availability | 高可用关注组件故障时尽量维持服务可用。 | 题库记录为非正确选项 |
| D | Performance | 该选项是题库中的概念/服务描述。现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为非正确选项 |

### Q529.3-为什么题库会这样选

题库记录的正确选项定位为：该选项是题库中的概念/服务描述。

现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。

它与题干要求的对象/约束直接对应。

其余选项虽然可能也属于同一大类，但主要解决不同问题。

---

---

## Q531-Region-AZ-高可用与灾备题

**题目：** When designing AWS workloads to be operational even when there are component failures, what is an AWS best practice?。

**选项：**

- A. Perform quarterly disaster recovery tests.
- B. Place the main component on the us-east-1 Region.
- C. Design for automatic failover to healthy resources.
- D. Design workloads to fit on a single Amazon EC2 instance.

**主分类：** C4-02 Region-AZ-高可用与灾备题。

**题库记录答案：** `C`。

**社区投票：** C 100%

### Q531.1-题干怎么拆

现有题库没有提供独立 explanation。

这里按题干中的动作、对象和所有选项的服务定位进行比较。

### Q531.2-每个选项的定位

| 选项 | 题库内容 | 服务/概念定位 | 题库答案关系 |
|---|---|---|---|
| A | Perform quarterly disaster recovery tests. | 灾难恢复关注更大范围故障后的恢复策略、RTO/RPO。 | 题库记录为非正确选项 |
| B | Place the main component on the us-east-1 Region. | Region 是 AWS 独立的地理区域，内部包含多个 Availability Zone。 | 题库记录为非正确选项 |
| C | Design for automatic failover to healthy resources. | 该选项是题库中的概念/服务描述。现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为正确选项 |
| D | Design workloads to fit on a single Amazon EC2 instance. | Amazon EC2：可配置虚拟服务器，适合需要 OS/实例级控制的计算工作负载。 | 题库记录为非正确选项 |

### Q531.3-为什么题库会这样选

题库记录的正确选项定位为：该选项是题库中的概念/服务描述。

现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。

它与题干要求的对象/约束直接对应。

其余选项虽然可能也属于同一大类，但主要解决不同问题。

---

## 本篇概述

- 本篇梳理了Region-AZ-高可用与灾备题相关的核心知识、适用场景与判断要点。
- 本篇梳理了Region-AZ-高可用与灾备题相关的核心知识、适用场景与判断要点。
- 本篇梳理了Region-AZ-高可用与灾备题相关的核心知识、适用场景与判断要点。
- 本篇梳理了Region-AZ-高可用与灾备题相关的核心知识、适用场景与判断要点。
- 本篇梳理了Region-AZ-高可用与灾备题相关的核心知识、适用场景与判断要点。
- 本篇梳理了Region-AZ-高可用与灾备题相关的核心知识、适用场景与判断要点。
- 本篇梳理了Region-AZ-高可用与灾备题相关的核心知识、适用场景与判断要点。

[返回本章总述](./00-总述.md)｜[查看本章概述](./99-概述.md)

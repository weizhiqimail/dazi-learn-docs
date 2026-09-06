---
id: C4-26-03-CAF-Well-Architected题-Q164至Q261
sidebar_position: 3
---

# C4-26-03-CAF-Well-Architected题-Q164至Q261

> 本篇是《C4-26-CAF-Well-Architected题》的第3个分篇，主要包含：CAF-Well-Architected题、CAF-Well-Architected题、CAF-Well-Architected题、CAF-Well-Architected题、CAF-Well-Architected题、CAF-Well-Architected题。

## Q164-CAF-Well-Architected题

**题目：** Which pillar of the AWS Well-Architected Framework refers to the ability of a system to recover from infrastructure or service disruptions and dynamically acquire computing resources to meet demand?。

**选项：**

- A. Security
- B. Reliability
- C. Performance efficiency
- D. Cost optimization

**主分类：** C4-26 CAF-Well-Architected题。

**题库记录答案：** `B`。

**需求/考点标签：** 工作负载架构评审。

**社区投票：** B 100%

### Q164.1-题干怎么拆

这道题先识别的不是某个服务名，而是这些约束：**工作负载架构评审**。

判断时应该先找到与这些约束同层、同数据模型或同运维目标的服务，再排除“看起来也属于 AWS，但解决的是另一个层面问题”的选项。

### Q164.2-每个选项的定位

| 选项 | 题库内容 | 服务/概念定位 | 题库答案关系 |
|---|---|---|---|
| A | Security | 该选项是题库中的概念/服务描述。现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为非正确选项 |
| B | Reliability | 该选项是题库中的概念/服务描述。现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为正确选项 |
| C | Performance efficiency | 该选项是题库中的概念/服务描述。现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为非正确选项 |
| D | Cost optimization | 该选项是题库中的概念/服务描述。现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为非正确选项 |

### Q164.3-为什么题库会这样选

题库记录的正确选项定位为：该选项是题库中的概念/服务描述。

现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。

它与题干要求的对象/约束直接对应。

其余选项虽然可能也属于同一大类，但主要解决不同问题。

---

---

## Q178-CAF-Well-Architected题

**题目：** A company is planning to migrate its application to the AWS Cloud. Which AWS tool or set of resources should the company use to analyze and assess its readiness for migration?。

**选项：**

- A. AWS Cloud Adoption Framework (AWS CAF)
- B. AWS Pricing Calculator
- C. AWS Well-Architected Framework
- D. AWS Budgets

**主分类：** C4-26 CAF-Well-Architected题。

**题库记录答案：** `A`。

**需求/考点标签：** 组织云采用准备度。

**社区投票：** A 79%, C 21%。

### Q178.1-题干怎么拆

这道题先识别的不是某个服务名，而是这些约束：**组织云采用准备度**。

判断时应该先找到与这些约束同层、同数据模型或同运维目标的服务，再排除“看起来也属于 AWS，但解决的是另一个层面问题”的选项。

### Q178.2-每个选项的定位

| 选项 | 题库内容 | 服务/概念定位 | 题库答案关系 |
|---|---|---|---|
| A | AWS Cloud Adoption Framework (AWS CAF) | AWS CAF：帮助组织规划和推进云采用与业务/组织转型，包含六个 Perspectives。 | 题库记录为正确选项 |
| B | AWS Pricing Calculator | AWS Pricing Calculator：部署前估算计划架构成本。 | 题库记录为非正确选项 |
| C | AWS Well-Architected Framework | AWS Well-Architected Framework：以六大 Pillars 评估和设计安全、可靠、高效、成本优化、可持续的 Workload。 | 题库记录为非正确选项 |
| D | AWS Budgets | AWS Budgets：设置成本/用量预算阈值和告警。 | 题库记录为非正确选项 |

### Q178.3-为什么题库会这样选

题库记录的正确选项定位为：AWS CAF：帮助组织规划和推进云采用与业务/组织转型，包含六个 Perspectives。

它与题干要求的对象/约束直接对应。

其余选项虽然可能也属于同一大类，但主要解决不同问题。

---

---

## Q185-CAF-Well-Architected题

**题目：** Which design principles support the reliability pillar of the AWS Well-Architected Framework? (Choose two.)。

**选项：**

- A. Perform operations as code.
- B. Enable traceability.
- C. Automatically scale to meet demand.
- D. Deploy resources globally to improve response time.
- E. Automatically recover from failure.

**主分类：** C4-26 CAF-Well-Architected题。

**题库记录答案：** `CE`。

**需求/考点标签：** 工作负载架构评审。

**社区投票：** CE 73%, AE 27%。

### Q185.1-题干怎么拆

这道题先识别的不是某个服务名，而是这些约束：**工作负载架构评审**。

判断时应该先找到与这些约束同层、同数据模型或同运维目标的服务，再排除“看起来也属于 AWS，但解决的是另一个层面问题”的选项。

### Q185.2-每个选项的定位

| 选项 | 题库内容 | 服务/概念定位 | 题库答案关系 |
|---|---|---|---|
| A | Perform operations as code. | 该选项是题库中的概念/服务描述。现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为非正确选项 |
| B | Enable traceability. | 该选项是题库中的概念/服务描述。现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为非正确选项 |
| C | Automatically scale to meet demand. | 可扩展性关注系统承载更大规模工作负载的能力。 | 题库记录为正确选项 |
| D | Deploy resources globally to improve response time. | 该选项是题库中的概念/服务描述。现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为非正确选项 |
| E | Automatically recover from failure. | 该选项是题库中的概念/服务描述。现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为正确选项 |

### Q185.3-为什么题库会这样选

题库记录的正确选项定位为：可扩展性关注系统承载更大规模工作负载的能力。

该选项是题库中的概念/服务描述。

现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。

它与题干要求的对象/约束直接对应。

其余选项虽然可能也属于同一大类，但主要解决不同问题。

---

---

## Q257-CAF-Well-Architected题

**题目：** A company wants to monitor its workload performance. The company wants to ensure that the cloud services are delivered at a level that meets its business needs. Which AWS Cloud Adoption Framework (AWS CAF) perspective will meet these requirements?

**选项：**

- A. Business
- B. Governance
- C. Platform
- D. Operations

**主分类：** C4-26 CAF-Well-Architected题。

**题库记录答案：** `D`。

**需求/考点标签：** 组织云采用准备度。

**社区投票：** D 93%, A 7%。

### Q257.1-题干怎么拆

这道题先识别的不是某个服务名，而是这些约束：**组织云采用准备度**。

判断时应该先找到与这些约束同层、同数据模型或同运维目标的服务，再排除“看起来也属于 AWS，但解决的是另一个层面问题”的选项。

### Q257.2-每个选项的定位

| 选项 | 题库内容 | 服务/概念定位 | 题库答案关系 |
|---|---|---|---|
| A | Business | 该选项是题库中的概念/服务描述。现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为非正确选项 |
| B | Governance | 该选项是题库中的概念/服务描述。现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为非正确选项 |
| C | Platform | 该选项是题库中的概念/服务描述。现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为非正确选项 |
| D | Operations | 该选项是题库中的概念/服务描述。现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为正确选项 |

### Q257.3-为什么题库会这样选

题库记录的正确选项定位为：该选项是题库中的概念/服务描述。

现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。

它与题干要求的对象/约束直接对应。

其余选项虽然可能也属于同一大类，但主要解决不同问题。

---

---

## Q258-CAF-Well-Architected题

**题目：** A company wants to migrate its applications to the AWS Cloud. The company plans to identify and prioritize any business transformation opportunities and evaluate its AWS Cloud readiness. Which AWS service or tool should the company use to meet these requirements?

**选项：**

- A. AWS Cloud Adoption Framework (AWS CAF)
- B. AWS Managed Services (AMS)
- C. AWS Well-Architected Framework
- D. AWS Migration Hub

**主分类：** C4-26 CAF-Well-Architected题。

**题库记录答案：** `A`。

**需求/考点标签：** 组织云采用准备度。

**社区投票：** A 100%

### Q258.1-题干怎么拆

这道题先识别的不是某个服务名，而是这些约束：**组织云采用准备度**。

判断时应该先找到与这些约束同层、同数据模型或同运维目标的服务，再排除“看起来也属于 AWS，但解决的是另一个层面问题”的选项。

### Q258.2-每个选项的定位

| 选项 | 题库内容 | 服务/概念定位 | 题库答案关系 |
|---|---|---|---|
| A | AWS Cloud Adoption Framework (AWS CAF) | AWS CAF：帮助组织规划和推进云采用与业务/组织转型，包含六个 Perspectives。 | 题库记录为正确选项 |
| B | AWS Managed Services (AMS) | 该选项描述 Shared Responsibility 中 AWS 侧的基础设施责任。 | 题库记录为非正确选项 |
| C | AWS Well-Architected Framework | AWS Well-Architected Framework：以六大 Pillars 评估和设计安全、可靠、高效、成本优化、可持续的 Workload。 | 题库记录为非正确选项 |
| D | AWS Migration Hub | AWS Migration Hub：集中跟踪多个迁移工具和应用迁移进度。 | 题库记录为非正确选项 |

### Q258.3-为什么题库会这样选

题库记录的正确选项定位为：AWS CAF：帮助组织规划和推进云采用与业务/组织转型，包含六个 Perspectives。

它与题干要求的对象/约束直接对应。

其余选项虽然可能也属于同一大类，但主要解决不同问题。

---

---

## Q261-CAF-Well-Architected题

**题目：** A company wants to set up its workloads to perform their intended functions and recover quickly from failure. Which pillar of the AWS Well-Architected Framework aligns with these goals?。

**选项：**

- A. Performance efficiency
- B. Sustainability
- C. Reliability
- D. Security

**主分类：** C4-26 CAF-Well-Architected题。

**题库记录答案：** `C`。

**需求/考点标签：** 工作负载架构评审。

**社区投票：** C 96%

### Q261.1-题干怎么拆

这道题先识别的不是某个服务名，而是这些约束：**工作负载架构评审**。

判断时应该先找到与这些约束同层、同数据模型或同运维目标的服务，再排除“看起来也属于 AWS，但解决的是另一个层面问题”的选项。

### Q261.2-每个选项的定位

| 选项 | 题库内容 | 服务/概念定位 | 题库答案关系 |
|---|---|---|---|
| A | Performance efficiency | 该选项是题库中的概念/服务描述。现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为非正确选项 |
| B | Sustainability | 该选项是题库中的概念/服务描述。现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为非正确选项 |
| C | Reliability | 该选项是题库中的概念/服务描述。现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为正确选项 |
| D | Security | 该选项是题库中的概念/服务描述。现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为非正确选项 |

### Q261.3-为什么题库会这样选

题库记录的正确选项定位为：该选项是题库中的概念/服务描述。

现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。

它与题干要求的对象/约束直接对应。

其余选项虽然可能也属于同一大类，但主要解决不同问题。

---

## 本篇概述

- 本篇梳理了CAF-Well-Architected题相关的核心知识、适用场景与判断要点。
- 本篇梳理了CAF-Well-Architected题相关的核心知识、适用场景与判断要点。
- 本篇梳理了CAF-Well-Architected题相关的核心知识、适用场景与判断要点。
- 本篇梳理了CAF-Well-Architected题相关的核心知识、适用场景与判断要点。
- 本篇梳理了CAF-Well-Architected题相关的核心知识、适用场景与判断要点。
- 本篇梳理了CAF-Well-Architected题相关的核心知识、适用场景与判断要点。

[返回本章总述](./C4-26-00-章节总述.md)｜[查看本章概述](./C4-26-99-章节概述.md)

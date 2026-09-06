---
id: 08-CAF-Well-Architected题-等
sidebar_position: 8
---

# C4-26-CAF-Well-Architected题-CAF-Well-Architected题与CAF-Well-Architected题与CAF-Well-Architected题与CAF-Well-Architected题与CAF-Well-Architected题与CAF-Well-Architected题

> 本篇是《C4-26-CAF-Well-Architected题》的第8个分篇，主要包含：CAF-Well-Architected题、CAF-Well-Architected题、CAF-Well-Architected题、CAF-Well-Architected题、CAF-Well-Architected题、CAF-Well-Architected题。

## Q507-CAF-Well-Architected题

**题目：** A company is planning to migrate to the AWS Cloud. The company is conducting organizational transformation and wants to become more responsive to customer inquiries and feedback. Which task should the company perform to meet these requirements, according to the AWS Cloud Adoption Framework (AWS CAF)?

**选项：**

- A. Realign teams to focus on products and value streams.
- B. Create new value propositions with new products and services.
- C. Use a new data and analytics platform to create actionable insights.
- D. Migrate and modernize legacy infrastructure.

**主分类：** C4-26 CAF-Well-Architected题。

**题库记录答案：** `A`。

**需求/考点标签：** 组织云采用准备度。

**社区投票：** A 100%

### Q507.1-题干怎么拆

这道题先识别的不是某个服务名，而是这些约束：**组织云采用准备度**。

判断时应该先找到与这些约束同层、同数据模型或同运维目标的服务，再排除“看起来也属于 AWS，但解决的是另一个层面问题”的选项。

### Q507.2-每个选项的定位

| 选项 | 题库内容 | 服务/概念定位 | 题库答案关系 |
|---|---|---|---|
| A | Realign teams to focus on products and value streams. | 该选项是题库中的概念/服务描述。现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为正确选项 |
| B | Create new value propositions with new products and services. | 该选项是题库中的概念/服务描述。现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为非正确选项 |
| C | Use a new data and analytics platform to create actionable insights. | 该选项是题库中的概念/服务描述。现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为非正确选项 |
| D | Migrate and modernize legacy infrastructure. | 该选项是题库中的概念/服务描述。现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为非正确选项 |

### Q507.3-为什么题库会这样选

题库记录的正确选项定位为：该选项是题库中的概念/服务描述。

现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。

它与题干要求的对象/约束直接对应。

其余选项虽然可能也属于同一大类，但主要解决不同问题。

---

---

## Q559-CAF-Well-Architected题

**题目：** Which design principles are included in the reliability pillar of the AWS Well-Architected Framework? (Choose two.)。

**选项：**

- A. Automatically recover from failure.
- B. Grant everyone access to increase AWS service quotas.
- C. Stop guessing capacity.
- D. Design applications to run in a single Availability Zone.
- E. Plan to increase AWS service quotas first in a secondary AWS Region.

**主分类：** C4-26 CAF-Well-Architected题。

**题库记录答案：** `AC`。

**需求/考点标签：** 工作负载架构评审。

**社区投票：** AC 100%

### Q559.1-题干怎么拆

这道题先识别的不是某个服务名，而是这些约束：**工作负载架构评审**。

判断时应该先找到与这些约束同层、同数据模型或同运维目标的服务，再排除“看起来也属于 AWS，但解决的是另一个层面问题”的选项。

### Q559.2-每个选项的定位

| 选项 | 题库内容 | 服务/概念定位 | 题库答案关系 |
|---|---|---|---|
| A | Automatically recover from failure. | 该选项是题库中的概念/服务描述。现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为正确选项 |
| B | Grant everyone access to increase AWS service quotas. | 该选项是题库中的概念/服务描述。现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为非正确选项 |
| C | Stop guessing capacity. | 该选项是题库中的概念/服务描述。现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为正确选项 |
| D | Design applications to run in a single Availability Zone. | Availability Zone 是 Region 内相互隔离的故障域/部署位置。 | 题库记录为非正确选项 |
| E | Plan to increase AWS service quotas first in a secondary AWS Region. | Region 是 AWS 独立的地理区域，内部包含多个 Availability Zone。 | 题库记录为非正确选项 |

### Q559.3-为什么题库会这样选

题库记录的正确选项定位为：该选项是题库中的概念/服务描述。

现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。

该选项是题库中的概念/服务描述。

现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。

它与题干要求的对象/约束直接对应。

其余选项虽然可能也属于同一大类，但主要解决不同问题。

---

---

## Q601-CAF-Well-Architected题

**题目：** Which AWS Cloud Adoption Framework (AWS CAF) perspective focuses on organizing an inventory of data products in a data catalog?。

**选项：**

- A. Operations
- B. Governance
- C. Business
- D. Platform

**主分类：** C4-26 CAF-Well-Architected题。

**题库记录答案：** `B`。

**需求/考点标签：** ETL与数据目录 / 组织云采用准备度。

**社区投票：** B 100%

### Q601.1-题干怎么拆

这道题先识别的不是某个服务名，而是这些约束：**ETL与数据目录、组织云采用准备度**。

判断时应该先找到与这些约束同层、同数据模型或同运维目标的服务，再排除“看起来也属于 AWS，但解决的是另一个层面问题”的选项。

### Q601.2-每个选项的定位

| 选项 | 题库内容 | 服务/概念定位 | 题库答案关系 |
|---|---|---|---|
| A | Operations | 该选项是题库中的概念/服务描述。现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为非正确选项 |
| B | Governance | 该选项是题库中的概念/服务描述。现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为正确选项 |
| C | Business | 该选项是题库中的概念/服务描述。现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为非正确选项 |
| D | Platform | 该选项是题库中的概念/服务描述。现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为非正确选项 |

### Q601.3-为什么题库会这样选

题库记录的正确选项定位为：该选项是题库中的概念/服务描述。

现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。

它与题干要求的对象/约束直接对应。

其余选项虽然可能也属于同一大类，但主要解决不同问题。

---

---

## Q619-CAF-Well-Architected题

**题目：** A company is designing workloads in the AWS Cloud. The company wants the workloads to perform their intended function correctly and consistently throughout their lifecycle. Which pillar of the AWS Well-Architected Framework does this goal represent?

**选项：**

- A. Operational excellence
- B. Security
- C. Reliability
- D. Performance efficiency

**主分类：** C4-26 CAF-Well-Architected题。

**题库记录答案：** `C`。

**需求/考点标签：** 工作负载架构评审。

**社区投票：** C 100%

### Q619.1-题干怎么拆

这道题先识别的不是某个服务名，而是这些约束：**工作负载架构评审**。

判断时应该先找到与这些约束同层、同数据模型或同运维目标的服务，再排除“看起来也属于 AWS，但解决的是另一个层面问题”的选项。

### Q619.2-每个选项的定位

| 选项 | 题库内容 | 服务/概念定位 | 题库答案关系 |
|---|---|---|---|
| A | Operational excellence | 该选项是题库中的概念/服务描述。现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为非正确选项 |
| B | Security | 该选项是题库中的概念/服务描述。现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为非正确选项 |
| C | Reliability | 该选项是题库中的概念/服务描述。现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为正确选项 |
| D | Performance efficiency | 该选项是题库中的概念/服务描述。现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为非正确选项 |

### Q619.3-为什么题库会这样选

题库记录的正确选项定位为：该选项是题库中的概念/服务描述。

现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。

它与题干要求的对象/约束直接对应。

其余选项虽然可能也属于同一大类，但主要解决不同问题。

---

---

## Q647-CAF-Well-Architected题

**题目：** A company wants to continuously improve processes and procedures to deliver business value. Which pillar of the AWS Well-Architected Framework does this goal represent?。

**选项：**

- A. Performance efficiency
- B. Operational excellence
- C. Reliability
- D. Sustainability

**主分类：** C4-26 CAF-Well-Architected题。

**题库记录答案：** `B`。

**需求/考点标签：** 工作负载架构评审。

**社区投票：** B 100%

### Q647.1-题干怎么拆

这道题先识别的不是某个服务名，而是这些约束：**工作负载架构评审**。

判断时应该先找到与这些约束同层、同数据模型或同运维目标的服务，再排除“看起来也属于 AWS，但解决的是另一个层面问题”的选项。

### Q647.2-每个选项的定位

| 选项 | 题库内容 | 服务/概念定位 | 题库答案关系 |
|---|---|---|---|
| A | Performance efficiency | 该选项是题库中的概念/服务描述。现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为非正确选项 |
| B | Operational excellence | 该选项是题库中的概念/服务描述。现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为正确选项 |
| C | Reliability | 该选项是题库中的概念/服务描述。现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为非正确选项 |
| D | Sustainability | 该选项是题库中的概念/服务描述。现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为非正确选项 |

### Q647.3-为什么题库会这样选

题库记录的正确选项定位为：该选项是题库中的概念/服务描述。

现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。

它与题干要求的对象/约束直接对应。

其余选项虽然可能也属于同一大类，但主要解决不同问题。

---

---

## Q659-CAF-Well-Architected题

**题目：** Which design principle is related to the reliability pillar according to the AWS Well-Architected Framework?。

**选项：**

- A. Test recovery procedures
- B. Experiment more often
- C. Go global in minutes
- D. Analyze and attribute to expenditure

**主分类：** C4-26 CAF-Well-Architected题。

**题库记录答案：** `A`。

**需求/考点标签：** 工作负载架构评审。

### Q659.1-题干怎么拆

这道题先识别的不是某个服务名，而是这些约束：**工作负载架构评审**。

判断时应该先找到与这些约束同层、同数据模型或同运维目标的服务，再排除“看起来也属于 AWS，但解决的是另一个层面问题”的选项。

### Q659.2-每个选项的定位

| 选项 | 题库内容 | 服务/概念定位 | 题库答案关系 |
|---|---|---|---|
| A | Test recovery procedures | 该选项是题库中的概念/服务描述。现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为正确选项 |
| B | Experiment more often | 该选项是题库中的概念/服务描述。现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为非正确选项 |
| C | Go global in minutes | 该选项是题库中的概念/服务描述。现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为非正确选项 |
| D | Analyze and attribute to expenditure | 该选项是题库中的概念/服务描述。现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为非正确选项 |

### Q659.3-为什么题库会这样选

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

[返回本章总述](./00-总述.md)｜[查看本章概述](./99-概述.md)

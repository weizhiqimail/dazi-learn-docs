---
id: C4-26-04-CAF-Well-Architected题-Q268至Q303
sidebar_position: 4
---

# C4-26-04-CAF-Well-Architected题-Q268至Q303

> 本篇是《C4-26-CAF-Well-Architected题》的第4个分篇，主要包含：CAF-Well-Architected题、CAF-Well-Architected题、CAF-Well-Architected题、CAF-Well-Architected题、CAF-Well-Architected题、CAF-Well-Architected题。

## Q268-CAF-Well-Architected题

**题目：** Which of the following are pillars of the AWS Well-Architected Framework? (Choose two.)。

**选项：**

- A. High availability
- B. Performance efficiency
- C. Cost optimization
- D. Going global in minutes
- E. Continuous development

**主分类：** C4-26 CAF-Well-Architected题。

**题库记录答案：** `B`。

**需求/考点标签：** 工作负载架构评审。

**社区投票：** B 65%, C 23%, A 13%。

### Q268.1-题干怎么拆

这道题先识别的不是某个服务名，而是这些约束：**工作负载架构评审**。

判断时应该先找到与这些约束同层、同数据模型或同运维目标的服务，再排除“看起来也属于 AWS，但解决的是另一个层面问题”的选项。

### Q268.2-每个选项的定位

| 选项 | 题库内容 | 服务/概念定位 | 题库答案关系 |
|---|---|---|---|
| A | High availability | 高可用关注组件故障时尽量维持服务可用。 | 题库记录为非正确选项 |
| B | Performance efficiency | 该选项是题库中的概念/服务描述。现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为正确选项 |
| C | Cost optimization | 该选项是题库中的概念/服务描述。现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为非正确选项 |
| D | Going global in minutes | 该选项是题库中的概念/服务描述。现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为非正确选项 |
| E | Continuous development | 该选项是题库中的概念/服务描述。现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为非正确选项 |

### Q268.3-为什么题库会这样选

题库记录的正确选项定位为：该选项是题库中的概念/服务描述。

现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。

它与题干要求的对象/约束直接对应。

其余选项虽然可能也属于同一大类，但主要解决不同问题。

### Q268.4-⚠-争议/版本提示

- 题干要求选择 2 项，但题库 correct_answer 记录为 `B`
- 社区投票分散，最高项仅 65%
- 本题同时收录到 `C4-27-旧题争议题与当前AWS差异.md`，不在这里强行替题库修正答案。

---

---

## Q277-CAF-Well-Architected题

**题目：** Which of the following is an AWS Well-Architected Framework design principle for operational excellence in the AWS Cloud?。

**选项：**

- A. Go global in minutes.
- B. Make frequent, small, reversible changes.
- C. Implement a strong foundation of identity and access management
- D. Stop spending money on hardware infrastructure for data center operations.

**主分类：** C4-26 CAF-Well-Architected题。

**题库记录答案：** `B`。

**需求/考点标签：** 工作负载架构评审。

**社区投票：** B 100%

### Q277.1-题干怎么拆

这道题先识别的不是某个服务名，而是这些约束：**工作负载架构评审**。

判断时应该先找到与这些约束同层、同数据模型或同运维目标的服务，再排除“看起来也属于 AWS，但解决的是另一个层面问题”的选项。

### Q277.2-每个选项的定位

| 选项 | 题库内容 | 服务/概念定位 | 题库答案关系 |
|---|---|---|---|
| A | Go global in minutes. | 该选项是题库中的概念/服务描述。现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为非正确选项 |
| B | Make frequent, small, reversible changes. | 该选项是题库中的概念/服务描述。现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为正确选项 |
| C | Implement a strong foundation of identity and access management | 该选项是题库中的概念/服务描述。现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为非正确选项 |
| D | Stop spending money on hardware infrastructure for data center operations. | 该选项是题库中的概念/服务描述。现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为非正确选项 |

### Q277.3-为什么题库会这样选

题库记录的正确选项定位为：该选项是题库中的概念/服务描述。

现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。

它与题干要求的对象/约束直接对应。

其余选项虽然可能也属于同一大类，但主要解决不同问题。

---

---

## Q285-CAF-Well-Architected题

**题目：** A company wants to run its workloads in the AWS Cloud effectively, reduce management overhead, and improve processes. Which AWS Well-Architected Framework pillar represents these requirements?。

**选项：**

- A. Reliability
- B. Operational excellence
- C. Performance efficiency
- D. Cost optimization

**主分类：** C4-26 CAF-Well-Architected题。

**题库记录答案：** `B`。

**需求/考点标签：** 工作负载架构评审。

**社区投票：** B 100%

### Q285.1-题干怎么拆

这道题先识别的不是某个服务名，而是这些约束：**工作负载架构评审**。

判断时应该先找到与这些约束同层、同数据模型或同运维目标的服务，再排除“看起来也属于 AWS，但解决的是另一个层面问题”的选项。

### Q285.2-每个选项的定位

| 选项 | 题库内容 | 服务/概念定位 | 题库答案关系 |
|---|---|---|---|
| A | Reliability | 该选项是题库中的概念/服务描述。现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为非正确选项 |
| B | Operational excellence | 该选项是题库中的概念/服务描述。现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为正确选项 |
| C | Performance efficiency | 该选项是题库中的概念/服务描述。现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为非正确选项 |
| D | Cost optimization | 该选项是题库中的概念/服务描述。现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为非正确选项 |

### Q285.3-为什么题库会这样选

题库记录的正确选项定位为：该选项是题库中的概念/服务描述。

现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。

它与题干要求的对象/约束直接对应。

其余选项虽然可能也属于同一大类，但主要解决不同问题。

---

---

## Q292-CAF-Well-Architected题

**题目：** Which capabilities are in the platform perspective of the AWS Cloud Adoption Framework (AWS CAF)? (Choose two.)。

**选项：**

- A. Performance and capacity management
- B. Data engineering
- C. Continuous integration and continuous delivery (CI/CD)
- D. Infrastructure protection
- E. Change and release management

**主分类：** C4-26 CAF-Well-Architected题。

**题库记录答案：** `BC`。

**需求/考点标签：** 组织云采用准备度。

**社区投票：** BC 72%, AD 12%, Other 16%。

### Q292.1-题干怎么拆

这道题先识别的不是某个服务名，而是这些约束：**组织云采用准备度**。

判断时应该先找到与这些约束同层、同数据模型或同运维目标的服务，再排除“看起来也属于 AWS，但解决的是另一个层面问题”的选项。

### Q292.2-每个选项的定位

| 选项 | 题库内容 | 服务/概念定位 | 题库答案关系 |
|---|---|---|---|
| A | Performance and capacity management | 该选项是题库中的概念/服务描述。现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为非正确选项 |
| B | Data engineering | 该选项是题库中的概念/服务描述。现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为正确选项 |
| C | Continuous integration and continuous delivery (CI/CD) | 该选项是题库中的概念/服务描述。现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为正确选项 |
| D | Infrastructure protection | 该选项是题库中的概念/服务描述。现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为非正确选项 |
| E | Change and release management | 该选项是题库中的概念/服务描述。现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为非正确选项 |

### Q292.3-为什么题库会这样选

题库记录的正确选项定位为：该选项是题库中的概念/服务描述。

现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。

该选项是题库中的概念/服务描述。

现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。

它与题干要求的对象/约束直接对应。

其余选项虽然可能也属于同一大类，但主要解决不同问题。

### Q292.4-⚠-争议/版本提示

- 社区评论存在明显质疑/版本差异信号
- 本题同时收录到 `C4-27-旧题争议题与当前AWS差异.md`，不在这里强行替题库修正答案。

---

---

## Q295-CAF-Well-Architected题

**题目：** Which options are AWS Cloud Adoption Framework (AWS CAF) security perspective capabilities? (Choose two.)。

**选项：**

- A. Observability
- B. Incident and problem management
- C. Incident response
- D. Infrastructure protection
- E. Availability and continuity

**主分类：** C4-26 CAF-Well-Architected题。

**题库记录答案：** `CD`。

**需求/考点标签：** 组织云采用准备度。

**社区投票：** CD 88%, Other 12%。

### Q295.1-题干怎么拆

这道题先识别的不是某个服务名，而是这些约束：**组织云采用准备度**。

判断时应该先找到与这些约束同层、同数据模型或同运维目标的服务，再排除“看起来也属于 AWS，但解决的是另一个层面问题”的选项。

### Q295.2-每个选项的定位

| 选项 | 题库内容 | 服务/概念定位 | 题库答案关系 |
|---|---|---|---|
| A | Observability | 该选项是题库中的概念/服务描述。现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为非正确选项 |
| B | Incident and problem management | 该选项是题库中的概念/服务描述。现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为非正确选项 |
| C | Incident response | 该选项是题库中的概念/服务描述。现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为正确选项 |
| D | Infrastructure protection | 该选项是题库中的概念/服务描述。现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为正确选项 |
| E | Availability and continuity | 高可用关注组件故障时尽量维持服务可用。 | 题库记录为非正确选项 |

### Q295.3-为什么题库会这样选

题库记录的正确选项定位为：该选项是题库中的概念/服务描述。

现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。

该选项是题库中的概念/服务描述。

现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。

它与题干要求的对象/约束直接对应。

其余选项虽然可能也属于同一大类，但主要解决不同问题。

---

---

## Q303-CAF-Well-Architected题

**题目：** A company's application developers need to quickly provision and manage AWS services by using scripts. Which AWS offering should the developers use to meet these requirements?。

**选项：**

- A. AWS CLI
- B. AWS CodeBuild
- C. AWS Cloud Adoption Framework (AWS CAF)
- D. AWS Systems Manager Session Manager

**主分类：** C4-26 CAF-Well-Architected题。

**题库记录答案：** `A`。

**社区投票：** A 100%

### Q303.1-题干怎么拆

现有题库没有提供独立 explanation。

这里按题干中的动作、对象和所有选项的服务定位进行比较。

### Q303.2-每个选项的定位

| 选项 | 题库内容 | 服务/概念定位 | 题库答案关系 |
|---|---|---|---|
| A | AWS CLI | 该选项是题库中的概念/服务描述。现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为正确选项 |
| B | AWS CodeBuild | AWS CodeBuild：托管代码构建与测试服务。 | 题库记录为非正确选项 |
| C | AWS Cloud Adoption Framework (AWS CAF) | AWS CAF：帮助组织规划和推进云采用与业务/组织转型，包含六个 Perspectives。 | 题库记录为非正确选项 |
| D | AWS Systems Manager Session Manager | AWS Systems Manager：集中运维和自动化管理 AWS/混合环境中的节点与资源。 | 题库记录为非正确选项 |

### Q303.3-为什么题库会这样选

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

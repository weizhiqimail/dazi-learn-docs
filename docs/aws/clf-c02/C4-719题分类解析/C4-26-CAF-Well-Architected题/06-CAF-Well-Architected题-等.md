---
id: 06-CAF-Well-Architected题-等
sidebar_position: 6
---

# C4-26-CAF-Well-Architected题-CAF-Well-Architected题与CAF-Well-Architected题与CAF-Well-Architected题与CAF-Well-Architected题与CAF-Well-Architected题与CAF-Well-Architected题

> 本篇是《C4-26-CAF-Well-Architected题》的第6个分篇，主要包含：CAF-Well-Architected题、CAF-Well-Architected题、CAF-Well-Architected题、CAF-Well-Architected题、CAF-Well-Architected题、CAF-Well-Architected题。

## Q356-CAF-Well-Architected题

**题目：** Which of the following are pillars of the AWS Well-Architected Framework? (Choose two.)。

**选项：**

- A. Resource scalability
- B. Performance efficiency
- C. System elasticity
- D. Agile development
- E. Operational excellence

**主分类：** C4-26 CAF-Well-Architected题。

**题库记录答案：** `BE`。

**需求/考点标签：** 工作负载架构评审。

**社区投票：** BE 100%

### Q356.1-题干怎么拆

这道题先识别的不是某个服务名，而是这些约束：**工作负载架构评审**。

判断时应该先找到与这些约束同层、同数据模型或同运维目标的服务，再排除“看起来也属于 AWS，但解决的是另一个层面问题”的选项。

### Q356.2-每个选项的定位

| 选项 | 题库内容 | 服务/概念定位 | 题库答案关系 |
|---|---|---|---|
| A | Resource scalability | 可扩展性关注系统承载更大规模工作负载的能力。 | 题库记录为非正确选项 |
| B | Performance efficiency | 该选项是题库中的概念/服务描述。现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为正确选项 |
| C | System elasticity | 弹性是资源随当前负载自动扩大或缩小。 | 题库记录为非正确选项 |
| D | Agile development | Agility 强调快速获取资源、实验和交付业务。 | 题库记录为非正确选项 |
| E | Operational excellence | 该选项是题库中的概念/服务描述。现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为正确选项 |

### Q356.3-为什么题库会这样选

题库记录的正确选项定位为：该选项是题库中的概念/服务描述。

现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。

该选项是题库中的概念/服务描述。

现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。

它与题干要求的对象/约束直接对应。

其余选项虽然可能也属于同一大类，但主要解决不同问题。

---

---

## Q358-CAF-Well-Architected题

**题目：** Which design principles should a company apply to AWS Cloud workloads to maximize sustainability and minimize environmental impact? (Choose two.)。

**选项：**

- A. Maximize utilization of Amazon EC2 instances.
- B. Minimize utilization of Amazon EC2 instances.
- C. Minimize usage of managed services.
- D. Force frequent application reinstallations by users.
- E. Reduce the need for users to reinstall applications.

**主分类：** C4-26 CAF-Well-Architected题。

**题库记录答案：** `AE`。

**社区投票：** AE 100%

### Q358.1-题干怎么拆

现有题库没有提供独立 explanation。

这里按题干中的动作、对象和所有选项的服务定位进行比较。

### Q358.2-每个选项的定位

| 选项 | 题库内容 | 服务/概念定位 | 题库答案关系 |
|---|---|---|---|
| A | Maximize utilization of Amazon EC2 instances. | Amazon EC2：可配置虚拟服务器，适合需要 OS/实例级控制的计算工作负载。 | 题库记录为正确选项 |
| B | Minimize utilization of Amazon EC2 instances. | Amazon EC2：可配置虚拟服务器，适合需要 OS/实例级控制的计算工作负载。 | 题库记录为非正确选项 |
| C | Minimize usage of managed services. | 该选项是题库中的概念/服务描述。现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为非正确选项 |
| D | Force frequent application reinstallations by users. | 该选项是题库中的概念/服务描述。现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为非正确选项 |
| E | Reduce the need for users to reinstall applications. | 该选项是题库中的概念/服务描述。现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为正确选项 |

### Q358.3-为什么题库会这样选

题库记录的正确选项定位为：Amazon EC2：可配置虚拟服务器，适合需要 OS/实例级控制的计算工作负载。

该选项是题库中的概念/服务描述。

现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。

它与题干要求的对象/约束直接对应。

其余选项虽然可能也属于同一大类，但主要解决不同问题。

---

---

## Q379-CAF-Well-Architected题

**题目：** Which AWS Cloud Adoption Framework (AWS CAF) capability belongs to the business perspective?。

**选项：**

- A. Program and project management
- B. Data science
- C. Observability
- D. Change and release management

**主分类：** C4-26 CAF-Well-Architected题。

**题库记录答案：** `B`。

**需求/考点标签：** 组织云采用准备度。

**社区投票：** B 90%, A 10%。

### Q379.1-题干怎么拆

这道题先识别的不是某个服务名，而是这些约束：**组织云采用准备度**。

判断时应该先找到与这些约束同层、同数据模型或同运维目标的服务，再排除“看起来也属于 AWS，但解决的是另一个层面问题”的选项。

### Q379.2-每个选项的定位

| 选项 | 题库内容 | 服务/概念定位 | 题库答案关系 |
|---|---|---|---|
| A | Program and project management | 该选项是题库中的概念/服务描述。现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为非正确选项 |
| B | Data science | 该选项是题库中的概念/服务描述。现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为正确选项 |
| C | Observability | 该选项是题库中的概念/服务描述。现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为非正确选项 |
| D | Change and release management | 该选项是题库中的概念/服务描述。现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为非正确选项 |

### Q379.3-为什么题库会这样选

题库记录的正确选项定位为：该选项是题库中的概念/服务描述。

现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。

它与题干要求的对象/约束直接对应。

其余选项虽然可能也属于同一大类，但主要解决不同问题。

---

---

## Q381-CAF-Well-Architected题

**题目：** Which perspective in the AWS Cloud Adoption Framework (AWS CAF) includes a capability for well-designed data and analytics architecture?。

**选项：**

- A. Security
- B. Governance
- C. Operations
- D. Platform

**主分类：** C4-26 CAF-Well-Architected题。

**题库记录答案：** `D`。

**需求/考点标签：** 组织云采用准备度。

**社区投票：** D 100%

### Q381.1-题干怎么拆

这道题先识别的不是某个服务名，而是这些约束：**组织云采用准备度**。

判断时应该先找到与这些约束同层、同数据模型或同运维目标的服务，再排除“看起来也属于 AWS，但解决的是另一个层面问题”的选项。

### Q381.2-每个选项的定位

| 选项 | 题库内容 | 服务/概念定位 | 题库答案关系 |
|---|---|---|---|
| A | Security | 该选项是题库中的概念/服务描述。现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为非正确选项 |
| B | Governance | 该选项是题库中的概念/服务描述。现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为非正确选项 |
| C | Operations | 该选项是题库中的概念/服务描述。现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为非正确选项 |
| D | Platform | 该选项是题库中的概念/服务描述。现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为正确选项 |

### Q381.3-为什么题库会这样选

题库记录的正确选项定位为：该选项是题库中的概念/服务描述。

现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。

它与题干要求的对象/约束直接对应。

其余选项虽然可能也属于同一大类，但主要解决不同问题。

---

---

## Q382-CAF-Well-Architected题

**题目：** Which options are AWS Cloud Adoption Framework (AWS CAF) people perspective capabilities? (Choose two.)。

**选项：**

- A. Organizational alignment
- B. Portfolio management
- C. Organization design
- D. Risk management
- E. Modern application development

**主分类：** C4-26 CAF-Well-Architected题。

**题库记录答案：** `AC`。

**需求/考点标签：** 组织云采用准备度。

**社区投票：** AC 100%

### Q382.1-题干怎么拆

这道题先识别的不是某个服务名，而是这些约束：**组织云采用准备度**。

判断时应该先找到与这些约束同层、同数据模型或同运维目标的服务，再排除“看起来也属于 AWS，但解决的是另一个层面问题”的选项。

### Q382.2-每个选项的定位

| 选项 | 题库内容 | 服务/概念定位 | 题库答案关系 |
|---|---|---|---|
| A | Organizational alignment | 该选项是题库中的概念/服务描述。现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为正确选项 |
| B | Portfolio management | 该选项是题库中的概念/服务描述。现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为非正确选项 |
| C | Organization design | 该选项是题库中的概念/服务描述。现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为正确选项 |
| D | Risk management | 该选项是题库中的概念/服务描述。现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为非正确选项 |
| E | Modern application development | 该选项是题库中的概念/服务描述。现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为非正确选项 |

### Q382.3-为什么题库会这样选

题库记录的正确选项定位为：该选项是题库中的概念/服务描述。

现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。

该选项是题库中的概念/服务描述。

现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。

它与题干要求的对象/约束直接对应。

其余选项虽然可能也属于同一大类，但主要解决不同问题。

---

---

## Q383-CAF-Well-Architected题

**题目：** A company needs a bridge between technology and business to help evolve to a culture of continuous growth and learning. Which perspective in the AWS Cloud Adoption Framework (AWS CAF) serves as this bridge?。

**选项：**

- A. People
- B. Governance
- C. Operations
- D. Security

**主分类：** C4-26 CAF-Well-Architected题。

**题库记录答案：** `A`。

**需求/考点标签：** 组织云采用准备度。

**社区投票：** A 100%

### Q383.1-题干怎么拆

这道题先识别的不是某个服务名，而是这些约束：**组织云采用准备度**。

判断时应该先找到与这些约束同层、同数据模型或同运维目标的服务，再排除“看起来也属于 AWS，但解决的是另一个层面问题”的选项。

### Q383.2-每个选项的定位

| 选项 | 题库内容 | 服务/概念定位 | 题库答案关系 |
|---|---|---|---|
| A | People | 该选项是题库中的概念/服务描述。现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为正确选项 |
| B | Governance | 该选项是题库中的概念/服务描述。现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为非正确选项 |
| C | Operations | 该选项是题库中的概念/服务描述。现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为非正确选项 |
| D | Security | 该选项是题库中的概念/服务描述。现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为非正确选项 |

### Q383.3-为什么题库会这样选

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

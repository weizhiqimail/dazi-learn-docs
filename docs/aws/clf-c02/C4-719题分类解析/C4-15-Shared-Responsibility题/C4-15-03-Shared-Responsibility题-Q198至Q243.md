---
id: C4-15-03-Shared-Responsibility题-Q198至Q243
sidebar_position: 3
---

# C4-15-03-Shared-Responsibility题-Q198至Q243

> 本篇是《C4-15-Shared-Responsibility题》的第3个分篇，主要包含：Shared-Responsibility题、Shared-Responsibility题、Shared-Responsibility题、Shared-Responsibility题、Shared-Responsibility题。

## Q198-Shared-Responsibility题

**题目：** Which task is a responsibility of AWS, according to the AWS shared responsibility model?。

**选项：**

- A. Configure identity and access management for applications.
- B. Manage encryption options for data that is stored on AWS.
- C. Configure security groups for Amazon EC2 instances.
- D. Maintain the physical hardware of the infrastructure.

**主分类：** C4-15 Shared-Responsibility题。

**题库记录答案：** `D`。

**需求/考点标签：** Shared Responsibility。

**社区投票：** D 90%, B 10%。

### Q198.1-题干怎么拆

这道题先识别的不是某个服务名，而是这些约束：**Shared Responsibility**。

判断时应该先找到与这些约束同层、同数据模型或同运维目标的服务，再排除“看起来也属于 AWS，但解决的是另一个层面问题”的选项。

### Q198.2-每个选项的定位

| 选项 | 题库内容 | 服务/概念定位 | 题库答案关系 |
|---|---|---|---|
| A | Configure identity and access management for applications. | 该选项是题库中的概念/服务描述。现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为非正确选项 |
| B | Manage encryption options for data that is stored on AWS. | 该选项描述 Shared Responsibility 中 AWS 侧的基础设施责任。 | 题库记录为非正确选项 |
| C | Configure security groups for Amazon EC2 instances. | Security Group：资源/ENI 级有状态虚拟防火墙。Amazon EC2：可配置虚拟服务器，适合需要 OS/实例级控制的计算工作负载。 | 题库记录为非正确选项 |
| D | Maintain the physical hardware of the infrastructure. | 该选项是题库中的概念/服务描述。现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为正确选项 |

### Q198.3-为什么题库会这样选

题库记录的正确选项定位为：该选项是题库中的概念/服务描述。

现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。

它与题干要求的对象/约束直接对应。

其余选项虽然可能也属于同一大类，但主要解决不同问题。

---

---

## Q200-Shared-Responsibility题

**题目：** Which actions are the responsibility of AWS, according to the AWS shared responsibility model? (Choose two.)。

**选项：**

- A. Securing the virtualization layer
- B. Patching the operating system on Amazon EC2 instances
- C. Enforcing a strict password policy for IAM users
- D. Patching the operating system on Amazon RDS instances
- E. Configuring security groups and network ACLs

**主分类：** C4-15 Shared-Responsibility题。

**题库记录答案：** `AD`。

**需求/考点标签：** Shared Responsibility。

**社区投票：** AD 85%, AE 15%。

### Q200.1-题干怎么拆

这道题先识别的不是某个服务名，而是这些约束：**Shared Responsibility**。

判断时应该先找到与这些约束同层、同数据模型或同运维目标的服务，再排除“看起来也属于 AWS，但解决的是另一个层面问题”的选项。

### Q200.2-每个选项的定位

| 选项 | 题库内容 | 服务/概念定位 | 题库答案关系 |
|---|---|---|---|
| A | Securing the virtualization layer | 该选项是题库中的概念/服务描述。现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为正确选项 |
| B | Patching the operating system on Amazon EC2 instances | Amazon EC2：可配置虚拟服务器，适合需要 OS/实例级控制的计算工作负载。 | 题库记录为非正确选项 |
| C | Enforcing a strict password policy for IAM users | AWS IAM：AWS 身份、认证授权与权限策略核心服务。 | 题库记录为非正确选项 |
| D | Patching the operating system on Amazon RDS instances | Amazon RDS：托管关系数据库服务，负责大量数据库基础设施运维。 | 题库记录为正确选项 |
| E | Configuring security groups and network ACLs | Security Group：资源/ENI 级有状态虚拟防火墙。Network ACL：Subnet 级无状态网络访问控制列表。 | 题库记录为非正确选项 |

### Q200.3-为什么题库会这样选

题库记录的正确选项定位为：该选项是题库中的概念/服务描述。

现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。

Amazon RDS：托管关系数据库服务，负责大量数据库基础设施运维。

它与题干要求的对象/约束直接对应。

其余选项虽然可能也属于同一大类，但主要解决不同问题。

---

---

## Q239-Shared-Responsibility题

**题目：** A company has deployed an Amazon EC2 instance. Which option is an AWS responsibility under the AWS shared responsibility model?。

**选项：**

- A. Managing and encrypting application data
- B. Installing updates and security patches of guest operating system
- C. Configuration of infrastructure devices
- D. Configuration of security groups on each instance

**主分类：** C4-15 Shared-Responsibility题。

**题库记录答案：** `C`。

**需求/考点标签：** Shared Responsibility。

**社区投票：** C 88%, B 12%。

### Q239.1-题干怎么拆

这道题先识别的不是某个服务名，而是这些约束：**Shared Responsibility**。

判断时应该先找到与这些约束同层、同数据模型或同运维目标的服务，再排除“看起来也属于 AWS，但解决的是另一个层面问题”的选项。

### Q239.2-每个选项的定位

| 选项 | 题库内容 | 服务/概念定位 | 题库答案关系 |
|---|---|---|---|
| A | Managing and encrypting application data | 该选项是题库中的概念/服务描述。现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为非正确选项 |
| B | Installing updates and security patches of guest operating system | 该选项是题库中的概念/服务描述。现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为非正确选项 |
| C | Configuration of infrastructure devices | 该选项是题库中的概念/服务描述。现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为正确选项 |
| D | Configuration of security groups on each instance | Security Group：资源/ENI 级有状态虚拟防火墙。 | 题库记录为非正确选项 |

### Q239.3-为什么题库会这样选

题库记录的正确选项定位为：该选项是题库中的概念/服务描述。

现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。

它与题干要求的对象/约束直接对应。

其余选项虽然可能也属于同一大类，但主要解决不同问题。

---

---

## Q241-Shared-Responsibility题

**题目：** A company is using Amazon DynamoDB for its application database. Which tasks are the responsibility of AWS, according to the AWS shared responsibility model? (Choose two.)。

**选项：**

- A. Classify data.
- B. Configure access permissions.
- C. Manage encryption options.
- D. Provide public endpoints to store and retrieve data.
- E. Manage the infrastructure layer and the operating system.

**主分类：** C4-15 Shared-Responsibility题。

**题库记录答案：** `DE`。

**需求/考点标签：** NoSQL自动扩展。

**社区投票：** DE 100%

### Q241.1-题干怎么拆

这道题先识别的不是某个服务名，而是这些约束：**NoSQL自动扩展**。

判断时应该先找到与这些约束同层、同数据模型或同运维目标的服务，再排除“看起来也属于 AWS，但解决的是另一个层面问题”的选项。

### Q241.2-每个选项的定位

| 选项 | 题库内容 | 服务/概念定位 | 题库答案关系 |
|---|---|---|---|
| A | Classify data. | 该选项是题库中的概念/服务描述。现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为非正确选项 |
| B | Configure access permissions. | 该选项是题库中的概念/服务描述。现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为非正确选项 |
| C | Manage encryption options. | 该选项是题库中的概念/服务描述。现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为非正确选项 |
| D | Provide public endpoints to store and retrieve data. | 该选项是题库中的概念/服务描述。现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为正确选项 |
| E | Manage the infrastructure layer and the operating system. | 该选项是题库中的概念/服务描述。现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为正确选项 |

### Q241.3-为什么题库会这样选

题库记录的正确选项定位为：该选项是题库中的概念/服务描述。

现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。

该选项是题库中的概念/服务描述。

现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。

它与题干要求的对象/约束直接对应。

其余选项虽然可能也属于同一大类，但主要解决不同问题。

---

---

## Q243-Shared-Responsibility题

**题目：** Which maintenance task is the customer’s responsibility, according to the AWS shared responsibility model?。

**选项：**

- A. Physical connectivity among Availability Zones
- B. Network switch maintenance
- C. Hardware updates and firmware patches
- D. Amazon EC2 updates and security patches

**主分类：** C4-15 Shared-Responsibility题。

**题库记录答案：** `D`。

**需求/考点标签：** Shared Responsibility。

**社区投票：** D 100%

### Q243.1-题干怎么拆

这道题先识别的不是某个服务名，而是这些约束：**Shared Responsibility**。

判断时应该先找到与这些约束同层、同数据模型或同运维目标的服务，再排除“看起来也属于 AWS，但解决的是另一个层面问题”的选项。

### Q243.2-每个选项的定位

| 选项 | 题库内容 | 服务/概念定位 | 题库答案关系 |
|---|---|---|---|
| A | Physical connectivity among Availability Zones | Availability Zone 是 Region 内相互隔离的故障域/部署位置。 | 题库记录为非正确选项 |
| B | Network switch maintenance | 该选项是题库中的概念/服务描述。现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为非正确选项 |
| C | Hardware updates and firmware patches | 该选项是题库中的概念/服务描述。现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为非正确选项 |
| D | Amazon EC2 updates and security patches | Amazon EC2：可配置虚拟服务器，适合需要 OS/实例级控制的计算工作负载。 | 题库记录为正确选项 |

### Q243.3-为什么题库会这样选

题库记录的正确选项定位为：Amazon EC2：可配置虚拟服务器，适合需要 OS/实例级控制的计算工作负载。

它与题干要求的对象/约束直接对应。

其余选项虽然可能也属于同一大类，但主要解决不同问题。

---

## 本篇概述

- 本篇梳理了Shared-Responsibility题相关的核心知识、适用场景与判断要点。
- 本篇梳理了Shared-Responsibility题相关的核心知识、适用场景与判断要点。
- 本篇梳理了Shared-Responsibility题相关的核心知识、适用场景与判断要点。
- 本篇梳理了Shared-Responsibility题相关的核心知识、适用场景与判断要点。
- 本篇梳理了Shared-Responsibility题相关的核心知识、适用场景与判断要点。

[返回本章总述](./C4-15-00-章节总述.md)｜[查看本章概述](./C4-15-99-章节概述.md)

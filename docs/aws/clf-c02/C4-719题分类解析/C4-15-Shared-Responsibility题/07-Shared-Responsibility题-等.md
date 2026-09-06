---
id: 07-Shared-Responsibility题-等
sidebar_position: 7
---

# C4-15-Shared-Responsibility题-Shared-Responsibility题与Shared-Responsibility题与Shared-Responsibility题与Shared-Responsibility题与Shared-Responsibility题

> 本篇是《C4-15-Shared-Responsibility题》的第7个分篇，主要包含：Shared-Responsibility题、Shared-Responsibility题、Shared-Responsibility题、Shared-Responsibility题、Shared-Responsibility题。

## Q545-Shared-Responsibility题

**题目：** A company uses Amazon Aurora as its database service. The company wants to encrypt its databases and database backups. Which party manages the encryption of the database clusters and database snapshots, according to the AWS shared responsibility model?

**选项：**

- A. AWS
- B. The company
- C. AWS Marketplace partners
- D. Third-party partners

**主分类：** C4-15 Shared-Responsibility题。

**题库记录答案：** `B`。

**需求/考点标签：** Shared Responsibility / Encryption / Relational Database。

**社区投票：** B 86%, A 14%。

### Q545.1-题干怎么拆

这道题先识别的不是某个服务名，而是这些约束：**Shared Responsibility、Encryption、Relational Database**。

判断时应该先找到与这些约束同层、同数据模型或同运维目标的服务，再排除“看起来也属于 AWS，但解决的是另一个层面问题”的选项。

### Q545.2-每个选项的定位

| 选项 | 题库内容 | 服务/概念定位 | 题库答案关系 |
|---|---|---|---|
| A | AWS | 该选项是题库中的概念/服务描述。现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为非正确选项 |
| B | The company | 该选项是题库中的概念/服务描述。现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为正确选项 |
| C | AWS Marketplace partners | AWS Marketplace：查找、购买和部署第三方软件、数据与服务的数字目录。 | 题库记录为非正确选项 |
| D | Third-party partners | 该选项是题库中的概念/服务描述。现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为非正确选项 |

### Q545.3-为什么题库会这样选

题库记录的正确选项定位为：该选项是题库中的概念/服务描述。

现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。

它与题干要求的对象/约束直接对应。

其余选项虽然可能也属于同一大类，但主要解决不同问题。

---

---

## Q592-Shared-Responsibility题

**题目：** Which task is the responsibility of AWS, according to the AWS shared responsibility model?。

**选项：**

- A. Apply guest operating system patches to Amazon EC2 instances.
- B. Provide monitoring of human resources information management (HRIM) systems.
- C. Perform automated backups of Amazon RDS instances.
- D. Optimize the costs of running AWS services.

**主分类：** C4-15 Shared-Responsibility题。

**题库记录答案：** `C`。

**需求/考点标签：** Shared Responsibility。

**社区投票：** C 100%

### Q592.1-题干怎么拆

这道题先识别的不是某个服务名，而是这些约束：**Shared Responsibility**。

判断时应该先找到与这些约束同层、同数据模型或同运维目标的服务，再排除“看起来也属于 AWS，但解决的是另一个层面问题”的选项。

### Q592.2-每个选项的定位

| 选项 | 题库内容 | 服务/概念定位 | 题库答案关系 |
|---|---|---|---|
| A | Apply guest operating system patches to Amazon EC2 instances. | Amazon EC2：可配置虚拟服务器，适合需要 OS/实例级控制的计算工作负载。 | 题库记录为非正确选项 |
| B | Provide monitoring of human resources information management (HRIM) systems. | 该选项是题库中的概念/服务描述。现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为非正确选项 |
| C | Perform automated backups of Amazon RDS instances. | Amazon RDS：托管关系数据库服务，负责大量数据库基础设施运维。 | 题库记录为正确选项 |
| D | Optimize the costs of running AWS services. | 该选项是题库中的概念/服务描述。现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为非正确选项 |

### Q592.3-为什么题库会这样选

题库记录的正确选项定位为：Amazon RDS：托管关系数据库服务，负责大量数据库基础设施运维。

它与题干要求的对象/约束直接对应。

其余选项虽然可能也属于同一大类，但主要解决不同问题。

---

---

## Q609-Shared-Responsibility题

**题目：** What is a customer responsibility under the AWS shared responsibility model when using AWS Lambda?。

**选项：**

- A. Maintenance of the underlying Lambda hardware.
- B. Maintenance of the Lambda networking infrastructure.
- C. The code and libraries that run in the Lambda functions.
- D. The Lambda server software.

**主分类：** C4-15 Shared-Responsibility题。

**题库记录答案：** `C`。

**需求/考点标签：** Shared Responsibility / Serverless。

**社区投票：** C 100%

### Q609.1-题干怎么拆

这道题先识别的不是某个服务名，而是这些约束：**Shared Responsibility、Serverless**。

判断时应该先找到与这些约束同层、同数据模型或同运维目标的服务，再排除“看起来也属于 AWS，但解决的是另一个层面问题”的选项。

### Q609.2-每个选项的定位

| 选项 | 题库内容 | 服务/概念定位 | 题库答案关系 |
|---|---|---|---|
| A | Maintenance of the underlying Lambda hardware. | AWS Lambda：事件驱动的 Serverless 函数运行环境，无需管理服务器。 | 题库记录为非正确选项 |
| B | Maintenance of the Lambda networking infrastructure. | AWS Lambda：事件驱动的 Serverless 函数运行环境，无需管理服务器。 | 题库记录为非正确选项 |
| C | The code and libraries that run in the Lambda functions. | AWS Lambda：事件驱动的 Serverless 函数运行环境，无需管理服务器。 | 题库记录为正确选项 |
| D | The Lambda server software. | AWS Lambda：事件驱动的 Serverless 函数运行环境，无需管理服务器。 | 题库记录为非正确选项 |

### Q609.3-为什么题库会这样选

题库记录的正确选项定位为：AWS Lambda：事件驱动的 Serverless 函数运行环境，无需管理服务器。

它与题干要求的对象/约束直接对应。

其余选项虽然可能也属于同一大类，但主要解决不同问题。

---

---

## Q610-Shared-Responsibility题

**题目：** Which tasks are the responsibility of AWS according to the AWS shared responsibility model? (Choose two.)。

**选项：**

- A. Configure AWS Identity and Access Management (IAM).
- B. Configure security groups on Amazon EC2 instances.
- C. Secure the access of physical AWS facilities.
- D. Patch applications that run on Amazon EC2 instances.
- E. Perform infrastructure patching and maintenance.

**主分类：** C4-15 Shared-Responsibility题。

**题库记录答案：** `CE`。

**需求/考点标签：** Shared Responsibility。

**社区投票：** CE 100%

### Q610.1-题干怎么拆

这道题先识别的不是某个服务名，而是这些约束：**Shared Responsibility**。

判断时应该先找到与这些约束同层、同数据模型或同运维目标的服务，再排除“看起来也属于 AWS，但解决的是另一个层面问题”的选项。

### Q610.2-每个选项的定位

| 选项 | 题库内容 | 服务/概念定位 | 题库答案关系 |
|---|---|---|---|
| A | Configure AWS Identity and Access Management (IAM). | AWS IAM：AWS 身份、认证授权与权限策略核心服务。 | 题库记录为非正确选项 |
| B | Configure security groups on Amazon EC2 instances. | Security Group：资源/ENI 级有状态虚拟防火墙。Amazon EC2：可配置虚拟服务器，适合需要 OS/实例级控制的计算工作负载。 | 题库记录为非正确选项 |
| C | Secure the access of physical AWS facilities. | 该选项是题库中的概念/服务描述。现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为正确选项 |
| D | Patch applications that run on Amazon EC2 instances. | Amazon EC2：可配置虚拟服务器，适合需要 OS/实例级控制的计算工作负载。 | 题库记录为非正确选项 |
| E | Perform infrastructure patching and maintenance. | 该选项是题库中的概念/服务描述。现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为正确选项 |

### Q610.3-为什么题库会这样选

题库记录的正确选项定位为：该选项是题库中的概念/服务描述。

现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。

该选项是题库中的概念/服务描述。

现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。

它与题干要求的对象/约束直接对应。

其余选项虽然可能也属于同一大类，但主要解决不同问题。

---

---

## Q627-Shared-Responsibility题

**题目：** Which tasks are responsibilities of the customer, according to the AWS shared responsibility model? (Choose two.)。

**选项：**

- A. Secure the virtualization layer.
- B. Encrypt data and maintain data integrity.
- C. Patch the Amazon RDS operating system.
- D. Maintain identity and access management controls.
- E. Secure Availability Zones.

**主分类：** C4-15 Shared-Responsibility题。

**题库记录答案：** `BD`。

**需求/考点标签：** Shared Responsibility。

**社区投票：** BD 100%

### Q627.1-题干怎么拆

这道题先识别的不是某个服务名，而是这些约束：**Shared Responsibility**。

判断时应该先找到与这些约束同层、同数据模型或同运维目标的服务，再排除“看起来也属于 AWS，但解决的是另一个层面问题”的选项。

### Q627.2-每个选项的定位

| 选项 | 题库内容 | 服务/概念定位 | 题库答案关系 |
|---|---|---|---|
| A | Secure the virtualization layer. | 该选项是题库中的概念/服务描述。现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为非正确选项 |
| B | Encrypt data and maintain data integrity. | 该选项是题库中的概念/服务描述。现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为正确选项 |
| C | Patch the Amazon RDS operating system. | Amazon RDS：托管关系数据库服务，负责大量数据库基础设施运维。 | 题库记录为非正确选项 |
| D | Maintain identity and access management controls. | 该选项是题库中的概念/服务描述。现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为正确选项 |
| E | Secure Availability Zones. | Availability Zone 是 Region 内相互隔离的故障域/部署位置。 | 题库记录为非正确选项 |

### Q627.3-为什么题库会这样选

题库记录的正确选项定位为：该选项是题库中的概念/服务描述。

现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。

该选项是题库中的概念/服务描述。

现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。

它与题干要求的对象/约束直接对应。

其余选项虽然可能也属于同一大类，但主要解决不同问题。

---

## 本篇概述

- 本篇梳理了Shared-Responsibility题相关的核心知识、适用场景与判断要点。
- 本篇梳理了Shared-Responsibility题相关的核心知识、适用场景与判断要点。
- 本篇梳理了Shared-Responsibility题相关的核心知识、适用场景与判断要点。
- 本篇梳理了Shared-Responsibility题相关的核心知识、适用场景与判断要点。
- 本篇梳理了Shared-Responsibility题相关的核心知识、适用场景与判断要点。

[返回本章总述](./00-总述.md)｜[查看本章概述](./99-概述.md)

---
id: C4-15-01-Shared-Responsibility题-Q5至Q105
sidebar_position: 1
---

# C4-15-01-Shared-Responsibility题-Q5至Q105

> 本篇是《C4-15-Shared-Responsibility题》的第1个分篇，主要包含：Shared-Responsibility题、Shared-Responsibility题、Shared-Responsibility题、Shared-Responsibility题、Shared-Responsibility题、Shared-Responsibility题。

## Q5-Shared-Responsibility题

**题目：** Which option is a customer responsibility when using Amazon DynamoDB under the AWS Shared Responsibility Model?。

**选项：**

- A. Physical security of DynamoDB
- B. Patching of DynamoDB
- C. Access to DynamoDB tables
- D. Encryption of data at rest in DynamoDB

**主分类：** C4-15 Shared-Responsibility题。

**题库记录答案：** `C`。

**需求/考点标签：** NoSQL自动扩展。

**社区投票：** C 88%, Other 12%。

### Q5.1-题干怎么拆

这道题先识别的不是某个服务名，而是这些约束：**NoSQL自动扩展**。

判断时应该先找到与这些约束同层、同数据模型或同运维目标的服务，再排除“看起来也属于 AWS，但解决的是另一个层面问题”的选项。

### Q5.2-每个选项的定位

| 选项 | 题库内容 | 服务/概念定位 | 题库答案关系 |
|---|---|---|---|
| A | Physical security of DynamoDB | Amazon DynamoDB：Serverless NoSQL Key-Value/Document 数据库，适合高规模、低延迟访问。 | 题库记录为非正确选项 |
| B | Patching of DynamoDB | Amazon DynamoDB：Serverless NoSQL Key-Value/Document 数据库，适合高规模、低延迟访问。 | 题库记录为非正确选项 |
| C | Access to DynamoDB tables | Amazon DynamoDB：Serverless NoSQL Key-Value/Document 数据库，适合高规模、低延迟访问。 | 题库记录为正确选项 |
| D | Encryption of data at rest in DynamoDB | Amazon DynamoDB：Serverless NoSQL Key-Value/Document 数据库，适合高规模、低延迟访问。 | 题库记录为非正确选项 |

### Q5.3-为什么题库会这样选

题库记录的正确选项定位为：Amazon DynamoDB：Serverless NoSQL Key-Value/Document 数据库，适合高规模、低延迟访问。

它与题干要求的对象/约束直接对应。

其余选项虽然可能也属于同一大类，但主要解决不同问题。

---

---

## Q29-Shared-Responsibility题

**题目：** Which tasks are customer responsibilities, according to the AWS shared responsibility model? (Choose two.)。

**选项：**

- A. Configure the AWS provided security group firewall.
- B. Classify company assets in the AWS Cloud.
- C. Determine which Availability Zones to use for Amazon S3 buckets.
- D. Patch or upgrade Amazon DynamoDB.
- E. Select Amazon EC2 instances to run AWS Lambda on.

**主分类：** C4-15 Shared-Responsibility题。

**题库记录答案：** `AB`。

**需求/考点标签：** Shared Responsibility。

**社区投票：** AB 92%, Other 8%。

### Q29.1-题干怎么拆

这道题先识别的不是某个服务名，而是这些约束：**Shared Responsibility**。

判断时应该先找到与这些约束同层、同数据模型或同运维目标的服务，再排除“看起来也属于 AWS，但解决的是另一个层面问题”的选项。

### Q29.2-每个选项的定位

| 选项 | 题库内容 | 服务/概念定位 | 题库答案关系 |
|---|---|---|---|
| A | Configure the AWS provided security group firewall. | Security Group：资源/ENI 级有状态虚拟防火墙。 | 题库记录为正确选项 |
| B | Classify company assets in the AWS Cloud. | 该选项是题库中的概念/服务描述。现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为正确选项 |
| C | Determine which Availability Zones to use for Amazon S3 buckets. | Amazon S3：高耐久、可扩展的对象存储，以 Bucket/Object 组织数据。 | 题库记录为非正确选项 |
| D | Patch or upgrade Amazon DynamoDB. | Amazon DynamoDB：Serverless NoSQL Key-Value/Document 数据库，适合高规模、低延迟访问。 | 题库记录为非正确选项 |
| E | Select Amazon EC2 instances to run AWS Lambda on. | Amazon EC2：可配置虚拟服务器，适合需要 OS/实例级控制的计算工作负载。AWS Lambda：事件驱动的 Serverless 函数运行环境，无需管理服务器。 | 题库记录为非正确选项 |

### Q29.3-为什么题库会这样选

题库记录的正确选项定位为：Security Group：资源/ENI 级有状态虚拟防火墙。

该选项是题库中的概念/服务描述。

现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。

它与题干要求的对象/约束直接对应。

其余选项虽然可能也属于同一大类，但主要解决不同问题。

---

---

## Q42-Shared-Responsibility题

**题目：** What is a customer responsibility when using AWS Lambda according to the AWS shared responsibility model?。

**选项：**

- A. Managing the code within the Lambda function
- B. Confirming that the hardware is working in the data center
- C. Patching the operating system
- D. Shutting down Lambda functions when they are no longer in use

**主分类：** C4-15 Shared-Responsibility题。

**题库记录答案：** `A`。

**需求/考点标签：** Shared Responsibility / Serverless。

**社区投票：** A 100%

### Q42.1-题干怎么拆

这道题先识别的不是某个服务名，而是这些约束：**Shared Responsibility、Serverless**。

判断时应该先找到与这些约束同层、同数据模型或同运维目标的服务，再排除“看起来也属于 AWS，但解决的是另一个层面问题”的选项。

### Q42.2-每个选项的定位

| 选项 | 题库内容 | 服务/概念定位 | 题库答案关系 |
|---|---|---|---|
| A | Managing the code within the Lambda function | AWS Lambda：事件驱动的 Serverless 函数运行环境，无需管理服务器。 | 题库记录为正确选项 |
| B | Confirming that the hardware is working in the data center | 该选项是题库中的概念/服务描述。现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为非正确选项 |
| C | Patching the operating system | 该选项是题库中的概念/服务描述。现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为非正确选项 |
| D | Shutting down Lambda functions when they are no longer in use | AWS Lambda：事件驱动的 Serverless 函数运行环境，无需管理服务器。 | 题库记录为非正确选项 |

### Q42.3-为什么题库会这样选

题库记录的正确选项定位为：AWS Lambda：事件驱动的 Serverless 函数运行环境，无需管理服务器。

它与题干要求的对象/约束直接对应。

其余选项虽然可能也属于同一大类，但主要解决不同问题。

---

---

## Q56-Shared-Responsibility题

**题目：** A company is using Amazon DynamoDB. Which task is the company’s responsibility, according to the AWS shared responsibility model?。

**选项：**

- A. Patch the operating system.
- B. Provision hosts.
- C. Manage database access permissions.
- D. Secure the operating system.

**主分类：** C4-15 Shared-Responsibility题。

**题库记录答案：** `C`。

**需求/考点标签：** NoSQL自动扩展。

**社区投票：** C 100%

### Q56.1-题干怎么拆

这道题先识别的不是某个服务名，而是这些约束：**NoSQL自动扩展**。

判断时应该先找到与这些约束同层、同数据模型或同运维目标的服务，再排除“看起来也属于 AWS，但解决的是另一个层面问题”的选项。

### Q56.2-每个选项的定位

| 选项 | 题库内容 | 服务/概念定位 | 题库答案关系 |
|---|---|---|---|
| A | Patch the operating system. | 该选项是题库中的概念/服务描述。现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为非正确选项 |
| B | Provision hosts. | 该选项是题库中的概念/服务描述。现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为非正确选项 |
| C | Manage database access permissions. | 该选项是题库中的概念/服务描述。现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为正确选项 |
| D | Secure the operating system. | 该选项是题库中的概念/服务描述。现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为非正确选项 |

### Q56.3-为什么题库会这样选

题库记录的正确选项定位为：该选项是题库中的概念/服务描述。

现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。

它与题干要求的对象/约束直接对应。

其余选项虽然可能也属于同一大类，但主要解决不同问题。

---

---

## Q79-Shared-Responsibility题

**题目：** Which task is the customer’s responsibility, according to the AWS shared responsibility model?。

**选项：**

- A. Maintain the security of the AWS Cloud.
- B. Configure firewalls and networks.
- C. Patch the operating system of Amazon RDS instances.
- D. Implement physical and environmental controls.

**主分类：** C4-15 Shared-Responsibility题。

**题库记录答案：** `B`。

**需求/考点标签：** Shared Responsibility。

**社区投票：** B 100%

### Q79.1-题干怎么拆

这道题先识别的不是某个服务名，而是这些约束：**Shared Responsibility**。

判断时应该先找到与这些约束同层、同数据模型或同运维目标的服务，再排除“看起来也属于 AWS，但解决的是另一个层面问题”的选项。

### Q79.2-每个选项的定位

| 选项 | 题库内容 | 服务/概念定位 | 题库答案关系 |
|---|---|---|---|
| A | Maintain the security of the AWS Cloud. | 该选项是题库中的概念/服务描述。现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为非正确选项 |
| B | Configure firewalls and networks. | 该选项是题库中的概念/服务描述。现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为正确选项 |
| C | Patch the operating system of Amazon RDS instances. | Amazon RDS：托管关系数据库服务，负责大量数据库基础设施运维。 | 题库记录为非正确选项 |
| D | Implement physical and environmental controls. | 该选项是题库中的概念/服务描述。现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为非正确选项 |

### Q79.3-为什么题库会这样选

题库记录的正确选项定位为：该选项是题库中的概念/服务描述。

现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。

它与题干要求的对象/约束直接对应。

其余选项虽然可能也属于同一大类，但主要解决不同问题。

---

---

## Q105-Shared-Responsibility题

**题目：** Which tasks are the customer’s responsibility, according to the AWS shared responsibility model? (Choose two.)。

**选项：**

- A. Establish the global infrastructure.
- B. Perform client-side data encryption.
- C. Configure IAM credentials.
- D. Secure edge locations.
- E. Patch Amazon RDS DB instances.

**主分类：** C4-15 Shared-Responsibility题。

**题库记录答案：** `BC`。

**需求/考点标签：** Shared Responsibility。

**社区投票：** BC 100%

### Q105.1-题干怎么拆

这道题先识别的不是某个服务名，而是这些约束：**Shared Responsibility**。

判断时应该先找到与这些约束同层、同数据模型或同运维目标的服务，再排除“看起来也属于 AWS，但解决的是另一个层面问题”的选项。

### Q105.2-每个选项的定位

| 选项 | 题库内容 | 服务/概念定位 | 题库答案关系 |
|---|---|---|---|
| A | Establish the global infrastructure. | 该选项是题库中的概念/服务描述。现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为非正确选项 |
| B | Perform client-side data encryption. | 该选项是题库中的概念/服务描述。现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为正确选项 |
| C | Configure IAM credentials. | AWS IAM：AWS 身份、认证授权与权限策略核心服务。 | 题库记录为正确选项 |
| D | Secure edge locations. | 该选项是题库中的概念/服务描述。现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为非正确选项 |
| E | Patch Amazon RDS DB instances. | Amazon RDS：托管关系数据库服务，负责大量数据库基础设施运维。 | 题库记录为非正确选项 |

### Q105.3-为什么题库会这样选

题库记录的正确选项定位为：该选项是题库中的概念/服务描述。

现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。

AWS IAM：AWS 身份、认证授权与权限策略核心服务。

它与题干要求的对象/约束直接对应。

其余选项虽然可能也属于同一大类，但主要解决不同问题。

---

## 本篇概述

- 本篇梳理了Shared-Responsibility题相关的核心知识、适用场景与判断要点。
- 本篇梳理了Shared-Responsibility题相关的核心知识、适用场景与判断要点。
- 本篇梳理了Shared-Responsibility题相关的核心知识、适用场景与判断要点。
- 本篇梳理了Shared-Responsibility题相关的核心知识、适用场景与判断要点。
- 本篇梳理了Shared-Responsibility题相关的核心知识、适用场景与判断要点。
- 本篇梳理了Shared-Responsibility题相关的核心知识、适用场景与判断要点。

[返回本章总述](./C4-15-00-章节总述.md)｜[查看本章概述](./C4-15-99-章节概述.md)

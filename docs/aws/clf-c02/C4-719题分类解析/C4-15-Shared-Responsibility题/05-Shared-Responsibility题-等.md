---
id: 05-Shared-Responsibility题-等
sidebar_position: 5
---

# C4-15-Shared-Responsibility题-Shared-Responsibility题与Shared-Responsibility题与Shared-Responsibility题与Shared-Responsibility题与Shared-Responsibility题

> 本篇是《C4-15-Shared-Responsibility题》的第5个分篇，主要包含：Shared-Responsibility题、Shared-Responsibility题、Shared-Responsibility题、Shared-Responsibility题、Shared-Responsibility题。

## Q384-Shared-Responsibility题

**题目：** Which option is a responsibility of AWS under the AWS shared responsibility model?。

**选项：**

- A. Application data security
- B. Patch management for applications that run on Amazon EC2 instances
- C. Patch management of the underlying infrastructure for managed services
- D. Application identity and access management

**主分类：** C4-15 Shared-Responsibility题。

**题库记录答案：** `C`。

**需求/考点标签：** Shared Responsibility。

**社区投票：** C 100%

### Q384.1-题干怎么拆

这道题先识别的不是某个服务名，而是这些约束：**Shared Responsibility**。

判断时应该先找到与这些约束同层、同数据模型或同运维目标的服务，再排除“看起来也属于 AWS，但解决的是另一个层面问题”的选项。

### Q384.2-每个选项的定位

| 选项 | 题库内容 | 服务/概念定位 | 题库答案关系 |
|---|---|---|---|
| A | Application data security | 该选项是题库中的概念/服务描述。现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为非正确选项 |
| B | Patch management for applications that run on Amazon EC2 instances | Amazon EC2：可配置虚拟服务器，适合需要 OS/实例级控制的计算工作负载。 | 题库记录为非正确选项 |
| C | Patch management of the underlying infrastructure for managed services | 该选项是题库中的概念/服务描述。现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为正确选项 |
| D | Application identity and access management | 该选项是题库中的概念/服务描述。现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为非正确选项 |

### Q384.3-为什么题库会这样选

题库记录的正确选项定位为：该选项是题库中的概念/服务描述。

现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。

它与题干要求的对象/约束直接对应。

其余选项虽然可能也属于同一大类，但主要解决不同问题。

---

---

## Q434-Shared-Responsibility题

**题目：** A company wants to build an application that uses AWS Lambda to run Python code. Under the AWS shared responsibility model, which tasks will be the company’s responsibility? (Choose two.)。

**选项：**

- A. Management of the underlying infrastructure.
- B. Management of the operating system.
- C. Writing the business logic code.
- D. Installation of the computer language runtime.
- E. Providing AWS Identity and Access Management (IAM) access to the Lambda service.

**主分类：** C4-15 Shared-Responsibility题。

**题库记录答案：** `CE`。

**需求/考点标签：** Shared Responsibility / Serverless。

**社区投票：** CE 100%

### Q434.1-题干怎么拆

这道题先识别的不是某个服务名，而是这些约束：**Shared Responsibility、Serverless**。

判断时应该先找到与这些约束同层、同数据模型或同运维目标的服务，再排除“看起来也属于 AWS，但解决的是另一个层面问题”的选项。

### Q434.2-每个选项的定位

| 选项 | 题库内容 | 服务/概念定位 | 题库答案关系 |
|---|---|---|---|
| A | Management of the underlying infrastructure. | 该选项是题库中的概念/服务描述。现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为非正确选项 |
| B | Management of the operating system. | 该选项是题库中的概念/服务描述。现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为非正确选项 |
| C | Writing the business logic code. | 该选项是题库中的概念/服务描述。现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为正确选项 |
| D | Installation of the computer language runtime. | 该选项是题库中的概念/服务描述。现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为非正确选项 |
| E | Providing AWS Identity and Access Management (IAM) access to the Lambda service. | AWS Lambda：事件驱动的 Serverless 函数运行环境，无需管理服务器。AWS IAM：AWS 身份、认证授权与权限策略核心服务。 | 题库记录为正确选项 |

### Q434.3-为什么题库会这样选

题库记录的正确选项定位为：该选项是题库中的概念/服务描述。

现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。

AWS Lambda：事件驱动的 Serverless 函数运行环境，无需管理服务器。

AWS IAM：AWS 身份、认证授权与权限策略核心服务。

它与题干要求的对象/约束直接对应。

其余选项虽然可能也属于同一大类，但主要解决不同问题。

---

---

## Q437-Shared-Responsibility题

**题目：** What does "security of the cloud” refer to in the AWS shared responsibility model?。

**选项：**

- A. Availability of AWS services such as Amazon EC2
- B. Security of the cloud infrastructure that runs all the AWS services
- C. Implementation of password policies for IAM users
- D. Security of customer environments by using AWS Network Firewall partners

**主分类：** C4-15 Shared-Responsibility题。

**题库记录答案：** `B`。

**需求/考点标签：** Shared Responsibility。

**社区投票：** B 100%

### Q437.1-题干怎么拆

这道题先识别的不是某个服务名，而是这些约束：**Shared Responsibility**。

判断时应该先找到与这些约束同层、同数据模型或同运维目标的服务，再排除“看起来也属于 AWS，但解决的是另一个层面问题”的选项。

### Q437.2-每个选项的定位

| 选项 | 题库内容 | 服务/概念定位 | 题库答案关系 |
|---|---|---|---|
| A | Availability of AWS services such as Amazon EC2 | Amazon EC2：可配置虚拟服务器，适合需要 OS/实例级控制的计算工作负载。 | 题库记录为非正确选项 |
| B | Security of the cloud infrastructure that runs all the AWS services | 该选项是题库中的概念/服务描述。现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为正确选项 |
| C | Implementation of password policies for IAM users | AWS IAM：AWS 身份、认证授权与权限策略核心服务。 | 题库记录为非正确选项 |
| D | Security of customer environments by using AWS Network Firewall partners | 该选项是题库中的概念/服务描述。现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为非正确选项 |

### Q437.3-为什么题库会这样选

题库记录的正确选项定位为：该选项是题库中的概念/服务描述。

现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。

它与题干要求的对象/约束直接对应。

其余选项虽然可能也属于同一大类，但主要解决不同问题。

---

---

## Q475-Shared-Responsibility题

**题目：** A company uses Amazon WorkSpaces. Which task is the responsibility of AWS, according to the AWS shared responsibility model?。

**选项：**

- A. Set up multi-factor authentication (MFA) for each WorkSpaces user account.
- B. Ensure the environmental safety and security of the AWS infrastructure that hosts WorkSpaces.
- C. Provide security for WorkSpaces user accounts through AWS Identity and Access Management (IAM).
- D. Configure AWS CloudTrail to log API calls and user activity.

**主分类：** C4-15 Shared-Responsibility题。

**题库记录答案：** `B`。

**需求/考点标签：** Shared Responsibility。

**社区投票：** B 100%

### Q475.1-题干怎么拆

这道题先识别的不是某个服务名，而是这些约束：**Shared Responsibility**。

判断时应该先找到与这些约束同层、同数据模型或同运维目标的服务，再排除“看起来也属于 AWS，但解决的是另一个层面问题”的选项。

### Q475.2-每个选项的定位

| 选项 | 题库内容 | 服务/概念定位 | 题库答案关系 |
|---|---|---|---|
| A | Set up multi-factor authentication (MFA) for each WorkSpaces user account. | MFA：多因素认证，增强账号登录安全。 | 题库记录为非正确选项 |
| B | Ensure the environmental safety and security of the AWS infrastructure that hosts WorkSpaces. | 该选项是题库中的概念/服务描述。现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为正确选项 |
| C | Provide security for WorkSpaces user accounts through AWS Identity and Access Management (IAM). | AWS IAM：AWS 身份、认证授权与权限策略核心服务。 | 题库记录为非正确选项 |
| D | Configure AWS CloudTrail to log API calls and user activity. | AWS CloudTrail：记录 AWS API/账号活动，回答谁在什么时候做了什么操作。 | 题库记录为非正确选项 |

### Q475.3-为什么题库会这样选

题库记录的正确选项定位为：该选项是题库中的概念/服务描述。

现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。

它与题干要求的对象/约束直接对应。

其余选项虽然可能也属于同一大类，但主要解决不同问题。

---

---

## Q483-Shared-Responsibility题

**题目：** Which option is AWS responsible for under the AWS shared responsibility model?。

**选项：**

- A. Network and firewall configuration
- B. Client-side data encryption
- C. Management of user permissions
- D. Hardware and infrastructure

**主分类：** C4-15 Shared-Responsibility题。

**题库记录答案：** `D`。

**需求/考点标签：** Shared Responsibility。

**社区投票：** D 100%

### Q483.1-题干怎么拆

这道题先识别的不是某个服务名，而是这些约束：**Shared Responsibility**。

判断时应该先找到与这些约束同层、同数据模型或同运维目标的服务，再排除“看起来也属于 AWS，但解决的是另一个层面问题”的选项。

### Q483.2-每个选项的定位

| 选项 | 题库内容 | 服务/概念定位 | 题库答案关系 |
|---|---|---|---|
| A | Network and firewall configuration | 该选项是题库中的概念/服务描述。现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为非正确选项 |
| B | Client-side data encryption | 该选项是题库中的概念/服务描述。现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为非正确选项 |
| C | Management of user permissions | 该选项是题库中的概念/服务描述。现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为非正确选项 |
| D | Hardware and infrastructure | 该选项是题库中的概念/服务描述。现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为正确选项 |

### Q483.3-为什么题库会这样选

题库记录的正确选项定位为：该选项是题库中的概念/服务描述。

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

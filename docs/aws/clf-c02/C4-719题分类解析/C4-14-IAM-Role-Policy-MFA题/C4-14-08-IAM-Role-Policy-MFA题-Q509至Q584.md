---
id: C4-14-08-IAM-Role-Policy-MFA题-Q509至Q584
sidebar_position: 8
---

# C4-14-08-IAM-Role-Policy-MFA题-Q509至Q584

> 本篇是《C4-14-IAM-Role-Policy-MFA题》的第8个分篇，主要包含：IAM-Role-Policy-MFA题、IAM-Role-Policy-MFA题、IAM-Role-Policy-MFA题、IAM-Role-Policy-MFA题、IAM-Role-Policy-MFA题、IAM-Role-Policy-MFA题。

## Q509-IAM-Role-Policy-MFA题

**题目：** Which AWS service supports user sign-up functionality and authentication to mobile and web applications?。

**选项：**

- A. Amazon Cognito
- B. AWS Config
- C. Amazon GuardDuty
- D. AWS Systems Manager

**主分类：** C4-14 IAM-Role-Policy-MFA题。

**题库记录答案：** `A`。

**社区投票：** A 100%

### Q509.1-题干怎么拆

现有题库没有提供独立 explanation。

这里按题干中的动作、对象和所有选项的服务定位进行比较。

### Q509.2-每个选项的定位

| 选项 | 题库内容 | 服务/概念定位 | 题库答案关系 |
|---|---|---|---|
| A | Amazon Cognito | Amazon Cognito：面向 Web/Mobile 应用终端用户的身份注册、登录与联合身份能力。 | 题库记录为正确选项 |
| B | AWS Config | AWS Config：记录资源配置与变化，并可按规则检查配置合规性。 | 题库记录为非正确选项 |
| C | Amazon GuardDuty | Amazon GuardDuty：基于多种日志与威胁情报进行持续威胁检测。 | 题库记录为非正确选项 |
| D | AWS Systems Manager | AWS Systems Manager：集中运维和自动化管理 AWS/混合环境中的节点与资源。 | 题库记录为非正确选项 |

### Q509.3-为什么题库会这样选

题库记录的正确选项定位为：Amazon Cognito：面向 Web/Mobile 应用终端用户的身份注册、登录与联合身份能力。

它与题干要求的对象/约束直接对应。

其余选项虽然可能也属于同一大类，但主要解决不同问题。

---

---

## Q534-IAM-Role-Policy-MFA题

**题目：** A user has been granted permission to change their own IAM user password. Which AWS services can the user use to change the password? (Choose two.)。

**选项：**

- A. AWS Command Line Interface (AWS CLI)
- B. AWS Key Management Sen/ice (AWS KMS)
- C. AWS Management Console
- D. AWS Resource Access Manager (AWS RAM)
- E. AWS Secrets Manager

**主分类：** C4-14 IAM-Role-Policy-MFA题。

**题库记录答案：** `AC`。

**社区投票：** AC 100%

### Q534.1-题干怎么拆

现有题库没有提供独立 explanation。

这里按题干中的动作、对象和所有选项的服务定位进行比较。

### Q534.2-每个选项的定位

| 选项 | 题库内容 | 服务/概念定位 | 题库答案关系 |
|---|---|---|---|
| A | AWS Command Line Interface (AWS CLI) | 该选项是题库中的概念/服务描述。现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为正确选项 |
| B | AWS Key Management Sen/ice (AWS KMS) | AWS KMS：集中创建、控制和使用加密密钥。 | 题库记录为非正确选项 |
| C | AWS Management Console | 该选项描述 Shared Responsibility 中 AWS 侧的基础设施责任。 | 题库记录为正确选项 |
| D | AWS Resource Access Manager (AWS RAM) | AWS RAM：在账号/组织之间共享支持的 AWS 资源。 | 题库记录为非正确选项 |
| E | AWS Secrets Manager | AWS Secrets Manager：安全保存、检索和轮换数据库密码/API Key 等 Secret。 | 题库记录为非正确选项 |

### Q534.3-为什么题库会这样选

题库记录的正确选项定位为：该选项是题库中的概念/服务描述。

现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。

该选项描述 Shared Responsibility 中 AWS 侧的基础设施责任。

它与题干要求的对象/约束直接对应。

其余选项虽然可能也属于同一大类，但主要解决不同问题。

---

---

## Q539-IAM-Role-Policy-MFA题

**题目：** Which guidelines are best practices for using AWS Identity and Access Management (IAM)? (Choose two.)。

**选项：**

- A. Share access keys.
- B. Create individual IAM users.
- C. Use inline policies instead of customer managed policies.
- D. Grant maximum privileges to IAM users.
- E. Use groups to assign permissions to IAM users.

**主分类：** C4-14 IAM-Role-Policy-MFA题。

**题库记录答案：** `BE`。

**社区投票：** BE 100%

### Q539.1-题干怎么拆

现有题库没有提供独立 explanation。

这里按题干中的动作、对象和所有选项的服务定位进行比较。

### Q539.2-每个选项的定位

| 选项 | 题库内容 | 服务/概念定位 | 题库答案关系 |
|---|---|---|---|
| A | Share access keys. | 该选项是题库中的概念/服务描述。现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为非正确选项 |
| B | Create individual IAM users. | AWS IAM：AWS 身份、认证授权与权限策略核心服务。 | 题库记录为正确选项 |
| C | Use inline policies instead of customer managed policies. | 该选项描述 Shared Responsibility 中客户侧的管理/安全责任。 | 题库记录为非正确选项 |
| D | Grant maximum privileges to IAM users. | AWS IAM：AWS 身份、认证授权与权限策略核心服务。 | 题库记录为非正确选项 |
| E | Use groups to assign permissions to IAM users. | AWS IAM：AWS 身份、认证授权与权限策略核心服务。 | 题库记录为正确选项 |

### Q539.3-为什么题库会这样选

题库记录的正确选项定位为：AWS IAM：AWS 身份、认证授权与权限策略核心服务。

它与题干要求的对象/约束直接对应。

其余选项虽然可能也属于同一大类，但主要解决不同问题。

---

---

## Q571-IAM-Role-Policy-MFA题

**题目：** A company wants to centrally manage its employee's access to multiple AWS accounts. Which AWS service or feature should the company use to meet this requirement?。

**选项：**

- A. AWS Identity and Access Management Access Analyzer
- B. AWS Secrets Manager
- C. AWS IAM Identity Center
- D. AWS Security Token Service (AWS STS)

**主分类：** C4-14 IAM-Role-Policy-MFA题。

**题库记录答案：** `C`。

**社区投票：** C 100%

### Q571.1-题干怎么拆

现有题库没有提供独立 explanation。

这里按题干中的动作、对象和所有选项的服务定位进行比较。

### Q571.2-每个选项的定位

| 选项 | 题库内容 | 服务/概念定位 | 题库答案关系 |
|---|---|---|---|
| A | AWS Identity and Access Management Access Analyzer | AWS IAM：AWS 身份、认证授权与权限策略核心服务。 | 题库记录为非正确选项 |
| B | AWS Secrets Manager | AWS Secrets Manager：安全保存、检索和轮换数据库密码/API Key 等 Secret。 | 题库记录为非正确选项 |
| C | AWS IAM Identity Center | AWS IAM Identity Center：集中管理多 AWS Account 和业务应用的员工访问。AWS IAM：AWS 身份、认证授权与权限策略核心服务。 | 题库记录为正确选项 |
| D | AWS Security Token Service (AWS STS) | 该选项是题库中的概念/服务描述。现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为非正确选项 |

### Q571.3-为什么题库会这样选

题库记录的正确选项定位为：AWS IAM Identity Center：集中管理多 AWS Account 和业务应用的员工访问。

AWS IAM：AWS 身份、认证授权与权限策略核心服务。

它与题干要求的对象/约束直接对应。

其余选项虽然可能也属于同一大类，但主要解决不同问题。

---

---

## Q582-IAM-Role-Policy-MFA题

**题目：** Which of the following actions are controlled with AWS Identity and Access Management (IAM)? (Choose two.)。

**选项：**

- A. Control access to AWS service APIs and to other specific resources.
- B. Provide intelligent threat detection and continuous monitoring.
- C. Protect the AWS environment using multi-factor authentication (MFA).
- D. Grant users access to AWS data centers.
- E. Provide firewall protection for applications from common web attacks.

**主分类：** C4-14 IAM-Role-Policy-MFA题。

**题库记录答案：** `AC`。

**社区投票：** AC 100%

### Q582.1-题干怎么拆

现有题库没有提供独立 explanation。

这里按题干中的动作、对象和所有选项的服务定位进行比较。

### Q582.2-每个选项的定位

| 选项 | 题库内容 | 服务/概念定位 | 题库答案关系 |
|---|---|---|---|
| A | Control access to AWS service APIs and to other specific resources. | 该选项是题库中的概念/服务描述。现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为正确选项 |
| B | Provide intelligent threat detection and continuous monitoring. | 该选项是题库中的概念/服务描述。现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为非正确选项 |
| C | Protect the AWS environment using multi-factor authentication (MFA). | MFA：多因素认证，增强账号登录安全。 | 题库记录为正确选项 |
| D | Grant users access to AWS data centers. | 该选项是题库中的概念/服务描述。现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为非正确选项 |
| E | Provide firewall protection for applications from common web attacks. | 该选项是题库中的概念/服务描述。现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为非正确选项 |

### Q582.3-为什么题库会这样选

题库记录的正确选项定位为：该选项是题库中的概念/服务描述。

现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。

MFA：多因素认证，增强账号登录安全。

它与题干要求的对象/约束直接对应。

其余选项虽然可能也属于同一大类，但主要解决不同问题。

---

---

## Q584-IAM-Role-Policy-MFA题

**题目：** A company is using AWS Identity and Access Management (IAM). Who can manage the access keys of the AWS account root user?。

**选项：**

- A. IAM users in the same account that have been granted permission
- B. IAM roles in any account that have been granted permission
- C. IAM users and roles that have been granted permission
- D. The AWS account owner

**主分类：** C4-14 IAM-Role-Policy-MFA题。

**题库记录答案：** `D`。

**社区投票：** D 100%

### Q584.1-题干怎么拆

现有题库没有提供独立 explanation。

这里按题干中的动作、对象和所有选项的服务定位进行比较。

### Q584.2-每个选项的定位

| 选项 | 题库内容 | 服务/概念定位 | 题库答案关系 |
|---|---|---|---|
| A | IAM users in the same account that have been granted permission | AWS IAM：AWS 身份、认证授权与权限策略核心服务。 | 题库记录为非正确选项 |
| B | IAM roles in any account that have been granted permission | IAM Role：可被用户、AWS 服务或联合身份临时承担的权限身份。AWS IAM：AWS 身份、认证授权与权限策略核心服务。 | 题库记录为非正确选项 |
| C | IAM users and roles that have been granted permission | AWS IAM：AWS 身份、认证授权与权限策略核心服务。 | 题库记录为非正确选项 |
| D | The AWS account owner | 该选项是题库中的概念/服务描述。现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为正确选项 |

### Q584.3-为什么题库会这样选

题库记录的正确选项定位为：该选项是题库中的概念/服务描述。

现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。

它与题干要求的对象/约束直接对应。

其余选项虽然可能也属于同一大类，但主要解决不同问题。

---

## 本篇概述

- 本篇梳理了IAM-Role-Policy-MFA题相关的核心知识、适用场景与判断要点。
- 本篇梳理了IAM-Role-Policy-MFA题相关的核心知识、适用场景与判断要点。
- 本篇梳理了IAM-Role-Policy-MFA题相关的核心知识、适用场景与判断要点。
- 本篇梳理了IAM-Role-Policy-MFA题相关的核心知识、适用场景与判断要点。
- 本篇梳理了IAM-Role-Policy-MFA题相关的核心知识、适用场景与判断要点。
- 本篇梳理了IAM-Role-Policy-MFA题相关的核心知识、适用场景与判断要点。

[返回本章总述](./C4-14-00-章节总述.md)｜[查看本章概述](./C4-14-99-章节概述.md)

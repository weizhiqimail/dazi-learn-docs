---
id: 03-IAM-Role-Policy-MFA题-等
sidebar_position: 3
---

# C4-14-IAM-Role-Policy-MFA题-IAM-Role-Policy-MFA题与IAM-Role-Policy-MFA题与IAM-Role-Policy-MFA题与IAM-Role-Policy-MFA题与IAM-Role-Policy-MFA题与IAM-Role-Policy-MFA题

> 本篇是《C4-14-IAM-Role-Policy-MFA题》的第3个分篇，主要包含：IAM-Role-Policy-MFA题、IAM-Role-Policy-MFA题、IAM-Role-Policy-MFA题、IAM-Role-Policy-MFA题、IAM-Role-Policy-MFA题、IAM-Role-Policy-MFA题。

## Q168-IAM-Role-Policy-MFA题

**题目：** Which action is a security best practice for access to sensitive data that is stored in an Amazon S3 bucket?。

**选项：**

- A. Enable S3 Cross-Region Replication (CRR) on the S3 bucket.
- B. Use IAM roles for applications that require access to the S3 bucket.
- C. Configure AWS WAF to prevent unauthorized access to the S3 bucket.
- D. Configure Amazon GuardDuty to prevent unauthorized access to the S3 bucket.

**主分类：** C4-14 IAM-Role-Policy-MFA题。

**题库记录答案：** `B`。

**需求/考点标签：** S3敏感数据发现。

**社区投票：** B 100%

### Q168.1-题干怎么拆

这道题先识别的不是某个服务名，而是这些约束：**S3敏感数据发现**。

判断时应该先找到与这些约束同层、同数据模型或同运维目标的服务，再排除“看起来也属于 AWS，但解决的是另一个层面问题”的选项。

### Q168.2-每个选项的定位

| 选项 | 题库内容 | 服务/概念定位 | 题库答案关系 |
|---|---|---|---|
| A | Enable S3 Cross-Region Replication (CRR) on the S3 bucket. | Amazon S3：高耐久、可扩展的对象存储，以 Bucket/Object 组织数据。 | 题库记录为非正确选项 |
| B | Use IAM roles for applications that require access to the S3 bucket. | Amazon S3：高耐久、可扩展的对象存储，以 Bucket/Object 组织数据。IAM Role：可被用户、AWS 服务或联合身份临时承担的权限身份。AWS IAM：AWS 身份、认证授权与权限策略核心服务。 | 题库记录为正确选项 |
| C | Configure AWS WAF to prevent unauthorized access to the S3 bucket. | Amazon S3：高耐久、可扩展的对象存储，以 Bucket/Object 组织数据。AWS WAF：Web 应用防火墙，过滤 HTTP(S) Web 请求。 | 题库记录为非正确选项 |
| D | Configure Amazon GuardDuty to prevent unauthorized access to the S3 bucket. | Amazon GuardDuty：基于多种日志与威胁情报进行持续威胁检测。Amazon S3：高耐久、可扩展的对象存储，以 Bucket/Object 组织数据。 | 题库记录为非正确选项 |

### Q168.3-为什么题库会这样选

题库记录的正确选项定位为：Amazon S3：高耐久、可扩展的对象存储，以 Bucket/Object 组织数据。

IAM Role：可被用户、AWS 服务或联合身份临时承担的权限身份。

AWS IAM：AWS 身份、认证授权与权限策略核心服务。

它与题干要求的对象/约束直接对应。

其余选项虽然可能也属于同一大类，但主要解决不同问题。

---

---

## Q170-IAM-Role-Policy-MFA题

**题目：** A company needs a central user portal so that users can log in to third-party business applications that support Security Assertion Markup Language (SAML) 2.0. Which AWS service will meet this requirement?。

**选项：**

- A. AWS Identity and Access Management (IAM)
- B. Amazon Cognito
- C. AWS IAM Identity Center (AWS Single Sign-On)
- D. AWS CLI

**主分类：** C4-14 IAM-Role-Policy-MFA题。

**题库记录答案：** `C`。

**社区投票：** C 52%, B 48%。

### Q170.1-题干怎么拆

现有题库没有提供独立 explanation。

这里按题干中的动作、对象和所有选项的服务定位进行比较。

### Q170.2-每个选项的定位

| 选项 | 题库内容 | 服务/概念定位 | 题库答案关系 |
|---|---|---|---|
| A | AWS Identity and Access Management (IAM) | AWS IAM：AWS 身份、认证授权与权限策略核心服务。 | 题库记录为非正确选项 |
| B | Amazon Cognito | Amazon Cognito：面向 Web/Mobile 应用终端用户的身份注册、登录与联合身份能力。 | 题库记录为非正确选项 |
| C | AWS IAM Identity Center (AWS Single Sign-On) | AWS IAM Identity Center：集中管理多 AWS Account 和业务应用的员工访问。AWS IAM：AWS 身份、认证授权与权限策略核心服务。 | 题库记录为正确选项 |
| D | AWS CLI | 该选项是题库中的概念/服务描述。现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为非正确选项 |

### Q170.3-为什么题库会这样选

题库记录的正确选项定位为：AWS IAM Identity Center：集中管理多 AWS Account 和业务应用的员工访问。

AWS IAM：AWS 身份、认证授权与权限策略核心服务。

它与题干要求的对象/约束直接对应。

其余选项虽然可能也属于同一大类，但主要解决不同问题。

### Q170.4-⚠-争议/版本提示

- 社区投票分散，最高项仅 52%
- 本题同时收录到 `C4-27-旧题争议题与当前AWS差异.md`，不在这里强行替题库修正答案。

---

---

## Q177-IAM-Role-Policy-MFA题

**题目：** Which action will help increase security in the AWS Cloud?。

**选项：**

- A. Enable programmatic access for all IAM users.
- B. Use IAM users instead of IAM roles to delegate permissions.
- C. Rotate access keys on a reoccurring basis.
- D. Use inline policies instead of customer managed policies.

**主分类：** C4-14 IAM-Role-Policy-MFA题。

**题库记录答案：** `C`。

**社区投票：** C 100%

### Q177.1-题干怎么拆

现有题库没有提供独立 explanation。

这里按题干中的动作、对象和所有选项的服务定位进行比较。

### Q177.2-每个选项的定位

| 选项 | 题库内容 | 服务/概念定位 | 题库答案关系 |
|---|---|---|---|
| A | Enable programmatic access for all IAM users. | AWS IAM：AWS 身份、认证授权与权限策略核心服务。 | 题库记录为非正确选项 |
| B | Use IAM users instead of IAM roles to delegate permissions. | IAM Role：可被用户、AWS 服务或联合身份临时承担的权限身份。AWS IAM：AWS 身份、认证授权与权限策略核心服务。 | 题库记录为非正确选项 |
| C | Rotate access keys on a reoccurring basis. | 该选项是题库中的概念/服务描述。现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为正确选项 |
| D | Use inline policies instead of customer managed policies. | 该选项描述 Shared Responsibility 中客户侧的管理/安全责任。 | 题库记录为非正确选项 |

### Q177.3-为什么题库会这样选

题库记录的正确选项定位为：该选项是题库中的概念/服务描述。

现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。

它与题干要求的对象/约束直接对应。

其余选项虽然可能也属于同一大类，但主要解决不同问题。

### Q177.4-⚠-争议/版本提示

- 社区评论存在明显质疑/版本差异信号
- 本题同时收录到 `C4-27-旧题争议题与当前AWS差异.md`，不在这里强行替题库修正答案。

---

---

## Q192-IAM-Role-Policy-MFA题

**题目：** A company hosts an application on multiple Amazon EC2 instances. The application uses Amazon Simple Notification Service (Amazon SNS) to send messages. Which AWS service or feature will give the application permission to access required AWS services?

**选项：**

- A. AWS Certificate Manager (ACM)
- B. IAM roles
- C. AWS Security Hub
- D. Amazon GuardDuty

**主分类：** C4-14 IAM-Role-Policy-MFA题。

**题库记录答案：** `B`。

**需求/考点标签：** 一对多通知。

**社区投票：** B 100%

### Q192.1-题干怎么拆

这道题先识别的不是某个服务名，而是这些约束：**一对多通知**。

判断时应该先找到与这些约束同层、同数据模型或同运维目标的服务，再排除“看起来也属于 AWS，但解决的是另一个层面问题”的选项。

### Q192.2-每个选项的定位

| 选项 | 题库内容 | 服务/概念定位 | 题库答案关系 |
|---|---|---|---|
| A | AWS Certificate Manager (ACM) | AWS Certificate Manager：供应和管理 TLS/SSL 证书。 | 题库记录为非正确选项 |
| B | IAM roles | IAM Role：可被用户、AWS 服务或联合身份临时承担的权限身份。AWS IAM：AWS 身份、认证授权与权限策略核心服务。 | 题库记录为正确选项 |
| C | AWS Security Hub | AWS Security Hub：聚合安全发现并提供安全态势管理。 | 题库记录为非正确选项 |
| D | Amazon GuardDuty | Amazon GuardDuty：基于多种日志与威胁情报进行持续威胁检测。 | 题库记录为非正确选项 |

### Q192.3-为什么题库会这样选

题库记录的正确选项定位为：IAM Role：可被用户、AWS 服务或联合身份临时承担的权限身份。

AWS IAM：AWS 身份、认证授权与权限策略核心服务。

它与题干要求的对象/约束直接对应。

其余选项虽然可能也属于同一大类，但主要解决不同问题。

---

---

## Q202-IAM-Role-Policy-MFA题

**题目：** Which AWS service or resource can be used to identify services that have been used by a user within a specified date range?。

**选项：**

- A. Amazon S3 access control lists (ACLs)
- B. AWS Certificate Manager (ACM)
- C. Network Access Analyzer
- D. AWS Identity and Access Management Access Analyzer

**主分类：** C4-14 IAM-Role-Policy-MFA题。

**题库记录答案：** `D`。

**社区投票：** D 100%

### Q202.1-题干怎么拆

现有题库没有提供独立 explanation。

这里按题干中的动作、对象和所有选项的服务定位进行比较。

### Q202.2-每个选项的定位

| 选项 | 题库内容 | 服务/概念定位 | 题库答案关系 |
|---|---|---|---|
| A | Amazon S3 access control lists (ACLs) | Amazon S3：高耐久、可扩展的对象存储，以 Bucket/Object 组织数据。 | 题库记录为非正确选项 |
| B | AWS Certificate Manager (ACM) | AWS Certificate Manager：供应和管理 TLS/SSL 证书。 | 题库记录为非正确选项 |
| C | Network Access Analyzer | 该选项是题库中的概念/服务描述。现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为非正确选项 |
| D | AWS Identity and Access Management Access Analyzer | AWS IAM：AWS 身份、认证授权与权限策略核心服务。 | 题库记录为正确选项 |

### Q202.3-为什么题库会这样选

题库记录的正确选项定位为：AWS IAM：AWS 身份、认证授权与权限策略核心服务。

它与题干要求的对象/约束直接对应。

其余选项虽然可能也属于同一大类，但主要解决不同问题。

---

---

## Q216-IAM-Role-Policy-MFA题

**题目：** A company has teams that have different job roles and responsibilities. The company’s employees often change teams. The company needs to manage permissions for the employees so that the permissions are appropriate for the job responsibilities. Which IAM resource should the company use to meet this requirement with the LEAST operational overhead?

**选项：**

- A. IAM user groups
- B. IAM roles
- C. IAM instance profiles
- D. IAM policies for individual users

**主分类：** C4-14 IAM-Role-Policy-MFA题。

**题库记录答案：** `B`。

**社区投票：** B 52%, A 48%。

### Q216.1-题干怎么拆

现有题库没有提供独立 explanation。

这里按题干中的动作、对象和所有选项的服务定位进行比较。

### Q216.2-每个选项的定位

| 选项 | 题库内容 | 服务/概念定位 | 题库答案关系 |
|---|---|---|---|
| A | IAM user groups | AWS IAM：AWS 身份、认证授权与权限策略核心服务。 | 题库记录为非正确选项 |
| B | IAM roles | IAM Role：可被用户、AWS 服务或联合身份临时承担的权限身份。AWS IAM：AWS 身份、认证授权与权限策略核心服务。 | 题库记录为正确选项 |
| C | IAM instance profiles | AWS IAM：AWS 身份、认证授权与权限策略核心服务。 | 题库记录为非正确选项 |
| D | IAM policies for individual users | AWS IAM：AWS 身份、认证授权与权限策略核心服务。 | 题库记录为非正确选项 |

### Q216.3-为什么题库会这样选

题库记录的正确选项定位为：IAM Role：可被用户、AWS 服务或联合身份临时承担的权限身份。

AWS IAM：AWS 身份、认证授权与权限策略核心服务。

它与题干要求的对象/约束直接对应。

其余选项虽然可能也属于同一大类，但主要解决不同问题。

### Q216.4-⚠-争议/版本提示

- 社区投票分散，最高项仅 52%
- 本题同时收录到 `C4-27-旧题争议题与当前AWS差异.md`，不在这里强行替题库修正答案。

---

## 本篇概述

- 本篇梳理了IAM-Role-Policy-MFA题相关的核心知识、适用场景与判断要点。
- 本篇梳理了IAM-Role-Policy-MFA题相关的核心知识、适用场景与判断要点。
- 本篇梳理了IAM-Role-Policy-MFA题相关的核心知识、适用场景与判断要点。
- 本篇梳理了IAM-Role-Policy-MFA题相关的核心知识、适用场景与判断要点。
- 本篇梳理了IAM-Role-Policy-MFA题相关的核心知识、适用场景与判断要点。
- 本篇梳理了IAM-Role-Policy-MFA题相关的核心知识、适用场景与判断要点。

[返回本章总述](./00-总述.md)｜[查看本章概述](./99-概述.md)

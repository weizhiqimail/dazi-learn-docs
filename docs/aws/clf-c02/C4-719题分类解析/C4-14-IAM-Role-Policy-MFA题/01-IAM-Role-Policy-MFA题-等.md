---
id: 01-IAM-Role-Policy-MFA题-等
sidebar_position: 1
---

# C4-14-IAM-Role-Policy-MFA题-IAM-Role-Policy-MFA题与IAM-Role-Policy-MFA题与IAM-Role-Policy-MFA题与IAM-Role-Policy-MFA题与IAM-Role-Policy-MFA题与IAM-Role-Policy-MFA题与IAM-Role-Policy-MFA题

> 本篇是《C4-14-IAM-Role-Policy-MFA题》的第1个分篇，主要包含：IAM-Role-Policy-MFA题、IAM-Role-Policy-MFA题、IAM-Role-Policy-MFA题、IAM-Role-Policy-MFA题、IAM-Role-Policy-MFA题、IAM-Role-Policy-MFA题、IAM-Role-Policy-MFA题。

## Q26-IAM-Role-Policy-MFA题

**题目：** A company has an AWS account. The company wants to audit its password and access key rotation details for compliance purposes. Which AWS service or tool will meet this requirement?。

**选项：**

- A. IAM Access Analyzer
- B. AWS Artifact
- C. IAM credential report
- D. AWS Audit Manager

**主分类：** C4-14 IAM-Role-Policy-MFA题。

**题库记录答案：** `C`。

**需求/考点标签：** 配置变化与合规。

**社区投票：** C 100%

### Q26.1-题干怎么拆

这道题先识别的不是某个服务名，而是这些约束：**配置变化与合规**。

判断时应该先找到与这些约束同层、同数据模型或同运维目标的服务，再排除“看起来也属于 AWS，但解决的是另一个层面问题”的选项。

### Q26.2-每个选项的定位

| 选项 | 题库内容 | 服务/概念定位 | 题库答案关系 |
|---|---|---|---|
| A | IAM Access Analyzer | AWS IAM：AWS 身份、认证授权与权限策略核心服务。 | 题库记录为非正确选项 |
| B | AWS Artifact | AWS Artifact：按需访问 AWS 合规报告和部分协议的门户。 | 题库记录为非正确选项 |
| C | IAM credential report | AWS IAM：AWS 身份、认证授权与权限策略核心服务。 | 题库记录为正确选项 |
| D | AWS Audit Manager | 该选项描述 Shared Responsibility 中 AWS 侧的基础设施责任。 | 题库记录为非正确选项 |

### Q26.3-为什么题库会这样选

题库记录的正确选项定位为：AWS IAM：AWS 身份、认证授权与权限策略核心服务。

它与题干要求的对象/约束直接对应。

其余选项虽然可能也属于同一大类，但主要解决不同问题。

---

---

## Q36-IAM-Role-Policy-MFA题

**题目：** Which AWS service or feature identifies whether an Amazon S3 bucket or an IAM role has been shared with an external entity?。

**选项：**

- A. AWS Service Catalog
- B. AWS Systems Manager
- C. AWS IAM Access Analyzer
- D. AWS Organizations

**主分类：** C4-14 IAM-Role-Policy-MFA题。

**题库记录答案：** `C`。

**需求/考点标签：** Object Storage。

**社区投票：** C 100%

### Q36.1-题干怎么拆

这道题先识别的不是某个服务名，而是这些约束：**Object Storage**。

判断时应该先找到与这些约束同层、同数据模型或同运维目标的服务，再排除“看起来也属于 AWS，但解决的是另一个层面问题”的选项。

### Q36.2-每个选项的定位

| 选项 | 题库内容 | 服务/概念定位 | 题库答案关系 |
|---|---|---|---|
| A | AWS Service Catalog | AWS Service Catalog：让企业发布经过批准的云产品/基础设施模板目录。 | 题库记录为非正确选项 |
| B | AWS Systems Manager | AWS Systems Manager：集中运维和自动化管理 AWS/混合环境中的节点与资源。 | 题库记录为非正确选项 |
| C | AWS IAM Access Analyzer | AWS IAM：AWS 身份、认证授权与权限策略核心服务。 | 题库记录为正确选项 |
| D | AWS Organizations | AWS Organizations：集中组织和治理多个 AWS Account，并支持 Consolidated Billing、SCP 等。 | 题库记录为非正确选项 |

### Q36.3-为什么题库会这样选

题库记录的正确选项定位为：AWS IAM：AWS 身份、认证授权与权限策略核心服务。

它与题干要求的对象/约束直接对应。

其余选项虽然可能也属于同一大类，但主要解决不同问题。

---

---

## Q39-IAM-Role-Policy-MFA题

**题目：** A company is setting up AWS Identity and Access Management (IAM) on an AWS account. Which recommendation complies with IAM security best practices?。

**选项：**

- A. Use the account root user access keys for administrative tasks.
- B. Grant broad permissions so that all company employees can access the resources they need.
- C. Turn on multi-factor authentication (MFA) for added security during the login process.
- D. Avoid rotating credentials to prevent issues in production applications.

**主分类：** C4-14 IAM-Role-Policy-MFA题。

**题库记录答案：** `C`。

**社区投票：** C 100%

### Q39.1-题干怎么拆

现有题库没有提供独立 explanation。

这里按题干中的动作、对象和所有选项的服务定位进行比较。

### Q39.2-每个选项的定位

| 选项 | 题库内容 | 服务/概念定位 | 题库答案关系 |
|---|---|---|---|
| A | Use the account root user access keys for administrative tasks. | Root User 拥有账号最高级权限，应强保护并避免日常使用。 | 题库记录为非正确选项 |
| B | Grant broad permissions so that all company employees can access the resources they need. | 该选项是题库中的概念/服务描述。现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为非正确选项 |
| C | Turn on multi-factor authentication (MFA) for added security during the login process. | MFA：多因素认证，增强账号登录安全。 | 题库记录为正确选项 |
| D | Avoid rotating credentials to prevent issues in production applications. | 该选项是题库中的概念/服务描述。现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为非正确选项 |

### Q39.3-为什么题库会这样选

题库记录的正确选项定位为：MFA：多因素认证，增强账号登录安全。

它与题干要求的对象/约束直接对应。

其余选项虽然可能也属于同一大类，但主要解决不同问题。

---

---

## Q52-IAM-Role-Policy-MFA题

**题目：** A company is developing an application that uses multiple AWS services. The application needs to use temporary, limited- privilege credentials for authentication with other AWS APIs. Which AWS service or feature should the company use to meet these authentication requirements?

**选项：**

- A. Amazon API Gateway
- B. IAM users
- C. AWS Security Token Service (AWS STS)
- D. IAM instance profiles

**主分类：** C4-14 IAM-Role-Policy-MFA题。

**题库记录答案：** `C`。

**社区投票：** C 100%

### Q52.1-题干怎么拆

现有题库没有提供独立 explanation。

这里按题干中的动作、对象和所有选项的服务定位进行比较。

### Q52.2-每个选项的定位

| 选项 | 题库内容 | 服务/概念定位 | 题库答案关系 |
|---|---|---|---|
| A | Amazon API Gateway | Amazon API Gateway：托管 API 前门，用于发布、保护和管理 API。 | 题库记录为非正确选项 |
| B | IAM users | AWS IAM：AWS 身份、认证授权与权限策略核心服务。 | 题库记录为非正确选项 |
| C | AWS Security Token Service (AWS STS) | 该选项是题库中的概念/服务描述。现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为正确选项 |
| D | IAM instance profiles | AWS IAM：AWS 身份、认证授权与权限策略核心服务。 | 题库记录为非正确选项 |

### Q52.3-为什么题库会这样选

题库记录的正确选项定位为：该选项是题库中的概念/服务描述。

现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。

它与题干要求的对象/约束直接对应。

其余选项虽然可能也属于同一大类，但主要解决不同问题。

---

---

## Q54-IAM-Role-Policy-MFA题

**题目：** Which AWS service is always provided at no charge?。

**选项：**

- A. Amazon S3
- B. AWS Identity and Access Management (IAM)
- C. Elastic Load Balancers
- D. AWS WAF

**主分类：** C4-14 IAM-Role-Policy-MFA题。

**题库记录答案：** `B`。

**社区投票：** B 94%, A 6%。

### Q54.1-题干怎么拆

现有题库没有提供独立 explanation。

这里按题干中的动作、对象和所有选项的服务定位进行比较。

### Q54.2-每个选项的定位

| 选项 | 题库内容 | 服务/概念定位 | 题库答案关系 |
|---|---|---|---|
| A | Amazon S3 | Amazon S3：高耐久、可扩展的对象存储，以 Bucket/Object 组织数据。 | 题库记录为非正确选项 |
| B | AWS Identity and Access Management (IAM) | AWS IAM：AWS 身份、认证授权与权限策略核心服务。 | 题库记录为正确选项 |
| C | Elastic Load Balancers | Elastic Load Balancing：在多个后端目标间分发流量并提高可用性。 | 题库记录为非正确选项 |
| D | AWS WAF | AWS WAF：Web 应用防火墙，过滤 HTTP(S) Web 请求。 | 题库记录为非正确选项 |

### Q54.3-为什么题库会这样选

题库记录的正确选项定位为：AWS IAM：AWS 身份、认证授权与权限策略核心服务。

它与题干要求的对象/约束直接对应。

其余选项虽然可能也属于同一大类，但主要解决不同问题。

---

---

## Q94-IAM-Role-Policy-MFA题

**题目：** Using AWS Identity and Access Management (IAM) to grant access only to the resources needed to perform a task is a concept known as:

**选项：**

- A. restricted access.
- B. as-needed access.
- C. least privilege access.
- D. token access.

**主分类：** C4-14 IAM-Role-Policy-MFA题。

**题库记录答案：** `C`。

**社区投票：** C 92%, D 8%。

### Q94.1-题干怎么拆

现有题库没有提供独立 explanation。

这里按题干中的动作、对象和所有选项的服务定位进行比较。

### Q94.2-每个选项的定位

| 选项 | 题库内容 | 服务/概念定位 | 题库答案关系 |
|---|---|---|---|
| A | restricted access. | 该选项是题库中的概念/服务描述。现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为非正确选项 |
| B | as-needed access. | 该选项是题库中的概念/服务描述。现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为非正确选项 |
| C | least privilege access. | 最小权限原则要求只授予完成任务所需的最少权限。 | 题库记录为正确选项 |
| D | token access. | 该选项是题库中的概念/服务描述。现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为非正确选项 |

### Q94.3-为什么题库会这样选

题库记录的正确选项定位为：最小权限原则要求只授予完成任务所需的最少权限。

它与题干要求的对象/约束直接对应。

其余选项虽然可能也属于同一大类，但主要解决不同问题。

---

---

## Q98-IAM-Role-Policy-MFA题

**题目：** A company wants to grant users in one AWS account access to resources in another AWS account. The users do not currently have permission to access the resources. Which AWS service will meet this requirement?。

**选项：**

- A. IAM group
- B. IAM role
- C. IAM tag
- D. IAM Access Analyzer

**主分类：** C4-14 IAM-Role-Policy-MFA题。

**题库记录答案：** `B`。

**社区投票：** B 91%, A 9%。

### Q98.1-题干怎么拆

现有题库没有提供独立 explanation。

这里按题干中的动作、对象和所有选项的服务定位进行比较。

### Q98.2-每个选项的定位

| 选项 | 题库内容 | 服务/概念定位 | 题库答案关系 |
|---|---|---|---|
| A | IAM group | AWS IAM：AWS 身份、认证授权与权限策略核心服务。 | 题库记录为非正确选项 |
| B | IAM role | IAM Role：可被用户、AWS 服务或联合身份临时承担的权限身份。AWS IAM：AWS 身份、认证授权与权限策略核心服务。 | 题库记录为正确选项 |
| C | IAM tag | AWS IAM：AWS 身份、认证授权与权限策略核心服务。 | 题库记录为非正确选项 |
| D | IAM Access Analyzer | AWS IAM：AWS 身份、认证授权与权限策略核心服务。 | 题库记录为非正确选项 |

### Q98.3-为什么题库会这样选

题库记录的正确选项定位为：IAM Role：可被用户、AWS 服务或联合身份临时承担的权限身份。

AWS IAM：AWS 身份、认证授权与权限策略核心服务。

它与题干要求的对象/约束直接对应。

其余选项虽然可能也属于同一大类，但主要解决不同问题。

### Q98.4-⚠-争议/版本提示

- 社区评论存在明显质疑/版本差异信号
- 本题同时收录到 `C4-27-旧题争议题与当前AWS差异.md`，不在这里强行替题库修正答案。

---

## 本篇概述

- 本篇梳理了IAM-Role-Policy-MFA题相关的核心知识、适用场景与判断要点。
- 本篇梳理了IAM-Role-Policy-MFA题相关的核心知识、适用场景与判断要点。
- 本篇梳理了IAM-Role-Policy-MFA题相关的核心知识、适用场景与判断要点。
- 本篇梳理了IAM-Role-Policy-MFA题相关的核心知识、适用场景与判断要点。
- 本篇梳理了IAM-Role-Policy-MFA题相关的核心知识、适用场景与判断要点。
- 本篇梳理了IAM-Role-Policy-MFA题相关的核心知识、适用场景与判断要点。
- 本篇梳理了IAM-Role-Policy-MFA题相关的核心知识、适用场景与判断要点。

[返回本章总述](./00-总述.md)｜[查看本章概述](./99-概述.md)

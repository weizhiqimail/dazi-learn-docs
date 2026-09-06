---
id: 06-IAM-Role-Policy-MFA题-等
sidebar_position: 6
---

# C4-14-IAM-Role-Policy-MFA题-IAM-Role-Policy-MFA题与IAM-Role-Policy-MFA题与IAM-Role-Policy-MFA题与IAM-Role-Policy-MFA题与IAM-Role-Policy-MFA题与IAM-Role-Policy-MFA题

> 本篇是《C4-14-IAM-Role-Policy-MFA题》的第6个分篇，主要包含：IAM-Role-Policy-MFA题、IAM-Role-Policy-MFA题、IAM-Role-Policy-MFA题、IAM-Role-Policy-MFA题、IAM-Role-Policy-MFA题、IAM-Role-Policy-MFA题。

## Q385-IAM-Role-Policy-MFA题

**题目：** Which AWS service or resource can identify and provide reports on IAM resources in one AWS account that is shared with another AWS account?。

**选项：**

- A. IAM credential report
- B. AWS IAM Identity Center (AWS Single Sign-On)
- C. AWS Identity and Access Management Access Analyzer
- D. Amazon Cognito user pool

**主分类：** C4-14 IAM-Role-Policy-MFA题。

**题库记录答案：** `C`。

**社区投票：** C 100%

### Q385.1-题干怎么拆

现有题库没有提供独立 explanation。

这里按题干中的动作、对象和所有选项的服务定位进行比较。

### Q385.2-每个选项的定位

| 选项 | 题库内容 | 服务/概念定位 | 题库答案关系 |
|---|---|---|---|
| A | IAM credential report | AWS IAM：AWS 身份、认证授权与权限策略核心服务。 | 题库记录为非正确选项 |
| B | AWS IAM Identity Center (AWS Single Sign-On) | AWS IAM Identity Center：集中管理多 AWS Account 和业务应用的员工访问。AWS IAM：AWS 身份、认证授权与权限策略核心服务。 | 题库记录为非正确选项 |
| C | AWS Identity and Access Management Access Analyzer | AWS IAM：AWS 身份、认证授权与权限策略核心服务。 | 题库记录为正确选项 |
| D | Amazon Cognito user pool | Amazon Cognito：面向 Web/Mobile 应用终端用户的身份注册、登录与联合身份能力。 | 题库记录为非正确选项 |

### Q385.3-为什么题库会这样选

题库记录的正确选项定位为：AWS IAM：AWS 身份、认证授权与权限策略核心服务。

它与题干要求的对象/约束直接对应。

其余选项虽然可能也属于同一大类，但主要解决不同问题。

---

---

## Q391-IAM-Role-Policy-MFA题

**题目：** A company wants to manage sign-in security for workforce users. The company needs to create workforce users and centrally manage their access across all the company's AWS accounts and applications. Which AWS service will meet these requirements?

**选项：**

- A. AWS Audit Manager
- B. Amazon Cognito
- C. AWS Security Hub
- D. AWS IAM Identity Center (AWS Single Sign-On)

**主分类：** C4-14 IAM-Role-Policy-MFA题。

**题库记录答案：** `D`。

**社区投票：** D 90%, B 10%。

### Q391.1-题干怎么拆

现有题库没有提供独立 explanation。

这里按题干中的动作、对象和所有选项的服务定位进行比较。

### Q391.2-每个选项的定位

| 选项 | 题库内容 | 服务/概念定位 | 题库答案关系 |
|---|---|---|---|
| A | AWS Audit Manager | 该选项描述 Shared Responsibility 中 AWS 侧的基础设施责任。 | 题库记录为非正确选项 |
| B | Amazon Cognito | Amazon Cognito：面向 Web/Mobile 应用终端用户的身份注册、登录与联合身份能力。 | 题库记录为非正确选项 |
| C | AWS Security Hub | AWS Security Hub：聚合安全发现并提供安全态势管理。 | 题库记录为非正确选项 |
| D | AWS IAM Identity Center (AWS Single Sign-On) | AWS IAM Identity Center：集中管理多 AWS Account 和业务应用的员工访问。AWS IAM：AWS 身份、认证授权与权限策略核心服务。 | 题库记录为正确选项 |

### Q391.3-为什么题库会这样选

题库记录的正确选项定位为：AWS IAM Identity Center：集中管理多 AWS Account 和业务应用的员工访问。

AWS IAM：AWS 身份、认证授权与权限策略核心服务。

它与题干要求的对象/约束直接对应。

其余选项虽然可能也属于同一大类，但主要解决不同问题。

---

---

## Q392-IAM-Role-Policy-MFA题

**题目：** A company wants a report that lists the status of multi-factor authentication (MFA) devices that all users in the company's AWS account use. Which AWS feature or service will meet this requirement?。

**选项：**

- A. AWS Cost and Usage Reports
- B. IAM credential reports
- C. Detailed Billing Reports -
- D. AWS Cost Explorer reports

**主分类：** C4-14 IAM-Role-Policy-MFA题。

**题库记录答案：** `B`。

**需求/考点标签：** MFA。

**社区投票：** B 100%

### Q392.1-题干怎么拆

这道题先识别的不是某个服务名，而是这些约束：**MFA**。

判断时应该先找到与这些约束同层、同数据模型或同运维目标的服务，再排除“看起来也属于 AWS，但解决的是另一个层面问题”的选项。

### Q392.2-每个选项的定位

| 选项 | 题库内容 | 服务/概念定位 | 题库答案关系 |
|---|---|---|---|
| A | AWS Cost and Usage Reports | AWS Cost and Usage Report：提供细粒度成本与使用明细数据。 | 题库记录为非正确选项 |
| B | IAM credential reports | AWS IAM：AWS 身份、认证授权与权限策略核心服务。 | 题库记录为正确选项 |
| C | Detailed Billing Reports - | 该选项是题库中的概念/服务描述。现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为非正确选项 |
| D | AWS Cost Explorer reports | AWS Cost Explorer：分析历史/当前 AWS 成本和用量趋势。 | 题库记录为非正确选项 |

### Q392.3-为什么题库会这样选

题库记录的正确选项定位为：AWS IAM：AWS 身份、认证授权与权限策略核心服务。

它与题干要求的对象/约束直接对应。

其余选项虽然可能也属于同一大类，但主要解决不同问题。

---

---

## Q394-IAM-Role-Policy-MFA题

**题目：** A company is launching a mobile app in the AWS Cloud. The company wants the app's users to sign in through social media identity providers (IdPs). Which AWS service will meet this requirement?。

**选项：**

- A. AWS Lambda
- B. Amazon Cognito
- C. AWS Secrets Manager
- D. Amazon CloudFront

**主分类：** C4-14 IAM-Role-Policy-MFA题。

**题库记录答案：** `B`。

**社区投票：** B 100%

### Q394.1-题干怎么拆

现有题库没有提供独立 explanation。

这里按题干中的动作、对象和所有选项的服务定位进行比较。

### Q394.2-每个选项的定位

| 选项 | 题库内容 | 服务/概念定位 | 题库答案关系 |
|---|---|---|---|
| A | AWS Lambda | AWS Lambda：事件驱动的 Serverless 函数运行环境，无需管理服务器。 | 题库记录为非正确选项 |
| B | Amazon Cognito | Amazon Cognito：面向 Web/Mobile 应用终端用户的身份注册、登录与联合身份能力。 | 题库记录为正确选项 |
| C | AWS Secrets Manager | AWS Secrets Manager：安全保存、检索和轮换数据库密码/API Key 等 Secret。 | 题库记录为非正确选项 |
| D | Amazon CloudFront | Amazon CloudFront：AWS CDN，利用 Edge Location 缓存和分发内容。 | 题库记录为非正确选项 |

### Q394.3-为什么题库会这样选

题库记录的正确选项定位为：Amazon Cognito：面向 Web/Mobile 应用终端用户的身份注册、登录与联合身份能力。

它与题干要求的对象/约束直接对应。

其余选项虽然可能也属于同一大类，但主要解决不同问题。

---

---

## Q409-IAM-Role-Policy-MFA题

**题目：** Which task is the responsibility of a company that is using Amazon RDS?。

**选项：**

- A. Provision the underlying infrastructure.
- B. Create IAM policies to control administrative access to the service.
- C. Install the cables to connect the hardware for compute and storage.
- D. Install and patch the RDS operating system.

**主分类：** C4-14 IAM-Role-Policy-MFA题。

**题库记录答案：** `B`。

**需求/考点标签：** 关系数据库高可用。

**社区投票：** B 75%, D 25%。

### Q409.1-题干怎么拆

这道题先识别的不是某个服务名，而是这些约束：**关系数据库高可用**。

判断时应该先找到与这些约束同层、同数据模型或同运维目标的服务，再排除“看起来也属于 AWS，但解决的是另一个层面问题”的选项。

### Q409.2-每个选项的定位

| 选项 | 题库内容 | 服务/概念定位 | 题库答案关系 |
|---|---|---|---|
| A | Provision the underlying infrastructure. | 该选项是题库中的概念/服务描述。现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为非正确选项 |
| B | Create IAM policies to control administrative access to the service. | AWS IAM：AWS 身份、认证授权与权限策略核心服务。 | 题库记录为正确选项 |
| C | Install the cables to connect the hardware for compute and storage. | 该选项是题库中的概念/服务描述。现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为非正确选项 |
| D | Install and patch the RDS operating system. | Amazon RDS：托管关系数据库服务，负责大量数据库基础设施运维。 | 题库记录为非正确选项 |

### Q409.3-为什么题库会这样选

题库记录的正确选项定位为：AWS IAM：AWS 身份、认证授权与权限策略核心服务。

它与题干要求的对象/约束直接对应。

其余选项虽然可能也属于同一大类，但主要解决不同问题。

---

---

## Q428-IAM-Role-Policy-MFA题

**题目：** A company wants to provide one of its employees with access to Amazon RDS. The company also wants to limit the interaction to only the AWS CLI and AWS software development kits (SDKs). Which combination of actions should the company take to meet these requirements while following the principles of least privilege? (Choose two.)。

**选项：**

- A. Create an IAM user and provide AWS Management Console access only.
- B. Create an IAM user and provide programmatic access only.
- C. Create an IAM role and provide AWS Management Console access only.
- D. Create an IAM policy with administrator access and attach it to the IAM user.
- E. Create an IAM policy with Amazon RDS access and attach it to the IAM user.

**主分类：** C4-14 IAM-Role-Policy-MFA题。

**题库记录答案：** `BE`。

**需求/考点标签：** 关系数据库高可用。

**社区投票：** BE 100%

### Q428.1-题干怎么拆

这道题先识别的不是某个服务名，而是这些约束：**关系数据库高可用**。

判断时应该先找到与这些约束同层、同数据模型或同运维目标的服务，再排除“看起来也属于 AWS，但解决的是另一个层面问题”的选项。

### Q428.2-每个选项的定位

| 选项 | 题库内容 | 服务/概念定位 | 题库答案关系 |
|---|---|---|---|
| A | Create an IAM user and provide AWS Management Console access only. | AWS IAM：AWS 身份、认证授权与权限策略核心服务。 | 题库记录为非正确选项 |
| B | Create an IAM user and provide programmatic access only. | AWS IAM：AWS 身份、认证授权与权限策略核心服务。 | 题库记录为正确选项 |
| C | Create an IAM role and provide AWS Management Console access only. | IAM Role：可被用户、AWS 服务或联合身份临时承担的权限身份。AWS IAM：AWS 身份、认证授权与权限策略核心服务。 | 题库记录为非正确选项 |
| D | Create an IAM policy with administrator access and attach it to the IAM user. | IAM Policy：用 JSON 等形式定义允许/拒绝哪些 AWS 操作。AWS IAM：AWS 身份、认证授权与权限策略核心服务。 | 题库记录为非正确选项 |
| E | Create an IAM policy with Amazon RDS access and attach it to the IAM user. | IAM Policy：用 JSON 等形式定义允许/拒绝哪些 AWS 操作。Amazon RDS：托管关系数据库服务，负责大量数据库基础设施运维。AWS IAM：AWS 身份、认证授权与权限策略核心服务。 | 题库记录为正确选项 |

### Q428.3-为什么题库会这样选

题库记录的正确选项定位为：AWS IAM：AWS 身份、认证授权与权限策略核心服务。

IAM Policy：用 JSON 等形式定义允许/拒绝哪些 AWS 操作。

Amazon RDS：托管关系数据库服务，负责大量数据库基础设施运维。

AWS IAM：AWS 身份、认证授权与权限策略核心服务。

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

[返回本章总述](./00-总述.md)｜[查看本章概述](./99-概述.md)

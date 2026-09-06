---
id: C4-14-04-IAM-Role-Policy-MFA题-Q220至Q296
sidebar_position: 4
---

# C4-14-04-IAM-Role-Policy-MFA题-Q220至Q296

> 本篇是《C4-14-IAM-Role-Policy-MFA题》的第4个分篇，主要包含：IAM-Role-Policy-MFA题、IAM-Role-Policy-MFA题、IAM-Role-Policy-MFA题、IAM-Role-Policy-MFA题、IAM-Role-Policy-MFA题、IAM-Role-Policy-MFA题。

## Q220-IAM-Role-Policy-MFA题

**题目：** A company wants to integrate its online shopping website with social media login credentials. Which AWS service can the company use to make this integration?。

**选项：**

- A. AWS Directory Service
- B. AWS Identity and Access Management (IAM)
- C. Amazon Cognito
- D. AWS IAM Identity Center (AWS Single Sign-On)

**主分类：** C4-14 IAM-Role-Policy-MFA题。

**题库记录答案：** `C`。

**需求/考点标签：** Block Storage。

**社区投票：** C 100%

### Q220.1-题干怎么拆

这道题先识别的不是某个服务名，而是这些约束：**Block Storage**。

判断时应该先找到与这些约束同层、同数据模型或同运维目标的服务，再排除“看起来也属于 AWS，但解决的是另一个层面问题”的选项。

### Q220.2-每个选项的定位

| 选项 | 题库内容 | 服务/概念定位 | 题库答案关系 |
|---|---|---|---|
| A | AWS Directory Service | 该选项是题库中的概念/服务描述。现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为非正确选项 |
| B | AWS Identity and Access Management (IAM) | AWS IAM：AWS 身份、认证授权与权限策略核心服务。 | 题库记录为非正确选项 |
| C | Amazon Cognito | Amazon Cognito：面向 Web/Mobile 应用终端用户的身份注册、登录与联合身份能力。 | 题库记录为正确选项 |
| D | AWS IAM Identity Center (AWS Single Sign-On) | AWS IAM Identity Center：集中管理多 AWS Account 和业务应用的员工访问。AWS IAM：AWS 身份、认证授权与权限策略核心服务。 | 题库记录为非正确选项 |

### Q220.3-为什么题库会这样选

题库记录的正确选项定位为：Amazon Cognito：面向 Web/Mobile 应用终端用户的身份注册、登录与联合身份能力。

它与题干要求的对象/约束直接对应。

其余选项虽然可能也属于同一大类，但主要解决不同问题。

---

---

## Q234-IAM-Role-Policy-MFA题

**题目：** Which AWS service or feature will search for and identify AWS resources that are shared externally?。

**选项：**

- A. Amazon OpenSearch Service
- B. AWS Control Tower
- C. AWS IAM Access Analyzer
- D. AWS Fargate

**主分类：** C4-14 IAM-Role-Policy-MFA题。

**题库记录答案：** `C`。

**社区投票：** C 100%

### Q234.1-题干怎么拆

现有题库没有提供独立 explanation。

这里按题干中的动作、对象和所有选项的服务定位进行比较。

### Q234.2-每个选项的定位

| 选项 | 题库内容 | 服务/概念定位 | 题库答案关系 |
|---|---|---|---|
| A | Amazon OpenSearch Service | Amazon OpenSearch Service：托管搜索、日志分析与可观测性搜索引擎服务。 | 题库记录为非正确选项 |
| B | AWS Control Tower | AWS Control Tower：基于最佳实践建立和治理多账号 Landing Zone。 | 题库记录为非正确选项 |
| C | AWS IAM Access Analyzer | AWS IAM：AWS 身份、认证授权与权限策略核心服务。 | 题库记录为正确选项 |
| D | AWS Fargate | AWS Fargate：为 ECS/EKS 提供不需要管理底层服务器的容器计算能力。 | 题库记录为非正确选项 |

### Q234.3-为什么题库会这样选

题库记录的正确选项定位为：AWS IAM：AWS 身份、认证授权与权限策略核心服务。

它与题干要求的对象/约束直接对应。

其余选项虽然可能也属于同一大类，但主要解决不同问题。

---

---

## Q279-IAM-Role-Policy-MFA题

**题目：** A developer wants AWS users to access AWS services by using temporary security credentials. Which AWS service or feature should the developer use to provide these credentials?。

**选项：**

- A. IAM policies
- B. IAM user groups
- C. AWS Security Token Service (AWS STS)
- D. AWS IAM Identity Center (AWS Single Sign-On)

**主分类：** C4-14 IAM-Role-Policy-MFA题。

**题库记录答案：** `C`。

**社区投票：** C 100%

### Q279.1-题干怎么拆

现有题库没有提供独立 explanation。

这里按题干中的动作、对象和所有选项的服务定位进行比较。

### Q279.2-每个选项的定位

| 选项 | 题库内容 | 服务/概念定位 | 题库答案关系 |
|---|---|---|---|
| A | IAM policies | AWS IAM：AWS 身份、认证授权与权限策略核心服务。 | 题库记录为非正确选项 |
| B | IAM user groups | AWS IAM：AWS 身份、认证授权与权限策略核心服务。 | 题库记录为非正确选项 |
| C | AWS Security Token Service (AWS STS) | 该选项是题库中的概念/服务描述。现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为正确选项 |
| D | AWS IAM Identity Center (AWS Single Sign-On) | AWS IAM Identity Center：集中管理多 AWS Account 和业务应用的员工访问。AWS IAM：AWS 身份、认证授权与权限策略核心服务。 | 题库记录为非正确选项 |

### Q279.3-为什么题库会这样选

题库记录的正确选项定位为：该选项是题库中的概念/服务描述。

现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。

它与题干要求的对象/约束直接对应。

其余选项虽然可能也属于同一大类，但主要解决不同问题。

---

---

## Q283-IAM-Role-Policy-MFA题

**题目：** A company wants to verify if multi-factor authentication (MFA) is enabled for all users within its AWS accounts. Which AWS service or resource will meet this requirement?。

**选项：**

- A. AWS Cost and Usage Report
- B. IAM credential reports
- C. AWS Artifact
- D. Amazon CloudFront reports

**主分类：** C4-14 IAM-Role-Policy-MFA题。

**题库记录答案：** `B`。

**需求/考点标签：** MFA。

**社区投票：** B 100%

### Q283.1-题干怎么拆

这道题先识别的不是某个服务名，而是这些约束：**MFA**。

判断时应该先找到与这些约束同层、同数据模型或同运维目标的服务，再排除“看起来也属于 AWS，但解决的是另一个层面问题”的选项。

### Q283.2-每个选项的定位

| 选项 | 题库内容 | 服务/概念定位 | 题库答案关系 |
|---|---|---|---|
| A | AWS Cost and Usage Report | AWS Cost and Usage Report：提供细粒度成本与使用明细数据。 | 题库记录为非正确选项 |
| B | IAM credential reports | AWS IAM：AWS 身份、认证授权与权限策略核心服务。 | 题库记录为正确选项 |
| C | AWS Artifact | AWS Artifact：按需访问 AWS 合规报告和部分协议的门户。 | 题库记录为非正确选项 |
| D | Amazon CloudFront reports | Amazon CloudFront：AWS CDN，利用 Edge Location 缓存和分发内容。 | 题库记录为非正确选项 |

### Q283.3-为什么题库会这样选

题库记录的正确选项定位为：AWS IAM：AWS 身份、认证授权与权限策略核心服务。

它与题干要求的对象/约束直接对应。

其余选项虽然可能也属于同一大类，但主要解决不同问题。

---

---

## Q288-IAM-Role-Policy-MFA题

**题目：** An external auditor has requested that a company provide a list of all its IAM users, including the status of users' credentials and access keys. What is the SIMPLEST way to provide this information?。

**选项：**

- A. Create an IAM user account for the auditor, granting the auditor administrator permissions.
- B. Take a screenshot of each user's page in the AWS Management Console, then provide the screenshots to the auditor.
- C. Download the IAM credential report, then provide the report to the auditor.
- D. Download the AWS Trusted Advisor report, then provide the report to the auditor.

**主分类：** C4-14 IAM-Role-Policy-MFA题。

**题库记录答案：** `C`。

**需求/考点标签：** Audit Trail。

**社区投票：** C 100%

### Q288.1-题干怎么拆

这道题先识别的不是某个服务名，而是这些约束：**Audit Trail**。

判断时应该先找到与这些约束同层、同数据模型或同运维目标的服务，再排除“看起来也属于 AWS，但解决的是另一个层面问题”的选项。

### Q288.2-每个选项的定位

| 选项 | 题库内容 | 服务/概念定位 | 题库答案关系 |
|---|---|---|---|
| A | Create an IAM user account for the auditor, granting the auditor administrator permissions. | AWS IAM：AWS 身份、认证授权与权限策略核心服务。 | 题库记录为非正确选项 |
| B | Take a screenshot of each user's page in the AWS Management Console, then provide the screenshots to the auditor. | 该选项描述 Shared Responsibility 中 AWS 侧的基础设施责任。 | 题库记录为非正确选项 |
| C | Download the IAM credential report, then provide the report to the auditor. | AWS IAM：AWS 身份、认证授权与权限策略核心服务。 | 题库记录为正确选项 |
| D | Download the AWS Trusted Advisor report, then provide the report to the auditor. | AWS Trusted Advisor：根据 AWS 最佳实践提供成本、安全、性能、可靠性等检查建议。 | 题库记录为非正确选项 |

### Q288.3-为什么题库会这样选

题库记录的正确选项定位为：AWS IAM：AWS 身份、认证授权与权限策略核心服务。

它与题干要求的对象/约束直接对应。

其余选项虽然可能也属于同一大类，但主要解决不同问题。

---

---

## Q296-IAM-Role-Policy-MFA题

**题目：** A company has a managed IAM policy that does not grant the necessary permissions for users to accomplish required tasks. How can this be resolved?。

**选项：**

- A. Enable AWS Shield Advanced.
- B. Create a custom IAM policy.
- C. Use a third-party web application firewall (WAF) managed rule from the AWS Marketplace.
- D. Use AWS Key Management Service (AWS KMS) to create a customer-managed key.

**主分类：** C4-14 IAM-Role-Policy-MFA题。

**题库记录答案：** `B`。

**社区投票：** B 100%

### Q296.1-题干怎么拆

现有题库没有提供独立 explanation。

这里按题干中的动作、对象和所有选项的服务定位进行比较。

### Q296.2-每个选项的定位

| 选项 | 题库内容 | 服务/概念定位 | 题库答案关系 |
|---|---|---|---|
| A | Enable AWS Shield Advanced. | AWS Shield：AWS DDoS 防护服务。 | 题库记录为非正确选项 |
| B | Create a custom IAM policy. | IAM Policy：用 JSON 等形式定义允许/拒绝哪些 AWS 操作。AWS IAM：AWS 身份、认证授权与权限策略核心服务。 | 题库记录为正确选项 |
| C | Use a third-party web application firewall (WAF) managed rule from the AWS Marketplace. | AWS Marketplace：查找、购买和部署第三方软件、数据与服务的数字目录。AWS WAF：Web 应用防火墙，过滤 HTTP(S) Web 请求。 | 题库记录为非正确选项 |
| D | Use AWS Key Management Service (AWS KMS) to create a customer-managed key. | AWS KMS：集中创建、控制和使用加密密钥。 | 题库记录为非正确选项 |

### Q296.3-为什么题库会这样选

题库记录的正确选项定位为：IAM Policy：用 JSON 等形式定义允许/拒绝哪些 AWS 操作。

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

[返回本章总述](./C4-14-00-章节总述.md)｜[查看本章概述](./C4-14-99-章节概述.md)

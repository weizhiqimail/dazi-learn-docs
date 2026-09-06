---
id: C4-14-07-IAM-Role-Policy-MFA题-Q433至Q482
sidebar_position: 7
---

# C4-14-07-IAM-Role-Policy-MFA题-Q433至Q482

> 本篇是《C4-14-IAM-Role-Policy-MFA题》的第7个分篇，主要包含：IAM-Role-Policy-MFA题、IAM-Role-Policy-MFA题、IAM-Role-Policy-MFA题、IAM-Role-Policy-MFA题、IAM-Role-Policy-MFA题、IAM-Role-Policy-MFA题。

## Q433-IAM-Role-Policy-MFA题

**题目：** A company wants to organize its users so that the company can grant permissions to the users as a group. Which AWS service or tool can the company use to meet this requirement?。

**选项：**

- A. Security groups
- B. AWS Identity and Access Management (IAM)
- C. Resource groups
- D. AWS Security Hub

**主分类：** C4-14 IAM-Role-Policy-MFA题。

**题库记录答案：** `B`。

**社区投票：** B 100%

### Q433.1-题干怎么拆

现有题库没有提供独立 explanation。

这里按题干中的动作、对象和所有选项的服务定位进行比较。

### Q433.2-每个选项的定位

| 选项 | 题库内容 | 服务/概念定位 | 题库答案关系 |
|---|---|---|---|
| A | Security groups | Security Group：资源/ENI 级有状态虚拟防火墙。 | 题库记录为非正确选项 |
| B | AWS Identity and Access Management (IAM) | AWS IAM：AWS 身份、认证授权与权限策略核心服务。 | 题库记录为正确选项 |
| C | Resource groups | 该选项是题库中的概念/服务描述。现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为非正确选项 |
| D | AWS Security Hub | AWS Security Hub：聚合安全发现并提供安全态势管理。 | 题库记录为非正确选项 |

### Q433.3-为什么题库会这样选

题库记录的正确选项定位为：AWS IAM：AWS 身份、认证授权与权限策略核心服务。

它与题干要求的对象/约束直接对应。

其余选项虽然可能也属于同一大类，但主要解决不同问题。

---

---

## Q447-IAM-Role-Policy-MFA题

**题目：** Which action should a company take to improve security in its AWS account?。

**选项：**

- A. Require multi-factor authentication (MFA) for privileged users.
- B. Remove the root user account.
- C. Create an access key for the AWS account root user.
- D. Create an access key for each privileged user.

**主分类：** C4-14 IAM-Role-Policy-MFA题。

**题库记录答案：** `A`。

**社区投票：** A 100%

### Q447.1-题干怎么拆

现有题库没有提供独立 explanation。

这里按题干中的动作、对象和所有选项的服务定位进行比较。

### Q447.2-每个选项的定位

| 选项 | 题库内容 | 服务/概念定位 | 题库答案关系 |
|---|---|---|---|
| A | Require multi-factor authentication (MFA) for privileged users. | MFA：多因素认证，增强账号登录安全。 | 题库记录为正确选项 |
| B | Remove the root user account. | Root User 拥有账号最高级权限，应强保护并避免日常使用。 | 题库记录为非正确选项 |
| C | Create an access key for the AWS account root user. | Root User 拥有账号最高级权限，应强保护并避免日常使用。 | 题库记录为非正确选项 |
| D | Create an access key for each privileged user. | 该选项是题库中的概念/服务描述。现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为非正确选项 |

### Q447.3-为什么题库会这样选

题库记录的正确选项定位为：MFA：多因素认证，增强账号登录安全。

它与题干要求的对象/约束直接对应。

其余选项虽然可能也属于同一大类，但主要解决不同问题。

---

---

## Q448-IAM-Role-Policy-MFA题

**题目：** Which of the following are ways to improve security on AWS? (Choose two.)。

**选项：**

- A. Using AWS Artifact
- B. Granting the broadest permissions to all IAM roles
- C. Running application code with AWS Cloud
- D. Enabling multi-factor authentication (MFA) with Amazon Cognito
- E. Using AWS Trusted Advisor security checks

**主分类：** C4-14 IAM-Role-Policy-MFA题。

**题库记录答案：** `DE`。

**社区投票：** DE 100%

### Q448.1-题干怎么拆

现有题库没有提供独立 explanation。

这里按题干中的动作、对象和所有选项的服务定位进行比较。

### Q448.2-每个选项的定位

| 选项 | 题库内容 | 服务/概念定位 | 题库答案关系 |
|---|---|---|---|
| A | Using AWS Artifact | AWS Artifact：按需访问 AWS 合规报告和部分协议的门户。 | 题库记录为非正确选项 |
| B | Granting the broadest permissions to all IAM roles | IAM Role：可被用户、AWS 服务或联合身份临时承担的权限身份。AWS IAM：AWS 身份、认证授权与权限策略核心服务。 | 题库记录为非正确选项 |
| C | Running application code with AWS Cloud | 该选项是题库中的概念/服务描述。现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为非正确选项 |
| D | Enabling multi-factor authentication (MFA) with Amazon Cognito | Amazon Cognito：面向 Web/Mobile 应用终端用户的身份注册、登录与联合身份能力。MFA：多因素认证，增强账号登录安全。 | 题库记录为正确选项 |
| E | Using AWS Trusted Advisor security checks | AWS Trusted Advisor：根据 AWS 最佳实践提供成本、安全、性能、可靠性等检查建议。 | 题库记录为正确选项 |

### Q448.3-为什么题库会这样选

题库记录的正确选项定位为：Amazon Cognito：面向 Web/Mobile 应用终端用户的身份注册、登录与联合身份能力。

MFA：多因素认证，增强账号登录安全。

AWS Trusted Advisor：根据 AWS 最佳实践提供成本、安全、性能、可靠性等检查建议。

它与题干要求的对象/约束直接对应。

其余选项虽然可能也属于同一大类，但主要解决不同问题。

---

---

## Q474-IAM-Role-Policy-MFA题

**题目：** A company needs to manage multiple logins across AWS accounts within the same organization in AWS Organizations. Which AWS service should the company use to meet this requirement?。

**选项：**

- A. Amazon VPC
- B. Amazon GuardDuty
- C. Amazon Cognito
- D. AWS IAM Identity Center

**主分类：** C4-14 IAM-Role-Policy-MFA题。

**题库记录答案：** `D`。

**需求/考点标签：** Governance。

**社区投票：** D 100%

### Q474.1-题干怎么拆

这道题先识别的不是某个服务名，而是这些约束：**Governance**。

判断时应该先找到与这些约束同层、同数据模型或同运维目标的服务，再排除“看起来也属于 AWS，但解决的是另一个层面问题”的选项。

### Q474.2-每个选项的定位

| 选项 | 题库内容 | 服务/概念定位 | 题库答案关系 |
|---|---|---|---|
| A | Amazon VPC | Amazon VPC：AWS 中用户定义的逻辑隔离虚拟网络。 | 题库记录为非正确选项 |
| B | Amazon GuardDuty | Amazon GuardDuty：基于多种日志与威胁情报进行持续威胁检测。 | 题库记录为非正确选项 |
| C | Amazon Cognito | Amazon Cognito：面向 Web/Mobile 应用终端用户的身份注册、登录与联合身份能力。 | 题库记录为非正确选项 |
| D | AWS IAM Identity Center | AWS IAM Identity Center：集中管理多 AWS Account 和业务应用的员工访问。AWS IAM：AWS 身份、认证授权与权限策略核心服务。 | 题库记录为正确选项 |

### Q474.3-为什么题库会这样选

题库记录的正确选项定位为：AWS IAM Identity Center：集中管理多 AWS Account 和业务应用的员工访问。

AWS IAM：AWS 身份、认证授权与权限策略核心服务。

它与题干要求的对象/约束直接对应。

其余选项虽然可能也属于同一大类，但主要解决不同问题。

---

---

## Q477-IAM-Role-Policy-MFA题

**题目：** A company uses a third-party identity provider (IdP). The company wants to provide its employees with access to AWS accounts and services without requiring another set of login credentials. Which AWS service will meet this requirement?

**选项：**

- A. AWS Directory Service
- B. Amazon Cognito
- C. AWS IAM Identity Center
- D. AWS Resource Access Manager (AWS RAM)

**主分类：** C4-14 IAM-Role-Policy-MFA题。

**题库记录答案：** `C`。

**社区投票：** C 76%, B 18%, A 6%。

### Q477.1-题干怎么拆

现有题库没有提供独立 explanation。

这里按题干中的动作、对象和所有选项的服务定位进行比较。

### Q477.2-每个选项的定位

| 选项 | 题库内容 | 服务/概念定位 | 题库答案关系 |
|---|---|---|---|
| A | AWS Directory Service | 该选项是题库中的概念/服务描述。现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为非正确选项 |
| B | Amazon Cognito | Amazon Cognito：面向 Web/Mobile 应用终端用户的身份注册、登录与联合身份能力。 | 题库记录为非正确选项 |
| C | AWS IAM Identity Center | AWS IAM Identity Center：集中管理多 AWS Account 和业务应用的员工访问。AWS IAM：AWS 身份、认证授权与权限策略核心服务。 | 题库记录为正确选项 |
| D | AWS Resource Access Manager (AWS RAM) | AWS RAM：在账号/组织之间共享支持的 AWS 资源。 | 题库记录为非正确选项 |

### Q477.3-为什么题库会这样选

题库记录的正确选项定位为：AWS IAM Identity Center：集中管理多 AWS Account 和业务应用的员工访问。

AWS IAM：AWS 身份、认证授权与权限策略核心服务。

它与题干要求的对象/约束直接对应。

其余选项虽然可能也属于同一大类，但主要解决不同问题。

---

---

## Q482-IAM-Role-Policy-MFA题

**题目：** Which of the following are AWS best practice recommendations for the use of AWS Identity and Access Management (IAM)? (Choose two.)。

**选项：**

- A. Use the AWS account root user for daily access.
- B. Use access keys and secret access keys on Amazon EC2.
- C. Rotate credentials on a regular basis.
- D. Create a shared set of access keys for system administrators.
- E. Configure multi-factor authentication (MFA).

**主分类：** C4-14 IAM-Role-Policy-MFA题。

**题库记录答案：** `CE`。

**社区投票：** CE 100%

### Q482.1-题干怎么拆

现有题库没有提供独立 explanation。

这里按题干中的动作、对象和所有选项的服务定位进行比较。

### Q482.2-每个选项的定位

| 选项 | 题库内容 | 服务/概念定位 | 题库答案关系 |
|---|---|---|---|
| A | Use the AWS account root user for daily access. | Root User 拥有账号最高级权限，应强保护并避免日常使用。 | 题库记录为非正确选项 |
| B | Use access keys and secret access keys on Amazon EC2. | Amazon EC2：可配置虚拟服务器，适合需要 OS/实例级控制的计算工作负载。 | 题库记录为非正确选项 |
| C | Rotate credentials on a regular basis. | 该选项是题库中的概念/服务描述。现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为正确选项 |
| D | Create a shared set of access keys for system administrators. | 该选项是题库中的概念/服务描述。现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为非正确选项 |
| E | Configure multi-factor authentication (MFA). | MFA：多因素认证，增强账号登录安全。 | 题库记录为正确选项 |

### Q482.3-为什么题库会这样选

题库记录的正确选项定位为：该选项是题库中的概念/服务描述。

现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。

MFA：多因素认证，增强账号登录安全。

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

---
id: 05-IAM-Role-Policy-MFA题-等
sidebar_position: 5
---

# C4-14-IAM-Role-Policy-MFA题-IAM-Role-Policy-MFA题与IAM-Role-Policy-MFA题与IAM-Role-Policy-MFA题与IAM-Role-Policy-MFA题与IAM-Role-Policy-MFA题与IAM-Role-Policy-MFA题

> 本篇是《C4-14-IAM-Role-Policy-MFA题》的第5个分篇，主要包含：IAM-Role-Policy-MFA题、IAM-Role-Policy-MFA题、IAM-Role-Policy-MFA题、IAM-Role-Policy-MFA题、IAM-Role-Policy-MFA题、IAM-Role-Policy-MFA题。

## Q301-IAM-Role-Policy-MFA题

**题目：** Which of the following is a characteristic of the AWS account root user?。

**选项：**

- A. The root user is the only user that can be configured with multi-factor authentication (MFA).
- B. The root user is the only user that can access the AWS Management Console.
- C. The root user is the first sign-in identity that is available when an AWS account is created.
- D. The root user has a password that cannot be changed.

**主分类：** C4-14 IAM-Role-Policy-MFA题。

**题库记录答案：** `C`。

**社区投票：** C 100%

### Q301.1-题干怎么拆

现有题库没有提供独立 explanation。

这里按题干中的动作、对象和所有选项的服务定位进行比较。

### Q301.2-每个选项的定位

| 选项 | 题库内容 | 服务/概念定位 | 题库答案关系 |
|---|---|---|---|
| A | The root user is the only user that can be configured with multi-factor authentication (MFA). | MFA：多因素认证，增强账号登录安全。 | 题库记录为非正确选项 |
| B | The root user is the only user that can access the AWS Management Console. | Root User 拥有账号最高级权限，应强保护并避免日常使用。 | 题库记录为非正确选项 |
| C | The root user is the first sign-in identity that is available when an AWS account is created. | Root User 拥有账号最高级权限，应强保护并避免日常使用。 | 题库记录为正确选项 |
| D | The root user has a password that cannot be changed. | Root User 拥有账号最高级权限，应强保护并避免日常使用。 | 题库记录为非正确选项 |

### Q301.3-为什么题库会这样选

题库记录的正确选项定位为：Root User 拥有账号最高级权限，应强保护并避免日常使用。

它与题干要求的对象/约束直接对应。

其余选项虽然可能也属于同一大类，但主要解决不同问题。

---

---

## Q306-IAM-Role-Policy-MFA题

**题目：** A company wants to quickly implement a continuous integration/continuous delivery (CI/CD) pipeline. Which AWS service will meet this requirement?。

**选项：**

- A. AWS Config
- B. Amazon Cognito
- C. AWS DataSync
- D. AWS CodeStar

**主分类：** C4-14 IAM-Role-Policy-MFA题。

**题库记录答案：** `D`。

**社区投票：** D 100%

### Q306.1-题干怎么拆

现有题库没有提供独立 explanation。

这里按题干中的动作、对象和所有选项的服务定位进行比较。

### Q306.2-每个选项的定位

| 选项 | 题库内容 | 服务/概念定位 | 题库答案关系 |
|---|---|---|---|
| A | AWS Config | AWS Config：记录资源配置与变化，并可按规则检查配置合规性。 | 题库记录为非正确选项 |
| B | Amazon Cognito | Amazon Cognito：面向 Web/Mobile 应用终端用户的身份注册、登录与联合身份能力。 | 题库记录为非正确选项 |
| C | AWS DataSync | AWS DataSync：在线高速自动化传输文件/对象数据到、从 AWS 存储。 | 题库记录为非正确选项 |
| D | AWS CodeStar | 该选项是题库中的概念/服务描述。现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为正确选项 |

### Q306.3-为什么题库会这样选

题库记录的正确选项定位为：该选项是题库中的概念/服务描述。

现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。

它与题干要求的对象/约束直接对应。

其余选项虽然可能也属于同一大类，但主要解决不同问题。

---

---

## Q336-IAM-Role-Policy-MFA题

**题目：** A company wants to generate a list of IAM users. The company also wants to view the status of various credentials that are associated with the users, such as password, access keys, and multi-factor authentication (MFA) devices. Which AWS service or feature will meet these requirements?

**选项：**

- A. IAM credential report
- B. AWS IAM Identity Center (AWS Single Sign-On)
- C. AWS Identity and Access Management Access Analyzer
- D. AWS Cost and Usage Report

**主分类：** C4-14 IAM-Role-Policy-MFA题。

**题库记录答案：** `A`。

**需求/考点标签：** MFA。

**社区投票：** A 100%

### Q336.1-题干怎么拆

这道题先识别的不是某个服务名，而是这些约束：**MFA**。

判断时应该先找到与这些约束同层、同数据模型或同运维目标的服务，再排除“看起来也属于 AWS，但解决的是另一个层面问题”的选项。

### Q336.2-每个选项的定位

| 选项 | 题库内容 | 服务/概念定位 | 题库答案关系 |
|---|---|---|---|
| A | IAM credential report | AWS IAM：AWS 身份、认证授权与权限策略核心服务。 | 题库记录为正确选项 |
| B | AWS IAM Identity Center (AWS Single Sign-On) | AWS IAM Identity Center：集中管理多 AWS Account 和业务应用的员工访问。AWS IAM：AWS 身份、认证授权与权限策略核心服务。 | 题库记录为非正确选项 |
| C | AWS Identity and Access Management Access Analyzer | AWS IAM：AWS 身份、认证授权与权限策略核心服务。 | 题库记录为非正确选项 |
| D | AWS Cost and Usage Report | AWS Cost and Usage Report：提供细粒度成本与使用明细数据。 | 题库记录为非正确选项 |

### Q336.3-为什么题库会这样选

题库记录的正确选项定位为：AWS IAM：AWS 身份、认证授权与权限策略核心服务。

它与题干要求的对象/约束直接对应。

其余选项虽然可能也属于同一大类，但主要解决不同问题。

---

---

## Q339-IAM-Role-Policy-MFA题

**题目：** A company wants to allow users to authenticate and authorize multiple AWS accounts by using a single set of credentials. Which AWS service or resource will meet this requirement?。

**选项：**

- A. AWS Organizations
- B. IAM user
- C. AWS IAM Identity Center (AWS Single Sign-On)
- D. AWS Control Tower

**主分类：** C4-14 IAM-Role-Policy-MFA题。

**题库记录答案：** `C`。

**社区投票：** C 100%

### Q339.1-题干怎么拆

现有题库没有提供独立 explanation。

这里按题干中的动作、对象和所有选项的服务定位进行比较。

### Q339.2-每个选项的定位

| 选项 | 题库内容 | 服务/概念定位 | 题库答案关系 |
|---|---|---|---|
| A | AWS Organizations | AWS Organizations：集中组织和治理多个 AWS Account，并支持 Consolidated Billing、SCP 等。 | 题库记录为非正确选项 |
| B | IAM user | AWS IAM：AWS 身份、认证授权与权限策略核心服务。 | 题库记录为非正确选项 |
| C | AWS IAM Identity Center (AWS Single Sign-On) | AWS IAM Identity Center：集中管理多 AWS Account 和业务应用的员工访问。AWS IAM：AWS 身份、认证授权与权限策略核心服务。 | 题库记录为正确选项 |
| D | AWS Control Tower | AWS Control Tower：基于最佳实践建立和治理多账号 Landing Zone。 | 题库记录为非正确选项 |

### Q339.3-为什么题库会这样选

题库记录的正确选项定位为：AWS IAM Identity Center：集中管理多 AWS Account 和业务应用的员工访问。

AWS IAM：AWS 身份、认证授权与权限策略核心服务。

它与题干要求的对象/约束直接对应。

其余选项虽然可能也属于同一大类，但主要解决不同问题。

---

---

## Q343-IAM-Role-Policy-MFA题

**题目：** A company is migrating its applications from on-premises to the AWS Cloud. The company wants to ensure that the applications are assigned only the minimum permissions that are needed to perform all operations. Which AWS service will meet these requirements?

**选项：**

- A. AWS Identity and Access Management (IAM)
- B. Amazon CloudWatch
- C. Amazon Macie
- D. Amazon GuardDuty

**主分类：** C4-14 IAM-Role-Policy-MFA题。

**题库记录答案：** `A`。

**需求/考点标签：** Hybrid Cloud。

**社区投票：** A 100%

### Q343.1-题干怎么拆

这道题先识别的不是某个服务名，而是这些约束：**Hybrid Cloud**。

判断时应该先找到与这些约束同层、同数据模型或同运维目标的服务，再排除“看起来也属于 AWS，但解决的是另一个层面问题”的选项。

### Q343.2-每个选项的定位

| 选项 | 题库内容 | 服务/概念定位 | 题库答案关系 |
|---|---|---|---|
| A | AWS Identity and Access Management (IAM) | AWS IAM：AWS 身份、认证授权与权限策略核心服务。 | 题库记录为正确选项 |
| B | Amazon CloudWatch | Amazon CloudWatch：Metrics/Logs/Alarms 等运行时监控与可观测性服务。 | 题库记录为非正确选项 |
| C | Amazon Macie | Amazon Macie：发现和保护 S3 中的敏感数据。 | 题库记录为非正确选项 |
| D | Amazon GuardDuty | Amazon GuardDuty：基于多种日志与威胁情报进行持续威胁检测。 | 题库记录为非正确选项 |

### Q343.3-为什么题库会这样选

题库记录的正确选项定位为：AWS IAM：AWS 身份、认证授权与权限策略核心服务。

它与题干要求的对象/约束直接对应。

其余选项虽然可能也属于同一大类，但主要解决不同问题。

---

---

## Q348-IAM-Role-Policy-MFA题

**题目：** Which task requires a user to sign in as the AWS account root user?。

**选项：**

- A. The deletion of IAM users
- B. The deletion of an AWS account
- C. The creation of an organization in AWS Organizations
- D. The deletion of Amazon EC2 instances

**主分类：** C4-14 IAM-Role-Policy-MFA题。

**题库记录答案：** `B`。

**社区投票：** B 82%, C 18%。

### Q348.1-题干怎么拆

现有题库没有提供独立 explanation。

这里按题干中的动作、对象和所有选项的服务定位进行比较。

### Q348.2-每个选项的定位

| 选项 | 题库内容 | 服务/概念定位 | 题库答案关系 |
|---|---|---|---|
| A | The deletion of IAM users | AWS IAM：AWS 身份、认证授权与权限策略核心服务。 | 题库记录为非正确选项 |
| B | The deletion of an AWS account | 该选项是题库中的概念/服务描述。现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为正确选项 |
| C | The creation of an organization in AWS Organizations | AWS Organizations：集中组织和治理多个 AWS Account，并支持 Consolidated Billing、SCP 等。 | 题库记录为非正确选项 |
| D | The deletion of Amazon EC2 instances | Amazon EC2：可配置虚拟服务器，适合需要 OS/实例级控制的计算工作负载。 | 题库记录为非正确选项 |

### Q348.3-为什么题库会这样选

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

[返回本章总述](./00-总述.md)｜[查看本章概述](./99-概述.md)

---
id: 02-IAM-Role-Policy-MFA题-等
sidebar_position: 2
---

# C4-14-IAM-Role-Policy-MFA题-IAM-Role-Policy-MFA题与IAM-Role-Policy-MFA题与IAM-Role-Policy-MFA题与IAM-Role-Policy-MFA题与IAM-Role-Policy-MFA题与IAM-Role-Policy-MFA题

> 本篇是《C4-14-IAM-Role-Policy-MFA题》的第2个分篇，主要包含：IAM-Role-Policy-MFA题、IAM-Role-Policy-MFA题、IAM-Role-Policy-MFA题、IAM-Role-Policy-MFA题、IAM-Role-Policy-MFA题、IAM-Role-Policy-MFA题。

## Q99-IAM-Role-Policy-MFA题

**题目：** Which task is the responsibility of AWS when using AWS services?。

**选项：**

- A. Management of IAM user permissions
- B. Creation of security group rules for outbound access
- C. Maintenance of physical and environmental controls
- D. Application of Amazon EC2 operating system patches

**主分类：** C4-14 IAM-Role-Policy-MFA题。

**题库记录答案：** `C`。

**社区投票：** C 99%

### Q99.1-题干怎么拆

现有题库没有提供独立 explanation。

这里按题干中的动作、对象和所有选项的服务定位进行比较。

### Q99.2-每个选项的定位

| 选项 | 题库内容 | 服务/概念定位 | 题库答案关系 |
|---|---|---|---|
| A | Management of IAM user permissions | AWS IAM：AWS 身份、认证授权与权限策略核心服务。 | 题库记录为非正确选项 |
| B | Creation of security group rules for outbound access | Security Group：资源/ENI 级有状态虚拟防火墙。 | 题库记录为非正确选项 |
| C | Maintenance of physical and environmental controls | 该选项是题库中的概念/服务描述。现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为正确选项 |
| D | Application of Amazon EC2 operating system patches | Amazon EC2：可配置虚拟服务器，适合需要 OS/实例级控制的计算工作负载。 | 题库记录为非正确选项 |

### Q99.3-为什么题库会这样选

题库记录的正确选项定位为：该选项是题库中的概念/服务描述。

现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。

它与题干要求的对象/约束直接对应。

其余选项虽然可能也属于同一大类，但主要解决不同问题。

---

---

## Q106-IAM-Role-Policy-MFA题

**题目：** A developer has been hired by a large company and needs AWS credentials. Which are security best practices that should be followed? (Choose two.)。

**选项：**

- A. Grant the developer access to only the AWS resources needed to perform the job.
- B. Share the AWS account root user credentials with the developer.
- C. Add the developer to the administrator’s group in AWS IAM.
- D. Configure a password policy that ensures the developer’s password cannot be changed.
- E. Ensure the account password policy requires a minimum length.

**主分类：** C4-14 IAM-Role-Policy-MFA题。

**题库记录答案：** `AE`。

**社区投票：** AE 91%, AD 9%。

### Q106.1-题干怎么拆

现有题库没有提供独立 explanation。

这里按题干中的动作、对象和所有选项的服务定位进行比较。

### Q106.2-每个选项的定位

| 选项 | 题库内容 | 服务/概念定位 | 题库答案关系 |
|---|---|---|---|
| A | Grant the developer access to only the AWS resources needed to perform the job. | 该选项是题库中的概念/服务描述。现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为正确选项 |
| B | Share the AWS account root user credentials with the developer. | Root User 拥有账号最高级权限，应强保护并避免日常使用。 | 题库记录为非正确选项 |
| C | Add the developer to the administrator’s group in AWS IAM. | AWS IAM：AWS 身份、认证授权与权限策略核心服务。 | 题库记录为非正确选项 |
| D | Configure a password policy that ensures the developer’s password cannot be changed. | 该选项是题库中的概念/服务描述。现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为非正确选项 |
| E | Ensure the account password policy requires a minimum length. | 该选项是题库中的概念/服务描述。现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为正确选项 |

### Q106.3-为什么题库会这样选

题库记录的正确选项定位为：该选项是题库中的概念/服务描述。

现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。

该选项是题库中的概念/服务描述。

现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。

它与题干要求的对象/约束直接对应。

其余选项虽然可能也属于同一大类，但主要解决不同问题。

### Q106.4-⚠-争议/版本提示

- 社区评论存在明显质疑/版本差异信号
- 本题同时收录到 `C4-27-旧题争议题与当前AWS差异.md`，不在这里强行替题库修正答案。

---

---

## Q108-IAM-Role-Policy-MFA题

**题目：** A user wants to allow applications running on an Amazon EC2 instance to make calls to other AWS services. The access granted must be secure. Which AWS service or feature should be used?。

**选项：**

- A. Security groups
- B. AWS Firewall Manager
- C. IAM roles
- D. IAM user SSH keys

**主分类：** C4-14 IAM-Role-Policy-MFA题。

**题库记录答案：** `C`。

**社区投票：** C 93%, A 7%。

### Q108.1-题干怎么拆

现有题库没有提供独立 explanation。

这里按题干中的动作、对象和所有选项的服务定位进行比较。

### Q108.2-每个选项的定位

| 选项 | 题库内容 | 服务/概念定位 | 题库答案关系 |
|---|---|---|---|
| A | Security groups | Security Group：资源/ENI 级有状态虚拟防火墙。 | 题库记录为非正确选项 |
| B | AWS Firewall Manager | 该选项描述 Shared Responsibility 中 AWS 侧的基础设施责任。 | 题库记录为非正确选项 |
| C | IAM roles | IAM Role：可被用户、AWS 服务或联合身份临时承担的权限身份。AWS IAM：AWS 身份、认证授权与权限策略核心服务。 | 题库记录为正确选项 |
| D | IAM user SSH keys | AWS IAM：AWS 身份、认证授权与权限策略核心服务。 | 题库记录为非正确选项 |

### Q108.3-为什么题库会这样选

题库记录的正确选项定位为：IAM Role：可被用户、AWS 服务或联合身份临时承担的权限身份。

AWS IAM：AWS 身份、认证授权与权限策略核心服务。

它与题干要求的对象/约束直接对应。

其余选项虽然可能也属于同一大类，但主要解决不同问题。

### Q108.4-⚠-争议/版本提示

- 社区评论存在明显质疑/版本差异信号
- 本题同时收录到 `C4-27-旧题争议题与当前AWS差异.md`，不在这里强行替题库修正答案。

---

---

## Q149-IAM-Role-Policy-MFA题

**题目：** A systems administrator created a new IAM user for a developer and assigned the user an access key instead of a user name and password. What is the access key used for?。

**选项：**

- A. To access the AWS account as the AWS account root user
- B. To access the AWS account through the AWS Management Console
- C. To access the AWS account through a CLI
- D. To access all of a company’s AWS accounts

**主分类：** C4-14 IAM-Role-Policy-MFA题。

**题库记录答案：** `C`。

**社区投票：** C 100%

### Q149.1-题干怎么拆

现有题库没有提供独立 explanation。

这里按题干中的动作、对象和所有选项的服务定位进行比较。

### Q149.2-每个选项的定位

| 选项 | 题库内容 | 服务/概念定位 | 题库答案关系 |
|---|---|---|---|
| A | To access the AWS account as the AWS account root user | Root User 拥有账号最高级权限，应强保护并避免日常使用。 | 题库记录为非正确选项 |
| B | To access the AWS account through the AWS Management Console | 该选项描述 Shared Responsibility 中 AWS 侧的基础设施责任。 | 题库记录为非正确选项 |
| C | To access the AWS account through a CLI | 该选项是题库中的概念/服务描述。现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为正确选项 |
| D | To access all of a company’s AWS accounts | 该选项是题库中的概念/服务描述。现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为非正确选项 |

### Q149.3-为什么题库会这样选

题库记录的正确选项定位为：该选项是题库中的概念/服务描述。

现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。

它与题干要求的对象/约束直接对应。

其余选项虽然可能也属于同一大类，但主要解决不同问题。

---

---

## Q160-IAM-Role-Policy-MFA题

**题目：** Which actions are best practices for an AWS account root user? (Choose two.)。

**选项：**

- A. Share root user credentials with team members.
- B. Create multiple root users for the account, separated by environment.
- C. Enable multi-factor authentication (MFA) on the root user.
- D. Create an IAM user with administrator privileges for daily administrative tasks, instead of using the root user.
- E. Use programmatic access instead of the root user and password.

**主分类：** C4-14 IAM-Role-Policy-MFA题。

**题库记录答案：** `CD`。

**社区投票：** CD 100%

### Q160.1-题干怎么拆

现有题库没有提供独立 explanation。

这里按题干中的动作、对象和所有选项的服务定位进行比较。

### Q160.2-每个选项的定位

| 选项 | 题库内容 | 服务/概念定位 | 题库答案关系 |
|---|---|---|---|
| A | Share root user credentials with team members. | Root User 拥有账号最高级权限，应强保护并避免日常使用。 | 题库记录为非正确选项 |
| B | Create multiple root users for the account, separated by environment. | Root User 拥有账号最高级权限，应强保护并避免日常使用。 | 题库记录为非正确选项 |
| C | Enable multi-factor authentication (MFA) on the root user. | MFA：多因素认证，增强账号登录安全。 | 题库记录为正确选项 |
| D | Create an IAM user with administrator privileges for daily administrative tasks, instead of using the root user. | AWS IAM：AWS 身份、认证授权与权限策略核心服务。 | 题库记录为正确选项 |
| E | Use programmatic access instead of the root user and password. | Root User 拥有账号最高级权限，应强保护并避免日常使用。 | 题库记录为非正确选项 |

### Q160.3-为什么题库会这样选

题库记录的正确选项定位为：MFA：多因素认证，增强账号登录安全。

AWS IAM：AWS 身份、认证授权与权限策略核心服务。

它与题干要求的对象/约束直接对应。

其余选项虽然可能也属于同一大类，但主要解决不同问题。

---

---

## Q165-IAM-Role-Policy-MFA题

**题目：** A company wants to identify Amazon S3 buckets that are shared with another AWS account. Which AWS service or feature will meet these requirements?。

**选项：**

- A. AWS Lake Formation
- B. IAM credential report
- C. Amazon CloudWatch
- D. IAM Access Analyzer

**主分类：** C4-14 IAM-Role-Policy-MFA题。

**题库记录答案：** `D`。

**需求/考点标签：** Object Storage。

**社区投票：** D 100%

### Q165.1-题干怎么拆

这道题先识别的不是某个服务名，而是这些约束：**Object Storage**。

判断时应该先找到与这些约束同层、同数据模型或同运维目标的服务，再排除“看起来也属于 AWS，但解决的是另一个层面问题”的选项。

### Q165.2-每个选项的定位

| 选项 | 题库内容 | 服务/概念定位 | 题库答案关系 |
|---|---|---|---|
| A | AWS Lake Formation | AWS Lake Formation：帮助构建、管理和治理数据湖。 | 题库记录为非正确选项 |
| B | IAM credential report | AWS IAM：AWS 身份、认证授权与权限策略核心服务。 | 题库记录为非正确选项 |
| C | Amazon CloudWatch | Amazon CloudWatch：Metrics/Logs/Alarms 等运行时监控与可观测性服务。 | 题库记录为非正确选项 |
| D | IAM Access Analyzer | AWS IAM：AWS 身份、认证授权与权限策略核心服务。 | 题库记录为正确选项 |

### Q165.3-为什么题库会这样选

题库记录的正确选项定位为：AWS IAM：AWS 身份、认证授权与权限策略核心服务。

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

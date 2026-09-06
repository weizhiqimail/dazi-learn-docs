---
id: C4-16-02-KMS-Secrets-加密与凭证题-Q526至Q636
sidebar_position: 2
---

# C4-16-02-KMS-Secrets-加密与凭证题-Q526至Q636

> 本篇是《C4-16-KMS-Secrets-加密与凭证题》的第2个分篇，主要包含：KMS-Secrets-加密与凭证题、KMS-Secrets-加密与凭证题、KMS-Secrets-加密与凭证题。

## Q526-KMS-Secrets-加密与凭证题

**题目：** What is the MOST secure way to store passwords on AWS?。

**选项：**

- A. Store passwords in an Amazon S3 bucket.
- B. Store passwords as AWS CloudFormation parameters.
- C. Store passwords in AWS Storage Gateway.
- D. Store passwords in AWS Secrets Manager.

**主分类：** C4-16 KMS-Secrets-加密与凭证题。

**题库记录答案：** `D`。

**需求/考点标签：** 关系数据库高可用。

**社区投票：** D 100%

### Q526.1-题干怎么拆

这道题先识别的不是某个服务名，而是这些约束：**关系数据库高可用**。

判断时应该先找到与这些约束同层、同数据模型或同运维目标的服务，再排除“看起来也属于 AWS，但解决的是另一个层面问题”的选项。

### Q526.2-每个选项的定位

| 选项 | 题库内容 | 服务/概念定位 | 题库答案关系 |
|---|---|---|---|
| A | Store passwords in an Amazon S3 bucket. | Amazon S3：高耐久、可扩展的对象存储，以 Bucket/Object 组织数据。 | 题库记录为非正确选项 |
| B | Store passwords as AWS CloudFormation parameters. | AWS CloudFormation：AWS Infrastructure as Code，用模板声明和部署资源。 | 题库记录为非正确选项 |
| C | Store passwords in AWS Storage Gateway. | AWS Storage Gateway：把本地环境通过文件/卷/虚拟磁带等接口连接 AWS 存储的混合存储服务。 | 题库记录为非正确选项 |
| D | Store passwords in AWS Secrets Manager. | AWS Secrets Manager：安全保存、检索和轮换数据库密码/API Key 等 Secret。 | 题库记录为正确选项 |

### Q526.3-为什么题库会这样选

题库记录的正确选项定位为：AWS Secrets Manager：安全保存、检索和轮换数据库密码/API Key 等 Secret。

它与题干要求的对象/约束直接对应。

其余选项虽然可能也属于同一大类，但主要解决不同问题。

---

---

## Q623-KMS-Secrets-加密与凭证题

**题目：** A company wants to securely store Amazon RDS database credentials and automatically rotate user passwords periodically. Which AWS service or capability will meet these requirements?。

**选项：**

- A. Amazon S3
- B. AWS Systems Manager Parameter Store
- C. AWS Secrets Manager
- D. AWS CloudTrail

**主分类：** C4-16 KMS-Secrets-加密与凭证题。

**题库记录答案：** `C`。

**需求/考点标签：** 关系数据库高可用。

### Q623.1-题干怎么拆

这道题先识别的不是某个服务名，而是这些约束：**关系数据库高可用**。

判断时应该先找到与这些约束同层、同数据模型或同运维目标的服务，再排除“看起来也属于 AWS，但解决的是另一个层面问题”的选项。

### Q623.2-每个选项的定位

| 选项 | 题库内容 | 服务/概念定位 | 题库答案关系 |
|---|---|---|---|
| A | Amazon S3 | Amazon S3：高耐久、可扩展的对象存储，以 Bucket/Object 组织数据。 | 题库记录为非正确选项 |
| B | AWS Systems Manager Parameter Store | AWS Systems Manager：集中运维和自动化管理 AWS/混合环境中的节点与资源。 | 题库记录为非正确选项 |
| C | AWS Secrets Manager | AWS Secrets Manager：安全保存、检索和轮换数据库密码/API Key 等 Secret。 | 题库记录为正确选项 |
| D | AWS CloudTrail | AWS CloudTrail：记录 AWS API/账号活动，回答谁在什么时候做了什么操作。 | 题库记录为非正确选项 |

### Q623.3-为什么题库会这样选

题库记录的正确选项定位为：AWS Secrets Manager：安全保存、检索和轮换数据库密码/API Key 等 Secret。

它与题干要求的对象/约束直接对应。

其余选项虽然可能也属于同一大类，但主要解决不同问题。

---

---

## Q636-KMS-Secrets-加密与凭证题

**题目：** Which AWS service integrates with other AWS services to provide the ability to encrypt data at rest?。

**选项：**

- A. AWS Key Management Service (AWS KMS)
- B. AWS Certificate Manager (ACM)
- C. AWS Identity and Access Management (IAM)
- D. AWS Security Hub

**主分类：** C4-16 KMS-Secrets-加密与凭证题。

**题库记录答案：** `A`。

**需求/考点标签：** Encryption。

**社区投票：** A 100%

### Q636.1-题干怎么拆

这道题先识别的不是某个服务名，而是这些约束：**Encryption**。

判断时应该先找到与这些约束同层、同数据模型或同运维目标的服务，再排除“看起来也属于 AWS，但解决的是另一个层面问题”的选项。

### Q636.2-每个选项的定位

| 选项 | 题库内容 | 服务/概念定位 | 题库答案关系 |
|---|---|---|---|
| A | AWS Key Management Service (AWS KMS) | AWS KMS：集中创建、控制和使用加密密钥。 | 题库记录为正确选项 |
| B | AWS Certificate Manager (ACM) | AWS Certificate Manager：供应和管理 TLS/SSL 证书。 | 题库记录为非正确选项 |
| C | AWS Identity and Access Management (IAM) | AWS IAM：AWS 身份、认证授权与权限策略核心服务。 | 题库记录为非正确选项 |
| D | AWS Security Hub | AWS Security Hub：聚合安全发现并提供安全态势管理。 | 题库记录为非正确选项 |

### Q636.3-为什么题库会这样选

题库记录的正确选项定位为：AWS KMS：集中创建、控制和使用加密密钥。

它与题干要求的对象/约束直接对应。

其余选项虽然可能也属于同一大类，但主要解决不同问题。

---

## 本篇概述

- 本篇梳理了KMS-Secrets-加密与凭证题相关的核心知识、适用场景与判断要点。
- 本篇梳理了KMS-Secrets-加密与凭证题相关的核心知识、适用场景与判断要点。
- 本篇梳理了KMS-Secrets-加密与凭证题相关的核心知识、适用场景与判断要点。

[返回本章总述](./C4-16-00-章节总述.md)｜[查看本章概述](./C4-16-99-章节概述.md)

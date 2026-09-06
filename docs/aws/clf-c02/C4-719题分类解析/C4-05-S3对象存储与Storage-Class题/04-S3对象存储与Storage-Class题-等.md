---
id: 04-S3对象存储与Storage-Class题-等
sidebar_position: 4
---

# C4-05-S3对象存储与Storage-Class题-S3对象存储与Storage-Class题与S3对象存储与Storage-Class题与S3对象存储与Storage-Class题与S3对象存储与Storage-Class题与S3对象存储与Storage-Class题与S3对象存储与Storage-Class题

> 本篇是《C4-05-S3对象存储与Storage-Class题》的第4个分篇，主要包含：S3对象存储与Storage-Class题、S3对象存储与Storage-Class题、S3对象存储与Storage-Class题、S3对象存储与Storage-Class题、S3对象存储与Storage-Class题、S3对象存储与Storage-Class题。

## Q450-S3对象存储与Storage-Class题

**题目：** A company wants to store its files in the AWS Cloud. Users need to be able to download these files directly using a public URL. Which AWS service or feature will meet this requirement?。

**选项：**

- A. Amazon Redshift
- B. Amazon Elastic Block Store (Amazon EBS)
- C. Amazon Elastic File System (Amazon EFS)
- D. Amazon S3

**主分类：** C4-05 S3对象存储与Storage-Class题。

**题库记录答案：** `D`。

**社区投票：** D 100%

### Q450.1-题干怎么拆

现有题库没有提供独立 explanation。

这里按题干中的动作、对象和所有选项的服务定位进行比较。

### Q450.2-每个选项的定位

| 选项 | 题库内容 | 服务/概念定位 | 题库答案关系 |
|---|---|---|---|
| A | Amazon Redshift | Amazon Redshift：托管云数据仓库，用于大规模分析型查询。 | 题库记录为非正确选项 |
| B | Amazon Elastic Block Store (Amazon EBS) | Amazon EBS：面向 EC2 的持久化块存储卷。 | 题库记录为非正确选项 |
| C | Amazon Elastic File System (Amazon EFS) | Amazon EFS：托管弹性 NFS 文件系统，可被多个计算资源共享。 | 题库记录为非正确选项 |
| D | Amazon S3 | Amazon S3：高耐久、可扩展的对象存储，以 Bucket/Object 组织数据。 | 题库记录为正确选项 |

### Q450.3-为什么题库会这样选

题库记录的正确选项定位为：Amazon S3：高耐久、可扩展的对象存储，以 Bucket/Object 组织数据。

它与题干要求的对象/约束直接对应。

其余选项虽然可能也属于同一大类，但主要解决不同问题。

---

---

## Q453-S3对象存储与Storage-Class题

**题目：** A cloud engineer wants to store data in Amazon S3. The engineer will access some of the data yearly and some of the data daily. Which S3 storage class will meet these requirements MOST cost-effectively?。

**选项：**

- A. S3 Standard
- B. S3 Glacier Deep Archive
- C. S3 One Zone-Infrequent Access (S3 One Zone-IA)
- D. S3 Intelligent-Tiering

**主分类：** C4-05 S3对象存储与Storage-Class题。

**题库记录答案：** `D`。

**需求/考点标签：** Object Storage / Cost Optimization。

**社区投票：** D 100%

### Q453.1-题干怎么拆

这道题先识别的不是某个服务名，而是这些约束：**Object Storage、Cost Optimization**。

判断时应该先找到与这些约束同层、同数据模型或同运维目标的服务，再排除“看起来也属于 AWS，但解决的是另一个层面问题”的选项。

### Q453.2-每个选项的定位

| 选项 | 题库内容 | 服务/概念定位 | 题库答案关系 |
|---|---|---|---|
| A | S3 Standard | Amazon S3：高耐久、可扩展的对象存储，以 Bucket/Object 组织数据。 | 题库记录为非正确选项 |
| B | S3 Glacier Deep Archive | Amazon S3：高耐久、可扩展的对象存储，以 Bucket/Object 组织数据。 | 题库记录为非正确选项 |
| C | S3 One Zone-Infrequent Access (S3 One Zone-IA) | Amazon S3：高耐久、可扩展的对象存储，以 Bucket/Object 组织数据。 | 题库记录为非正确选项 |
| D | S3 Intelligent-Tiering | Amazon S3：高耐久、可扩展的对象存储，以 Bucket/Object 组织数据。 | 题库记录为正确选项 |

### Q453.3-为什么题库会这样选

题库记录的正确选项定位为：Amazon S3：高耐久、可扩展的对象存储，以 Bucket/Object 组织数据。

它与题干要求的对象/约束直接对应。

其余选项虽然可能也属于同一大类，但主要解决不同问题。

---

---

## Q456-S3对象存储与Storage-Class题

**题目：** A company needs to store infrequently used data for data archives and long-term backups. Which AWS service or storage class will meet these requirements MOST cost-effectively?。

**选项：**

- A. Amazon FSx for Lustre
- B. Amazon Elastic Block Store (Amazon EBS)
- C. Amazon Elastic File System (Amazon EFS)
- D. Amazon S3 Glacier Flexible Retrieval

**主分类：** C4-05 S3对象存储与Storage-Class题。

**题库记录答案：** `D`。

**需求/考点标签：** 稳定长期计算。

**社区投票：** D 100%

### Q456.1-题干怎么拆

这道题先识别的不是某个服务名，而是这些约束：**稳定长期计算**。

判断时应该先找到与这些约束同层、同数据模型或同运维目标的服务，再排除“看起来也属于 AWS，但解决的是另一个层面问题”的选项。

### Q456.2-每个选项的定位

| 选项 | 题库内容 | 服务/概念定位 | 题库答案关系 |
|---|---|---|---|
| A | Amazon FSx for Lustre | Amazon FSx：托管专业文件系统家族，覆盖 Windows/高性能等文件工作负载。 | 题库记录为非正确选项 |
| B | Amazon Elastic Block Store (Amazon EBS) | Amazon EBS：面向 EC2 的持久化块存储卷。 | 题库记录为非正确选项 |
| C | Amazon Elastic File System (Amazon EFS) | Amazon EFS：托管弹性 NFS 文件系统，可被多个计算资源共享。 | 题库记录为非正确选项 |
| D | Amazon S3 Glacier Flexible Retrieval | Amazon S3：高耐久、可扩展的对象存储，以 Bucket/Object 组织数据。 | 题库记录为正确选项 |

### Q456.3-为什么题库会这样选

题库记录的正确选项定位为：Amazon S3：高耐久、可扩展的对象存储，以 Bucket/Object 组织数据。

它与题干要求的对象/约束直接对应。

其余选项虽然可能也属于同一大类，但主要解决不同问题。

---

---

## Q523-S3对象存储与Storage-Class题

**题目：** A company must archive its documents by using a write-once, read-many (WORM) model to meet legal and compliance obligations. Which feature of Amazon S3 can the company use to meet this requirement?。

**选项：**

- A. S3 Versioning
- B. S3 bucket policy
- C. S3 Glacier Vault Lock
- D. S3 multi-factor authentication (MFA) delete

**主分类：** C4-05 S3对象存储与Storage-Class题。

**题库记录答案：** `C`。

**需求/考点标签：** 配置变化与合规。

**社区投票：** C 100%

### Q523.1-题干怎么拆

这道题先识别的不是某个服务名，而是这些约束：**配置变化与合规**。

判断时应该先找到与这些约束同层、同数据模型或同运维目标的服务，再排除“看起来也属于 AWS，但解决的是另一个层面问题”的选项。

### Q523.2-每个选项的定位

| 选项 | 题库内容 | 服务/概念定位 | 题库答案关系 |
|---|---|---|---|
| A | S3 Versioning | Amazon S3：高耐久、可扩展的对象存储，以 Bucket/Object 组织数据。 | 题库记录为非正确选项 |
| B | S3 bucket policy | Amazon S3：高耐久、可扩展的对象存储，以 Bucket/Object 组织数据。 | 题库记录为非正确选项 |
| C | S3 Glacier Vault Lock | Amazon S3：高耐久、可扩展的对象存储，以 Bucket/Object 组织数据。 | 题库记录为正确选项 |
| D | S3 multi-factor authentication (MFA) delete | Amazon S3：高耐久、可扩展的对象存储，以 Bucket/Object 组织数据。MFA：多因素认证，增强账号登录安全。 | 题库记录为非正确选项 |

### Q523.3-为什么题库会这样选

题库记录的正确选项定位为：Amazon S3：高耐久、可扩展的对象存储，以 Bucket/Object 组织数据。

它与题干要求的对象/约束直接对应。

其余选项虽然可能也属于同一大类，但主要解决不同问题。

---

---

## Q560-S3对象存储与Storage-Class题

**题目：** A company needs to use AWS technology to deploy a static website. Which solution meets this requirement with the LEAST amount of operational overhead?。

**选项：**

- A. Deploy the website on Amazon EC2.
- B. Host the website on AWS Elastic Beanstalk.
- C. Deploy the website with Amazon Lightsail.
- D. Host the website on Amazon S3.

**主分类：** C4-05 S3对象存储与Storage-Class题。

**题库记录答案：** `D`。

**需求/考点标签：** Block Storage。

**社区投票：** D 100%

### Q560.1-题干怎么拆

这道题先识别的不是某个服务名，而是这些约束：**Block Storage**。

判断时应该先找到与这些约束同层、同数据模型或同运维目标的服务，再排除“看起来也属于 AWS，但解决的是另一个层面问题”的选项。

### Q560.2-每个选项的定位

| 选项 | 题库内容 | 服务/概念定位 | 题库答案关系 |
|---|---|---|---|
| A | Deploy the website on Amazon EC2. | Amazon EC2：可配置虚拟服务器，适合需要 OS/实例级控制的计算工作负载。 | 题库记录为非正确选项 |
| B | Host the website on AWS Elastic Beanstalk. | AWS Elastic Beanstalk：托管应用部署平台，帮助创建和管理常见 Web 应用运行环境。 | 题库记录为非正确选项 |
| C | Deploy the website with Amazon Lightsail. | Amazon Lightsail：面向简单网站/小型应用的简化云平台与可预测套餐。 | 题库记录为非正确选项 |
| D | Host the website on Amazon S3. | Amazon S3：高耐久、可扩展的对象存储，以 Bucket/Object 组织数据。 | 题库记录为正确选项 |

### Q560.3-为什么题库会这样选

题库记录的正确选项定位为：Amazon S3：高耐久、可扩展的对象存储，以 Bucket/Object 组织数据。

它与题干要求的对象/约束直接对应。

其余选项虽然可能也属于同一大类，但主要解决不同问题。

---

---

## Q607-S3对象存储与Storage-Class题

**题目：** A company needs to use Amazon S3 to store audio files that are each 5 megabytes in size. The company will rarely access the files, but the company must be able to retrieve the files immediately. Which S3 storage class will meet these requirements MOST cost-effectively?

**选项：**

- A. S3 Standard
- B. S3 Standard-Infrequent Access (S3 Standard-IA)
- C. S3 Glacier Flexible Retrieval
- D. S3 Glacier Deep Archive

**主分类：** C4-05 S3对象存储与Storage-Class题。

**题库记录答案：** `B`。

**需求/考点标签：** Object Storage / Cost Optimization。

**社区投票：** B 80%, C 20%。

### Q607.1-题干怎么拆

这道题先识别的不是某个服务名，而是这些约束：**Object Storage、Cost Optimization**。

判断时应该先找到与这些约束同层、同数据模型或同运维目标的服务，再排除“看起来也属于 AWS，但解决的是另一个层面问题”的选项。

### Q607.2-每个选项的定位

| 选项 | 题库内容 | 服务/概念定位 | 题库答案关系 |
|---|---|---|---|
| A | S3 Standard | Amazon S3：高耐久、可扩展的对象存储，以 Bucket/Object 组织数据。 | 题库记录为非正确选项 |
| B | S3 Standard-Infrequent Access (S3 Standard-IA) | Amazon S3：高耐久、可扩展的对象存储，以 Bucket/Object 组织数据。 | 题库记录为正确选项 |
| C | S3 Glacier Flexible Retrieval | Amazon S3：高耐久、可扩展的对象存储，以 Bucket/Object 组织数据。 | 题库记录为非正确选项 |
| D | S3 Glacier Deep Archive | Amazon S3：高耐久、可扩展的对象存储，以 Bucket/Object 组织数据。 | 题库记录为非正确选项 |

### Q607.3-为什么题库会这样选

题库记录的正确选项定位为：Amazon S3：高耐久、可扩展的对象存储，以 Bucket/Object 组织数据。

它与题干要求的对象/约束直接对应。

其余选项虽然可能也属于同一大类，但主要解决不同问题。

---

## 本篇概述

- 本篇梳理了S3对象存储与Storage-Class题相关的核心知识、适用场景与判断要点。
- 本篇梳理了S3对象存储与Storage-Class题相关的核心知识、适用场景与判断要点。
- 本篇梳理了S3对象存储与Storage-Class题相关的核心知识、适用场景与判断要点。
- 本篇梳理了S3对象存储与Storage-Class题相关的核心知识、适用场景与判断要点。
- 本篇梳理了S3对象存储与Storage-Class题相关的核心知识、适用场景与判断要点。
- 本篇梳理了S3对象存储与Storage-Class题相关的核心知识、适用场景与判断要点。

[返回本章总述](./00-总述.md)｜[查看本章概述](./99-概述.md)

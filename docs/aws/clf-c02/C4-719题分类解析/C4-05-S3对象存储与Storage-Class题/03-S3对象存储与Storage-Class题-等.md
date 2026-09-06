---
id: 03-S3对象存储与Storage-Class题-等
sidebar_position: 3
---

# C4-05-S3对象存储与Storage-Class题-S3对象存储与Storage-Class题与S3对象存储与Storage-Class题与S3对象存储与Storage-Class题与S3对象存储与Storage-Class题与S3对象存储与Storage-Class题与S3对象存储与Storage-Class题

> 本篇是《C4-05-S3对象存储与Storage-Class题》的第3个分篇，主要包含：S3对象存储与Storage-Class题、S3对象存储与Storage-Class题、S3对象存储与Storage-Class题、S3对象存储与Storage-Class题、S3对象存储与Storage-Class题、S3对象存储与Storage-Class题。

## Q294-S3对象存储与Storage-Class题

**题目：** Which Amazon S3 storage class is MOST cost-effective for unknown access patterns?。

**选项：**

- A. S3 Standard
- B. S3 Standard-Infrequent Access (S3 Standard-IA)
- C. S3 One Zone-Infrequent Access (S3 One Zone-IA)
- D. S3 Intelligent-Tiering

**主分类：** C4-05 S3对象存储与Storage-Class题。

**题库记录答案：** `D`。

**需求/考点标签：** Object Storage / Cost Optimization。

**社区投票：** D 100%

### Q294.1-题干怎么拆

这道题先识别的不是某个服务名，而是这些约束：**Object Storage、Cost Optimization**。

判断时应该先找到与这些约束同层、同数据模型或同运维目标的服务，再排除“看起来也属于 AWS，但解决的是另一个层面问题”的选项。

### Q294.2-每个选项的定位

| 选项 | 题库内容 | 服务/概念定位 | 题库答案关系 |
|---|---|---|---|
| A | S3 Standard | Amazon S3：高耐久、可扩展的对象存储，以 Bucket/Object 组织数据。 | 题库记录为非正确选项 |
| B | S3 Standard-Infrequent Access (S3 Standard-IA) | Amazon S3：高耐久、可扩展的对象存储，以 Bucket/Object 组织数据。 | 题库记录为非正确选项 |
| C | S3 One Zone-Infrequent Access (S3 One Zone-IA) | Amazon S3：高耐久、可扩展的对象存储，以 Bucket/Object 组织数据。 | 题库记录为非正确选项 |
| D | S3 Intelligent-Tiering | Amazon S3：高耐久、可扩展的对象存储，以 Bucket/Object 组织数据。 | 题库记录为正确选项 |

### Q294.3-为什么题库会这样选

题库记录的正确选项定位为：Amazon S3：高耐久、可扩展的对象存储，以 Bucket/Object 组织数据。

它与题干要求的对象/约束直接对应。

其余选项虽然可能也属于同一大类，但主要解决不同问题。

---

---

## Q313-S3对象存储与Storage-Class题

**题目：** A company wants durable storage for static content and infinitely scalable data storage infrastructure at the lowest cost. Which AWS service should the company choose?。

**选项：**

- A. Amazon Elastic Block Store (Amazon EBS)
- B. Amazon S3
- C. AWS Storage Gateway
- D. Amazon Elastic File System (Amazon EFS)

**主分类：** C4-05 S3对象存储与Storage-Class题。

**题库记录答案：** `B`。

**需求/考点标签：** Scalability / Durability。

**社区投票：** B 100%

### Q313.1-题干怎么拆

这道题先识别的不是某个服务名，而是这些约束：**Scalability、Durability**。

判断时应该先找到与这些约束同层、同数据模型或同运维目标的服务，再排除“看起来也属于 AWS，但解决的是另一个层面问题”的选项。

### Q313.2-每个选项的定位

| 选项 | 题库内容 | 服务/概念定位 | 题库答案关系 |
|---|---|---|---|
| A | Amazon Elastic Block Store (Amazon EBS) | Amazon EBS：面向 EC2 的持久化块存储卷。 | 题库记录为非正确选项 |
| B | Amazon S3 | Amazon S3：高耐久、可扩展的对象存储，以 Bucket/Object 组织数据。 | 题库记录为正确选项 |
| C | AWS Storage Gateway | AWS Storage Gateway：把本地环境通过文件/卷/虚拟磁带等接口连接 AWS 存储的混合存储服务。 | 题库记录为非正确选项 |
| D | Amazon Elastic File System (Amazon EFS) | Amazon EFS：托管弹性 NFS 文件系统，可被多个计算资源共享。 | 题库记录为非正确选项 |

### Q313.3-为什么题库会这样选

题库记录的正确选项定位为：Amazon S3：高耐久、可扩展的对象存储，以 Bucket/Object 组织数据。

它与题干要求的对象/约束直接对应。

其余选项虽然可能也属于同一大类，但主要解决不同问题。

---

---

## Q338-S3对象存储与Storage-Class题

**题目：** A company wants to track tags, buckets, and prefixes for its Amazon S3 objects. Which S3 feature will meet this requirement?。

**选项：**

- A. S3 Inventory report
- B. S3 Lifecycle
- C. S3 Versioning
- D. S3 ACLs

**主分类：** C4-05 S3对象存储与Storage-Class题。

**题库记录答案：** `A`。

**需求/考点标签：** Object Storage。

**社区投票：** A 100%

### Q338.1-题干怎么拆

这道题先识别的不是某个服务名，而是这些约束：**Object Storage**。

判断时应该先找到与这些约束同层、同数据模型或同运维目标的服务，再排除“看起来也属于 AWS，但解决的是另一个层面问题”的选项。

### Q338.2-每个选项的定位

| 选项 | 题库内容 | 服务/概念定位 | 题库答案关系 |
|---|---|---|---|
| A | S3 Inventory report | Amazon S3：高耐久、可扩展的对象存储，以 Bucket/Object 组织数据。 | 题库记录为正确选项 |
| B | S3 Lifecycle | Amazon S3：高耐久、可扩展的对象存储，以 Bucket/Object 组织数据。 | 题库记录为非正确选项 |
| C | S3 Versioning | Amazon S3：高耐久、可扩展的对象存储，以 Bucket/Object 组织数据。 | 题库记录为非正确选项 |
| D | S3 ACLs | Amazon S3：高耐久、可扩展的对象存储，以 Bucket/Object 组织数据。 | 题库记录为非正确选项 |

### Q338.3-为什么题库会这样选

题库记录的正确选项定位为：Amazon S3：高耐久、可扩展的对象存储，以 Bucket/Object 组织数据。

它与题干要求的对象/约束直接对应。

其余选项虽然可能也属于同一大类，但主要解决不同问题。

---

---

## Q349-S3对象存储与Storage-Class题

**题目：** What does the Amazon S3 Intelligent-Tiering storage class offer?。

**选项：**

- A. Payment flexibility by reserving storage capacity
- B. Long-term retention of data by copying the data to an encrypted Amazon Elastic Block Store (Amazon EBS) volume
- C. Automatic cost savings by moving objects between tiers based on access pattern changes
- D. Secure, durable, and lowest cost storage for data archival

**主分类：** C4-05 S3对象存储与Storage-Class题。

**题库记录答案：** `C`。

**需求/考点标签：** Object Storage。

**社区投票：** C 100%

### Q349.1-题干怎么拆

这道题先识别的不是某个服务名，而是这些约束：**Object Storage**。

判断时应该先找到与这些约束同层、同数据模型或同运维目标的服务，再排除“看起来也属于 AWS，但解决的是另一个层面问题”的选项。

### Q349.2-每个选项的定位

| 选项 | 题库内容 | 服务/概念定位 | 题库答案关系 |
|---|---|---|---|
| A | Payment flexibility by reserving storage capacity | 该选项是题库中的概念/服务描述。现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为非正确选项 |
| B | Long-term retention of data by copying the data to an encrypted Amazon Elastic Block Store (Amazon EBS) volume | Amazon EBS：面向 EC2 的持久化块存储卷。 | 题库记录为非正确选项 |
| C | Automatic cost savings by moving objects between tiers based on access pattern changes | 该选项是题库中的概念/服务描述。现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为正确选项 |
| D | Secure, durable, and lowest cost storage for data archival | 该选项是题库中的概念/服务描述。现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为非正确选项 |

### Q349.3-为什么题库会这样选

题库记录的正确选项定位为：该选项是题库中的概念/服务描述。

现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。

它与题干要求的对象/约束直接对应。

其余选项虽然可能也属于同一大类，但主要解决不同问题。

---

---

## Q368-S3对象存储与Storage-Class题

**题目：** Which Amazon S3 feature or storage class uses the AWS backbone network and edge locations to reduce latencies from the end user to Amazon S3?。

**选项：**

- A. S3 Cross-Region Replication
- B. S3 Transfer Acceleration
- C. S3 Event Notifications
- D. S3 Standard-Infrequent Access (S3 Standard-IA)

**主分类：** C4-05 S3对象存储与Storage-Class题。

**题库记录答案：** `B`。

**需求/考点标签：** 全球静态内容加速。

**社区投票：** B 100%

### Q368.1-题干怎么拆

这道题先识别的不是某个服务名，而是这些约束：**全球静态内容加速**。

判断时应该先找到与这些约束同层、同数据模型或同运维目标的服务，再排除“看起来也属于 AWS，但解决的是另一个层面问题”的选项。

### Q368.2-每个选项的定位

| 选项 | 题库内容 | 服务/概念定位 | 题库答案关系 |
|---|---|---|---|
| A | S3 Cross-Region Replication | Amazon S3：高耐久、可扩展的对象存储，以 Bucket/Object 组织数据。 | 题库记录为非正确选项 |
| B | S3 Transfer Acceleration | Amazon S3：高耐久、可扩展的对象存储，以 Bucket/Object 组织数据。 | 题库记录为正确选项 |
| C | S3 Event Notifications | Amazon S3：高耐久、可扩展的对象存储，以 Bucket/Object 组织数据。 | 题库记录为非正确选项 |
| D | S3 Standard-Infrequent Access (S3 Standard-IA) | Amazon S3：高耐久、可扩展的对象存储，以 Bucket/Object 组织数据。 | 题库记录为非正确选项 |

### Q368.3-为什么题库会这样选

题库记录的正确选项定位为：Amazon S3：高耐久、可扩展的对象存储，以 Bucket/Object 组织数据。

它与题干要求的对象/约束直接对应。

其余选项虽然可能也属于同一大类，但主要解决不同问题。

---

---

## Q446-S3对象存储与Storage-Class题

**题目：** A company stores a large amount of data that auditors access only twice each year. Which Amazon S3 storage class should the company use to store the data with the LOWEST cost?。

**选项：**

- A. Amazon S3 Outposts
- B. Amazon S3 Glacier Instant Retrieval
- C. Amazon S3 Standard
- D. Amazon S3 Intelligent-Tiering

**主分类：** C4-05 S3对象存储与Storage-Class题。

**题库记录答案：** `B`。

**需求/考点标签：** Object Storage / Audit Trail。

**社区投票：** B 65%, D 35%。

### Q446.1-题干怎么拆

这道题先识别的不是某个服务名，而是这些约束：**Object Storage、Audit Trail**。

判断时应该先找到与这些约束同层、同数据模型或同运维目标的服务，再排除“看起来也属于 AWS，但解决的是另一个层面问题”的选项。

### Q446.2-每个选项的定位

| 选项 | 题库内容 | 服务/概念定位 | 题库答案关系 |
|---|---|---|---|
| A | Amazon S3 Outposts | AWS Outposts：把 AWS 基础设施和服务运行到客户本地场所。Amazon S3：高耐久、可扩展的对象存储，以 Bucket/Object 组织数据。 | 题库记录为非正确选项 |
| B | Amazon S3 Glacier Instant Retrieval | Amazon S3：高耐久、可扩展的对象存储，以 Bucket/Object 组织数据。 | 题库记录为正确选项 |
| C | Amazon S3 Standard | Amazon S3：高耐久、可扩展的对象存储，以 Bucket/Object 组织数据。 | 题库记录为非正确选项 |
| D | Amazon S3 Intelligent-Tiering | Amazon S3：高耐久、可扩展的对象存储，以 Bucket/Object 组织数据。 | 题库记录为非正确选项 |

### Q446.3-为什么题库会这样选

题库记录的正确选项定位为：Amazon S3：高耐久、可扩展的对象存储，以 Bucket/Object 组织数据。

它与题干要求的对象/约束直接对应。

其余选项虽然可能也属于同一大类，但主要解决不同问题。

### Q446.4-⚠-争议/版本提示

- 社区投票分散，最高项仅 65%
- 本题同时收录到 `C4-27-旧题争议题与当前AWS差异.md`，不在这里强行替题库修正答案。

---

## 本篇概述

- 本篇梳理了S3对象存储与Storage-Class题相关的核心知识、适用场景与判断要点。
- 本篇梳理了S3对象存储与Storage-Class题相关的核心知识、适用场景与判断要点。
- 本篇梳理了S3对象存储与Storage-Class题相关的核心知识、适用场景与判断要点。
- 本篇梳理了S3对象存储与Storage-Class题相关的核心知识、适用场景与判断要点。
- 本篇梳理了S3对象存储与Storage-Class题相关的核心知识、适用场景与判断要点。
- 本篇梳理了S3对象存储与Storage-Class题相关的核心知识、适用场景与判断要点。

[返回本章总述](./00-总述.md)｜[查看本章概述](./99-概述.md)

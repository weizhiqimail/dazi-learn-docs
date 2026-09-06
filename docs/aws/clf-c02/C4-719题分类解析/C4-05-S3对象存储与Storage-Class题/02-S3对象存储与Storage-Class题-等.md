---
id: 02-S3对象存储与Storage-Class题-等
sidebar_position: 2
---

# C4-05-S3对象存储与Storage-Class题-S3对象存储与Storage-Class题与S3对象存储与Storage-Class题与S3对象存储与Storage-Class题与S3对象存储与Storage-Class题与S3对象存储与Storage-Class题

> 本篇是《C4-05-S3对象存储与Storage-Class题》的第2个分篇，主要包含：S3对象存储与Storage-Class题、S3对象存储与Storage-Class题、S3对象存储与Storage-Class题、S3对象存储与Storage-Class题、S3对象存储与Storage-Class题。

## Q179-S3对象存储与Storage-Class题

**题目：** Which of the following describes some of the core functionality of Amazon S3?。

**选项：**

- A. Amazon S3 is a high-performance block storage service that is designed for use with Amazon EC2.
- B. Amazon S3 is an object storage service that provides high-level performance, security, scalability, and data availability.
- C. Amazon S3 is a fully managed, highly reliable, and scalable file storage system that is accessible over the industry-
- D. Amazon S3 is a scalable, fully managed elastic NFS for use with AWS Cloud services and on-premises resources.

**主分类：** C4-05 S3对象存储与Storage-Class题。

**题库记录答案：** `B`。

**需求/考点标签：** Object Storage。

**社区投票：** B 100%

### Q179.1-题干怎么拆

这道题先识别的不是某个服务名，而是这些约束：**Object Storage**。

判断时应该先找到与这些约束同层、同数据模型或同运维目标的服务，再排除“看起来也属于 AWS，但解决的是另一个层面问题”的选项。

### Q179.2-每个选项的定位

| 选项 | 题库内容 | 服务/概念定位 | 题库答案关系 |
|---|---|---|---|
| A | Amazon S3 is a high-performance block storage service that is designed for use with Amazon EC2. | Amazon EC2：可配置虚拟服务器，适合需要 OS/实例级控制的计算工作负载。Amazon S3：高耐久、可扩展的对象存储，以 Bucket/Object 组织数据。 | 题库记录为非正确选项 |
| B | Amazon S3 is an object storage service that provides high-level performance, security, scalability, and data availability. | Amazon S3：高耐久、可扩展的对象存储，以 Bucket/Object 组织数据。 | 题库记录为正确选项 |
| C | Amazon S3 is a fully managed, highly reliable, and scalable file storage system that is accessible over the industry- | Amazon S3：高耐久、可扩展的对象存储，以 Bucket/Object 组织数据。 | 题库记录为非正确选项 |
| D | Amazon S3 is a scalable, fully managed elastic NFS for use with AWS Cloud services and on-premises resources. | Amazon S3：高耐久、可扩展的对象存储，以 Bucket/Object 组织数据。 | 题库记录为非正确选项 |

### Q179.3-为什么题库会这样选

题库记录的正确选项定位为：Amazon S3：高耐久、可扩展的对象存储，以 Bucket/Object 组织数据。

它与题干要求的对象/约束直接对应。

其余选项虽然可能也属于同一大类，但主要解决不同问题。

---

---

## Q201-S3对象存储与Storage-Class题

**题目：** A company is storing data that will not be frequently accessed in the AWS Cloud. If the company needs to access the data, the data needs to be retrieved within 12 hours. The company wants a solution that is cost-effective for storage costs for each gigabyte. Which Amazon S3 storage class will meet these requirements?

**选项：**

- A. S3 Standard
- B. S3 Glacier Flexible Retrieval
- C. S3 One Zone-Infrequent Access (S3 One Zone-IA)
- D. S3 Standard-Infrequent Access (S3 Standard-IA)

**主分类：** C4-05 S3对象存储与Storage-Class题。

**题库记录答案：** `B`。

**需求/考点标签：** Object Storage / Cost Optimization。

**社区投票：** B 67%, C 33%。

### Q201.1-题干怎么拆

这道题先识别的不是某个服务名，而是这些约束：**Object Storage、Cost Optimization**。

判断时应该先找到与这些约束同层、同数据模型或同运维目标的服务，再排除“看起来也属于 AWS，但解决的是另一个层面问题”的选项。

### Q201.2-每个选项的定位

| 选项 | 题库内容 | 服务/概念定位 | 题库答案关系 |
|---|---|---|---|
| A | S3 Standard | Amazon S3：高耐久、可扩展的对象存储，以 Bucket/Object 组织数据。 | 题库记录为非正确选项 |
| B | S3 Glacier Flexible Retrieval | Amazon S3：高耐久、可扩展的对象存储，以 Bucket/Object 组织数据。 | 题库记录为正确选项 |
| C | S3 One Zone-Infrequent Access (S3 One Zone-IA) | Amazon S3：高耐久、可扩展的对象存储，以 Bucket/Object 组织数据。 | 题库记录为非正确选项 |
| D | S3 Standard-Infrequent Access (S3 Standard-IA) | Amazon S3：高耐久、可扩展的对象存储，以 Bucket/Object 组织数据。 | 题库记录为非正确选项 |

### Q201.3-为什么题库会这样选

题库记录的正确选项定位为：Amazon S3：高耐久、可扩展的对象存储，以 Bucket/Object 组织数据。

它与题干要求的对象/约束直接对应。

其余选项虽然可能也属于同一大类，但主要解决不同问题。

### Q201.4-⚠-争议/版本提示

- 社区投票分散，最高项仅 67%
- 本题同时收录到 `C4-27-旧题争议题与当前AWS差异.md`，不在这里强行替题库修正答案。

---

---

## Q219-S3对象存储与Storage-Class题

**题目：** Which encryption types can be used to protect objects at rest in Amazon S3? (Choose two.)。

**选项：**

- A. Server-side encryption with Amazon S3 managed encryption keys (SSE-S3)
- B. Server-side encryption with AWS KMS managed keys (SSE-KMS)
- C. TLS
- D. SSL
- E. Transparent Data Encryption (TDE)

**主分类：** C4-05 S3对象存储与Storage-Class题。

**题库记录答案：** `AB`。

**需求/考点标签：** Encryption / Object Storage。

**社区投票：** AB 67%, AE 33%。

### Q219.1-题干怎么拆

这道题先识别的不是某个服务名，而是这些约束：**Encryption、Object Storage**。

判断时应该先找到与这些约束同层、同数据模型或同运维目标的服务，再排除“看起来也属于 AWS，但解决的是另一个层面问题”的选项。

### Q219.2-每个选项的定位

| 选项 | 题库内容 | 服务/概念定位 | 题库答案关系 |
|---|---|---|---|
| A | Server-side encryption with Amazon S3 managed encryption keys (SSE-S3) | Amazon S3：高耐久、可扩展的对象存储，以 Bucket/Object 组织数据。 | 题库记录为正确选项 |
| B | Server-side encryption with AWS KMS managed keys (SSE-KMS) | AWS KMS：集中创建、控制和使用加密密钥。 | 题库记录为正确选项 |
| C | TLS | 传输加密保护网络传输中的数据。 | 题库记录为非正确选项 |
| D | SSL | 传输加密保护网络传输中的数据。 | 题库记录为非正确选项 |
| E | Transparent Data Encryption (TDE) | 该选项是题库中的概念/服务描述。现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为非正确选项 |

### Q219.3-为什么题库会这样选

题库记录的正确选项定位为：Amazon S3：高耐久、可扩展的对象存储，以 Bucket/Object 组织数据。

AWS KMS：集中创建、控制和使用加密密钥。

它与题干要求的对象/约束直接对应。

其余选项虽然可能也属于同一大类，但主要解决不同问题。

### Q219.4-⚠-争议/版本提示

- 社区投票分散，最高项仅 67%
- 本题同时收录到 `C4-27-旧题争议题与当前AWS差异.md`，不在这里强行替题库修正答案。

---

---

## Q251-S3对象存储与Storage-Class题

**题目：** A company wants to store data in Amazon S3. The company rarely access the data, and the data can be regenerated if necessary. The company wants to store the data in the most cost-effective storage class. Which S3 storage class will meet this requirement?

**选项：**

- A. S3 Standard
- B. S3 Intelligent-Tiering
- C. S3 Standard-Infrequent Access (S3 Standard-IA)
- D. S3 One Zone-Infrequent Access (S3 One Zone-IA)

**主分类：** C4-05 S3对象存储与Storage-Class题。

**题库记录答案：** `D`。

**需求/考点标签：** Object Storage / Cost Optimization。

**社区投票：** D 84%, C 16%。

### Q251.1-题干怎么拆

这道题先识别的不是某个服务名，而是这些约束：**Object Storage、Cost Optimization**。

判断时应该先找到与这些约束同层、同数据模型或同运维目标的服务，再排除“看起来也属于 AWS，但解决的是另一个层面问题”的选项。

### Q251.2-每个选项的定位

| 选项 | 题库内容 | 服务/概念定位 | 题库答案关系 |
|---|---|---|---|
| A | S3 Standard | Amazon S3：高耐久、可扩展的对象存储，以 Bucket/Object 组织数据。 | 题库记录为非正确选项 |
| B | S3 Intelligent-Tiering | Amazon S3：高耐久、可扩展的对象存储，以 Bucket/Object 组织数据。 | 题库记录为非正确选项 |
| C | S3 Standard-Infrequent Access (S3 Standard-IA) | Amazon S3：高耐久、可扩展的对象存储，以 Bucket/Object 组织数据。 | 题库记录为非正确选项 |
| D | S3 One Zone-Infrequent Access (S3 One Zone-IA) | Amazon S3：高耐久、可扩展的对象存储，以 Bucket/Object 组织数据。 | 题库记录为正确选项 |

### Q251.3-为什么题库会这样选

题库记录的正确选项定位为：Amazon S3：高耐久、可扩展的对象存储，以 Bucket/Object 组织数据。

它与题干要求的对象/约束直接对应。

其余选项虽然可能也属于同一大类，但主要解决不同问题。

---

---

## Q274-S3对象存储与Storage-Class题

**题目：** A company wants to save costs by archiving data that is no longer frequently accessed by end users. Which Amazon S3 feature will meet this requirement?。

**选项：**

- A. S3 Versioning
- B. S3 Lifecycle
- C. S3 Object Lock
- D. S3 Inventory

**主分类：** C4-05 S3对象存储与Storage-Class题。

**题库记录答案：** `B`。

**需求/考点标签：** Object Storage。

**社区投票：** B 100%

### Q274.1-题干怎么拆

这道题先识别的不是某个服务名，而是这些约束：**Object Storage**。

判断时应该先找到与这些约束同层、同数据模型或同运维目标的服务，再排除“看起来也属于 AWS，但解决的是另一个层面问题”的选项。

### Q274.2-每个选项的定位

| 选项 | 题库内容 | 服务/概念定位 | 题库答案关系 |
|---|---|---|---|
| A | S3 Versioning | Amazon S3：高耐久、可扩展的对象存储，以 Bucket/Object 组织数据。 | 题库记录为非正确选项 |
| B | S3 Lifecycle | Amazon S3：高耐久、可扩展的对象存储，以 Bucket/Object 组织数据。 | 题库记录为正确选项 |
| C | S3 Object Lock | Amazon S3：高耐久、可扩展的对象存储，以 Bucket/Object 组织数据。 | 题库记录为非正确选项 |
| D | S3 Inventory | Amazon S3：高耐久、可扩展的对象存储，以 Bucket/Object 组织数据。 | 题库记录为非正确选项 |

### Q274.3-为什么题库会这样选

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

[返回本章总述](./00-总述.md)｜[查看本章概述](./99-概述.md)

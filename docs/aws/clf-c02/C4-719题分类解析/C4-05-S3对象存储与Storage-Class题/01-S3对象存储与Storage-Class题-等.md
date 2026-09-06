---
id: 01-S3对象存储与Storage-Class题-等
sidebar_position: 1
---

# C4-05-S3对象存储与Storage-Class题-S3对象存储与Storage-Class题与S3对象存储与Storage-Class题与S3对象存储与Storage-Class题与S3对象存储与Storage-Class题与S3对象存储与Storage-Class题与S3对象存储与Storage-Class题

> 本篇是《C4-05-S3对象存储与Storage-Class题》的第1个分篇，主要包含：S3对象存储与Storage-Class题、S3对象存储与Storage-Class题、S3对象存储与Storage-Class题、S3对象存储与Storage-Class题、S3对象存储与Storage-Class题、S3对象存储与Storage-Class题。

## Q18-S3对象存储与Storage-Class题

**题目：** A company is storing sensitive customer data in an Amazon S3 bucket. The company wants to protect the data from accidental deletion or overwriting. Which S3 feature should the company use to meet these requirements?。

**选项：**

- A. S3 Lifecycle rules
- B. S3 Versioning
- C. S3 bucket policies
- D. S3 server-side encryption

**主分类：** C4-05 S3对象存储与Storage-Class题。

**题库记录答案：** `B`。

**需求/考点标签：** Object Storage。

**社区投票：** B 100%

### Q18.1-题干怎么拆

这道题先识别的不是某个服务名，而是这些约束：**Object Storage**。

判断时应该先找到与这些约束同层、同数据模型或同运维目标的服务，再排除“看起来也属于 AWS，但解决的是另一个层面问题”的选项。

### Q18.2-每个选项的定位

| 选项 | 题库内容 | 服务/概念定位 | 题库答案关系 |
|---|---|---|---|
| A | S3 Lifecycle rules | Amazon S3：高耐久、可扩展的对象存储，以 Bucket/Object 组织数据。 | 题库记录为非正确选项 |
| B | S3 Versioning | Amazon S3：高耐久、可扩展的对象存储，以 Bucket/Object 组织数据。 | 题库记录为正确选项 |
| C | S3 bucket policies | Amazon S3：高耐久、可扩展的对象存储，以 Bucket/Object 组织数据。 | 题库记录为非正确选项 |
| D | S3 server-side encryption | Amazon S3：高耐久、可扩展的对象存储，以 Bucket/Object 组织数据。 | 题库记录为非正确选项 |

### Q18.3-为什么题库会这样选

题库记录的正确选项定位为：Amazon S3：高耐久、可扩展的对象存储，以 Bucket/Object 组织数据。

它与题干要求的对象/约束直接对应。

其余选项虽然可能也属于同一大类，但主要解决不同问题。

---

---

## Q83-S3对象存储与Storage-Class题

**题目：** A user wants to review all Amazon S3 buckets with ACLs and S3 bucket policies in the S3 console. Which AWS service or resource will meet this requirement?。

**选项：**

- A. S3 Multi-Region Access Points
- B. S3 Storage Lens
- C. AWS IAM Identity Center (AWS Single Sign-On)
- D. Access Analyzer for S3

**主分类：** C4-05 S3对象存储与Storage-Class题。

**题库记录答案：** `D`。

**需求/考点标签：** Object Storage。

**社区投票：** D 97%

### Q83.1-题干怎么拆

这道题先识别的不是某个服务名，而是这些约束：**Object Storage**。

判断时应该先找到与这些约束同层、同数据模型或同运维目标的服务，再排除“看起来也属于 AWS，但解决的是另一个层面问题”的选项。

### Q83.2-每个选项的定位

| 选项 | 题库内容 | 服务/概念定位 | 题库答案关系 |
|---|---|---|---|
| A | S3 Multi-Region Access Points | Amazon S3：高耐久、可扩展的对象存储，以 Bucket/Object 组织数据。 | 题库记录为非正确选项 |
| B | S3 Storage Lens | Amazon S3：高耐久、可扩展的对象存储，以 Bucket/Object 组织数据。 | 题库记录为非正确选项 |
| C | AWS IAM Identity Center (AWS Single Sign-On) | AWS IAM Identity Center：集中管理多 AWS Account 和业务应用的员工访问。AWS IAM：AWS 身份、认证授权与权限策略核心服务。 | 题库记录为非正确选项 |
| D | Access Analyzer for S3 | Amazon S3：高耐久、可扩展的对象存储，以 Bucket/Object 组织数据。 | 题库记录为正确选项 |

### Q83.3-为什么题库会这样选

题库记录的正确选项定位为：Amazon S3：高耐久、可扩展的对象存储，以 Bucket/Object 组织数据。

它与题干要求的对象/约束直接对应。

其余选项虽然可能也属于同一大类，但主要解决不同问题。

---

---

## Q87-S3对象存储与Storage-Class题

**题目：** Which AWS service provides highly durable object storage?。

**选项：**

- A. Amazon S3
- B. Amazon Elastic File System (Amazon EFS)
- C. Amazon Elastic Block Store (Amazon EBS)
- D. Amazon FSx

**主分类：** C4-05 S3对象存储与Storage-Class题。

**题库记录答案：** `A`。

**需求/考点标签：** Durability / Object Storage。

**社区投票：** A 100%

### Q87.1-题干怎么拆

这道题先识别的不是某个服务名，而是这些约束：**Durability、Object Storage**。

判断时应该先找到与这些约束同层、同数据模型或同运维目标的服务，再排除“看起来也属于 AWS，但解决的是另一个层面问题”的选项。

### Q87.2-每个选项的定位

| 选项 | 题库内容 | 服务/概念定位 | 题库答案关系 |
|---|---|---|---|
| A | Amazon S3 | Amazon S3：高耐久、可扩展的对象存储，以 Bucket/Object 组织数据。 | 题库记录为正确选项 |
| B | Amazon Elastic File System (Amazon EFS) | Amazon EFS：托管弹性 NFS 文件系统，可被多个计算资源共享。 | 题库记录为非正确选项 |
| C | Amazon Elastic Block Store (Amazon EBS) | Amazon EBS：面向 EC2 的持久化块存储卷。 | 题库记录为非正确选项 |
| D | Amazon FSx | Amazon FSx：托管专业文件系统家族，覆盖 Windows/高性能等文件工作负载。 | 题库记录为非正确选项 |

### Q87.3-为什么题库会这样选

题库记录的正确选项定位为：Amazon S3：高耐久、可扩展的对象存储，以 Bucket/Object 组织数据。

它与题干要求的对象/约束直接对应。

其余选项虽然可能也属于同一大类，但主要解决不同问题。

---

---

## Q123-S3对象存储与Storage-Class题

**题目：** A company wants to store and retrieve files in Amazon S3 for its existing on-premises applications by using industry-standard file system protocols. Which AWS service will meet these requirements?。

**选项：**

- A. AWS DataSync
- B. AWS Snowball Edge
- C. Amazon S3 File Gateway
- D. AWS Transfer Family

**主分类：** C4-05 S3对象存储与Storage-Class题。

**题库记录答案：** `C`。

**需求/考点标签：** Object Storage / Hybrid Cloud。

**社区投票：** C 82%, D 18%。

### Q123.1-题干怎么拆

这道题先识别的不是某个服务名，而是这些约束：**Object Storage、Hybrid Cloud**。

判断时应该先找到与这些约束同层、同数据模型或同运维目标的服务，再排除“看起来也属于 AWS，但解决的是另一个层面问题”的选项。

### Q123.2-每个选项的定位

| 选项 | 题库内容 | 服务/概念定位 | 题库答案关系 |
|---|---|---|---|
| A | AWS DataSync | AWS DataSync：在线高速自动化传输文件/对象数据到、从 AWS 存储。 | 题库记录为非正确选项 |
| B | AWS Snowball Edge | AWS Snow Family：用于大规模离线数据迁移、边缘数据处理等的物理设备家族。 | 题库记录为非正确选项 |
| C | Amazon S3 File Gateway | AWS Storage Gateway：把本地环境通过文件/卷/虚拟磁带等接口连接 AWS 存储的混合存储服务。Amazon S3：高耐久、可扩展的对象存储，以 Bucket/Object 组织数据。 | 题库记录为正确选项 |
| D | AWS Transfer Family | AWS Transfer Family：为 SFTP/FTPS/FTP 等协议提供托管文件传输入口。 | 题库记录为非正确选项 |

### Q123.3-为什么题库会这样选

题库记录的正确选项定位为：AWS Storage Gateway：把本地环境通过文件/卷/虚拟磁带等接口连接 AWS 存储的混合存储服务。

Amazon S3：高耐久、可扩展的对象存储，以 Bucket/Object 组织数据。

它与题干要求的对象/约束直接对应。

其余选项虽然可能也属于同一大类，但主要解决不同问题。

---

---

## Q143-S3对象存储与Storage-Class题

**题目：** A company needs to quickly and securely move files over long distances between its client and an Amazon S3 bucket. Which S3 feature will meet this requirement?。

**选项：**

- A. S3 Versioning
- B. S3 Transfer Acceleration
- C. S3ACLs
- D. S3 Intelligent-Tiering

**主分类：** C4-05 S3对象存储与Storage-Class题。

**题库记录答案：** `B`。

**需求/考点标签：** Object Storage。

**社区投票：** B 100%

### Q143.1-题干怎么拆

这道题先识别的不是某个服务名，而是这些约束：**Object Storage**。

判断时应该先找到与这些约束同层、同数据模型或同运维目标的服务，再排除“看起来也属于 AWS，但解决的是另一个层面问题”的选项。

### Q143.2-每个选项的定位

| 选项 | 题库内容 | 服务/概念定位 | 题库答案关系 |
|---|---|---|---|
| A | S3 Versioning | Amazon S3：高耐久、可扩展的对象存储，以 Bucket/Object 组织数据。 | 题库记录为非正确选项 |
| B | S3 Transfer Acceleration | Amazon S3：高耐久、可扩展的对象存储，以 Bucket/Object 组织数据。 | 题库记录为正确选项 |
| C | S3ACLs | 该选项是题库中的概念/服务描述。现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为非正确选项 |
| D | S3 Intelligent-Tiering | Amazon S3：高耐久、可扩展的对象存储，以 Bucket/Object 组织数据。 | 题库记录为非正确选项 |

### Q143.3-为什么题库会这样选

题库记录的正确选项定位为：Amazon S3：高耐久、可扩展的对象存储，以 Bucket/Object 组织数据。

它与题干要求的对象/约束直接对应。

其余选项虽然可能也属于同一大类，但主要解决不同问题。

---

---

## Q153-S3对象存储与Storage-Class题

**题目：** A company wants to query its server logs to gain insights about its customers’ experiences. Which AWS service will store this data MOST cost-effectively?。

**选项：**

- A. Amazon Aurora
- B. Amazon Elastic File System (Amazon EFS)
- C. Amazon Elastic Block Store (Amazon EBS)
- D. Amazon S3

**主分类：** C4-05 S3对象存储与Storage-Class题。

**题库记录答案：** `D`。

**需求/考点标签：** Cost Optimization。

**社区投票：** D 100%

### Q153.1-题干怎么拆

这道题先识别的不是某个服务名，而是这些约束：**Cost Optimization**。

判断时应该先找到与这些约束同层、同数据模型或同运维目标的服务，再排除“看起来也属于 AWS，但解决的是另一个层面问题”的选项。

### Q153.2-每个选项的定位

| 选项 | 题库内容 | 服务/概念定位 | 题库答案关系 |
|---|---|---|---|
| A | Amazon Aurora | Amazon Aurora：AWS 云原生关系数据库，兼容 MySQL/PostgreSQL 生态，强调高性能与高可用。 | 题库记录为非正确选项 |
| B | Amazon Elastic File System (Amazon EFS) | Amazon EFS：托管弹性 NFS 文件系统，可被多个计算资源共享。 | 题库记录为非正确选项 |
| C | Amazon Elastic Block Store (Amazon EBS) | Amazon EBS：面向 EC2 的持久化块存储卷。 | 题库记录为非正确选项 |
| D | Amazon S3 | Amazon S3：高耐久、可扩展的对象存储，以 Bucket/Object 组织数据。 | 题库记录为正确选项 |

### Q153.3-为什么题库会这样选

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

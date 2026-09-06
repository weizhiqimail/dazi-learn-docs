---
id: 02-RDS-Aurora与关系数据库题-等
sidebar_position: 2
---

# C4-08-RDS-Aurora与关系数据库题-RDS-Aurora与关系数据库题与RDS-Aurora与关系数据库题与RDS-Aurora与关系数据库题与RDS-Aurora与关系数据库题与RDS-Aurora与关系数据库题与RDS-Aurora与关系数据库题与RDS-Aurora与关系数据库题

> 本篇是《C4-08-RDS-Aurora与关系数据库题》的第2个分篇，主要包含：RDS-Aurora与关系数据库题、RDS-Aurora与关系数据库题、RDS-Aurora与关系数据库题、RDS-Aurora与关系数据库题、RDS-Aurora与关系数据库题、RDS-Aurora与关系数据库题、RDS-Aurora与关系数据库题。

## Q370-RDS-Aurora与关系数据库题

**题目：** Which AWS service is a relational database compatible with MySQL and PostgreSQL?。

**选项：**

- A. Amazon Redshift
- B. Amazon DynamoDB
- C. Amazon Aurora
- D. Amazon Neptune

**主分类：** C4-08 RDS-Aurora与关系数据库题。

**题库记录答案：** `C`。

**需求/考点标签：** Relational Database。

**社区投票：** C 100%

### Q370.1-题干怎么拆

这道题先识别的不是某个服务名，而是这些约束：**Relational Database**。

判断时应该先找到与这些约束同层、同数据模型或同运维目标的服务，再排除“看起来也属于 AWS，但解决的是另一个层面问题”的选项。

### Q370.2-每个选项的定位

| 选项 | 题库内容 | 服务/概念定位 | 题库答案关系 |
|---|---|---|---|
| A | Amazon Redshift | Amazon Redshift：托管云数据仓库，用于大规模分析型查询。 | 题库记录为非正确选项 |
| B | Amazon DynamoDB | Amazon DynamoDB：Serverless NoSQL Key-Value/Document 数据库，适合高规模、低延迟访问。 | 题库记录为非正确选项 |
| C | Amazon Aurora | Amazon Aurora：AWS 云原生关系数据库，兼容 MySQL/PostgreSQL 生态，强调高性能与高可用。 | 题库记录为正确选项 |
| D | Amazon Neptune | Amazon Neptune：托管图数据库，适合关系网络和图遍历场景。 | 题库记录为非正确选项 |

### Q370.3-为什么题库会这样选

题库记录的正确选项定位为：Amazon Aurora：AWS 云原生关系数据库，兼容 MySQL/PostgreSQL 生态，强调高性能与高可用。

它与题干要求的对象/约束直接对应。

其余选项虽然可能也属于同一大类，但主要解决不同问题。

---

---

## Q469-RDS-Aurora与关系数据库题

**题目：** Which AWS services can host PostgreSQL databases? (Choose two.)。

**选项：**

- A. Amazon S3
- B. Amazon Aurora
- C. Amazon EC2
- D. Amazon OpenSearch Service
- E. Amazon Elastic File System (Amazon EFS)

**主分类：** C4-08 RDS-Aurora与关系数据库题。

**题库记录答案：** `BC`。

**需求/考点标签：** Relational Database。

**社区投票：** BC 100%

### Q469.1-题干怎么拆

这道题先识别的不是某个服务名，而是这些约束：**Relational Database**。

判断时应该先找到与这些约束同层、同数据模型或同运维目标的服务，再排除“看起来也属于 AWS，但解决的是另一个层面问题”的选项。

### Q469.2-每个选项的定位

| 选项 | 题库内容 | 服务/概念定位 | 题库答案关系 |
|---|---|---|---|
| A | Amazon S3 | Amazon S3：高耐久、可扩展的对象存储，以 Bucket/Object 组织数据。 | 题库记录为非正确选项 |
| B | Amazon Aurora | Amazon Aurora：AWS 云原生关系数据库，兼容 MySQL/PostgreSQL 生态，强调高性能与高可用。 | 题库记录为正确选项 |
| C | Amazon EC2 | Amazon EC2：可配置虚拟服务器，适合需要 OS/实例级控制的计算工作负载。 | 题库记录为正确选项 |
| D | Amazon OpenSearch Service | Amazon OpenSearch Service：托管搜索、日志分析与可观测性搜索引擎服务。 | 题库记录为非正确选项 |
| E | Amazon Elastic File System (Amazon EFS) | Amazon EFS：托管弹性 NFS 文件系统，可被多个计算资源共享。 | 题库记录为非正确选项 |

### Q469.3-为什么题库会这样选

题库记录的正确选项定位为：Amazon Aurora：AWS 云原生关系数据库，兼容 MySQL/PostgreSQL 生态，强调高性能与高可用。

Amazon EC2：可配置虚拟服务器，适合需要 OS/实例级控制的计算工作负载。

它与题干要求的对象/约束直接对应。

其余选项虽然可能也属于同一大类，但主要解决不同问题。

---

---

## Q503-RDS-Aurora与关系数据库题

**题目：** A company has a MariaDB database on premises. The company wants to move the data to the AWS Cloud. Which AWS service will host this database with the LEAST amount of operational overhead?。

**选项：**

- A. Amazon RDS
- B. Amazon Neptune
- C. Amazon S3
- D. Amazon DynamoDB

**主分类：** C4-08 RDS-Aurora与关系数据库题。

**题库记录答案：** `A`。

**需求/考点标签：** Hybrid Cloud。

**社区投票：** A 100%

### Q503.1-题干怎么拆

这道题先识别的不是某个服务名，而是这些约束：**Hybrid Cloud**。

判断时应该先找到与这些约束同层、同数据模型或同运维目标的服务，再排除“看起来也属于 AWS，但解决的是另一个层面问题”的选项。

### Q503.2-每个选项的定位

| 选项 | 题库内容 | 服务/概念定位 | 题库答案关系 |
|---|---|---|---|
| A | Amazon RDS | Amazon RDS：托管关系数据库服务，负责大量数据库基础设施运维。 | 题库记录为正确选项 |
| B | Amazon Neptune | Amazon Neptune：托管图数据库，适合关系网络和图遍历场景。 | 题库记录为非正确选项 |
| C | Amazon S3 | Amazon S3：高耐久、可扩展的对象存储，以 Bucket/Object 组织数据。 | 题库记录为非正确选项 |
| D | Amazon DynamoDB | Amazon DynamoDB：Serverless NoSQL Key-Value/Document 数据库，适合高规模、低延迟访问。 | 题库记录为非正确选项 |

### Q503.3-为什么题库会这样选

题库记录的正确选项定位为：Amazon RDS：托管关系数据库服务，负责大量数据库基础设施运维。

它与题干要求的对象/约束直接对应。

其余选项虽然可能也属于同一大类，但主要解决不同问题。

---

---

## Q525-RDS-Aurora与关系数据库题

**题目：** A company needs to deploy a PostgreSQL database into Amazon RDS. The database must be highly available and fault tolerant. Which AWS solution should the company use to meet these requirements?。

**选项：**

- A. Amazon RDS with a single Availability Zone
- B. Amazon RDS snapshots
- C. Amazon RDS with multiple Availability Zones
- D. AWS Database Migration Service (AWS DMS)

**主分类：** C4-08 RDS-Aurora与关系数据库题。

**题库记录答案：** `C`。

**需求/考点标签：** 关系数据库高可用。

**社区投票：** C 100%

### Q525.1-题干怎么拆

这道题先识别的不是某个服务名，而是这些约束：**关系数据库高可用**。

判断时应该先找到与这些约束同层、同数据模型或同运维目标的服务，再排除“看起来也属于 AWS，但解决的是另一个层面问题”的选项。

### Q525.2-每个选项的定位

| 选项 | 题库内容 | 服务/概念定位 | 题库答案关系 |
|---|---|---|---|
| A | Amazon RDS with a single Availability Zone | Amazon RDS：托管关系数据库服务，负责大量数据库基础设施运维。 | 题库记录为非正确选项 |
| B | Amazon RDS snapshots | Amazon RDS：托管关系数据库服务，负责大量数据库基础设施运维。 | 题库记录为非正确选项 |
| C | Amazon RDS with multiple Availability Zones | Amazon RDS：托管关系数据库服务，负责大量数据库基础设施运维。 | 题库记录为正确选项 |
| D | AWS Database Migration Service (AWS DMS) | AWS DMS：在线迁移/复制数据库数据并尽量减少停机。 | 题库记录为非正确选项 |

### Q525.3-为什么题库会这样选

题库记录的正确选项定位为：Amazon RDS：托管关系数据库服务，负责大量数据库基础设施运维。

它与题干要求的对象/约束直接对应。

其余选项虽然可能也属于同一大类，但主要解决不同问题。

---

---

## Q551-RDS-Aurora与关系数据库题

**题目：** A company uses Amazon RDS for a product database. The company wants to ensure the database is highly available. Which feature of Amazon RDS will meet this requirement?。

**选项：**

- A. Read replicas
- B. Blue/green deployment
- C. Multi-AZ deployment
- D. Reserved Instances

**主分类：** C4-08 RDS-Aurora与关系数据库题。

**题库记录答案：** `C`。

**需求/考点标签：** 关系数据库高可用。

**社区投票：** C 100%

### Q551.1-题干怎么拆

这道题先识别的不是某个服务名，而是这些约束：**关系数据库高可用**。

判断时应该先找到与这些约束同层、同数据模型或同运维目标的服务，再排除“看起来也属于 AWS，但解决的是另一个层面问题”的选项。

### Q551.2-每个选项的定位

| 选项 | 题库内容 | 服务/概念定位 | 题库答案关系 |
|---|---|---|---|
| A | Read replicas | 该选项是题库中的概念/服务描述。现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为非正确选项 |
| B | Blue/green deployment | 该选项是题库中的概念/服务描述。现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为非正确选项 |
| C | Multi-AZ deployment | Availability Zone 是 Region 内相互隔离的故障域/部署位置。 | 题库记录为正确选项 |
| D | Reserved Instances | Reserved Instances：通过 1/3 年承诺获得折扣的 EC2/RDS 等预留定价概念，具体机制需按服务区分。 | 题库记录为非正确选项 |

### Q551.3-为什么题库会这样选

题库记录的正确选项定位为：Availability Zone 是 Region 内相互隔离的故障域/部署位置。

它与题干要求的对象/约束直接对应。

其余选项虽然可能也属于同一大类，但主要解决不同问题。

---

---

## Q587-RDS-Aurora与关系数据库题

**题目：** A company wants to run relationship databases in the AWS Cloud. The company wants to use a managed service that will install the database and run regular software updates. Which AWS service will meet these requirements?。

**选项：**

- A. Amazon S3
- B. Amazon RDS
- C. Amazon Elastic Block Store (Amazon EBS)
- D. Amazon DynamoDB

**主分类：** C4-08 RDS-Aurora与关系数据库题。

**题库记录答案：** `B`。

**社区投票：** B 100%

### Q587.1-题干怎么拆

现有题库没有提供独立 explanation。

这里按题干中的动作、对象和所有选项的服务定位进行比较。

### Q587.2-每个选项的定位

| 选项 | 题库内容 | 服务/概念定位 | 题库答案关系 |
|---|---|---|---|
| A | Amazon S3 | Amazon S3：高耐久、可扩展的对象存储，以 Bucket/Object 组织数据。 | 题库记录为非正确选项 |
| B | Amazon RDS | Amazon RDS：托管关系数据库服务，负责大量数据库基础设施运维。 | 题库记录为正确选项 |
| C | Amazon Elastic Block Store (Amazon EBS) | Amazon EBS：面向 EC2 的持久化块存储卷。 | 题库记录为非正确选项 |
| D | Amazon DynamoDB | Amazon DynamoDB：Serverless NoSQL Key-Value/Document 数据库，适合高规模、低延迟访问。 | 题库记录为非正确选项 |

### Q587.3-为什么题库会这样选

题库记录的正确选项定位为：Amazon RDS：托管关系数据库服务，负责大量数据库基础设施运维。

它与题干要求的对象/约束直接对应。

其余选项虽然可能也属于同一大类，但主要解决不同问题。

---

---

## Q664-RDS-Aurora与关系数据库题

**题目：** A company wants to migrate its on-premises SQL Server database to the AWS Cloud. The company wants AWS to handle the day-to-day administration of the database. Which AWS service will meet the company's requirements?。

**选项：**

- A. Amazon EC2 for Microsoft SQL Server
- B. Amazon DynamoDB
- C. Amazon RDS
- D. Amazon Aurora

**主分类：** C4-08 RDS-Aurora与关系数据库题。

**题库记录答案：** `C`。

**需求/考点标签：** Hybrid Cloud / Migration。

**社区投票：** C 100%

### Q664.1-题干怎么拆

这道题先识别的不是某个服务名，而是这些约束：**Hybrid Cloud、Migration**。

判断时应该先找到与这些约束同层、同数据模型或同运维目标的服务，再排除“看起来也属于 AWS，但解决的是另一个层面问题”的选项。

### Q664.2-每个选项的定位

| 选项 | 题库内容 | 服务/概念定位 | 题库答案关系 |
|---|---|---|---|
| A | Amazon EC2 for Microsoft SQL Server | Amazon EC2：可配置虚拟服务器，适合需要 OS/实例级控制的计算工作负载。 | 题库记录为非正确选项 |
| B | Amazon DynamoDB | Amazon DynamoDB：Serverless NoSQL Key-Value/Document 数据库，适合高规模、低延迟访问。 | 题库记录为非正确选项 |
| C | Amazon RDS | Amazon RDS：托管关系数据库服务，负责大量数据库基础设施运维。 | 题库记录为正确选项 |
| D | Amazon Aurora | Amazon Aurora：AWS 云原生关系数据库，兼容 MySQL/PostgreSQL 生态，强调高性能与高可用。 | 题库记录为非正确选项 |

### Q664.3-为什么题库会这样选

题库记录的正确选项定位为：Amazon RDS：托管关系数据库服务，负责大量数据库基础设施运维。

它与题干要求的对象/约束直接对应。

其余选项虽然可能也属于同一大类，但主要解决不同问题。

---

## 本篇概述

- 本篇梳理了RDS-Aurora与关系数据库题相关的核心知识、适用场景与判断要点。
- 本篇梳理了RDS-Aurora与关系数据库题相关的核心知识、适用场景与判断要点。
- 本篇梳理了RDS-Aurora与关系数据库题相关的核心知识、适用场景与判断要点。
- 本篇梳理了RDS-Aurora与关系数据库题相关的核心知识、适用场景与判断要点。
- 本篇梳理了RDS-Aurora与关系数据库题相关的核心知识、适用场景与判断要点。
- 本篇梳理了RDS-Aurora与关系数据库题相关的核心知识、适用场景与判断要点。
- 本篇梳理了RDS-Aurora与关系数据库题相关的核心知识、适用场景与判断要点。

[返回本章总述](./00-总述.md)｜[查看本章概述](./99-概述.md)

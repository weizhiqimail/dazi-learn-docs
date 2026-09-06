---
id: C4-08-03-RDS-Aurora与关系数据库题-Q680至Q718
sidebar_position: 3
---

# C4-08-03-RDS-Aurora与关系数据库题-Q680至Q718

> 本篇是《C4-08-RDS-Aurora与关系数据库题》的第3个分篇，主要包含：RDS-Aurora与关系数据库题、RDS-Aurora与关系数据库题、RDS-Aurora与关系数据库题。

## Q680-RDS-Aurora与关系数据库题

**题目：** A company has multiple SQL-based databases located in a data center. The company needs to migrate all database servers to the AWS Cloud to reduce the cost of operating physical servers. Which AWS service or resource will meet these requirements with the LEAST operational overhead?

**选项：**

- A. Amazon EC2 instances
- B. Amazon RDS
- C. Amazon DynamoDB
- D. OpenSearch

**主分类：** C4-08 RDS-Aurora与关系数据库题。

**题库记录答案：** `B`。

**需求/考点标签：** Migration。

### Q680.1-题干怎么拆

这道题先识别的不是某个服务名，而是这些约束：**Migration**。

判断时应该先找到与这些约束同层、同数据模型或同运维目标的服务，再排除“看起来也属于 AWS，但解决的是另一个层面问题”的选项。

### Q680.2-每个选项的定位

| 选项 | 题库内容 | 服务/概念定位 | 题库答案关系 |
|---|---|---|---|
| A | Amazon EC2 instances | Amazon EC2：可配置虚拟服务器，适合需要 OS/实例级控制的计算工作负载。 | 题库记录为非正确选项 |
| B | Amazon RDS | Amazon RDS：托管关系数据库服务，负责大量数据库基础设施运维。 | 题库记录为正确选项 |
| C | Amazon DynamoDB | Amazon DynamoDB：Serverless NoSQL Key-Value/Document 数据库，适合高规模、低延迟访问。 | 题库记录为非正确选项 |
| D | OpenSearch | Amazon OpenSearch Service：托管搜索、日志分析与可观测性搜索引擎服务。 | 题库记录为非正确选项 |

### Q680.3-为什么题库会这样选

题库记录的正确选项定位为：Amazon RDS：托管关系数据库服务，负责大量数据库基础设施运维。

它与题干要求的对象/约束直接对应。

其余选项虽然可能也属于同一大类，但主要解决不同问题。

---

---

## Q696-RDS-Aurora与关系数据库题

**题目：** Which AWS service supports MySQL database engines?。

**选项：**

- A. Amazon Dynamo DВ
- B. Amazon RDS
- C. Amazon DocumentDB (with MongoDB compatibility)
- D. Amazon ElastiCache

**主分类：** C4-08 RDS-Aurora与关系数据库题。

**题库记录答案：** `B`。

**需求/考点标签：** Relational Database。

**社区投票：** B 100%

### Q696.1-题干怎么拆

这道题先识别的不是某个服务名，而是这些约束：**Relational Database**。

判断时应该先找到与这些约束同层、同数据模型或同运维目标的服务，再排除“看起来也属于 AWS，但解决的是另一个层面问题”的选项。

### Q696.2-每个选项的定位

| 选项 | 题库内容 | 服务/概念定位 | 题库答案关系 |
|---|---|---|---|
| A | Amazon Dynamo DВ | 该选项是题库中的概念/服务描述。现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为非正确选项 |
| B | Amazon RDS | Amazon RDS：托管关系数据库服务，负责大量数据库基础设施运维。 | 题库记录为正确选项 |
| C | Amazon DocumentDB (with MongoDB compatibility) | Amazon DocumentDB：兼容 MongoDB 工作负载的托管文档数据库。 | 题库记录为非正确选项 |
| D | Amazon ElastiCache | Amazon ElastiCache：托管内存缓存，用于降低数据库压力并提高热点数据访问速度。 | 题库记录为非正确选项 |

### Q696.3-为什么题库会这样选

题库记录的正确选项定位为：Amazon RDS：托管关系数据库服务，负责大量数据库基础设施运维。

它与题干要求的对象/约束直接对应。

其余选项虽然可能也属于同一大类，但主要解决不同问题。

---

---

## Q718-RDS-Aurora与关系数据库题

**题目：** A company wants to deploy an application that stores data in a relational database. The company wants database tasks, such as automated backups and database snapshots, to be managed by AWS. Which AWS service will meet these requirements?

**选项：**

- A. Amazon DocumentDB
- B. Amazon RDS
- C. Amazon Elastic Block Store (Amazon EBS)
- D. Amazon S3

**主分类：** C4-08 RDS-Aurora与关系数据库题。

**题库记录答案：** `B`。

**需求/考点标签：** Relational Database。

**社区投票：** B 67%, C 33%。

### Q718.1-题干怎么拆

这道题先识别的不是某个服务名，而是这些约束：**Relational Database**。

判断时应该先找到与这些约束同层、同数据模型或同运维目标的服务，再排除“看起来也属于 AWS，但解决的是另一个层面问题”的选项。

### Q718.2-每个选项的定位

| 选项 | 题库内容 | 服务/概念定位 | 题库答案关系 |
|---|---|---|---|
| A | Amazon DocumentDB | Amazon DocumentDB：兼容 MongoDB 工作负载的托管文档数据库。 | 题库记录为非正确选项 |
| B | Amazon RDS | Amazon RDS：托管关系数据库服务，负责大量数据库基础设施运维。 | 题库记录为正确选项 |
| C | Amazon Elastic Block Store (Amazon EBS) | Amazon EBS：面向 EC2 的持久化块存储卷。 | 题库记录为非正确选项 |
| D | Amazon S3 | Amazon S3：高耐久、可扩展的对象存储，以 Bucket/Object 组织数据。 | 题库记录为非正确选项 |

### Q718.3-为什么题库会这样选

题库记录的正确选项定位为：Amazon RDS：托管关系数据库服务，负责大量数据库基础设施运维。

它与题干要求的对象/约束直接对应。

其余选项虽然可能也属于同一大类，但主要解决不同问题。

### Q718.4-⚠-争议/版本提示

- 社区投票分散，最高项仅 67%
- 本题同时收录到 `C4-27-旧题争议题与当前AWS差异.md`，不在这里强行替题库修正答案。

---

## 本篇概述

- 本篇梳理了RDS-Aurora与关系数据库题相关的核心知识、适用场景与判断要点。
- 本篇梳理了RDS-Aurora与关系数据库题相关的核心知识、适用场景与判断要点。
- 本篇梳理了RDS-Aurora与关系数据库题相关的核心知识、适用场景与判断要点。

[返回本章总述](./C4-08-00-章节总述.md)｜[查看本章概述](./C4-08-99-章节概述.md)

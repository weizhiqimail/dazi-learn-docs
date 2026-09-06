---
id: C4-08-01-RDS-Aurora与关系数据库题-Q61至Q322
sidebar_position: 1
---

# C4-08-01-RDS-Aurora与关系数据库题-Q61至Q322

> 本篇是《C4-08-RDS-Aurora与关系数据库题》的第1个分篇，主要包含：RDS-Aurora与关系数据库题、RDS-Aurora与关系数据库题、RDS-Aurora与关系数据库题、RDS-Aurora与关系数据库题、RDS-Aurora与关系数据库题、RDS-Aurora与关系数据库题。

## Q61-RDS-Aurora与关系数据库题

**题目：** Which of the following is a fully managed MySQL-compatible database?。

**选项：**

- A. Amazon S3
- B. Amazon DynamoDB
- C. Amazon Redshift
- D. Amazon Aurora

**主分类：** C4-08 RDS-Aurora与关系数据库题。

**题库记录答案：** `D`。

**社区投票：** D 100%

### Q61.1-题干怎么拆

现有题库没有提供独立 explanation。

这里按题干中的动作、对象和所有选项的服务定位进行比较。

### Q61.2-每个选项的定位

| 选项 | 题库内容 | 服务/概念定位 | 题库答案关系 |
|---|---|---|---|
| A | Amazon S3 | Amazon S3：高耐久、可扩展的对象存储，以 Bucket/Object 组织数据。 | 题库记录为非正确选项 |
| B | Amazon DynamoDB | Amazon DynamoDB：Serverless NoSQL Key-Value/Document 数据库，适合高规模、低延迟访问。 | 题库记录为非正确选项 |
| C | Amazon Redshift | Amazon Redshift：托管云数据仓库，用于大规模分析型查询。 | 题库记录为非正确选项 |
| D | Amazon Aurora | Amazon Aurora：AWS 云原生关系数据库，兼容 MySQL/PostgreSQL 生态，强调高性能与高可用。 | 题库记录为正确选项 |

### Q61.3-为什么题库会这样选

题库记录的正确选项定位为：Amazon Aurora：AWS 云原生关系数据库，兼容 MySQL/PostgreSQL 生态，强调高性能与高可用。

它与题干要求的对象/约束直接对应。

其余选项虽然可能也属于同一大类，但主要解决不同问题。

---

---

## Q63-RDS-Aurora与关系数据库题

**题目：** Which AWS service can run a managed PostgreSQL database that provides online transaction processing (OLTP)?。

**选项：**

- A. Amazon DynamoDB
- B. Amazon Athena
- C. Amazon RDS
- D. Amazon EMR

**主分类：** C4-08 RDS-Aurora与关系数据库题。

**题库记录答案：** `C`。

**需求/考点标签：** Relational Database。

**社区投票：** C 100%

### Q63.1-题干怎么拆

这道题先识别的不是某个服务名，而是这些约束：**Relational Database**。

判断时应该先找到与这些约束同层、同数据模型或同运维目标的服务，再排除“看起来也属于 AWS，但解决的是另一个层面问题”的选项。

### Q63.2-每个选项的定位

| 选项 | 题库内容 | 服务/概念定位 | 题库答案关系 |
|---|---|---|---|
| A | Amazon DynamoDB | Amazon DynamoDB：Serverless NoSQL Key-Value/Document 数据库，适合高规模、低延迟访问。 | 题库记录为非正确选项 |
| B | Amazon Athena | Amazon Athena：Serverless 交互式 SQL 查询服务，典型为直接查询 S3 数据。 | 题库记录为非正确选项 |
| C | Amazon RDS | Amazon RDS：托管关系数据库服务，负责大量数据库基础设施运维。 | 题库记录为正确选项 |
| D | Amazon EMR | Amazon EMR：托管大数据框架平台，如 Spark/Hadoop。 | 题库记录为非正确选项 |

### Q63.3-为什么题库会这样选

题库记录的正确选项定位为：Amazon RDS：托管关系数据库服务，负责大量数据库基础设施运维。

它与题干要求的对象/约束直接对应。

其余选项虽然可能也属于同一大类，但主要解决不同问题。

---

---

## Q161-RDS-Aurora与关系数据库题

**题目：** A company is running a critical workload on an Amazon RDS DB instance. The company needs the DB instance to be highly available with a recovery time of less than 5 minutes. Which solution will meet these requirements?。

**选项：**

- A. Create a read replica of the DB instance.
- B. Create a template of the DB instance by using AWS CloudFormation.
- C. Take frequent snapshots of the DB instance. Store the snapshots in Amazon S3.
- D. Modify the DB instance to be a Multi-AZ deployment.

**主分类：** C4-08 RDS-Aurora与关系数据库题。

**题库记录答案：** `D`。

**需求/考点标签：** 关系数据库高可用。

**社区投票：** D 100%

### Q161.1-题干怎么拆

这道题先识别的不是某个服务名，而是这些约束：**关系数据库高可用**。

判断时应该先找到与这些约束同层、同数据模型或同运维目标的服务，再排除“看起来也属于 AWS，但解决的是另一个层面问题”的选项。

### Q161.2-每个选项的定位

| 选项 | 题库内容 | 服务/概念定位 | 题库答案关系 |
|---|---|---|---|
| A | Create a read replica of the DB instance. | 该选项是题库中的概念/服务描述。现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为非正确选项 |
| B | Create a template of the DB instance by using AWS CloudFormation. | AWS CloudFormation：AWS Infrastructure as Code，用模板声明和部署资源。 | 题库记录为非正确选项 |
| C | Take frequent snapshots of the DB instance. Store the snapshots in Amazon S3. | Amazon S3：高耐久、可扩展的对象存储，以 Bucket/Object 组织数据。 | 题库记录为非正确选项 |
| D | Modify the DB instance to be a Multi-AZ deployment. | Availability Zone 是 Region 内相互隔离的故障域/部署位置。 | 题库记录为正确选项 |

### Q161.3-为什么题库会这样选

题库记录的正确选项定位为：Availability Zone 是 Region 内相互隔离的故障域/部署位置。

它与题干要求的对象/约束直接对应。

其余选项虽然可能也属于同一大类，但主要解决不同问题。

---

---

## Q190-RDS-Aurora与关系数据库题

**题目：** A company wants to migrate its database to a managed AWS service that is compatible with PostgreSQL. Which AWS services will meet these requirements? (Choose two.)。

**选项：**

- A. Amazon Athena
- B. Amazon RDS
- C. Amazon EC2
- D. Amazon DynamoDB
- E. Amazon Aurora

**主分类：** C4-08 RDS-Aurora与关系数据库题。

**题库记录答案：** `BE`。

**需求/考点标签：** Migration。

**社区投票：** BE 100%

### Q190.1-题干怎么拆

这道题先识别的不是某个服务名，而是这些约束：**Migration**。

判断时应该先找到与这些约束同层、同数据模型或同运维目标的服务，再排除“看起来也属于 AWS，但解决的是另一个层面问题”的选项。

### Q190.2-每个选项的定位

| 选项 | 题库内容 | 服务/概念定位 | 题库答案关系 |
|---|---|---|---|
| A | Amazon Athena | Amazon Athena：Serverless 交互式 SQL 查询服务，典型为直接查询 S3 数据。 | 题库记录为非正确选项 |
| B | Amazon RDS | Amazon RDS：托管关系数据库服务，负责大量数据库基础设施运维。 | 题库记录为正确选项 |
| C | Amazon EC2 | Amazon EC2：可配置虚拟服务器，适合需要 OS/实例级控制的计算工作负载。 | 题库记录为非正确选项 |
| D | Amazon DynamoDB | Amazon DynamoDB：Serverless NoSQL Key-Value/Document 数据库，适合高规模、低延迟访问。 | 题库记录为非正确选项 |
| E | Amazon Aurora | Amazon Aurora：AWS 云原生关系数据库，兼容 MySQL/PostgreSQL 生态，强调高性能与高可用。 | 题库记录为正确选项 |

### Q190.3-为什么题库会这样选

题库记录的正确选项定位为：Amazon RDS：托管关系数据库服务，负责大量数据库基础设施运维。

Amazon Aurora：AWS 云原生关系数据库，兼容 MySQL/PostgreSQL 生态，强调高性能与高可用。

它与题干要求的对象/约束直接对应。

其余选项虽然可能也属于同一大类，但主要解决不同问题。

---

---

## Q240-RDS-Aurora与关系数据库题

**题目：** A company wants to migrate its PostgreSQL database to AWS. The company does not use the database frequently. Which AWS service or resource will meet these requirements with the LEAST management overhead?。

**选项：**

- A. PostgreSQL on Amazon EC2
- B. Amazon RDS for PostgreSQL
- C. Amazon Aurora PostgreSQL-Compatible Edition
- D. Amazon Aurora Serverless

**主分类：** C4-08 RDS-Aurora与关系数据库题。

**题库记录答案：** `D`。

**需求/考点标签：** Relational Database / Migration。

**社区投票：** D 71%, B 25%。

### Q240.1-题干怎么拆

这道题先识别的不是某个服务名，而是这些约束：**Relational Database、Migration**。

判断时应该先找到与这些约束同层、同数据模型或同运维目标的服务，再排除“看起来也属于 AWS，但解决的是另一个层面问题”的选项。

### Q240.2-每个选项的定位

| 选项 | 题库内容 | 服务/概念定位 | 题库答案关系 |
|---|---|---|---|
| A | PostgreSQL on Amazon EC2 | Amazon EC2：可配置虚拟服务器，适合需要 OS/实例级控制的计算工作负载。 | 题库记录为非正确选项 |
| B | Amazon RDS for PostgreSQL | Amazon RDS：托管关系数据库服务，负责大量数据库基础设施运维。 | 题库记录为非正确选项 |
| C | Amazon Aurora PostgreSQL-Compatible Edition | Amazon Aurora：AWS 云原生关系数据库，兼容 MySQL/PostgreSQL 生态，强调高性能与高可用。 | 题库记录为非正确选项 |
| D | Amazon Aurora Serverless | Amazon Aurora：AWS 云原生关系数据库，兼容 MySQL/PostgreSQL 生态，强调高性能与高可用。 | 题库记录为正确选项 |

### Q240.3-为什么题库会这样选

题库记录的正确选项定位为：Amazon Aurora：AWS 云原生关系数据库，兼容 MySQL/PostgreSQL 生态，强调高性能与高可用。

它与题干要求的对象/约束直接对应。

其余选项虽然可能也属于同一大类，但主要解决不同问题。

---

---

## Q322-RDS-Aurora与关系数据库题

**题目：** A user needs a relational database but does not have the resources to manage the hardware, resiliency, and replication. Which AWS service option meets the user's requirements?。

**选项：**

- A. Run MySQL on Amazon Elastic Container Service (Amazon ECS).
- B. Run MySQL on Amazon EC2.
- C. Choose Amazon RDS for MySQL.
- D. Choose Amazon ElastiCache for Redis.

**主分类：** C4-08 RDS-Aurora与关系数据库题。

**题库记录答案：** `C`。

**需求/考点标签：** Relational Database。

**社区投票：** C 100%

### Q322.1-题干怎么拆

这道题先识别的不是某个服务名，而是这些约束：**Relational Database**。

判断时应该先找到与这些约束同层、同数据模型或同运维目标的服务，再排除“看起来也属于 AWS，但解决的是另一个层面问题”的选项。

### Q322.2-每个选项的定位

| 选项 | 题库内容 | 服务/概念定位 | 题库答案关系 |
|---|---|---|---|
| A | Run MySQL on Amazon Elastic Container Service (Amazon ECS). | Amazon ECS：AWS 原生托管容器编排服务。 | 题库记录为非正确选项 |
| B | Run MySQL on Amazon EC2. | Amazon EC2：可配置虚拟服务器，适合需要 OS/实例级控制的计算工作负载。 | 题库记录为非正确选项 |
| C | Choose Amazon RDS for MySQL. | Amazon RDS：托管关系数据库服务，负责大量数据库基础设施运维。 | 题库记录为正确选项 |
| D | Choose Amazon ElastiCache for Redis. | Amazon ElastiCache：托管内存缓存，用于降低数据库压力并提高热点数据访问速度。 | 题库记录为非正确选项 |

### Q322.3-为什么题库会这样选

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

[返回本章总述](./C4-08-00-章节总述.md)｜[查看本章概述](./C4-08-99-章节概述.md)

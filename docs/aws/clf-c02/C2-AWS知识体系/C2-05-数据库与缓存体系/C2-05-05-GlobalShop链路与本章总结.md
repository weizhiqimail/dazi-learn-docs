---
id: C2-05-05-GlobalShop链路与本章总结
sidebar_position: 5
---

# C2-05-05-GlobalShop链路与本章总结

> 本篇是《C2-05-数据库与缓存体系》的第5个分篇，主要包含：GlobalShop链路与本章总结。

## 13-★★★★★-GlobalShop链路与本章总结

### 13.1-GlobalShop-最终-Database-+-Cache-架构

```text
                           Global Users
                                │
                                ▼
                         Application Layer
                                │
          ┌─────────────────────┼─────────────────────┐
          │                     │                     │
          ▼                     ▼                     ▼
     ElastiCache            DynamoDB             Aurora / RDS
   Hot Data / Cache        Cart / KV           Order / Payment
          │                                           │
          │                                           │
          └────────── cache miss ─────────────────────┘
                                │
             ┌──────────────────┼───────────────────┐
             │                  │                   │
             ▼                  ▼                   ▼
        DocumentDB           Neptune             Redshift
        Documents            Graph              Analytics
```

横向还有：IAM、KMS、Secrets Manager、CloudWatch、AWS Backup。

后面章节继续补全。

---

### 13.2-用户访问商品页面时-Database-如何参与？

例如：GET /products/12345。

可能：

```text
Application
    │
    ▼
ElastiCache
    │
    ├── Hit
    │     └── Return Product
    │
    └── Miss
          │
          ▼
      DynamoDB / RDS / DocumentDB
          │
          ▼
       Cache Result
          │
          ▼
        Return
```

这里：Cache、Database。

是两个不同层。

---

### 13.3-用户下订单时-Database-如何参与？

```text
User
 │
 ▼
Order API
 │
 ▼
Aurora / RDS
 │
 ├── Create Order
 ├── Create Order Items
 ├── Transaction
 └── Commit
```

成功后可以：

```text
Event
↓
SQS / EventBridge
↓
其他服务
```

消息体系放在 C2-11。

---

### 13.4-双十一时-Database-层怎么思考？

不是只说：“加服务器”。

要分别考虑：

```text
Application Compute
→ Auto Scaling / ECS / Fargate

Hot Read
→ ElastiCache

Relational Read
→ Read Replica / Aurora Reader

Key-Value Traffic
→ DynamoDB Scaling / On-Demand

Analytics
→ Redshift
```

也就是：不同层分别扩展

---

### 13.5-本章最重要的服务表

| 服务 | 类型 | 最核心用途 |
|---|---|---|
| RDS | Managed Relational DB | 托管 MySQL/PostgreSQL/Oracle/SQL Server/MariaDB/Db2 等 |
| Aurora | Relational DB | AWS MySQL/PostgreSQL-compatible relational engine |
| DynamoDB | Serverless NoSQL | Key-Value / Document，大规模低延迟 |
| ElastiCache | In-Memory Cache | 降低后端数据库压力、低延迟 |
| DocumentDB | Document DB | MongoDB-compatible document workloads |
| Neptune | Graph DB | Highly connected data |
| Redshift | Data Warehouse | Analytics / BI / OLAP |

---

### 13.6-本章重要英文词汇

#### 13.6.1-Database

数据库

#### 13.6.2-Relational-Database

关系数据库

#### 13.6.3-Database-Engine

数据库引擎

#### 13.6.4-SQL

Structured Query Language、结构化查询语言。

#### 13.6.5-NoSQL

非传统关系型数据库体系 / Not Only SQL。

#### 13.6.6-Table

表

#### 13.6.7-Row

行 / 记录

#### 13.6.8-Column

列 / 字段

#### 13.6.9-Primary-Key

主键

#### 13.6.10-Foreign-Key

外键

#### 13.6.11-Transaction

事务

#### 13.6.12-Read-Replica

只读副本

#### 13.6.13-Standby

备用实例 / 待机

#### 13.6.14-Failover

故障切换

#### 13.6.15-Partition-Key

分区键

#### 13.6.16-Sort-Key

排序键

#### 13.6.17-Cache

缓存

#### 13.6.18-Cache-Hit

缓存命中

#### 13.6.19-Cache-Miss

缓存未命中

#### 13.6.20-In-Memory

内存中

#### 13.6.21-Document-Database

文档数据库

#### 13.6.22-Graph-Database

图数据库

#### 13.6.23-Data-Warehouse

数据仓库

#### 13.6.24-OLTP

Online Transaction Processing、在线事务处理。

#### 13.6.25-OLAP

Online Analytical Processing、在线分析处理。

---

### 13.7-CLF-C02-层级真正应该掌握什么？

不需要深入：B-Tree 内部实现、MVCC 算法、Redo Log、WAL、数据库锁算法、DynamoDB 内部分区实现、Redis 源代码、Query Optimizer。

但一定要会：

```text
RDS 是什么
Aurora 是什么
DynamoDB 是什么
ElastiCache 是什么
DocumentDB 是什么
Neptune 是什么
Redshift 是什么

Multi-AZ vs Read Replica
SQL vs NoSQL
Database vs Cache
OLTP vs OLAP
```

---

### 13.8-本章压缩成一张图

```text
                          AWS Data Layer
                               │
      ┌────────────┬───────────┼───────────┬────────────┐
      │            │           │           │            │
      ▼            ▼           ▼           ▼            ▼
 Relational      NoSQL       Cache       Document      Graph
      │            │           │           │            │
      ▼            ▼           ▼           ▼            ▼
 RDS/Aurora     DynamoDB   ElastiCache  DocumentDB    Neptune

                               │
                               ▼
                          Analytics
                               │
                               ▼
                            Redshift
```

---

### 13.9-最重要的八句话

```text
1. RDS = Managed Relational Database Service。
2. Aurora = MySQL/PostgreSQL-compatible AWS relational database engine。
3. Multi-AZ 的核心是 High Availability / Failover。
4. Read Replica 的核心是 Read Scaling。
5. DynamoDB = Serverless Fully Managed NoSQL，核心是 Key-Value / Document。
6. ElastiCache = In-Memory Cache，用来降低 Latency 和 Database Load。
7. DocumentDB = MongoDB-compatible Document Database；Neptune = Graph Database。
8. Redshift = Data Warehouse，不是普通 OLTP RDS。
```

---

### 13.10-AWS-官方资料

Amazon RDS：[AWS 官方文档：What is Amazon RDS?](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/Welcome.html)。

RDS Multi-AZ：

[AWS 官方文档：Configuring and managing a Multi-AZ deployment](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/Concepts.MultiAZ.html)。

RDS Read Replicas：

[AWS 官方文档：Working with DB instance read replicas](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_ReadRepl.html)。

Amazon Aurora：

[AWS 官方文档：What is Amazon Aurora?](https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/CHAP_AuroraOverview.html)。

Amazon DynamoDB：

[AWS 官方文档：What is Amazon DynamoDB?](https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/Introduction.html)。

DynamoDB Core Components：

[AWS 官方文档：Core components of Amazon DynamoDB](https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/HowItWorks.CoreComponents.html)。

Amazon ElastiCache：

[AWS 官方文档：What is Amazon ElastiCache?](https://docs.aws.amazon.com/AmazonElastiCache/latest/dg/WhatIs.html)。

Amazon DocumentDB：[AWS 官方文档：What is Amazon DocumentDB?](https://docs.aws.amazon.com/documentdb/latest/developerguide/what-is.html)

Amazon DocumentDB MongoDB Compatibility：[AWS 官方文档：Amazon DocumentDB compatibility with MongoDB](https://docs.aws.amazon.com/documentdb/latest/developerguide/compatibility.html)。

Amazon Neptune：

[AWS 官方文档：What is Amazon Neptune?](https://docs.aws.amazon.com/neptune/latest/userguide/intro.html)。

Amazon Redshift：[AWS 官方文档：What is Amazon Redshift?](https://docs.aws.amazon.com/redshift/latest/mgmt/welcome.html)

---

### 13.11-下一章

到这里：Compute、Storage、Database。

已经建立。

但是所有这些资源都不能悬浮在空气里。

还需要解决：EC2 放在哪个网络？

Subnet 是什么？

Public / Private 是什么？

Internet 怎么进来？

Database 为什么通常不直接暴露公网？

Security Group 在哪里生效？

Route Table 怎么决定流量去哪？

于是下一章正式进入：C2-06-VPC与基础网络.md。

核心主线：

```text
Network
│
├── Amazon VPC
├── CIDR
├── Subnet
├── Route Table
├── Internet Gateway
├── NAT Gateway
├── Security Group
└── Network ACL
```

## 本篇概述

- 本篇梳理了GlobalShop链路与本章总结相关的核心知识、适用场景与判断要点。

[返回本章总述](./C2-05-00-章节总述.md)｜[查看本章概述](./C2-05-99-章节概述.md)

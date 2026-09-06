---
id: C2-05-01-数据库基础与数据模型与Amazon-RDS关系数据库
sidebar_position: 1
---

# C2-05-01-数据库基础与数据模型与Amazon-RDS关系数据库

> 本篇是《C2-05-数据库与缓存体系》的第1个分篇，主要包含：本章在整套-AWS-知识体系中的位置、本章与-719-道题库的关系、数据库基础与数据模型、Amazon-RDS关系数据库。

## 1-本章在整套-AWS-知识体系中的位置

上一章解决：数据放在哪里？

例如：

```text
Object
→ S3

Block
→ EBS

File
→ EFS / FSx
```

但是业务数据不能只考虑：“有没有保存”。

例如 GlobalShop 的订单：

```text
Order
├── order_id
├── user_id
├── amount
├── status
├── created_at
└── items
```

应用还需要：按 order_id 查订单、按 user_id 查用户订单、更新订单状态、保证付款与订单修改的一致性、建立索引、并发读写、备份、高可用、扩展。

这些能力属于：Database。

因此：

```text
Storage
        ↓
保存数据
        ↓
Database
        ↓
组织、查询、修改和管理业务数据
```

---

---

## 2-本章与-719-道题库的关系

按照本项目统一的粗略“题干 + 全部选项，每题最多计一次”的曝光统计：

| 服务 / 概念 | 题库粗略曝光 |
|---|---:|
| Amazon RDS | 42 |
| Amazon DynamoDB | 36 |
| Amazon Aurora | 25 |
| Amazon Redshift | 18 |
| Amazon Neptune | 12 |
| Amazon ElastiCache | 9 |
| Amazon DocumentDB | 6 |

注意：曝光度 ≠ 正确答案次数。

例如：ElastiCache。

在这套题里经常作为：“它明明是 Cache，为什么不是 Database 题答案？

”。

这样的干扰项出现。

所以本章重点不是背服务出现次数，而是建立：Data Model + Workload + Access Pattern + Availability + Scaling。

之间的关系。

---

---

## 3-★★★★★-数据库基础与数据模型

### 3.1-Database-是什么？

Database。

数据库。

最简单地说：

```text
Database
不是单纯“一个装数据的文件”。

它还提供一套规则和能力，
让 Application 能够高效、可靠地组织、查询、修改数据。
```

例如：

```text
Application
     │
     │ SQL / API
     ▼
Database Engine
     │
     ├── Data Model
     ├── Query
     ├── Index
     ├── Transaction
     ├── Concurrency
     └── Persistence
```

---

### 3.2-Storage-与-Database-到底有什么区别？

例如：S3。

当然可以存：orders.json。

但是如果有：10 亿订单然后每秒都需要：SELECT ...、UPDATE ...、按 user_id 查、按 status 查、事务提交。

仅仅把 JSON 文件放 S3，并不等于已经获得一个 Online Transaction Database。

所以：

```text
Storage
解决：
字节放在哪里

Database
解决：
业务数据如何建模、查询、修改和保证正确性
```

---

### 3.3-Database-Engine-是什么？

Engine，中文为：引擎。

Database Engine。

数据库引擎。

例如：MySQL、PostgreSQL、MariaDB、Oracle Database、Microsoft SQL Server、IBM Db2。

这些不是“一个硬盘”。

它们是完整数据库软件系统。

---

### 3.4-自己在-EC2-上装数据库

最传统的云上方式：

```text
EC2
 │
 ├── Linux
 ├── MySQL
 └── EBS
```

也就是：Database on EC2。

此时你控制很多东西：OS、DB Installation、Patch、Version、Configuration、Backup、Replication、Failover、Monitoring。

优点：控制能力高。

缺点：运维责任大。

这和前面：EC2 vs Fargate / Lambda。

的抽象思路完全一致。

---

### 3.5-Managed-Database-为什么出现？

很多公司其实想要的是：“我要 MySQL / PostgreSQL，但我不想每天维护数据库服务器。”。

于是 Cloud Provider 可以帮你管理：Hardware、OS、Database Installation、Backup、Patching、Failure Detection、Recovery。

这就是：Managed Database。

AWS 中最重要的代表：Amazon RDS。

---

### 3.6-★★★★★-Relational-Database-是什么？

Relational Database。

关系数据库。

核心数据结构通常是：Table、Row、Column。

例如：

#### 3.6.1-users

| user_id | name | email |
|---|---|---|
| 1001 | Alice | a@example.com |
| 1002 | Bob | b@example.com |

#### 3.6.2-orders

| order_id | user_id | amount |
|---|---|---:|
| 90001 | 1001 | 8000 |
| 90002 | 1001 | 12000 |

这里：users.user_id。

和：orders.user_id。

之间就存在业务关系。

---

### 3.7-Table、Row、Column

#### 3.7.1-Table

表。

例如：users、orders、products。

#### 3.7.2-Row

行 / 记录。

例如一笔订单。

#### 3.7.3-Column

列 / 字段。

例如：order_id、amount、status。

---

### 3.8-Primary-Key-与-Foreign-Key

Primary Key。

简称：PK，中文为：主键。

用于唯一标识一条记录。

例如：

```text
order_id = 90001
```

Foreign Key。

简称：FK，中文为：外键。

用于表达表之间的关系。

例如：

```text
orders.user_id
→ users.user_id
```

注意：Database Key。

和：KMS Encryption Key。

完全不是一个概念。

---

### 3.9-★★★★★-SQL-是什么？

SQL。

Structured Query Language、结构化查询语言。

关系数据库常用 SQL。

例如：

```sql
SELECT *
FROM orders
WHERE user_id = 1001;
```

更新：

```sql
UPDATE orders
SET status = 'PAID'
WHERE order_id = 90001;
```

CLF-C02 不要求写复杂 SQL。

只需要知道：

```text
SQL
→ Relational Database
→ Table / Row / Column / Relationship
```

---

### 3.10-Transaction-是什么？

Transaction。

事务。

例如支付过程：

1. 创建支付记录、2. 扣减库存、3. 修改订单状态、4. 记录账务

业务通常希望：要么整体成功、要么整体失败 / 回滚，而不是钱扣了、订单却没更新。

这就是 Transaction 思想。

---

### 3.11-ACID-是什么？

ACID 是关系型事务里常见的四个性质：

```text
A = Atomicity
C = Consistency
I = Isolation
D = Durability
```

中文：Atomicity 原子性、Consistency 一致性、Isolation 隔离性、Durability 持久性。

CLF-C02 不要求深入数据库理论，但要知道：订单、支付、财务、库存。

这类有明确关系和事务要求的数据，关系数据库通常很自然。

---

### 3.12-★★★★★-NoSQL-是什么？

NoSQL。

常被解释为：Not Only SQL。

它不是简单等于：“不能查询”。

也不是“没有结构”。

更准确的学习方式：不把所有业务都强制建模为传统关系表 + Join。

NoSQL 有多种模型：Key-Value、Document、Graph、Wide-column、...。

AWS CLF-C02 中最核心：

```text
DynamoDB
→ Key-Value / Document NoSQL

DocumentDB
→ Document Database

Neptune
→ Graph Database
```

---

### 3.13-为什么需要-NoSQL？

假设 GlobalShop 购物车：

```text
user_id
→ cart data
```

访问模式很简单：

```text
给我 user_id
→ 返回购物车
```

而系统可能面对几千万用户、流量快速变化、大规模并发。

如果主要需求并不是复杂 Join，可以考虑：Key-Value / NoSQL。

这并不是说 NoSQL 一定比 SQL 好，而是。

```text
Workload 不同
→ Data Model 可以不同
```

---

### 3.14-Database-选择的第一原则：Access-Pattern

Access Pattern。

访问模式。

也就是：Application 到底怎么读写数据？

例如：按订单 ID 查、按用户查最近 20 个订单、按商品 ID 读详情、按用户 ID 读购物车、查询人与人的关系、复杂 BI 聚合。

不同 Access Pattern 可能对应不同数据库技术。

所以：

```text
不是先问：
AWS 哪个 Database 最强？

而是先问：
我的数据是什么，
我要怎么访问？
```

---

---

## 4-★★★★★-Amazon-RDS关系数据库

### 4.1-★★★★★-Amazon-RDS

[CURRENT-IN-SCOPE]。

正式名称：Amazon Relational Database Service。

简称：Amazon RDS，中文为：Amazon 关系数据库服务。

---

### 4.2-为什么叫-RDS？

Relational。

关系型。

Database，即。

数据库。

Service，即。

服务。

所以：

```text
RDS
=
Relational Database Service
```

名字直接表达：AWS 托管关系数据库。

---

### 4.3-RDS-到底是什么？

最简单：AWS 帮你管理关系数据库基础设施和大量日常运维工作。

你仍然需要考虑：Schema、Table、Index、Query、Application Data、Database User、Business Logic。

AWS 更多负责：底层基础设施、数据库软件部署、备份机制、补丁、故障检测、恢复。

这就是 Shared Responsibility 在 Database 中的体现。

---

### 4.4-RDS-当前主要数据库引擎

当前 Amazon RDS（不把 Aurora 混在这张普通 RDS engine 表里）主要支持：IBM Db2、MariaDB、Microsoft SQL Server、MySQL、Oracle、PostgreSQL。

而：Amazon Aurora。

属于 Amazon RDS 家族中的 AWS 自研兼容型关系数据库体系，AWS 为 Aurora 提供独立 User Guide。

---

### 4.5-RDS-DB-Instance-是什么？

DB Instance。

数据库实例。

可以理解：一个正在运行的 Managed Database Environment。

例如：GlobalShop Order DB、Engine: PostgreSQL、Class: ...、Storage: ...。

Application 通过：Database Endpoint。

连接。

---

### 4.6-GlobalShop-为什么订单适合-RDS？

订单数据通常：User、Order、Order Item、Payment、Inventory。

之间存在明确关系。

例如：

```text
User
  │
  └── Order
        │
        └── OrderItem
              │
              └── Product
```

再加：Transaction、Consistency、SQL Query。

所以：RDS / Aurora。

是非常自然的订单数据库选择。

---

### 4.7-RDS-帮你管理什么？

相对于：MySQL on EC2。

RDS 可以帮助处理很多：Provisioning、Database Software、Patch、Automated Backup、Failure Detection、Recovery、Monitoring Integration、Scaling Options。

但它不是“数据库以后完全不需要 DBA / Developer 思考”。

你仍需要管理：

Data Model、Query、Index、Access、Security Configuration、Performance Design、Application Logic

---

### 4.8-RDS-Backup

Amazon RDS 提供：Automated Backups、Manual DB Snapshots、Point-in-Time Recovery等能力。

这里先建立概念：

```text
Automated Backup
→ 系统按配置自动保留恢复能力

Manual Snapshot
→ 用户主动创建时间点快照
```

完整备份治理还可以结合：AWS Backup。

---

### 4.9-★★★★★-RDS-Multi-AZ

Multi-AZ。

Multiple Availability Zones、多可用区。

核心目的：High Availability、Failover。

经典 RDS Multi-AZ DB Instance 思路：

```text
              Application
                   │
                   ▼
                Endpoint
                   │
             Primary DB
                AZ-A
                   │
        synchronous replication
                   │
                   ▼
              Standby DB
                AZ-B
```

如果 Primary 出现问题：

```text
Failover
↓
Standby 接管
```

---

### 4.10-Standby-是什么？

Standby。

备用、待机。

经典 Multi-AZ DB Instance 中：Standby。

主要是：HA / Failover。

不是为了：给 Application 分担读请求。

这是考试非常重要的区别。

---

### 4.11-★★★★★-Read-Replica

Read Replica。

只读副本 / 读取副本。

核心目的：Read Scaling。

架构：

```text
              Primary
             /       \
            /         \
           ▼           ▼
    Read Replica  Read Replica
```

Application 可以把：读流量。

分到 Replica。

---

### 4.12-★★★★★-Multi-AZ-vs-Read-Replica

这是数据库章节最重要的对比之一。

| 能力 | Multi-AZ | Read Replica |
|---|---|---|
| 主要目标 | High Availability | Read Scaling |
| 故障切换 | 是核心用途 | 不是主要定义 |
| 是否分担读请求 | 经典 Standby 不用于普通读流量 | 是 |
| 关键词 | failover、HA | read-heavy、scale reads |

最简单：

```text
Multi-AZ
→ 坏了怎么办？

Read Replica
→ 读太多怎么办？
```

---

### 4.13-一个当前-AWS-细节：不要把所有-Multi-AZ-形态混成一个

[UPDATED]。

现在 RDS 不只有最经典的：Multi-AZ DB instance deployment。

也存在：Multi-AZ DB cluster。

等形态。

其中 Reader Instance / Read Replica 的能力比旧教材中的一句：“Multi-AZ 永远不能读”。

要复杂。

所以本教材在 CLF-C02 基础层统一采用更准确表述：

经典 Multi-AZ DB Instance 的 Standby、主要用于 HA / Failover，不能拿 Standby 当普通 Read Replica 使用。

考试如果明确说：read scaling。

应关注：Read Replica。

如果明确说：automatic failover / high availability。

应关注：Multi-AZ。

---

## 本篇概述

- 本篇梳理了本章在整套-AWS-知识体系中的位置相关的核心知识、适用场景与判断要点。
- 本篇梳理了本章与-719-道题库的关系相关的核心知识、适用场景与判断要点。
- 本篇梳理了数据库基础与数据模型相关的核心知识、适用场景与判断要点。
- 本篇梳理了Amazon-RDS关系数据库相关的核心知识、适用场景与判断要点。

[返回本章总述](./C2-05-00-章节总述.md)｜[查看本章概述](./C2-05-99-章节概述.md)

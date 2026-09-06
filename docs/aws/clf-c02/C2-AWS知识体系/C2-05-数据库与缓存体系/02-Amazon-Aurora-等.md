---
id: 02-Amazon-Aurora-等
sidebar_position: 2
---

# C2-05-数据库与缓存体系-Amazon-Aurora与Amazon-DynamoDB与Amazon-ElastiCache

> 本篇是《C2-05-数据库与缓存体系》的第2个分篇，主要包含：Amazon-Aurora、Amazon-DynamoDB、Amazon-ElastiCache。

## 5-★★★★★-Amazon-Aurora

### 5.1-★★★★★-Amazon-Aurora

[CURRENT-IN-SCOPE]。

正式名称：Amazon Aurora。

中文一般直接称：Amazon Aurora Aurora。

原本是：极光。

这是产品名，不像 RDS 那样是缩写。

---

### 5.2-Aurora-到底是什么？

AWS 当前定义：Fully Managed Relational Database Engine。

并且兼容：MySQL、PostgreSQL。

所以：

```text
Aurora
不是 NoSQL

Aurora
不是 MongoDB

Aurora
不是 Data Warehouse
```

它是：Relational Database。

---

### 5.3-Aurora-与-RDS-的关系

容易出现两个错误极端。

错误 1：Aurora 就是 RDS 的另一个普通第三方 Engine。

不够准确。

错误 2：Aurora 和 RDS 完全没关系。

也不对。

更好的理解：

```text
Amazon RDS
关系数据库托管体系
│
├── MySQL
├── PostgreSQL
├── MariaDB
├── Oracle
├── SQL Server
├── Db2
│
└── Amazon Aurora
     ├── MySQL-compatible
     └── PostgreSQL-compatible
```

Aurora 有自己专门设计的：Distributed Storage Architecture、Cluster、Reader / Writer。

---

### 5.4-Aurora-Cluster

Aurora 的一个重要概念：DB Cluster。

简化：

```text
                 Aurora Cluster
                       │
          ┌────────────┴────────────┐
          │                         │
          ▼                         ▼
      Writer                     Reader
     Instance                   Instance
          │                         │
          └──────────┬──────────────┘
                     ▼
             Shared Cluster Storage
```

用户不需要像自己搭 MySQL 集群那样，自己管理底层分布式存储复制。

---

### 5.5-Writer-与-Reader

Writer。

写入节点。

负责：Read / Write。

Reader，即。

读取节点。

用于：Read Scaling。

所以 Aurora 同样体现：Write Path、Read Scaling、High Availability。

---

### 5.6-Aurora-为什么经常出题？

因为它很容易和：RDS、DynamoDB、Redshift。

混淆。

题目看到：MySQL-compatible、PostgreSQL-compatible、relational、AWS-managed、high availability。

Aurora 可能是重点候选。

看到：NoSQL、key-value、serverless at any scale。

应该更偏：DynamoDB。

---

### 5.7-RDS-vs-Aurora

可以这样理解：

```text
RDS
→ Managed Relational Database Service 家族

Aurora
→ AWS 自研的 MySQL/PostgreSQL-compatible
  Managed Relational Database Engine
```

如果企业必须使用：Oracle、SQL Server、Db2、MariaDB。

Aurora 显然不是对应答案。

---

---

## 6-★★★★★-Amazon-DynamoDB

### 6.1-★★★★★-Amazon-DynamoDB

[CURRENT-IN-SCOPE]。

正式名称：Amazon DynamoDB。

它不是一个缩写。

Dynamo。

有：动力机 / 发电机。

等含义，这里主要是产品名的一部分。

DB。

Database、数据库。

---

### 6.2-DynamoDB-到底是什么？

AWS 当前定义的核心：Serverless、Fully Managed、Distributed、NoSQL Database。

并提供：Key-Value、Document。

数据模型。

核心特征：大规模、低延迟、自动扩展能力强、不需要管理数据库服务器。

---

### 6.3-DynamoDB-的核心对象

最基础：Table、Item、Attribute。

例如：Cart Table。

其中一条 Item：

```json
{
  "user_id": "u-1001",
  "items": [
    {"sku": "p-001", "qty": 2},
    {"sku": "p-009", "qty": 1}
  ],
  "updated_at": "2026-09-05T10:00:00Z"
}
```

这里：

```text
Item
≈ 一条数据记录

Attribute
≈ 数据属性
```

---

### 6.4-DynamoDB-Primary-Key

DynamoDB 的关键概念：Primary Key。

最基础可能是：Partition Key。

或者：Partition Key + Sort Key。

---

### 6.5-Partition-Key-是什么？

Partition。

分区。

Partition Key。

不只是：“业务主键的另一个名字”。

它还与 DynamoDB：数据如何分布。

密切相关。

例如：user_id。

可以作为购物车表的 Partition Key。

访问：

```text
user_id = u-1001
```

就能定位相关数据。

---

### 6.6-Sort-Key-是什么？

Sort Key。

排序键。

Composite Primary Key：Partition Key + Sort Key。

例如：PK: user_id、SK: created_at。

可以把：同一个用户的一组数据。

按照 Sort Key 组织。

CLF-C02 不要求深入 Single-table Design，但要知道：DynamoDB、不是传统 Row / Foreign Key / Join 思维的直接复制。

---

### 6.7-DynamoDB-为什么适合购物车？

GlobalShop：

```text
User
 │
 ▼
user_id
 │
 ▼
Shopping Cart
```

需求：按 user_id 快速读写、流量可能非常大、双十一瞬时增长、不需要复杂多表 Join。

于是：DynamoDB。

非常自然。

---

### 6.8-DynamoDB-Serverless-的含义

Serverless。

不是AWS 没有服务器，而是 用户不管理数据库服务器实例。

你更关注：Table、Key、Item、Capacity Mode、Access Pattern，而不是哪个 EC2、哪个 OS、数据库软件怎么安装。

---

### 6.9-DynamoDB-Capacity-Mode

最重要的两种思路：On-Demand、Provisioned。

#### 6.9.1-On-Demand

按请求使用、适合流量不可预测、自动适应读写需求。

#### 6.9.2-Provisioned

事先配置读写 Capacity、适合可预测工作负载。

CLF-C02 重点：variable traffic、unknown traffic、automatic scaling / serverless simplicity。

经常与 DynamoDB On-Demand 思路相关。

---

### 6.10-★★★-DynamoDB-Global-Tables

Global Tables。

全局表。

用于：Multi-Region、多区域复制。

例如 GlobalShop：

```text
Tokyo
DynamoDB
   │
   ├──────────────┐
   ▼              ▼
Virginia       Frankfurt
DynamoDB       DynamoDB
```

适合：全球低延迟访问、Multi-Region resilience。

完整 Multi-Region 架构会在后面章节再深入。

---

### 6.11-★★★-DynamoDB-Streams

Streams。

变更数据流。

当 DynamoDB Item：Insert、Update、Delete。

时，可以产生变化记录。

典型：

```text
DynamoDB
   │
   │ change
   ▼
DynamoDB Streams
   │
   ▼
Lambda
```

例如：

```text
订单状态变化
↓
触发后续异步处理
```

完整 Event-driven Architecture 会在 C2-11 继续讲。

---

### 6.12-★★-DynamoDB-TTL

TTL。

Time To Live、生存时间。

可以为数据设置：到期时间。

适合：临时 Session、临时 Token 记录、过期业务数据。

但不要把：TTL。

理解成：Backup。

---

### 6.13-★★★★★-RDS-vs-DynamoDB

| 维度 | RDS / Aurora | DynamoDB |
|---|---|---|
| 类型 | Relational | NoSQL |
| 数据模型 | Table / Relation | Key-Value / Document |
| SQL / Join | 核心能力 | 不是传统关系 Join 模型 |
| Server 管理 | AWS 托管，但有 DB Instance 概念 | Serverless |
| 典型 | 订单、财务、关系数据 | 购物车、Session、大规模 Key-Value |
| Scaling 思维 | Instance / Replica / Storage | Partition / Capacity / Serverless Scaling |

最重要：

```text
有关系、事务、SQL
→ RDS / Aurora

Key-Value、大规模、简单访问模式
→ DynamoDB
```

不是绝对规则，但这是 CLF 层最重要的判断框架。

---

---

## 7-★★★★★-Amazon-ElastiCache

### 7.1-★★★★-Amazon-ElastiCache

[CURRENT-IN-SCOPE]。

正式名称：Amazon ElastiCache。

名称可以拆成：Elastic + Cache，中文为：弹性缓存。

---

### 7.2-★★★★★-Cache-是什么？

Cache。

缓存。

缓存的核心：把“经常使用、读取成本较高”的数据、放到更快的位置，减少对后端系统的访问。

例如：

```text
Application
    │
    ▼
ElastiCache
    │
    │ cache miss
    ▼
RDS
```

---

### 7.3-为什么-Database-前面还需要-Cache？

假设商品详情：

```text
product_id = 12345
```

一秒被请求：100,000 次如果每一次都：

```text
Application
↓
RDS
↓
复杂 Query
```

数据库压力会很大。

可以：

```text
第一次：
Application
↓
RDS
↓
结果放 Cache

以后：
Application
↓
Cache
↓
快速返回
```

---

### 7.4-Cache-Hit-与-Cache-Miss

Cache Hit。

缓存命中。

即：需要的数据在 Cache 里。

Cache Miss，即。

缓存未命中。

即：

```text
Cache 没有
↓
去 Database / Backend 读取
```

这两个词以后会经常出现。

---

### 7.5-Cache-Aside-Pattern

一个非常常见的缓存模式：

```text
Application
     │
     ▼
Check Cache
     │
     ├── Hit
     │    └── Return
     │
     └── Miss
          │
          ▼
        Database
          │
          ▼
      Put Cache
          │
          ▼
        Return
```

叫：Cache-Aside。

CLF 不要求实现代码，但这个图能解释：为什么 ElastiCache 能降低 Database Load。

---

### 7.6-ElastiCache-当前支持的引擎

当前 AWS ElastiCache 支持：Valkey、Memcached、Redis OSS。

并提供：Serverless Cache、Node-based Cluster。

两类运行方式。

这也是一个当前状态需要注意的点：旧资料经常只写：Redis / Memcached。

现在官方已经把：Valkey。

列为重要引擎选项。

---

### 7.7-Redis-/-Valkey-风格与-Memcached-的基础区别

CLF-C02 不需要深挖底层协议。

最基础：

#### 7.7.1-Valkey-/-Redis-OSS

通常具备更丰富的数据结构与能力，常用于：Cache、Session、Counter、Leaderboard、Pub/Sub 等。

#### 7.7.2-Memcached

模型更简单，主要是：distributed memory cache。

考试如果只是问：managed in-memory cache。

服务层答案通常先看：ElastiCache，而不是强行要求选择具体 Engine。

---

### 7.8-ElastiCache-最大的理解误区

错误：

```text
ElastiCache
=
“更快的 RDS”
```

不对。

ElastiCache 是：In-Memory Data Store / Cache。

典型架构：

```text
Application
   │
   ├── Cache
   │     └── ElastiCache
   │
   └── Source of Truth Database
         └── RDS / Aurora / DynamoDB 等
```

很多场景下：Cache、不是唯一的永久业务事实来源。

---

### 7.9-Cache-Invalidation-为什么重要？

Invalidation。

失效 / 使缓存无效。

例如：商品价格：、1000 円。

数据库改成：800 円但 Cache 还是：1000 円用户就可能看到旧数据。

所以 Cache 不是“加上以后系统一定更简单”。

它会引入：Expiration、Invalidation、Consistency。

等问题。

CLF 不要求设计完整一致性方案，但需要知道：Cache、是性能优化层，不是免费的魔法。

---

### 7.10-GlobalShop：RDS-+-ElastiCache

```text
User
 │
 ▼
Application
 │
 ├─────► ElastiCache
 │          │
 │          │ Miss
 │          ▼
 └─────► Aurora / RDS
```

例如：商品详情、店铺配置、热门数据、Session。

可以利用 Cache。

---

### 7.11-DynamoDB-与-Cache

DynamoDB 本身已经以：低延迟、大规模。

为目标设计。

但一些场景还可以有：DAX、DynamoDB Accelerator。

作为 DynamoDB 专用的 In-Memory Acceleration。

不过在这套 719 题中它并不是高频核心考点，CLF-C02 当前复习优先级明显低于：DynamoDB、ElastiCache。

因此只建立概念，不深入。

---

## 本篇概述

- 本篇梳理了Amazon-Aurora相关的核心知识、适用场景与判断要点。
- 本篇梳理了Amazon-DynamoDB相关的核心知识、适用场景与判断要点。
- 本篇梳理了Amazon-ElastiCache相关的核心知识、适用场景与判断要点。

[返回本章总述](./00-总述.md)｜[查看本章概述](./99-概述.md)

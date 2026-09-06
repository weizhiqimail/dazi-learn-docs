---
id: 03-DocumentDB与Neptune-等
sidebar_position: 3
---

# C2-05-数据库与缓存体系-DocumentDB与Neptune与Redshift与分析型数据库与GlobalShop数据架构与扩展与高可用安全与迁移

> 本篇是《C2-05-数据库与缓存体系》的第3个分篇，主要包含：DocumentDB与Neptune、Redshift与分析型数据库、GlobalShop数据架构与扩展、高可用安全与迁移。

## 8-★★★★★-DocumentDB与Neptune

### 8.1-★★★-Amazon-DocumentDB

[CURRENT-IN-SCOPE]。

正式名称：Amazon DocumentDB、(with MongoDB compatibility)，中文为：Amazon 文档数据库。

---

### 8.2-Document-Database-是什么？

Document。

文档。

这里不是 Word / PDF 文档。

而是类似：

```json
{
  "product_id": "p-1001",
  "name": "Camera",
  "attributes": {
    "color": "black",
    "sensor": "full-frame"
  },
  "tags": ["camera", "pro"]
}
```

这种：JSON-like Document。

数据模型。

---

### 8.3-为什么需要-Document-Database？

某些业务数据结构变化频繁。

例如不同商品：

```text
手机：
CPU
Memory
Screen

衣服：
Color
Size
Material

相机：
Sensor
Lens Mount
Resolution
```

如果所有属性都强制放进固定关系表，Schema 设计可能很复杂。

Document Model 可以更加灵活。

---

### 8.4-Amazon-DocumentDB-与-MongoDB

Amazon DocumentDB 的完整产品名强调：with MongoDB compatibility。

核心意思：很多 MongoDB Application Code、Driver、Tool。

可以较容易迁移 / 适配。

但是：MongoDB compatibility ≠ Amazon DocumentDB 就是 MongoDB Server 原封不动托管版。

AWS 官方也单独维护：Compatibility、Functional Differences。

文档。

所以考试层级应该记：

```text
MongoDB-compatible；document database
→ Amazon DocumentDB
```

不要推导成：100% 完全相同实现

---

### 8.5-DocumentDB-vs-DynamoDB

两者都不是传统关系数据库，但定位不同。

#### 8.5.1-DynamoDB

Serverless distributed NoSQL、Key-Value / Document、大规模 operational workload。

#### 8.5.2-DocumentDB

Managed Document Database、MongoDB compatibility、Document-oriented application。

题目出现：MongoDB-compatible。

是 DocumentDB 非常强的识别词。

---

### 8.6-★★★-Amazon-Neptune

[CURRENT-IN-SCOPE]。

正式名称：Amazon Neptune。

Neptune。

海王星。

同样是产品名，不是缩写。

---

### 8.7-Graph-Database-是什么？

Graph。

图。

Graph Database，即。

图数据库。

它特别适合：实体之间存在大量关系、并且查询重点是“沿着关系走”。

例如：

```text
User A
  │ follows
  ▼
User B
  │ bought
  ▼
Product X
  │ belongs_to
  ▼
Category Camera
```

---

### 8.8-Graph-中的-Node-与-Edge

最基础：

```text
Node
→ 节点 / 实体

Edge
→ 边 / 关系
```

例如：

```text
Alice ──FRIEND──► Bob
Bob   ──BOUGHT──► Camera
```

注意：这里的：Edge。

和：AWS Edge Location。

不是同一个概念。

---

### 8.9-Neptune-适合什么？

AWS 官方典型场景包括：Recommendation、Fraud Detection、Knowledge Graph、Network Security、Highly Connected Data。

GlobalShop 可以用于：

```text
User
  ├── viewed
  ├── bought
  ├── follows
  └── similar_to
       │
       ▼
     Product
```

如果要分析：A 用户购买了什么、A 的朋友又购买了什么、哪些商品共同被相似用户购买。

Graph Model 很自然。

---

### 8.10-Neptune-vs-RDS

RDS：关系表、SQL、Join、Transaction。

Neptune：Graph、Node、Edge、Relationship Traversal。

关系数据库当然也能保存：relationship。

但如果核心工作负载是：高连接图关系查询。

Graph Database 更合适。

---

### 8.11-Neptune-vs-DocumentDB-vs-DynamoDB

```text
DynamoDB
→ Key-Value / Document NoSQL
→ 大规模 operational access

DocumentDB
→ Document
→ MongoDB compatibility

Neptune
→ Graph
→ Highly connected relationships
```

这是 CLF-C02 需要建立的服务地图。

---

---

## 9-★★★★★-Redshift与分析型数据库

### 9.1-★★★★-Amazon-Redshift

[CURRENT-IN-SCOPE]。

Amazon Redshift。

是：Fully Managed Data Warehouse。

当前 AWS 还提供：Redshift Serverless。

但是：Redshift 的完整深入内容属于：C2-12-数据分析与大数据.md。

这里仅建立数据库体系中的位置。

---

### 9.2-OLTP-与-OLAP

理解 Redshift 最有用的两个词：

#### 9.2.1-OLTP

Online Transaction Processing、在线事务处理。

例如：创建订单、修改订单、付款、库存扣减。

典型：RDS / Aurora。

#### 9.2.2-OLAP

Online Analytical Processing、在线分析处理。

例如：过去三年每个国家销售额、每个品类利润率、数十亿订单聚合分析。

典型：Data Warehouse、Redshift。

---

### 9.3-★★★★★-RDS-vs-Redshift

这也是高频混淆。

RDS：Operational Relational Database、OLTP、业务实时读写。

Redshift：Data Warehouse、Analytics、大规模聚合分析。

如果题目说：petabyte-scale data warehouse、BI、analytics、complex aggregation。

重点考虑：Redshift，而不是RDS。

---

### 9.4-题库典型：Petabyte-scale-Data-Warehouse

题库中有典型题：petabyte-scale data warehouse、analyze its data、fully managed、no manual hardware/software management。

选项包括：DocumentDB、Redshift、Neptune、ElastiCache。

本质是判断：Document、Graph、Cache、Data Warehouse。

不是比较谁“更高级”。

需求：Data Warehouse。

直接定位：Redshift。

---

---

## 10-★★★★★-GlobalShop数据架构与扩展

### 10.1-Database-与-Cache-完整分层

GlobalShop 可以这样理解：

```text
                  Application
                      │
                      ▼
                  ElastiCache
                      │
                  Cache Miss
                      │
          ┌───────────┼───────────┐
          │           │           │
          ▼           ▼           ▼
     RDS/Aurora    DynamoDB    DocumentDB
       Orders       Cart        Flexible Docs
          │
          └──────────────┐
                         │
                         ▼
                    Analytics ETL
                         │
                         ▼
                      Redshift
```

关系数据：RDS / Aurora。

Key-Value：DynamoDB。

Document：DocumentDB。

关系网络：Neptune。

Cache：ElastiCache。

分析仓库：Redshift。

---

### 10.2-GlobalShop-数据库业务映射

一种教学性的简化映射：

| GlobalShop 业务 | 可考虑的 AWS 服务 |
|---|---|
| 订单 / 支付 / 核心交易 | RDS / Aurora |
| 购物车 | DynamoDB |
| 大规模 Session / Key-Value | DynamoDB |
| 热门商品 Cache | ElastiCache |
| 灵活 JSON Document | DocumentDB |
| 推荐关系 / 欺诈关系 | Neptune |
| BI / 历史分析 | Redshift |

注意：这是教学架构，不是说真实电商平台只能这样设计。

真实架构会根据规模、团队、访问模式、一致性、成本、现有技术栈。

变化。

---

### 10.3-Polyglot-Persistence

Polyglot。

多种语言 / 多种技术并存。

Polyglot Persistence。

可以理解：一个系统不强迫所有数据都放同一种 Database，而是不同 Workload 使用更合适的数据存储技术。

GlobalShop：

```text
Order
→ Aurora

Cart
→ DynamoDB

Cache
→ ElastiCache

Graph
→ Neptune

Analytics
→ Redshift
```

现代大型系统经常是这种思路。

---

### 10.4-但不要为了“技术多”而多数据库

Polyglot Persistence 不是服务越多越高级。

每增加一种数据库，都会增加：开发成本、监控、权限、备份、一致性、数据同步、团队学习成本、故障排查复杂度。

所以真实工程中还要考虑：是否真的需要。

CLF-C02 主要训练：在明确需求下选择匹配服务。

---

### 10.5-Scaling-Database-的几种思路

Database Scaling 可以粗略分：Vertical Scaling、Horizontal Read Scaling、Partitioning / Distributed Scaling、Caching。

---

### 10.6-Vertical-Scaling

Vertical Scaling。

纵向扩展。

例如：

```text
DB Instance
4 vCPU / 16 GB
↓
16 vCPU / 64 GB
```

RDS / Aurora 仍然存在：DB Instance Size。

概念。

---

### 10.7-Read-Scaling

Read Scaling。

读取扩展。

例如：

```text
Primary
   │
   ├── Read Replica 1
   ├── Read Replica 2
   └── Read Replica 3
```

把读请求分出去。

RDS Read Replica、Aurora Reader 都属于这一类思路。

---

### 10.8-Distributed-/-Partition-Scaling

DynamoDB 更强调：Distributed、Partitioned、Serverless。

数据根据 Key 分布，AWS 帮你管理底层大量扩展复杂度。

所以：RDS。

和：DynamoDB。

的扩展思维并不相同。

---

### 10.9-Caching

第四个方向：不要每次都让 Database 做同样查询。

于是：Database + ElastiCache。

可以降低：Read Load、Latency。

---

---

## 11-★★★★★-高可用安全与迁移

### 11.1-High-Availability-与-Database

对于数据库：High Availability。

不等于Backup。

例如 RDS：

```text
Multi-AZ
→ HA / Failover
```

而：

```text
Automated Backup / Snapshot
→ Recovery
```

两者都重要。

---

### 11.2-Database-Backup-与-Read-Replica-不一样

Read Replica：数据持续复制、主要用于读扩展。

Backup：保留可恢复历史状态。

如果 Application 发出错误：

```text
DELETE FROM orders;
```

Read Replica 可能也复制这个变化。

Backup 可能让你：恢复到删除之前。

所以：Replica ≠ Backup。

---

### 11.3-RDS-Shared-Responsibility

AWS 负责很多：Physical Infrastructure、Host、Managed OS Layer、Database Installation、部分 Patch / Backup Infrastructure。

客户仍负责：Database Account、Data、Schema、Query、Index、Encryption / Access Configuration、Application Security。

Managed Service：

减少运维责任 ≠ 消灭客户责任

---

### 11.4-DynamoDB-Shared-Responsibility

DynamoDB 更 Serverless：你不管理：DB Server、OS、Cluster Node。

但是仍然需要管理：Table Design、Key Design、IAM、Data、Capacity Mode / Limits、Application Access、Backup / PITR Configuration。

抽象越高，客户管理的基础设施越少，但业务数据责任仍然存在。

---

### 11.5-Database-Security-在哪里继续深入？

本章只建立：Database 本身是什么。

下面这些会在其他章节继续：

```text
VPC
Security Group
Subnet
→ C2-06

IAM
→ C2-08

KMS / Encryption / Secrets Manager
→ C2-09

Monitoring
→ C2-10
```

不要把一章写成所有 AWS 服务的重复大全。

---

### 11.6-Database-Migration-在哪里？

题库里会出现：AWS Database Migration Service、AWS DMS。

DMS。

Database Migration Service、数据库迁移服务。

它解决：数据库怎么迁移，而不是业务数据库最终是什么。

所以完整内容放：C2-14-迁移数据传输与混合云。

这里只记：

```text
RDS / Aurora / DynamoDB
→ Database Target / Platform

DMS
→ Migration
```

---

## 本篇概述

- 本篇梳理了DocumentDB与Neptune相关的核心知识、适用场景与判断要点。
- 本篇梳理了Redshift与分析型数据库相关的核心知识、适用场景与判断要点。
- 本篇梳理了GlobalShop数据架构与扩展相关的核心知识、适用场景与判断要点。
- 本篇梳理了高可用安全与迁移相关的核心知识、适用场景与判断要点。

[返回本章总述](./00-总述.md)｜[查看本章概述](./99-概述.md)

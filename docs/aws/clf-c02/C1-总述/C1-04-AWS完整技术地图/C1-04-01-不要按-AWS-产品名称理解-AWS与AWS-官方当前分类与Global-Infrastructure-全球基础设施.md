---
id: C1-04-01-不要按-AWS-产品名称理解-AWS与AWS-官方当前分类与Global-Infrastructure-全球基础设施
sidebar_position: 1
---

# C1-04-01-不要按-AWS-产品名称理解-AWS与AWS-官方当前分类与Global-Infrastructure-全球基础设施

> 本篇是《C1-04-AWS完整技术地图》的第1个分篇，主要包含：不要按-AWS-产品名称理解-AWS、AWS-官方当前分类、Global-Infrastructure-全球基础设施、Compute-计算、Storage-存储、Database-数据库、Networking-and-Content-Delivery-网络与内容分发、Identity-身份和权限、Security-安全、Monitoring-Management-Governance、Application-Integration-应用集成、Analytics-数据分析。

## 1-不要按-AWS-产品名称理解-AWS

第一次看 AWS Console，最容易产生的感觉就是：

> 为什么有这么多产品？

更好的方法是先问：

> 一个现代软件系统到底需要解决哪些问题？

大致可以分为：

```text
在哪里运行？
      ↓
Global Infrastructure

代码在哪里跑？
      ↓
Compute

数据放哪里？
      ↓
Storage

结构化数据怎么查询？
      ↓
Database

机器怎么连接？
      ↓
Networking

不同系统怎么协作？
      ↓
Application Integration

谁能访问什么？
      ↓
Identity

怎么保护系统？
      ↓
Security

系统运行得怎么样？
      ↓
Monitoring

整个公司怎么管理？
      ↓
Governance

基础设施怎么自动建立？
      ↓
Infrastructure as Code

大量数据怎么分析？
      ↓
Analytics

AI功能怎么实现？
      ↓
AI / ML

旧系统怎么搬过来？
      ↓
Migration

花多少钱？
      ↓
Cloud Financial Management
```

---

---

## 2-AWS-官方当前分类

AWS 当前 CLF-C02 In-Scope 服务页面按主要功能将服务分成 Analytics、Application Integration、Business Applications、Cloud Financial Management、Compute、Containers、Database、Developer Tools、Machine Learning、Management and Governance、Migration and Transfer、Networking and Content Delivery、Security/Identity/Compliance、Serverless、Storage 等类别。

([AWS Documentation](https://docs.aws.amazon.com/aws-certification/latest/cloud-practitioner-02/clf-02-in-scope-services.html))

我们的教材会参考这个分类，但为了教学，会对一些强相关类别重新组合。

---

---

## 3-★★★★★-Global-Infrastructure：全球基础设施

解决：

> AWS 的资源到底部署在哪里？

核心：

```text
AWS Global Infrastructure
│
├── Region
│
│   ├── Availability Zone
│   ├── Availability Zone
│   └── Availability Zone
│
├── Edge Network
│
├── Local Zones
│
└── Outposts / 其他扩展形态
```

当前 AWS 官方全球基础设施页面显示 AWS 已覆盖 **39 个 Geographic Regions 和 124 个 Availability Zones**。

这一数字会继续变化，因此后续如果需要具体数字，应以官方实时页面为准。

([Amazon Web Services](https://aws.amazon.com/about-aws/global-infrastructure/regions_az/))。

其中：

### 3.1-Region

**区域**。

独立地理区域。

例如：

```text
Asia Pacific (Tokyo)
ap-northeast-1

Asia Pacific (Osaka)
ap-northeast-3
```

当前东京 Region 有 4 个 AZ，大阪 Region 有 3 个 AZ。

([AWS Documentation](https://docs.aws.amazon.com/global-infrastructure/latest/regions/aws-regions.html))

### 3.2-Availability-Zone

**可用区**一个 Region 内的隔离位置。

每个 AZ 由一个或多个独立数据中心构成，并拥有冗余电力、网络和连接。

([AWS Documentation](https://docs.aws.amazon.com/global-infrastructure/latest/regions/aws-regions-availability-zones.html))。

题库第 150 题也直接考：

> one or more data centers

对应：**Availability Zone**。

---

---

## 4-★★★★★-Compute：计算

解决：

> 代码在哪里运行？

主线：

```text
Compute
│
├── Virtual Machine
│   └── EC2
│
├── Serverless Function
│   └── Lambda
│
├── Container
│   ├── ECS
│   ├── EKS
│   └── Fargate
│
├── Managed Application Platform
│   └── Elastic Beanstalk
│
├── Simple VPS
│   └── Lightsail
│
└── Batch
    └── AWS Batch
```

当前 CLF-C02 官方 In-Scope 明确包括 EC2、Elastic Beanstalk、Lightsail、AWS Batch、Outposts、ECS、EKS、ECR，以及 Serverless 类别中的 Fargate 和 Lambda。

([AWS Documentation](https://docs.aws.amazon.com/aws-certification/latest/cloud-practitioner-02/clf-02-in-scope-services.html))

最重要的决策关系：

```text
完整虚拟服务器控制
→ EC2

事件驱动短时函数
→ Lambda

AWS原生容器编排
→ ECS

Kubernetes
→ EKS

容器但不想管理底层服务器
→ Fargate
```

---

---

## 5-★★★★★-Storage：存储

解决：

> 数据以什么形态保存？

核心不是“哪个存储更高级”，而是存储模型不同。

```text
Storage
│
├── Object Storage
│   └── S3
│
├── Block Storage
│   └── EBS
│
├── File Storage
│   ├── EFS
│   └── FSx
│
├── Archive
│   └── S3 Glacier
│
├── Backup
│   └── AWS Backup
│
└── Hybrid Storage
    └── Storage Gateway
```

当前官方 In-Scope 就明确包括 Backup、EBS、EFS、Elastic Disaster Recovery、FSx、S3、S3 Glacier、Storage Gateway。

([AWS Documentation](https://docs.aws.amazon.com/aws-certification/latest/cloud-practitioner-02/clf-02-in-scope-services.html))。

第一张必须牢记的图：

```text
S3
Object
对象

EBS
Block
块

EFS / FSx
File
文件
```

题库直接把“将 S3 描述成 Block Storage”设置为错误选项，而把 S3 描述为 Object Storage。

---

---

## 6-★★★★★-Database：数据库

解决：

> 应用数据如何保存、查询和建立关系？

```text
Database
│
├── Relational
│   ├── RDS
│   └── Aurora
│
├── Key-Value / NoSQL
│   └── DynamoDB
│
├── Document
│   └── DocumentDB
│
├── Graph
│   └── Neptune
│
└── Cache
    └── ElastiCache
```

当前 CLF-C02 官方数据库范围包括 Aurora、DocumentDB、DynamoDB、ElastiCache、Neptune、RDS。

([AWS Documentation](https://docs.aws.amazon.com/aws-certification/latest/cloud-practitioner-02/clf-02-in-scope-services.html))。

这里后续尤其要理解：

```text
RDS
不是“S3加强版”

DynamoDB
不是“便宜版RDS”

ElastiCache
不是“另一种普通数据库”
```

它们处理的是不同数据访问模型。

---

---

## 7-★★★★★-Networking-and-Content-Delivery：网络与内容分发

解决：资源之间怎么通信？

用户怎么访问系统？

本地机房怎么访问AWS？

私网怎么访问外部？

全球用户怎么加速？

核心地图：

```text
Networking
│
├── VPC
│   ├── Subnet
│   ├── Route Table
│   ├── Security Group
│   ├── NACL
│   ├── Internet Gateway
│   ├── NAT Gateway
│   └── VPC Endpoint
│
├── VPC-to-VPC
│   ├── Peering
│   └── Transit Gateway
│
├── On-Prem ↔ AWS
│   ├── VPN
│   └── Direct Connect
│
├── DNS
│   └── Route 53
│
├── CDN
│   └── CloudFront
│
├── Network Acceleration
│   └── Global Accelerator
│
├── Private Service Connectivity
│   └── PrivateLink
│
└── API Entry
    └── API Gateway
```

当前官方 In-Scope 明确包括 API Gateway、CloudFront、Direct Connect、Global Accelerator、PrivateLink、Route 53、Transit Gateway、VPC 和多种 VPN。

([AWS Documentation](https://docs.aws.amazon.com/aws-certification/latest/cloud-practitioner-02/clf-02-in-scope-services.html))

---

---

## 8-★★★★★-Identity：身份和权限

核心问题：

> 谁可以做什么？

```text
IAM
│
├── User
├── Group
├── Role
└── Policy
```

同时还有：

```text
IAM Identity Center
→ 企业员工 / 多Account统一访问

Cognito
→ 应用最终用户身份

STS
→ Temporary Credentials
```

后续会建立：人访问 AWS、和、程序访问 AWS、和、消费者登录你的App。

三个完全不同的身份场景。

---

---

## 9-★★★★★-Security：安全

可以拆为：

```text
Security
│
├── Identity
│   └── IAM
│
├── Encryption
│   ├── KMS
│   ├── CloudHSM
│   └── Secrets Manager
│
├── Web / DDoS
│   ├── WAF
│   └── Shield
│
├── Threat Detection
│   └── GuardDuty
│
├── Vulnerability
│   └── Inspector
│
├── Sensitive Data
│   └── Macie
│
├── Investigation
│   └── Detective
│
├── Security Findings
│   └── Security Hub
│
└── Compliance
    ├── Artifact
    └── Audit Manager
```

当前官方范围明确包含这一整组核心安全服务。

([AWS Documentation](https://docs.aws.amazon.com/aws-certification/latest/cloud-practitioner-02/clf-02-in-scope-services.html))

题库中 Inspector、GuardDuty、Config、Trusted Advisor 经常被放在一起作为干扰选项，这正说明“只知道都是安全/检查工具”不够。

题库第 2 题就是典型例子。

---

---

## 10-★★★★★-Monitoring/Management/Governance

这组非常容易混。

```text
CloudWatch
→ Runtime monitoring
→ 系统运行状态

CloudTrail
→ API activity
→ 谁操作AWS

Config
→ Resource configuration
→ 资源配置和变化

Trusted Advisor
→ Best-practice checks
→ AWS最佳实践建议

Compute Optimizer
→ Resource sizing recommendation
→ 计算资源规格优化

Systems Manager
→ Operations management
→ 集中运维AWS和服务器
```

再往企业层：

```text
Organizations
→ 多Account组织

Control Tower
→ 多Account治理环境

Service Catalog
→ 企业批准的资源/模板目录

CloudFormation
→ Infrastructure as Code
```

当前 In-Scope 管理与治理类别包含以上核心服务。

([AWS Documentation](https://docs.aws.amazon.com/aws-certification/latest/cloud-practitioner-02/clf-02-in-scope-services.html))

---

---

## 11-★★★★-Application-Integration：应用集成

```text
Application Integration
│
├── Queue
│   └── SQS
│
├── Pub/Sub Notification
│   └── SNS
│
├── Event Bus
│   └── EventBridge
│
└── Workflow
    └── Step Functions
```

当前官方范围也正好包括这四项。

([AWS Documentation](https://docs.aws.amazon.com/aws-certification/latest/cloud-practitioner-02/clf-02-in-scope-services.html))GlobalShop：

```text
用户下单
   │
   ▼
Order Service
   │
   ▼
  Event
   │
   ├── 库存
   ├── 通知
   ├── 物流
   └── 数据分析
```

---

---

## 12-★★★★-Analytics：数据分析

```text
Analytics
│
├── SQL over S3
│   └── Athena
│
├── ETL / Catalog
│   └── Glue
│
├── Streaming
│   └── Kinesis
│
├── Big Data
│   └── EMR
│
├── Search / Log Analytics
│   └── OpenSearch
│
├── Data Warehouse
│   └── Redshift
│
└── BI
    └── QuickSight
```

这些服务都在当前 CLF-C02 Analytics In-Scope 列表中。

([AWS Documentation](https://docs.aws.amazon.com/aws-certification/latest/cloud-practitioner-02/clf-02-in-scope-services.html))GlobalShop 可以形成：

```text
用户点击
   │
   ▼
Kinesis
   │
   ▼
  S3
   │
   ▼
 Glue
   │
 ┌─┴─────────┐
 ▼           ▼
Athena    Redshift
              │
              ▼
          QuickSight
```

---

## 本篇概述

- 本篇梳理了不要按-AWS-产品名称理解-AWS相关的核心知识、适用场景与判断要点。
- 本篇梳理了AWS-官方当前分类相关的核心知识、适用场景与判断要点。
- 本篇梳理了Global-Infrastructure-全球基础设施相关的核心知识、适用场景与判断要点。
- 本篇梳理了Compute-计算相关的核心知识、适用场景与判断要点。
- 本篇梳理了Storage-存储相关的核心知识、适用场景与判断要点。
- 本篇梳理了Database-数据库相关的核心知识、适用场景与判断要点。
- 本篇梳理了Networking-and-Content-Delivery-网络与内容分发相关的核心知识、适用场景与判断要点。
- 本篇梳理了Identity-身份和权限相关的核心知识、适用场景与判断要点。
- 本篇梳理了Security-安全相关的核心知识、适用场景与判断要点。
- 本篇梳理了Monitoring-Management-Governance相关的核心知识、适用场景与判断要点。
- 本篇梳理了Application-Integration-应用集成相关的核心知识、适用场景与判断要点。
- 本篇梳理了Analytics-数据分析相关的核心知识、适用场景与判断要点。

[返回本章总述](./C1-04-00-章节总述.md)｜[查看本章概述](./C1-04-99-章节概述.md)

---
id: C2-04-02-Amazon-S3对象存储
sidebar_position: 2
---

# C2-04-02-Amazon-S3对象存储

> 本篇是《C2-04-存储体系》的第2个分篇，主要包含：Amazon-S3对象存储。

## 5-★★★★★-Amazon-S3对象存储

### 5.1-★★★★★-Amazon-S3

[CURRENT-IN-SCOPE]。

正式名称：Amazon Simple Storage Service。

简称：Amazon S3。

中文通常称：Amazon 简单存储服务、Amazon 对象存储。

---

### 5.2-为什么叫-S3？

名字：Simple、Storage、Service。

三个单词都以：S。

开头。

所以：

```text
S + S + S
= S³
= S3
```

这和：EC2、Elastic Compute Cloud。

的命名思路类似。

---

### 5.3-S3-为什么存在？

传统情况下，如果公司要保存：10 TB 商品图片、100 TB 日志、1 PB 历史订单导出、大量备份、视频、数据湖文件自己管理文件服务器会遇到：磁盘容量规划、RAID、服务器扩容、硬盘故障、备份、文件服务器集群、跨机房复制、生命周期管理。

而对象存储希望把问题变成：

```text
把 Object 放进去
↓
需要时按 Key 取回来
```

让用户不再管理：底层磁盘、具体文件服务器、RAID 阵列、单台 Storage Server。

这就是 S3 的核心价值之一。

---

### 5.4-S3-最重要的三个概念

Bucket、Object、Key。

关系：

```text
Amazon S3
   │
   ▼
Bucket
   │
   ├── Object
   │    ├── Key
   │    ├── Data
   │    └── Metadata
   │
   └── Object
```

---

### 5.5-Bucket-是什么？

Bucket。

中文常翻译：存储桶。

它是 S3 中组织 Object 的顶层逻辑容器。

例如：globalshop-product-images、globalshop-order-exports、globalshop-access-logs。

可以粗略理解：

```text
S3 Service
   │
   ├── Bucket A
   ├── Bucket B
   └── Bucket C
```

注意：Bucket、不是 EC2 的 Disk。

---

### 5.6-Object-是什么？

Object。

对象。

例如 GlobalShop 中：product-12345.jpg、manual.pdf、invoice-20260905.pdf、access-log-2026-09-05.gz、backup-file.tar。

这些都可以作为 Object 保存。

---

### 5.7-Key-是什么？

Key。

对象键、Object Key。

可以理解成：Object 在 Bucket 中的唯一名称 / 标识。

例如：products/12345/main.jpg。

这里：products/12345/main.jpg。

是 Key。

看起来像：目录 / 子目录 / 文件名。

但从 S3 核心对象模型来说，它本质上仍然是：Key。

---

### 5.8-S3-为什么不是传统-File-System？

传统 File System：

```text
/
├── products/
│   └── 12345/
│       └── main.jpg
```

用户习惯：open()、read()、write()、seek()、rename()。

S3 更接近：PUT Object、GET Object、DELETE Object、LIST Objects。

所以：S3 ≠ 传统本地硬盘文件系统。

这对考试很重要。

如果题目说：EC2 需要一个 Block Volume。

一般考虑：EBS。

如果说：多个 Linux Server 共享 NFS File System。

一般考虑：EFS。

如果说：海量图片、备份、日志、静态内容。

一般首先考虑：S3。

---

### 5.9-GlobalShop-中-S3-最典型的用途

商品图片：

```text
Merchant
   │
   ▼
Upload Image
   │
   ▼
Amazon S3
   │
   ▼
CloudFront
   │
   ▼
Global Users
```

例如：globalshop-product-images。

保存：JPEG、PNG、WebP、Video、PDF Manual。

CloudFront 再把这些内容缓存到全球 Edge。

完整 CDN 会在 C2-07 详细讲。

---

### 5.10-为什么商品图片适合-S3？

因为商品图片通常：数量巨大、不需要当块设备、不需要多个服务器同时修改同一个 POSIX 文件、主要通过 Object 读写、需要高 Durability、适合和 CDN 组合。

所以：S3 + CloudFront。

是非常典型的静态内容架构。

---

### 5.11-★★★★★-S3-Durability

S3 的核心关键词之一：high durability。

AWS 对多个 S3 Storage Class 设计的对象耐久性目标是：99.999999999%也就是常说：11 nines、11 个 9考试如果出现：highly durable object storage。

Amazon S3 是最典型答案。

但不要误解：

```text
Durability
=
Availability
```

二者仍然是不同指标。

---

### 5.12-S3-Storage-Class-是什么？

Storage Class。

存储类别。

同样是 S3 Object，因为访问频率、恢复速度、可用性要求、数据保存期限、成本要求。

不同，可以选择不同 Storage Class。

核心思想：

```text
经常访问
→ 通常愿意为即时访问和较高可用性支付更多存储成本

很少访问
→ 可以降低存储成本

长期归档
→ 可以进一步降低存储成本，
   但读取可能有等待时间或额外取回成本
```

---

### 5.13-★★★★★-S3-Standard

正式名称：S3 Standard。

定位：通用、频繁访问、低延迟、高吞吐。

适合：网站内容、移动应用数据、常用图片、数据分析输入、活跃业务数据。

GlobalShop：

```text
正在销售商品的主图片
→ S3 Standard
```

---

### 5.14-★★★★-S3-Intelligent-Tiering

Intelligent。

智能。

Tiering，即。

分层。

S3 Intelligent-Tiering 的核心问题是：我不知道数据以后到底访问得频繁还是不频繁。

例如：某些商品图片突然爆火、某些图片几个月没人访问、之后又突然重新热卖。

访问模式不可预测。

此时希望：AWS 根据访问模式、自动把对象移动到更合适的访问层。

所以题目看到：unknown access pattern、changing access pattern、automatically optimize storage cost。

优先想到：S3 Intelligent-Tiering。

---

### 5.15-★★★★-S3-Standard-IA

IA。

Infrequent Access、低频访问。

完整名称：S3 Standard-Infrequent Access。

适合：不经常访问、但需要时仍希望快速获得。

例如：历史报表、较老但仍可能随时下载的订单附件、灾备数据。

核心：低频 + 需要毫秒级访问，而不是深度归档。

---

### 5.16-★★★-S3-One-Zone-IA

One Zone。

一个 Availability Zone。

它和 Standard-IA 的一个重要区别：

```text
Standard-IA
→ 设计为跨多个 AZ

One Zone-IA
→ 数据保存在单个 AZ
```

因此价格可以更低，但适合：可以重新生成的数据、非关键副本、不要求跨 AZ 韧性的数据。

不要把关键的唯一业务数据只因为“便宜”就机械选择 One Zone-IA。

---

### 5.17-Glacier-在当前-S3-中应该怎么理解？

这是旧资料里很容易形成错误印象的地方。

不要粗暴记成：

```text
Amazon Glacier
=
一个和 S3 完全分离的普通存储服务
```

当前学习更准确的方式是：

```text
S3 Storage Classes
│
├── S3 Glacier Instant Retrieval
├── S3 Glacier Flexible Retrieval
└── S3 Glacier Deep Archive
```

也就是：Glacier 类存储层级、属于当前 S3 长期、低频访问 / 归档体系的重要组成部分。

---

### 5.18-★★★-S3-Glacier-Instant-Retrieval

Instant Retrieval。

即时取回。

适合：长期很少访问、但真正访问时仍希望快速读取。

例如：医疗影像归档、媒体素材归档、历史资产。

虽然低频，但不能接受每次取数据都等很久。

---

### 5.19-★★★★-S3-Glacier-Flexible-Retrieval

Flexible Retrieval。

灵活取回。

用于：归档数据。

核心特征：不是主要为了频繁在线访问、可以接受取回存在等待、以换取更低的存储成本。

题目出现：archive、rarely accessed、retrieval can wait。

就要进入 Glacier 思路。

---

### 5.20-★★★★-S3-Glacier-Deep-Archive

Deep Archive。

深度归档。

定位：非常长期、极低访问频率、极低存储成本导向。

例如：法规要求保留 7 年、审计档案、长期合规记录、历史备份。

如果题目强调：几年几乎不访问、主要为了长期保留、最低存储成本。

通常要重点考虑：S3 Glacier Deep Archive。

---

### 5.21-★★-S3-Express-One-Zone

当前 S3 还存在：S3 Express One Zone。

它是：单 AZ、高性能、低延迟、面向非常频繁数据访问。

的 S3 Storage Class。

但对于 CLF-C02 学习优先级，先掌握：Standard、Intelligent-Tiering、Standard-IA、One Zone-IA、Glacier Instant Retrieval、Glacier Flexible Retrieval、Glacier Deep Archive。

更加重要。

不要因为它名字里有：

One Zone。

就把它和：One Zone-IA。

混为一谈。

---

### 5.22-S3-Storage-Class-决策直觉

```text
频繁访问
   │
   ├── 一般通用
   │      └── S3 Standard
   │
   └── 极高性能、单 AZ 特定场景
          └── S3 Express One Zone

访问模式未知 / 经常变化
   │
   └── S3 Intelligent-Tiering

低频，但需要快速访问
   │
   ├── 跨 AZ 韧性
   │      └── S3 Standard-IA
   │
   └── 可接受单 AZ
          └── S3 One Zone-IA

非常低频 / 归档
   │
   ├── 仍需即时访问
   │      └── Glacier Instant Retrieval
   │
   ├── 可等待取回
   │      └── Glacier Flexible Retrieval
   │
   └── 超长期深度归档
          └── Glacier Deep Archive
```

这张图比死背价格更重要。

---

### 5.23-★★★★-S3-Lifecycle

Lifecycle。

生命周期。

S3 Lifecycle 解决：数据随着时间变老，应该自动怎么处理？

例如 GlobalShop：

```text
0～30 天
S3 Standard

30～180 天
S3 Standard-IA

180 天以后
Glacier Flexible Retrieval

7 年以后
Delete
```

可以配置：Lifecycle Rule。

自动完成：Transition、Expiration。

---

### 5.24-Transition-与-Expiration

Transition。

转换存储类别。

例如：

```text
Standard
↓
Standard-IA
↓
Glacier
```

Expiration。

到期删除。

例如：

```text
日志只保留 365 天
↓
365 天后删除
```

考试看到：automatically move old objects、reduce storage cost over time、archive after N days、delete after N days。

重点考虑：S3 Lifecycle。

---

### 5.25-★★★★-S3-Versioning

Versioning。

版本控制。

例如同一个 Key：config/app.json。

可能先后上传不同版本。

Versioning 可以保留：Version 1、Version 2、Version 3。

它特别适合降低：误覆盖、误删除。

带来的风险。

但：Versioning ≠ 完整 Backup 策略的全部内容。

后面还会看到 AWS Backup。

---

### 5.26-S3-Replication-简要理解

Replication。

复制。

常见概念：Same-Region Replication、Cross-Region Replication。

核心作用可以包括：跨 Region 副本、合规、灾备、数据位置需求。

完整 Multi-Region 与 DR 会在后面的架构章节继续展开。

这里先建立：

```text
Versioning
→ 同一个对象的多个版本

Replication
→ 在其他 Bucket / Region 维护副本

Backup
→ 独立的数据保护与恢复策略
```

不要把三者混成同一个词。

---

## 本篇概述

- 本篇梳理了Amazon-S3对象存储相关的核心知识、适用场景与判断要点。

[返回本章总述](./C2-04-00-章节总述.md)｜[查看本章概述](./C2-04-99-章节概述.md)

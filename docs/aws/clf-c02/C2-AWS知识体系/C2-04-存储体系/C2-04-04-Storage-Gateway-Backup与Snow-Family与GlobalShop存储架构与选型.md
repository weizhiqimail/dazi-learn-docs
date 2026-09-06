---
id: C2-04-04-Storage-Gateway-Backup与Snow-Family与GlobalShop存储架构与选型
sidebar_position: 4
---

# C2-04-04-Storage-Gateway-Backup与Snow-Family与GlobalShop存储架构与选型

> 本篇是《C2-04-存储体系》的第4个分篇，主要包含：Storage-Gateway-Backup与Snow-Family、GlobalShop存储架构与选型。

## 8-★★★★★-Storage-Gateway-Backup与Snow-Family

### 8.1-★★★★-AWS-Storage-Gateway

[CURRENT-IN-SCOPE]。

正式名称：AWS Storage Gateway。

核心关键词：Hybrid Storage。

Hybrid。

混合。

即：On-Premises + AWS Cloud Storage。

---

### 8.2-为什么需要-Storage-Gateway？

很多企业不会一天之内把所有应用改成：S3 API、EFS、Cloud-native application。

本地系统可能几十年都在使用：NFS、SMB、iSCSI、Tape。

但企业又想让后端数据进入 AWS。

于是：

```text
On-Premises Application
        │
        ▼
Traditional Storage Protocol
        │
        ▼
Storage Gateway
        │
        ▼
AWS Storage
```

Storage Gateway 就像：本地传统存储世界、和 AWS 云存储之间的桥梁。

---

### 8.3-Storage-Gateway-三个核心方向

当前学习重点：

```text
Storage Gateway
│
├── Amazon S3 File Gateway
├── Volume Gateway
└── Tape Gateway
```

历史 / 当前状态特殊：Amazon FSx File Gateway。

后面单独说明。

---

### 8.4-★★★★-Amazon-S3-File-Gateway

核心：

```text
本地应用看到：
NFS / SMB File Share

后端：
Object 存入 Amazon S3
```

架构：

```text
On-Premises App
      │
      │ NFS / SMB
      ▼
S3 File Gateway
      │
      ▼
Amazon S3
```

这非常重要。

---

### 8.5-为什么-File-Gateway-不等于-EFS？

EFS：AWS managed NFS File System。

File Gateway：Gateway、把传统文件协议、桥接到 AWS Storage Backend。

例如题目说：On-premises application、must continue using NFS、store objects in S3。

重点：NFS + S3 backend + Hybrid。

应考虑：S3 File Gateway，而不是EFS。

---

### 8.6-题库典型：NFS-访问-S3

题库中存在典型需求：使用 NFS 协议、存取 Amazon S3 中的对象。

这类题真正考：

```text
传统 File Protocol
      ↓
Gateway
      ↓
S3 Object Storage
```

所以：S3 File Gateway。

比：EFS、FSx、EBS。

更符合需求。

---

### 8.7-★★★-Volume-Gateway

Volume Gateway 面向：Block Storage，而不是File Share。

客户端常通过：iSCSI。

访问。

iSCSI。

Internet Small Computer Systems Interface。

可以粗略理解成：通过 IP 网络提供 Block Storage。

---

### 8.8-Volume-Gateway-的两个经典模式

常见概念：Cached Volumes、Stored Volumes。

#### 8.8.1-Cached-Volumes

核心：主要数据放 AWS、本地保留常用数据 Cache。

概念：

```text
On-Prem
Local Cache
     │
     ▼
AWS Backend
```

#### 8.8.2-Stored-Volumes

核心：完整主数据保留本地、同时异步备份到 AWS。

CLF-C02 通常不会要求深入部署细节，但要理解：

```text
File Gateway
→ File Protocol

Volume Gateway
→ Block / iSCSI
```

---

### 8.9-★★★-Tape-Gateway

Tape。

磁带。

很多传统企业备份系统使用：Physical Tape Library。

例如：

```text
备份软件
↓
磁带
↓
异地仓库
```

Tape Gateway 提供：Virtual Tape Library、VTL。

VTL。

Virtual Tape Library、虚拟磁带库。

让已有备份软件继续使用“磁带”逻辑，但底层进入 AWS 存储体系。

---

### 8.10-FSx-File-Gateway-的当前状态

[UPDATED]。

[LEGACY]。

[QUESTION-BANK]。

旧题和旧资料里可能看到：Amazon FSx File Gateway。

当前 AWS 官方状态是：不再向新客户提供。

已有客户仍可以继续使用。

所以教材需要同时知道：

```text
历史题：
可能考 FSx File Gateway

当前 AWS：
新客户不再新开此服务
```

不要把历史题的产品状态直接当成 2026 年当前状态。

---

### 8.11-★★★-AWS-Backup

[CURRENT-IN-SCOPE]。

正式名称：AWS Backup。

名字很直接：

```text
Backup
=
备份
```

它的核心价值不是发明一种新的 Block / File / Object Storage，而是 集中管理多个 AWS 服务的备份策略。

---

### 8.12-为什么需要-AWS-Backup？

如果企业同时有：EBS、RDS、DynamoDB、EFS、FSx、其他支持的 AWS Resources。

分别手动管理：Backup Schedule、Retention、Backup Policy、Recovery Point、Compliance。

会越来越复杂。

AWS Backup 提供：Centralized Backup Management。

---

### 8.13-AWS-Backup-的核心思路

```text
AWS Resources
│
├── EBS
├── RDS
├── DynamoDB
├── EFS
└── ...
      │
      ▼
   AWS Backup
      │
      ├── Backup Plan
      ├── Schedule
      ├── Retention
      └── Recovery
```

重点：

```text
AWS Backup
=
集中备份编排 / 治理服务
```

---

### 8.14-Snapshot-与-AWS-Backup-不要混淆

EBS Snapshot：EBS 自己的快照能力。

RDS Snapshot：RDS 自己的快照能力。

AWS Backup：跨多个支持服务、统一组织备份策略。

所以：

```text
Snapshot
是具体资源的数据保护机制之一

AWS Backup
是集中备份管理层
```

---

### 8.15-Backup、Replication、High-Availability-不一样

这是非常重要的架构思想。

#### 8.15.1-High-Availability

组件坏了、业务尽量继续运行

#### 8.15.2-Replication

维护数据副本

#### 8.15.3-Backup

保留可恢复的历史恢复点。

例如：数据库误删 100 万条订单。

如果复制是实时的：错误、也可能立即复制到副本。

因此：Replication ≠ Backup。

同样：Multi-AZ ≠ Backup。

---

### 8.16-Snow-Family-在本章的位置

Snow Family。

包括历史和当前不同设备 / 服务形态，核心属于：大量数据传输、Migration / Transfer、Edge，而不是日常在线 Storage Access 的主服务。

所以本章只建立关系：

```text
On-Premises 大量数据
       │
       ▼
Snow Family
       │
       ▼
AWS
       │
       └── S3 等
```

完整 Snow Family 放在：C2-14-迁移数据传输与混合云。

---

### 8.17-Storage-Gateway-vs-Snow-Family

Storage Gateway：持续连接、Hybrid Storage、本地应用长期通过 Gateway 使用 AWS Storage。

Snow Family：大量数据搬迁、网络传输不现实 / 不够快时、可使用专用设备或相关能力。

直觉：

```text
“长期桥接”
→ Storage Gateway

“搬大量数据”
→ Snow Family
```

---

---

## 9-★★★★★-GlobalShop存储架构与选型

### 9.1-GlobalShop-完整存储层

现在可以把 GlobalShop 的 Storage 画出来：

```text
                         GlobalShop
                              │
        ┌─────────────────────┼─────────────────────┐
        │                     │                     │
        ▼                     ▼                     ▼
   Application             Shared Files         Objects
      EC2/ECS                  │                     │
        │                      ▼                     ▼
        ▼                     EFS                   S3
       EBS              / shared import       product images
 system / data disk      report files         logs / exports
        │                                            │
        │                                            ▼
        │                                      S3 Lifecycle
        │                                            │
        │                                      Glacier Classes
        │
        ├── temporary high-speed data
        │        │
        │        ▼
        │  Instance Store
        │
        └── backup policy
                 │
                 ▼
             AWS Backup
```

企业本地还有：

```text
On-Premises
     │
     ▼
Storage Gateway
     │
     ▼
S3 / AWS Storage
```

---

### 9.2-一个商品图片的完整生命周期

例如：

```text
商品图片上传
      │
      ▼
S3 Standard
      │
      ▼
CloudFront
      │
      ▼
全球用户访问
```

半年后商品下架：

```text
S3 Standard
      │
      │ Lifecycle
      ▼
S3 Standard-IA
      │
      ▼
Glacier
```

多年后：

```text
Retention 到期
      │
      ▼
Expiration
      │
      ▼
Delete
```

这就是：Object Storage + Lifecycle + Cost Optimization。

的完整思路。

---

### 9.3-一个-EC2-Server-的存储生命周期

```text
AMI
 │
 ▼
Launch EC2
 │
 ├── Root EBS
 │
 ├── Data EBS
 │
 └── Instance Store
```

其中：

```text
EBS
→ 持久化

Instance Store
→ 临时本地数据
```

需要备份：

```text
EBS
 │
 ▼
Snapshot / AWS Backup
```

---

### 9.4-多个-Application-Server-共享文件

如果EC2 #1、EC2 #2、EC2 #3。

都需要：/shared/upload。

可以：

```text
              EFS
               ▲
       ┌───────┼───────┐
       │       │       │
      EC2     EC2     EC2
```

而不是每台 EC2 各放一份、然后靠人工同步。

---

### 9.5-Windows-企业共享目录

需求：Windows Server、SMB、Active Directory、Enterprise File Share。

优先思路：FSx for Windows File Server。

---

### 9.6-HPC-高性能文件处理

需求：大量计算节点、高吞吐、高性能文件系统、ML / HPC、S3 数据集。

优先思路：FSx for Lustre。

---

### 9.7-S3、EBS、EFS、FSx-最核心对比

| 服务 | 存储模型 | 最典型关键词 |
|---|---|---|
| S3 | Object | Bucket、Object、海量对象、Durability |
| EBS | Block | EC2 Disk、Volume、Snapshot |
| EFS | File | NFS、共享 Linux 文件系统、Elastic |
| FSx | File | Windows SMB / Lustre / ONTAP / OpenZFS |
| Instance Store | Local Ephemeral | Temporary、Scratch、Host-local |

---

### 9.8-Storage-Gateway、AWS-Backup-的定位

| 服务 | 核心问题 |
|---|---|
| Storage Gateway | 本地传统存储协议如何连接 AWS Storage |
| AWS Backup | 多个 AWS 资源的备份如何集中管理 |

它们不是S3 / EBS / EFS 的“同类磁盘”，而是在更高一层解决：Hybrid、Backup Management。

---

### 9.9-高频选型决策树

```text
需要存储数据
   │
   ├── 是 Object？
   │      │
   │      └── S3
   │
   ├── 是 EC2 的 Block Disk？
   │      │
   │      └── EBS
   │
   ├── 是临时本地磁盘？
   │      │
   │      └── Instance Store
   │
   ├── 多个 Linux Compute 共享 NFS？
   │      │
   │      └── EFS
   │
   ├── Windows SMB？
   │      │
   │      └── FSx for Windows File Server
   │
   ├── HPC / Lustre？
   │      │
   │      └── FSx for Lustre
   │
   ├── On-Prem + NFS/SMB + S3？
   │      │
   │      └── S3 File Gateway
   │
   ├── On-Prem Block / iSCSI？
   │      │
   │      └── Volume Gateway
   │
   ├── Virtual Tape？
   │      │
   │      └── Tape Gateway
   │
   └── 多服务集中备份？
          │
          └── AWS Backup
```

---

## 本篇概述

- 本篇梳理了Storage-Gateway-Backup与Snow-Family相关的核心知识、适用场景与判断要点。
- 本篇梳理了GlobalShop存储架构与选型相关的核心知识、适用场景与判断要点。

[返回本章总述](./C2-04-00-章节总述.md)｜[查看本章概述](./C2-04-99-章节概述.md)

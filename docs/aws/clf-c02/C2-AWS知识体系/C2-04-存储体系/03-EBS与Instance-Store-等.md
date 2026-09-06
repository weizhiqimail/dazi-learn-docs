---
id: 03-EBS与Instance-Store-等
sidebar_position: 3
---

# C2-04-存储体系-EBS与Instance-Store与EFS与FSx文件存储

> 本篇是《C2-04-存储体系》的第3个分篇，主要包含：EBS与Instance-Store、EFS与FSx文件存储。

## 6-★★★★★-EBS与Instance-Store

### 6.1-★★★★★-Amazon-EBS

[CURRENT-IN-SCOPE]。

正式名称：Amazon Elastic Block Store。

简称：Amazon EBS，中文为：Amazon 弹性块存储。

---

### 6.2-为什么叫-Elastic-Block-Store？

Elastic。

弹性。

Block，即。

块。

Store，即。

存储。

它强调：给 EC2 提供可配置、持久化的 Block Storage Volume。

所以：

```text
EC2
解决计算

EBS
解决 EC2 所需要的持久化块存储
```

---

### 6.3-EBS-Volume-是什么？

Volume，中文为：卷、存储卷。

可以理解：一块通过网络提供给 EC2 的虚拟块设备。

例如：

```text
EC2 Instance
     │
     ├── Root EBS Volume
     │
     └── Data EBS Volume
```

操作系统看到后可以：Format、Mount、Read / Write。

因此：EBS、更像云中的磁盘，而不是S3 Object Bucket。

---

### 6.4-EBS-为什么和-S3-完全不同？

S3：

```text
Application
   │
   ▼
S3 API
   │
   ▼
Bucket / Object
```

EBS：

```text
EC2
 │
 ▼
Block Device
 │
 ▼
File System
 │
 ▼
File
```

所以：

| 问题 | S3 | EBS |
|---|---|---|
| 数据模型 | Object | Block |
| 最像 | 对象仓库 | 磁盘 |
| 常见使用 | 图片、备份、日志 | EC2 系统盘、数据盘 |
| 是否直接给 OS 当普通块设备 | 否 | 是 |

---

### 6.5-★★★★★-EBS-与-Availability-Zone

EBS Volume 是：Availability Zone 级资源。

例如：

```text
EC2
AZ-A
 │
 ▼
EBS
AZ-A
```

不能把某个 AZ-A 的 EBS Volume，当成：AZ-B 的普通本地磁盘。

直接随便挂载。

这和：S3。

的使用模型非常不同。

---

### 6.6-EBS-Persistence

EBS 的重要价值：Persistent Block Storage。

例如：

```text
EC2 Stop
↓
EBS Volume 仍可以保留
↓
再次 Start
↓
继续读取原来的数据
```

但这里还要看：Delete on Termination。

等具体配置。

CLF 层级最需要的直觉：

```text
EBS
→ Persistent

Instance Store
→ Ephemeral
```

---

### 6.7-★★★★-EBS-Snapshot

Snapshot。

快照。

EBS Snapshot 用于：对 EBS Volume 做时间点备份。

概念：

```text
EBS Volume
    │
    ▼
Snapshot
    │
    ▼
未来恢复出新的 EBS Volume
```

快照由 AWS 管理，底层利用 AWS 的存储基础设施保存，但用户不是去某个普通 S3 Bucket 里直接操作 Snapshot 文件。

---

### 6.8-Snapshot-的典型用途

例如 GlobalShop 后台服务器：

```text
EBS Volume
当前系统
   │
   ▼
Snapshot
   │
   ├── 恢复
   ├── 创建新 Volume
   └── 灾备 / 迁移
```

如果准备做高风险系统升级：

```text
先 Snapshot
↓
升级
↓
出现问题
↓
从 Snapshot 恢复
```

这是典型使用方式。

---

### 6.9-EBS-Volume-Type-需要学到什么程度？

EBS 有不同 Volume Type。

CLF-C02 不要求像 Solutions Architect 那样深入记：每种 IOPS 上限、每种 Throughput 数值、复杂配额。

但要知道选型逻辑：

```text
General Purpose SSD
→ 通用工作负载

Provisioned IOPS SSD
→ 高 IOPS、延迟敏感、数据库类工作负载

Throughput Optimized HDD
→ 大吞吐、顺序访问

Cold HDD
→ 更低频、吞吐导向
```

重点：不是所有 Disk Workload 都需要同一种 EBS。

---

### 6.10-★★★★-EC2-Instance-Store

正式叫：EC2 Instance Store，中文为：EC2 实例存储。

核心：Local + Ephemeral。

---

### 6.11-Instance-Store-为什么快？

概念上：

```text
EC2 Host
│
├── Compute
└── Local Storage
      │
      ▼
Instance Store
```

它和宿主机本地硬件联系更紧密。

因此适合：Temporary Data、Cache、Buffer、Scratch Data、可重新生成的数据。

---

### 6.12-Instance-Store-为什么不能当长期数据库备份？

因为数据生命周期、与底层 Instance / Host 生命周期关系更强。

如果发生特定生命周期变化或底层硬件问题，数据可能消失。

所以：唯一一份重要数据、长期订单记录、唯一数据库备份。

不应该只放：Instance Store。

---

### 6.13-Instance-Store：Reboot、Stop、Terminate-的准确区分

这是前面项目中特别要求修正的一个点。

不要背：

```text
EC2 一重启
→ Instance Store 一定丢
```

这是错误的。

更准确：

```text
Reboot
→ 通常仍在同一 Host
→ Instance Store 数据通常保留
```

而：Stop / Start、Hibernate、Terminate、某些底层 Host 故障 / 生命周期变化。

会导致原 Instance Store 数据不能继续保留。

因此考试学习应该记：

```text
Instance Store
=
Ephemeral Local Storage

不是：
“任何 Restart 都会丢”
```

---

### 6.14-★★★★★-EBS-vs-Instance-Store

| 维度 | EBS | Instance Store |
|---|---|---|
| 类型 | Network-attached Block Storage | Host-local Ephemeral Storage |
| 持久性 | 持久化 | 临时 |
| Stop / Start | 可保留 Volume | 原本地数据不能依赖 |
| Snapshot | 支持 EBS Snapshot | 不按 EBS Snapshot 模型使用 |
| 适合 | 系统盘、持久数据盘 | Cache、Temporary、Scratch |

核心：

```text
要持久
→ EBS

要本地临时高速空间
→ Instance Store
```

---

---

## 7-★★★★★-EFS与FSx文件存储

### 7.1-★★★★-Amazon-EFS

[CURRENT-IN-SCOPE]。

正式名称：Amazon Elastic File System。

简称：Amazon EFS，中文为：Amazon 弹性文件系统。

---

### 7.2-为什么叫-Elastic-File-System？

Elastic。

容量可以随数据变化自动扩展 / 缩减。

File System，即。

文件系统。

它解决的核心问题：多个 Compute 资源、需要共享一个真正的文件系统。

---

### 7.3-EFS-为什么存在？

假设 GlobalShop 有：EC2 #1、EC2 #2、EC2 #3。

它们都需要读取：/shared/product-import/、/shared/reports/、/shared-media/。

如果每台 EC2 都有自己的 EBS：

```text
EC2 #1 → EBS #1
EC2 #2 → EBS #2
EC2 #3 → EBS #3
```

这些并不是天然的：同一个共享文件系统。

于是需要：EFS。

---

### 7.4-EFS-的典型架构

```text
              Amazon EFS
                  ▲
          ┌───────┼───────┐
          │       │       │
          │       │       │
        EC2      EC2      EC2
        AZ-A     AZ-B     AZ-C
```

多个 Compute 可以挂载同一个 EFS。

AWS 当前还支持多种计算环境访问 EFS，例如：EC2、ECS、EKS、Lambda、Fargate。

---

### 7.5-NFS-是什么？

NFS。

Network File System、网络文件系统。

EFS 支持：NFSv4。

所以对 Linux / Unix 风格应用来说，它更像：共享网络目录。

例如：/mnt/shared。

---

### 7.6-EFS-Regional-与-One-Zone

当前 EFS 有：Regional、One Zone。

#### 7.6.1-Regional

数据冗余存储在：同一 Region 的多个 AZ。

适合更高可用性与耐久性要求。

#### 7.6.2-One-Zone

数据位于：单个 AZ。

成本更低，适合能够接受单 AZ 风险的工作负载。

这和 S3 的：One Zone-IA。

虽然名字都出现 One Zone，但它们是不同服务、不同存储模型。

---

### 7.7-★★★★★-EFS-vs-EBS

这是考试非常常见的判断。

EBS：Block Storage、更像磁盘、通常围绕 EC2 Volume、AZ 级。

EFS：File Storage、NFS、多个 Compute 可共享、可使用 Regional 多 AZ 文件系统、容量弹性。

所以：

```text
一个 EC2 需要系统盘
→ EBS

多个 Linux EC2 共享文件
→ EFS
```

---

### 7.8-EFS-vs-S3

EFS：File System Semantics、NFS、Directory / File。

S3：Object Storage、Bucket / Object / Key、API。

如果应用代码明确依赖：POSIX-style file access、NFS mount、shared directory。

EFS 更自然。

如果需求是：海量图片、日志、对象、备份、数据湖文件。

S3 通常更自然。

---

### 7.9-★★★-Amazon-FSx

[CURRENT-IN-SCOPE]。

Amazon FSx。

是一组：Fully Managed File System。

服务。

它不是一个单一文件系统引擎。

当前主要家族包括：FSx for Windows File Server、FSx for Lustre、FSx for NetApp ONTAP、FSx for OpenZFS。

对于 CLF-C02，最重要的是先知道：

```text
FSx
=
AWS 托管的专业文件系统家族
```

---

### 7.10-★★★★-FSx-for-Windows-File-Server

正式名称：Amazon FSx for Windows File Server。

核心：Managed Windows File Server + SMB。

---

### 7.11-SMB-是什么？

SMB。

Server Message Block。

是一种常见的：网络文件共享协议。

Windows 企业环境中非常常见。

所以题目看到：Windows、SMB、Microsoft Active Directory、Windows file shares。

首先考虑：FSx for Windows File Server。

---

### 7.12-题库典型：SMB-文件存储

题库中有一道非常典型的题：需求：fully managed、highly reliable、scalable file storage、SMB protocol。

选项里有：S3、EFS、FSx for Windows File Server、EBS。

这里真正的定位不是哪个都能“存文件”，而是 SMB + Windows File Server。

直接指向：FSx for Windows File Server。

---

### 7.13-★★★-FSx-for-Lustre

Lustre。

是一种：High-Performance File System、高性能文件系统。

典型场景：HPC、Machine Learning、Video Processing、Financial Modeling、Large-scale Data Processing。

HPC。

High Performance Computing、高性能计算。

---

### 7.14-FSx-for-Lustre-与-S3

FSx for Lustre 可以与 S3 数据仓库集成。

典型：

```text
大量 Data
   │
   ▼
Amazon S3
   │
   ▼
FSx for Lustre
   │
   ▼
High-performance Compute
```

核心区分：

```text
S3
→ durable object repository

FSx for Lustre
→ high-performance file system for compute workloads
```

所以不要看到：S3 Integration。

就认为两者是同一个服务。

---

### 7.15-★★-FSx-for-NetApp-ONTAP-与-OpenZFS

对于 CLF-C02：不需要深入学它们的企业存储管理细节。

只需知道：

```text
FSx for NetApp ONTAP
→ 托管 NetApp ONTAP 文件存储

FSx for OpenZFS
→ 托管 OpenZFS 文件系统
```

它们体现的是：AWS 不只提供一个通用 File Storage，也可以提供企业熟悉的特定文件系统技术。

---

### 7.16-EFS-vs-FSx

可以这样理解：

```text
EFS
→ AWS 原生、弹性的 NFS 文件存储
→ Linux / cloud-native shared file system 场景很典型

FSx
→ 托管特定成熟文件系统技术
→ Windows SMB、Lustre、NetApp ONTAP、OpenZFS 等
```

题目如果没有特殊协议 / 技术要求，不要因为FSx 听起来更高级。

就自动选 FSx。

需求决定答案。

---

## 本篇概述

- 本篇梳理了EBS与Instance-Store相关的核心知识、适用场景与判断要点。
- 本篇梳理了EFS与FSx文件存储相关的核心知识、适用场景与判断要点。

[返回本章总述](./00-总述.md)｜[查看本章概述](./99-概述.md)

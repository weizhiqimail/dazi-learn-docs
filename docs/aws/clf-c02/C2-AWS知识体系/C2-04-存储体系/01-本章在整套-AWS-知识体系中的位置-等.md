---
id: 01-本章在整套-AWS-知识体系中的位置-等
sidebar_position: 1
---

# C2-04-存储体系-本章在整套-AWS-知识体系中的位置与本章与-719-道题库的关系与存储基础概念与Block-File-Object数据模型

> 本篇是《C2-04-存储体系》的第1个分篇，主要包含：本章在整套-AWS-知识体系中的位置、本章与-719-道题库的关系、存储基础概念、Block-File-Object数据模型。

## 1-本章在整套-AWS-知识体系中的位置

前面几章解决的是：代码在哪里运行？

例如：EC2、Container、ECS / EKS、Fargate、Lambda。

但是只要 Application 真正开始运行，就一定会产生数据。

例如 GlobalShop：商品图片、订单附件、用户上传文件、日志、系统盘、数据库磁盘、共享文件、备份、归档、大数据文件。

这些数据不能全部用同一种存储方式保存。

AWS Storage 的第一层思维应该是：

```text
Storage
│
├── Object Storage
│   └── Amazon S3
│
├── Block Storage
│   └── Amazon EBS
│
├── File Storage
│   ├── Amazon EFS
│   └── Amazon FSx
│
├── Local Ephemeral Storage
│   └── EC2 Instance Store
│
├── Hybrid Storage
│   └── AWS Storage Gateway
│
└── Backup Management
    └── AWS Backup
```

不要先背产品名。

先理解：我到底想把数据当成什么来使用？

是：Object？

Disk / Block？

File System？

Local Temporary Disk？

Backup？

这才是存储题真正的入口。

---

---

## 2-本章与-719-道题库的关系

按照本项目此前统一使用的粗略统计方法：

> 在“题干 + 全部选项”中，只要某个服务在一道题里出现，就记 1 次。

同一道题重复出现仍只记 1 次。

大致曝光度为：

| 服务 / 概念 | 题库粗略曝光 |
|---|---:|
| Amazon S3 | 83 |
| Amazon EBS | 21 |
| AWS Storage Gateway | 17 |
| Amazon EFS | 16 |
| Amazon FSx | 11 |
| AWS Backup | 7 |
| Snow Family | 14 左右 |

注意：曝光度 ≠ 正确答案次数。

例如某个服务可能经常作为干扰项出现。

因此这些数字主要用于判断：哪些概念需要优先掌握，而不是用来背：

```text
出现最多
→ 一定选它
```

其中 Amazon S3 是整个 CLF-C02 最核心的服务之一。

---

---

## 3-★★★★★-存储基础概念

### 3.1-Storage-是什么？

Storage，中文为：存储。

最基本的含义：把数据保存下来，以后还能再读取。

应用程序运行时可能使用：CPU、Memory。

但是：Memory。

通常不是长期保存数据的地方。

例如：

```text
Node.js Process
      │
      ├── Memory
      │   └── 当前请求、对象、变量
      │
      └── Persistent Storage
          └── 应用重启以后仍需要存在的数据
```

所以：

```text
Compute
解决：
代码在哪里运行

Storage
解决：
数据放在哪里
```

---

### 3.2-Persistent-是什么？

Persistent，中文为：持久的 / 持久化的。

Persistent Storage。

持久化存储。

意思不是数据永远不会丢，而是 数据的生命周期、不应该仅仅绑定在某个 Application Process、或者某一次临时运行上。

例如：EC2 Stop、Application Restart、Container Restart。

之后仍然希望数据存在，就需要考虑：Persistent Storage。

---

### 3.3-Ephemeral-是什么？

Ephemeral，中文为：临时的、短暂存在的。

在云计算中经常看到：Ephemeral Storage。

表示：这种存储和某个计算资源的生命周期关系较强，不应该把它当成长期可靠的数据保存位置。

EC2 Instance Store 就属于典型例子。

---

### 3.4-Durability、Availability、Performance-不要混在一起

存储最容易混淆的三个维度是：Durability、Availability、Performance。

#### 3.4.1-Durability

Durability。

持久性 / 数据耐久性。

核心问题：我的数据会不会丢？

例如：一个文件保存十年、是否仍然能可靠存在？

---

#### 3.4.2-Availability

Availability。

可用性。

核心问题：我现在想读取数据，能不能访问？

所以：

```text
Durability
→ 数据还在不在

Availability
→ 现在能不能访问
```

这两个不能混成一个概念。

---

#### 3.4.3-Performance

Performance。

性能。

存储性能常见维度：Latency、Throughput、IOPS。

---

### 3.5-Latency、Throughput、IOPS

#### 3.5.1-Latency

Latency。

延迟。

例如：

```text
发出一次读请求
↓
多久得到数据
```

---

#### 3.5.2-Throughput

Throughput。

吞吐量。

例如：每秒可以持续传输多少 MB / GB 数据。

适合思考：大文件、视频、批处理、大数据。

---

#### 3.5.3-IOPS

IOPS。

Input/Output Operations Per Second、每秒输入输出操作次数。

更接近：一秒能执行多少次存储 I/O。

数据库、随机读写等场景经常关注 IOPS。

CLF-C02 不要求计算复杂存储性能公式。

需要建立的是：

```text
Latency
→ 一次操作多快

Throughput
→ 单位时间能搬多少数据

IOPS
→ 单位时间能做多少次 I/O
```

---

### 3.6-AWS-Storage-最重要的四种数据模型

先不看 AWS 服务名。

传统计算机系统里最重要的三种持久存储抽象：Block、File、Object。

再加一个：Local Ephemeral。

于是：

```text
Storage
│
├── Block
├── File
├── Object
└── Local Ephemeral
```

后面所有 AWS 服务都可以先放进这张图。

---

---

## 4-★★★★★-Block-File-Object数据模型

### 4.1-Block-Storage-是什么？

Block Storage。

块存储。

它给操作系统的感觉更接近：一块磁盘、一个 Volume、一个 Block Device。

例如 Linux 可能看到：/dev/nvme0n1。

然后你自己：Partition、Format、Create File System、Mount。

概念：

```text
Block Storage
      │
      ▼
Operating System
      │
      ▼
File System
      │
      ▼
Files
```

AWS 中最典型：Amazon EBS。

---

### 4.2-File-Storage-是什么？

File Storage。

文件存储。

它直接提供：Directory、File、Path。

例如：/products/images/a.jpg、/shared/config/app.json、/home/user/report.xlsx。

客户端通常通过文件系统协议访问。

例如：NFS、SMB。

AWS 中：Amazon EFS、Amazon FSx。

都属于这一类。

---

### 4.3-Object-Storage-是什么？

Object Storage。

对象存储。

它不是把数据暴露成传统磁盘块，也不是主要让操作系统把它当成普通本地目录。

它把数据保存为：Object。

通常包含：Object Data + Key + Metadata。

AWS 最典型：Amazon S3。

例如：

```text
Bucket:
globalshop-product-images

Key:
products/2026/09/iphone-17/front.jpg

Object:
真正的图片数据
```

---

### 4.4-Object、File、Block-的直觉对比

| 模型 | 最像什么 | AWS 代表服务 |
|---|---|---|
| Block | 一块硬盘 / Volume | EBS |
| File | 网络共享文件夹 | EFS / FSx |
| Object | 海量对象仓库 | S3 |

可以粗略记：

```text
要“磁盘”
→ Block

要“共享目录”
→ File

要“海量文件对象仓库”
→ Object
```

但是不要把它理解成绝对技术边界。

例如：S3 里当然可以保存“文件内容”。

只是：S3 的访问模型是 Object Storage，不是传统 POSIX 文件系统。

---

## 本篇概述

- 本篇梳理了本章在整套-AWS-知识体系中的位置相关的核心知识、适用场景与判断要点。
- 本篇梳理了本章与-719-道题库的关系相关的核心知识、适用场景与判断要点。
- 本篇梳理了存储基础概念相关的核心知识、适用场景与判断要点。
- 本篇梳理了Block-File-Object数据模型相关的核心知识、适用场景与判断要点。

[返回本章总述](./00-总述.md)｜[查看本章概述](./99-概述.md)

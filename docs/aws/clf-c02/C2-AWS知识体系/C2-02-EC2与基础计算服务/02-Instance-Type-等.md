---
id: 02-Instance-Type-等
sidebar_position: 2
---

# C2-02-02-Instance-Type与EC2-Instance-Lifecycle

> 本篇是《C2-02-EC2与基础计算服务》的第2个分篇，主要包含：Instance-Type、EC2-Instance-Lifecycle。

## 4-★★★★★-Instance-Type

**Instance Type**：实例类型。

它决定 CPU、Memory、Network、Storage、Accelerator 等资源配置。

AWS 当前按照不同工作负载，把 EC2 Instance Type 分成 General Purpose、Compute Optimized、Memory Optimized、Storage Optimized、Accelerated Computing、HPC 等类别。

([AWS Documentation](https://docs.aws.amazon.com/ec2/latest/instancetypes/ec2-instance-type-specifications.html))

---

### 4.1-vCPU-是什么？

**vCPU**：virtual Central Processing Unit，即虚拟 CPU。

这里并不是说 AWS 给你一块独立实体 CPU，而是给 EC2 Instance 提供一定的虚拟 CPU 计算能力。

CLF-C02 不需要研究 CPU Thread、NUMA、CPU Pinning、Hyper-Threading。

重点只需要知道Instance Type 决定 EC2 获得多少计算资源。

---

### 4.2-Instance-Family-不要死背型号

题目中可能出现：T、M、C、R、I、P、G。

但 CLF 的核心不是背几十种型号，而是理解资源倾向。

当前 AWS 的实例分类仍然非常庞大，因此比背型号更重要的是理解“为什么存在不同 Family”。

([AWS Documentation](https://docs.aws.amazon.com/ec2/latest/instancetypes/instance-types.html))

---

### 4.3-★★★★-General-Purpose

**General Purpose**：通用型。

特点：CPU、Memory、Network。

比较均衡。

典型：M Family、T Family。

适合：Web Server、Application Server、开发测试、普通企业应用、代码仓库。

GlobalShop：

```text
普通商品 API
普通后台管理系统
普通 Web Server

→ General Purpose
```

---

### 4.4-★★★★-Compute-Optimized

**Compute Optimized**：计算优化型。

特点：CPU 能力相对更突出。

典型：C Family。

AWS 官方列举的场景包括：Batch Processing、Media Transcoding、High-performance Web Server、Scientific Modeling、Machine Learning Inference等。

([AWS Documentation](https://docs.aws.amazon.com/ec2/latest/instancetypes/ec2-instance-type-specifications.html))GlobalShop：

```text
大规模商品图片计算
复杂促销价格计算
大量 CPU 密集型任务

→ Compute Optimized
```

---

### 4.5-★★★★-Memory-Optimized

**Memory Optimized**：内存优化型。

特点：Memory 很大。

适合：大量数据需要放在内存处理、大型缓存、In-memory Database、大型数据处理。

GlobalShop：

```text
大型实时数据分析
超大内存缓存

→ Memory Optimized
```

---

### 4.6-★★★-Storage-Optimized

**Storage Optimized**：存储优化型。

重点：高本地磁盘性能、高 IOPS、低延迟、大量顺序 / 随机 I/O。

**IOPS**，即Input/Output Operations Per Second，即每秒输入输出操作次数。

可以简单理解成：

> 存储设备每秒能处理多少次读写操作。

适合：大量本地数据、高频磁盘 I/O、大型数据处理([AWS Documentation](https://docs.aws.amazon.com/ec2/latest/instancetypes/ec2-instance-type-specifications.html))

---

### 4.7-★★★-Accelerated-Computing

**Accelerated Computing**：加速计算。

核心思想：

> 某些计算不只靠普通 CPU，而使用专门硬件加速器。

例如：GPU、AWS Inferentia、AWS Trainium、FPGA。

GlobalShop：

```text
AI 推荐
图像处理
模型训练
模型推理

→ Accelerated Computing
```

---

### 4.8-Instance-Type-的真正选择逻辑

不要记成：

```text
M = 好
C = 更快
R = 更贵
```

正确理解是：

```text
工作负载的瓶颈是什么？
        │
        ├── 比较平均
        │      ↓
        │ General Purpose
        │
        ├── CPU
        │      ↓
        │ Compute Optimized
        │
        ├── Memory
        │      ↓
        │ Memory Optimized
        │
        ├── Local Storage I/O
        │      ↓
        │ Storage Optimized
        │
        └── GPU / AI / Accelerator
               ↓
          Accelerated Computing
```

---

---

## 5-★★★★-EC2-Instance-Lifecycle

**Lifecycle**：生命周期。

EC2 不只是：存在、不存在，而是存在多个状态。

主要包括：pending、running、stopping、stopped、shutting-down、terminated。

AWS 当前官方文档仍然使用这套生命周期状态。

([AWS Documentation](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-instance-lifecycle.html))

---

### 5.1-Launch

**Launch**：启动 / 创建新的 Instance。

例如：

```text
AMI
+
Instance Type
+
Network
+
Security Group
+
Storage
        ↓
Launch
        ↓
pending
        ↓
running
```

---

### 5.2-Start

如果 Instance 已经：stopped。

可以：Start。

然后：

```text
stopped
   ↓
pending
   ↓
running
```

注意：

> Start 一个停止的实例，和 Launch 一个全新的实例，不是同一个动作。

---

### 5.3-Stop

**Stop**：停止实例。

概念上类似：关机。

但 Instance 这个资源仍然存在。

例如：

```text
running
   ↓
stopping
   ↓
stopped
```

Stopped 状态下通常不再产生 EC2 Instance 本身的运行计算费用，但 EBS 等关联资源仍可能继续收费。

([AWS Documentation](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-instance-lifecycle.html))

---

### 5.4-Reboot

**Reboot**：重启。

类似：操作系统重新启动。

重要区别：Reboot ≠ Stop + Start。

AWS 官方说明，Reboot 时实例通常保持在同一 Host 上，而且 Instance Store 数据也不会因为单纯 Reboot 而被删除。

([AWS Documentation](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-instance-lifecycle.html))。

因此不能写成：

> “只要重启 EC2，Instance Store 就会丢失。”

这是错误的。

---

### 5.5-★★★★★-Terminate

**Terminate**：终止 / 删除 EC2 Instance。

这是：真的删除，而不是暂时关机。

流程：

```text
running
    ↓
shutting-down
    ↓
terminated
```

已经 Terminated 的实例不能重新启动或恢复。

([AWS Documentation](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-instance-lifecycle.html))。

所以考试看到：temporary shutdown。

一般不是 Terminate。

---

### 5.6-Stop、Reboot、Terminate-对比

| 操作        | 实例还存在？ |   可以继续使用？ | 核心理解        |
| --------- | -----: | --------: | ----------- |
| Reboot    |      是 |         是 | 重启 OS       |
| Stop      |      是 | Start 后可以 | 暂时停止        |
| Terminate |      否 |         否 | 删除 Instance |

---

### 5.7-★★★★★-EBS

正式名称：**Amazon Elastic Block Store**。

简称：**Amazon EBS** 或 **EBS**。

中文：**Amazon 弹性块存储**。

本章只讲它与 EC2 的关系。

完整 Storage 体系放在 C2-04。

---

### 5.8-EC2-为什么还需要-EBS？

EC2 主要解决：Compute。

但程序还需要保存：Operating System、Application、Configuration、Files、Data。

所以 EC2 通常搭配：

```text
EC2
 │
 ▼
EBS
```

可以简单理解为：

```text
EC2
≈ Computer

EBS
≈ 可持久化 Block Disk
```

AWS 官方把 EBS 描述为 EC2 的 Persistent Storage Volume。

([AWS Documentation](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/concepts.html))

---

### 5.9-Block-Storage-是什么？

**Block Storage**：块存储。

操作系统看到的是类似：Disk、Volume、Device。

然后可以：创建文件系统、格式化、挂载、保存文件。

例如 Linux：/dev/nvme0n1。

这种思维更接近：硬盘，而不是 S3 那种：Object、Bucket。

---

### 5.10-★★★★-Instance-Store

**Instance Store**：实例存储。

也可以理解成：

> EC2 Host 上提供给 Instance 的临时本地存储。

它最大的特点：Local + Ephemeral。

---

### 5.11-Ephemeral-是什么意思？

**Ephemeral**：临时的 / 短暂存在的。

所以：

```text
Instance Store
=
Ephemeral Local Storage
```

这不是最适合保存：唯一一份、重要永久数据的地方。

---

### 5.12-EBS-vs-Instance-Store

```text
EC2
├── EBS
│    └── Persistent Storage
│
└── Instance Store
     └── Ephemeral Local Storage
```

重要区别：

|             | EBS           | Instance Store |
| ----------- | ------------- | -------------- |
| 类型          | Block Storage | Local Storage  |
| 持久性         | 持久            | 临时             |
| 是否依赖当前 Host | 相对独立          | 强依赖 Host       |
| 适合重要持久数据    | 是             | 一般否            |
| 适合临时高速本地数据  | 可以但不是核心优势     | 是              |

---

### 5.13-Instance-Store-最容易写错的地方

不要记成：

```text
EC2 一停
→ 所有情况下数据一定立即丢
```

更准确的理解是：

> Instance Store 与底层 Host 生命周期紧密相关，Stop/Terminate 等操作可能导致其中的数据丢失。

但 Reboot 本身通常不会导致 Instance Store 数据消失。

AWS 官方当前明确说明：

```text
Reboot
→ 保留 Instance Store 数据

Stop + Start
→ 原 Host 的 Instance Store 数据丢失
```

([AWS Documentation](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-instance-lifecycle.html))。

因此考试层面最安全的关键词仍然是：

```text
Instance Store
→ temporary
→ ephemeral
→ local
```

---

## 本篇概述

- 本篇梳理了Instance-Type相关的核心知识、适用场景与判断要点。
- 本篇梳理了EC2-Instance-Lifecycle相关的核心知识、适用场景与判断要点。

[返回本章总述](./00-总述.md)｜[查看本章概述](./99-概述.md)

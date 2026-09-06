---
id: C2-02-01-从计算开始理解-AWS与Amazon-EC2与AMI
sidebar_position: 1
---

# C2-02-01-从计算开始理解-AWS与Amazon-EC2与AMI

> 本篇是《C2-02-EC2与基础计算服务》的第1个分篇，主要包含：从“计算”开始理解-AWS、Amazon-EC2、AMI。

## 1-从“计算”开始理解-AWS

### 1.1-Compute-是什么？

**Compute**。

中文通常翻译为：

> 计算 / 计算资源

在云计算中，Compute 不是单纯指：CPU 做加减乘除，而是更广义的：让程序真正运行起来所需要的计算能力。

一个应用程序最终一定要在某个地方运行。

例如 GlobalShop 的商品服务：GET /products/12345。

用户访问商品页面以后，服务器需要：

```text
接收 HTTP 请求
        ↓
执行 Node.js / Java / Python 程序
        ↓
读取 Redis
        ↓
查询数据库
        ↓
组织 JSON
        ↓
返回给用户
```

这些代码不能凭空运行。

它需要：CPU、Memory、Operating System、Network、Runtime、Storage。

所以，从最基础的角度看：

```text
Compute
=
“代码在哪里运行”
```

这是理解 AWS Compute 服务最重要的一句话。

---

### 1.2-Physical-Server：物理服务器

#### 1.2.1-传统服务器是什么？

**Physical Server**：物理服务器。

传统情况下，一家公司可能购买：Dell / HP / Lenovo Server。

安装在自己的 Data Center 中。

例如：

```text
┌────────────────────────────┐
│ Physical Server            │
│                            │
│ CPU: 32 Core               │
│ Memory: 128 GB             │
│ Disk: 4 TB                 │
│ Network Card               │
│                            │
│ Linux                      │
│                            │
│ GlobalShop Application     │
└────────────────────────────┘
```

这台机器是真实存在的硬件。

公司需要负责：购买、运输、机架、供电、散热、网络、硬件故障、容量规划、升级、淘汰。

---

### 1.3-为什么后来出现-Virtual-Machine？

假设公司购买一台：32 CPU、128 GB RAM的服务器。

但是某个应用只需要：4 CPU、16 GB RAM如果一台 Physical Server 只跑一个应用：

```text
Physical Server
32 CPU
128 GB RAM

实际使用：
4 CPU
16 GB RAM
```

大量硬件资源就浪费了。

于是出现了 Virtualization（虚拟化）技术。

---

### 1.4-Virtualization：虚拟化

**Virtualization**：虚拟化。

核心思想是：

> 一台真实物理服务器，可以被划分为多个逻辑上相对独立的计算环境。

例如：

```text
Physical Server
│
├── VM 1
│   ├── 4 vCPU
│   ├── 16 GB RAM
│   └── Linux
│
├── VM 2
│   ├── 8 vCPU
│   ├── 32 GB RAM
│   └── Windows
│
└── VM 3
    ├── 4 vCPU
    ├── 16 GB RAM
    └── Linux
```

这里：**VM**：Virtual Machine，即虚拟机。

---

### 1.5-Host、Guest-OS、Hypervisor

这三个词第一次学习虚拟化时很容易混。

#### 1.5.1-Host

**Host**：宿主机。

就是底层真正存在的物理服务器。

---

#### 1.5.2-Guest-OS

**Guest Operating System**。

简称：**Guest OS**：客户操作系统 / 虚拟机中的操作系统。

例如：

```text
VM 1
└── Ubuntu Linux

VM 2
└── Windows Server
```

Ubuntu 和 Windows 就是 Guest OS。

---

#### 1.5.3-Hypervisor

**Hypervisor**：虚拟机监控器 / 虚拟化管理层。

它负责把物理硬件资源分配给虚拟机。

概念上可以理解为：

```text
Physical Hardware
        │
        ▼
┌──────────────────┐
│    Hypervisor    │
└──────────────────┘
   │       │       │
   ▼       ▼       ▼
 VM 1     VM 2     VM 3
 Linux    Linux   Windows
```

Hypervisor 负责：CPU 分配、Memory 分配、设备虚拟化、虚拟机隔离、虚拟机运行。

CLF-C02 不要求深入研究虚拟化底层实现。

真正需要理解的是：

```text
Physical Server
        ↓
Virtualization
        ↓
多个 Virtual Machine
        ↓
云厂商可以快速创建、删除、调整 VM
```

---

### 1.6-从-Virtual-Machine-到-Cloud-VM

传统 VM 已经解决：

```text
一台物理服务器
→ 多台虚拟服务器
```

但如果这些服务器还是公司自己买的，那么公司仍然需要：买服务器、建机房、扩容、换硬盘、维护网络、处理硬件故障。

AWS 做的关键一步是：

> AWS 自己建设庞大的数据中心和硬件基础设施，然后把计算能力通过 API 提供给客户。

于是：

```text
传统：

买服务器
↓
安装虚拟化环境
↓
创建 VM

AWS：

调用 API / Console
↓
几分钟甚至更快得到虚拟服务器
```

这就是 EC2 的基础思想。

---

---

## 2-★★★★★-Amazon-EC2

[CURRENT-IN-SCOPE]

正式名称：**Amazon Elastic Compute Cloud**。

简称：**Amazon EC2** 或 **EC2**。

中文：**Amazon 弹性计算云**。

AWS 官方把 EC2 Instance 描述为 Virtual Server，也就是虚拟服务器。

EC2 同时提供 AMI、Instance Type、EBS、Instance Store、Security Group 等围绕虚拟服务器运行所需要的基础能力。

([AWS Documentation](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/concepts.html))

---

### 2.1-为什么叫-Elastic-Compute-Cloud？

这个名字非常重要。

拆开来看：

#### 2.1.1-Elastic

弹性。

表示：需要时增加、不需要时减少。

---

#### 2.1.2-Compute

计算。

表示：运行程序的 CPU / Memory 等计算能力。

---

#### 2.1.3-Cloud

云。

表示：这些计算资源不是你自己购买服务器建立，而是通过 AWS 云获得。

所以：

```text
Elastic
+
Compute
+
Cloud
=
Elastic Compute Cloud
```

另外：

```text
Elastic Compute Cloud

Compute
Cloud

两个 C
```

可以写成 EC²，最终产品名写作 **Amazon EC2**。

---

### 2.2-EC2-到底是什么？

最简单的一句话：

> EC2 是 AWS 提供的可配置虚拟服务器服务。

但真正理解应该是：

```text
AWS Data Center
        │
        ▼
Physical Servers
        │
        ▼
Virtualization
        │
        ▼
EC2 Instance
```

你不需要购买服务器、安装服务器、维护硬件、更换 CPU、维修硬盘、维护机房。

你只需要决定我要什么 OS？

我要多少 CPU？

我要多少内存？

我要多少存储？

放哪个 Region？

放哪个 AZ？

允许谁访问？

需要运行多久？

采用什么购买模式？

---

### 2.3-★★★★★-EC2-Instance

**Instance**。

本意：

> 实例

在计算机系统中，可以理解为：

> 某个模板真正创建出来并运行的一份具体对象。

因此：

```text
EC2
= 服务

EC2 Instance
= 一台具体运行中的 EC2 虚拟服务器
```

例如：

```text
GlobalShop 有 3 台商品服务器：

i-001
i-002
i-003
```

这些分别就是三个 EC2 Instance。

---

### 2.4-GlobalShop-中-EC2-在哪里？

最基础架构：

```text
Internet User
      │
      ▼
   Route 53
      │
      ▼
  CloudFront
      │
      ▼
     ALB
      │
      ▼
┌───────────────┐
│ EC2 Instance  │
│               │
│ Node.js       │
│ Product API   │
└───────────────┘
      │
      ▼
  RDS / Redis
```

例如用户访问：https://globalshop.com/product/123。

最终可能有一台 EC2：

```text
运行 Node.js
        ↓
执行商品 API
        ↓
查数据库
        ↓
返回商品 JSON
```

---

---

## 3-★★★★★-AMI

正式名称：**Amazon Machine Image**。

简称：**AMI**。

中文：**Amazon 机器映像**，也常称为 **Amazon 系统镜像**。

---

### 3.1-为什么需要-AMI？

创建服务器的时候，AWS 必须知道：这台服务器到底装什么？

例如：

```text
Linux？
Windows？

Ubuntu？
Amazon Linux？

有没有 Node.js？
有没有 Nginx？
有没有应用程序？
```

所以需要一个：服务器启动模板。

这就是 AMI。

AWS 官方定义中，AMI 包含启动 Instance 所需要的软件配置。

创建 EC2 Instance 时必须指定 AMI。

AMI 还具有 Region 属性。

([AWS Documentation](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ami-lifecycle.html))

---

### 3.2-AMI-可以理解成什么？

可以把 AMI 理解成：“服务器模板”。

例如：

```text
AMI: globalshop-product-v12

包含：

Amazon Linux
Node.js 24
Nginx
CloudWatch Agent
GlobalShop Product Service v12
安全配置
启动脚本
```

然后：

```text
AMI
 │
 ├── EC2 #1
 ├── EC2 #2
 ├── EC2 #3
 └── EC2 #4
```

所有机器都可以从同一个模板启动。

---

### 3.3-为什么-AMI-对-Auto-Scaling-很重要？

假设双十一流量突然增加。

AWS 需要把 EC2 实例从 20 台扩展到 300 台，不可能让运维人员逐台手动安装 Linux、Node.js、Nginx，下载代码并配置程序。

重复 280 次。

应该：

```text
AMI
│
├── EC2
├── EC2
├── EC2
├── EC2
├── ...
└── EC2
```

所以：

> AMI 解决的是“新的 EC2 应该长什么样”。

而：

> Auto Scaling 解决的是“应该创建多少台”。

这是非常重要的一组关系。

---

## 本篇概述

- 本篇梳理了从“计算”开始理解-AWS相关的核心知识、适用场景与判断要点。
- 本篇梳理了Amazon-EC2相关的核心知识、适用场景与判断要点。
- 本篇梳理了AMI相关的核心知识、适用场景与判断要点。

[返回本章总述](./C2-02-00-章节总述.md)｜[查看本章概述](./C2-02-99-章节概述.md)

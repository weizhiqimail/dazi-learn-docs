---
id: 02-ECS与Fargate-等
sidebar_position: 2
---

# C2-03-02-ECS与Fargate与Kubernetes与EKS

> 本篇是《C2-03-容器Serverless与应用运行平台》的第2个分篇，主要包含：ECS与Fargate、Kubernetes与EKS。

## 5-★★★★★-ECS与Fargate

### 5.1-★★★★-Cluster

Cluster，中文为：集群。

最基本理解：

> 多个计算资源组成一个整体，共同承载工作负载。

例如：

```text
Container Cluster
│
├── Compute Node A
├── Compute Node B
├── Compute Node C
└── Compute Node D
```

然后容器编排系统负责：

```text
Workload
   ↓
Scheduler
   ↓
选择合适 Node
   ↓
运行 Container
```

ECS 和 EKS 都会经常出现 Cluster 这个词。

---

### 5.2-★★★★★-Amazon-ECS

[CURRENT-IN-SCOPE]。

正式名称：Amazon Elastic Container Service。

简称：Amazon ECS。

中文通常称：Amazon 弹性容器服务。

AWS 当前把 ECS 定义为：

> Fully Managed Container Orchestration Service

也就是：完全托管的容器编排服务

---

### 5.3-为什么叫-Elastic-Container-Service？

拆开看：

```text
Elastic
= 弹性

Container
= 容器

Service
= 服务
```

核心不是“它能存 Container”。

而是。

> AWS 提供一套原生的 Container 管理与编排能力，使你能够部署、管理和扩展容器化应用。

---

### 5.4-ECS-到底管理什么？

概念上：

```text
Amazon ECS
     │
     ├── 我要运行哪些 Container？
     ├── 每个 Container 要多少 CPU / Memory？
     ├── 我要多少个副本？
     ├── Container 挂了是否重建？
     ├── 如何滚动部署？
     └── Container 应该放到哪些 Compute 上？
```

它不是数据库。

不是镜像仓库。

也不是单纯的一台服务器。

它是：Container Orchestration Layer。

---

### 5.5-ECS-的几个核心概念

CLF-C02 不要求深入配置，但理解这些词会非常有帮助。

#### 5.5.1-ECS-Cluster

ECS Cluster。

可以理解成：

> ECS 管理 Container Workload 的逻辑集群。

---

#### 5.5.2-Task-Definition

Task Definition，中文为：任务定义。

可以理解成：

> ECS 运行任务时使用的“运行说明书”。

里面会描述类似：使用哪个 Container Image、CPU、Memory、Port、Environment Variables、IAM Role、Log Configuration。

概念上：

```text
Task Definition
      ↓
Task
```

类似：

```text
Recipe
  ↓
Actual Dish
```

不是完全等价，只是帮助理解。

---

#### 5.5.3-ECS-Task

Task，中文为：任务。

在 ECS 中可以理解为：

> 按 Task Definition 真正启动出来的一份运行实例。

例如：

```text
Task Definition:
product-service:23

      ↓

Task #1
Task #2
Task #3
```

一个 Task 中可以包含一个或多个紧密关联的 Container。

---

#### 5.5.4-ECS-Service

ECS Service。

这里的 Service 不是泛指 AWS Service。

它是 ECS 内的一个概念。

它主要用于：

> 保持某类长期运行 Task 的期望数量，并帮助进行部署和恢复。

例如：

```text
Desired Count = 6

ECS Service
    │
    ├── Task 1
    ├── Task 2
    ├── Task 3
    ├── Task 4
    ├── Task 5
    └── Task 6
```

如果 Task 3 挂了：

```text
5 Running
   ↓
ECS Service
   ↓
再启动 1 个
   ↓
6 Running
```

这就是编排系统的重要价值。

---

### 5.6-ECS-最终仍然需要-Compute

ECS 是编排层。

Container 真正运行时仍然需要：CPU、Memory、Network。

所以必须有 Compute。

典型两种思路：

```text
ECS
├── EC2
│   └── 你管理底层 EC2 Capacity
│
└── Fargate
    └── AWS 帮你提供底层容器 Compute
```

这也是 ECS 与 Fargate 最容易混淆的地方。

---

### 5.7-ECS-on-EC2

如果使用：ECS + EC2。

概念上：

```text
Amazon ECS
     │
     ▼
EC2 Cluster Capacity
     │
 ┌───┼────┐
 ▼   ▼    ▼
EC2 EC2  EC2
 │   │    │
Tasks / Containers
```

你仍然需要关注：EC2 Instance Type、EC2 Capacity、OS、Patching、Scaling Nodes。

虽然 ECS 帮你管理 Container Orchestration，但底层服务器仍然有较多客户责任。

---

### 5.8-★★★★★-AWS-Fargate

[CURRENT-IN-SCOPE]。

正式名称：AWS Fargate。

Fargate 不是一个缩写。

它是 AWS 给产品起的名称。

最重要的定义：

> Fargate 是为 Container 提供按需计算能力的 Serverless Compute 技术，使你不需要自己 Provision、配置和扩展用于运行 Container 的 VM 集群。

---

### 5.9-Fargate-到底解决什么？

如果不用 Fargate：

```text
ECS
 ↓
EC2 Nodes
 ↓
Containers
```

你需要想：需要多少台 EC2？

用什么 Instance Type？

EC2 不够了怎么办？

机器利用率太低怎么办？

OS 要不要 Patch？

Node Group 怎么扩缩？

使用 Fargate：

```text
ECS / EKS
     │
     ▼
   Fargate
     │
     ▼
Containers / Pods
```

你主要声明：这个 Workload、需要多少 CPU？

需要多少 Memory？

底层服务器 Capacity 由 AWS 管理。

---

### 5.10-Fargate-不是-Container-Orchestrator

非常重要。

错误理解：

```text
Fargate
=
ECS
```

不对。

更准确：

```text
ECS / EKS
= Orchestration

Fargate
= Serverless Compute for Containers
```

组合：ECS + Fargate。

或者：EKS + Fargate。

---

### 5.11-为什么-Fargate-也叫-Serverless？

Serverless。

中文经常翻译：无服务器。

但是上一章已经建立过一个重要原则：Serverless ≠ 物理世界没有 Server。

真正意思是：

> 客户不再直接 Provision 和管理服务器。

Fargate 背后当然仍然有：Physical Server、Compute Capacity、Network、Storage。

只不过这些基础设施被 AWS 抽象掉。

所以：

```text
Serverless
=
No Server Management for Customer
```

比：No Server Exists。

更准确。

---

### 5.12-题库中的典型-Fargate-场景

题库中有一道非常典型的场景：

```text
公司自己在 EC2 上管理 Docker 环境
↓
不想继续管理：
Cluster Size
Scheduling
Environment Maintenance
```

这种题的核心不是需要数据库。

也不是需要分析 S3 数据，而是 Container + 减少底层服务器 / 集群管理。

因此 Fargate 会成为重要候选。

题库中 Fargate 的曝光度不如 EC2，但它是非常典型的“场景型”考点。

---

---

## 6-★★★★★-Kubernetes与EKS

### 6.1-★★★★-Kubernetes-是什么？

Kubernetes。

常写：K8s。

为什么是 K8s？

```text
K u b e r n e t e s
  └── 8 个中间字母 ──┘

K8s
```

Kubernetes 不是 AWS 发明的。

它是开源的：Container Orchestration Platform。

也就是容器编排平台。

它可以管理：

```text
Cluster
Node
Pod
Deployment
Service
Config
Secret
Scaling
Scheduling
Health
Rolling Update
```

CLF-C02 不要求学会完整 Kubernetes。

但必须知道：

```text
Kubernetes
→ Container Orchestration

Amazon EKS
→ AWS Managed Kubernetes
```

---

### 6.2-为什么企业会使用-Kubernetes？

假设一家公司希望：AWS、Azure、Google Cloud、On-Premises。

都使用相似的 Container Orchestration 模型。

Kubernetes 因为是开放生态，具有：标准化、生态丰富、可移植性较强、大量工具支持。

所以很多大型系统选择 Kubernetes。

但代价是：概念多、复杂度高、运维学习成本高。

因此：Kubernetes、不是“因为更高级，所以所有项目都应该用”。

如果系统并不需要 Kubernetes 生态，ECS 往往更简单。

---

### 6.3-Pod-是什么？

Pod。

是 Kubernetes 中非常重要的最小调度单位之一。

不要简单记成：

```text
Pod = Container
```

更准确：

```text
Pod
  ├── Container A
  └── Container B
```

一个 Pod 可以有一个或多个紧密关联的 Container。

最常见场景往往是：

```text
1 Pod
  └── 1 Main Container
```

于是初学时很容易觉得二者一样。

但概念上：Kubernetes 调度 Pod、Pod 内运行 Container。

---

### 6.4-★★★★★-Amazon-EKS

[CURRENT-IN-SCOPE]。

正式名称：Amazon Elastic Kubernetes Service。

简称：Amazon EKS。

中文通常理解：Amazon 弹性 Kubernetes 服务。

AWS 当前将 EKS 定义为：

> Fully Managed Kubernetes Service

核心：Kubernetes + AWS Managed Service。

---

### 6.5-EKS-为什么存在？

如果企业自己搭 Kubernetes：

```text
EC2
  ↓
Install Kubernetes
  ↓
Control Plane
  ↓
etcd
  ↓
API Server
  ↓
Scheduler
  ↓
Controller
  ↓
Worker Nodes
```

维护成本不低。

EKS 的核心价值是：

> AWS 帮你托管 Kubernetes 的重要控制平面能力，并与 AWS 网络、IAM、负载均衡、存储等服务集成。

于是：

```text
Developer / Platform Team
        │
        ▼
      EKS
        │
        ▼
 Kubernetes API
        │
        ▼
     Workloads
```

---

### 6.6-EKS-并不等于“不需要任何-Compute”

EKS 是 Kubernetes 服务。

工作负载仍需要运行在 Compute 上。

典型：

```text
EKS
├── EC2 Worker Nodes
│
└── Fargate
```

所以：EKS ≠ Fargate。

同样：EKS ≠ EC2。

三者是不同层。

---

### 6.7-ECS-vs-EKS

这是本章最重要的对比之一。

| 对比 | Amazon ECS | Amazon EKS |
|---|---|---|
| 核心 | AWS 原生 Container Orchestration | Managed Kubernetes |
| 是否 Kubernetes | 否 | 是 |
| 学习复杂度 | 通常更低 | 通常更高 |
| AWS 集成 | 很直接 | 很强，同时保留 Kubernetes 生态 |
| 可移植生态 | AWS 原生模型 | Kubernetes 标准生态 |
| 典型题目关键词 | AWS-native container | Kubernetes |

最简单的考试判断：

```text
题目明确写 Kubernetes
→ 优先想到 EKS

只说 AWS 上管理 Containers
→ ECS 可能更直接
```

不能反过来背：EKS 一定比 ECS 好。

这是错误的。

---

### 6.8-ECS-vs-EKS-vs-Fargate

这三个服务经常同时出现。

```text
             Container Workload
                    │
          ┌─────────┴─────────┐
          ▼                   ▼
         ECS                 EKS
   AWS Orchestration   Kubernetes Orchestration
          │                   │
          └─────────┬─────────┘
                    ▼
             Compute Choice
              ┌─────┴─────┐
              ▼           ▼
             EC2       Fargate
```

一句话：

```text
ECS / EKS
回答：
“谁来编排？”

EC2 / Fargate
回答：
“容器在哪种 Compute 上运行？”
```

这是理解容器体系最重要的一张图。

---

### 6.9-ECR-+-ECS-+-Fargate-的完整关系

GlobalShop 的 Product Service：

```text
Developer
    │
    ▼
Source Code
    │
    ▼
Docker Build
    │
    ▼
Container Image
    │
    ▼
Amazon ECR
    │
    │ pull image
    ▼
Amazon ECS
    │
    │ schedule
    ▼
AWS Fargate
    │
    ▼
Product Container
```

分别解决：

```text
ECR
→ Image 存哪里

ECS
→ Container 怎么编排

Fargate
→ Container 底层 Compute 谁管理
```

---

## 本篇概述

- 本篇梳理了ECS与Fargate相关的核心知识、适用场景与判断要点。
- 本篇梳理了Kubernetes与EKS相关的核心知识、适用场景与判断要点。

[返回本章总述](./00-总述.md)｜[查看本章概述](./99-概述.md)

---
id: C2-03-03-Serverless与Lambda与计算模式与责任边界对比与GlobalShop应用运行平台
sidebar_position: 3
---

# C2-03-03-Serverless与Lambda与计算模式与责任边界对比与GlobalShop应用运行平台

> 本篇是《C2-03-容器Serverless与应用运行平台》的第3个分篇，主要包含：Serverless与Lambda、计算模式与责任边界对比、GlobalShop应用运行平台。

## 7-★★★★★-Serverless与Lambda

### 7.1-★★★★★-Serverless

Serverless，中文为：无服务器架构 / 无服务器计算。

再次强调：

```text
Serverless
不是没有服务器

而是：
开发者不再直接管理服务器
```

典型 Serverless 的特点：No Server Provisioning、Managed Scaling、Usage-based Billing、Event-driven Friendly、Higher Infrastructure Abstraction。

在 CLF-C02 中最重要的两个方向：AWS Lambda、AWS Fargate。

但二者运行模型不同：

```text
Lambda
→ Function

Fargate
→ Container
```

---

### 7.2-★★★★★-AWS-Lambda

[CURRENT-IN-SCOPE]。

正式名称：AWS Lambda。

Lambda 不是缩写。

名称来自希腊字母：λ、Lambda。

在计算机科学中，Lambda 常与函数、匿名函数等概念相关。

因此 AWS Lambda 的命名和：Function Execution。

非常契合。

---

### 7.3-Lambda-到底是什么？

AWS 当前将 Lambda 定义为：

> Serverless Compute Service

经典 CLF-C02 需要掌握的是 Lambda。

Function：

> 你提供 Function Code，并把它连接到 Trigger。

事件发生时 AWS Lambda 自动准备执行环境、运行代码并按需求扩展。

最简单：

```text
Event
  │
  ▼
Lambda；Function
  │
  ▼
Execute Code
  │
  ▼
Result
```

你不需要先：Launch EC2、Install Linux、Patch OS、Configure Auto Scaling Group、Manage Server Fleet。

---

### 7.4-Function-是什么？

Function，中文为：函数。

例如：resizeImage()、sendOrderEmail()、processPaymentEvent()、generateThumbnail()。

Lambda 的思想是：

> 把一段业务逻辑作为独立可触发的计算单元运行。

例如：

```text
S3 上传图片
     │
     ▼
Lambda
     │
     ▼
生成缩略图
```

而不是24 小时一直运行一台 EC2、等待“也许会发生”的图片上传。

---

### 7.5-Event-Driven：事件驱动

Event，中文为：事件。

例如：S3 Object Created、SQS Message Arrived、DynamoDB Item Changed、API Request、Scheduled Event。

Event-Driven Architecture：

```text
某件事发生
   ↓
触发另外一个动作
```

例如：

```text
User uploads product image
          │
          ▼
         S3
          │ ObjectCreated Event
          ▼
       Lambda
          │
          ▼
Resize Image
          │
          ▼
         S3
```

这就是非常典型的 Lambda 使用方式。

---

### 7.6-★★★★-Lambda-Trigger

Trigger，中文为：触发器。

它回答：

> 什么事情发生时，应该调用这个 Lambda。

Function？

常见来源：API Gateway、S3、SQS、EventBridge、DynamoDB Streams、SNS。

CLF-C02 不要求掌握每一种 Trigger 配置。

但需要建立：

```text
Event Source
     ↓
Trigger
     ↓
Lambda
```

---

### 7.7-GlobalShop-中-Lambda-适合什么？

#### 7.7.1-场景-A：图片处理

```text
Merchant
   │ upload
   ▼
S3 Original Image
   │
   ▼
Lambda
   │
   ├── Resize
   ├── Compress
   └── Generate Thumbnail
```

---

#### 7.7.2-场景-B：异步订单处理

```text
Order Created
    │
    ▼
Event / Queue
    │
    ▼
Lambda
    │
    ├── Send Email
    ├── Update Analytics
    └── Notify Logistics
```

---

#### 7.7.3-场景-C：API

```text
Client
  │
  ▼
API Gateway
  │
  ▼
Lambda
  │
  ▼
DynamoDB
```

可以形成一套典型 Serverless API。

---

### 7.8-Lambda-不适合什么？

不能把 Lambda 理解为：所有程序都应该改成 Lambda。

经典 Lambda。

Function 更适合：Event-driven、Short-lived、Stateless-friendly、Burst Traffic、Automation、API Backend、Data Processing。

如果应用：长期持续运行、需要完整 OS 控制、需要特殊系统软件、需要持续驻留进程、需要传统 Server Runtime。

EC2 或 Container 往往更自然。

---

### 7.9-Stateless-是什么？

Stateless，中文为：无状态。

意思不是应用完全没有数据，而是。

> 不应该把关键业务状态依赖在某个具体计算实例的本地内存或临时磁盘中。

例如错误思路：

```text
Lambda A
Memory:
User Cart = ...
```

下一次请求可能由另一个执行环境处理。

应该：

```text
Lambda
  │
  ├── DynamoDB
  ├── S3
  ├── RDS
  └── ElastiCache
```

把业务状态存到专门的数据服务中。

这也是云原生应用很重要的设计思想。

---

### 7.10-Lambda-的自动扩展直觉

传统：

```text
Traffic ↑
   ↓
手动增加 Server
```

Auto Scaling：

```text
Traffic ↑
   ↓
增加 EC2
```

Lambda：

```text
Events ↑
   ↓
Lambda 自动增加执行并发
```

所以 Lambda 的计算粒度进一步从：Server。

变成：Function Invocation。

---

### 7.11-Lambda-的计费直觉

CLF 层面主要理解：Pay for Usage，而不是必须 24x7 为一台 Server 付运行费。

经典 Lambda。

Function 通常围绕：Request / Invocation + Execution Duration / Allocated Resources。

计费。

具体价格、免费额度和区域价格会变化，不应死背静态数字。

完整成本思想在 C2-15 统一处理。

---

### 7.12-Lambda-运行时间边界

经典 Lambda。

Function 不是无限时长的传统服务器进程。

当前 AWS Lambda。

Functions 的单次 Invocation 有最大执行时长限制。

CLF-C02 学习时最重要的不是死背所有 Limits，而是理解：

```text
Lambda
→ 有明确的 Function Invocation 生命周期

EC2
→ 可以长期运行 Server Process
```

如果题目写：long-running persistent server。

不要条件反射选 Lambda。

---

### 7.13-【AWS-当前】【UPDATED】Lambda-产品已经继续扩展

截至本章编写时，AWS 当前 Lambda 文档已经把 Lambda 描述为包含不同 Serverless Compute Primitive，其中除传统 Lambda。

Functions 外，还出现了 Lambda MicroVMs 等新的运行形态。

但对本项目来说：CLF-C02 核心 + 719 题题库。

仍然主要围绕经典：Lambda。

Function、Event、Trigger、Serverless、Automatic Scaling、Pay-per-use。

展开。

因此本章把 Lambda。

Function 作为考试和基础架构学习主线。

不要因为 AWS 产品继续演化，就把旧题里的：

```text
Lambda = Serverless Function
```

理解完全推翻。

正确做法是区分：当前产品完整形态 vs CLF-C02 核心考察抽象。

---

---

## 8-★★★★★-计算模式与责任边界对比

### 8.1-Lambda-vs-Fargate

二者都常被称作 Serverless Compute。

但运行单元不同。

| 对比 | AWS Lambda | AWS Fargate |
|---|---|---|
| 主要运行单元 | Function | Container |
| 典型模型 | Event-driven | Long-running Container / Service / Job |
| 需要 Container Image 吗 | 不一定 | 是 Container Workload |
| 是否自己管 Server | 否 | 否 |
| 编排 | Lambda 自身函数执行模型 | 通常配 ECS / EKS |
| 适合 | API、事件处理、自动化、短任务 | 容器服务、微服务、容器 Job |

一句话：

```text
想运行函数
→ Lambda

想运行容器但不管服务器
→ Fargate
```

---

### 8.2-EC2-vs-Fargate-vs-Lambda

可以用“你想控制到哪一层”理解。

```text
EC2
你管理：
OS
Runtime
Application
Scaling configuration
大量 Server Operations

Fargate
你管理：
Container Image
Application
Container-level configuration

Lambda
你管理：
Function Code
Application Logic
```

抽象程度：

```text
低                                              高
│                                                │
EC2 ───────── Container on EC2 ───── Fargate ─── Lambda
│                                                │
控制更多                                      管理更少
```

但不能理解成：

```text
抽象越高 = 永远越好
```

抽象越高通常意味着更省运维。

同时也可能意味着运行模型约束更多、底层控制更少。

---

### 8.3-Shared-Responsibility：管理责任如何上移？

这可以和 AWS Shared Responsibility Model 联系起来。

#### 8.3.1-自建机房

你管理：Physical Hardware、Hypervisor、OS、Runtime、Application、Data。

---

#### 8.3.2-EC2

AWS 管：Physical Infrastructure、Hypervisor。

你仍然管：Guest OS、Patch、Runtime、Application、Data。

---

#### 8.3.3-Container-on-ECS-+-EC2

AWS / ECS 帮助管理：Container Orchestration Control。

你仍管理：EC2 Fleet、OS、Container Image、Application。

---

#### 8.3.4-ECS/EKS-+-Fargate

AWS 进一步管理：Server Fleet、Capacity、Host OS、Container Compute。

你主要管理：Container、Application、Data、Permissions、Configuration。

---

#### 8.3.5-Lambda

AWS 再进一步管理：Server、OS、Runtime Infrastructure、Scaling Infrastructure、Execution Environment。

你主要关注：Function Code、Permissions、Application Configuration、Data。

这就是：Higher-level Managed Service。

带来的核心价值之一。

---

---

## 9-★★★★★-GlobalShop应用运行平台

### 9.1-Application-Platform：应用运行平台是什么？

Application Platform，中文为：应用运行平台。

它位于：

```text
Application
      ↑
Platform
      ↑
Infrastructure
```

平台帮助你处理：Deployment、Runtime、Scaling、Health、Environment、Configuration。

在 AWS 基础考试中，Elastic Beanstalk 是非常典型的 Managed Application Platform。

---

### 9.2-Elastic-Beanstalk-与本章的关系

Elastic Beanstalk 已在 C2-02 正式讲过。

这里只把它放回 Compute 抽象层对比。

```text
EC2
→ “给我 Server”

ECS / EKS
→ “帮我编排 Container”

Fargate
→ “Container 要运行，但 Server 不想管”

Lambda
→ “我要运行 Function”

Elastic Beanstalk
→ “这是 Web Application，帮我建立常见运行环境”
```

Beanstalk 底层可能使用：EC2、Auto Scaling、Load Balancer、CloudWatch。

它不是“另一种虚拟化技术”。

而是更高层的应用部署与运行平台。

---

### 9.3-GlobalShop：什么时候用-ECS？

假设 GlobalShop 已经把业务拆成微服务：Product、Order、Inventory、Payment、Logistics。

团队希望：使用 Docker、AWS 原生编排、不需要 Kubernetes 生态。

可以考虑：

```text
                ALB
                 │
       ┌─────────┼─────────┐
       ▼         ▼         ▼
   ECS Service ECS Service ECS Service
    Product      Order      Inventory
       │          │          │
       └──────────┴──────────┘
                  │
              Fargate
```

---

### 9.4-GlobalShop：什么时候用-EKS？

如果平台团队已经统一使用 Kubernetes：Kubernetes YAML、Helm、GitOps、Kubernetes Operators。

并希望在 AWS 继续使用同一套 Kubernetes 生态：

```text
               ALB
                │
                ▼
              EKS
                │
       ┌────────┼────────┐
       ▼        ▼        ▼
     Pod      Pod      Pod
   Product   Order   Inventory
```

这时 EKS 更自然。

---

### 9.5-GlobalShop：什么时候用-Lambda？

例如商品图片上传：

```text
Merchant
  │
  ▼
S3
  │ event
  ▼
Lambda
  │
  ├── Resize
  ├── Watermark
  └── Thumbnail
```

这是：事件来了才需要运行。

不需要24 小时保持一个 Server 进程等待。

---

### 9.6-GlobalShop：现代系统往往不是“四选一”

真实系统常常同时存在：EC2、ECS、EKS、Fargate、Lambda。

例如：

```text
GlobalShop
│
├── Legacy ERP
│   └── EC2
│
├── Product Microservices
│   └── ECS + Fargate
│
├── Data Platform
│   └── EKS
│
└── Event Processing
    └── Lambda
```

所以真正的问题不是

> 哪个 AWS Compute 服务“最强”？

而是 

> 当前 Workload 的运行模型是什么？

---

## 本篇概述

- 本篇梳理了Serverless与Lambda相关的核心知识、适用场景与判断要点。
- 本篇梳理了计算模式与责任边界对比相关的核心知识、适用场景与判断要点。
- 本篇梳理了GlobalShop应用运行平台相关的核心知识、适用场景与判断要点。

[返回本章总述](./C2-03-00-章节总述.md)｜[查看本章概述](./C2-03-99-章节概述.md)

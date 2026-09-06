---
id: 07-高频易混概念-1-EC2-vs-AMI-等
sidebar_position: 7
---

# C2-02-07-高频易混概念

> 本篇是《C2-02-EC2与基础计算服务》的第7个分篇，主要包含：高频易混概念-1-EC2-vs-AMI、高频题型-需求-→-答案、本章必须真正记住的关系、考前压缩版、当前-AWS-与旧题库需要特别注意的更新。

## 13-高频易混概念-1：EC2-vs-AMI

```text
EC2 Instance
→ 真正在运行的虚拟服务器

AMI
→ 创建服务器的镜像模板
```

类比：

```text
AMI
≈ Windows 安装镜像 + 预装软件模板

EC2 Instance
≈ 真正安装运行起来的一台机器
```

---

### 13.1-高频易混概念-2：AMI-vs-Launch-Template

```text
AMI
→ 机器里面装什么

Launch Template
→ 整台 EC2 应该怎么 Launch
```

Launch Template 可以引用：AMI。

但两者不是同一个东西。

---

### 13.2-高频易混概念-3：Auto-Scaling-vs-Load-Balancer

```text
Auto Scaling
→ 有多少台机器

Load Balancer
→ 请求发给哪台机器
```

非常重要。

---

### 13.3-高频易混概念-4：Scalability-vs-Elasticity

如果 GlobalShop：

```text
20 EC2
→ 300 EC2
```

说明系统具备：Scalability。

即：

> 能承载更大规模。

如果

```text
20
↓
300
↓
20
```

随着需求自动变化：Elasticity。

更突出。

---

### 13.4-高频易混概念-5：EBS-vs-Instance-Store

```text
EBS
→ Persistent

Instance Store
→ Ephemeral
```

如果题目说：temporary high-speed local storage。

优先考虑：Instance Store。

如果是：persistent block storage for EC2。

优先：EBS。

---

### 13.5-高频易混概念-6：Security-Group-vs-IAM-Role

这两个都是 Security，但解决完全不同的问题。

```text
Security Group

谁能通过网络访问 EC2？
```

例如：

```text
允许 ALB → EC2:8080
```

而：

```text
IAM Role

EC2 运行的 Application 能调用哪些 AWS API？
```

例如：

```text
EC2
→ s3:GetObject
```

所以：

```text
Network Access
→ Security Group

AWS API Permission
→ IAM Role
```

---

### 13.6-高频易混概念-7：On-Demand-vs-Spot

```text
On-Demand

没有长期承诺
正常使用 Capacity
不因为 Spot reclaim 而被 AWS 中断
```

vs

```text
Spot

便宜很多
使用 spare capacity
可能被中断
```

---

### 13.7-高频易混概念-8：Savings-Plans-vs-Capacity-Reservation

```text
Savings Plans
→ Cost

Capacity Reservation
→ Capacity
```

一道题如果说：

> “公司必须确保活动当天在特定 AZ 一定能启动所需 EC2。”

核心不是便宜，而是 capacity assurance。

因此：Capacity Reservation。

方向更准确。

---

### 13.8-高频易混概念-9：Dedicated-Host-vs-Dedicated-Instance

```text
Dedicated Instance
→ dedicated hardware isolation
= 我需要“专用硬件”，但不关心具体是哪台物理机。

Dedicated Host
→ dedicated physical server
→ 更多 Host visibility/control
→ licensing
= 我需要“一整台可识别、可控制的物理 Host”，
  尤其用于 BYOL（Bring Your Own License） / server-bound licensing。
```

看到：existing server-bound license。

重点考虑：Dedicated Host。

---

### 13.9-高频易混概念-10：EC2-vs-Elastic-Beanstalk

```text
EC2
→ Infrastructure / VM

Elastic Beanstalk
→ Application deployment abstraction
```

Beanstalk 底层可能仍然帮你创建：EC2、ELB、Auto Scaling。

因此不是竞争关系，而是。

```text
Beanstalk
     ↓
uses
     ↓
EC2 / ELB / Auto Scaling
```

---

---

## 14-高频题型：需求-→-答案

### 14.1-场景-1

Short-term、Unpredictable、No long-term commitment。

答案方向：On-Demand。

---

### 14.2-场景-2

Long-term、Stable compute usage、Want discount。

当前架构思维：Savings Plans。

旧题 / 指定 EC2 RI 语境：Reserved Instances。

---

### 14.3-场景-3

Interruptible、Fault tolerant、Lowest cost。

答案：Spot Instances。

---

### 14.4-场景-4

Existing server-bound license、Dedicated physical server。

答案：Dedicated Host。

---

### 14.5-场景-5

Must guarantee EC2 capacity、specific AZ。

答案：On-Demand Capacity Reservation。

---

### 14.6-场景-6

Automatically add EC2、when CPU increases。

答案：EC2 Auto Scaling。

---

### 14.7-场景-7

Distribute HTTP traffic、across EC2。

答案：Application Load Balancer。

---

### 14.8-场景-8

High-performance TCP / UDP。

答案方向：Network Load Balancer。

---

### 14.9-场景-9

EC2 securely accesses S3、without hard-coded credentials。

答案：IAM Role。

---

### 14.10-场景-10

Temporary local EC2 storage。

答案：Instance Store。

---

---

## 15-GlobalShop-最终计算层案例

正常情况：

```text
Users
  │
  ▼
 ALB
  │
 ┌┴───────────────────────────┐
 ▼                            ▼
AZ-A                          AZ-B
 │                             │
 ▼                             ▼
EC2                           EC2
 │                             │
 └──────── Auto Scaling ───────┘
```

每台 EC2：

```text
AMI
+
Instance Type
+
EBS
+
Security Group
+
IAM Role
+
User Data
```

监控：

```text
EC2
 │
 ▼
CloudWatch
 │
 ▼
Auto Scaling
```

访问 AWS Resource：

```text
EC2
 │
 │ IAM Role
 ▼
S3 / DynamoDB / Other AWS APIs
```

流量高峰：

```text
20 EC2
↓
300 EC2
```

高峰结束：

```text
300
↓
20
```

后台可中断计算任务：AWS Batch + Spot。

这就是一个比较完整的 AWS 基础计算体系。

---

### 15.1-本章必须真正记住的关系

不要把 EC2 学成：

```text
EC2 = 云服务器
```

而应该形成下面这张关系图：

```text
                       Compute
                          │
                          ▼
                         EC2
                          │
        ┌─────────────────┼─────────────────┐
        │                 │                 │
        ▼                 ▼                 ▼
       AMI          Instance Type         Storage
   怎么启动           多大机器          EBS / Store
        │
        ▼
Launch Template
        │
        ▼
Auto Scaling
有多少台 Instance
        │
        ▼
       ELB
请求发给哪一台
        │
        ▼
    Security Group
网络允许谁访问
        │
        ▼
      IAM Role
Instance 可以访问哪些 AWS API
        │
        ▼
     CloudWatch
监控运行状态与指标
```

---

[返回本章总述](./00-总述.md)｜[查看本章概述](./99-概述.md)

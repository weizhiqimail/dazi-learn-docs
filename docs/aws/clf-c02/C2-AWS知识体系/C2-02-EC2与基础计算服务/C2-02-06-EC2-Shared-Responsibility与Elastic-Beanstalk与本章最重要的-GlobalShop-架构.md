---
id: C2-02-06-EC2-Shared-Responsibility与Elastic-Beanstalk与本章最重要的-GlobalShop-架构
sidebar_position: 6
---

# C2-02-06-EC2-Shared-Responsibility与Elastic-Beanstalk与本章最重要的-GlobalShop-架构

> 本篇是《C2-02-EC2与基础计算服务》的第6个分篇，主要包含：EC2-Shared-Responsibility、Elastic-Beanstalk、本章最重要的-GlobalShop-架构。

## 10-★★★★★-EC2-Shared-Responsibility

**Shared Responsibility Model**：责任共担模型。

这里不要背一句：AWS 负责云、客户负责云中。

而要真正放到 EC2 看。

---

### 10.1-AWS-负责什么？

例如：Data Center、Physical Building、Power、Cooling、Physical Server、Physical Network、Underlying infrastructure。

这些客户不负责。

---

### 10.2-客户负责什么？

EC2 属于相对底层的计算服务。

所以客户通常仍然负责：Guest OS、OS Patch、Application、Application Configuration、IAM Permission、Security Group、Data、Encryption choices、Installed Software。

也就是说：EC2。

不像一个完全 Serverless 服务。

你得到服务器以后：

> 操作系统和应用层面的安全责任很大一部分仍然属于客户。

---

### 10.3-GlobalShop-EC2-安全责任

例如：

```text
AWS：
修坏掉的物理 CPU

GlobalShop：
更新 Ubuntu security patch
修 Node.js 漏洞
设置 Security Group
控制 IAM Role
保护用户数据
```

如果 GlobalShop 自己：开放 0.0.0.0/0:22。

让全世界都能 SSH：这不能怪 AWS。

Security Group 是 AWS 提供的工具，但如何配置属于客户责任的一部分。

([AWS Documentation](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-security-groups.html))

---

---

## 11-★★★★-Elastic-Beanstalk

正式名称：**Beanstalk**。

字面是：

> 豆茎

名字来自“快速向上生长”的形象。

技术上可以把它理解成：

> AWS 帮你把 Web Application 的 EC2、Load Balancer、Scaling、Health Monitoring 等基础设施组织起来。

---

### 11.1-为什么需要-Elastic-Beanstalk？

直接使用 EC2 时：开发者可能要处理：EC2、AMI、Auto Scaling、ELB、Deployment、Health Check、Configuration。

但很多开发者只想：

```text
我有一个 Java / Node.js / Python Web App

请帮我部署起来。
```

于是：

```text
Application Code
       │
       ▼
Elastic Beanstalk
       │
       ├── EC2
       ├── Load Balancing
       ├── Auto Scaling
       └── Health Monitoring
```

AWS 官方目前仍然如此描述 Elastic Beanstalk。

([AWS Documentation](https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/Welcome.html))

---

### 11.2-Elastic-Beanstalk-不是-Serverless

非常容易产生误解。

因为开发者不用自己手动创建那么多基础设施。

不代表：底层没有 EC2。

恰恰相反，Elastic Beanstalk 会为你的环境 Provision EC2、Load Balancer 等资源。

所以可以理解为：

```text
Elastic Beanstalk
=
Higher-level application deployment platform

底层仍可能是：
EC2 + ELB + Auto Scaling
```

---

### 11.3-Elastic-Beanstalk-是否另外收费？

当前 AWS 官方：

> Elastic Beanstalk 本身没有额外服务费，主要为底层实际使用的 AWS Resource 付费。

([AWS Documentation](https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/Welcome.html))

例如：EC2、Load Balancer、Storage、Data Transfer。

仍然正常收费。

---

### 11.4-EC2-vs-Elastic-Beanstalk

```text
EC2

你：
“给我一台服务器，
剩下很多东西我自己做。”
```

vs

```text
Elastic Beanstalk

你：
“这是我的应用，
帮我建立并管理常见运行环境。”
```

所以：

```text
控制能力
EC2 > Elastic Beanstalk

运维抽象程度
Elastic Beanstalk > EC2
```

---

### 11.5-★★★-Amazon-Lightsail

正式名称：它的核心定位不是比 EC2 更强大的企业级服务器，而是。

> 更简单、更容易入门、更可预测价格的 AWS 应用 / 网站运行方式。

Lightsail 把Virtual Server、Storage、Database、Load Balancer、Static IP、DNS、CDN、Snapshot等常见能力组合成相对简单的体验。

([AWS Documentation](https://docs.aws.amazon.com/lightsail/latest/userguide/what-is-amazon-lightsail.html))

---

### 11.6-Lightsail-适合什么？

例如：个人网站、WordPress、小型公司网站、简单 Web Application、Prototype。

特点：simple、predictable monthly pricing、easy to start。

如果题目强调：简单网站、不想处理复杂 AWS 配置、固定 / 可预测套餐。

Lightsail 值得重点考虑。

---

### 11.7-EC2-vs-Lightsail

```text
Lightsail
→ 简化体验
→ 面向较简单使用场景
→ Bundled resources / predictable pricing

EC2
→ 灵活性高
→ 企业级复杂架构能力强
→ 网络、实例、扩缩容等配置更细
```

不要理解成：Lightsail 不是 AWS。

它仍然是 AWS Service。

---

### 11.8-★★★-AWS-Batch

正式名称：**Batch**：批处理。

所谓 Batch Processing：

> 不是持续实时响应用户请求，而是提交一批 Job，然后由系统安排资源运行。

例如：100 万张图片、需要重新生成缩略图不是用户每点击一下才处理。

而是。

```text
Job Queue
   │
   ▼
Batch Processing
   │
   ├── Job 1
   ├── Job 2
   ├── Job 3
   └── ...
```

---

### 11.9-AWS-Batch-为什么存在？

如果自己实现 Batch Platform：你要处理：Job Queue、Scheduling、Compute Provisioning、Scaling、Resource Allocation、Retry、Container Runtime。

AWS Batch 帮你处理很多底层调度和 Capacity 管理工作。

AWS 当前将 Batch 定义为 Fully Managed Batch Computing Service，可以根据提交的 Job 自动 Provision 计算资源，并可运行在 EC2、Fargate、ECS/EKS 等计算体系上。

([AWS Documentation](https://docs.aws.amazon.com/batch/latest/userguide/what-is-batch.html))

---

### 11.10-GlobalShop-AWS-Batch-场景

例如每天凌晨：

```text
1 亿商品
↓
重新计算推荐特征
↓
生成价格统计
↓
生成图片缩略图
```

可以：

```text
Jobs
  │
  ▼
AWS Batch
  │
  ├── EC2
  ├── Spot
  └── Fargate
```

如果任务可以中断并重试：Batch + Spot。

往往是非常典型的成本优化组合。

---

### 11.11-EC2、Beanstalk、Lightsail、Batch-的定位对比

| 服务                | 核心问题                                   |
| ----------------- | -------------------------------------- |
| EC2               | 我要虚拟服务器                                |
| Elastic Beanstalk | 我要快速部署 Web Application，并让 AWS 帮我管理常见环境 |
| Lightsail         | 我要简单、容易使用、价格相对可预测的网站 / 小型应用平台          |
| AWS Batch         | 我要运行大规模批处理 Job                         |

---

---

## 12-本章最重要的-GlobalShop-架构

现在把前面的内容放到一张图里：

```text
                        Global Users
                              │
                              ▼
                         CloudFront
                              │
                              ▼
                             ALB
                              │
               ┌──────────────┴──────────────┐
               │                             │
              AZ-A                          AZ-B
               │                             │
        ┌──────┴──────┐              ┌──────┴──────┐
        ▼             ▼              ▼             ▼
      EC2            EC2            EC2            EC2
        │             │              │             │
        └──────── Auto Scaling Group ───────────────┘
                              │
                Launch Template
                              │
                ┌─────────────┼─────────────┐
                ▼             ▼             ▼
               AMI      Instance Type   User Data
                              │
                              ▼
                         IAM Role
                              │
                    ┌─────────┼─────────┐
                    ▼         ▼         ▼
                   S3        RDS     CloudWatch
```

这张图可以解释本章绝大多数核心知识。

---

### 12.1-一次-EC2-创建过程

假设 GlobalShop 新建 Product Server。

第一步：选择 Region、Tokyo、ap-northeast-1。

第二步：选择 AMI、Amazon Linux + GlobalShop Application。

第三步：选择 Instance Type、General Purpose。

第四步：配置 Storage、EBS。

第五步：配置 Network、VPC / Subnet。

第六步：配置 Security Group。

第七步：绑定 IAM Role。

第八步：

配置 User Data。

然后：

```text
Launch
   ↓
pending
   ↓
running
```

这就得到一台实际的：EC2 Instance。

---

### 12.2-从一台-EC2-到生产系统

学习 EC2 最容易犯的错误是：

> 学完以后脑子里只有“一台云服务器”。

真正 AWS 架构应该继续往前走：

```text
Single EC2
   │
   ▼
Single Point of Failure
   │
   ▼
Multiple EC2
   │
   ▼
Multi-AZ
   │
   ▼
Load Balancer
   │
   ▼
Auto Scaling
   │
   ▼
CloudWatch Metrics
```

最终才形成：Scalable、Elastic、Highly Available。

的计算层。

---

## 本篇概述

- 本篇梳理了EC2-Shared-Responsibility相关的核心知识、适用场景与判断要点。
- 本篇梳理了Elastic-Beanstalk相关的核心知识、适用场景与判断要点。
- 本篇梳理了本章最重要的-GlobalShop-架构相关的核心知识、适用场景与判断要点。

[返回本章总述](./C2-02-00-章节总述.md)｜[查看本章概述](./C2-02-99-章节概述.md)

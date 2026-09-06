---
id: 08-GlobalShop-最终计算层案例
sidebar_position: 8
---

# C2-02-08-GlobalShop-最终计算层案例

> 本篇是《C2-02-EC2与基础计算服务》的第8个分篇，主要包含：GlobalShop-最终计算层案例。

## 15-GlobalShop-最终计算层案例

### 15.1-GlobalShop

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

### 15.2-考前压缩版

只有完成前面的理解以后，才值得记下面这些。

```text
Virtual Server
→ EC2

Server Image
→ AMI

CPU / Memory Configuration
→ Instance Type

Persistent Block Storage
→ EBS

Temporary Local Storage
→ Instance Store

Virtual Firewall
→ Security Group

EC2 Access AWS Service
→ IAM Role

Startup Script
→ User Data

Static Public IPv4
→ Elastic IP

Automatically Add / Remove EC2
→ EC2 Auto Scaling

Distribute Requests
→ Elastic Load Balancing

HTTP / HTTPS / Layer 7
→ ALB

TCP / UDP / Layer 4
→ NLB

No Long-term Commitment
→ On-Demand

Long-term Compute Discount
→ Savings Plans

Traditional EC2 Commitment Discount
→ Reserved Instances

Interruptible / Fault Tolerant
→ Spot

Dedicated Physical Server
→ Dedicated Host

Capacity Assurance
→ Capacity Reservation

Deploy Web App with Managed Environment
→ Elastic Beanstalk

Simple Website / Predictable Package
→ Lightsail

Batch Jobs
→ AWS Batch
```

---

---

### 15.3-当前-AWS-与旧题库需要特别注意的更新

#### 15.3.1-[UPDATED]-1.-Savings-Plans-与-Reserved-Instance(RI)

题库里：

```text
长期稳定 EC2
→ Reserved Instances
```

仍然会大量出现。

当前 AWS：AWS 已明确更推荐 Savings Plans因此学习时必须同时知道两套语境。

([AWS Documentation](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-reserved-instances.html))

---

#### 15.3.2-[UPDATED]-2.-Elastic-IP/Public-IPv4

旧资料可能写：

```text
运行中的 EC2 绑定 EIP
→ 不收费
```

当前不能这样记。

目前 AWS 对 Public IPv4 普遍收费。

([AWS Documentation](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/using-instance-addressing.html))

---

#### 15.3.3-[UPDATED]-3.-Launch-Configuration

旧 Auto Scaling 教材经常：

```text
Launch Configuration
→ ASG
```

当前应该以：Launch Template。

为主。

Launch Configuration 已经属于 Legacy Compatibility 路线，新账号的创建能力已经受到严格限制。

([AWS Documentation](https://docs.aws.amazon.com/autoscaling/ec2/userguide/create-auto-scaling-groups-launch-configuration.html))

---

#### 15.3.4-[UPDATED]-4.-Instance-Store

不要记：

```text
任何 EC2 Restart
→ Instance Store 丢失
```

正确区分：

```text
Reboot
→ 通常保留

Stop / Start
→ 原 Host Instance Store 数据丢失

Terminate
→ 不能把 Instance Store 当持久存储
```

([AWS Documentation](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-instance-lifecycle.html))

### 15.4-AWS-官方资料

- Amazon EC2：[AWS 官方文档：What is Amazon EC2?](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/concepts.html)。
- EC2 Instance Types：[AWS 官方文档：EC2 Instance Type Specifications](https://docs.aws.amazon.com/ec2/latest/instancetypes/ec2-instance-type-specifications.html)。
- AMI：[AWS 官方文档：Amazon EC2 AMI Lifecycle](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ami-lifecycle.html)。
- EC2 Lifecycle：[AWS 官方文档：EC2 Instance State Changes](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-instance-lifecycle.html)。
- Security Group：[AWS 官方文档：Security Groups](https://docs.aws.amazon.com/vpc/latest/userguide/vpc-security-groups.html)。
- EC2 IAM Role：[AWS 官方文档：IAM Roles for Amazon EC2](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/iam-roles-for-amazon-ec2.html)。
- EC2 Auto Scaling：[AWS 官方文档：Amazon EC2 Auto Scaling](https://docs.aws.amazon.com/autoscaling/ec2/userguide/what-is-amazon-ec2-auto-scaling.html)。
- Elastic Load Balancing：[AWS 官方文档：Elastic Load Balancing](https://docs.aws.amazon.com/elasticloadbalancing/)。
- Reserved Instances：[AWS 官方文档：EC2 Reserved Instances](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-reserved-instances.html)。
- Savings Plans：[AWS 官方文档：Savings Plans](https://docs.aws.amazon.com/savingsplans/latest/userguide/what-is-savings-plans.html)。
- Spot Instances：[AWS 官方页面：EC2 Spot Instances](https://aws.amazon.com/ec2/spot/)
- Capacity Reservations：[AWS 官方文档：EC2 Capacity Reservations](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/capacity-reservation-overview.html)。
- Elastic Beanstalk：[AWS 官方文档：What is AWS Elastic Beanstalk?](https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/Welcome.html)。
- Amazon Lightsail：[AWS 官方文档：What is Amazon Lightsail?](https://docs.aws.amazon.com/lightsail/latest/userguide/what-is-amazon-lightsail.html)。
- AWS Batch：[AWS 官方文档：What is AWS Batch?](https://docs.aws.amazon.com/batch/latest/userguide/what-is-batch.html)

---

## 本篇概述

- 本篇梳理了AWS-官方资料相关的核心知识、适用场景与判断要点。

[返回本章总述](./00-总述.md)｜[查看本章概述](./99-概述.md)

---
id: 08-AWS-官方资料
sidebar_position: 8
---

# C2-02-08-AWS-官方资料

> 本篇是《C2-02-EC2与基础计算服务》的第8个分篇，主要包含：AWS-官方资料。

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

### 15.4-AWS-官方资料

Amazon EC2：[AWS 官方文档：What is Amazon EC2?](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/concepts.html)。

EC2 Instance Types：

[AWS 官方文档：EC2 Instance Type Specifications](https://docs.aws.amazon.com/ec2/latest/instancetypes/ec2-instance-type-specifications.html)。

AMI：

[AWS 官方文档：Amazon EC2 AMI Lifecycle](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ami-lifecycle.html)。

EC2 Lifecycle：

[AWS 官方文档：EC2 Instance State Changes](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-instance-lifecycle.html)。

Security Group：

[AWS 官方文档：Security Groups](https://docs.aws.amazon.com/vpc/latest/userguide/vpc-security-groups.html)。

EC2 IAM Role：

[AWS 官方文档：IAM Roles for Amazon EC2](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/iam-roles-for-amazon-ec2.html)。

EC2 Auto Scaling：

[AWS 官方文档：Amazon EC2 Auto Scaling](https://docs.aws.amazon.com/autoscaling/ec2/userguide/what-is-amazon-ec2-auto-scaling.html)。

Elastic Load Balancing：

[AWS 官方文档：Elastic Load Balancing](https://docs.aws.amazon.com/elasticloadbalancing/)。

Reserved Instances：

[AWS 官方文档：EC2 Reserved Instances](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-reserved-instances.html)。

Savings Plans：

[AWS 官方文档：Savings Plans](https://docs.aws.amazon.com/savingsplans/latest/userguide/what-is-savings-plans.html)。

Spot Instances：[AWS 官方页面：EC2 Spot Instances](https://aws.amazon.com/ec2/spot/)

Capacity Reservations：[AWS 官方文档：EC2 Capacity Reservations](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/capacity-reservation-overview.html)。

Elastic Beanstalk：

[AWS 官方文档：What is AWS Elastic Beanstalk?](https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/Welcome.html)。

Amazon Lightsail：

[AWS 官方文档：What is Amazon Lightsail?](https://docs.aws.amazon.com/lightsail/latest/userguide/what-is-amazon-lightsail.html)。

AWS Batch：

[AWS 官方文档：What is AWS Batch?](https://docs.aws.amazon.com/batch/latest/userguide/what-is-batch.html)

---

## 本篇概述

- 本篇梳理了AWS-官方资料相关的核心知识、适用场景与判断要点。

[返回本章总述](./00-总述.md)｜[查看本章概述](./99-概述.md)

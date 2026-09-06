---
id: C2-02-03-Security-Group与单台-EC2-为什么不够
sidebar_position: 3
---

# C2-02-03-Security-Group与单台-EC2-为什么不够

> 本篇是《C2-02-EC2与基础计算服务》的第3个分篇，主要包含：Security-Group、单台-EC2-为什么不够。

## 6-★★★★★-Security-Group

**Security Group**：安全组。

最简单的理解：

> EC2 等 VPC 资源前面的虚拟防火墙。

例如：

```text
Internet
   │
   │ HTTPS :443
   ▼
Security Group
   │
   ▼
 EC2
```

Security Group 控制：Inbound、Outbound。

即：谁可以进来、谁可以出去。

AWS 官方当前仍将 Security Group 定义为控制资源 Inbound / Outbound Traffic 的虚拟防火墙，并且 Security Group 是 Stateful。

([AWS Documentation](https://docs.aws.amazon.com/vpc/latest/userguide/vpc-security-groups.html))

---

### 6.1-Inbound/Outbound

**Inbound**：入站流量。

例如：

```text
User
   ↓
EC2
```

---

**Outbound**：出站流量。

例如：

```text
EC2
 ↓
Internet / Other Service
```

GlobalShop：

```text
ALB Security Group
允许：
Internet → 443

EC2 Security Group
允许：
ALB → 8080
```

而不是

```text
Internet
→ 直接访问 EC2:8080
```

---

### 6.2-Stateful

**Stateful**：有状态。

假设 Security Group 允许：

```text
Client
→ EC2:443
```

EC2 返回响应：

```text
EC2
→ Client
```

这个响应流量会被允许返回，不需要再人为写一条完全对应的反向规则。

这是 Security Group 与 Network ACL 后面非常重要的区别。

```text
Security Group
→ Stateful

Network ACL
→ Stateless
```

Network ACL 会在 C2-06 详细讲。

([AWS Documentation](https://docs.aws.amazon.com/vpc/latest/userguide/vpc-network-acls.html))

---

### 6.3-★★★★★-IAM-Role-for-EC2

正式名称：**IAM**：Identity and Access Management，即身份与访问管理。

完整 IAM 在 C2-08。

这里重点解释 EC2 为什么需要 IAM Role。

---

### 6.4-EC2-访问-S3-的错误方法

假设：GlobalShop EC2。

需要读取：S3 Product Images Bucket。

一种非常危险的方式：

```javascript
AWS_ACCESS_KEY_ID = "AKIA..."
AWS_SECRET_ACCESS_KEY = "..."
```

写到：代码、.env、配置文件、AMI。

这是非常差的做法。

因为。

```text
Credential 泄漏
        ↓
攻击者得到长期 Access Key
        ↓
访问 AWS Resource
```

---

### 6.5-正确方式：IAM-Role

```text
EC2
 │
 │ assumes / uses
 ▼
IAM Role
 │
 │ temporary credentials
 ▼
S3
```

AWS 专门设计 EC2 IAM Role 来解决：

> 应用运行在 EC2 上，但又需要调用 AWS API 时，如何避免在 Instance 中保存长期 Credentials。

Instance 中的应用可以取得临时 Credentials，权限来自绑定的 IAM Role。

([AWS Documentation](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/iam-roles-for-amazon-ec2.html))

---

### 6.6-GlobalShop-示例

例如：

```text
GlobalShop Product EC2
        │
        │ IAM Role:
        │ Allow s3:GetObject
        ▼
ProductImagesBucket
```

EC2 不需要保存：长期 Access Key，而是。

```text
IAM Role
     ↓
temporary credentials
     ↓
访问 S3
```

这也是题库 Q4 的直接考点：

```text
EC2 如何安全访问 S3？

→ IAM Role
```

---

### 6.7-★★★★-User-Data

**User Data**：用户数据。

名字看起来很奇怪。

它不是用户的订单数据，而是。

> 创建 EC2 时交给 Instance 的启动配置或启动脚本。

例如：

```bash
#!/bin/bash
dnf install nginx -y
systemctl start nginx
```

Instance 启动以后执行这些命令。

---

### 6.8-User-Data-为什么存在？

假设每次启动 EC2 都需要：安装软件、下载配置、启动服务、注册监控。

如果人工操作：

```text
创建 1 台
→ SSH
→ 安装

创建 100 台
→ SSH 100 次
```

显然不可行。

于是：AMI + User Data。

配合使用。

例如：

```text
AMI
→ 提供基础系统

User Data
→ 在 Launch 时进行最后的动态配置
```

AWS 官方也明确给出了“通用 AMI + User Data 在 Launch 时进行个性化配置”的模式。

([AWS Documentation](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-instance-metadata.html))

---

### 6.9-AMI-vs-User-Data

```text
AMI
=
服务器“基础模板”

User Data
=
服务器启动时执行的初始化信息
```

例如 GlobalShop：

```text
AMI:
Linux
Node
Nginx
Application

User Data:
ENV=production
REGION=ap-northeast-1
启动 Product Service
```

---

### 6.10-★★★-Instance-Metadata

**Metadata**：元数据。

可以理解为：

> 描述这台 Instance 自身的信息。

例如：Instance ID、Hostname、Security Group、Instance identity等。

EC2 内部的程序可以通过：**Instance Metadata Service**：实例元数据服务。

获取相关信息。

([AWS Documentation](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-instance-metadata.html))

---

### 6.11-Metadata-不要理解成业务数据

```text
商品价格
订单信息
用户地址

≠ Metadata
```

Metadata 是：“关于这台 EC2 自己的信息”

---

### 6.12-★★★-Elastic-IP

**Elastic IP Address**。

简称：**EIP**：弹性 IP 地址。

它是一种：

> 可以保留在 AWS Account 中并重新关联到不同资源的静态公有 IPv4 地址。

普通 Public IPv4 可能因为 Instance Stop / Start 等生命周期变化而改变。

而 Elastic IP 可以保留并重新映射。

([AWS Documentation](https://docs.aws.amazon.com/en_en/AWSEC2/latest/UserGuide/elastic-ip-addresses-eip.html))

---

### 6.13-为什么叫-Elastic-IP？

并不是说 IP 会自动变大变小，而是 IP 与某一台物理服务器不必永久绑定。

可以：

```text
EIP
 │
 ▼
EC2 A

EC2 A Failure

EIP
 │
 ▼
EC2 B
```

因此具备一定“重新映射”的弹性。

---

### 6.14-[UPDATED]-Public-IPv4-收费规则

这一点旧教材非常容易过时。

当前 AWS：

> 所有 Public IPv4 Address 都会收费，包括运行中 EC2 所使用的 Public IPv4 和 Elastic IP。

因此不要再背旧规则：

```text
EIP 绑定运行中的 EC2
→ 免费
```

当前已经不成立。

([AWS Documentation](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/using-instance-addressing.html))。

但 CLF 层面更重要的技术区别仍然是：

```text
普通 Public IPv4
→ 不应视为永久固定地址

Elastic IP
→ Static Public IPv4
```

---

---

## 7-单台-EC2-为什么不够？

现在假设 GlobalShop：

```text
User
 ↓
EC2
```

这有三个严重问题。

---

### 7.1-问题-1：性能

如果

```text
100 users
→ 没问题

1,000,000 users
→ EC2 扛不住
```

---

### 7.2-问题-2：Single-Point-of-Failure

**SPOF**：Single Point of Failure，即单点故障。

如果唯一的 EC2：

```text
EC2
 X
```

整个系统：DOWN

---

### 7.3-问题-3：流量变化

平时：20 EC2 的能力够用。

双十一：需要 300 EC2。

活动结束：又只需要 20。

如果始终运行 300 台 EC2，会严重浪费成本。

所以需要 Amazon EC2 Auto Scaling 根据业务负载自动调整 EC2 实例数量。

---

### 7.4-★★★★★-Amazon-EC2-Auto-Scaling

正式名称：**Amazon EC2 Auto Scaling**。

简称：通常写作 **EC2 Auto Scaling**，不要与服务统称 Auto Scaling 混淆。

中文：**Amazon EC2 自动扩缩**。

核心功能：

> 根据需求自动增加或减少 EC2 Instance 数量，并维护期望数量的 Instance。

例如：

```text
Normal
20 EC2

Traffic ↑
        ↓
50
        ↓
100
        ↓
300 EC2

Traffic ↓
        ↓
100
        ↓
50
        ↓
20 EC2
```

---

### 7.5-Scale-Out/Scale-In

**Scale Out**：横向增加实例。

```text
2 EC2
↓
4 EC2
↓
8 EC2
```

---

**Scale In**：横向减少实例。

```text
8 EC2
↓
4 EC2
↓
2 EC2
```

不要和：Scale Up / Scale Down。

混淆。

后者一般指：单台机器变大 / 变小。

---

### 7.6-Auto-Scaling-Group

简称：**Auto Scaling Group**：自动扩缩容组。

可以配置：Minimum Capacity、Desired Capacity、Maximum Capacity。

例如：

```text
Min = 20
Desired = 20
Max = 300
```

意思是：

```text
最少：
20

正常希望：
20

最多：
300
```

---

### 7.7-★★★★-Launch-Template

Auto Scaling 创建新 EC2 时必须知道：使用哪个 AMI？

什么 Instance Type？

什么 Security Group？

什么 User Data？

什么存储？

因此需要：= 启动模板。

当前 AWS 官方建议使用 Launch Template。

旧的 Launch Configuration 已经进入明显的历史兼容阶段，新 Account 已不能按旧方式创建 Launch Configuration，因此新教材应该把 **Launch Template** 作为主线。

([AWS Documentation](https://docs.aws.amazon.com/autoscaling/ec2/userguide/launch-templates.html))

---

### 7.8-Launch-Template-与-AMI-的关系

不要混淆：

```text
AMI
→ 操作系统 / 软件镜像

Launch Template
→ 如何创建整个 EC2 Instance 的配置模板
```

Launch Template 可以包含：AMI、Instance Type、Security Group、Key Pair、Storage、User Data、其他 Launch Parameters。

([AWS Documentation](https://docs.aws.amazon.com/autoscaling/ec2/userguide/create-your-first-auto-scaling-group.html))。

所以：

```text
Launch Template
        │
        ├── AMI
        ├── Instance Type
        ├── Security Group
        ├── User Data
        └── Storage
                │
                ▼
        Auto Scaling Group
                │
                ▼
             EC2
```

---

### 7.9-CloudWatch-+-Auto-Scaling

**Amazon CloudWatch**：AWS 的监控与可观测性服务之一。

完整内容放在 C2-10。

这里先理解：

```text
CloudWatch
   │
   │ Metric
   ▼
Auto Scaling
   │
   ▼
增加 / 减少 EC2
```

例如：

```text
CPU Utilization > 70%
持续一段时间
        ↓
Scale Out
```

或者：

```text
CPU Utilization < 20%
        ↓
Scale In
```

Amazon EC2 Auto Scaling 的 Dynamic Scaling 支持 Target Tracking、Step Scaling、Simple Scaling 等策略。

([AWS Documentation](https://docs.aws.amazon.com/autoscaling/ec2/userguide/as-scale-based-on-demand.html))

---

### 7.10-Target-Tracking

**Target Tracking Scaling**：目标跟踪扩缩容。

思想很像空调恒温器。

例如：

```text
目标 CPU
= 50%
```

系统尝试：

```text
CPU 太高
→ 增 EC2

CPU 太低
→ 减 EC2
```

目标是让整体指标尽量接近：50%。

AWS 官方也直接用 thermostat，也就是恒温器，来说明这种机制。

([AWS Documentation](https://docs.aws.amazon.com/autoscaling/ec2/userguide/as-scale-based-on-demand.html))

---

### 7.11-Auto-Scaling-不只是“性能功能”

它同时解决：Scalability、Elasticity、Availability、Cost Optimization。

例如：

```text
实例坏掉
↓
ASG 检测到
↓
创建 replacement instance
```

AWS 官方教程明确展示了：人为 Terminate Auto Scaling Group 中的 Instance 后，Auto Scaling 会检测并补充新的 Instance，以保持预期容量。

([AWS Documentation](https://docs.aws.amazon.com/autoscaling/ec2/userguide/create-your-first-auto-scaling-group.html))

---

### 7.12-只有-Auto-Scaling-还不够

现在有：EC2 1、EC2 2、EC2 3、EC2 4、...。

问题来了：

> 用户应该访问哪一台？

难道：

```text
user1 → EC2-1
user2 → EC2-2
user3 → EC2-3
```

由客户端自己决定？

不行。

因此需要 Elastic Load Balancing 提供统一访问入口，接收客户端请求，再把流量分发到健康的 EC2 实例。

下一篇将继续说明 ALB、NLB、健康检查以及 ELB 与 Auto Scaling 的配合。

---

## 本篇概述

- 本篇梳理了Security-Group相关的核心知识、适用场景与判断要点。
- 本篇梳理了单台-EC2-为什么不够？

相关的核心知识、适用场景与判断要点。

[返回本章总述](./C2-02-00-章节总述.md)｜[查看本章概述](./C2-02-99-章节概述.md)

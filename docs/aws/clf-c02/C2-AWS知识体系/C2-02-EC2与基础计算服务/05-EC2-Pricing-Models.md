---
id: 05-EC2-Pricing-Models
sidebar_position: 5
---

# C2-02-05-EC2-Pricing-Models

> 本篇是《C2-02-EC2与基础计算服务》的第5个分篇，主要包含：EC2-Pricing-Models。

## 9-★★★★★-EC2-Pricing-Models

这是 CLF-C02 极高频内容。

首先要知道：

> “EC2 是什么服务器”和“你采用什么方式付钱”是两个问题。

例如：同一个 EC2 Instance Type。

可以根据使用模式采用不同的购买/计费方式。

常见考点：On-Demand、Reserved Instances、Spot Instances、Savings Plans、Dedicated Hosts、Dedicated Instances、Capacity Reservations。

---

### 9.1-★★★★★-On-Demand-Instances

正式名称：**Amazon EC2 On-Demand Instances**。

常用名称：**On-Demand Instances**；AWS 官方没有要求使用固定英文缩写。

中文：**按需实例**。

字面意思：**按实际需求使用**，需要时启动，不需要时停止或终止。

```text
On Demand
=
按需求
需要就用
```

特点：无长期承诺、使用灵活、按实际运行计算。

当前 AWS 对 On-Demand 的核心描述仍是：

> 不需要预付或长期承诺，根据使用量付费。

([Amazon Web Services](https://aws.amazon.com/jp/ec2/pricing/))

---

### 9.2-On-Demand-适合什么？

典型：短期、实验、开发、测试、需求不确定、业务刚上线、无法预测长期用量。

GlobalShop 新 AI 商品功能：不知道用户会不会喜欢、不知道是否长期运行。

先：On-Demand。

很合理。

---

### 9.3-On-Demand-最大优点与问题

优点：Flexible、No long-term commitment。

问题：

> 如果你明知道某套服务器 24×7 连续运行几年，却始终全部使用 On-Demand，通常不是最经济的方案。

于是出现：Reserved Instances、Savings Plans。

---

### 9.4-★★★★★-Reserved-Instances

正式名称：**Amazon EC2 Reserved Instances**。

简称：**RI**。

中文：**预留实例**。

这里特别容易产生一个错误：

> RI 并不等于“另外创建了一种神奇的服务器”。

它首先是一种：Pricing / Billing mechanism。

也就是：

> 通过较长期承诺，换取相对 On-Demand 更低的价格。

---

### 9.5-Reserved-Instance(RI)-的期限

当前 EC2 Reserved Instances：1 year、3 years并存在：All Upfront、Partial Upfront、No Upfront等付款方式。

([AWS Documentation](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-reserved-instances.html))

---

### 9.6-Standard-vs-Convertible-Reserved-Instance(RI)

#### 9.6.1-Standard-Reserved-Instance

特点：折扣通常更高、灵活性相对较低

---

#### 9.6.2-Convertible-Reserved-Instance

**Convertible**：可转换的。

特点：折扣相对低一些、但可以 Exchange 到不同属性的 Convertible RI。

AWS 当前仍保留 Standard 和 Convertible 两种 Offering Class。

([AWS Documentation](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-reserved-instances.html))

---

### 9.7-Reserved-Instance(RI)-适合什么？

典型题目：stable workload、predictable workload、continuous workload、1 or 3 years。

例如 GlobalShop：

```text
商品核心 API

过去三年：
每天都要运行

预计未来三年：
仍然持续运行
```

那么就值得考虑采用长期折扣模型。

---

### 9.8-[UPDATED]-AWS-当前更推荐-Savings-Plans

这里必须把：题库知识。

与：当前 AWS。

分开。

旧题库经常把：

```text
长期稳定 EC2
→ Reserved Instances
```

作为标准答案。

这类历史考法仍然必须会。

但当前 AWS EC2 官方文档已经明确：

> AWS recommends Savings Plans over Reserved Instances.

即：

> 当前 AWS 更推荐 Savings Plans 作为简单且灵活的计算成本节省方式。

([AWS Documentation](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-reserved-instances.html))

因此不能把：

```text
RI
=
当前 AWS 一切长期 EC2 的默认最佳方案
```

写成绝对规则。

---

### 9.9-★★★★★-Savings-Plans

正式名称：**AWS Savings Plans**。

简称：通常直接写作 **Savings Plans**，没有统一的官方缩写。

中文：**节省计划**。

核心逻辑：

> 你承诺未来一定程度的计算使用量，AWS 给你较低价格。

不是承诺：必须永远运行 EC2 #123，而是承诺：一定程度的 $/hour compute usage。

期限同样主要是：1 year、3 years([AWS Documentation](https://docs.aws.amazon.com/savingsplans/latest/userguide/what-is-savings-plans.html))

---

### 9.10-Compute-Savings-Plans

**Compute Savings Plans**。

灵活性最大。

可覆盖：EC2、Fargate、Lambda，而且 EC2 可以在：Instance Family、Size、Region、OS、Tenancy等方面变化，仍可能继续享受对应 Savings Plans 优惠。

([Amazon Web Services](https://aws.amazon.com/savingsplans/compute-pricing/))。

例如：

```text
今天：
EC2 C Family

以后：
EC2 M Family

再以后：
Fargate

甚至：
Lambda
```

Compute Savings Plans 比传统固定配置的 RI 更灵活。

---

### 9.11-EC2-Instance-Savings-Plans

另一类：特点：针对某个 Region + 某个 Instance Family。

例如：Tokyo + M Family。

但：Size、OS、Tenancy、AZ。

具有一定灵活性。

相对于 Compute Savings Plans：灵活性更低、但折扣潜力更高。

AWS 当前页面给出的最高折扣数字分别约为：

```text
Compute Savings Plans
→ up to 66%

EC2 Instance Savings Plans
→ up to 72%
```

([Amazon Web Services](https://aws.amazon.com/savingsplans/compute-pricing/))。

不要把具体百分比作为永久不变的考试定理，更重要的是理解：

```text
Compute SP
→ 更灵活

EC2 Instance SP
→ 更绑定于特定 Region + Instance Family
```

---

### 9.12-Savings-Plans-不提供-Capacity-Reservation

这个区别非常重要：

```text
Savings Plans
→ 省钱

Capacity Reservation
→ 保证容量
```

Savings Plans 本身：NO capacity reservation AWS 官方 FAQ 明确说明这一点。

([Amazon Web Services](https://aws.amazon.com/savingsplans/faqs/))

---

### 9.13-★★★★★-Spot-Instances

**Spot**。

这里可以理解为：

> 使用 AWS 当前闲置的 EC2 Capacity。

AWS 用较大折扣把：unused EC2 capacity。

提供给客户。

目前官方仍宣传：up to 90% off相对于 On-Demand。

([Amazon Web Services](https://aws.amazon.com/ec2/spot/))

---

### 9.14-为什么-Spot-这么便宜？

因为这部分 Capacity：AWS 可能重新需要。

因此：AWS、可以 Interrupt 你的 Spot Instance。

这就是你用极低价格换来的条件。

---

### 9.15-Interrupt

**Interrupt**：中断。

Spot 最大考点：cheap、BUT、interruptible。

当前 AWS 一般会在中断 Spot Instance 前提供约两分钟的 Interruption Notice。

如果配置 Hibernate，则处理方式有所不同。

([AWS Documentation](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/spot-instance-termination-notices.html))

---

### 9.16-Spot-适合什么？

典型关键词：fault tolerant、stateless、flexible、batch、distributed、CI/CD、test、big data。

AWS 官方也明确列出了：stateless、fault-tolerant、flexible applications等典型用途。

([Amazon Web Services](https://aws.amazon.com/ec2/spot/))

---

### 9.17-GlobalShop-Spot-场景

例如：每天生成 500 万张商品缩略图。

任务可以拆成：Task 1、Task 2、Task 3、...、Task 100000。

某台 Spot EC2 被中断：Task 8273、失败。

重新交给另一台机器：Retry Task 8273。

没问题。

这就是：Fault Tolerant。

---

### 9.18-什么不适合-Spot？

例如：唯一一台订单主数据库，而且：

```text
一中断
→ 整个订单系统崩溃
```

就非常不适合直接依赖 Spot。

核心判断不是任务重要不重要，而是 任务能不能容忍 Instance 被中断？

---

### 9.19-Spot-的真正考试逻辑

看到：lowest cost + interruptible + fault tolerant。

首先想到：Spot。

看到：must not be interrupted。

就应该警惕：Spot。

通常不是答案。

---

### 9.20-★★★-Dedicated-Instance

**Dedicated Instance**：专用实例。

EC2 Instance 运行在：

> 专属于单一客户的硬件上。

也就是说，不与其他 AWS Account 的实例共享同一个物理 Host。

([Amazon Web Services](https://aws.amazon.com/ec2/pricing/dedicated-instances/))。

但是：Dedicated Instance。

并不代表你获得了：完整底层物理服务器的细粒度控制。

---

### 9.21-★★★★-Dedicated-Host

**Dedicated Host**：专用宿主机。

这里强调的是：Host。

也就是底层完整 Physical Server。

AWS 给你更强的：Visibility、Control、Placement control。

特别适合：Server-bound Software License、BYOL、Compliance。

等场景。

([Amazon Web Services](https://aws.amazon.com/ec2/pricing/dedicated-instances/))

---

### 9.22-Dedicated-Host-vs-Dedicated-Instance

可以记：

```text
Dedicated Instance
→ 关心“我的 Instance 不和别人共用硬件”

Dedicated Host
→ 关心“这整台 Physical Host 给我，并且我需要更强 Host 控制”
```

考试关键词：

```text
existing server-bound license
physical server visibility
socket/core licensing

→ Dedicated Host
```

---

### 9.23-★★★★-Capacity-Reservation

正式名称：**Amazon EC2 On-Demand Capacity Reservations**。

常用名称：**On-Demand Capacity Reservations** 或 **Capacity Reservations**。

中文：**按需容量预留**。

核心作用：在特定 Availability Zone 为 EC2 预留计算容量。

例如 GlobalShop 知道：双十一 20:00、一定需要 500 台特定 EC2。

最大的风险不是钱，而是 到时候该 AZ 没那么多 Capacity。

于是可以考虑：Capacity Reservation。

AWS 官方将它明确定位为“对特定 AZ 中 EC2 Capacity 的保证”。

([AWS Documentation](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/capacity-reservation-overview.html))

---

### 9.24-Capacity-Reservation-与-Savings-Plans-不要混

最核心的区别：

```text
Savings Plans
解决：
PRICE

Capacity Reservation
解决：
CAPACITY
```

即：有没有折扣？ vs 到时候有没有机器给我？

这是两个完全不同的问题。

---

### 9.25-Capacity-Reservation-与-Reserved-Instance(RI)-也不要简单等同

历史上 RI 的 Capacity Benefit 容易让教材写得混乱。

考试学习应该先抓住：

```text
Capacity Reservation
→ 专门解决 Capacity Assurance

Savings Plans
→ Pricing Discount

RI
→ 长期 EC2 Pricing Commitment，
   部分 Scope / 类型具有特定 Capacity 特性
```

AWS 当前官方也专门提供三者对比表，因为它们极容易混淆。

([AWS Documentation](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-capacity-reservations.html?refid=29e2f26a-7577-451e-9d4d-ed0416a17cd3))

---

### 9.26-EC2-购买模式决策树

```text
我要运行 EC2
     │
     ▼
需求是否短期 / 不确定？
     │
   Yes
     ▼
 On-Demand
```

如果长期稳定：

```text
长期稳定计算使用
     │
     ▼
希望降低 Compute Cost
     │
     ▼
Savings Plans
```

旧题 / 特定 RI 场景：

```text
稳定 EC2 配置
1 / 3 year
     │
     ▼
Reserved Instances
```

如果可中断：

```text
Fault-tolerant
Interruptible
     │
     ▼
Spot
```

如果要求特定时间保证 Capacity：

```text
Must have capacity
specific AZ
     │
     ▼
Capacity Reservation
```

如果要求整台物理服务器：

```text
Physical Host
License / Compliance
     │
     ▼
Dedicated Host
```

---

## 本篇概述

- 本篇梳理了EC2-Pricing-Models相关的核心知识、适用场景与判断要点。

[返回本章总述](./00-总述.md)｜[查看本章概述](./99-概述.md)

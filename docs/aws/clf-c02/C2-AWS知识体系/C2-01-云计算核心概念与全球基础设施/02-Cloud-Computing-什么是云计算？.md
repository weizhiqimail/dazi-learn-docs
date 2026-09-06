---
id: 02-Cloud-Computing-什么是云计算？
sidebar_position: 2
---

# C2-01-02-Cloud-Computing-什么是云计算？

> 本篇是《C2-01-云计算核心概念与全球基础设施》的第2个分篇，主要包含：Cloud-Computing-什么是云计算。

## 2-★★★★★-Cloud-Computing：什么是云计算？

**Cloud Computing**，中文为：**云计算**。

如果只把它理解成：

> “把服务器放到互联网上。”

是不够准确的。

更好的理解方式是：

> **把计算、存储、数据库、网络、安全等 IT 能力，从“企业提前购买并自己维护的硬件”，变成可以通过网络按需获取、快速调整、按照实际使用情况付费的服务。

**。

---

### 2.1-从-GlobalShop-的传统机房开始

假设 GlobalShop 还没有使用 AWS。

GlobalShop 有：用户系统、商品系统、订单系统、库存系统、支付系统、物流系统、搜索系统、推荐系统、数据分析系统。

这些程序必须运行在真实机器上。

所以需要：

```text
GlobalShop Data Center
企业数据中心

├── Web Server
├── Application Server
├── Database Server
├── Cache Server
├── File Server
│
├── Router
├── Switch
├── Firewall
├── Load Balancer
│
├── Storage
├── Backup
│
├── UPS
├── Cooling
├── Physical Security
└── Network Lines
```

这就是传统：**On-Premises**。

简称有时写：**On-Prem**，中文为：**本地部署 / 本地数据中心部署**。

这里的“本地”不是指：

> 放在程序员自己的电脑。

而是 

> 基础设施运行在企业自己控制的数据中心、服务器机房或公司场所，而不是公有云厂商的数据中心中。

---

### 2.2-传统基础设施最大的难题：你必须先猜未来

假设 GlobalShop 平时需要：100 台 Application Server但是“双十一”20:00：需要 2000 台。

那么公司应该买多少？

---

#### 2.2.1-方案-A：买-100-台

平时：

```text
需求：
██████████

服务器：
██████████
```

刚好。

但双十一：

```text
实际需求：
████████████████████████████████████████████

服务器：
██████████

结果：
Overload
过载
```

用户可能看到：

```text
504 Gateway Timeout

Service Unavailable

页面打不开

付款失败
```

---

#### 2.2.2-方案-B：直接买-2000-台

双十一安全了。

问题是平时：

```text
实际使用：
██

已购买：
████████████████████████████████████████
```

大量服务器一年绝大多数时间闲置。

但：硬件成本、机房成本、电力、网络、维护、折旧。

仍然存在。

---

### 2.3-★★★★-Capacity-Planning：容量规划

**Capacity**。

容量。

**Planning**。

规划。

**Capacity Planning**，中文为：**容量规划**。

也就是：

> 根据未来业务量预测，需要提前准备多少计算、存储、网络等资源。

传统 IT 环境必须认真做这件事情。

因为从：“发现不够用了”。

到：“真正增加100台服务器”。

中间可能经历：

```text
需求申请
↓
预算审批
↓
采购
↓
供应商发货
↓
机房上架
↓
网络连接
↓
安装OS
↓
系统配置
↓
应用部署
```

可能不是几分钟，而是几周甚至几个月。

---

### 2.4-★★★★★-云计算的关键变化：On-Demand-Resource

**On-Demand**，中文为：**按需**。

核心思想：

> 需要资源的时候再创建。

例如 GlobalShop：

```text
平时：
100台

双十一：
需求增加
↓
500台
↓
1000台
↓
2000台

双十一结束：
↓
500台
↓
100台
```

这背后就涉及后面两个非常重要的概念：

```text
Scalability
可扩展性

Elasticity
弹性
```

但二者不是同一个东西。

后面详细区分。

---

### 2.5-★★★★★-Fixed-Expense-→-Variable-Expense

传统基础设施经常存在：**Fixed Expense**，中文为：**固定支出**。

例如提前购买：服务器、存储、机柜、交换机、数据中心设施。

无论最终使用率是多少，投入已经产生。

云计算的重要价值之一，是让相当一部分 IT 成本转为：**Variable Expense**，中文为：**可变支出**。

也就是：

```text
用得多
→ 支出增加

用得少
→ 支出减少
```

---

### 2.6-★★★★-CAPEX-与-OPEX

在商业和财务题中还会出现两个词。

---

#### 2.6.1-CAPEX

完整英文：**Capital Expenditure**，中文为：**资本性支出**。

例如：一次购买1000台服务器。

属于典型资本投入。

---

#### 2.6.2-OPEX

完整英文：**Operating Expenditure**，中文为：**运营性支出 / 经营性支出**。

例如：

```text
这个月用了多少云资源
↓
这个月支付相应费用
```

更接近运营成本模型。

简单理解：

```text
传统自建数据中心
更偏向：
CAPEX

Cloud
可以将大量支出转化为：
OPEX / Variable Expense
```

但不要绝对化。

现实企业财务会复杂得多。

CLF-C02 主要考概念。

---

### 2.7-★★★★★-Pay-as-you-go

**Pay as you go**，中文为：**按使用量付费 / 随用随付**。

这是 AWS 最核心的经济思想之一。

但不要理解成：

> AWS 所有东西都是一秒多少钱。

不同服务有不同计量方式：

```text
EC2
→ 计算使用时间等

S3
→ 存储容量、请求、数据传输等

Lambda
→ 请求数、计算时间等

CloudFront
→ 请求、数据传输等
```

真正的共同思想是：

> 不必为了未来可能出现的需求，提前永久拥有所有容量。

---

### 2.8-★★★★-Economies-of-Scale：规模经济

完整英文：**Economies of Scale**，中文为：**规模经济**。

它是什么意思？

假设 GlobalShop 自己建数据中心：

```text
购买服务器：
500 台

采购带宽：
企业自己的规模

采购硬盘：
企业自己的规模
```

AWS 面向全球大量客户：

```text
AWS
├── 大量服务器
├── 大量数据中心
├── 大量网络资源
├── 大规模电力采购
└── 大规模基础设施运营
```

因为采购、建设、运营规模远大于一般企业：

```text
规模增加
↓
单位成本可能降低
```

AWS 可以利用这种规模经济向客户提供云资源。

题库中也反复把：**Benefit from massive economies of scale**。

作为 Cloud 的典型优势。

---

### 2.9-★★★★-Agility：敏捷性

**Agility**，中文为：**敏捷性**。

这里不是专指：**Agile Software Development，敏捷软件开发。

**。

云计算里的 Agility 更强调：

> **获得 IT 能力和尝试新业务的速度。

**

---

#### 2.9.1-GlobalShop-例子

产品经理提出：

> 做一个 AI 商品推荐实验。

传统数据中心：

```text
需要GPU资源
↓
预算审批
↓
采购
↓
安装
↓
配置
↓
几周后开始实验
```

AWS：

```text
申请适合的Cloud Resource
↓
快速创建
↓
当天开始实验
```

如果项目失败：关闭资源。

如果项目成功：继续扩大。

所以：

```text
获取资源更快
↓
实验成本降低
↓
新业务上线速度提高
↓
Agility提高
```

题库评论也直接使用：

> 从 weeks 到 minutes，提高组织的 agility。

---

### 2.10-★★★★★-Scalability：可扩展性

**Scalability**，中文为：**可扩展性**。

核心问题：

> 当业务规模越来越大时，系统能不能增加能力继续处理？

比如：

```text
今天：
每秒1000个请求

明年：
每秒10000个请求
```

如果系统可以通过增加资源支撑：

```text
1000
↓
10000
↓
100000
```

说明系统具有良好的：**Scalability**

---

### 2.11-★★★-Vertical-Scaling：纵向扩展

**Vertical Scaling**，中文为：**纵向扩展 / 垂直扩展**。

也叫：**Scale Up**。

意思：

> 不增加机器数量，而是把原来的机器变强。

例如：

```text
原服务器：

2 vCPU
8 GB RAM

↓

更强服务器：

32 vCPU
128 GB RAM
```

图：

```text
Small Server

    │
    │ Scale Up
    ▼

Large Server
```

---

### 2.12-★★★★-Horizontal-Scaling：横向扩展

**Horizontal Scaling**，中文为：**横向扩展 / 水平扩展**。

也叫：**Scale Out**。

意思：

> 不只是把一台机器变强，而是增加机器数量。

原来：EC2。

变成：EC2、EC2、EC2、EC2、EC2。

GlobalShop Web 系统通常非常适合：

```text
         Load Balancer
              │
       ┌──────┼──────┐
       ▼      ▼      ▼
      EC2    EC2    EC2
```

流量继续增加：

```text
         Load Balancer
              │
   ┌────┬─────┼─────┬────┐
   ▼    ▼     ▼     ▼    ▼
  EC2  EC2   EC2   EC2  EC2
```

---

### 2.13-★★★★★-Elasticity：弹性

**Elasticity**，中文为：**弹性**。

这是 CLF-C02 极其重要的概念。

它比 Scalability 多了一层意思：

> **资源能够根据需求变化扩大，也能够在需求减少时缩回来。

**。

---

#### 2.13.1-GlobalShop-双十一

```text
11月10日 10:00

EC2：
20台
```

流量增加：

```text
11月11日 19:00

EC2：
80台
```

20:00 秒杀：EC2：、300台。

凌晨：

```text
02:00

EC2：
50台
```

第二天：EC2：、20台。

这就是：

```text
Scale Out
扩大

+

Scale In
缩小

=

Elasticity
弹性
```

---

### 2.14-★★★★★-Scalability-与-Elasticity-的区别

这是必须真正理解的地方。

#### 2.14.1-Scalability

回答：

> **系统能不能处理越来越大的规模？

**

#### 2.14.2-Elasticity

回答：

> **系统能不能随着当前需求动态地增加和减少资源？

**。

---

#### 2.14.3-举例

一家公司从：1000用户长期发展到：100万用户于是服务器从：

```text
5台
→ 100台
```

这是：**Scalability**

---

另一家公司每天：

```text
上午：
20台

晚上高峰：
100台

凌晨：
10台
```

每天自动变化。

这是：**Elasticity**

---

可以记成：

```text
Scalability
关注：
“大了以后能不能撑住？”

Elasticity
关注：
“需求变了以后能不能跟着变化？”
```

题库第 40 题就是非常直接的 Elasticity 题：题库把“随着需求变化进行 rightsize”以及“需要时容易获得资源”作为 Elasticity 的表现，而不是 EC2 重启速度或者 RAM 上限。

---

### 2.15-★★★★★-High-Availability：高可用性

简称：**HA**。

完整英文：**High Availability**，中文为：**高可用性**。

它关注的问题不是。

> 流量增加怎么办？

而是 

> **某些组件坏掉以后，业务还能不能继续？

**

---

### 2.16-★★★★-Single-Point-of-Failure：单点故障

完整英文：**Single Point of Failure**。

常缩写：**SPOF**，中文为：**单点故障**。

例如：

```text
         Users
           │
           ▼
          EC2
```

如果唯一的 EC2：

```text
EC2
 X
```

整个系统：

```text
Users
  │
  X
Service unavailable
```

这台 EC2 就是：**Single Point of Failure**。

---

### 2.17-用冗余提高-Availability

**Redundancy**，中文为：**冗余**。

意思是：

> 不只准备一个组件，而是准备额外组件，避免一个坏掉整个系统就停止。

例如：

```text
         Load Balancer
              │
       ┌──────┴──────┐
       ▼             ▼
      EC2           EC2
```

坏掉一个：

```text
EC2-A
  X

EC2-B
继续服务
```

---

### 2.18-★★★★★-High-Availability-与-Scalability-不一样

题库特别喜欢把Agility、Elasticity、Scalability、High Availability。

放到一起。

它们分别回答：

| 概念                | 核心问题             |
| ----------------- | ---------------- |
| Agility           | 能不能快速获得资源、快速变化业务 |
| Scalability       | 能不能承受更大的规模       |
| Elasticity        | 能不能随实际需求增减资源     |
| High Availability | 出现故障以后还能不能尽量继续服务 |

题库第 77 题就是：

> 架构能够在发生故障时以最少 downtime 继续运行。

这里对应的是：**High Availability**，而不是 Elasticity 或 Scalability。

题库相关解释也明确指出：Elasticity 主要处理资源随需求变化。

Scalability 处理更大的负载。

而 High Availability 关注故障情况下减少停机。

---

### 2.19-★★★★-Fault-Tolerance：容错能力

**Fault**。

故障。

**Tolerance**。

容忍。

**Fault Tolerance**，中文为：**容错 / 故障容忍能力**。

其目标是：

> 一个组件出现故障时，系统仍然能够继续完成其功能。

High Availability 和 Fault Tolerance 很接近。

可以先这样理解：

```text
High Availability
重点：
尽可能让服务持续可用、减少Downtime

Fault Tolerance
重点：
系统能容忍部分组件失败而继续工作
```

---

### 2.20-★★★-Downtime

**Downtime**，中文为：**停机时间 / 服务不可用时间**。

例如：20:00 系统故障、20:05 恢复Downtime：5 minutes。

---

### 2.21-★★★★-Reliability：可靠性

**Reliability**，中文为：**可靠性**。

这个概念比：**Availability**。

范围更大。

可以粗略理解为：

> 系统能够在一段时间内持续、正确地执行预期功能，并能在发生故障时进行恢复。

AWS Well-Architected Framework 中专门有：**Reliability Pillar**。

即：**可靠性支柱**。

([AWS Documentation](https://docs.aws.amazon.com/wellarchitected/latest/reliability-pillar/welcome.html))。

后面的 C2-16 会详细介绍。

---

### 2.22-★★★★-Resilience/Resiliency：韧性

**Resilience**。

或：**Resiliency**。

中文常译：**韧性 / 弹性恢复能力 / 抗故障恢复能力**。

注意：这里不要和：**Elasticity，资源弹性**。

混淆。

Resilience 更关心：

> 系统面对故障、灾害或者异常以后，能否抵抗影响并恢复。

例如：

```text
Hardware Failure
硬件故障

AZ Failure
可用区故障

Region Failure
区域级故障

Network Failure
网络故障

Human Error
人为错误
```

都属于 Resilience 设计需要考虑的事件。

---

### 2.23-★★★-Durability：数据持久性

**Durability**，中文为：**持久性 / 数据耐久性**。

主要关注：

> **数据会不会丢？

**

不要和 Availability 混淆。

例如一个存储服务可能：数据没有丢、但是暂时访问不了。

那么：

```text
Durability
可能仍然很好

Availability
此刻却受到影响
```

所以：

```text
Availability
→ 能不能访问

Durability
→ 数据会不会长期保存下来
```

S3 章节会再次重点讲这个区别。

---

### 2.24-★★★★★-云计算核心概念关系图

```text
                    Cloud Computing
                          │
       ┌──────────────────┼──────────────────┐
       │                  │                  │
       ▼                  ▼                  ▼
     Agility          Scalability        Availability
     敏捷性             可扩展性             可用性
       │                  │                  │
       │                  │                  │
快速获得资源          系统规模可扩大       故障后仍尽量可用
       │                  │
       │              Elasticity
       │                  弹性
       │                  │
       │             随需求增减资源
       │
       └──────────────────┬─────────────────
                          │
                      Reliability
                        可靠性
                          │
                     Resilience
                         韧性
```

---

## 本篇概述

- 本篇梳理了Cloud-Computing-什么是云计算？

相关的核心知识、适用场景与判断要点。

[返回本章总述](./00-总述.md)｜[查看本章概述](./99-概述.md)

---
id: 01-AWS-不是“网上租服务器”-等
sidebar_position: 1
---

# C1-07-总结-AWS-不是“网上租服务器”与AWS-的产品是为了解决真实-IT-问题与同一个业务会同时使用大量-AWS-服务与考试真正考的是选择与719-题不是-AWS-官方教材与后面的学习会逐渐放大这张图

> 本篇是《C1-07-总结》的第1个分篇，主要包含：AWS-不是“网上租服务器”、AWS-的产品是为了解决真实-IT-问题、同一个业务会同时使用大量-AWS-服务、考试真正考的是选择、719-题不是-AWS-官方教材、后面的学习会逐渐放大这张图。

## 1-AWS-不是“网上租服务器”

AWS 是：

```text
Compute
Storage
Database
Networking
Security
Management
Analytics
AI
Migration
Cost
...
```

组成的完整云平台。

---

---

## 2-AWS-的产品是为了解决真实-IT-问题

```text
服务器
→ EC2

海量Object
→ S3

关系数据库
→ RDS / Aurora

私有网络
→ VPC

全球内容
→ CloudFront

权限
→ IAM

监控
→ CloudWatch

操作审计
→ CloudTrail

成本
→ Cost Explorer / Budgets
```

---

---

## 3-同一个业务会同时使用大量-AWS-服务

GlobalShop 不是“用EC2”，而是。

```text
Route53
↓
CloudFront
↓
WAF
↓
Load Balancer
↓
EC2 / Lambda / Container
↓
Cache / Database / Storage
↓
Messaging
↓
Analytics
```

同时由IAM、KMS、CloudWatch、CloudTrail、Config、Organizations、Budgets。

横向支撑。

---

---

## 4-考试真正考的是选择

最核心的学习方式是：

```text
业务需求
↓
技术类型
↓
候选AWS服务
↓
排除不匹配服务
↓
选择最符合条件的方案
```

而不是

```text
AWS名字
↓
背一句定义
```

---

---

## 5-719-题不是-AWS-官方教材

题库用于：发现知识点、发现题型、发现干扰项、发现高频、发现旧题。

当前 AWS 技术事实则以 AWS 官方资料为主。

---

---

## 6-后面的学习会逐渐放大这张图

```text
                         AWS
                          │
         ┌────────────────┼────────────────┐
         │                │                │
      Compute          Storage         Database
         │                │                │
         └────────────────┼────────────────┘
                          │
                       Network
                          │
                   Application
                          │
         ┌────────────────┼────────────────┐
         │                │                │
      Security        Monitoring        Analytics
         │                │                │
         └────────────────┼────────────────┘
                          │
                    Governance
                          │
                 Migration / Cost
```

**C1 到这里的任务只是把地图摊开。

**。

下一章开始，才会真正进入这张地图内部，逐一把各个技术从“听过名字”推进到“理解为什么存在、怎么使用、和谁配合、题目怎么考”。

[1]: https://docs.aws.amazon.com/aws-certification/latest/cloud-practitioner-02/cloud-practitioner-02.html "AWS Certified Cloud Practitioner (CLF-C02) - AWS Certified Cloud Practitioner"

[2]: https://docs.aws.amazon.com/aws-certification/latest/cloud-practitioner-02/clf-02-in-scope-services.html "In-Scope AWS Services - AWS Certified Cloud Practitioner"

[3]: https://docs.aws.amazon.com/aws-certification/latest/cloud-practitioner-02/clf-02-out-of-scope-services.html "Out-of-Scope AWS Services - AWS Certified Cloud Practitioner"

[4]: https://aws.amazon.com/certification/certified-cloud-practitioner/ "AWS Certified Cloud Practitioner"

[5]: https://docs.aws.amazon.com/whitepapers/latest/aws-overview/six-advantages-of-cloud-computing.html "Six advantages of cloud computing - Overview of Amazon Web Services"

[6]: https://docs.aws.amazon.com/whitepapers/latest/how-aws-pricing-works/key-principles.html "Key principles - How AWS Pricing Works"

[7]: https://aws.amazon.com/about-aws/global-infrastructure/regions_az/ "Global Infrastructure Regions & AZs"

[8]: https://docs.aws.amazon.com/global-infrastructure/latest/regions/aws-regions.html "AWS Regions - AWS Regions and Availability Zones"

[9]: https://docs.aws.amazon.com/global-infrastructure/latest/regions/aws-regions-availability-zones.html "AWS Regions and Availability Zones - AWS Regions and Availability Zones"

[10]: https://docs.aws.amazon.com/prescriptive-guidance/latest/aws-caf-platform-perspective/introduction.html "AWS Cloud Adoption Framework: Platform perspective - AWS Prescriptive Guidance"

[11]: https://docs.aws.amazon.com/wellarchitected/2025-02-25/framework/the-pillars-of-the-framework.html "The pillars of the framework - AWS Well-Architected Framework"

[12]: https://docs.aws.amazon.com/aws-certification/latest/cloud-practitioner-02/cloud-practitioner-02-domain1.html "Content Domain 1: Cloud Concepts - AWS Certified Cloud Practitioner"

[13]: https://docs.aws.amazon.com/aws-certification/latest/cloud-practitioner-02/cloud-practitioner-02-domain3.html "Content Domain 3: Cloud Technology and Services - AWS Certified Cloud Practitioner"

[14]: https://docs.aws.amazon.com/aws-certification/latest/cloud-practitioner-02/clf-technologies-concepts.html "Technologies and Concepts - AWS Certified Cloud Practitioner"

## 本篇概述

- 本篇梳理了AWS-不是“网上租服务器”相关的核心知识、适用场景与判断要点。
- 本篇梳理了AWS-的产品是为了解决真实-IT-问题相关的核心知识、适用场景与判断要点。
- 本篇梳理了同一个业务会同时使用大量-AWS-服务相关的核心知识、适用场景与判断要点。
- 本篇梳理了考试真正考的是选择相关的核心知识、适用场景与判断要点。
- 本篇梳理了719-题不是-AWS-官方教材相关的核心知识、适用场景与判断要点。
- 本篇梳理了后面的学习会逐渐放大这张图相关的核心知识、适用场景与判断要点。

[返回本章总述](./00-总述.md)｜[查看本章概述](./99-概述.md)

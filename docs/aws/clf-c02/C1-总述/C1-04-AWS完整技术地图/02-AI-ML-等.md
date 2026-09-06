---
id: 02-AI-ML-等
sidebar_position: 2
---

# C1-04-02-AI-ML

> 本篇是《C1-04-AWS完整技术地图》的第2个分篇，主要包含：AI-ML、Migration-and-Transfer-迁移与传输、Cloud-Financial-Management-云财务管理、Architecture-Frameworks-架构框架、AWS-完整鸟瞰图、本章小结。

## 13-★★★-AI/ML

当前 CLF-C02 官方范围包括：Comprehend、Kendra、Lex、Polly、Amazon Q、Rekognition、SageMaker AI、Textract、Transcribe、Translate([AWS Documentation](https://docs.aws.amazon.com/aws-certification/latest/cloud-practitioner-02/clf-02-in-scope-services.html))

它们不是一种功能。

简单先分类：

```text
Image
→ Rekognition

Speech → Text
→ Transcribe

Text → Speech
→ Polly

Document extraction
→ Textract

Language understanding
→ Comprehend

Chatbot
→ Lex

Translation
→ Translate

ML platform
→ SageMaker AI
```

后面逐个讲输入、处理、输出和业务场景。

---

---

## 14-★★★★-Migration-and-Transfer：迁移与传输

```text
Migration
│
├── Discover
│   └── Application Discovery Service
│
├── Evaluate
│   └── Migration Evaluator
│
├── Server Migration
│   └── Application Migration Service
│
├── Database Migration
│   ├── DMS
│   └── SCT
│
├── Migration Tracking
│   └── Migration Hub
│
└── Offline Data Transfer
    └── Snow Family
```

这些服务均出现在当前 CLF-C02 Migration and Transfer 范围中。

([AWS Documentation](https://docs.aws.amazon.com/aws-certification/latest/cloud-practitioner-02/clf-02-in-scope-services.html))。

题库也直接考：

Application Discovery vs Application Migration vs DMS vs DataSync

---

---

## 15-★★★★★-Cloud-Financial-Management：云财务管理

```text
Before deployment
部署前
→ Pricing Calculator

After deployment
部署后
→ Cost Explorer

Threshold
预算阈值
→ Budgets

Detailed billing data
详细成本数据
→ Cost and Usage Reports
```

以及计算资源购买方式：On-Demand、Reserved、Savings Plans、Spot、Dedicated。

这是题库极高频模块。

---

---

## 16-★★★★★-Architecture-Frameworks：架构框架

两个最重要：

### 16.1-AWS-CAF

**AWS Cloud Adoption Framework**，中文为：**AWS 云采用框架**。

回答：

> 公司作为一个组织应该怎么采用 Cloud？

当前 AWS CAF 将能力划为六个 Perspective：

```text
Business
业务

People
人员

Governance
治理

Platform
平台

Security
安全

Operations
运营
```

([AWS Documentation](https://docs.aws.amazon.com/prescriptive-guidance/latest/aws-caf-platform-perspective/introduction.html))

---

### 16.2-AWS-Well-Architected-Framework

中文可以理解为：**AWS 良好架构框架**。

回答：

> 一个 Cloud workload 应该怎样设计和运行得更好？

当前六大 Pillars：

```text
Operational Excellence
卓越运营

Security
安全性

Reliability
可靠性

Performance Efficiency
性能效率

Cost Optimization
成本优化

Sustainability
可持续性
```

([AWS Documentation](https://docs.aws.amazon.com/wellarchitected/2025-02-25/framework/the-pillars-of-the-framework.html))。

题库中也有大量 Pillar 题，例如第 647 题直接询问“持续改善流程以交付业务价值”对应哪个 Pillar。

---

---

## 17-AWS-完整鸟瞰图

```text
                    ┌──────────────────────────┐
                    │ AWS Global Infrastructure；│
                    │ Region / AZ / Edge       │
                    └────────────┬─────────────┘
                                 │
           ┌─────────────────────┼─────────────────────┐
           │                     │                     │
           ▼                     ▼                     ▼
        Compute               Storage              Database
      EC2/Lambda            S3/EBS/EFS          RDS/DynamoDB
      ECS/EKS               FSx/Backup          Aurora/Cache
           │                     │                     │
           └─────────────────────┼─────────────────────┘
                                 │
                                 ▼
                             Networking
                          VPC / Route53
                       CloudFront / Gateway
                                 │
                                 ▼
                        Application Integration
                        SQS/SNS/EventBridge
                                 │
         ┌───────────────────────┼──────────────────────┐
         ▼                       ▼                      ▼
      Security               Monitoring             Analytics
    IAM/KMS/WAF          CloudWatch/Trail      Athena/Glue/EMR
   GuardDuty/etc             Config                Redshift
         │                       │                      │
         └───────────────────────┼──────────────────────┘
                                 ▼
                      Management & Governance
                 Organizations / Control Tower
                       CloudFormation
                                 │
                   ┌─────────────┴─────────────┐
                   ▼                           ▼
                Migration                   Cost
             DMS/MGN/Snow             Budgets/Explorer
```

这张图就是后续几十篇文档的主地图。

---

---

## 18-本章小结

AWS 的服务数量很多，但从根本上还是在解决有限的几类问题：

```text
在哪里
怎么运行
怎么存
怎么查
怎么连
怎么协作
怎么授权
怎么保护
怎么看
怎么管理
怎么分析
怎么迁移
怎么控制成本
```

真正学习 AWS，应先识别**问题类别**，再学习产品。

---

---

## 本篇概述

- 本篇梳理了AI-ML相关的核心知识、适用场景与判断要点。
- 本篇梳理了Migration-and-Transfer-迁移与传输相关的核心知识、适用场景与判断要点。
- 本篇梳理了Cloud-Financial-Management-云财务管理相关的核心知识、适用场景与判断要点。
- 本篇梳理了Architecture-Frameworks-架构框架相关的核心知识、适用场景与判断要点。
- 本篇梳理了AWS-完整鸟瞰图相关的核心知识、适用场景与判断要点。
- 本篇梳理了本章小结相关的核心知识、适用场景与判断要点。

[返回本章总述](./00-总述.md)｜[查看本章概述](./99-概述.md)

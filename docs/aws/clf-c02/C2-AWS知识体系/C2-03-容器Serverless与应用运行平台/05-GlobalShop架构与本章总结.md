---
id: 05-GlobalShop架构与本章总结
sidebar_position: 5
---

# C2-03-05-GlobalShop架构与本章总结

> 本篇是《C2-03-容器Serverless与应用运行平台》的第5个分篇，主要包含：GlobalShop架构与本章总结。

## 12-★★★★★-GlobalShop架构与本章总结

### 12.1-本章最重要的-GlobalShop-架构

```text
                         Global Users
                              │
                              ▼
                         CloudFront
                              │
                              ▼
                            ALB
                              │
          ┌───────────────────┼───────────────────┐
          ▼                   ▼                   ▼
      ECS Service         EKS Workload        API Gateway
      Product API         Search Platform          │
          │                   │                    ▼
          ▼                   ▼                  Lambda
       Fargate            EC2 / Fargate        Event/API
          │                   │                    │
          └──────────────┬────┴──────────────┬────┘
                         │                   │
                         ▼                   ▼
                     RDS/DynamoDB           S3

Container Images:
Developer
   │
   ▼
Amazon ECR
   │
   ├──→ ECS
   └──→ EKS
```

横向支撑：IAM、KMS、CloudWatch、CloudTrail。

后续章节会逐步把这些部分补齐。

---

### 12.2-本章最终必须记住的抽象层

```text
最底层控制更多
        │
        ▼
      EC2
        │
        ▼
Container on EC2
        │
        ▼
ECS / EKS + Fargate
        │
        ▼
      Lambda
        │
        ▼
更高层抽象、少管 Server
```

这不是严格的“技术先进度排名”。

而是 Infrastructure Management Responsibility。

逐步交给 AWS 的程度不同。

---

### 12.3-本章学习检查

如果下面问题能够自己回答，本章核心就已经掌握。

1. VM 和 Container 的主要区别是什么？

2. Container Image 和运行中的 Container 有什么区别？

3. ECR 为什么不是 Container Runtime？

4. ECS 和 EKS 都解决什么问题？

5. 为什么 Kubernetes 题通常想到 EKS？

6. Fargate 为什么不是 ECS 的同义词？

7. ECS + Fargate 是怎样组合的？

8. EKS + Fargate 又是什么关系？

9. Serverless 为什么不等于“没有服务器”？

10. Lambda 为什么适合 Event-driven Workload？

11. Lambda 与 Fargate 的运行单元有什么不同？

12. EC2、Container、Fargate、Lambda 的客户管理责任怎样逐步变化？

---

### 12.4-AWS-官方资料

- 当前 CLF-C02 考试范围：AWS 官方：CLF-C02 In-Scope AWS Services](https://docs.aws.amazon.com/aws-certification/latest/cloud-practitioner-02/clf-02-in-scope-services.html)。
- CLF-C02 Compute 考察要求：[AWS 官方：CLF-C02 Domain 3 - Cloud Technology and Services](https://docs.aws.amazon.com/aws-certification/latest/cloud-practitioner-02/cloud-practitioner-02-domain3.html)。
- Amazon ECS：[AWS 官方文档：What is Amazon Elastic Container Service?](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/Welcome.html)。
- Amazon ECR：[AWS 官方文档：What is Amazon Elastic Container Registry?](https://docs.aws.amazon.com/AmazonECR/latest/userguide/what-is-ecr.html)。
- Amazon EKS：[AWS 官方文档：What is Amazon EKS?](https://docs.aws.amazon.com/eks/latest/userguide/)。
- Kubernetes Concepts：[AWS 官方文档：Kubernetes concepts for Amazon EKS](https://docs.aws.amazon.com/eks/latest/userguide/kubernetes-concepts.html)。
- AWS Fargate：[AWS 官方文档：AWS Fargate with Amazon EKS](https://docs.aws.amazon.com/eks/latest/userguide/fargate.html)
- AWS Lambda：[AWS 官方文档：What is AWS Lambda?](https://docs.aws.amazon.com/lambda/latest/dg/welcome.html)。
- Elastic Beanstalk：[AWS 官方文档：What is AWS Elastic Beanstalk?](https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/Welcome.html)。

---

### 12.5-下一章

现在计算层已经从：

```text
EC2
↓
Container
↓
ECS / EKS
↓
Fargate
↓
Lambda
```

建立起来。

但应用一旦真正运行，就马上需要解决：文件放哪里？

系统盘放哪里？

多个 Server 如何共享文件？

图片、日志、备份放哪里？

数据需要保存多久？

低频数据如何降低成本？

因此下一章进入：C2-04-存储体系.md。

核心主线：

```text
Storage
│
├── Object Storage → S3
├── Block Storage  → EBS
├── File Storage   → EFS / FSx
├── Local Ephemeral Storage → Instance Store
├── Hybrid Storage → Storage Gateway
└── Backup → AWS Backup
```

## 本篇概述

- 本篇梳理了GlobalShop架构与本章总结相关的核心知识、适用场景与判断要点。

[返回本章总述](./00-总述.md)｜[查看本章概述](./99-概述.md)

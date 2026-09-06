---
id: 10-EC2-AMI与计算服务题-等
sidebar_position: 10
---

# C4-03-EC2-AMI与计算服务题-EC2-AMI与计算服务题与EC2-AMI与计算服务题与EC2-AMI与计算服务题与EC2-AMI与计算服务题与EC2-AMI与计算服务题与EC2-AMI与计算服务题

> 本篇是《C4-03-EC2-AMI与计算服务题》的第10个分篇，主要包含：EC2-AMI与计算服务题、EC2-AMI与计算服务题、EC2-AMI与计算服务题、EC2-AMI与计算服务题、EC2-AMI与计算服务题、EC2-AMI与计算服务题。

## Q628-EC2-AMI与计算服务题

**题目：** An online retail company wants to migrate its on-premises workload to AWS. The company needs to automatically handle a seasonal workload increase in a cost-effective manner. Which AWS Cloud features will help the company meet this requirement? (Choose two.)。

**选项：**

- A. Cross-Region workload deployment
- B. Pay-as-you-go pricing
- C. Built-in AWS CloudTrail audit capabilities
- D. Auto Scaling policies
- E. Centralized logging

**主分类：** C4-03 EC2-AMI与计算服务题。

**题库记录答案：** `BD`。

**需求/考点标签：** Hybrid Cloud / Migration / Cost Optimization。

**社区投票：** BD 100%

### Q628.1-题干怎么拆

这道题先识别的不是某个服务名，而是这些约束：**Hybrid Cloud、Migration、Cost Optimization**。

判断时应该先找到与这些约束同层、同数据模型或同运维目标的服务，再排除“看起来也属于 AWS，但解决的是另一个层面问题”的选项。

### Q628.2-每个选项的定位

| 选项 | 题库内容 | 服务/概念定位 | 题库答案关系 |
|---|---|---|---|
| A | Cross-Region workload deployment | Region 是 AWS 独立的地理区域，内部包含多个 Availability Zone。 | 题库记录为非正确选项 |
| B | Pay-as-you-go pricing | OPEX/可变支出强调按实际使用支付。 | 题库记录为正确选项 |
| C | Built-in AWS CloudTrail audit capabilities | AWS CloudTrail：记录 AWS API/账号活动，回答谁在什么时候做了什么操作。 | 题库记录为非正确选项 |
| D | Auto Scaling policies | EC2 Auto Scaling：根据需求自动增加或减少 EC2 容量。 | 题库记录为正确选项 |
| E | Centralized logging | 该选项是题库中的概念/服务描述。现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为非正确选项 |

### Q628.3-为什么题库会这样选

题库记录的正确选项定位为：OPEX/可变支出强调按实际使用支付。

EC2 Auto Scaling：根据需求自动增加或减少 EC2 容量。

它与题干要求的对象/约束直接对应。

其余选项虽然可能也属于同一大类，但主要解决不同问题。

---

---

## Q646-EC2-AMI与计算服务题

**题目：** Which AWS services are serverless? (Choose two.)。

**选项：**

- A. AWS Fargate
- B. Amazon Managed Streaming for Apache Kafka
- C. Amazon EMR
- D. Amazon S3
- E. Amazon EC2

**主分类：** C4-03 EC2-AMI与计算服务题。

**题库记录答案：** `AD`。

**需求/考点标签：** Serverless。

**社区投票：** AD 100%

### Q646.1-题干怎么拆

这道题先识别的不是某个服务名，而是这些约束：**Serverless**。

判断时应该先找到与这些约束同层、同数据模型或同运维目标的服务，再排除“看起来也属于 AWS，但解决的是另一个层面问题”的选项。

### Q646.2-每个选项的定位

| 选项 | 题库内容 | 服务/概念定位 | 题库答案关系 |
|---|---|---|---|
| A | AWS Fargate | AWS Fargate：为 ECS/EKS 提供不需要管理底层服务器的容器计算能力。 | 题库记录为正确选项 |
| B | Amazon Managed Streaming for Apache Kafka | 该选项是题库中的概念/服务描述。现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为非正确选项 |
| C | Amazon EMR | Amazon EMR：托管大数据框架平台，如 Spark/Hadoop。 | 题库记录为非正确选项 |
| D | Amazon S3 | Amazon S3：高耐久、可扩展的对象存储，以 Bucket/Object 组织数据。 | 题库记录为正确选项 |
| E | Amazon EC2 | Amazon EC2：可配置虚拟服务器，适合需要 OS/实例级控制的计算工作负载。 | 题库记录为非正确选项 |

### Q646.3-为什么题库会这样选

题库记录的正确选项定位为：AWS Fargate：为 ECS/EKS 提供不需要管理底层服务器的容器计算能力。

Amazon S3：高耐久、可扩展的对象存储，以 Bucket/Object 组织数据。

它与题干要求的对象/约束直接对应。

其余选项虽然可能也属于同一大类，但主要解决不同问题。

---

---

## Q657-EC2-AMI与计算服务题

**题目：** A company hosts a web application on AWS. The company has improved the availability of its application by provisioning multiple Amazon EC2 instances. The company wants to distribute its traffic across the EC2 instances while providing a single point of contact to the web clients. Which AWS service can distribute the traffic to multiple EC2 instances as targets?

**选项：**

- A. VPC endpoints
- B. Application Load Balancer
- C. NAT gateway
- D. Internet gateway

**主分类：** C4-03 EC2-AMI与计算服务题。

**题库记录答案：** `B`。

**社区投票：** B 100%

### Q657.1-题干怎么拆

现有题库没有提供独立 explanation。

这里按题干中的动作、对象和所有选项的服务定位进行比较。

### Q657.2-每个选项的定位

| 选项 | 题库内容 | 服务/概念定位 | 题库答案关系 |
|---|---|---|---|
| A | VPC endpoints | VPC Endpoint：让 VPC 私网访问支持的 AWS 服务，而无需经过公共 Internet。Amazon VPC：AWS 中用户定义的逻辑隔离虚拟网络。 | 题库记录为非正确选项 |
| B | Application Load Balancer | Elastic Load Balancing：在多个后端目标间分发流量并提高可用性。 | 题库记录为正确选项 |
| C | NAT gateway | NAT Gateway：常用于 Private Subnet 资源主动访问外部 IPv4 网络。 | 题库记录为非正确选项 |
| D | Internet gateway | Internet Gateway：VPC 与公网 Internet 之间的网关组件。 | 题库记录为非正确选项 |

### Q657.3-为什么题库会这样选

题库记录的正确选项定位为：Elastic Load Balancing：在多个后端目标间分发流量并提高可用性。

它与题干要求的对象/约束直接对应。

其余选项虽然可能也属于同一大类，但主要解决不同问题。

---

---

## Q674-EC2-AMI与计算服务题

**题目：** A company wants to deploy a web application as a containerized application. The company wants to use a managed service that can automatically create container images from source code and deploy the containerized application. Which AWS service will meet these requirements?

**选项：**

- A. AWS Elastic Beanstalk
- B. Amazon Elastic Container Service (Amazon ECS)
- C. AWS App Runner
- D. Amazon EC2

**主分类：** C4-03 EC2-AMI与计算服务题。

**题库记录答案：** `C`。

**需求/考点标签：** Container。

**社区投票：** C 75%, B 25%。

### Q674.1-题干怎么拆

这道题先识别的不是某个服务名，而是这些约束：**Container**。

判断时应该先找到与这些约束同层、同数据模型或同运维目标的服务，再排除“看起来也属于 AWS，但解决的是另一个层面问题”的选项。

### Q674.2-每个选项的定位

| 选项 | 题库内容 | 服务/概念定位 | 题库答案关系 |
|---|---|---|---|
| A | AWS Elastic Beanstalk | AWS Elastic Beanstalk：托管应用部署平台，帮助创建和管理常见 Web 应用运行环境。 | 题库记录为非正确选项 |
| B | Amazon Elastic Container Service (Amazon ECS) | Amazon ECS：AWS 原生托管容器编排服务。 | 题库记录为非正确选项 |
| C | AWS App Runner | 该选项是题库中的概念/服务描述。现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为正确选项 |
| D | Amazon EC2 | Amazon EC2：可配置虚拟服务器，适合需要 OS/实例级控制的计算工作负载。 | 题库记录为非正确选项 |

### Q674.3-为什么题库会这样选

题库记录的正确选项定位为：该选项是题库中的概念/服务描述。

现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。

它与题干要求的对象/约束直接对应。

其余选项虽然可能也属于同一大类，但主要解决不同问题。

---

---

## Q702-EC2-AMI与计算服务题

**题目：** A company wants to run its application's code without having to provision and manage servers. Which AWS service will meet this requirement?。

**选项：**

- A. AWS Glue
- B. AWS Lambda
- C. AWS CodeDeploy
- D. Amazon CodeGuru

**主分类：** C4-03 EC2-AMI与计算服务题。

**题库记录答案：** `B`。

**社区投票：** B 100%

### Q702.1-题干怎么拆

现有题库没有提供独立 explanation。

这里按题干中的动作、对象和所有选项的服务定位进行比较。

### Q702.2-每个选项的定位

| 选项 | 题库内容 | 服务/概念定位 | 题库答案关系 |
|---|---|---|---|
| A | AWS Glue | AWS Glue：Serverless 数据集成/ETL 与 Data Catalog 服务。 | 题库记录为非正确选项 |
| B | AWS Lambda | AWS Lambda：事件驱动的 Serverless 函数运行环境，无需管理服务器。 | 题库记录为正确选项 |
| C | AWS CodeDeploy | AWS CodeDeploy：自动化应用部署服务。项目资料将其视为题库历史/当前范围需复核项。 | 题库记录为非正确选项 |
| D | Amazon CodeGuru | 该选项是题库中的概念/服务描述。现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为非正确选项 |

### Q702.3-为什么题库会这样选

题库记录的正确选项定位为：AWS Lambda：事件驱动的 Serverless 函数运行环境，无需管理服务器。

它与题干要求的对象/约束直接对应。

其余选项虽然可能也属于同一大类，但主要解决不同问题。

### Q702.4-⚠-争议/版本提示

- 涉及项目资料已提示需关注当前状态的词：codedeploy
- 本题同时收录到 `C4-27-旧题争议题与当前AWS差异.md`，不在这里强行替题库修正答案。

---

---

## Q708-EC2-AMI与计算服务题

**题目：** A company has an on-premises application. The application has processing times of less than 5 minutes and is invoked only a few times each day. The company wants to move the application to the AWS Cloud. Which AWS service will support this application MOST cost-effectively?

**选项：**

- A. Amazon Elastic Container Service (Amazon ECS)
- B. AWS Lambda
- C. Amazon Elastic Kubernetes Service (Amazon EKS)
- D. Amazon EC2

**主分类：** C4-03 EC2-AMI与计算服务题。

**题库记录答案：** `B`。

**需求/考点标签：** Hybrid Cloud / Cost Optimization。

**社区投票：** B 100%

### Q708.1-题干怎么拆

这道题先识别的不是某个服务名，而是这些约束：**Hybrid Cloud、Cost Optimization**。

判断时应该先找到与这些约束同层、同数据模型或同运维目标的服务，再排除“看起来也属于 AWS，但解决的是另一个层面问题”的选项。

### Q708.2-每个选项的定位

| 选项 | 题库内容 | 服务/概念定位 | 题库答案关系 |
|---|---|---|---|
| A | Amazon Elastic Container Service (Amazon ECS) | Amazon ECS：AWS 原生托管容器编排服务。 | 题库记录为非正确选项 |
| B | AWS Lambda | AWS Lambda：事件驱动的 Serverless 函数运行环境，无需管理服务器。 | 题库记录为正确选项 |
| C | Amazon Elastic Kubernetes Service (Amazon EKS) | Amazon EKS：AWS 托管 Kubernetes 控制面。 | 题库记录为非正确选项 |
| D | Amazon EC2 | Amazon EC2：可配置虚拟服务器，适合需要 OS/实例级控制的计算工作负载。 | 题库记录为非正确选项 |

### Q708.3-为什么题库会这样选

题库记录的正确选项定位为：AWS Lambda：事件驱动的 Serverless 函数运行环境，无需管理服务器。

它与题干要求的对象/约束直接对应。

其余选项虽然可能也属于同一大类，但主要解决不同问题。

---

## 本篇概述

- 本篇梳理了EC2-AMI与计算服务题相关的核心知识、适用场景与判断要点。
- 本篇梳理了EC2-AMI与计算服务题相关的核心知识、适用场景与判断要点。
- 本篇梳理了EC2-AMI与计算服务题相关的核心知识、适用场景与判断要点。
- 本篇梳理了EC2-AMI与计算服务题相关的核心知识、适用场景与判断要点。
- 本篇梳理了EC2-AMI与计算服务题相关的核心知识、适用场景与判断要点。
- 本篇梳理了EC2-AMI与计算服务题相关的核心知识、适用场景与判断要点。

[返回本章总述](./00-总述.md)｜[查看本章概述](./99-概述.md)

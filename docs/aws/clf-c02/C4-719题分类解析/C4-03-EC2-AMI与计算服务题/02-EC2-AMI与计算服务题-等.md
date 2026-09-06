---
id: 02-EC2-AMI与计算服务题-等
sidebar_position: 2
---

# C4-03-EC2-AMI与计算服务题-EC2-AMI与计算服务题与EC2-AMI与计算服务题与EC2-AMI与计算服务题与EC2-AMI与计算服务题与EC2-AMI与计算服务题与EC2-AMI与计算服务题

> 本篇是《C4-03-EC2-AMI与计算服务题》的第2个分篇，主要包含：EC2-AMI与计算服务题、EC2-AMI与计算服务题、EC2-AMI与计算服务题、EC2-AMI与计算服务题、EC2-AMI与计算服务题、EC2-AMI与计算服务题。

## Q116-EC2-AMI与计算服务题

**题目：** Which fully managed AWS service assists with the creation, testing, and management of custom Amazon EC2 images?。

**选项：**

- A. EC2 Image Builder
- B. Amazon Machine Image (AMI)
- C. AWS Launch Wizard
- D. AWS Elastic Beanstalk

**主分类：** C4-03 EC2-AMI与计算服务题。

**题库记录答案：** `A`。

**社区投票：** A 100%

### Q116.1-题干怎么拆

现有题库没有提供独立 explanation。

这里按题干中的动作、对象和所有选项的服务定位进行比较。

### Q116.2-每个选项的定位

| 选项 | 题库内容 | 服务/概念定位 | 题库答案关系 |
|---|---|---|---|
| A | EC2 Image Builder | Amazon EC2：可配置虚拟服务器，适合需要 OS/实例级控制的计算工作负载。 | 题库记录为正确选项 |
| B | Amazon Machine Image (AMI) | AMI：EC2 启动模板，定义实例启动所需的软件配置。 | 题库记录为非正确选项 |
| C | AWS Launch Wizard | 该选项是题库中的概念/服务描述。现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为非正确选项 |
| D | AWS Elastic Beanstalk | AWS Elastic Beanstalk：托管应用部署平台，帮助创建和管理常见 Web 应用运行环境。 | 题库记录为非正确选项 |

### Q116.3-为什么题库会这样选

题库记录的正确选项定位为：Amazon EC2：可配置虚拟服务器，适合需要 OS/实例级控制的计算工作负载。

它与题干要求的对象/约束直接对应。

其余选项虽然可能也属于同一大类，但主要解决不同问题。

---

---

## Q118-EC2-AMI与计算服务题

**题目：** A company needs to perform data processing once a week that typically takes about 5 hours to complete. Which AWS service should the company use for this workload?。

**选项：**

- A. AWS Lambda
- B. Amazon EC2
- C. AWS CodeDeploy
- D. AWS Wavelength

**主分类：** C4-03 EC2-AMI与计算服务题。

**题库记录答案：** `B`。

**社区投票：** B 96%

### Q118.1-题干怎么拆

现有题库没有提供独立 explanation。

这里按题干中的动作、对象和所有选项的服务定位进行比较。

### Q118.2-每个选项的定位

| 选项 | 题库内容 | 服务/概念定位 | 题库答案关系 |
|---|---|---|---|
| A | AWS Lambda | AWS Lambda：事件驱动的 Serverless 函数运行环境，无需管理服务器。 | 题库记录为非正确选项 |
| B | Amazon EC2 | Amazon EC2：可配置虚拟服务器，适合需要 OS/实例级控制的计算工作负载。 | 题库记录为正确选项 |
| C | AWS CodeDeploy | AWS CodeDeploy：自动化应用部署服务。项目资料将其视为题库历史/当前范围需复核项。 | 题库记录为非正确选项 |
| D | AWS Wavelength | AWS Wavelength：把 AWS 计算/存储靠近 5G 电信网络边缘。项目资料标记为当前范围外题库补充。 | 题库记录为非正确选项 |

### Q118.3-为什么题库会这样选

题库记录的正确选项定位为：Amazon EC2：可配置虚拟服务器，适合需要 OS/实例级控制的计算工作负载。

它与题干要求的对象/约束直接对应。

其余选项虽然可能也属于同一大类，但主要解决不同问题。

### Q118.4-⚠-争议/版本提示

- 涉及项目资料已提示需关注当前状态的词：wavelength, codedeploy。
- 本题同时收录到 `C4-27-旧题争议题与当前AWS差异.md`，不在这里强行替题库修正答案。

---

---

## Q121-EC2-AMI与计算服务题

**题目：** A company plans to deploy containers on AWS. The company wants full control of the compute resources that host the containers. Which AWS service will meet these requirements?。

**选项：**

- A. Amazon Elastic Kubernetes Service (Amazon EKS)
- B. AWS Fargate
- C. Amazon EC2
- D. Amazon Elastic Container Service (Amazon ECS)

**主分类：** C4-03 EC2-AMI与计算服务题。

**题库记录答案：** `C`。

**需求/考点标签：** Container。

**社区投票：** C 79%, D 21%。

### Q121.1-题干怎么拆

这道题先识别的不是某个服务名，而是这些约束：**Container**。

判断时应该先找到与这些约束同层、同数据模型或同运维目标的服务，再排除“看起来也属于 AWS，但解决的是另一个层面问题”的选项。

### Q121.2-每个选项的定位

| 选项 | 题库内容 | 服务/概念定位 | 题库答案关系 |
|---|---|---|---|
| A | Amazon Elastic Kubernetes Service (Amazon EKS) | Amazon EKS：AWS 托管 Kubernetes 控制面。 | 题库记录为非正确选项 |
| B | AWS Fargate | AWS Fargate：为 ECS/EKS 提供不需要管理底层服务器的容器计算能力。 | 题库记录为非正确选项 |
| C | Amazon EC2 | Amazon EC2：可配置虚拟服务器，适合需要 OS/实例级控制的计算工作负载。 | 题库记录为正确选项 |
| D | Amazon Elastic Container Service (Amazon ECS) | Amazon ECS：AWS 原生托管容器编排服务。 | 题库记录为非正确选项 |

### Q121.3-为什么题库会这样选

题库记录的正确选项定位为：Amazon EC2：可配置虚拟服务器，适合需要 OS/实例级控制的计算工作负载。

它与题干要求的对象/约束直接对应。

其余选项虽然可能也属于同一大类，但主要解决不同问题。

### Q121.4-⚠-争议/版本提示

- 社区评论存在明显质疑/版本差异信号
- 本题同时收录到 `C4-27-旧题争议题与当前AWS差异.md`，不在这里强行替题库修正答案。

---

---

## Q147-EC2-AMI与计算服务题

**题目：** A company wants its Amazon EC2 instances to operate in a highly available environment, even if there is a natural disaster in a particular geographic area. Which approach will achieve this goal?。

**选项：**

- A. Use EC2 instances in multiple AWS Regions.
- B. Use EC2 instances in multiple Amazon CloudFront locations.
- C. Use EC2 instances in multiple edge locations.
- D. Use EC2 instances in AWS Local Zones.

**主分类：** C4-03 EC2-AMI与计算服务题。

**题库记录答案：** `A`。

**需求/考点标签：** High Availability。

**社区投票：** A 100%

### Q147.1-题干怎么拆

这道题先识别的不是某个服务名，而是这些约束：**High Availability**。

判断时应该先找到与这些约束同层、同数据模型或同运维目标的服务，再排除“看起来也属于 AWS，但解决的是另一个层面问题”的选项。

### Q147.2-每个选项的定位

| 选项 | 题库内容 | 服务/概念定位 | 题库答案关系 |
|---|---|---|---|
| A | Use EC2 instances in multiple AWS Regions. | Amazon EC2：可配置虚拟服务器，适合需要 OS/实例级控制的计算工作负载。 | 题库记录为正确选项 |
| B | Use EC2 instances in multiple Amazon CloudFront locations. | Amazon CloudFront：AWS CDN，利用 Edge Location 缓存和分发内容。Amazon EC2：可配置虚拟服务器，适合需要 OS/实例级控制的计算工作负载。 | 题库记录为非正确选项 |
| C | Use EC2 instances in multiple edge locations. | Amazon EC2：可配置虚拟服务器，适合需要 OS/实例级控制的计算工作负载。 | 题库记录为非正确选项 |
| D | Use EC2 instances in AWS Local Zones. | Amazon EC2：可配置虚拟服务器，适合需要 OS/实例级控制的计算工作负载。 | 题库记录为非正确选项 |

### Q147.3-为什么题库会这样选

题库记录的正确选项定位为：Amazon EC2：可配置虚拟服务器，适合需要 OS/实例级控制的计算工作负载。

它与题干要求的对象/约束直接对应。

其余选项虽然可能也属于同一大类，但主要解决不同问题。

---

---

## Q152-EC2-AMI与计算服务题

**题目：** A company has an application with robust hardware requirements. The application must be accessed by students who are using lightweight, low-cost laptops. Which AWS service will help the company deploy the application without investing in backend infrastructure or high-end client hardware?

**选项：**

- A. Amazon AppStream 2.0
- B. AWS AppSync
- C. Amazon WorkLink
- D. AWS Elastic Beanstalk

**主分类：** C4-03 EC2-AMI与计算服务题。

**题库记录答案：** `A`。

**社区投票：** A 79%, D 21%。

### Q152.1-题干怎么拆

现有题库没有提供独立 explanation。

这里按题干中的动作、对象和所有选项的服务定位进行比较。

### Q152.2-每个选项的定位

| 选项 | 题库内容 | 服务/概念定位 | 题库答案关系 |
|---|---|---|---|
| A | Amazon AppStream 2.0 | 该选项是题库中的概念/服务描述。现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为正确选项 |
| B | AWS AppSync | 该选项是题库中的概念/服务描述。现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为非正确选项 |
| C | Amazon WorkLink | 该选项是题库中的概念/服务描述。现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为非正确选项 |
| D | AWS Elastic Beanstalk | AWS Elastic Beanstalk：托管应用部署平台，帮助创建和管理常见 Web 应用运行环境。 | 题库记录为非正确选项 |

### Q152.3-为什么题库会这样选

题库记录的正确选项定位为：该选项是题库中的概念/服务描述。

现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。

它与题干要求的对象/约束直接对应。

其余选项虽然可能也属于同一大类，但主要解决不同问题。

---

---

## Q183-EC2-AMI与计算服务题

**题目：** Which actions are examples of a company’s effort to rightsize its AWS resources to control cloud costs? (Choose two.)。

**选项：**

- A. Switch from Amazon RDS to Amazon DynamoDB to accommodate NoSQL datasets.
- B. Base the selection of Amazon EC2 instance types on past utilization patterns.
- C. Use Amazon S3 Lifecycle policies to move objects that users access infrequently to lower-cost storage tiers.
- D. Use Multi-AZ deployments for Amazon RDS.
- E. Replace existing Amazon EC2 instances with AWS Elastic Beanstalk.

**主分类：** C4-03 EC2-AMI与计算服务题。

**题库记录答案：** `BC`。

**社区投票：** BC 80%, AC 20%。

### Q183.1-题干怎么拆

现有题库没有提供独立 explanation。

这里按题干中的动作、对象和所有选项的服务定位进行比较。

### Q183.2-每个选项的定位

| 选项 | 题库内容 | 服务/概念定位 | 题库答案关系 |
|---|---|---|---|
| A | Switch from Amazon RDS to Amazon DynamoDB to accommodate NoSQL datasets. | Amazon DynamoDB：Serverless NoSQL Key-Value/Document 数据库，适合高规模、低延迟访问。Amazon RDS：托管关系数据库服务，负责大量数据库基础设施运维。 | 题库记录为非正确选项 |
| B | Base the selection of Amazon EC2 instance types on past utilization patterns. | Amazon EC2：可配置虚拟服务器，适合需要 OS/实例级控制的计算工作负载。 | 题库记录为正确选项 |
| C | Use Amazon S3 Lifecycle policies to move objects that users access infrequently to lower-cost storage tiers. | Amazon S3：高耐久、可扩展的对象存储，以 Bucket/Object 组织数据。 | 题库记录为正确选项 |
| D | Use Multi-AZ deployments for Amazon RDS. | Amazon RDS：托管关系数据库服务，负责大量数据库基础设施运维。 | 题库记录为非正确选项 |
| E | Replace existing Amazon EC2 instances with AWS Elastic Beanstalk. | AWS Elastic Beanstalk：托管应用部署平台，帮助创建和管理常见 Web 应用运行环境。Amazon EC2：可配置虚拟服务器，适合需要 OS/实例级控制的计算工作负载。 | 题库记录为非正确选项 |

### Q183.3-为什么题库会这样选

题库记录的正确选项定位为：Amazon EC2：可配置虚拟服务器，适合需要 OS/实例级控制的计算工作负载。

Amazon S3：高耐久、可扩展的对象存储，以 Bucket/Object 组织数据。

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

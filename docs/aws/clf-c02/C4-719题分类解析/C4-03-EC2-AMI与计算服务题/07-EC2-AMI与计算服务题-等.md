---
id: 07-EC2-AMI与计算服务题-等
sidebar_position: 7
---

# C4-03-EC2-AMI与计算服务题-EC2-AMI与计算服务题与EC2-AMI与计算服务题与EC2-AMI与计算服务题与EC2-AMI与计算服务题与EC2-AMI与计算服务题与EC2-AMI与计算服务题

> 本篇是《C4-03-EC2-AMI与计算服务题》的第7个分篇，主要包含：EC2-AMI与计算服务题、EC2-AMI与计算服务题、EC2-AMI与计算服务题、EC2-AMI与计算服务题、EC2-AMI与计算服务题、EC2-AMI与计算服务题。

## Q440-EC2-AMI与计算服务题

**题目：** A company wants to migrate a company’s on-premises container infrastructure to the AWS Cloud. The company wants to prevent unplanned administration and operation cost and adapt to a serverless architecture. Which AWS service will meet these requirements?

**选项：**

- A. Amazon Connect
- B. AWS Fargate
- C. Amazon Lightsail
- D. Amazon EC2

**主分类：** C4-03 EC2-AMI与计算服务题。

**题库记录答案：** `B`。

**需求/考点标签：** Serverless / Container / Hybrid Cloud / Migration。

**社区投票：** B 100%

### Q440.1-题干怎么拆

这道题先识别的不是某个服务名，而是这些约束：**Serverless、Container、Hybrid Cloud、Migration**。

判断时应该先找到与这些约束同层、同数据模型或同运维目标的服务，再排除“看起来也属于 AWS，但解决的是另一个层面问题”的选项。

### Q440.2-每个选项的定位

| 选项 | 题库内容 | 服务/概念定位 | 题库答案关系 |
|---|---|---|---|
| A | Amazon Connect | Amazon Connect：云联络中心服务。 | 题库记录为非正确选项 |
| B | AWS Fargate | AWS Fargate：为 ECS/EKS 提供不需要管理底层服务器的容器计算能力。 | 题库记录为正确选项 |
| C | Amazon Lightsail | Amazon Lightsail：面向简单网站/小型应用的简化云平台与可预测套餐。 | 题库记录为非正确选项 |
| D | Amazon EC2 | Amazon EC2：可配置虚拟服务器，适合需要 OS/实例级控制的计算工作负载。 | 题库记录为非正确选项 |

### Q440.3-为什么题库会这样选

题库记录的正确选项定位为：AWS Fargate：为 ECS/EKS 提供不需要管理底层服务器的容器计算能力。

它与题干要求的对象/约束直接对应。

其余选项虽然可能也属于同一大类，但主要解决不同问题。

---

---

## Q441-EC2-AMI与计算服务题

**题目：** A company wants its Amazon EC2 instances to be in different locations but share the same geographic area. The company also wants to use multiple power grids and independent networking connectivity for the EC2 instances. Which solution meets these requirements?

**选项：**

- A. Use EC2 instances in multiple edge locations in the same AWS Region.
- B. Use EC2 instances in multiple Availability Zones in the same AWS Region.
- C. Use EC2 instances in multiple Amazon Connect locations in the same AWS Region.
- D. Use EC2 instances in multiple AWS Artifact locations in the same AWS Region.

**主分类：** C4-03 EC2-AMI与计算服务题。

**题库记录答案：** `B`。

**社区投票：** B 100%

### Q441.1-题干怎么拆

现有题库没有提供独立 explanation。

这里按题干中的动作、对象和所有选项的服务定位进行比较。

### Q441.2-每个选项的定位

| 选项 | 题库内容 | 服务/概念定位 | 题库答案关系 |
|---|---|---|---|
| A | Use EC2 instances in multiple edge locations in the same AWS Region. | Amazon EC2：可配置虚拟服务器，适合需要 OS/实例级控制的计算工作负载。 | 题库记录为非正确选项 |
| B | Use EC2 instances in multiple Availability Zones in the same AWS Region. | Amazon EC2：可配置虚拟服务器，适合需要 OS/实例级控制的计算工作负载。 | 题库记录为正确选项 |
| C | Use EC2 instances in multiple Amazon Connect locations in the same AWS Region. | Amazon Connect：云联络中心服务。Amazon EC2：可配置虚拟服务器，适合需要 OS/实例级控制的计算工作负载。 | 题库记录为非正确选项 |
| D | Use EC2 instances in multiple AWS Artifact locations in the same AWS Region. | AWS Artifact：按需访问 AWS 合规报告和部分协议的门户。Amazon EC2：可配置虚拟服务器，适合需要 OS/实例级控制的计算工作负载。 | 题库记录为非正确选项 |

### Q441.3-为什么题库会这样选

题库记录的正确选项定位为：Amazon EC2：可配置虚拟服务器，适合需要 OS/实例级控制的计算工作负载。

它与题干要求的对象/约束直接对应。

其余选项虽然可能也属于同一大类，但主要解决不同问题。

---

---

## Q442-EC2-AMI与计算服务题

**题目：** An ecommerce company has deployed a new web application on Amazon EC2 instances. The company wants to distribute incoming HTTP traffic evenly across all running instances. Which AWS service or resource will meet this requirement?

**选项：**

- A. Amazon EC2 Auto Scaling
- B. Application Load Balancer
- C. Gateway Load Balancer
- D. Network Load Balancer

**主分类：** C4-03 EC2-AMI与计算服务题。

**题库记录答案：** `B`。

**社区投票：** B 100%

### Q442.1-题干怎么拆

现有题库没有提供独立 explanation。

这里按题干中的动作、对象和所有选项的服务定位进行比较。

### Q442.2-每个选项的定位

| 选项 | 题库内容 | 服务/概念定位 | 题库答案关系 |
|---|---|---|---|
| A | Amazon EC2 Auto Scaling | EC2 Auto Scaling：根据需求自动增加或减少 EC2 容量。Amazon EC2：可配置虚拟服务器，适合需要 OS/实例级控制的计算工作负载。 | 题库记录为非正确选项 |
| B | Application Load Balancer | Elastic Load Balancing：在多个后端目标间分发流量并提高可用性。 | 题库记录为正确选项 |
| C | Gateway Load Balancer | Elastic Load Balancing：在多个后端目标间分发流量并提高可用性。 | 题库记录为非正确选项 |
| D | Network Load Balancer | Elastic Load Balancing：在多个后端目标间分发流量并提高可用性。 | 题库记录为非正确选项 |

### Q442.3-为什么题库会这样选

题库记录的正确选项定位为：Elastic Load Balancing：在多个后端目标间分发流量并提高可用性。

它与题干要求的对象/约束直接对应。

其余选项虽然可能也属于同一大类，但主要解决不同问题。

---

---

## Q444-EC2-AMI与计算服务题

**题目：** A company wants to run CPU-intensive workload across multiple Amazon EC2 instances. Which EC2 instance type should the company use to meet this requirement?。

**选项：**

- A. General purpose instances
- B. Compute optimized instances
- C. Memory optimized instances
- D. Storage optimized instances

**主分类：** C4-03 EC2-AMI与计算服务题。

**题库记录答案：** `B`。

**社区投票：** B 100%

### Q444.1-题干怎么拆

现有题库没有提供独立 explanation。

这里按题干中的动作、对象和所有选项的服务定位进行比较。

### Q444.2-每个选项的定位

| 选项 | 题库内容 | 服务/概念定位 | 题库答案关系 |
|---|---|---|---|
| A | General purpose instances | 该选项是题库中的概念/服务描述。现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为非正确选项 |
| B | Compute optimized instances | 该选项是题库中的概念/服务描述。现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为正确选项 |
| C | Memory optimized instances | 该选项是题库中的概念/服务描述。现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为非正确选项 |
| D | Storage optimized instances | 该选项是题库中的概念/服务描述。现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为非正确选项 |

### Q444.3-为什么题库会这样选

题库记录的正确选项定位为：该选项是题库中的概念/服务描述。

现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。

它与题干要求的对象/约束直接对应。

其余选项虽然可能也属于同一大类，但主要解决不同问题。

---

---

## Q451-EC2-AMI与计算服务题

**题目：** A company is using AWS for all its IT infrastructure. The company's developers are allowed to deploy applications on their own. The developers want to deploy their applications without having to provision the infrastructure themselves. Which AWS service should the developers use to meet these requirements?

**选项：**

- A. AWS CloudFormation
- B. AWS CodeBuild
- C. AWS Elastic Beanstalk
- D. AWS CodeDeploy

**主分类：** C4-03 EC2-AMI与计算服务题。

**题库记录答案：** `C`。

**社区投票：** C 100%

### Q451.1-题干怎么拆

现有题库没有提供独立 explanation。

这里按题干中的动作、对象和所有选项的服务定位进行比较。

### Q451.2-每个选项的定位

| 选项 | 题库内容 | 服务/概念定位 | 题库答案关系 |
|---|---|---|---|
| A | AWS CloudFormation | AWS CloudFormation：AWS Infrastructure as Code，用模板声明和部署资源。 | 题库记录为非正确选项 |
| B | AWS CodeBuild | AWS CodeBuild：托管代码构建与测试服务。 | 题库记录为非正确选项 |
| C | AWS Elastic Beanstalk | AWS Elastic Beanstalk：托管应用部署平台，帮助创建和管理常见 Web 应用运行环境。 | 题库记录为正确选项 |
| D | AWS CodeDeploy | AWS CodeDeploy：自动化应用部署服务。项目资料将其视为题库历史/当前范围需复核项。 | 题库记录为非正确选项 |

### Q451.3-为什么题库会这样选

题库记录的正确选项定位为：AWS Elastic Beanstalk：托管应用部署平台，帮助创建和管理常见 Web 应用运行环境。

它与题干要求的对象/约束直接对应。

其余选项虽然可能也属于同一大类，但主要解决不同问题。

### Q451.4-⚠-争议/版本提示

- 涉及项目资料已提示需关注当前状态的词：codedeploy
- 本题同时收录到 `C4-27-旧题争议题与当前AWS差异.md`，不在这里强行替题库修正答案。

---

---

## Q463-EC2-AMI与计算服务题

**题目：** A company wants to log in securely to Linux Amazon EC2 instances. How can the company accomplish this goal?。

**选项：**

- A. Use SSH keys.
- B. Use a VPN.
- C. Use end-to-end encryption.
- D. Use Amazon Route 53.

**主分类：** C4-03 EC2-AMI与计算服务题。

**题库记录答案：** `A`。

**社区投票：** A 100%

### Q463.1-题干怎么拆

现有题库没有提供独立 explanation。

这里按题干中的动作、对象和所有选项的服务定位进行比较。

### Q463.2-每个选项的定位

| 选项 | 题库内容 | 服务/概念定位 | 题库答案关系 |
|---|---|---|---|
| A | Use SSH keys. | 该选项是题库中的概念/服务描述。现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为正确选项 |
| B | Use a VPN. | AWS Site-to-Site VPN：通过 Internet 建立加密隧道连接本地网络与 AWS。 | 题库记录为非正确选项 |
| C | Use end-to-end encryption. | 该选项是题库中的概念/服务描述。现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为非正确选项 |
| D | Use Amazon Route 53. | Amazon Route 53：AWS 托管 DNS 与 DNS 路由服务。 | 题库记录为非正确选项 |

### Q463.3-为什么题库会这样选

题库记录的正确选项定位为：该选项是题库中的概念/服务描述。

现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。

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

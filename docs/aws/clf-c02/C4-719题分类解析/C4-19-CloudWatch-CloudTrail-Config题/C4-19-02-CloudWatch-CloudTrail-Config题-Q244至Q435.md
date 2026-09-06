---
id: C4-19-02-CloudWatch-CloudTrail-Config题-Q244至Q435
sidebar_position: 2
---

# C4-19-02-CloudWatch-CloudTrail-Config题-Q244至Q435

> 本篇是《C4-19-CloudWatch-CloudTrail-Config题》的第2个分篇，主要包含：CloudWatch-CloudTrail-Config题、CloudWatch-CloudTrail-Config题、CloudWatch-CloudTrail-Config题、CloudWatch-CloudTrail-Config题、CloudWatch-CloudTrail-Config题、CloudWatch-CloudTrail-Config题、CloudWatch-CloudTrail-Config题。

## Q244-CloudWatch-CloudTrail-Config题

**题目：** A company wants to improve its security posture by reviewing user activity through API calls. Which AWS service will meet this requirement?。

**选项：**

- A. AWS WAF
- B. Amazon Detective
- C. Amazon CloudWatch
- D. AWS CloudTrail

**主分类：** C4-19 CloudWatch-CloudTrail-Config题。

**题库记录答案：** `D`。

**需求/考点标签：** 谁执行了API操作。

**社区投票：** D 100%

### Q244.1-题干怎么拆

这道题先识别的不是某个服务名，而是这些约束：**谁执行了API操作**。

判断时应该先找到与这些约束同层、同数据模型或同运维目标的服务，再排除“看起来也属于 AWS，但解决的是另一个层面问题”的选项。

### Q244.2-每个选项的定位

| 选项 | 题库内容 | 服务/概念定位 | 题库答案关系 |
|---|---|---|---|
| A | AWS WAF | AWS WAF：Web 应用防火墙，过滤 HTTP(S) Web 请求。 | 题库记录为非正确选项 |
| B | Amazon Detective | Amazon Detective：基于安全数据帮助调查潜在安全事件和根因。 | 题库记录为非正确选项 |
| C | Amazon CloudWatch | Amazon CloudWatch：Metrics/Logs/Alarms 等运行时监控与可观测性服务。 | 题库记录为非正确选项 |
| D | AWS CloudTrail | AWS CloudTrail：记录 AWS API/账号活动，回答谁在什么时候做了什么操作。 | 题库记录为正确选项 |

### Q244.3-为什么题库会这样选

题库记录的正确选项定位为：AWS CloudTrail：记录 AWS API/账号活动，回答谁在什么时候做了什么操作。

它与题干要求的对象/约束直接对应。

其余选项虽然可能也属于同一大类，但主要解决不同问题。

---

---

## Q314-CloudWatch-CloudTrail-Config题

**题目：** An ecommerce company wants to use Amazon EC2 Auto Scaling to add and remove EC2 instances based on CPU utilization. Which AWS service or feature can initiate an Amazon EC2 Auto Scaling action to achieve this goal?。

**选项：**

- A. Amazon Simple Queue Service (Amazon SQS)
- B. Amazon Simple Notification Service (Amazon SNS)
- C. AWS Systems Manager
- D. Amazon CloudWatch alarm

**主分类：** C4-19 CloudWatch-CloudTrail-Config题。

**题库记录答案：** `D`。

**需求/考点标签：** 运行时指标监控。

**社区投票：** D 100%

### Q314.1-题干怎么拆

这道题先识别的不是某个服务名，而是这些约束：**运行时指标监控**。

判断时应该先找到与这些约束同层、同数据模型或同运维目标的服务，再排除“看起来也属于 AWS，但解决的是另一个层面问题”的选项。

### Q314.2-每个选项的定位

| 选项 | 题库内容 | 服务/概念定位 | 题库答案关系 |
|---|---|---|---|
| A | Amazon Simple Queue Service (Amazon SQS) | Amazon SQS：托管消息队列，用于异步、缓冲和系统解耦。 | 题库记录为非正确选项 |
| B | Amazon Simple Notification Service (Amazon SNS) | Amazon SNS：Pub/Sub 消息与通知分发，一个发布可扇出到多个订阅者。 | 题库记录为非正确选项 |
| C | AWS Systems Manager | AWS Systems Manager：集中运维和自动化管理 AWS/混合环境中的节点与资源。 | 题库记录为非正确选项 |
| D | Amazon CloudWatch alarm | Amazon CloudWatch：Metrics/Logs/Alarms 等运行时监控与可观测性服务。 | 题库记录为正确选项 |

### Q314.3-为什么题库会这样选

题库记录的正确选项定位为：Amazon CloudWatch：Metrics/Logs/Alarms 等运行时监控与可观测性服务。

它与题干要求的对象/约束直接对应。

其余选项虽然可能也属于同一大类，但主要解决不同问题。

---

---

## Q324-CloudWatch-CloudTrail-Config题

**题目：** Which mechanism allows developers to access AWS services from application code?。

**选项：**

- A. AWS Software Development Kit
- B. AWS Management Console
- C. AWS CodePipeline
- D. AWS Config

**主分类：** C4-19 CloudWatch-CloudTrail-Config题。

**题库记录答案：** `A`。

**社区投票：** A 100%

### Q324.1-题干怎么拆

现有题库没有提供独立 explanation。

这里按题干中的动作、对象和所有选项的服务定位进行比较。

### Q324.2-每个选项的定位

| 选项 | 题库内容 | 服务/概念定位 | 题库答案关系 |
|---|---|---|---|
| A | AWS Software Development Kit | 该选项是题库中的概念/服务描述。现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为正确选项 |
| B | AWS Management Console | 该选项描述 Shared Responsibility 中 AWS 侧的基础设施责任。 | 题库记录为非正确选项 |
| C | AWS CodePipeline | AWS CodePipeline：持续交付 Pipeline 编排服务。 | 题库记录为非正确选项 |
| D | AWS Config | AWS Config：记录资源配置与变化，并可按规则检查配置合规性。 | 题库记录为非正确选项 |

### Q324.3-为什么题库会这样选

题库记录的正确选项定位为：该选项是题库中的概念/服务描述。

现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。

它与题干要求的对象/约束直接对应。

其余选项虽然可能也属于同一大类，但主要解决不同问题。

---

---

## Q373-CloudWatch-CloudTrail-Config题

**题目：** Which AWS service makes it easier to monitor and troubleshoot application logs and cloud resources?。

**选项：**

- A. Amazon EC2
- B. AWS Identity and Access Management (IAM)
- C. Amazon CloudWatch
- D. AWS CloudTrail

**主分类：** C4-19 CloudWatch-CloudTrail-Config题。

**题库记录答案：** `C`。

**需求/考点标签：** Monitoring。

**社区投票：** C 100%

### Q373.1-题干怎么拆

这道题先识别的不是某个服务名，而是这些约束：**Monitoring**。

判断时应该先找到与这些约束同层、同数据模型或同运维目标的服务，再排除“看起来也属于 AWS，但解决的是另一个层面问题”的选项。

### Q373.2-每个选项的定位

| 选项 | 题库内容 | 服务/概念定位 | 题库答案关系 |
|---|---|---|---|
| A | Amazon EC2 | Amazon EC2：可配置虚拟服务器，适合需要 OS/实例级控制的计算工作负载。 | 题库记录为非正确选项 |
| B | AWS Identity and Access Management (IAM) | AWS IAM：AWS 身份、认证授权与权限策略核心服务。 | 题库记录为非正确选项 |
| C | Amazon CloudWatch | Amazon CloudWatch：Metrics/Logs/Alarms 等运行时监控与可观测性服务。 | 题库记录为正确选项 |
| D | AWS CloudTrail | AWS CloudTrail：记录 AWS API/账号活动，回答谁在什么时候做了什么操作。 | 题库记录为非正确选项 |

### Q373.3-为什么题库会这样选

题库记录的正确选项定位为：Amazon CloudWatch：Metrics/Logs/Alarms 等运行时监控与可观测性服务。

它与题干要求的对象/约束直接对应。

其余选项虽然可能也属于同一大类，但主要解决不同问题。

---

---

## Q378-CloudWatch-CloudTrail-Config题

**题目：** Which AWS service or tool will monitor AWS resources and applications in real time?。

**选项：**

- A. AWS Trusted Advisor
- B. Amazon CloudWatch
- C. AWS CloudTrail
- D. AWS Cost Explorer

**主分类：** C4-19 CloudWatch-CloudTrail-Config题。

**题库记录答案：** `B`。

**需求/考点标签：** Monitoring。

**社区投票：** B 100%

### Q378.1-题干怎么拆

这道题先识别的不是某个服务名，而是这些约束：**Monitoring**。

判断时应该先找到与这些约束同层、同数据模型或同运维目标的服务，再排除“看起来也属于 AWS，但解决的是另一个层面问题”的选项。

### Q378.2-每个选项的定位

| 选项 | 题库内容 | 服务/概念定位 | 题库答案关系 |
|---|---|---|---|
| A | AWS Trusted Advisor | AWS Trusted Advisor：根据 AWS 最佳实践提供成本、安全、性能、可靠性等检查建议。 | 题库记录为非正确选项 |
| B | Amazon CloudWatch | Amazon CloudWatch：Metrics/Logs/Alarms 等运行时监控与可观测性服务。 | 题库记录为正确选项 |
| C | AWS CloudTrail | AWS CloudTrail：记录 AWS API/账号活动，回答谁在什么时候做了什么操作。 | 题库记录为非正确选项 |
| D | AWS Cost Explorer | AWS Cost Explorer：分析历史/当前 AWS 成本和用量趋势。 | 题库记录为非正确选项 |

### Q378.3-为什么题库会这样选

题库记录的正确选项定位为：Amazon CloudWatch：Metrics/Logs/Alarms 等运行时监控与可观测性服务。

它与题干要求的对象/约束直接对应。

其余选项虽然可能也属于同一大类，但主要解决不同问题。

---

---

## Q388-CloudWatch-CloudTrail-Config题

**题目：** A company wants to use AWS Managed Services (AMS) for operational support and wants to understand the scope of AMS. Which AMS feature will meet these requirements?。

**选项：**

- A. Landing zone and network management
- B. Customer application development
- C. DevSecOps pipeline configuration
- D. Application log monitoring

**主分类：** C4-19 CloudWatch-CloudTrail-Config题。

**题库记录答案：** `A`。

**社区投票：** A 80%, D 20%。

### Q388.1-题干怎么拆

现有题库没有提供独立 explanation。

这里按题干中的动作、对象和所有选项的服务定位进行比较。

### Q388.2-每个选项的定位

| 选项 | 题库内容 | 服务/概念定位 | 题库答案关系 |
|---|---|---|---|
| A | Landing zone and network management | 该选项是题库中的概念/服务描述。现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为正确选项 |
| B | Customer application development | 该选项是题库中的概念/服务描述。现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为非正确选项 |
| C | DevSecOps pipeline configuration | 该选项是题库中的概念/服务描述。现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为非正确选项 |
| D | Application log monitoring | 该选项是题库中的概念/服务描述。现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为非正确选项 |

### Q388.3-为什么题库会这样选

题库记录的正确选项定位为：该选项是题库中的概念/服务描述。

现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。

它与题干要求的对象/约束直接对应。

其余选项虽然可能也属于同一大类，但主要解决不同问题。

---

---

## Q435-CloudWatch-CloudTrail-Config题

**题目：** A company needs to identify who accessed an AWS service and what action was performed for a given time period. Which AWS service should the company use to meet this requirement?。

**选项：**

- A. Amazon CloudWatch
- B. AWS CloudTrail
- C. AWS Security Hub
- D. Amazon Inspector

**主分类：** C4-19 CloudWatch-CloudTrail-Config题。

**题库记录答案：** `B`。

**社区投票：** B 100%

### Q435.1-题干怎么拆

现有题库没有提供独立 explanation。

这里按题干中的动作、对象和所有选项的服务定位进行比较。

### Q435.2-每个选项的定位

| 选项 | 题库内容 | 服务/概念定位 | 题库答案关系 |
|---|---|---|---|
| A | Amazon CloudWatch | Amazon CloudWatch：Metrics/Logs/Alarms 等运行时监控与可观测性服务。 | 题库记录为非正确选项 |
| B | AWS CloudTrail | AWS CloudTrail：记录 AWS API/账号活动，回答谁在什么时候做了什么操作。 | 题库记录为正确选项 |
| C | AWS Security Hub | AWS Security Hub：聚合安全发现并提供安全态势管理。 | 题库记录为非正确选项 |
| D | Amazon Inspector | Amazon Inspector：持续漏洞管理与工作负载漏洞扫描。 | 题库记录为非正确选项 |

### Q435.3-为什么题库会这样选

题库记录的正确选项定位为：AWS CloudTrail：记录 AWS API/账号活动，回答谁在什么时候做了什么操作。

它与题干要求的对象/约束直接对应。

其余选项虽然可能也属于同一大类，但主要解决不同问题。

---

## 本篇概述

- 本篇梳理了CloudWatch-CloudTrail-Config题相关的核心知识、适用场景与判断要点。
- 本篇梳理了CloudWatch-CloudTrail-Config题相关的核心知识、适用场景与判断要点。
- 本篇梳理了CloudWatch-CloudTrail-Config题相关的核心知识、适用场景与判断要点。
- 本篇梳理了CloudWatch-CloudTrail-Config题相关的核心知识、适用场景与判断要点。
- 本篇梳理了CloudWatch-CloudTrail-Config题相关的核心知识、适用场景与判断要点。
- 本篇梳理了CloudWatch-CloudTrail-Config题相关的核心知识、适用场景与判断要点。
- 本篇梳理了CloudWatch-CloudTrail-Config题相关的核心知识、适用场景与判断要点。

[返回本章总述](./C4-19-00-章节总述.md)｜[查看本章概述](./C4-19-99-章节概述.md)

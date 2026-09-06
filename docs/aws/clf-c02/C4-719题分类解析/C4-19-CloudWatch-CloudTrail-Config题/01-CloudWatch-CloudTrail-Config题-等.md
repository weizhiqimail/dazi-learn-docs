---
id: 01-CloudWatch-CloudTrail-Config题-等
sidebar_position: 1
---

# C4-19-CloudWatch-CloudTrail-Config题-CloudWatch-CloudTrail-Config题与CloudWatch-CloudTrail-Config题与CloudWatch-CloudTrail-Config题与CloudWatch-CloudTrail-Config题与CloudWatch-CloudTrail-Config题与CloudWatch-CloudTrail-Config题与CloudWatch-CloudTrail-Config题

> 本篇是《C4-19-CloudWatch-CloudTrail-Config题》的第1个分篇，主要包含：CloudWatch-CloudTrail-Config题、CloudWatch-CloudTrail-Config题、CloudWatch-CloudTrail-Config题、CloudWatch-CloudTrail-Config题、CloudWatch-CloudTrail-Config题、CloudWatch-CloudTrail-Config题、CloudWatch-CloudTrail-Config题。

## Q27-CloudWatch-CloudTrail-Config题

**题目：** A company wants to receive a notification when a specific AWS cost threshold is reached. Which AWS services or tools can the company use to meet this requirement? (Choose two.)。

**选项：**

- A. Amazon Simple Queue Service (Amazon SQS)
- B. AWS Budgets
- C. Cost Explorer
- D. Amazon CloudWatch
- E. AWS Cost and Usage Report

**主分类：** C4-19 CloudWatch-CloudTrail-Config题。

**题库记录答案：** `BD`。

**需求/考点标签：** 预算阈值告警。

**社区投票：** BD 93%, Other 7%。

### Q27.1-题干怎么拆

这道题先识别的不是某个服务名，而是这些约束：**预算阈值告警**。

判断时应该先找到与这些约束同层、同数据模型或同运维目标的服务，再排除“看起来也属于 AWS，但解决的是另一个层面问题”的选项。

### Q27.2-每个选项的定位

| 选项 | 题库内容 | 服务/概念定位 | 题库答案关系 |
|---|---|---|---|
| A | Amazon Simple Queue Service (Amazon SQS) | Amazon SQS：托管消息队列，用于异步、缓冲和系统解耦。 | 题库记录为非正确选项 |
| B | AWS Budgets | AWS Budgets：设置成本/用量预算阈值和告警。 | 题库记录为正确选项 |
| C | Cost Explorer | AWS Cost Explorer：分析历史/当前 AWS 成本和用量趋势。 | 题库记录为非正确选项 |
| D | Amazon CloudWatch | Amazon CloudWatch：Metrics/Logs/Alarms 等运行时监控与可观测性服务。 | 题库记录为正确选项 |
| E | AWS Cost and Usage Report | AWS Cost and Usage Report：提供细粒度成本与使用明细数据。 | 题库记录为非正确选项 |

### Q27.3-为什么题库会这样选

题库记录的正确选项定位为：AWS Budgets：设置成本/用量预算阈值和告警。

Amazon CloudWatch：Metrics/Logs/Alarms 等运行时监控与可观测性服务。

它与题干要求的对象/约束直接对应。

其余选项虽然可能也属于同一大类，但主要解决不同问题。

---

---

## Q41-CloudWatch-CloudTrail-Config题

**题目：** Which service enables customers to audit API calls in their AWS accounts?。

**选项：**

- A. AWS CloudTrail
- B. AWS Trusted Advisor
- C. Amazon Inspector
- D. AWS X-Ray

**主分类：** C4-19 CloudWatch-CloudTrail-Config题。

**题库记录答案：** `A`。

**需求/考点标签：** 谁执行了API操作。

**社区投票：** A 100%

### Q41.1-题干怎么拆

这道题先识别的不是某个服务名，而是这些约束：**谁执行了API操作**。

判断时应该先找到与这些约束同层、同数据模型或同运维目标的服务，再排除“看起来也属于 AWS，但解决的是另一个层面问题”的选项。

### Q41.2-每个选项的定位

| 选项 | 题库内容 | 服务/概念定位 | 题库答案关系 |
|---|---|---|---|
| A | AWS CloudTrail | AWS CloudTrail：记录 AWS API/账号活动，回答谁在什么时候做了什么操作。 | 题库记录为正确选项 |
| B | AWS Trusted Advisor | AWS Trusted Advisor：根据 AWS 最佳实践提供成本、安全、性能、可靠性等检查建议。 | 题库记录为非正确选项 |
| C | Amazon Inspector | Amazon Inspector：持续漏洞管理与工作负载漏洞扫描。 | 题库记录为非正确选项 |
| D | AWS X-Ray | 该选项是题库中的概念/服务描述。现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为非正确选项 |

### Q41.3-为什么题库会这样选

题库记录的正确选项定位为：AWS CloudTrail：记录 AWS API/账号活动，回答谁在什么时候做了什么操作。

它与题干要求的对象/约束直接对应。

其余选项虽然可能也属于同一大类，但主要解决不同问题。

---

---

## Q60-CloudWatch-CloudTrail-Config题

**题目：** Which AWS service can identify when an Amazon EC2 instance was terminated?。

**选项：**

- A. AWS Identity and Access Management (IAM)
- B. AWS CloudTrail
- C. AWS Compute Optimizer
- D. Amazon EventBridge

**主分类：** C4-19 CloudWatch-CloudTrail-Config题。

**题库记录答案：** `B`。

**社区投票：** B 100%

### Q60.1-题干怎么拆

现有题库没有提供独立 explanation。

这里按题干中的动作、对象和所有选项的服务定位进行比较。

### Q60.2-每个选项的定位

| 选项 | 题库内容 | 服务/概念定位 | 题库答案关系 |
|---|---|---|---|
| A | AWS Identity and Access Management (IAM) | AWS IAM：AWS 身份、认证授权与权限策略核心服务。 | 题库记录为非正确选项 |
| B | AWS CloudTrail | AWS CloudTrail：记录 AWS API/账号活动，回答谁在什么时候做了什么操作。 | 题库记录为正确选项 |
| C | AWS Compute Optimizer | AWS Compute Optimizer：根据历史利用率等数据提供资源规格优化建议。 | 题库记录为非正确选项 |
| D | Amazon EventBridge | Amazon EventBridge：事件总线和规则路由服务，用事件来源/模式连接多个目标。 | 题库记录为非正确选项 |

### Q60.3-为什么题库会这样选

题库记录的正确选项定位为：AWS CloudTrail：记录 AWS API/账号活动，回答谁在什么时候做了什么操作。

它与题干要求的对象/约束直接对应。

其余选项虽然可能也属于同一大类，但主要解决不同问题。

---

---

## Q111-CloudWatch-CloudTrail-Config题

**题目：** A company needs to track the activity in its AWS accounts, and needs to know when an API call is made against its AWS resources. Which AWS tool or service can be used to meet these requirements?。

**选项：**

- A. Amazon CloudWatch
- B. Amazon Inspector
- C. AWS CloudTrail
- D. AWS IAM

**主分类：** C4-19 CloudWatch-CloudTrail-Config题。

**题库记录答案：** `C`。

**社区投票：** C 100%

### Q111.1-题干怎么拆

现有题库没有提供独立 explanation。

这里按题干中的动作、对象和所有选项的服务定位进行比较。

### Q111.2-每个选项的定位

| 选项 | 题库内容 | 服务/概念定位 | 题库答案关系 |
|---|---|---|---|
| A | Amazon CloudWatch | Amazon CloudWatch：Metrics/Logs/Alarms 等运行时监控与可观测性服务。 | 题库记录为非正确选项 |
| B | Amazon Inspector | Amazon Inspector：持续漏洞管理与工作负载漏洞扫描。 | 题库记录为非正确选项 |
| C | AWS CloudTrail | AWS CloudTrail：记录 AWS API/账号活动，回答谁在什么时候做了什么操作。 | 题库记录为正确选项 |
| D | AWS IAM | AWS IAM：AWS 身份、认证授权与权限策略核心服务。 | 题库记录为非正确选项 |

### Q111.3-为什么题库会这样选

题库记录的正确选项定位为：AWS CloudTrail：记录 AWS API/账号活动，回答谁在什么时候做了什么操作。

它与题干要求的对象/约束直接对应。

其余选项虽然可能也属于同一大类，但主要解决不同问题。

---

---

## Q155-CloudWatch-CloudTrail-Config题

**题目：** Which AWS service helps users audit API activity across their AWS account?。

**选项：**

- A. AWS CloudTrail
- B. Amazon Inspector
- C. AWS WAF
- D. AWS Config

**主分类：** C4-19 CloudWatch-CloudTrail-Config题。

**题库记录答案：** `A`。

**需求/考点标签：** Audit Trail。

**社区投票：** A 100%

### Q155.1-题干怎么拆

这道题先识别的不是某个服务名，而是这些约束：**Audit Trail**。

判断时应该先找到与这些约束同层、同数据模型或同运维目标的服务，再排除“看起来也属于 AWS，但解决的是另一个层面问题”的选项。

### Q155.2-每个选项的定位

| 选项 | 题库内容 | 服务/概念定位 | 题库答案关系 |
|---|---|---|---|
| A | AWS CloudTrail | AWS CloudTrail：记录 AWS API/账号活动，回答谁在什么时候做了什么操作。 | 题库记录为正确选项 |
| B | Amazon Inspector | Amazon Inspector：持续漏洞管理与工作负载漏洞扫描。 | 题库记录为非正确选项 |
| C | AWS WAF | AWS WAF：Web 应用防火墙，过滤 HTTP(S) Web 请求。 | 题库记录为非正确选项 |
| D | AWS Config | AWS Config：记录资源配置与变化，并可按规则检查配置合规性。 | 题库记录为非正确选项 |

### Q155.3-为什么题库会这样选

题库记录的正确选项定位为：AWS CloudTrail：记录 AWS API/账号活动，回答谁在什么时候做了什么操作。

它与题干要求的对象/约束直接对应。

其余选项虽然可能也属于同一大类，但主要解决不同问题。

---

---

## Q221-CloudWatch-CloudTrail-Config题

**题目：** Which AWS service is used to track, record, and audit configuration changes made to AWS resources?。

**选项：**

- A. AWS Shield
- B. AWS Config
- C. AWS IAM
- D. Amazon Inspector

**主分类：** C4-19 CloudWatch-CloudTrail-Config题。

**题库记录答案：** `B`。

**需求/考点标签：** 配置变化与合规。

**社区投票：** B 100%

### Q221.1-题干怎么拆

这道题先识别的不是某个服务名，而是这些约束：**配置变化与合规**。

判断时应该先找到与这些约束同层、同数据模型或同运维目标的服务，再排除“看起来也属于 AWS，但解决的是另一个层面问题”的选项。

### Q221.2-每个选项的定位

| 选项 | 题库内容 | 服务/概念定位 | 题库答案关系 |
|---|---|---|---|
| A | AWS Shield | AWS Shield：AWS DDoS 防护服务。 | 题库记录为非正确选项 |
| B | AWS Config | AWS Config：记录资源配置与变化，并可按规则检查配置合规性。 | 题库记录为正确选项 |
| C | AWS IAM | AWS IAM：AWS 身份、认证授权与权限策略核心服务。 | 题库记录为非正确选项 |
| D | Amazon Inspector | Amazon Inspector：持续漏洞管理与工作负载漏洞扫描。 | 题库记录为非正确选项 |

### Q221.3-为什么题库会这样选

题库记录的正确选项定位为：AWS Config：记录资源配置与变化，并可按规则检查配置合规性。

它与题干要求的对象/约束直接对应。

其余选项虽然可能也属于同一大类，但主要解决不同问题。

---

---

## Q232-CloudWatch-CloudTrail-Config题

**题目：** What can a user accomplish using AWS CloudTrail?。

**选项：**

- A. Generate an IAM user credentials report.
- B. Record API calls made to AWS services.
- C. Assess the compliance of AWS resource configurations with policies and guidelines.
- D. Ensure that Amazon EC2 instances are patched with the latest security updates.

**主分类：** C4-19 CloudWatch-CloudTrail-Config题。

**题库记录答案：** `B`。

**需求/考点标签：** 谁执行了API操作。

**社区投票：** B 100%

### Q232.1-题干怎么拆

这道题先识别的不是某个服务名，而是这些约束：**谁执行了API操作**。

判断时应该先找到与这些约束同层、同数据模型或同运维目标的服务，再排除“看起来也属于 AWS，但解决的是另一个层面问题”的选项。

### Q232.2-每个选项的定位

| 选项 | 题库内容 | 服务/概念定位 | 题库答案关系 |
|---|---|---|---|
| A | Generate an IAM user credentials report. | AWS IAM：AWS 身份、认证授权与权限策略核心服务。 | 题库记录为非正确选项 |
| B | Record API calls made to AWS services. | 该选项是题库中的概念/服务描述。现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为正确选项 |
| C | Assess the compliance of AWS resource configurations with policies and guidelines. | 该选项是题库中的概念/服务描述。现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为非正确选项 |
| D | Ensure that Amazon EC2 instances are patched with the latest security updates. | Amazon EC2：可配置虚拟服务器，适合需要 OS/实例级控制的计算工作负载。 | 题库记录为非正确选项 |

### Q232.3-为什么题库会这样选

题库记录的正确选项定位为：该选项是题库中的概念/服务描述。

现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。

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

[返回本章总述](./00-总述.md)｜[查看本章概述](./99-概述.md)

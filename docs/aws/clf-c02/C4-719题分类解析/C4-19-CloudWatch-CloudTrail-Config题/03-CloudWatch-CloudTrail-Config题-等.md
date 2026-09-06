---
id: 03-CloudWatch-CloudTrail-Config题-等
sidebar_position: 3
---

# C4-19-CloudWatch-CloudTrail-Config题-CloudWatch-CloudTrail-Config题与CloudWatch-CloudTrail-Config题与CloudWatch-CloudTrail-Config题与CloudWatch-CloudTrail-Config题与CloudWatch-CloudTrail-Config题与CloudWatch-CloudTrail-Config题与CloudWatch-CloudTrail-Config题

> 本篇是《C4-19-CloudWatch-CloudTrail-Config题》的第3个分篇，主要包含：CloudWatch-CloudTrail-Config题、CloudWatch-CloudTrail-Config题、CloudWatch-CloudTrail-Config题、CloudWatch-CloudTrail-Config题、CloudWatch-CloudTrail-Config题、CloudWatch-CloudTrail-Config题、CloudWatch-CloudTrail-Config题。

## Q470-CloudWatch-CloudTrail-Config题

**题目：** Which AWS service can generate information that can be used by external auditors?。

**选项：**

- A. Amazon Cognito
- B. Amazon FSx
- C. AWS Config
- D. Amazon Inspector

**主分类：** C4-19 CloudWatch-CloudTrail-Config题。

**题库记录答案：** `C`。

**需求/考点标签：** Audit Trail。

**社区投票：** C 100%

### Q470.1-题干怎么拆

这道题先识别的不是某个服务名，而是这些约束：**Audit Trail**。

判断时应该先找到与这些约束同层、同数据模型或同运维目标的服务，再排除“看起来也属于 AWS，但解决的是另一个层面问题”的选项。

### Q470.2-每个选项的定位

| 选项 | 题库内容 | 服务/概念定位 | 题库答案关系 |
|---|---|---|---|
| A | Amazon Cognito | Amazon Cognito：面向 Web/Mobile 应用终端用户的身份注册、登录与联合身份能力。 | 题库记录为非正确选项 |
| B | Amazon FSx | Amazon FSx：托管专业文件系统家族，覆盖 Windows/高性能等文件工作负载。 | 题库记录为非正确选项 |
| C | AWS Config | AWS Config：记录资源配置与变化，并可按规则检查配置合规性。 | 题库记录为正确选项 |
| D | Amazon Inspector | Amazon Inspector：持续漏洞管理与工作负载漏洞扫描。 | 题库记录为非正确选项 |

### Q470.3-为什么题库会这样选

题库记录的正确选项定位为：AWS Config：记录资源配置与变化，并可按规则检查配置合规性。

它与题干要求的对象/约束直接对应。

其余选项虽然可能也属于同一大类，但主要解决不同问题。

---

---

## Q504-CloudWatch-CloudTrail-Config题

**题目：** Which AWS service or feature supports governance, compliance, and risk auditing of AWS accounts?。

**选项：**

- A. Multi-factor authentication (MFA)
- B. AWS Lambda
- C. Amazon Simple Notification Service (Amazon SNS)
- D. AWS CloudTrail

**主分类：** C4-19 CloudWatch-CloudTrail-Config题。

**题库记录答案：** `D`。

**需求/考点标签：** 配置变化与合规。

**社区投票：** D 100%

### Q504.1-题干怎么拆

这道题先识别的不是某个服务名，而是这些约束：**配置变化与合规**。

判断时应该先找到与这些约束同层、同数据模型或同运维目标的服务，再排除“看起来也属于 AWS，但解决的是另一个层面问题”的选项。

### Q504.2-每个选项的定位

| 选项 | 题库内容 | 服务/概念定位 | 题库答案关系 |
|---|---|---|---|
| A | Multi-factor authentication (MFA) | MFA：多因素认证，增强账号登录安全。 | 题库记录为非正确选项 |
| B | AWS Lambda | AWS Lambda：事件驱动的 Serverless 函数运行环境，无需管理服务器。 | 题库记录为非正确选项 |
| C | Amazon Simple Notification Service (Amazon SNS) | Amazon SNS：Pub/Sub 消息与通知分发，一个发布可扇出到多个订阅者。 | 题库记录为非正确选项 |
| D | AWS CloudTrail | AWS CloudTrail：记录 AWS API/账号活动，回答谁在什么时候做了什么操作。 | 题库记录为正确选项 |

### Q504.3-为什么题库会这样选

题库记录的正确选项定位为：AWS CloudTrail：记录 AWS API/账号活动，回答谁在什么时候做了什么操作。

它与题干要求的对象/约束直接对应。

其余选项虽然可能也属于同一大类，但主要解决不同问题。

---

---

## Q505-CloudWatch-CloudTrail-Config题

**题目：** Which AWS Cloud design principle is a company using when the company implements AWS CloudTrail?。

**选项：**

- A. Activate traceability.
- B. Use serverless compute architectures.
- C. Perform operations as code.
- D. Go global in minutes.

**主分类：** C4-19 CloudWatch-CloudTrail-Config题。

**题库记录答案：** `A`。

**需求/考点标签：** 谁执行了API操作。

**社区投票：** A 100%

### Q505.1-题干怎么拆

这道题先识别的不是某个服务名，而是这些约束：**谁执行了API操作**。

判断时应该先找到与这些约束同层、同数据模型或同运维目标的服务，再排除“看起来也属于 AWS，但解决的是另一个层面问题”的选项。

### Q505.2-每个选项的定位

| 选项 | 题库内容 | 服务/概念定位 | 题库答案关系 |
|---|---|---|---|
| A | Activate traceability. | 该选项是题库中的概念/服务描述。现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为正确选项 |
| B | Use serverless compute architectures. | 该选项是题库中的概念/服务描述。现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为非正确选项 |
| C | Perform operations as code. | 该选项是题库中的概念/服务描述。现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为非正确选项 |
| D | Go global in minutes. | 该选项是题库中的概念/服务描述。现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为非正确选项 |

### Q505.3-为什么题库会这样选

题库记录的正确选项定位为：该选项是题库中的概念/服务描述。

现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。

它与题干要求的对象/约束直接对应。

其余选项虽然可能也属于同一大类，但主要解决不同问题。

---

---

## Q513-CloudWatch-CloudTrail-Config题

**题目：** A systems administrator wants to monitor the CPU utilization of a company's Amazon EC2 instances. Which AWS service can provide this information?。

**选项：**

- A. AWS Config
- B. AWS Trusted Advisor
- C. AWS CloudTrail
- D. Amazon CloudWatch

**主分类：** C4-19 CloudWatch-CloudTrail-Config题。

**题库记录答案：** `D`。

**需求/考点标签：** 运行时指标监控。

**社区投票：** D 100%

### Q513.1-题干怎么拆

这道题先识别的不是某个服务名，而是这些约束：**运行时指标监控**。

判断时应该先找到与这些约束同层、同数据模型或同运维目标的服务，再排除“看起来也属于 AWS，但解决的是另一个层面问题”的选项。

### Q513.2-每个选项的定位

| 选项 | 题库内容 | 服务/概念定位 | 题库答案关系 |
|---|---|---|---|
| A | AWS Config | AWS Config：记录资源配置与变化，并可按规则检查配置合规性。 | 题库记录为非正确选项 |
| B | AWS Trusted Advisor | AWS Trusted Advisor：根据 AWS 最佳实践提供成本、安全、性能、可靠性等检查建议。 | 题库记录为非正确选项 |
| C | AWS CloudTrail | AWS CloudTrail：记录 AWS API/账号活动，回答谁在什么时候做了什么操作。 | 题库记录为非正确选项 |
| D | Amazon CloudWatch | Amazon CloudWatch：Metrics/Logs/Alarms 等运行时监控与可观测性服务。 | 题库记录为正确选项 |

### Q513.3-为什么题库会这样选

题库记录的正确选项定位为：Amazon CloudWatch：Metrics/Logs/Alarms 等运行时监控与可观测性服务。

它与题干要求的对象/约束直接对应。

其余选项虽然可能也属于同一大类，但主要解决不同问题。

---

---

## Q558-CloudWatch-CloudTrail-Config题

**题目：** A company needs to perform an audit of recent AWS account activity. The audit will investigate who initiated an event and what actions were performed. Which AWS service should the company use to meet these requirements?。

**选项：**

- A. AWS Config
- B. Amazon Rekognition
- C. AWS CloudTrail
- D. Amazon Simple Notification Service (Amazon SNS)

**主分类：** C4-19 CloudWatch-CloudTrail-Config题。

**题库记录答案：** `C`。

**需求/考点标签：** Audit Trail / Event Driven。

**社区投票：** C 100%

### Q558.1-题干怎么拆

这道题先识别的不是某个服务名，而是这些约束：**Audit Trail、Event Driven**。

判断时应该先找到与这些约束同层、同数据模型或同运维目标的服务，再排除“看起来也属于 AWS，但解决的是另一个层面问题”的选项。

### Q558.2-每个选项的定位

| 选项 | 题库内容 | 服务/概念定位 | 题库答案关系 |
|---|---|---|---|
| A | AWS Config | AWS Config：记录资源配置与变化，并可按规则检查配置合规性。 | 题库记录为非正确选项 |
| B | Amazon Rekognition | Amazon Rekognition：图像和视频分析/计算机视觉服务。 | 题库记录为非正确选项 |
| C | AWS CloudTrail | AWS CloudTrail：记录 AWS API/账号活动，回答谁在什么时候做了什么操作。 | 题库记录为正确选项 |
| D | Amazon Simple Notification Service (Amazon SNS) | Amazon SNS：Pub/Sub 消息与通知分发，一个发布可扇出到多个订阅者。 | 题库记录为非正确选项 |

### Q558.3-为什么题库会这样选

题库记录的正确选项定位为：AWS CloudTrail：记录 AWS API/账号活动，回答谁在什么时候做了什么操作。

它与题干要求的对象/约束直接对应。

其余选项虽然可能也属于同一大类，但主要解决不同问题。

---

---

## Q580-CloudWatch-CloudTrail-Config题

**题目：** Which AWS service or feature gives users the ability to provision AWS infrastructure programmatically?。

**选项：**

- A. AWS Cloud Development Kit (AWS CDK)
- B. Amazon CodeGuru
- C. AWS Config
- D. AWS CodeCommit

**主分类：** C4-19 CloudWatch-CloudTrail-Config题。

**题库记录答案：** `A`。

**社区投票：** A 100%

### Q580.1-题干怎么拆

现有题库没有提供独立 explanation。

这里按题干中的动作、对象和所有选项的服务定位进行比较。

### Q580.2-每个选项的定位

| 选项 | 题库内容 | 服务/概念定位 | 题库答案关系 |
|---|---|---|---|
| A | AWS Cloud Development Kit (AWS CDK) | 该选项是题库中的概念/服务描述。现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为正确选项 |
| B | Amazon CodeGuru | 该选项是题库中的概念/服务描述。现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为非正确选项 |
| C | AWS Config | AWS Config：记录资源配置与变化，并可按规则检查配置合规性。 | 题库记录为非正确选项 |
| D | AWS CodeCommit | 该选项是题库中的概念/服务描述。现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为非正确选项 |

### Q580.3-为什么题库会这样选

题库记录的正确选项定位为：该选项是题库中的概念/服务描述。

现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。

它与题干要求的对象/约束直接对应。

其余选项虽然可能也属于同一大类，但主要解决不同问题。

---

---

## Q586-CloudWatch-CloudTrail-Config题

**题目：** A company needs an event history of which AWS resources the company has created. Which AWS service will provide this information?。

**选项：**

- A. Amazon CloudWatch
- B. AWS CloudTrail
- C. Amazon Aurora
- D. Amazon EventBridge

**主分类：** C4-19 CloudWatch-CloudTrail-Config题。

**题库记录答案：** `B`。

**需求/考点标签：** Event Driven。

**社区投票：** B 100%

### Q586.1-题干怎么拆

这道题先识别的不是某个服务名，而是这些约束：**Event Driven**。

判断时应该先找到与这些约束同层、同数据模型或同运维目标的服务，再排除“看起来也属于 AWS，但解决的是另一个层面问题”的选项。

### Q586.2-每个选项的定位

| 选项 | 题库内容 | 服务/概念定位 | 题库答案关系 |
|---|---|---|---|
| A | Amazon CloudWatch | Amazon CloudWatch：Metrics/Logs/Alarms 等运行时监控与可观测性服务。 | 题库记录为非正确选项 |
| B | AWS CloudTrail | AWS CloudTrail：记录 AWS API/账号活动，回答谁在什么时候做了什么操作。 | 题库记录为正确选项 |
| C | Amazon Aurora | Amazon Aurora：AWS 云原生关系数据库，兼容 MySQL/PostgreSQL 生态，强调高性能与高可用。 | 题库记录为非正确选项 |
| D | Amazon EventBridge | Amazon EventBridge：事件总线和规则路由服务，用事件来源/模式连接多个目标。 | 题库记录为非正确选项 |

### Q586.3-为什么题库会这样选

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

[返回本章总述](./00-总述.md)｜[查看本章概述](./99-概述.md)

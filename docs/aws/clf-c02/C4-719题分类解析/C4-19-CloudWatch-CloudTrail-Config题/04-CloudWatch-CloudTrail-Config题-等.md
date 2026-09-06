---
id: 04-CloudWatch-CloudTrail-Config题-等
sidebar_position: 4
---

# C4-19-CloudWatch-CloudTrail-Config题-CloudWatch-CloudTrail-Config题与CloudWatch-CloudTrail-Config题与CloudWatch-CloudTrail-Config题

> 本篇是《C4-19-CloudWatch-CloudTrail-Config题》的第4个分篇，主要包含：CloudWatch-CloudTrail-Config题、CloudWatch-CloudTrail-Config题、CloudWatch-CloudTrail-Config题。

## Q599-CloudWatch-CloudTrail-Config题

**题目：** Which AWS service or feature can be used to monitor for potential disk write spikes on a system that is running on Amazon EC2?。

**选项：**

- A. AWS CloudTrail
- B. AWS Health Dashboard
- C. AWS Trusted Advisor
- D. Amazon CloudWatch

**主分类：** C4-19 CloudWatch-CloudTrail-Config题。

**题库记录答案：** `D`。

**需求/考点标签：** Monitoring。

### Q599.1-题干怎么拆

这道题先识别的不是某个服务名，而是这些约束：**Monitoring**。

判断时应该先找到与这些约束同层、同数据模型或同运维目标的服务，再排除“看起来也属于 AWS，但解决的是另一个层面问题”的选项。

### Q599.2-每个选项的定位

| 选项 | 题库内容 | 服务/概念定位 | 题库答案关系 |
|---|---|---|---|
| A | AWS CloudTrail | AWS CloudTrail：记录 AWS API/账号活动，回答谁在什么时候做了什么操作。 | 题库记录为非正确选项 |
| B | AWS Health Dashboard | AWS Health：提供与 AWS 服务事件和账号资源相关的健康信息。 | 题库记录为非正确选项 |
| C | AWS Trusted Advisor | AWS Trusted Advisor：根据 AWS 最佳实践提供成本、安全、性能、可靠性等检查建议。 | 题库记录为非正确选项 |
| D | Amazon CloudWatch | Amazon CloudWatch：Metrics/Logs/Alarms 等运行时监控与可观测性服务。 | 题库记录为正确选项 |

### Q599.3-为什么题库会这样选

题库记录的正确选项定位为：Amazon CloudWatch：Metrics/Logs/Alarms 等运行时监控与可观测性服务。

它与题干要求的对象/约束直接对应。

其余选项虽然可能也属于同一大类，但主要解决不同问题。

---

---

## Q612-CloudWatch-CloudTrail-Config题

**题目：** A company has a compliance requirement to record and evaluate configuration changes, as well as perform remediation actions on AWS resources. Which AWS service should the company use?。

**选项：**

- A. AWS Config
- B. AWS Secrets Manager
- C. AWS CloudTrail
- D. AWS Trusted Advisor

**主分类：** C4-19 CloudWatch-CloudTrail-Config题。

**题库记录答案：** `A`。

**需求/考点标签：** 配置变化与合规。

**社区投票：** A 100%

### Q612.1-题干怎么拆

这道题先识别的不是某个服务名，而是这些约束：**配置变化与合规**。

判断时应该先找到与这些约束同层、同数据模型或同运维目标的服务，再排除“看起来也属于 AWS，但解决的是另一个层面问题”的选项。

### Q612.2-每个选项的定位

| 选项 | 题库内容 | 服务/概念定位 | 题库答案关系 |
|---|---|---|---|
| A | AWS Config | AWS Config：记录资源配置与变化，并可按规则检查配置合规性。 | 题库记录为正确选项 |
| B | AWS Secrets Manager | AWS Secrets Manager：安全保存、检索和轮换数据库密码/API Key 等 Secret。 | 题库记录为非正确选项 |
| C | AWS CloudTrail | AWS CloudTrail：记录 AWS API/账号活动，回答谁在什么时候做了什么操作。 | 题库记录为非正确选项 |
| D | AWS Trusted Advisor | AWS Trusted Advisor：根据 AWS 最佳实践提供成本、安全、性能、可靠性等检查建议。 | 题库记录为非正确选项 |

### Q612.3-为什么题库会这样选

题库记录的正确选项定位为：AWS Config：记录资源配置与变化，并可按规则检查配置合规性。

它与题干要求的对象/约束直接对应。

其余选项虽然可能也属于同一大类，但主要解决不同问题。

---

---

## Q654-CloudWatch-CloudTrail-Config题

**题目：** An administrator observed that multiple AWS resources were deleted yesterday. Which AWS service will help identify the cause and determine which user deleted the resources?。

**选项：**

- A. AWS CloudTrail
- B. Amazon Inspector
- C. Amazon GuardDuty
- D. AWS Trusted Advisor

**主分类：** C4-19 CloudWatch-CloudTrail-Config题。

**题库记录答案：** `A`。

**社区投票：** A 100%

### Q654.1-题干怎么拆

现有题库没有提供独立 explanation。

这里按题干中的动作、对象和所有选项的服务定位进行比较。

### Q654.2-每个选项的定位

| 选项 | 题库内容 | 服务/概念定位 | 题库答案关系 |
|---|---|---|---|
| A | AWS CloudTrail | AWS CloudTrail：记录 AWS API/账号活动，回答谁在什么时候做了什么操作。 | 题库记录为正确选项 |
| B | Amazon Inspector | Amazon Inspector：持续漏洞管理与工作负载漏洞扫描。 | 题库记录为非正确选项 |
| C | Amazon GuardDuty | Amazon GuardDuty：基于多种日志与威胁情报进行持续威胁检测。 | 题库记录为非正确选项 |
| D | AWS Trusted Advisor | AWS Trusted Advisor：根据 AWS 最佳实践提供成本、安全、性能、可靠性等检查建议。 | 题库记录为非正确选项 |

### Q654.3-为什么题库会这样选

题库记录的正确选项定位为：AWS CloudTrail：记录 AWS API/账号活动，回答谁在什么时候做了什么操作。

它与题干要求的对象/约束直接对应。

其余选项虽然可能也属于同一大类，但主要解决不同问题。

---

## 本篇概述

- 本篇梳理了CloudWatch-CloudTrail-Config题相关的核心知识、适用场景与判断要点。
- 本篇梳理了CloudWatch-CloudTrail-Config题相关的核心知识、适用场景与判断要点。
- 本篇梳理了CloudWatch-CloudTrail-Config题相关的核心知识、适用场景与判断要点。

[返回本章总述](./00-总述.md)｜[查看本章概述](./99-概述.md)

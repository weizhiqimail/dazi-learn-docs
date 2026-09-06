---
id: C4-17-02-GuardDuty-Inspector-Macie等安全题-Q117至Q284
sidebar_position: 2
---

# C4-17-02-GuardDuty-Inspector-Macie等安全题-Q117至Q284

> 本篇是《C4-17-GuardDuty-Inspector-Macie等安全题》的第2个分篇，主要包含：GuardDuty-Inspector-Macie等安全题、GuardDuty-Inspector-Macie等安全题、GuardDuty-Inspector-Macie等安全题、GuardDuty-Inspector-Macie等安全题、GuardDuty-Inspector-Macie等安全题、GuardDuty-Inspector-Macie等安全题、GuardDuty-Inspector-Macie等安全题。

## Q117-GuardDuty-Inspector-Macie等安全题

**题目：** A company wants an automated process to continuously scan its Amazon EC2 instances for software vulnerabilities. Which AWS service will meet these requirements?。

**选项：**

- A. Amazon GuardDuty
- B. Amazon Inspector
- C. Amazon Detective
- D. Amazon Cognito

**主分类：** C4-17 GuardDuty-Inspector-Macie等安全题。

**题库记录答案：** `B`。

**需求/考点标签：** 漏洞扫描。

**社区投票：** B 100%

### Q117.1-题干怎么拆

这道题先识别的不是某个服务名，而是这些约束：**漏洞扫描**。

判断时应该先找到与这些约束同层、同数据模型或同运维目标的服务，再排除“看起来也属于 AWS，但解决的是另一个层面问题”的选项。

### Q117.2-每个选项的定位

| 选项 | 题库内容 | 服务/概念定位 | 题库答案关系 |
|---|---|---|---|
| A | Amazon GuardDuty | Amazon GuardDuty：基于多种日志与威胁情报进行持续威胁检测。 | 题库记录为非正确选项 |
| B | Amazon Inspector | Amazon Inspector：持续漏洞管理与工作负载漏洞扫描。 | 题库记录为正确选项 |
| C | Amazon Detective | Amazon Detective：基于安全数据帮助调查潜在安全事件和根因。 | 题库记录为非正确选项 |
| D | Amazon Cognito | Amazon Cognito：面向 Web/Mobile 应用终端用户的身份注册、登录与联合身份能力。 | 题库记录为非正确选项 |

### Q117.3-为什么题库会这样选

题库记录的正确选项定位为：Amazon Inspector：持续漏洞管理与工作负载漏洞扫描。

它与题干要求的对象/约束直接对应。

其余选项虽然可能也属于同一大类，但主要解决不同问题。

---

---

## Q159-GuardDuty-Inspector-Macie等安全题

**题目：** Which security service automatically recognizes and classifies sensitive data or intellectual property on AWS?。

**选项：**

- A. Amazon GuardDuty
- B. Amazon Macie
- C. Amazon Inspector
- D. AWS Shield

**主分类：** C4-17 GuardDuty-Inspector-Macie等安全题。

**题库记录答案：** `B`。

**需求/考点标签：** S3敏感数据发现。

**社区投票：** B 100%

### Q159.1-题干怎么拆

这道题先识别的不是某个服务名，而是这些约束：**S3敏感数据发现**。

判断时应该先找到与这些约束同层、同数据模型或同运维目标的服务，再排除“看起来也属于 AWS，但解决的是另一个层面问题”的选项。

### Q159.2-每个选项的定位

| 选项 | 题库内容 | 服务/概念定位 | 题库答案关系 |
|---|---|---|---|
| A | Amazon GuardDuty | Amazon GuardDuty：基于多种日志与威胁情报进行持续威胁检测。 | 题库记录为非正确选项 |
| B | Amazon Macie | Amazon Macie：发现和保护 S3 中的敏感数据。 | 题库记录为正确选项 |
| C | Amazon Inspector | Amazon Inspector：持续漏洞管理与工作负载漏洞扫描。 | 题库记录为非正确选项 |
| D | AWS Shield | AWS Shield：AWS DDoS 防护服务。 | 题库记录为非正确选项 |

### Q159.3-为什么题库会这样选

题库记录的正确选项定位为：Amazon Macie：发现和保护 S3 中的敏感数据。

它与题干要求的对象/约束直接对应。

其余选项虽然可能也属于同一大类，但主要解决不同问题。

---

---

## Q174-GuardDuty-Inspector-Macie等安全题

**题目：** Which AWS service can be used to retrieve compliance reports on demand?。

**选项：**

- A. AWS Secrets Manager
- B. AWS Artifact
- C. AWS Security Hub
- D. AWS Certificate Manager

**主分类：** C4-17 GuardDuty-Inspector-Macie等安全题。

**题库记录答案：** `B`。

**需求/考点标签：** 配置变化与合规。

**社区投票：** B 100%

### Q174.1-题干怎么拆

这道题先识别的不是某个服务名，而是这些约束：**配置变化与合规**。

判断时应该先找到与这些约束同层、同数据模型或同运维目标的服务，再排除“看起来也属于 AWS，但解决的是另一个层面问题”的选项。

### Q174.2-每个选项的定位

| 选项 | 题库内容 | 服务/概念定位 | 题库答案关系 |
|---|---|---|---|
| A | AWS Secrets Manager | AWS Secrets Manager：安全保存、检索和轮换数据库密码/API Key 等 Secret。 | 题库记录为非正确选项 |
| B | AWS Artifact | AWS Artifact：按需访问 AWS 合规报告和部分协议的门户。 | 题库记录为正确选项 |
| C | AWS Security Hub | AWS Security Hub：聚合安全发现并提供安全态势管理。 | 题库记录为非正确选项 |
| D | AWS Certificate Manager | AWS Certificate Manager：供应和管理 TLS/SSL 证书。 | 题库记录为非正确选项 |

### Q174.3-为什么题库会这样选

题库记录的正确选项定位为：AWS Artifact：按需访问 AWS 合规报告和部分协议的门户。

它与题干要求的对象/约束直接对应。

其余选项虽然可能也属于同一大类，但主要解决不同问题。

---

---

## Q175-GuardDuty-Inspector-Macie等安全题

**题目：** Which AWS service enables users to check for vulnerabilities on Amazon EC2 instances by using predefined assessment templates?。

**选项：**

- A. AWS WAF
- B. AWS Trusted Advisor
- C. Amazon Inspector
- D. AWS Shield

**主分类：** C4-17 GuardDuty-Inspector-Macie等安全题。

**题库记录答案：** `C`。

**需求/考点标签：** 漏洞扫描。

**社区投票：** C 100%

### Q175.1-题干怎么拆

这道题先识别的不是某个服务名，而是这些约束：**漏洞扫描**。

判断时应该先找到与这些约束同层、同数据模型或同运维目标的服务，再排除“看起来也属于 AWS，但解决的是另一个层面问题”的选项。

### Q175.2-每个选项的定位

| 选项 | 题库内容 | 服务/概念定位 | 题库答案关系 |
|---|---|---|---|
| A | AWS WAF | AWS WAF：Web 应用防火墙，过滤 HTTP(S) Web 请求。 | 题库记录为非正确选项 |
| B | AWS Trusted Advisor | AWS Trusted Advisor：根据 AWS 最佳实践提供成本、安全、性能、可靠性等检查建议。 | 题库记录为非正确选项 |
| C | Amazon Inspector | Amazon Inspector：持续漏洞管理与工作负载漏洞扫描。 | 题库记录为正确选项 |
| D | AWS Shield | AWS Shield：AWS DDoS 防护服务。 | 题库记录为非正确选项 |

### Q175.3-为什么题库会这样选

题库记录的正确选项定位为：Amazon Inspector：持续漏洞管理与工作负载漏洞扫描。

它与题干要求的对象/约束直接对应。

其余选项虽然可能也属于同一大类，但主要解决不同问题。

---

---

## Q218-GuardDuty-Inspector-Macie等安全题

**题目：** What can a cloud practitioner use to retrieve AWS security and compliance documents and submit them as evidence to an auditor or regulator?。

**选项：**

- A. AWS Certificate Manager
- B. AWS Systems Manager
- C. AWS Artifact
- D. Amazon Inspector

**主分类：** C4-17 GuardDuty-Inspector-Macie等安全题。

**题库记录答案：** `C`。

**需求/考点标签：** 配置变化与合规。

**社区投票：** C 100%

### Q218.1-题干怎么拆

这道题先识别的不是某个服务名，而是这些约束：**配置变化与合规**。

判断时应该先找到与这些约束同层、同数据模型或同运维目标的服务，再排除“看起来也属于 AWS，但解决的是另一个层面问题”的选项。

### Q218.2-每个选项的定位

| 选项 | 题库内容 | 服务/概念定位 | 题库答案关系 |
|---|---|---|---|
| A | AWS Certificate Manager | AWS Certificate Manager：供应和管理 TLS/SSL 证书。 | 题库记录为非正确选项 |
| B | AWS Systems Manager | AWS Systems Manager：集中运维和自动化管理 AWS/混合环境中的节点与资源。 | 题库记录为非正确选项 |
| C | AWS Artifact | AWS Artifact：按需访问 AWS 合规报告和部分协议的门户。 | 题库记录为正确选项 |
| D | Amazon Inspector | Amazon Inspector：持续漏洞管理与工作负载漏洞扫描。 | 题库记录为非正确选项 |

### Q218.3-为什么题库会这样选

题库记录的正确选项定位为：AWS Artifact：按需访问 AWS 合规报告和部分协议的门户。

它与题干要求的对象/约束直接对应。

其余选项虽然可能也属于同一大类，但主要解决不同问题。

---

---

## Q229-GuardDuty-Inspector-Macie等安全题

**题目：** A company hosts a large amount of data in AWS. The company wants to identify if any of the data should be considered sensitive. Which AWS service will meet the requirement?。

**选项：**

- A. Amazon Inspector
- B. Amazon Macie
- C. AWS Identity and Access Management (IAM)
- D. Amazon CloudWatch

**主分类：** C4-17 GuardDuty-Inspector-Macie等安全题。

**题库记录答案：** `B`。

**社区投票：** B 100%

### Q229.1-题干怎么拆

现有题库没有提供独立 explanation。

这里按题干中的动作、对象和所有选项的服务定位进行比较。

### Q229.2-每个选项的定位

| 选项 | 题库内容 | 服务/概念定位 | 题库答案关系 |
|---|---|---|---|
| A | Amazon Inspector | Amazon Inspector：持续漏洞管理与工作负载漏洞扫描。 | 题库记录为非正确选项 |
| B | Amazon Macie | Amazon Macie：发现和保护 S3 中的敏感数据。 | 题库记录为正确选项 |
| C | AWS Identity and Access Management (IAM) | AWS IAM：AWS 身份、认证授权与权限策略核心服务。 | 题库记录为非正确选项 |
| D | Amazon CloudWatch | Amazon CloudWatch：Metrics/Logs/Alarms 等运行时监控与可观测性服务。 | 题库记录为非正确选项 |

### Q229.3-为什么题库会这样选

题库记录的正确选项定位为：Amazon Macie：发现和保护 S3 中的敏感数据。

它与题干要求的对象/约束直接对应。

其余选项虽然可能也属于同一大类，但主要解决不同问题。

---

---

## Q284-GuardDuty-Inspector-Macie等安全题

**题目：** A company uses AWS security services and tools. The company needs a service to help manage the security alerts and must organize the alerts into a single dashboard. Which AWS service should the company use to meet these requirements?

**选项：**

- A. Amazon GuardDuty
- B. Amazon Inspector
- C. Amazon Macie
- D. AWS Security Hub

**主分类：** C4-17 GuardDuty-Inspector-Macie等安全题。

**题库记录答案：** `D`。

**社区投票：** D 94%, B 6%。

### Q284.1-题干怎么拆

现有题库没有提供独立 explanation。

这里按题干中的动作、对象和所有选项的服务定位进行比较。

### Q284.2-每个选项的定位

| 选项 | 题库内容 | 服务/概念定位 | 题库答案关系 |
|---|---|---|---|
| A | Amazon GuardDuty | Amazon GuardDuty：基于多种日志与威胁情报进行持续威胁检测。 | 题库记录为非正确选项 |
| B | Amazon Inspector | Amazon Inspector：持续漏洞管理与工作负载漏洞扫描。 | 题库记录为非正确选项 |
| C | Amazon Macie | Amazon Macie：发现和保护 S3 中的敏感数据。 | 题库记录为非正确选项 |
| D | AWS Security Hub | AWS Security Hub：聚合安全发现并提供安全态势管理。 | 题库记录为正确选项 |

### Q284.3-为什么题库会这样选

题库记录的正确选项定位为：AWS Security Hub：聚合安全发现并提供安全态势管理。

它与题干要求的对象/约束直接对应。

其余选项虽然可能也属于同一大类，但主要解决不同问题。

---

## 本篇概述

- 本篇梳理了GuardDuty-Inspector-Macie等安全题相关的核心知识、适用场景与判断要点。
- 本篇梳理了GuardDuty-Inspector-Macie等安全题相关的核心知识、适用场景与判断要点。
- 本篇梳理了GuardDuty-Inspector-Macie等安全题相关的核心知识、适用场景与判断要点。
- 本篇梳理了GuardDuty-Inspector-Macie等安全题相关的核心知识、适用场景与判断要点。
- 本篇梳理了GuardDuty-Inspector-Macie等安全题相关的核心知识、适用场景与判断要点。
- 本篇梳理了GuardDuty-Inspector-Macie等安全题相关的核心知识、适用场景与判断要点。
- 本篇梳理了GuardDuty-Inspector-Macie等安全题相关的核心知识、适用场景与判断要点。

[返回本章总述](./C4-17-00-章节总述.md)｜[查看本章概述](./C4-17-99-章节概述.md)

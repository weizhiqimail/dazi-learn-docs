---
id: 03-GuardDuty-Inspector-Macie等安全题-等
sidebar_position: 3
---

# C4-17-GuardDuty-Inspector-Macie等安全题-GuardDuty-Inspector-Macie等安全题与GuardDuty-Inspector-Macie等安全题与GuardDuty-Inspector-Macie等安全题与GuardDuty-Inspector-Macie等安全题与GuardDuty-Inspector-Macie等安全题与GuardDuty-Inspector-Macie等安全题与GuardDuty-Inspector-Macie等安全题

> 本篇是《C4-17-GuardDuty-Inspector-Macie等安全题》的第3个分篇，主要包含：GuardDuty-Inspector-Macie等安全题、GuardDuty-Inspector-Macie等安全题、GuardDuty-Inspector-Macie等安全题、GuardDuty-Inspector-Macie等安全题、GuardDuty-Inspector-Macie等安全题、GuardDuty-Inspector-Macie等安全题、GuardDuty-Inspector-Macie等安全题。

## Q286-GuardDuty-Inspector-Macie等安全题

**题目：** A company uses Amazon S3 to store records that can contain personally identifiable information (PII). The company wants a solution that can monitor all S3 buckets for PII and immediately alert staff about vulnerabilities. Which AWS service will meet these requirements?

**选项：**

- A. Amazon GuardDuty
- B. Amazon Detective
- C. Amazon Macie
- D. AWS Shield

**主分类：** C4-17 GuardDuty-Inspector-Macie等安全题。

**题库记录答案：** `C`。

**需求/考点标签：** 漏洞扫描 / 关系数据库高可用。

**社区投票：** C 100%

### Q286.1-题干怎么拆

这道题先识别的不是某个服务名，而是这些约束：**漏洞扫描、关系数据库高可用**。

判断时应该先找到与这些约束同层、同数据模型或同运维目标的服务，再排除“看起来也属于 AWS，但解决的是另一个层面问题”的选项。

### Q286.2-每个选项的定位

| 选项 | 题库内容 | 服务/概念定位 | 题库答案关系 |
|---|---|---|---|
| A | Amazon GuardDuty | Amazon GuardDuty：基于多种日志与威胁情报进行持续威胁检测。 | 题库记录为非正确选项 |
| B | Amazon Detective | Amazon Detective：基于安全数据帮助调查潜在安全事件和根因。 | 题库记录为非正确选项 |
| C | Amazon Macie | Amazon Macie：发现和保护 S3 中的敏感数据。 | 题库记录为正确选项 |
| D | AWS Shield | AWS Shield：AWS DDoS 防护服务。 | 题库记录为非正确选项 |

### Q286.3-为什么题库会这样选

题库记录的正确选项定位为：Amazon Macie：发现和保护 S3 中的敏感数据。

它与题干要求的对象/约束直接对应。

其余选项虽然可能也属于同一大类，但主要解决不同问题。

---

---

## Q287-GuardDuty-Inspector-Macie等安全题

**题目：** Which AWS service allows users to download security and compliance reports about the AWS infrastructure on demand?。

**选项：**

- A. Amazon GuardDuty
- B. AWS Security Hub
- C. AWS Artifact
- D. AWS Shield

**主分类：** C4-17 GuardDuty-Inspector-Macie等安全题。

**题库记录答案：** `C`。

**需求/考点标签：** 配置变化与合规。

**社区投票：** C 100%

### Q287.1-题干怎么拆

这道题先识别的不是某个服务名，而是这些约束：**配置变化与合规**。

判断时应该先找到与这些约束同层、同数据模型或同运维目标的服务，再排除“看起来也属于 AWS，但解决的是另一个层面问题”的选项。

### Q287.2-每个选项的定位

| 选项 | 题库内容 | 服务/概念定位 | 题库答案关系 |
|---|---|---|---|
| A | Amazon GuardDuty | Amazon GuardDuty：基于多种日志与威胁情报进行持续威胁检测。 | 题库记录为非正确选项 |
| B | AWS Security Hub | AWS Security Hub：聚合安全发现并提供安全态势管理。 | 题库记录为非正确选项 |
| C | AWS Artifact | AWS Artifact：按需访问 AWS 合规报告和部分协议的门户。 | 题库记录为正确选项 |
| D | AWS Shield | AWS Shield：AWS DDoS 防护服务。 | 题库记录为非正确选项 |

### Q287.3-为什么题库会这样选

题库记录的正确选项定位为：AWS Artifact：按需访问 AWS 合规报告和部分协议的门户。

它与题干要求的对象/约束直接对应。

其余选项虽然可能也属于同一大类，但主要解决不同问题。

---

---

## Q393-GuardDuty-Inspector-Macie等安全题

**题目：** A company wants to use machine learning capabilities to analyze log data from its Amazon EC2 instances and efficiently conduct security investigations. Which AWS service will meet these requirements?。

**选项：**

- A. Amazon Inspector
- B. Amazon QuickSight
- C. Amazon Detective -
- D. Amazon GuardDuty

**主分类：** C4-17 GuardDuty-Inspector-Macie等安全题。

**题库记录答案：** `C`。

**需求/考点标签：** AI/ML。

**社区投票：** C 100%

### Q393.1-题干怎么拆

这道题先识别的不是某个服务名，而是这些约束：**AI/ML**。

判断时应该先找到与这些约束同层、同数据模型或同运维目标的服务，再排除“看起来也属于 AWS，但解决的是另一个层面问题”的选项。

### Q393.2-每个选项的定位

| 选项 | 题库内容 | 服务/概念定位 | 题库答案关系 |
|---|---|---|---|
| A | Amazon Inspector | Amazon Inspector：持续漏洞管理与工作负载漏洞扫描。 | 题库记录为非正确选项 |
| B | Amazon QuickSight | Amazon QuickSight：云端 BI 与可视化分析服务。Amazon Q：AWS 的生成式 AI 助手家族，用于企业知识和开发者场景。 | 题库记录为非正确选项 |
| C | Amazon Detective - | Amazon Detective：基于安全数据帮助调查潜在安全事件和根因。 | 题库记录为正确选项 |
| D | Amazon GuardDuty | Amazon GuardDuty：基于多种日志与威胁情报进行持续威胁检测。 | 题库记录为非正确选项 |

### Q393.3-为什么题库会这样选

题库记录的正确选项定位为：Amazon Detective：基于安全数据帮助调查潜在安全事件和根因。

它与题干要求的对象/约束直接对应。

其余选项虽然可能也属于同一大类，但主要解决不同问题。

---

---

## Q416-GuardDuty-Inspector-Macie等安全题

**题目：** A company wants to use a managed service to identify and protect sensitive data that is stored in Amazon S3. Which AWS service will meet these requirements?。

**选项：**

- A. AWS IAM Access Analyzer
- B. Amazon GuardDuty
- C. Amazon Inspector
- D. Amazon Macie

**主分类：** C4-17 GuardDuty-Inspector-Macie等安全题。

**题库记录答案：** `D`。

**需求/考点标签：** S3敏感数据发现。

**社区投票：** D 100%

### Q416.1-题干怎么拆

这道题先识别的不是某个服务名，而是这些约束：**S3敏感数据发现**。

判断时应该先找到与这些约束同层、同数据模型或同运维目标的服务，再排除“看起来也属于 AWS，但解决的是另一个层面问题”的选项。

### Q416.2-每个选项的定位

| 选项 | 题库内容 | 服务/概念定位 | 题库答案关系 |
|---|---|---|---|
| A | AWS IAM Access Analyzer | AWS IAM：AWS 身份、认证授权与权限策略核心服务。 | 题库记录为非正确选项 |
| B | Amazon GuardDuty | Amazon GuardDuty：基于多种日志与威胁情报进行持续威胁检测。 | 题库记录为非正确选项 |
| C | Amazon Inspector | Amazon Inspector：持续漏洞管理与工作负载漏洞扫描。 | 题库记录为非正确选项 |
| D | Amazon Macie | Amazon Macie：发现和保护 S3 中的敏感数据。 | 题库记录为正确选项 |

### Q416.3-为什么题库会这样选

题库记录的正确选项定位为：Amazon Macie：发现和保护 S3 中的敏感数据。

它与题干要求的对象/约束直接对应。

其余选项虽然可能也属于同一大类，但主要解决不同问题。

---

---

## Q457-GuardDuty-Inspector-Macie等安全题

**题目：** Which AWS service provides users with AWS issued reports, certifications, accreditations, and third-party attestations?。

**选项：**

- A. AWS Artifact
- B. AWS Trusted Advisor
- C. AWS Health Dashboard
- D. AWS Config

**主分类：** C4-17 GuardDuty-Inspector-Macie等安全题。

**题库记录答案：** `A`。

**社区投票：** A 100%

### Q457.1-题干怎么拆

现有题库没有提供独立 explanation。

这里按题干中的动作、对象和所有选项的服务定位进行比较。

### Q457.2-每个选项的定位

| 选项 | 题库内容 | 服务/概念定位 | 题库答案关系 |
|---|---|---|---|
| A | AWS Artifact | AWS Artifact：按需访问 AWS 合规报告和部分协议的门户。 | 题库记录为正确选项 |
| B | AWS Trusted Advisor | AWS Trusted Advisor：根据 AWS 最佳实践提供成本、安全、性能、可靠性等检查建议。 | 题库记录为非正确选项 |
| C | AWS Health Dashboard | AWS Health：提供与 AWS 服务事件和账号资源相关的健康信息。 | 题库记录为非正确选项 |
| D | AWS Config | AWS Config：记录资源配置与变化，并可按规则检查配置合规性。 | 题库记录为非正确选项 |

### Q457.3-为什么题库会这样选

题库记录的正确选项定位为：AWS Artifact：按需访问 AWS 合规报告和部分协议的门户。

它与题干要求的对象/约束直接对应。

其余选项虽然可能也属于同一大类，但主要解决不同问题。

---

---

## Q479-GuardDuty-Inspector-Macie等安全题

**题目：** Which AWS service gives users on-demand, self-service access to AWS compliance control reports?。

**选项：**

- A. AWS Config
- B. Amazon GuardDuty
- C. AWS Trusted Advisor
- D. AWS Artifact

**主分类：** C4-17 GuardDuty-Inspector-Macie等安全题。

**题库记录答案：** `D`。

**需求/考点标签：** 配置变化与合规。

**社区投票：** D 100%

### Q479.1-题干怎么拆

这道题先识别的不是某个服务名，而是这些约束：**配置变化与合规**。

判断时应该先找到与这些约束同层、同数据模型或同运维目标的服务，再排除“看起来也属于 AWS，但解决的是另一个层面问题”的选项。

### Q479.2-每个选项的定位

| 选项 | 题库内容 | 服务/概念定位 | 题库答案关系 |
|---|---|---|---|
| A | AWS Config | AWS Config：记录资源配置与变化，并可按规则检查配置合规性。 | 题库记录为非正确选项 |
| B | Amazon GuardDuty | Amazon GuardDuty：基于多种日志与威胁情报进行持续威胁检测。 | 题库记录为非正确选项 |
| C | AWS Trusted Advisor | AWS Trusted Advisor：根据 AWS 最佳实践提供成本、安全、性能、可靠性等检查建议。 | 题库记录为非正确选项 |
| D | AWS Artifact | AWS Artifact：按需访问 AWS 合规报告和部分协议的门户。 | 题库记录为正确选项 |

### Q479.3-为什么题库会这样选

题库记录的正确选项定位为：AWS Artifact：按需访问 AWS 合规报告和部分协议的门户。

它与题干要求的对象/约束直接对应。

其余选项虽然可能也属于同一大类，但主要解决不同问题。

---

---

## Q506-GuardDuty-Inspector-Macie等安全题

**题目：** A company needs a threat detection service that will continuously monitor its AWS accounts, workloads, and Amazon S3 buckets for malicious activity and unauthorized behavior. Which AWS service meets these requirements?。

**选项：**

- A. AWS Shield
- B. AWS Firewall Manager
- C. Amazon GuardDuty
- D. Amazon Inspector

**主分类：** C4-17 GuardDuty-Inspector-Macie等安全题。

**题库记录答案：** `C`。

**需求/考点标签：** 威胁检测。

**社区投票：** C 100%

### Q506.1-题干怎么拆

这道题先识别的不是某个服务名，而是这些约束：**威胁检测**。

判断时应该先找到与这些约束同层、同数据模型或同运维目标的服务，再排除“看起来也属于 AWS，但解决的是另一个层面问题”的选项。

### Q506.2-每个选项的定位

| 选项 | 题库内容 | 服务/概念定位 | 题库答案关系 |
|---|---|---|---|
| A | AWS Shield | AWS Shield：AWS DDoS 防护服务。 | 题库记录为非正确选项 |
| B | AWS Firewall Manager | 该选项描述 Shared Responsibility 中 AWS 侧的基础设施责任。 | 题库记录为非正确选项 |
| C | Amazon GuardDuty | Amazon GuardDuty：基于多种日志与威胁情报进行持续威胁检测。 | 题库记录为正确选项 |
| D | Amazon Inspector | Amazon Inspector：持续漏洞管理与工作负载漏洞扫描。 | 题库记录为非正确选项 |

### Q506.3-为什么题库会这样选

题库记录的正确选项定位为：Amazon GuardDuty：基于多种日志与威胁情报进行持续威胁检测。

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

[返回本章总述](./00-总述.md)｜[查看本章概述](./99-概述.md)

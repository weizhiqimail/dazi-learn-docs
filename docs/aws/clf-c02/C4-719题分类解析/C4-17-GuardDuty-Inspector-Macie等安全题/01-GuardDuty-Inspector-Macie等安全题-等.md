---
id: 01-GuardDuty-Inspector-Macie等安全题-等
sidebar_position: 1
---

# C4-17-GuardDuty-Inspector-Macie等安全题-GuardDuty-Inspector-Macie等安全题与GuardDuty-Inspector-Macie等安全题与GuardDuty-Inspector-Macie等安全题与GuardDuty-Inspector-Macie等安全题与GuardDuty-Inspector-Macie等安全题与GuardDuty-Inspector-Macie等安全题与GuardDuty-Inspector-Macie等安全题

> 本篇是《C4-17-GuardDuty-Inspector-Macie等安全题》的第1个分篇，主要包含：GuardDuty-Inspector-Macie等安全题、GuardDuty-Inspector-Macie等安全题、GuardDuty-Inspector-Macie等安全题、GuardDuty-Inspector-Macie等安全题、GuardDuty-Inspector-Macie等安全题、GuardDuty-Inspector-Macie等安全题、GuardDuty-Inspector-Macie等安全题。

## Q2-GuardDuty-Inspector-Macie等安全题

**题目：** A company has deployed applications on Amazon EC2 instances. The company needs to assess application vulnerabilities and must identify infrastructure deployments that do not meet best practices. Which AWS service can the company use to meet these requirements?

**选项：**

- A. AWS Trusted Advisor
- B. Amazon Inspector
- C. AWS Config
- D. Amazon GuardDuty

**主分类：** C4-17 GuardDuty-Inspector-Macie等安全题。

**题库记录答案：** `B`。

**需求/考点标签：** 漏洞扫描。

**社区投票：** B 87%, Other 13%。

### Q2.1-题干怎么拆

这道题先识别的不是某个服务名，而是这些约束：**漏洞扫描**。

判断时应该先找到与这些约束同层、同数据模型或同运维目标的服务，再排除“看起来也属于 AWS，但解决的是另一个层面问题”的选项。

### Q2.2-每个选项的定位

| 选项 | 题库内容 | 服务/概念定位 | 题库答案关系 |
|---|---|---|---|
| A | AWS Trusted Advisor | AWS Trusted Advisor：根据 AWS 最佳实践提供成本、安全、性能、可靠性等检查建议。 | 题库记录为非正确选项 |
| B | Amazon Inspector | Amazon Inspector：持续漏洞管理与工作负载漏洞扫描。 | 题库记录为正确选项 |
| C | AWS Config | AWS Config：记录资源配置与变化，并可按规则检查配置合规性。 | 题库记录为非正确选项 |
| D | Amazon GuardDuty | Amazon GuardDuty：基于多种日志与威胁情报进行持续威胁检测。 | 题库记录为非正确选项 |

### Q2.3-为什么题库会这样选

题库记录的正确选项定位为：Amazon Inspector：持续漏洞管理与工作负载漏洞扫描。

它与题干要求的对象/约束直接对应。

其余选项虽然可能也属于同一大类，但主要解决不同问题。

---

---

## Q28-GuardDuty-Inspector-Macie等安全题

**题目：** Which AWS service or resource provides answers to the most frequently asked security-related questions that AWS receives from its users?。

**选项：**

- A. AWS Artifact
- B. Amazon Connect
- C. AWS Chatbot
- D. AWS Knowledge Center

**主分类：** C4-17 GuardDuty-Inspector-Macie等安全题。

**题库记录答案：** `D`。

**社区投票：** D 93%, A 7%。

### Q28.1-题干怎么拆

现有题库没有提供独立 explanation。

这里按题干中的动作、对象和所有选项的服务定位进行比较。

### Q28.2-每个选项的定位

| 选项 | 题库内容 | 服务/概念定位 | 题库答案关系 |
|---|---|---|---|
| A | AWS Artifact | AWS Artifact：按需访问 AWS 合规报告和部分协议的门户。 | 题库记录为非正确选项 |
| B | Amazon Connect | Amazon Connect：云联络中心服务。 | 题库记录为非正确选项 |
| C | AWS Chatbot | 该选项是题库中的概念/服务描述。现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为非正确选项 |
| D | AWS Knowledge Center | 该选项是题库中的概念/服务描述。现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为正确选项 |

### Q28.3-为什么题库会这样选

题库记录的正确选项定位为：该选项是题库中的概念/服务描述。

现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。

它与题干要求的对象/约束直接对应。

其余选项虽然可能也属于同一大类，但主要解决不同问题。

---

---

## Q32-GuardDuty-Inspector-Macie等安全题

**题目：** A user needs programmatic access to AWS resources through the AWS CLI or the AWS API. Which option will provide the user with the appropriate access?。

**选项：**

- A. Amazon Inspector
- B. Access keys
- C. SSH public keys
- D. AWS Key Management Service (AWS KMS) keys

**主分类：** C4-17 GuardDuty-Inspector-Macie等安全题。

**题库记录答案：** `B`。

**社区投票：** B 100%

### Q32.1-题干怎么拆

现有题库没有提供独立 explanation。

这里按题干中的动作、对象和所有选项的服务定位进行比较。

### Q32.2-每个选项的定位

| 选项 | 题库内容 | 服务/概念定位 | 题库答案关系 |
|---|---|---|---|
| A | Amazon Inspector | Amazon Inspector：持续漏洞管理与工作负载漏洞扫描。 | 题库记录为非正确选项 |
| B | Access keys | 该选项是题库中的概念/服务描述。现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为正确选项 |
| C | SSH public keys | 该选项是题库中的概念/服务描述。现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为非正确选项 |
| D | AWS Key Management Service (AWS KMS) keys | AWS KMS：集中创建、控制和使用加密密钥。 | 题库记录为非正确选项 |

### Q32.3-为什么题库会这样选

题库记录的正确选项定位为：该选项是题库中的概念/服务描述。

现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。

它与题干要求的对象/约束直接对应。

其余选项虽然可能也属于同一大类，但主要解决不同问题。

---

---

## Q37-GuardDuty-Inspector-Macie等安全题

**题目：** A cloud practitioner needs to obtain AWS compliance reports before migrating an environment to the AWS Cloud. How can these reports be generated?。

**选项：**

- A. Contact the AWS Compliance team.
- B. Download the reports from AWS Artifact.
- C. Open a case with AWS Support.
- D. Generate the reports with Amazon Macie.

**主分类：** C4-17 GuardDuty-Inspector-Macie等安全题。

**题库记录答案：** `B`。

**需求/考点标签：** 配置变化与合规。

**社区投票：** B 100%

### Q37.1-题干怎么拆

这道题先识别的不是某个服务名，而是这些约束：**配置变化与合规**。

判断时应该先找到与这些约束同层、同数据模型或同运维目标的服务，再排除“看起来也属于 AWS，但解决的是另一个层面问题”的选项。

### Q37.2-每个选项的定位

| 选项 | 题库内容 | 服务/概念定位 | 题库答案关系 |
|---|---|---|---|
| A | Contact the AWS Compliance team. | 该选项是题库中的概念/服务描述。现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为非正确选项 |
| B | Download the reports from AWS Artifact. | AWS Artifact：按需访问 AWS 合规报告和部分协议的门户。 | 题库记录为正确选项 |
| C | Open a case with AWS Support. | AWS Support：AWS 技术支持与客户服务计划体系。项目资料明确提示当前计划体系有更新。 | 题库记录为非正确选项 |
| D | Generate the reports with Amazon Macie. | Amazon Macie：发现和保护 S3 中的敏感数据。 | 题库记录为非正确选项 |

### Q37.3-为什么题库会这样选

题库记录的正确选项定位为：AWS Artifact：按需访问 AWS 合规报告和部分协议的门户。

它与题干要求的对象/约束直接对应。

其余选项虽然可能也属于同一大类，但主要解决不同问题。

---

---

## Q53-GuardDuty-Inspector-Macie等安全题

**题目：** Which AWS service is a cloud security posture management (CSPM) service that aggregates alerts from various AWS services and partner products in a standardized format?。

**选项：**

- A. AWS Security Hub
- B. AWS Trusted Advisor
- C. Amazon EventBridge
- D. Amazon GuardDuty

**主分类：** C4-17 GuardDuty-Inspector-Macie等安全题。

**题库记录答案：** `A`。

**社区投票：** A 100%

### Q53.1-题干怎么拆

现有题库没有提供独立 explanation。

这里按题干中的动作、对象和所有选项的服务定位进行比较。

### Q53.2-每个选项的定位

| 选项 | 题库内容 | 服务/概念定位 | 题库答案关系 |
|---|---|---|---|
| A | AWS Security Hub | AWS Security Hub：聚合安全发现并提供安全态势管理。 | 题库记录为正确选项 |
| B | AWS Trusted Advisor | AWS Trusted Advisor：根据 AWS 最佳实践提供成本、安全、性能、可靠性等检查建议。 | 题库记录为非正确选项 |
| C | Amazon EventBridge | Amazon EventBridge：事件总线和规则路由服务，用事件来源/模式连接多个目标。 | 题库记录为非正确选项 |
| D | Amazon GuardDuty | Amazon GuardDuty：基于多种日志与威胁情报进行持续威胁检测。 | 题库记录为非正确选项 |

### Q53.3-为什么题库会这样选

题库记录的正确选项定位为：AWS Security Hub：聚合安全发现并提供安全态势管理。

它与题干要求的对象/约束直接对应。

其余选项虽然可能也属于同一大类，但主要解决不同问题。

---

---

## Q58-GuardDuty-Inspector-Macie等安全题

**题目：** Which AWS service gives users the ability to discover and protect sensitive data that is stored in Amazon S3 buckets?。

**选项：**

- A. Amazon Macie
- B. Amazon Detective
- C. Amazon GuardDuty
- D. AWS IAM Access Analyzer

**主分类：** C4-17 GuardDuty-Inspector-Macie等安全题。

**题库记录答案：** `A`。

**需求/考点标签：** S3敏感数据发现。

**社区投票：** A 100%

### Q58.1-题干怎么拆

这道题先识别的不是某个服务名，而是这些约束：**S3敏感数据发现**。

判断时应该先找到与这些约束同层、同数据模型或同运维目标的服务，再排除“看起来也属于 AWS，但解决的是另一个层面问题”的选项。

### Q58.2-每个选项的定位

| 选项 | 题库内容 | 服务/概念定位 | 题库答案关系 |
|---|---|---|---|
| A | Amazon Macie | Amazon Macie：发现和保护 S3 中的敏感数据。 | 题库记录为正确选项 |
| B | Amazon Detective | Amazon Detective：基于安全数据帮助调查潜在安全事件和根因。 | 题库记录为非正确选项 |
| C | Amazon GuardDuty | Amazon GuardDuty：基于多种日志与威胁情报进行持续威胁检测。 | 题库记录为非正确选项 |
| D | AWS IAM Access Analyzer | AWS IAM：AWS 身份、认证授权与权限策略核心服务。 | 题库记录为非正确选项 |

### Q58.3-为什么题库会这样选

题库记录的正确选项定位为：Amazon Macie：发现和保护 S3 中的敏感数据。

它与题干要求的对象/约束直接对应。

其余选项虽然可能也属于同一大类，但主要解决不同问题。

---

---

## Q84-GuardDuty-Inspector-Macie等安全题

**题目：** What is the best resource for a user to find compliance-related information and reports about AWS?。

**选项：**

- A. AWS Artifact
- B. AWS Marketplace
- C. Amazon Inspector
- D. AWS Support

**主分类：** C4-17 GuardDuty-Inspector-Macie等安全题。

**题库记录答案：** `A`。

**需求/考点标签：** 配置变化与合规。

**社区投票：** A 100%

### Q84.1-题干怎么拆

这道题先识别的不是某个服务名，而是这些约束：**配置变化与合规**。

判断时应该先找到与这些约束同层、同数据模型或同运维目标的服务，再排除“看起来也属于 AWS，但解决的是另一个层面问题”的选项。

### Q84.2-每个选项的定位

| 选项 | 题库内容 | 服务/概念定位 | 题库答案关系 |
|---|---|---|---|
| A | AWS Artifact | AWS Artifact：按需访问 AWS 合规报告和部分协议的门户。 | 题库记录为正确选项 |
| B | AWS Marketplace | AWS Marketplace：查找、购买和部署第三方软件、数据与服务的数字目录。 | 题库记录为非正确选项 |
| C | Amazon Inspector | Amazon Inspector：持续漏洞管理与工作负载漏洞扫描。 | 题库记录为非正确选项 |
| D | AWS Support | AWS Support：AWS 技术支持与客户服务计划体系。项目资料明确提示当前计划体系有更新。 | 题库记录为非正确选项 |

### Q84.3-为什么题库会这样选

题库记录的正确选项定位为：AWS Artifact：按需访问 AWS 合规报告和部分协议的门户。

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

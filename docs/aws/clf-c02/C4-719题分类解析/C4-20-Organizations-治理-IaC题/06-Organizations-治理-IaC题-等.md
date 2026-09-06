---
id: 06-Organizations-治理-IaC题-等
sidebar_position: 6
---

# C4-20-Organizations-治理-IaC题-Organizations-治理-IaC题与Organizations-治理-IaC题与Organizations-治理-IaC题与Organizations-治理-IaC题与Organizations-治理-IaC题与Organizations-治理-IaC题与Organizations-治理-IaC题

> 本篇是《C4-20-Organizations-治理-IaC题》的第6个分篇，主要包含：Organizations-治理-IaC题、Organizations-治理-IaC题、Organizations-治理-IaC题、Organizations-治理-IaC题、Organizations-治理-IaC题、Organizations-治理-IaC题、Organizations-治理-IaC题。

## Q512-Organizations-治理-IaC题

**题目：** A company wants to manage its cloud resources by using infrastructure as code (IaC) templates. The company needs to meet compliance requirements. Which AWS service should the company use to meet these requirements?。

**选项：**

- A. AWS Artifact
- B. AWS Resource Explorer
- C. AWS License Manager
- D. AWS Service Catalog

**主分类：** C4-20 Organizations-治理-IaC题。

**题库记录答案：** `D`。

**需求/考点标签：** 配置变化与合规。

**社区投票：** D 100%

### Q512.1-题干怎么拆

这道题先识别的不是某个服务名，而是这些约束：**配置变化与合规**。

判断时应该先找到与这些约束同层、同数据模型或同运维目标的服务，再排除“看起来也属于 AWS，但解决的是另一个层面问题”的选项。

### Q512.2-每个选项的定位

| 选项 | 题库内容 | 服务/概念定位 | 题库答案关系 |
|---|---|---|---|
| A | AWS Artifact | AWS Artifact：按需访问 AWS 合规报告和部分协议的门户。 | 题库记录为非正确选项 |
| B | AWS Resource Explorer | 该选项是题库中的概念/服务描述。现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为非正确选项 |
| C | AWS License Manager | 该选项描述 Shared Responsibility 中 AWS 侧的基础设施责任。 | 题库记录为非正确选项 |
| D | AWS Service Catalog | AWS Service Catalog：让企业发布经过批准的云产品/基础设施模板目录。 | 题库记录为正确选项 |

### Q512.3-为什么题库会这样选

题库记录的正确选项定位为：AWS Service Catalog：让企业发布经过批准的云产品/基础设施模板目录。

它与题干要求的对象/约束直接对应。

其余选项虽然可能也属于同一大类，但主要解决不同问题。

---

---

## Q517-Organizations-治理-IaC题

**题目：** Which AWS service supports a company's ability to treat infrastructure as code?。

**选项：**

- A. AWS CodeDeploy
- B. AWS Elastic Beanstalk
- C. Amazon API Gateway
- D. AWS CloudFormation

**主分类：** C4-20 Organizations-治理-IaC题。

**题库记录答案：** `D`。

**需求/考点标签：** IaC。

**社区投票：** D 100%

### Q517.1-题干怎么拆

这道题先识别的不是某个服务名，而是这些约束：**IaC**。

判断时应该先找到与这些约束同层、同数据模型或同运维目标的服务，再排除“看起来也属于 AWS，但解决的是另一个层面问题”的选项。

### Q517.2-每个选项的定位

| 选项 | 题库内容 | 服务/概念定位 | 题库答案关系 |
|---|---|---|---|
| A | AWS CodeDeploy | AWS CodeDeploy：自动化应用部署服务。项目资料将其视为题库历史/当前范围需复核项。 | 题库记录为非正确选项 |
| B | AWS Elastic Beanstalk | AWS Elastic Beanstalk：托管应用部署平台，帮助创建和管理常见 Web 应用运行环境。 | 题库记录为非正确选项 |
| C | Amazon API Gateway | Amazon API Gateway：托管 API 前门，用于发布、保护和管理 API。 | 题库记录为非正确选项 |
| D | AWS CloudFormation | AWS CloudFormation：AWS Infrastructure as Code，用模板声明和部署资源。 | 题库记录为正确选项 |

### Q517.3-为什么题库会这样选

题库记录的正确选项定位为：AWS CloudFormation：AWS Infrastructure as Code，用模板声明和部署资源。

它与题干要求的对象/约束直接对应。

其余选项虽然可能也属于同一大类，但主要解决不同问题。

### Q517.4-⚠-争议/版本提示

- 涉及项目资料已提示需关注当前状态的词：codedeploy
- 本题同时收录到 `C4-27-旧题争议题与当前AWS差异.md`，不在这里强行替题库修正答案。

---

---

## Q553-Organizations-治理-IaC题

**题目：** A company is using multiple AWS accounts for different business teams. The finance team wants to receive one bill for all of the company's accounts. Which AWS service or tool should the finance team use to meet this requirement?

**选项：**

- A. AWS Organizations
- B. AWS Trusted Advisor
- C. Cost Explorer
- D. AWS Budgets

**主分类：** C4-20 Organizations-治理-IaC题。

**题库记录答案：** `A`。

**社区投票：** A 100%

### Q553.1-题干怎么拆

现有题库没有提供独立 explanation。

这里按题干中的动作、对象和所有选项的服务定位进行比较。

### Q553.2-每个选项的定位

| 选项 | 题库内容 | 服务/概念定位 | 题库答案关系 |
|---|---|---|---|
| A | AWS Organizations | AWS Organizations：集中组织和治理多个 AWS Account，并支持 Consolidated Billing、SCP 等。 | 题库记录为正确选项 |
| B | AWS Trusted Advisor | AWS Trusted Advisor：根据 AWS 最佳实践提供成本、安全、性能、可靠性等检查建议。 | 题库记录为非正确选项 |
| C | Cost Explorer | AWS Cost Explorer：分析历史/当前 AWS 成本和用量趋势。 | 题库记录为非正确选项 |
| D | AWS Budgets | AWS Budgets：设置成本/用量预算阈值和告警。 | 题库记录为非正确选项 |

### Q553.3-为什么题库会这样选

题库记录的正确选项定位为：AWS Organizations：集中组织和治理多个 AWS Account，并支持 Consolidated Billing、SCP 等。

它与题干要求的对象/约束直接对应。

其余选项虽然可能也属于同一大类，但主要解决不同问题。

---

---

## Q563-Organizations-治理-IaC题

**题目：** Which AWS service can companies use to subscribe to RSS feeds for updates about all AWS service issues?。

**选项：**

- A. Amazon Simple Notification Service (Amazon SNS)
- B. AWS Health Dashboard
- C. AWS Config
- D. AWS CodeCommit

**主分类：** C4-20 Organizations-治理-IaC题。

**题库记录答案：** `B`。

**需求/考点标签：** 一对多通知。

**社区投票：** B 100%

### Q563.1-题干怎么拆

这道题先识别的不是某个服务名，而是这些约束：**一对多通知**。

判断时应该先找到与这些约束同层、同数据模型或同运维目标的服务，再排除“看起来也属于 AWS，但解决的是另一个层面问题”的选项。

### Q563.2-每个选项的定位

| 选项 | 题库内容 | 服务/概念定位 | 题库答案关系 |
|---|---|---|---|
| A | Amazon Simple Notification Service (Amazon SNS) | Amazon SNS：Pub/Sub 消息与通知分发，一个发布可扇出到多个订阅者。 | 题库记录为非正确选项 |
| B | AWS Health Dashboard | AWS Health：提供与 AWS 服务事件和账号资源相关的健康信息。 | 题库记录为正确选项 |
| C | AWS Config | AWS Config：记录资源配置与变化，并可按规则检查配置合规性。 | 题库记录为非正确选项 |
| D | AWS CodeCommit | 该选项是题库中的概念/服务描述。现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为非正确选项 |

### Q563.3-为什么题库会这样选

题库记录的正确选项定位为：AWS Health：提供与 AWS 服务事件和账号资源相关的健康信息。

它与题干要求的对象/约束直接对应。

其余选项虽然可能也属于同一大类，但主要解决不同问题。

### Q563.4-⚠-争议/版本提示

- 社区评论存在明显质疑/版本差异信号
- 本题同时收录到 `C4-27-旧题争议题与当前AWS差异.md`，不在这里强行替题库修正答案。

---

---

## Q573-Organizations-治理-IaC题

**题目：** A company has migrated its workload to the AWS Cloud. The company wants to optimize existing Amazon EC2 resources. Which AWS services or tools provide this functionality? (Choose two.)。

**选项：**

- A. AWS Elastic Beanstalk
- B. AWS Cost Explorer
- C. Amazon Detective
- D. AWS Compute Optimizer
- E. AWS Billing Conductor

**主分类：** C4-20 Organizations-治理-IaC题。

**题库记录答案：** `BD`。

**需求/考点标签：** Migration。

### Q573.1-题干怎么拆

这道题先识别的不是某个服务名，而是这些约束：**Migration**。

判断时应该先找到与这些约束同层、同数据模型或同运维目标的服务，再排除“看起来也属于 AWS，但解决的是另一个层面问题”的选项。

### Q573.2-每个选项的定位

| 选项 | 题库内容 | 服务/概念定位 | 题库答案关系 |
|---|---|---|---|
| A | AWS Elastic Beanstalk | AWS Elastic Beanstalk：托管应用部署平台，帮助创建和管理常见 Web 应用运行环境。 | 题库记录为非正确选项 |
| B | AWS Cost Explorer | AWS Cost Explorer：分析历史/当前 AWS 成本和用量趋势。 | 题库记录为正确选项 |
| C | Amazon Detective | Amazon Detective：基于安全数据帮助调查潜在安全事件和根因。 | 题库记录为非正确选项 |
| D | AWS Compute Optimizer | AWS Compute Optimizer：根据历史利用率等数据提供资源规格优化建议。 | 题库记录为正确选项 |
| E | AWS Billing Conductor | 该选项是题库中的概念/服务描述。现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为非正确选项 |

### Q573.3-为什么题库会这样选

题库记录的正确选项定位为：AWS Cost Explorer：分析历史/当前 AWS 成本和用量趋势。

AWS Compute Optimizer：根据历史利用率等数据提供资源规格优化建议。

它与题干要求的对象/约束直接对应。

其余选项虽然可能也属于同一大类，但主要解决不同问题。

---

---

## Q574-Organizations-治理-IaC题

**题目：** A company with multiple accounts and teams wants to set up a new multi-account AWS environment. Which AWS service supports this requirement?。

**选项：**

- A. AWS CloudFormation
- B. AWS Control Tower
- C. AWS Config
- D. Amazon Virtual Private Cloud (Amazon VPC)

**主分类：** C4-20 Organizations-治理-IaC题。

**题库记录答案：** `B`。

**社区投票：** B 100%

### Q574.1-题干怎么拆

现有题库没有提供独立 explanation。

这里按题干中的动作、对象和所有选项的服务定位进行比较。

### Q574.2-每个选项的定位

| 选项 | 题库内容 | 服务/概念定位 | 题库答案关系 |
|---|---|---|---|
| A | AWS CloudFormation | AWS CloudFormation：AWS Infrastructure as Code，用模板声明和部署资源。 | 题库记录为非正确选项 |
| B | AWS Control Tower | AWS Control Tower：基于最佳实践建立和治理多账号 Landing Zone。 | 题库记录为正确选项 |
| C | AWS Config | AWS Config：记录资源配置与变化，并可按规则检查配置合规性。 | 题库记录为非正确选项 |
| D | Amazon Virtual Private Cloud (Amazon VPC) | Amazon VPC：AWS 中用户定义的逻辑隔离虚拟网络。 | 题库记录为非正确选项 |

### Q574.3-为什么题库会这样选

题库记录的正确选项定位为：AWS Control Tower：基于最佳实践建立和治理多账号 Landing Zone。

它与题干要求的对象/约束直接对应。

其余选项虽然可能也属于同一大类，但主要解决不同问题。

---

---

## Q583-Organizations-治理-IaC题

**题目：** Why are AWS CloudFormation templates used?。

**选项：**

- A. To reduce provisioning time by using automation.
- B. To transfer existing infrastructure to another company.
- C. To reuse on-premises infrastructure in the AWS Cloud.
- D. To deploy large infrastructure with no cost implications.

**主分类：** C4-20 Organizations-治理-IaC题。

**题库记录答案：** `A`。

**需求/考点标签：** IaC。

**社区投票：** A 100%

### Q583.1-题干怎么拆

这道题先识别的不是某个服务名，而是这些约束：**IaC**。

判断时应该先找到与这些约束同层、同数据模型或同运维目标的服务，再排除“看起来也属于 AWS，但解决的是另一个层面问题”的选项。

### Q583.2-每个选项的定位

| 选项 | 题库内容 | 服务/概念定位 | 题库答案关系 |
|---|---|---|---|
| A | To reduce provisioning time by using automation. | 该选项是题库中的概念/服务描述。现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为正确选项 |
| B | To transfer existing infrastructure to another company. | 该选项是题库中的概念/服务描述。现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为非正确选项 |
| C | To reuse on-premises infrastructure in the AWS Cloud. | 该选项是题库中的概念/服务描述。现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为非正确选项 |
| D | To deploy large infrastructure with no cost implications. | 该选项描述计费/免费数据传输或服务使用条件，需要结合具体 AWS 定价规则判断。 | 题库记录为非正确选项 |

### Q583.3-为什么题库会这样选

题库记录的正确选项定位为：该选项是题库中的概念/服务描述。

现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。

它与题干要求的对象/约束直接对应。

其余选项虽然可能也属于同一大类，但主要解决不同问题。

---

## 本篇概述

- 本篇梳理了Organizations-治理-IaC题相关的核心知识、适用场景与判断要点。
- 本篇梳理了Organizations-治理-IaC题相关的核心知识、适用场景与判断要点。
- 本篇梳理了Organizations-治理-IaC题相关的核心知识、适用场景与判断要点。
- 本篇梳理了Organizations-治理-IaC题相关的核心知识、适用场景与判断要点。
- 本篇梳理了Organizations-治理-IaC题相关的核心知识、适用场景与判断要点。
- 本篇梳理了Organizations-治理-IaC题相关的核心知识、适用场景与判断要点。
- 本篇梳理了Organizations-治理-IaC题相关的核心知识、适用场景与判断要点。

[返回本章总述](./00-总述.md)｜[查看本章概述](./99-概述.md)

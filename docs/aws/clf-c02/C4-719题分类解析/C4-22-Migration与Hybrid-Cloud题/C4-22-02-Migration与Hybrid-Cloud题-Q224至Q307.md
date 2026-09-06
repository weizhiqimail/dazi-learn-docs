---
id: C4-22-02-Migration与Hybrid-Cloud题-Q224至Q307
sidebar_position: 2
---

# C4-22-02-Migration与Hybrid-Cloud题-Q224至Q307

> 本篇是《C4-22-Migration与Hybrid-Cloud题》的第2个分篇，主要包含：Migration与Hybrid-Cloud题、Migration与Hybrid-Cloud题、Migration与Hybrid-Cloud题、Migration与Hybrid-Cloud题、Migration与Hybrid-Cloud题、Migration与Hybrid-Cloud题。

## Q224-Migration与Hybrid-Cloud题

**题目：** A company wants a customized assessment of its current on-premises environment. The company wants to understand its projected running costs in the AWS Cloud. Which AWS service or tool will meet these requirements?。

**选项：**

- A. AWS Trusted Advisor
- B. Amazon Inspector
- C. AWS Control Tower
- D. Migration Evaluator

**主分类：** C4-22 Migration与Hybrid-Cloud题。

**题库记录答案：** `D`。

**需求/考点标签：** Hybrid Cloud。

**社区投票：** D 100%

### Q224.1-题干怎么拆

这道题先识别的不是某个服务名，而是这些约束：**Hybrid Cloud**。

判断时应该先找到与这些约束同层、同数据模型或同运维目标的服务，再排除“看起来也属于 AWS，但解决的是另一个层面问题”的选项。

### Q224.2-每个选项的定位

| 选项 | 题库内容 | 服务/概念定位 | 题库答案关系 |
|---|---|---|---|
| A | AWS Trusted Advisor | AWS Trusted Advisor：根据 AWS 最佳实践提供成本、安全、性能、可靠性等检查建议。 | 题库记录为非正确选项 |
| B | Amazon Inspector | Amazon Inspector：持续漏洞管理与工作负载漏洞扫描。 | 题库记录为非正确选项 |
| C | AWS Control Tower | AWS Control Tower：基于最佳实践建立和治理多账号 Landing Zone。 | 题库记录为非正确选项 |
| D | Migration Evaluator | Migration Evaluator：评估本地基础设施并建立迁云商业案例/成本分析。 | 题库记录为正确选项 |

### Q224.3-为什么题库会这样选

题库记录的正确选项定位为：Migration Evaluator：评估本地基础设施并建立迁云商业案例/成本分析。

它与题干要求的对象/约束直接对应。

其余选项虽然可能也属于同一大类，但主要解决不同问题。

---

---

## Q227-Migration与Hybrid-Cloud题

**题目：** A company needs to migrate a PostgreSQL database from on-premises to Amazon RDS. Which AWS service or tool should the company use to meet this requirement?。

**选项：**

- A. Cloud Adoption Readiness Tool
- B. AWS Migration Hub
- C. AWS Database Migration Service (AWS DMS)
- D. AWS Application Migration Service

**主分类：** C4-22 Migration与Hybrid-Cloud题。

**题库记录答案：** `C`。

**需求/考点标签：** 关系数据库高可用。

**社区投票：** C 100%

### Q227.1-题干怎么拆

这道题先识别的不是某个服务名，而是这些约束：**关系数据库高可用**。

判断时应该先找到与这些约束同层、同数据模型或同运维目标的服务，再排除“看起来也属于 AWS，但解决的是另一个层面问题”的选项。

### Q227.2-每个选项的定位

| 选项 | 题库内容 | 服务/概念定位 | 题库答案关系 |
|---|---|---|---|
| A | Cloud Adoption Readiness Tool | 该选项是题库中的概念/服务描述。现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为非正确选项 |
| B | AWS Migration Hub | AWS Migration Hub：集中跟踪多个迁移工具和应用迁移进度。 | 题库记录为非正确选项 |
| C | AWS Database Migration Service (AWS DMS) | AWS DMS：在线迁移/复制数据库数据并尽量减少停机。 | 题库记录为正确选项 |
| D | AWS Application Migration Service | AWS Application Migration Service：将物理/虚拟服务器持续复制并迁移到 AWS 的 lift-and-shift 服务。 | 题库记录为非正确选项 |

### Q227.3-为什么题库会这样选

题库记录的正确选项定位为：AWS DMS：在线迁移/复制数据库数据并尽量减少停机。

它与题干要求的对象/约束直接对应。

其余选项虽然可能也属于同一大类，但主要解决不同问题。

---

---

## Q252-Migration与Hybrid-Cloud题

**题目：** A company has migrated its workloads to AWS. The company wants to adopt AWS at scale and operate more efficiently and securely. Which AWS service or framework should the company use for operational support?。

**选项：**

- A. AWS Support
- B. AWS Cloud Adoption Framework (AWS CAF)
- C. AWS Managed Services (AMS)
- D. AWS Well-Architected Framework

**主分类：** C4-22 Migration与Hybrid-Cloud题。

**题库记录答案：** `C`。

**需求/考点标签：** Migration。

**社区投票：** C 81%, Other 19%。

### Q252.1-题干怎么拆

这道题先识别的不是某个服务名，而是这些约束：**Migration**。

判断时应该先找到与这些约束同层、同数据模型或同运维目标的服务，再排除“看起来也属于 AWS，但解决的是另一个层面问题”的选项。

### Q252.2-每个选项的定位

| 选项 | 题库内容 | 服务/概念定位 | 题库答案关系 |
|---|---|---|---|
| A | AWS Support | AWS Support：AWS 技术支持与客户服务计划体系。项目资料明确提示当前计划体系有更新。 | 题库记录为非正确选项 |
| B | AWS Cloud Adoption Framework (AWS CAF) | AWS CAF：帮助组织规划和推进云采用与业务/组织转型，包含六个 Perspectives。 | 题库记录为非正确选项 |
| C | AWS Managed Services (AMS) | 该选项描述 Shared Responsibility 中 AWS 侧的基础设施责任。 | 题库记录为正确选项 |
| D | AWS Well-Architected Framework | AWS Well-Architected Framework：以六大 Pillars 评估和设计安全、可靠、高效、成本优化、可持续的 Workload。 | 题库记录为非正确选项 |

### Q252.3-为什么题库会这样选

题库记录的正确选项定位为：该选项描述 Shared Responsibility 中 AWS 侧的基础设施责任。

它与题干要求的对象/约束直接对应。

其余选项虽然可能也属于同一大类，但主要解决不同问题。

---

---

## Q259-Migration与Hybrid-Cloud题

**题目：** A company need an AWS service that provides a clear baseline of what the company runs in its on-premises data centers. The company needs the projected cost to run its on-premises workloads in the AWS Cloud. What AWS service or tool will meet these requirements?

**选项：**

- A. AWS Compute Optimizer
- B. AWS Cost Explorer
- C. AWS Systems Manager Agent (SSM Agent)
- D. Migration Evaluator

**主分类：** C4-22 Migration与Hybrid-Cloud题。

**题库记录答案：** `D`。

**需求/考点标签：** Hybrid Cloud。

**社区投票：** D 100%

### Q259.1-题干怎么拆

这道题先识别的不是某个服务名，而是这些约束：**Hybrid Cloud**。

判断时应该先找到与这些约束同层、同数据模型或同运维目标的服务，再排除“看起来也属于 AWS，但解决的是另一个层面问题”的选项。

### Q259.2-每个选项的定位

| 选项 | 题库内容 | 服务/概念定位 | 题库答案关系 |
|---|---|---|---|
| A | AWS Compute Optimizer | AWS Compute Optimizer：根据历史利用率等数据提供资源规格优化建议。 | 题库记录为非正确选项 |
| B | AWS Cost Explorer | AWS Cost Explorer：分析历史/当前 AWS 成本和用量趋势。 | 题库记录为非正确选项 |
| C | AWS Systems Manager Agent (SSM Agent) | AWS Systems Manager：集中运维和自动化管理 AWS/混合环境中的节点与资源。 | 题库记录为非正确选项 |
| D | Migration Evaluator | Migration Evaluator：评估本地基础设施并建立迁云商业案例/成本分析。 | 题库记录为正确选项 |

### Q259.3-为什么题库会这样选

题库记录的正确选项定位为：Migration Evaluator：评估本地基础设施并建立迁云商业案例/成本分析。

它与题干要求的对象/约束直接对应。

其余选项虽然可能也属于同一大类，但主要解决不同问题。

### Q259.4-⚠-争议/版本提示

- 社区评论存在明显质疑/版本差异信号
- 本题同时收录到 `C4-27-旧题争议题与当前AWS差异.md`，不在这里强行替题库修正答案。

---

---

## Q304-Migration与Hybrid-Cloud题

**题目：** A company wants to migrate unstructured data to AWS. The data needs to be securely moved with inflight encryption and end- to-end data validation. Which AWS service will meet these requirements?。

**选项：**

- A. AWS Application Migration Service
- B. Amazon Elastic File System (Amazon EFS)
- C. AWS DataSync
- D. AWS Migration Hub

**主分类：** C4-22 Migration与Hybrid-Cloud题。

**题库记录答案：** `C`。

**需求/考点标签：** Encryption / Migration。

**社区投票：** C 100%

### Q304.1-题干怎么拆

这道题先识别的不是某个服务名，而是这些约束：**Encryption、Migration**。

判断时应该先找到与这些约束同层、同数据模型或同运维目标的服务，再排除“看起来也属于 AWS，但解决的是另一个层面问题”的选项。

### Q304.2-每个选项的定位

| 选项 | 题库内容 | 服务/概念定位 | 题库答案关系 |
|---|---|---|---|
| A | AWS Application Migration Service | AWS Application Migration Service：将物理/虚拟服务器持续复制并迁移到 AWS 的 lift-and-shift 服务。 | 题库记录为非正确选项 |
| B | Amazon Elastic File System (Amazon EFS) | Amazon EFS：托管弹性 NFS 文件系统，可被多个计算资源共享。 | 题库记录为非正确选项 |
| C | AWS DataSync | AWS DataSync：在线高速自动化传输文件/对象数据到、从 AWS 存储。 | 题库记录为正确选项 |
| D | AWS Migration Hub | AWS Migration Hub：集中跟踪多个迁移工具和应用迁移进度。 | 题库记录为非正确选项 |

### Q304.3-为什么题库会这样选

题库记录的正确选项定位为：AWS DataSync：在线高速自动化传输文件/对象数据到、从 AWS 存储。

它与题干要求的对象/约束直接对应。

其余选项虽然可能也属于同一大类，但主要解决不同问题。

---

---

## Q307-Migration与Hybrid-Cloud题

**题目：** Which AWS Cloud deployment model uses AWS Outposts as part of the application deployment infrastructure?。

**选项：**

- A. On-premises
- B. Serverless
- C. Cloud-native
- D. Hybrid

**主分类：** C4-22 Migration与Hybrid-Cloud题。

**题库记录答案：** `D`。

**需求/考点标签：** Hybrid Cloud。

**社区投票：** D 93%, A 7%。

### Q307.1-题干怎么拆

这道题先识别的不是某个服务名，而是这些约束：**Hybrid Cloud**。

判断时应该先找到与这些约束同层、同数据模型或同运维目标的服务，再排除“看起来也属于 AWS，但解决的是另一个层面问题”的选项。

### Q307.2-每个选项的定位

| 选项 | 题库内容 | 服务/概念定位 | 题库答案关系 |
|---|---|---|---|
| A | On-premises | 该选项是题库中的概念/服务描述。现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为非正确选项 |
| B | Serverless | 该选项是题库中的概念/服务描述。现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为非正确选项 |
| C | Cloud-native | 该选项是题库中的概念/服务描述。现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为非正确选项 |
| D | Hybrid | 该选项是题库中的概念/服务描述。现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为正确选项 |

### Q307.3-为什么题库会这样选

题库记录的正确选项定位为：该选项是题库中的概念/服务描述。

现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。

它与题干要求的对象/约束直接对应。

其余选项虽然可能也属于同一大类，但主要解决不同问题。

---

## 本篇概述

- 本篇梳理了Migration与Hybrid-Cloud题相关的核心知识、适用场景与判断要点。
- 本篇梳理了Migration与Hybrid-Cloud题相关的核心知识、适用场景与判断要点。
- 本篇梳理了Migration与Hybrid-Cloud题相关的核心知识、适用场景与判断要点。
- 本篇梳理了Migration与Hybrid-Cloud题相关的核心知识、适用场景与判断要点。
- 本篇梳理了Migration与Hybrid-Cloud题相关的核心知识、适用场景与判断要点。
- 本篇梳理了Migration与Hybrid-Cloud题相关的核心知识、适用场景与判断要点。

[返回本章总述](./C4-22-00-章节总述.md)｜[查看本章概述](./C4-22-99-章节概述.md)

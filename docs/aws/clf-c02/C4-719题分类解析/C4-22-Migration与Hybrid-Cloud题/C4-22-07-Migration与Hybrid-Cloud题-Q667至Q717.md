---
id: C4-22-07-Migration与Hybrid-Cloud题-Q667至Q717
sidebar_position: 7
---

# C4-22-07-Migration与Hybrid-Cloud题-Q667至Q717

> 本篇是《C4-22-Migration与Hybrid-Cloud题》的第7个分篇，主要包含：Migration与Hybrid-Cloud题、Migration与Hybrid-Cloud题、Migration与Hybrid-Cloud题、Migration与Hybrid-Cloud题、Migration与Hybrid-Cloud题、Migration与Hybrid-Cloud题。

## Q667-Migration与Hybrid-Cloud题

**题目：** A company wants to migrate its server-based applications to the AWS Cloud. The company wants to determine the total cost of ownership for its compute resources that will be hosted on the AWS Cloud. Which combination of AWS services or tools will meet these requirements? (Choose two.)。

**选项：**

- A. AWS Pricing Calculator
- B. Migration Evaluator
- C. AWS Support Center
- D. AWS Application Discovery Service
- E. AWS Database Migration Service (AWS DMS)

**主分类：** C4-22 Migration与Hybrid-Cloud题。

**题库记录答案：** `AB`。

**需求/考点标签：** Migration。

**社区投票：** AB 100%

### Q667.1-题干怎么拆

这道题先识别的不是某个服务名，而是这些约束：**Migration**。

判断时应该先找到与这些约束同层、同数据模型或同运维目标的服务，再排除“看起来也属于 AWS，但解决的是另一个层面问题”的选项。

### Q667.2-每个选项的定位

| 选项 | 题库内容 | 服务/概念定位 | 题库答案关系 |
|---|---|---|---|
| A | AWS Pricing Calculator | AWS Pricing Calculator：部署前估算计划架构成本。 | 题库记录为正确选项 |
| B | Migration Evaluator | Migration Evaluator：评估本地基础设施并建立迁云商业案例/成本分析。 | 题库记录为正确选项 |
| C | AWS Support Center | AWS Support：AWS 技术支持与客户服务计划体系。项目资料明确提示当前计划体系有更新。 | 题库记录为非正确选项 |
| D | AWS Application Discovery Service | AWS Application Discovery Service：收集本地服务器使用和依赖信息，为迁移规划提供 Discovery 数据。 | 题库记录为非正确选项 |
| E | AWS Database Migration Service (AWS DMS) | AWS DMS：在线迁移/复制数据库数据并尽量减少停机。 | 题库记录为非正确选项 |

### Q667.3-为什么题库会这样选

题库记录的正确选项定位为：AWS Pricing Calculator：部署前估算计划架构成本。

Migration Evaluator：评估本地基础设施并建立迁云商业案例/成本分析。

它与题干要求的对象/约束直接对应。

其余选项虽然可能也属于同一大类，但主要解决不同问题。

---

---

## Q673-Migration与Hybrid-Cloud题

**题目：** A company wants to migrate to the AWS Cloud. The company needs the ability to acquire resources when the resources are necessary. The company also needs the ability to release those resources when the resources are no longer necessary. Which architecture concept of the AWS Cloud meets these requirements?

**选项：**

- A. Elasticity
- B. Availability
- C. Reliability
- D. Durability

**主分类：** C4-22 Migration与Hybrid-Cloud题。

**题库记录答案：** `A`。

**需求/考点标签：** Migration。

**社区投票：** A 100%

### Q673.1-题干怎么拆

这道题先识别的不是某个服务名，而是这些约束：**Migration**。

判断时应该先找到与这些约束同层、同数据模型或同运维目标的服务，再排除“看起来也属于 AWS，但解决的是另一个层面问题”的选项。

### Q673.2-每个选项的定位

| 选项 | 题库内容 | 服务/概念定位 | 题库答案关系 |
|---|---|---|---|
| A | Elasticity | 弹性是资源随当前负载自动扩大或缩小。 | 题库记录为正确选项 |
| B | Availability | 高可用关注组件故障时尽量维持服务可用。 | 题库记录为非正确选项 |
| C | Reliability | 该选项是题库中的概念/服务描述。现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为非正确选项 |
| D | Durability | 该选项是题库中的概念/服务描述。现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为非正确选项 |

### Q673.3-为什么题库会这样选

题库记录的正确选项定位为：弹性是资源随当前负载自动扩大或缩小。

它与题干要求的对象/约束直接对应。

其余选项虽然可能也属于同一大类，但主要解决不同问题。

---

---

## Q686-Migration与Hybrid-Cloud题

**题目：** A company plans to migrate its application from on premises to the AWS Cloud. The company needs to gather usage and configuration data for the application components. Which AWS service will meet these requirements?。

**选项：**

- A. AWS Database Migration Service (AWS DMS)
- B. AWS Transfer Family
- C. AWS Application Discovery Service
- D. AWS Global Accelerator

**主分类：** C4-22 Migration与Hybrid-Cloud题。

**题库记录答案：** `C`。

**需求/考点标签：** Hybrid Cloud / Migration / Configuration Compliance。

### Q686.1-题干怎么拆

这道题先识别的不是某个服务名，而是这些约束：**Hybrid Cloud、Migration、Configuration Compliance**。

判断时应该先找到与这些约束同层、同数据模型或同运维目标的服务，再排除“看起来也属于 AWS，但解决的是另一个层面问题”的选项。

### Q686.2-每个选项的定位

| 选项 | 题库内容 | 服务/概念定位 | 题库答案关系 |
|---|---|---|---|
| A | AWS Database Migration Service (AWS DMS) | AWS DMS：在线迁移/复制数据库数据并尽量减少停机。 | 题库记录为非正确选项 |
| B | AWS Transfer Family | AWS Transfer Family：为 SFTP/FTPS/FTP 等协议提供托管文件传输入口。 | 题库记录为非正确选项 |
| C | AWS Application Discovery Service | AWS Application Discovery Service：收集本地服务器使用和依赖信息，为迁移规划提供 Discovery 数据。 | 题库记录为正确选项 |
| D | AWS Global Accelerator | AWS Global Accelerator：利用 AWS 全球网络和 Anycast 静态 IP 改善全球应用访问路径。 | 题库记录为非正确选项 |

### Q686.3-为什么题库会这样选

题库记录的正确选项定位为：AWS Application Discovery Service：收集本地服务器使用和依赖信息，为迁移规划提供 Discovery 数据。

它与题干要求的对象/约束直接对应。

其余选项虽然可能也属于同一大类，但主要解决不同问题。

---

---

## Q703-Migration与Hybrid-Cloud题

**题目：** A company is planning to migrate to the AWS Cloud. The company needs to understand the existing on-premises usage and configuration. The company does not want to replicate its workloads to AWS, yet. Which AWS service or tool will meet these requirements?

**选项：**

- A. AWS Application Discovery Service
- B. AWS Application Migration Service
- C. Cloud Migration Factory
- D. AWS Transfer Family

**主分类：** C4-22 Migration与Hybrid-Cloud题。

**题库记录答案：** `A`。

**需求/考点标签：** Hybrid Cloud / Migration / Configuration Compliance。

**社区投票：** A 100%

### Q703.1-题干怎么拆

这道题先识别的不是某个服务名，而是这些约束：**Hybrid Cloud、Migration、Configuration Compliance**。

判断时应该先找到与这些约束同层、同数据模型或同运维目标的服务，再排除“看起来也属于 AWS，但解决的是另一个层面问题”的选项。

### Q703.2-每个选项的定位

| 选项 | 题库内容 | 服务/概念定位 | 题库答案关系 |
|---|---|---|---|
| A | AWS Application Discovery Service | AWS Application Discovery Service：收集本地服务器使用和依赖信息，为迁移规划提供 Discovery 数据。 | 题库记录为正确选项 |
| B | AWS Application Migration Service | AWS Application Migration Service：将物理/虚拟服务器持续复制并迁移到 AWS 的 lift-and-shift 服务。 | 题库记录为非正确选项 |
| C | Cloud Migration Factory | 该选项是题库中的概念/服务描述。现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为非正确选项 |
| D | AWS Transfer Family | AWS Transfer Family：为 SFTP/FTPS/FTP 等协议提供托管文件传输入口。 | 题库记录为非正确选项 |

### Q703.3-为什么题库会这样选

题库记录的正确选项定位为：AWS Application Discovery Service：收集本地服务器使用和依赖信息，为迁移规划提供 Discovery 数据。

它与题干要求的对象/约束直接对应。

其余选项虽然可能也属于同一大类，但主要解决不同问题。

---

---

## Q712-Migration与Hybrid-Cloud题

**题目：** Which AWS service can migrate Amazon EC2 instances from one AWS Region to another?。

**选项：**

- A. AWS Application Migration Service
- B. AWS Database Migration Service (AWS DMS)
- C. AWS DataSync
- D. AWS Migration Hub

**主分类：** C4-22 Migration与Hybrid-Cloud题。

**题库记录答案：** `A`。

**需求/考点标签：** Migration。

**社区投票：** A 100%

### Q712.1-题干怎么拆

这道题先识别的不是某个服务名，而是这些约束：**Migration**。

判断时应该先找到与这些约束同层、同数据模型或同运维目标的服务，再排除“看起来也属于 AWS，但解决的是另一个层面问题”的选项。

### Q712.2-每个选项的定位

| 选项 | 题库内容 | 服务/概念定位 | 题库答案关系 |
|---|---|---|---|
| A | AWS Application Migration Service | AWS Application Migration Service：将物理/虚拟服务器持续复制并迁移到 AWS 的 lift-and-shift 服务。 | 题库记录为正确选项 |
| B | AWS Database Migration Service (AWS DMS) | AWS DMS：在线迁移/复制数据库数据并尽量减少停机。 | 题库记录为非正确选项 |
| C | AWS DataSync | AWS DataSync：在线高速自动化传输文件/对象数据到、从 AWS 存储。 | 题库记录为非正确选项 |
| D | AWS Migration Hub | AWS Migration Hub：集中跟踪多个迁移工具和应用迁移进度。 | 题库记录为非正确选项 |

### Q712.3-为什么题库会这样选

题库记录的正确选项定位为：AWS Application Migration Service：将物理/虚拟服务器持续复制并迁移到 AWS 的 lift-and-shift 服务。

它与题干要求的对象/约束直接对应。

其余选项虽然可能也属于同一大类，但主要解决不同问题。

---

---

## Q717-Migration与Hybrid-Cloud题

**题目：** A company needs to run some of its workload in the AWS Cloud. The company needs to keep some of the workload in its own on-site data center due to compliance reasons. Which AWS service will meet these requirements?。

**选项：**

- A. AWSConfig
- B. AWS Outposts
- C. Amazon Lightsail
- D. Amazon Connect

**主分类：** C4-22 Migration与Hybrid-Cloud题。

**题库记录答案：** `B`。

**需求/考点标签：** 配置变化与合规。

### Q717.1-题干怎么拆

这道题先识别的不是某个服务名，而是这些约束：**配置变化与合规**。

判断时应该先找到与这些约束同层、同数据模型或同运维目标的服务，再排除“看起来也属于 AWS，但解决的是另一个层面问题”的选项。

### Q717.2-每个选项的定位

| 选项 | 题库内容 | 服务/概念定位 | 题库答案关系 |
|---|---|---|---|
| A | AWSConfig | 该选项是题库中的概念/服务描述。现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为非正确选项 |
| B | AWS Outposts | AWS Outposts：把 AWS 基础设施和服务运行到客户本地场所。 | 题库记录为正确选项 |
| C | Amazon Lightsail | Amazon Lightsail：面向简单网站/小型应用的简化云平台与可预测套餐。 | 题库记录为非正确选项 |
| D | Amazon Connect | Amazon Connect：云联络中心服务。 | 题库记录为非正确选项 |

### Q717.3-为什么题库会这样选

题库记录的正确选项定位为：AWS Outposts：把 AWS 基础设施和服务运行到客户本地场所。

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

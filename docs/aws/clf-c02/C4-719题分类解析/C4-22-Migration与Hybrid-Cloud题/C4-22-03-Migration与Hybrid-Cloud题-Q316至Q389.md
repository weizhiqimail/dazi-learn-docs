---
id: C4-22-03-Migration与Hybrid-Cloud题-Q316至Q389
sidebar_position: 3
---

# C4-22-03-Migration与Hybrid-Cloud题-Q316至Q389

> 本篇是《C4-22-Migration与Hybrid-Cloud题》的第3个分篇，主要包含：Migration与Hybrid-Cloud题、Migration与Hybrid-Cloud题、Migration与Hybrid-Cloud题、Migration与Hybrid-Cloud题、Migration与Hybrid-Cloud题、Migration与Hybrid-Cloud题。

## Q316-Migration与Hybrid-Cloud题

**题目：** A company wants to move its on-premises databases to managed cloud database services by using a simplified migration process. Which AWS service or tool can help the company meet this requirement?。

**选项：**

- A. AWS Storage Gateway
- B. AWS Application Migration Service
- C. AWS DataSync
- D. AWS Database Migration Service (AWS DMS)

**主分类：** C4-22 Migration与Hybrid-Cloud题。

**题库记录答案：** `D`。

**需求/考点标签：** Hybrid Cloud / Migration。

**社区投票：** D 100%

### Q316.1-题干怎么拆

这道题先识别的不是某个服务名，而是这些约束：**Hybrid Cloud、Migration**。

判断时应该先找到与这些约束同层、同数据模型或同运维目标的服务，再排除“看起来也属于 AWS，但解决的是另一个层面问题”的选项。

### Q316.2-每个选项的定位

| 选项 | 题库内容 | 服务/概念定位 | 题库答案关系 |
|---|---|---|---|
| A | AWS Storage Gateway | AWS Storage Gateway：把本地环境通过文件/卷/虚拟磁带等接口连接 AWS 存储的混合存储服务。 | 题库记录为非正确选项 |
| B | AWS Application Migration Service | AWS Application Migration Service：将物理/虚拟服务器持续复制并迁移到 AWS 的 lift-and-shift 服务。 | 题库记录为非正确选项 |
| C | AWS DataSync | AWS DataSync：在线高速自动化传输文件/对象数据到、从 AWS 存储。 | 题库记录为非正确选项 |
| D | AWS Database Migration Service (AWS DMS) | AWS DMS：在线迁移/复制数据库数据并尽量减少停机。 | 题库记录为正确选项 |

### Q316.3-为什么题库会这样选

题库记录的正确选项定位为：AWS DMS：在线迁移/复制数据库数据并尽量减少停机。

它与题干要求的对象/约束直接对应。

其余选项虽然可能也属于同一大类，但主要解决不同问题。

---

---

## Q345-Migration与Hybrid-Cloud题

**题目：** Which AWS service provides a single location to track the progress of application migrations?。

**选项：**

- A. AWS Application Discovery Service
- B. AWS Application Migration Service
- C. AWS Service Catalog
- D. AWS Migration Hub

**主分类：** C4-22 Migration与Hybrid-Cloud题。

**题库记录答案：** `D`。

**需求/考点标签：** Migration。

**社区投票：** D 100%

### Q345.1-题干怎么拆

这道题先识别的不是某个服务名，而是这些约束：**Migration**。

判断时应该先找到与这些约束同层、同数据模型或同运维目标的服务，再排除“看起来也属于 AWS，但解决的是另一个层面问题”的选项。

### Q345.2-每个选项的定位

| 选项 | 题库内容 | 服务/概念定位 | 题库答案关系 |
|---|---|---|---|
| A | AWS Application Discovery Service | AWS Application Discovery Service：收集本地服务器使用和依赖信息，为迁移规划提供 Discovery 数据。 | 题库记录为非正确选项 |
| B | AWS Application Migration Service | AWS Application Migration Service：将物理/虚拟服务器持续复制并迁移到 AWS 的 lift-and-shift 服务。 | 题库记录为非正确选项 |
| C | AWS Service Catalog | AWS Service Catalog：让企业发布经过批准的云产品/基础设施模板目录。 | 题库记录为非正确选项 |
| D | AWS Migration Hub | AWS Migration Hub：集中跟踪多个迁移工具和应用迁移进度。 | 题库记录为正确选项 |

### Q345.3-为什么题库会这样选

题库记录的正确选项定位为：AWS Migration Hub：集中跟踪多个迁移工具和应用迁移进度。

它与题干要求的对象/约束直接对应。

其余选项虽然可能也属于同一大类，但主要解决不同问题。

---

---

## Q351-Migration与Hybrid-Cloud题

**题目：** A company is planning to migrate to the AWS Cloud. The company wants to identify measurable business outcomes that will explain the value of the company's decision to migrate. Which phase of the cloud transformation journey includes these activities?

**选项：**

- A. Envision
- B. Align
- C. Scale
- D. Launch

**主分类：** C4-22 Migration与Hybrid-Cloud题。

**题库记录答案：** `A`。

**需求/考点标签：** Migration。

**社区投票：** A 92%, B 8%。

### Q351.1-题干怎么拆

这道题先识别的不是某个服务名，而是这些约束：**Migration**。

判断时应该先找到与这些约束同层、同数据模型或同运维目标的服务，再排除“看起来也属于 AWS，但解决的是另一个层面问题”的选项。

### Q351.2-每个选项的定位

| 选项 | 题库内容 | 服务/概念定位 | 题库答案关系 |
|---|---|---|---|
| A | Envision | 该选项是题库中的概念/服务描述。现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为正确选项 |
| B | Align | 该选项是题库中的概念/服务描述。现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为非正确选项 |
| C | Scale | 可扩展性关注系统承载更大规模工作负载的能力。 | 题库记录为非正确选项 |
| D | Launch | 该选项是题库中的概念/服务描述。现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为非正确选项 |

### Q351.3-为什么题库会这样选

题库记录的正确选项定位为：该选项是题库中的概念/服务描述。

现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。

它与题干要求的对象/约束直接对应。

其余选项虽然可能也属于同一大类，但主要解决不同问题。

---

---

## Q360-Migration与Hybrid-Cloud题

**题目：** A company wants to deploy some of its resources in the AWS Cloud. To meet regulatory requirements, the data must remain local and on premises. There must be low latency between AWS and the company resources. Which AWS service or feature can be used to meet these requirements?

**选项：**

- A. AWS Local Zones
- B. Availability Zones
- C. AWS Outposts
- D. AWS Wavelength Zones

**主分类：** C4-22 Migration与Hybrid-Cloud题。

**题库记录答案：** `C`。

**需求/考点标签：** Hybrid Cloud。

**社区投票：** C 100%

### Q360.1-题干怎么拆

这道题先识别的不是某个服务名，而是这些约束：**Hybrid Cloud**。

判断时应该先找到与这些约束同层、同数据模型或同运维目标的服务，再排除“看起来也属于 AWS，但解决的是另一个层面问题”的选项。

### Q360.2-每个选项的定位

| 选项 | 题库内容 | 服务/概念定位 | 题库答案关系 |
|---|---|---|---|
| A | AWS Local Zones | 该选项是题库中的概念/服务描述。现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为非正确选项 |
| B | Availability Zones | Availability Zone 是 Region 内相互隔离的故障域/部署位置。 | 题库记录为非正确选项 |
| C | AWS Outposts | AWS Outposts：把 AWS 基础设施和服务运行到客户本地场所。 | 题库记录为正确选项 |
| D | AWS Wavelength Zones | AWS Wavelength：把 AWS 计算/存储靠近 5G 电信网络边缘。项目资料标记为当前范围外题库补充。 | 题库记录为非正确选项 |

### Q360.3-为什么题库会这样选

题库记录的正确选项定位为：AWS Outposts：把 AWS 基础设施和服务运行到客户本地场所。

它与题干要求的对象/约束直接对应。

其余选项虽然可能也属于同一大类，但主要解决不同问题。

### Q360.4-⚠-争议/版本提示

- 涉及项目资料已提示需关注当前状态的词：wavelength
- 本题同时收录到 `C4-27-旧题争议题与当前AWS差异.md`，不在这里强行替题库修正答案。

---

---

## Q375-Migration与Hybrid-Cloud题

**题目：** Which AWS service will help a company plan a migration to AWS by collecting the configuration, usage, and behavior data of on-premises data centers?。

**选项：**

- A. AWS Resource Groups
- B. AWS Application Discovery Service
- C. AWS Service Catalog
- D. AWS Systems Manager

**主分类：** C4-22 Migration与Hybrid-Cloud题。

**题库记录答案：** `B`。

**需求/考点标签：** Hybrid Cloud / Migration / Configuration Compliance。

**社区投票：** B 100%

### Q375.1-题干怎么拆

这道题先识别的不是某个服务名，而是这些约束：**Hybrid Cloud、Migration、Configuration Compliance**。

判断时应该先找到与这些约束同层、同数据模型或同运维目标的服务，再排除“看起来也属于 AWS，但解决的是另一个层面问题”的选项。

### Q375.2-每个选项的定位

| 选项 | 题库内容 | 服务/概念定位 | 题库答案关系 |
|---|---|---|---|
| A | AWS Resource Groups | 该选项是题库中的概念/服务描述。现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为非正确选项 |
| B | AWS Application Discovery Service | AWS Application Discovery Service：收集本地服务器使用和依赖信息，为迁移规划提供 Discovery 数据。 | 题库记录为正确选项 |
| C | AWS Service Catalog | AWS Service Catalog：让企业发布经过批准的云产品/基础设施模板目录。 | 题库记录为非正确选项 |
| D | AWS Systems Manager | AWS Systems Manager：集中运维和自动化管理 AWS/混合环境中的节点与资源。 | 题库记录为非正确选项 |

### Q375.3-为什么题库会这样选

题库记录的正确选项定位为：AWS Application Discovery Service：收集本地服务器使用和依赖信息，为迁移规划提供 Discovery 数据。

它与题干要求的对象/约束直接对应。

其余选项虽然可能也属于同一大类，但主要解决不同问题。

---

---

## Q389-Migration与Hybrid-Cloud题

**题目：** A company wants to migrate its on-premises NoSQL workload to Amazon DynamoDB. Which AWS service will meet this requirement?。

**选项：**

- A. AWS Migration Hub
- B. AWS Database Migration Service (AWS DMS)
- C. Migration Evaluator
- D. AWS Application Migration Service

**主分类：** C4-22 Migration与Hybrid-Cloud题。

**题库记录答案：** `B`。

**需求/考点标签：** NoSQL自动扩展。

**社区投票：** B 100%

### Q389.1-题干怎么拆

这道题先识别的不是某个服务名，而是这些约束：**NoSQL自动扩展**。

判断时应该先找到与这些约束同层、同数据模型或同运维目标的服务，再排除“看起来也属于 AWS，但解决的是另一个层面问题”的选项。

### Q389.2-每个选项的定位

| 选项 | 题库内容 | 服务/概念定位 | 题库答案关系 |
|---|---|---|---|
| A | AWS Migration Hub | AWS Migration Hub：集中跟踪多个迁移工具和应用迁移进度。 | 题库记录为非正确选项 |
| B | AWS Database Migration Service (AWS DMS) | AWS DMS：在线迁移/复制数据库数据并尽量减少停机。 | 题库记录为正确选项 |
| C | Migration Evaluator | Migration Evaluator：评估本地基础设施并建立迁云商业案例/成本分析。 | 题库记录为非正确选项 |
| D | AWS Application Migration Service | AWS Application Migration Service：将物理/虚拟服务器持续复制并迁移到 AWS 的 lift-and-shift 服务。 | 题库记录为非正确选项 |

### Q389.3-为什么题库会这样选

题库记录的正确选项定位为：AWS DMS：在线迁移/复制数据库数据并尽量减少停机。

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

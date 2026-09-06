---
id: C4-22-06-Migration与Hybrid-Cloud题-Q600至Q661
sidebar_position: 6
---

# C4-22-06-Migration与Hybrid-Cloud题-Q600至Q661

> 本篇是《C4-22-Migration与Hybrid-Cloud题》的第6个分篇，主要包含：Migration与Hybrid-Cloud题、Migration与Hybrid-Cloud题、Migration与Hybrid-Cloud题、Migration与Hybrid-Cloud题、Migration与Hybrid-Cloud题、Migration与Hybrid-Cloud题。

## Q600-Migration与Hybrid-Cloud题

**题目：** A company has applications that control on-premises factory equipment. Which AWS service should the company use to run these applications with the LEAST latency?。

**选项：**

- A. AWS Outposts
- B. Amazon EC2
- C. AWS Lambda
- D. AWS Fargate

**主分类：** C4-22 Migration与Hybrid-Cloud题。

**题库记录答案：** `A`。

**需求/考点标签：** Hybrid Cloud。

**社区投票：** A 100%

### Q600.1-题干怎么拆

这道题先识别的不是某个服务名，而是这些约束：**Hybrid Cloud**。

判断时应该先找到与这些约束同层、同数据模型或同运维目标的服务，再排除“看起来也属于 AWS，但解决的是另一个层面问题”的选项。

### Q600.2-每个选项的定位

| 选项 | 题库内容 | 服务/概念定位 | 题库答案关系 |
|---|---|---|---|
| A | AWS Outposts | AWS Outposts：把 AWS 基础设施和服务运行到客户本地场所。 | 题库记录为正确选项 |
| B | Amazon EC2 | Amazon EC2：可配置虚拟服务器，适合需要 OS/实例级控制的计算工作负载。 | 题库记录为非正确选项 |
| C | AWS Lambda | AWS Lambda：事件驱动的 Serverless 函数运行环境，无需管理服务器。 | 题库记录为非正确选项 |
| D | AWS Fargate | AWS Fargate：为 ECS/EKS 提供不需要管理底层服务器的容器计算能力。 | 题库记录为非正确选项 |

### Q600.3-为什么题库会这样选

题库记录的正确选项定位为：AWS Outposts：把 AWS 基础设施和服务运行到客户本地场所。

它与题干要求的对象/约束直接对应。

其余选项虽然可能也属于同一大类，但主要解决不同问题。

---

---

## Q613-Migration与Hybrid-Cloud题

**题目：** A company plans to perform a one-time migration of a large dataset with millions of files from its on-premises data center to the AWS Cloud. Which AWS service should the company use for the migration?。

**选项：**

- A. AWS Database Migration Service (AWS DMS)
- B. AWS DataSync
- C. AWS Migration Hub
- D. AWS Application Migration Service

**主分类：** C4-22 Migration与Hybrid-Cloud题。

**题库记录答案：** `B`。

**需求/考点标签：** Hybrid Cloud / Migration。

**社区投票：** B 100%

### Q613.1-题干怎么拆

这道题先识别的不是某个服务名，而是这些约束：**Hybrid Cloud、Migration**。

判断时应该先找到与这些约束同层、同数据模型或同运维目标的服务，再排除“看起来也属于 AWS，但解决的是另一个层面问题”的选项。

### Q613.2-每个选项的定位

| 选项 | 题库内容 | 服务/概念定位 | 题库答案关系 |
|---|---|---|---|
| A | AWS Database Migration Service (AWS DMS) | AWS DMS：在线迁移/复制数据库数据并尽量减少停机。 | 题库记录为非正确选项 |
| B | AWS DataSync | AWS DataSync：在线高速自动化传输文件/对象数据到、从 AWS 存储。 | 题库记录为正确选项 |
| C | AWS Migration Hub | AWS Migration Hub：集中跟踪多个迁移工具和应用迁移进度。 | 题库记录为非正确选项 |
| D | AWS Application Migration Service | AWS Application Migration Service：将物理/虚拟服务器持续复制并迁移到 AWS 的 lift-and-shift 服务。 | 题库记录为非正确选项 |

### Q613.3-为什么题库会这样选

题库记录的正确选项定位为：AWS DataSync：在线高速自动化传输文件/对象数据到、从 AWS 存储。

它与题干要求的对象/约束直接对应。

其余选项虽然可能也属于同一大类，但主要解决不同问题。

---

---

## Q618-Migration与Hybrid-Cloud题

**题目：** A company wants to migrate its on-premises infrastructure to the AWS Cloud. Which advantage of cloud computing will help the company reduce upfront costs?。

**选项：**

- A. Go global in minutes
- B. Increase speed and agility
- C. Benefit from massive economies of scale
- D. Trade fixed expense for variable expense

**主分类：** C4-22 Migration与Hybrid-Cloud题。

**题库记录答案：** `D`。

**需求/考点标签：** Hybrid Cloud / Migration。

**社区投票：** D 100%

### Q618.1-题干怎么拆

这道题先识别的不是某个服务名，而是这些约束：**Hybrid Cloud、Migration**。

判断时应该先找到与这些约束同层、同数据模型或同运维目标的服务，再排除“看起来也属于 AWS，但解决的是另一个层面问题”的选项。

### Q618.2-每个选项的定位

| 选项 | 题库内容 | 服务/概念定位 | 题库答案关系 |
|---|---|---|---|
| A | Go global in minutes | 该选项是题库中的概念/服务描述。现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为非正确选项 |
| B | Increase speed and agility | Agility 强调快速获取资源、实验和交付业务。 | 题库记录为非正确选项 |
| C | Benefit from massive economies of scale | 可扩展性关注系统承载更大规模工作负载的能力。 | 题库记录为非正确选项 |
| D | Trade fixed expense for variable expense | CAPEX/固定支出表示预先购买长期资产。 | 题库记录为正确选项 |

### Q618.3-为什么题库会这样选

题库记录的正确选项定位为：CAPEX/固定支出表示预先购买长期资产。

它与题干要求的对象/约束直接对应。

其余选项虽然可能也属于同一大类，但主要解决不同问题。

---

---

## Q626-Migration与Hybrid-Cloud题

**题目：** A company plans to migrate to the AWS Cloud. The company wants to gather information about its on-premises data center. Which AWS service should the company use to meet these requirements?。

**选项：**

- A. AWS Application Discovery Service
- B. AWS DataSync
- C. AWS Storage Gateway
- D. AWS Database Migration Service (AWS DMS)

**主分类：** C4-22 Migration与Hybrid-Cloud题。

**题库记录答案：** `A`。

**需求/考点标签：** Hybrid Cloud / Migration。

**社区投票：** A 100%

### Q626.1-题干怎么拆

这道题先识别的不是某个服务名，而是这些约束：**Hybrid Cloud、Migration**。

判断时应该先找到与这些约束同层、同数据模型或同运维目标的服务，再排除“看起来也属于 AWS，但解决的是另一个层面问题”的选项。

### Q626.2-每个选项的定位

| 选项 | 题库内容 | 服务/概念定位 | 题库答案关系 |
|---|---|---|---|
| A | AWS Application Discovery Service | AWS Application Discovery Service：收集本地服务器使用和依赖信息，为迁移规划提供 Discovery 数据。 | 题库记录为正确选项 |
| B | AWS DataSync | AWS DataSync：在线高速自动化传输文件/对象数据到、从 AWS 存储。 | 题库记录为非正确选项 |
| C | AWS Storage Gateway | AWS Storage Gateway：把本地环境通过文件/卷/虚拟磁带等接口连接 AWS 存储的混合存储服务。 | 题库记录为非正确选项 |
| D | AWS Database Migration Service (AWS DMS) | AWS DMS：在线迁移/复制数据库数据并尽量减少停机。 | 题库记录为非正确选项 |

### Q626.3-为什么题库会这样选

题库记录的正确选项定位为：AWS Application Discovery Service：收集本地服务器使用和依赖信息，为迁移规划提供 Discovery 数据。

它与题干要求的对象/约束直接对应。

其余选项虽然可能也属于同一大类，但主要解决不同问题。

---

---

## Q651-Migration与Hybrid-Cloud题

**题目：** A company needs to run some of its workloads on premises to comply with regulatory guidelines. The company wants to use the AWS Cloud to run workloads that are not required to be on premises. The company also wants to be able to use the same API calls for the on-premises workloads and the cloud workloads. Which AWS service or feature should the company use to meet these requirements?

**选项：**

- A. Dedicated Hosts
- B. AWS Outposts
- C. Availability Zones
- D. AWS Wavelength

**主分类：** C4-22 Migration与Hybrid-Cloud题。

**题库记录答案：** `B`。

**需求/考点标签：** 谁执行了API操作。

**社区投票：** B 100%

### Q651.1-题干怎么拆

这道题先识别的不是某个服务名，而是这些约束：**谁执行了API操作**。

判断时应该先找到与这些约束同层、同数据模型或同运维目标的服务，再排除“看起来也属于 AWS，但解决的是另一个层面问题”的选项。

### Q651.2-每个选项的定位

| 选项 | 题库内容 | 服务/概念定位 | 题库答案关系 |
|---|---|---|---|
| A | Dedicated Hosts | Dedicated Hosts：客户专用物理服务器，适合许可证/合规等硬件隔离要求。 | 题库记录为非正确选项 |
| B | AWS Outposts | AWS Outposts：把 AWS 基础设施和服务运行到客户本地场所。 | 题库记录为正确选项 |
| C | Availability Zones | Availability Zone 是 Region 内相互隔离的故障域/部署位置。 | 题库记录为非正确选项 |
| D | AWS Wavelength | AWS Wavelength：把 AWS 计算/存储靠近 5G 电信网络边缘。项目资料标记为当前范围外题库补充。 | 题库记录为非正确选项 |

### Q651.3-为什么题库会这样选

题库记录的正确选项定位为：AWS Outposts：把 AWS 基础设施和服务运行到客户本地场所。

它与题干要求的对象/约束直接对应。

其余选项虽然可能也属于同一大类，但主要解决不同问题。

### Q651.4-⚠-争议/版本提示

- 涉及项目资料已提示需关注当前状态的词：wavelength
- 本题同时收录到 `C4-27-旧题争议题与当前AWS差异.md`，不在这里强行替题库修正答案。

---

---

## Q661-Migration与Hybrid-Cloud题

**题目：** A company wants to transfer a virtual Windows Server 2022 that is currently running in its own data center to AWS. The company wants to automatically convert the existing server to run directly on AWS infrastructure instead of visualized hardware. Which AWS service will meet these requirements?

**选项：**

- A. AWS DataSync
- B. AWS Database Migration Service (AWS DMS)
- C. AWS Application Discovery Service
- D. AWS Application Migration Service

**主分类：** C4-22 Migration与Hybrid-Cloud题。

**题库记录答案：** `D`。

**社区投票：** D 100%

### Q661.1-题干怎么拆

现有题库没有提供独立 explanation。

这里按题干中的动作、对象和所有选项的服务定位进行比较。

### Q661.2-每个选项的定位

| 选项 | 题库内容 | 服务/概念定位 | 题库答案关系 |
|---|---|---|---|
| A | AWS DataSync | AWS DataSync：在线高速自动化传输文件/对象数据到、从 AWS 存储。 | 题库记录为非正确选项 |
| B | AWS Database Migration Service (AWS DMS) | AWS DMS：在线迁移/复制数据库数据并尽量减少停机。 | 题库记录为非正确选项 |
| C | AWS Application Discovery Service | AWS Application Discovery Service：收集本地服务器使用和依赖信息，为迁移规划提供 Discovery 数据。 | 题库记录为非正确选项 |
| D | AWS Application Migration Service | AWS Application Migration Service：将物理/虚拟服务器持续复制并迁移到 AWS 的 lift-and-shift 服务。 | 题库记录为正确选项 |

### Q661.3-为什么题库会这样选

题库记录的正确选项定位为：AWS Application Migration Service：将物理/虚拟服务器持续复制并迁移到 AWS 的 lift-and-shift 服务。

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

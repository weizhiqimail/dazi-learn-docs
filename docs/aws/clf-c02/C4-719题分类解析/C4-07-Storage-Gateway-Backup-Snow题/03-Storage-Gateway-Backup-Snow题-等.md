---
id: 03-Storage-Gateway-Backup-Snow题-等
sidebar_position: 3
---

# C4-07-Storage-Gateway-Backup-Snow题-Storage-Gateway-Backup-Snow题与Storage-Gateway-Backup-Snow题与Storage-Gateway-Backup-Snow题与Storage-Gateway-Backup-Snow题与Storage-Gateway-Backup-Snow题与Storage-Gateway-Backup-Snow题

> 本篇是《C4-07-Storage-Gateway-Backup-Snow题》的第3个分篇，主要包含：Storage-Gateway-Backup-Snow题、Storage-Gateway-Backup-Snow题、Storage-Gateway-Backup-Snow题、Storage-Gateway-Backup-Snow题、Storage-Gateway-Backup-Snow题、Storage-Gateway-Backup-Snow题。

## Q355-Storage-Gateway-Backup-Snow题

**题目：** A company needs to move 75 petabytes of data from its on-premises data centers to AWS. Which AWS service should the company use to meet these requirements MOST cost-effectively?。

**选项：**

- A. AWS Snowball Edge Storage Optimized
- B. AWS Snowmobile
- C. AWS Direct Connect
- D. AWS Storage Gateway

**主分类：** C4-07 Storage-Gateway-Backup-Snow题。

**题库记录答案：** `B`。

**需求/考点标签：** Hybrid Cloud / Cost Optimization。

**社区投票：** B 75%, A 25%。

### Q355.1-题干怎么拆

这道题先识别的不是某个服务名，而是这些约束：**Hybrid Cloud、Cost Optimization**。

判断时应该先找到与这些约束同层、同数据模型或同运维目标的服务，再排除“看起来也属于 AWS，但解决的是另一个层面问题”的选项。

### Q355.2-每个选项的定位

| 选项 | 题库内容 | 服务/概念定位 | 题库答案关系 |
|---|---|---|---|
| A | AWS Snowball Edge Storage Optimized | AWS Snow Family：用于大规模离线数据迁移、边缘数据处理等的物理设备家族。 | 题库记录为非正确选项 |
| B | AWS Snowmobile | AWS Snow Family：用于大规模离线数据迁移、边缘数据处理等的物理设备家族。 | 题库记录为正确选项 |
| C | AWS Direct Connect | AWS Direct Connect：客户网络到 AWS 的专用网络连接，适合稳定、长期、可预测链路需求。 | 题库记录为非正确选项 |
| D | AWS Storage Gateway | AWS Storage Gateway：把本地环境通过文件/卷/虚拟磁带等接口连接 AWS 存储的混合存储服务。 | 题库记录为非正确选项 |

### Q355.3-为什么题库会这样选

题库记录的正确选项定位为：AWS Snow Family：用于大规模离线数据迁移、边缘数据处理等的物理设备家族。

它与题干要求的对象/约束直接对应。

其余选项虽然可能也属于同一大类，但主要解决不同问题。

---

---

## Q364-Storage-Gateway-Backup-Snow题

**题目：** Which AWS service provides on-premises applications with low-latency access to data that is stored in the AWS Cloud?。

**选项：**

- A. Amazon CloudFront
- B. AWS Storage Gateway
- C. AWS Backup
- D. AWS DataSync

**主分类：** C4-07 Storage-Gateway-Backup-Snow题。

**题库记录答案：** `B`。

**需求/考点标签：** Hybrid Cloud。

**社区投票：** B 100%

### Q364.1-题干怎么拆

这道题先识别的不是某个服务名，而是这些约束：**Hybrid Cloud**。

判断时应该先找到与这些约束同层、同数据模型或同运维目标的服务，再排除“看起来也属于 AWS，但解决的是另一个层面问题”的选项。

### Q364.2-每个选项的定位

| 选项 | 题库内容 | 服务/概念定位 | 题库答案关系 |
|---|---|---|---|
| A | Amazon CloudFront | Amazon CloudFront：AWS CDN，利用 Edge Location 缓存和分发内容。 | 题库记录为非正确选项 |
| B | AWS Storage Gateway | AWS Storage Gateway：把本地环境通过文件/卷/虚拟磁带等接口连接 AWS 存储的混合存储服务。 | 题库记录为正确选项 |
| C | AWS Backup | AWS Backup：集中管理 AWS 资源备份策略、计划与保留。 | 题库记录为非正确选项 |
| D | AWS DataSync | AWS DataSync：在线高速自动化传输文件/对象数据到、从 AWS 存储。 | 题库记录为非正确选项 |

### Q364.3-为什么题库会这样选

题库记录的正确选项定位为：AWS Storage Gateway：把本地环境通过文件/卷/虚拟磁带等接口连接 AWS 存储的混合存储服务。

它与题干要求的对象/约束直接对应。

其余选项虽然可能也属于同一大类，但主要解决不同问题。

---

---

## Q400-Storage-Gateway-Backup-Snow题

**题目：** A company wants to define a central data protection policy that works across AWS services for compute, storage, and database resources. Which AWS service will meet this requirement?。

**选项：**

- A. AWS Batch
- B. AWS Elastic Disaster Recovery
- C. AWS Backup
- D. Amazon FSx

**主分类：** C4-07 Storage-Gateway-Backup-Snow题。

**题库记录答案：** `C`。

**社区投票：** C 100%

### Q400.1-题干怎么拆

现有题库没有提供独立 explanation。

这里按题干中的动作、对象和所有选项的服务定位进行比较。

### Q400.2-每个选项的定位

| 选项 | 题库内容 | 服务/概念定位 | 题库答案关系 |
|---|---|---|---|
| A | AWS Batch | AWS Batch：托管批处理作业调度与计算资源供给。 | 题库记录为非正确选项 |
| B | AWS Elastic Disaster Recovery | 灾难恢复关注更大范围故障后的恢复策略、RTO/RPO。 | 题库记录为非正确选项 |
| C | AWS Backup | AWS Backup：集中管理 AWS 资源备份策略、计划与保留。 | 题库记录为正确选项 |
| D | Amazon FSx | Amazon FSx：托管专业文件系统家族，覆盖 Windows/高性能等文件工作负载。 | 题库记录为非正确选项 |

### Q400.3-为什么题库会这样选

题库记录的正确选项定位为：AWS Backup：集中管理 AWS 资源备份策略、计划与保留。

它与题干要求的对象/约束直接对应。

其余选项虽然可能也属于同一大类，但主要解决不同问题。

---

---

## Q533-Storage-Gateway-Backup-Snow题

**题目：** Which AWS solution gives companies the ability to use protocols such as NFS to store and retrieve objects in Amazon S3?。

**选项：**

- A. Amazon FSx for Lustre
- B. AWS Storage Gateway volume gateway
- C. AWS Storage Gateway file gateway
- D. Amazon Elastic File System (Amazon EFS)

**主分类：** C4-07 Storage-Gateway-Backup-Snow题。

**题库记录答案：** `C`。

**需求/考点标签：** Object Storage / File Storage。

**社区投票：** C 80%, A 20%。

### Q533.1-题干怎么拆

这道题先识别的不是某个服务名，而是这些约束：**Object Storage、File Storage**。

判断时应该先找到与这些约束同层、同数据模型或同运维目标的服务，再排除“看起来也属于 AWS，但解决的是另一个层面问题”的选项。

### Q533.2-每个选项的定位

| 选项 | 题库内容 | 服务/概念定位 | 题库答案关系 |
|---|---|---|---|
| A | Amazon FSx for Lustre | Amazon FSx：托管专业文件系统家族，覆盖 Windows/高性能等文件工作负载。 | 题库记录为非正确选项 |
| B | AWS Storage Gateway volume gateway | AWS Storage Gateway：把本地环境通过文件/卷/虚拟磁带等接口连接 AWS 存储的混合存储服务。 | 题库记录为非正确选项 |
| C | AWS Storage Gateway file gateway | AWS Storage Gateway：把本地环境通过文件/卷/虚拟磁带等接口连接 AWS 存储的混合存储服务。 | 题库记录为正确选项 |
| D | Amazon Elastic File System (Amazon EFS) | Amazon EFS：托管弹性 NFS 文件系统，可被多个计算资源共享。 | 题库记录为非正确选项 |

### Q533.3-为什么题库会这样选

题库记录的正确选项定位为：AWS Storage Gateway：把本地环境通过文件/卷/虚拟磁带等接口连接 AWS 存储的混合存储服务。

它与题干要求的对象/约束直接对应。

其余选项虽然可能也属于同一大类，但主要解决不同问题。

---

---

## Q671-Storage-Gateway-Backup-Snow题

**题目：** A company that is planning to migrate to the AWS Cloud is based in an isolated area that has limited internet connectivity. The company needs to perform local data processing on premises. The company needs a solution that can operate without a stable internet connection. Which AWS service will meet these requirements?

**选项：**

- A. Amazon S3
- B. AWS Snowball Edge
- C. AWS Storage Gateway
- D. AWS Backup

**主分类：** C4-07 Storage-Gateway-Backup-Snow题。

**题库记录答案：** `B`。

**需求/考点标签：** Hybrid Cloud / Migration。

**社区投票：** B 100%

### Q671.1-题干怎么拆

这道题先识别的不是某个服务名，而是这些约束：**Hybrid Cloud、Migration**。

判断时应该先找到与这些约束同层、同数据模型或同运维目标的服务，再排除“看起来也属于 AWS，但解决的是另一个层面问题”的选项。

### Q671.2-每个选项的定位

| 选项 | 题库内容 | 服务/概念定位 | 题库答案关系 |
|---|---|---|---|
| A | Amazon S3 | Amazon S3：高耐久、可扩展的对象存储，以 Bucket/Object 组织数据。 | 题库记录为非正确选项 |
| B | AWS Snowball Edge | AWS Snow Family：用于大规模离线数据迁移、边缘数据处理等的物理设备家族。 | 题库记录为正确选项 |
| C | AWS Storage Gateway | AWS Storage Gateway：把本地环境通过文件/卷/虚拟磁带等接口连接 AWS 存储的混合存储服务。 | 题库记录为非正确选项 |
| D | AWS Backup | AWS Backup：集中管理 AWS 资源备份策略、计划与保留。 | 题库记录为非正确选项 |

### Q671.3-为什么题库会这样选

题库记录的正确选项定位为：AWS Snow Family：用于大规模离线数据迁移、边缘数据处理等的物理设备家族。

它与题干要求的对象/约束直接对应。

其余选项虽然可能也属于同一大类，但主要解决不同问题。

---

---

## Q685-Storage-Gateway-Backup-Snow题

**题目：** A company wants a fully managed service that centralizes and automates data protection across AWS services and hybrid workloads. Which AWS service will meet these requirements?。

**选项：**

- A. AWS Artifact
- B. AWS Backup
- C. AWS Batch
- D. AWS Shield

**主分类：** C4-07 Storage-Gateway-Backup-Snow题。

**题库记录答案：** `B`。

**需求/考点标签：** Hybrid Cloud。

**社区投票：** B 100%

### Q685.1-题干怎么拆

这道题先识别的不是某个服务名，而是这些约束：**Hybrid Cloud**。

判断时应该先找到与这些约束同层、同数据模型或同运维目标的服务，再排除“看起来也属于 AWS，但解决的是另一个层面问题”的选项。

### Q685.2-每个选项的定位

| 选项 | 题库内容 | 服务/概念定位 | 题库答案关系 |
|---|---|---|---|
| A | AWS Artifact | AWS Artifact：按需访问 AWS 合规报告和部分协议的门户。 | 题库记录为非正确选项 |
| B | AWS Backup | AWS Backup：集中管理 AWS 资源备份策略、计划与保留。 | 题库记录为正确选项 |
| C | AWS Batch | AWS Batch：托管批处理作业调度与计算资源供给。 | 题库记录为非正确选项 |
| D | AWS Shield | AWS Shield：AWS DDoS 防护服务。 | 题库记录为非正确选项 |

### Q685.3-为什么题库会这样选

题库记录的正确选项定位为：AWS Backup：集中管理 AWS 资源备份策略、计划与保留。

它与题干要求的对象/约束直接对应。

其余选项虽然可能也属于同一大类，但主要解决不同问题。

---

## 本篇概述

- 本篇梳理了Storage-Gateway-Backup-Snow题相关的核心知识、适用场景与判断要点。
- 本篇梳理了Storage-Gateway-Backup-Snow题相关的核心知识、适用场景与判断要点。
- 本篇梳理了Storage-Gateway-Backup-Snow题相关的核心知识、适用场景与判断要点。
- 本篇梳理了Storage-Gateway-Backup-Snow题相关的核心知识、适用场景与判断要点。
- 本篇梳理了Storage-Gateway-Backup-Snow题相关的核心知识、适用场景与判断要点。
- 本篇梳理了Storage-Gateway-Backup-Snow题相关的核心知识、适用场景与判断要点。

[返回本章总述](./00-总述.md)｜[查看本章概述](./99-概述.md)

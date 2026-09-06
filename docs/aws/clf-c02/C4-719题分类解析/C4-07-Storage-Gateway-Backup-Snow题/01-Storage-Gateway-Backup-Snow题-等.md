---
id: 01-Storage-Gateway-Backup-Snow题-等
sidebar_position: 1
---

# C4-07-Storage-Gateway-Backup-Snow题-Storage-Gateway-Backup-Snow题与Storage-Gateway-Backup-Snow题与Storage-Gateway-Backup-Snow题与Storage-Gateway-Backup-Snow题与Storage-Gateway-Backup-Snow题

> 本篇是《C4-07-Storage-Gateway-Backup-Snow题》的第1个分篇，主要包含：Storage-Gateway-Backup-Snow题、Storage-Gateway-Backup-Snow题、Storage-Gateway-Backup-Snow题、Storage-Gateway-Backup-Snow题、Storage-Gateway-Backup-Snow题。

## Q1-Storage-Gateway-Backup-Snow题

**题目：** A company plans to use an Amazon Snowball Edge device to transfer files to the AWS Cloud. Which activities related to a Snowball Edge device are available to the company at no cost?。

**选项：**

- A. Use of the Snowball Edge appliance for a 10-day period
- B. The transfer of data out of Amazon S3 and to the Snowball Edge appliance
- C. The transfer of data from the Snowball Edge appliance into Amazon S3
- D. Daily use of the Snowball Edge appliance after 10 days

**主分类：** C4-07 Storage-Gateway-Backup-Snow题。

**题库记录答案：** `C`。

**需求/考点标签：** 离线大规模数据迁移。

**社区投票：** C 84%, A 16%。

### Q1.1-题干怎么拆

这道题先识别的不是某个服务名，而是这些约束：**离线大规模数据迁移**。

判断时应该先找到与这些约束同层、同数据模型或同运维目标的服务，再排除“看起来也属于 AWS，但解决的是另一个层面问题”的选项。

### Q1.2-每个选项的定位

| 选项 | 题库内容 | 服务/概念定位 | 题库答案关系 |
|---|---|---|---|
| A | Use of the Snowball Edge appliance for a 10-day period | AWS Snow Family：用于大规模离线数据迁移、边缘数据处理等的物理设备家族。 | 题库记录为非正确选项 |
| B | The transfer of data out of Amazon S3 and to the Snowball Edge appliance | AWS Snow Family：用于大规模离线数据迁移、边缘数据处理等的物理设备家族。Amazon S3：高耐久、可扩展的对象存储，以 Bucket/Object 组织数据。 | 题库记录为非正确选项 |
| C | The transfer of data from the Snowball Edge appliance into Amazon S3 | AWS Snow Family：用于大规模离线数据迁移、边缘数据处理等的物理设备家族。Amazon S3：高耐久、可扩展的对象存储，以 Bucket/Object 组织数据。 | 题库记录为正确选项 |
| D | Daily use of the Snowball Edge appliance after 10 days | AWS Snow Family：用于大规模离线数据迁移、边缘数据处理等的物理设备家族。 | 题库记录为非正确选项 |

### Q1.3-为什么题库会这样选

题库记录的正确选项定位为：AWS Snow Family：用于大规模离线数据迁移、边缘数据处理等的物理设备家族。

Amazon S3：高耐久、可扩展的对象存储，以 Bucket/Object 组织数据。

它与题干要求的对象/约束直接对应。

其余选项虽然可能也属于同一大类，但主要解决不同问题。

---

---

## Q3-Storage-Gateway-Backup-Snow题

**题目：** A company has a centralized group of users with large file storage requirements that have exceeded the space available on premises. The company wants to extend its file storage capabilities for this group while retaining the performance benefit of sharing content locally. What is the MOST operationally efficient AWS solution for this scenario?

**选项：**

- A. Create an Amazon S3 bucket for each user. Mount each bucket by using an S3 file system mounting utility.
- B. Configure and deploy an AWS Storage Gateway file gateway. Connect each user’s workstation to the file gateway.
- C. Move each user’s working environment to Amazon WorkSpaces. Set up an Amazon WorkDocs account for each user.
- D. Deploy an Amazon EC2 instance and attach an Amazon Elastic Block Store (Amazon EBS) Provisioned IOPS volume.

**主分类：** C4-07 Storage-Gateway-Backup-Snow题。

**题库记录答案：** `B`。

**需求/考点标签：** File Storage / Hybrid Cloud。

**社区投票：** B 97%

### Q3.1-题干怎么拆

这道题先识别的不是某个服务名，而是这些约束：**File Storage、Hybrid Cloud**。

判断时应该先找到与这些约束同层、同数据模型或同运维目标的服务，再排除“看起来也属于 AWS，但解决的是另一个层面问题”的选项。

### Q3.2-每个选项的定位

| 选项 | 题库内容 | 服务/概念定位 | 题库答案关系 |
|---|---|---|---|
| A | Create an Amazon S3 bucket for each user. Mount each bucket by using an S3 file system mounting utility. | Amazon S3：高耐久、可扩展的对象存储，以 Bucket/Object 组织数据。 | 题库记录为非正确选项 |
| B | Configure and deploy an AWS Storage Gateway file gateway. Connect each user’s workstation to the file gateway. | AWS Storage Gateway：把本地环境通过文件/卷/虚拟磁带等接口连接 AWS 存储的混合存储服务。 | 题库记录为正确选项 |
| C | Move each user’s working environment to Amazon WorkSpaces. Set up an Amazon WorkDocs account for each user. | 该选项是题库中的概念/服务描述。现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为非正确选项 |
| D | Deploy an Amazon EC2 instance and attach an Amazon Elastic Block Store (Amazon EBS) Provisioned IOPS volume. | Amazon EC2：可配置虚拟服务器，适合需要 OS/实例级控制的计算工作负载。Amazon EBS：面向 EC2 的持久化块存储卷。 | 题库记录为非正确选项 |

### Q3.3-为什么题库会这样选

题库记录的正确选项定位为：AWS Storage Gateway：把本地环境通过文件/卷/虚拟磁带等接口连接 AWS 存储的混合存储服务。

它与题干要求的对象/约束直接对应。

其余选项虽然可能也属于同一大类，但主要解决不同问题。

### Q3.4-⚠-争议/版本提示

- 涉及项目资料已提示需关注当前状态的词：workdocs
- 本题同时收录到 `C4-27-旧题争议题与当前AWS差异.md`，不在这里强行替题库修正答案。

---

---

## Q90-Storage-Gateway-Backup-Snow题

**题目：** Which AWS service is a hybrid cloud storage service that provides on-premises users access to virtually unlimited cloud storage?。

**选项：**

- A. AWS DataSync
- B. Amazon S3 Glacier
- C. AWS Storage Gateway
- D. Amazon Elastic Block Store (Amazon EBS)

**主分类：** C4-07 Storage-Gateway-Backup-Snow题。

**题库记录答案：** `C`。

**需求/考点标签：** Hybrid Cloud。

**社区投票：** C 100%

### Q90.1-题干怎么拆

这道题先识别的不是某个服务名，而是这些约束：**Hybrid Cloud**。

判断时应该先找到与这些约束同层、同数据模型或同运维目标的服务，再排除“看起来也属于 AWS，但解决的是另一个层面问题”的选项。

### Q90.2-每个选项的定位

| 选项 | 题库内容 | 服务/概念定位 | 题库答案关系 |
|---|---|---|---|
| A | AWS DataSync | AWS DataSync：在线高速自动化传输文件/对象数据到、从 AWS 存储。 | 题库记录为非正确选项 |
| B | Amazon S3 Glacier | Amazon S3：高耐久、可扩展的对象存储，以 Bucket/Object 组织数据。 | 题库记录为非正确选项 |
| C | AWS Storage Gateway | AWS Storage Gateway：把本地环境通过文件/卷/虚拟磁带等接口连接 AWS 存储的混合存储服务。 | 题库记录为正确选项 |
| D | Amazon Elastic Block Store (Amazon EBS) | Amazon EBS：面向 EC2 的持久化块存储卷。 | 题库记录为非正确选项 |

### Q90.3-为什么题库会这样选

题库记录的正确选项定位为：AWS Storage Gateway：把本地环境通过文件/卷/虚拟磁带等接口连接 AWS 存储的混合存储服务。

它与题干要求的对象/约束直接对应。

其余选项虽然可能也属于同一大类，但主要解决不同问题。

---

---

## Q103-Storage-Gateway-Backup-Snow题

**题目：** A company is using a third-party service to back up 10 TB of data to a tape library. The on-premises backup server is running out of space. The company wants to use AWS services for the backups without changing its existing backup workflows. Which AWS service should the company use to meet these requirements?

**选项：**

- A. Amazon Elastic Block Store (Amazon EBS)
- B. AWS Storage Gateway
- C. Amazon Elastic Container Service (Amazon ECS)
- D. AWS Lambda

**主分类：** C4-07 Storage-Gateway-Backup-Snow题。

**题库记录答案：** `B`。

**需求/考点标签：** 工作流编排。

**社区投票：** B 100%

### Q103.1-题干怎么拆

这道题先识别的不是某个服务名，而是这些约束：**工作流编排**。

判断时应该先找到与这些约束同层、同数据模型或同运维目标的服务，再排除“看起来也属于 AWS，但解决的是另一个层面问题”的选项。

### Q103.2-每个选项的定位

| 选项 | 题库内容 | 服务/概念定位 | 题库答案关系 |
|---|---|---|---|
| A | Amazon Elastic Block Store (Amazon EBS) | Amazon EBS：面向 EC2 的持久化块存储卷。 | 题库记录为非正确选项 |
| B | AWS Storage Gateway | AWS Storage Gateway：把本地环境通过文件/卷/虚拟磁带等接口连接 AWS 存储的混合存储服务。 | 题库记录为正确选项 |
| C | Amazon Elastic Container Service (Amazon ECS) | Amazon ECS：AWS 原生托管容器编排服务。 | 题库记录为非正确选项 |
| D | AWS Lambda | AWS Lambda：事件驱动的 Serverless 函数运行环境，无需管理服务器。 | 题库记录为非正确选项 |

### Q103.3-为什么题库会这样选

题库记录的正确选项定位为：AWS Storage Gateway：把本地环境通过文件/卷/虚拟磁带等接口连接 AWS 存储的混合存储服务。

它与题干要求的对象/约束直接对应。

其余选项虽然可能也属于同一大类，但主要解决不同问题。

---

---

## Q110-Storage-Gateway-Backup-Snow题

**题目：** A company wants to migrate its NFS on-premises workload to AWS. Which AWS Storage Gateway type should the company use to meet this requirement?。

**选项：**

- A. Tape Gateway
- B. Volume Gateway
- C. Amazon FSx File Gateway
- D. Amazon S3 File Gateway

**主分类：** C4-07 Storage-Gateway-Backup-Snow题。

**题库记录答案：** `D`。

**需求/考点标签：** File Storage / Hybrid Cloud / Migration。

**社区投票：** D 72%, C 28%。

### Q110.1-题干怎么拆

这道题先识别的不是某个服务名，而是这些约束：**File Storage、Hybrid Cloud、Migration**。

判断时应该先找到与这些约束同层、同数据模型或同运维目标的服务，再排除“看起来也属于 AWS，但解决的是另一个层面问题”的选项。

### Q110.2-每个选项的定位

| 选项 | 题库内容 | 服务/概念定位 | 题库答案关系 |
|---|---|---|---|
| A | Tape Gateway | AWS Storage Gateway：把本地环境通过文件/卷/虚拟磁带等接口连接 AWS 存储的混合存储服务。 | 题库记录为非正确选项 |
| B | Volume Gateway | AWS Storage Gateway：把本地环境通过文件/卷/虚拟磁带等接口连接 AWS 存储的混合存储服务。 | 题库记录为非正确选项 |
| C | Amazon FSx File Gateway | AWS Storage Gateway：把本地环境通过文件/卷/虚拟磁带等接口连接 AWS 存储的混合存储服务。Amazon FSx：托管专业文件系统家族，覆盖 Windows/高性能等文件工作负载。 | 题库记录为非正确选项 |
| D | Amazon S3 File Gateway | AWS Storage Gateway：把本地环境通过文件/卷/虚拟磁带等接口连接 AWS 存储的混合存储服务。Amazon S3：高耐久、可扩展的对象存储，以 Bucket/Object 组织数据。 | 题库记录为正确选项 |

### Q110.3-为什么题库会这样选

题库记录的正确选项定位为：AWS Storage Gateway：把本地环境通过文件/卷/虚拟磁带等接口连接 AWS 存储的混合存储服务。

Amazon S3：高耐久、可扩展的对象存储，以 Bucket/Object 组织数据。

它与题干要求的对象/约束直接对应。

其余选项虽然可能也属于同一大类，但主要解决不同问题。

---

## 本篇概述

- 本篇梳理了Storage-Gateway-Backup-Snow题相关的核心知识、适用场景与判断要点。
- 本篇梳理了Storage-Gateway-Backup-Snow题相关的核心知识、适用场景与判断要点。
- 本篇梳理了Storage-Gateway-Backup-Snow题相关的核心知识、适用场景与判断要点。
- 本篇梳理了Storage-Gateway-Backup-Snow题相关的核心知识、适用场景与判断要点。
- 本篇梳理了Storage-Gateway-Backup-Snow题相关的核心知识、适用场景与判断要点。

[返回本章总述](./00-总述.md)｜[查看本章概述](./99-概述.md)

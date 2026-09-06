---
id: C4-07-02-Storage-Gateway-Backup-Snow题-Q151至Q276
sidebar_position: 2
---

# C4-07-02-Storage-Gateway-Backup-Snow题-Q151至Q276

> 本篇是《C4-07-Storage-Gateway-Backup-Snow题》的第2个分篇，主要包含：Storage-Gateway-Backup-Snow题、Storage-Gateway-Backup-Snow题、Storage-Gateway-Backup-Snow题、Storage-Gateway-Backup-Snow题、Storage-Gateway-Backup-Snow题、Storage-Gateway-Backup-Snow题、Storage-Gateway-Backup-Snow题。

## Q151-Storage-Gateway-Backup-Snow题

**题目：** A company is moving an on-premises data center to the AWS Cloud. The company must migrate 50 petabytes of file storage data to AWS with the least possible operational overhead. Which AWS service or resource should the company use to meet these requirements?

**选项：**

- A. AWS Snowmobile
- B. AWS Snowball Edge
- C. AWS Data Exchange
- D. AWS Database Migration Service (AWS DMS)

**主分类：** C4-07 Storage-Gateway-Backup-Snow题。

**题库记录答案：** `A`。

**需求/考点标签：** File Storage / Hybrid Cloud / Migration。

**社区投票：** A 89%, B 11%。

### Q151.1-题干怎么拆

这道题先识别的不是某个服务名，而是这些约束：**File Storage、Hybrid Cloud、Migration**。

判断时应该先找到与这些约束同层、同数据模型或同运维目标的服务，再排除“看起来也属于 AWS，但解决的是另一个层面问题”的选项。

### Q151.2-每个选项的定位

| 选项 | 题库内容 | 服务/概念定位 | 题库答案关系 |
|---|---|---|---|
| A | AWS Snowmobile | AWS Snow Family：用于大规模离线数据迁移、边缘数据处理等的物理设备家族。 | 题库记录为正确选项 |
| B | AWS Snowball Edge | AWS Snow Family：用于大规模离线数据迁移、边缘数据处理等的物理设备家族。 | 题库记录为非正确选项 |
| C | AWS Data Exchange | AWS Data Exchange：查找、订阅和使用第三方数据集的服务。 | 题库记录为非正确选项 |
| D | AWS Database Migration Service (AWS DMS) | AWS DMS：在线迁移/复制数据库数据并尽量减少停机。 | 题库记录为非正确选项 |

### Q151.3-为什么题库会这样选

题库记录的正确选项定位为：AWS Snow Family：用于大规模离线数据迁移、边缘数据处理等的物理设备家族。

它与题干要求的对象/约束直接对应。

其余选项虽然可能也属于同一大类，但主要解决不同问题。

---

---

## Q191-Storage-Gateway-Backup-Snow题

**题目：** A company has a fleet of cargo ships. The cargo ships have sensors that collect data at sea, where there is intermittent or no internet connectivity. The company needs to collect, format, and process the data at sea and move the data to AWS later. Which AWS service should the company use to meet these requirements?

**选项：**

- A. AWS IoT Core
- B. Amazon Lightsail
- C. AWS Storage Gateway
- D. AWS Snowball Edge

**主分类：** C4-07 Storage-Gateway-Backup-Snow题。

**题库记录答案：** `D`。

**社区投票：** D 100%

### Q191.1-题干怎么拆

现有题库没有提供独立 explanation。

这里按题干中的动作、对象和所有选项的服务定位进行比较。

### Q191.2-每个选项的定位

| 选项 | 题库内容 | 服务/概念定位 | 题库答案关系 |
|---|---|---|---|
| A | AWS IoT Core | AWS IoT Core：安全连接 IoT 设备并处理设备消息的托管服务。 | 题库记录为非正确选项 |
| B | Amazon Lightsail | Amazon Lightsail：面向简单网站/小型应用的简化云平台与可预测套餐。 | 题库记录为非正确选项 |
| C | AWS Storage Gateway | AWS Storage Gateway：把本地环境通过文件/卷/虚拟磁带等接口连接 AWS 存储的混合存储服务。 | 题库记录为非正确选项 |
| D | AWS Snowball Edge | AWS Snow Family：用于大规模离线数据迁移、边缘数据处理等的物理设备家族。 | 题库记录为正确选项 |

### Q191.3-为什么题库会这样选

题库记录的正确选项定位为：AWS Snow Family：用于大规模离线数据迁移、边缘数据处理等的物理设备家族。

它与题干要求的对象/约束直接对应。

其余选项虽然可能也属于同一大类，但主要解决不同问题。

---

---

## Q205-Storage-Gateway-Backup-Snow题

**题目：** A company is planning to move data backups to the AWS Cloud. The company needs to replace on-premises storage with storage that is cloud-based but locally cached. Which AWS service meets these requirements?。

**选项：**

- A. AWS Storage Gateway
- B. AWS Snowcone
- C. AWS Backup
- D. Amazon Elastic File System (Amazon EFS)

**主分类：** C4-07 Storage-Gateway-Backup-Snow题。

**题库记录答案：** `A`。

**需求/考点标签：** 热点数据缓存。

**社区投票：** A 91%, D 9%。

### Q205.1-题干怎么拆

这道题先识别的不是某个服务名，而是这些约束：**热点数据缓存**。

判断时应该先找到与这些约束同层、同数据模型或同运维目标的服务，再排除“看起来也属于 AWS，但解决的是另一个层面问题”的选项。

### Q205.2-每个选项的定位

| 选项 | 题库内容 | 服务/概念定位 | 题库答案关系 |
|---|---|---|---|
| A | AWS Storage Gateway | AWS Storage Gateway：把本地环境通过文件/卷/虚拟磁带等接口连接 AWS 存储的混合存储服务。 | 题库记录为正确选项 |
| B | AWS Snowcone | AWS Snow Family：用于大规模离线数据迁移、边缘数据处理等的物理设备家族。 | 题库记录为非正确选项 |
| C | AWS Backup | AWS Backup：集中管理 AWS 资源备份策略、计划与保留。 | 题库记录为非正确选项 |
| D | Amazon Elastic File System (Amazon EFS) | Amazon EFS：托管弹性 NFS 文件系统，可被多个计算资源共享。 | 题库记录为非正确选项 |

### Q205.3-为什么题库会这样选

题库记录的正确选项定位为：AWS Storage Gateway：把本地环境通过文件/卷/虚拟磁带等接口连接 AWS 存储的混合存储服务。

它与题干要求的对象/约束直接对应。

其余选项虽然可能也属于同一大类，但主要解决不同问题。

---

---

## Q255-Storage-Gateway-Backup-Snow题

**题目：** A company has a physical tape library to store data backups. The tape library is running out of space. The company needs to extend the tape library's capacity to the AWS Cloud. Which AWS service should the company use to meet this requirement?

**选项：**

- A. Amazon Elastic File System (Amazon EFS)
- B. Amazon Elastic Block Store (Amazon EBS)
- C. Amazon S3
- D. AWS Storage Gateway

**主分类：** C4-07 Storage-Gateway-Backup-Snow题。

**题库记录答案：** `D`。

**社区投票：** D 100%

### Q255.1-题干怎么拆

现有题库没有提供独立 explanation。

这里按题干中的动作、对象和所有选项的服务定位进行比较。

### Q255.2-每个选项的定位

| 选项 | 题库内容 | 服务/概念定位 | 题库答案关系 |
|---|---|---|---|
| A | Amazon Elastic File System (Amazon EFS) | Amazon EFS：托管弹性 NFS 文件系统，可被多个计算资源共享。 | 题库记录为非正确选项 |
| B | Amazon Elastic Block Store (Amazon EBS) | Amazon EBS：面向 EC2 的持久化块存储卷。 | 题库记录为非正确选项 |
| C | Amazon S3 | Amazon S3：高耐久、可扩展的对象存储，以 Bucket/Object 组织数据。 | 题库记录为非正确选项 |
| D | AWS Storage Gateway | AWS Storage Gateway：把本地环境通过文件/卷/虚拟磁带等接口连接 AWS 存储的混合存储服务。 | 题库记录为正确选项 |

### Q255.3-为什么题库会这样选

题库记录的正确选项定位为：AWS Storage Gateway：把本地环境通过文件/卷/虚拟磁带等接口连接 AWS 存储的混合存储服务。

它与题干要求的对象/约束直接对应。

其余选项虽然可能也属于同一大类，但主要解决不同问题。

---

---

## Q263-Storage-Gateway-Backup-Snow题

**题目：** A company wants to migrate petabytes of data from its on-premises data center to AWS. The company does not want to use an internet connection to perform the migration. Which AWS service will meet these requirements?。

**选项：**

- A. AWS DataSync
- B. Amazon Connect
- C. AWS Snowmobile
- D. AWS Direct Connect

**主分类：** C4-07 Storage-Gateway-Backup-Snow题。

**题库记录答案：** `C`。

**需求/考点标签：** Hybrid Cloud / Migration。

**社区投票：** C 100%

### Q263.1-题干怎么拆

这道题先识别的不是某个服务名，而是这些约束：**Hybrid Cloud、Migration**。

判断时应该先找到与这些约束同层、同数据模型或同运维目标的服务，再排除“看起来也属于 AWS，但解决的是另一个层面问题”的选项。

### Q263.2-每个选项的定位

| 选项 | 题库内容 | 服务/概念定位 | 题库答案关系 |
|---|---|---|---|
| A | AWS DataSync | AWS DataSync：在线高速自动化传输文件/对象数据到、从 AWS 存储。 | 题库记录为非正确选项 |
| B | Amazon Connect | Amazon Connect：云联络中心服务。 | 题库记录为非正确选项 |
| C | AWS Snowmobile | AWS Snow Family：用于大规模离线数据迁移、边缘数据处理等的物理设备家族。 | 题库记录为正确选项 |
| D | AWS Direct Connect | AWS Direct Connect：客户网络到 AWS 的专用网络连接，适合稳定、长期、可预测链路需求。 | 题库记录为非正确选项 |

### Q263.3-为什么题库会这样选

题库记录的正确选项定位为：AWS Snow Family：用于大规模离线数据迁移、边缘数据处理等的物理设备家族。

它与题干要求的对象/约束直接对应。

其余选项虽然可能也属于同一大类，但主要解决不同问题。

---

---

## Q270-Storage-Gateway-Backup-Snow题

**题目：** A team of researchers is going to collect data at remote locations around the world. Many locations do not have internet connectivity. The team needs to capture the data in the field, and transfer it to the AWS Cloud later. Which AWS service will support these requirements?

**选项：**

- A. AWS Outposts
- B. AWS Transfer Family
- C. AWS Snow Family
- D. AWS Migration Hub

**主分类：** C4-07 Storage-Gateway-Backup-Snow题。

**题库记录答案：** `C`。

**社区投票：** C 93%, A 7%。

### Q270.1-题干怎么拆

现有题库没有提供独立 explanation。

这里按题干中的动作、对象和所有选项的服务定位进行比较。

### Q270.2-每个选项的定位

| 选项 | 题库内容 | 服务/概念定位 | 题库答案关系 |
|---|---|---|---|
| A | AWS Outposts | AWS Outposts：把 AWS 基础设施和服务运行到客户本地场所。 | 题库记录为非正确选项 |
| B | AWS Transfer Family | AWS Transfer Family：为 SFTP/FTPS/FTP 等协议提供托管文件传输入口。 | 题库记录为非正确选项 |
| C | AWS Snow Family | AWS Snow Family：用于大规模离线数据迁移、边缘数据处理等的物理设备家族。 | 题库记录为正确选项 |
| D | AWS Migration Hub | AWS Migration Hub：集中跟踪多个迁移工具和应用迁移进度。 | 题库记录为非正确选项 |

### Q270.3-为什么题库会这样选

题库记录的正确选项定位为：AWS Snow Family：用于大规模离线数据迁移、边缘数据处理等的物理设备家族。

它与题干要求的对象/约束直接对应。

其余选项虽然可能也属于同一大类，但主要解决不同问题。

---

---

## Q276-Storage-Gateway-Backup-Snow题

**题目：** A company wants an AWS service to collect and process 10 TB of data locally and transfer the data to AWS. The company has intermittent connectivity. Which AWS service will meet these requirements?。

**选项：**

- A. AWS Database Migration Service (AWS DMS)
- B. AWS DataSync
- C. AWS Backup
- D. AWS Snowball Edge

**主分类：** C4-07 Storage-Gateway-Backup-Snow题。

**题库记录答案：** `D`。

**社区投票：** D 100%

### Q276.1-题干怎么拆

现有题库没有提供独立 explanation。

这里按题干中的动作、对象和所有选项的服务定位进行比较。

### Q276.2-每个选项的定位

| 选项 | 题库内容 | 服务/概念定位 | 题库答案关系 |
|---|---|---|---|
| A | AWS Database Migration Service (AWS DMS) | AWS DMS：在线迁移/复制数据库数据并尽量减少停机。 | 题库记录为非正确选项 |
| B | AWS DataSync | AWS DataSync：在线高速自动化传输文件/对象数据到、从 AWS 存储。 | 题库记录为非正确选项 |
| C | AWS Backup | AWS Backup：集中管理 AWS 资源备份策略、计划与保留。 | 题库记录为非正确选项 |
| D | AWS Snowball Edge | AWS Snow Family：用于大规模离线数据迁移、边缘数据处理等的物理设备家族。 | 题库记录为正确选项 |

### Q276.3-为什么题库会这样选

题库记录的正确选项定位为：AWS Snow Family：用于大规模离线数据迁移、边缘数据处理等的物理设备家族。

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
- 本篇梳理了Storage-Gateway-Backup-Snow题相关的核心知识、适用场景与判断要点。

[返回本章总述](./C4-07-00-章节总述.md)｜[查看本章概述](./C4-07-99-章节概述.md)

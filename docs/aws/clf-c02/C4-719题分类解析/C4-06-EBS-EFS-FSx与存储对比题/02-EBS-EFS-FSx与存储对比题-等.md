---
id: 02-EBS-EFS-FSx与存储对比题-等
sidebar_position: 2
---

# C4-06-EBS-EFS-FSx与存储对比题-EBS-EFS-FSx与存储对比题与EBS-EFS-FSx与存储对比题

> 本篇是《C4-06-EBS-EFS-FSx与存储对比题》的第2个分篇，主要包含：EBS-EFS-FSx与存储对比题、EBS-EFS-FSx与存储对比题。

## Q593-EBS-EFS-FSx与存储对比题

**题目：** A user needs to perform a one-time backup of an Amazon Elastic Block Store (Amazon EBS) volume that is attached to an Amazon EC2 instance. What is the MOST operationally efficient way to perform this backup?。

**选项：**

- A. Attach another EBS volume to the EC2 instance, and copy the contents.
- B. Copy the EBS volume to a server that is running outside AWS and is connected with AWS Direct Connect.
- C. Create an EBS snapshot of the volume.
- D. Create a custom script to copy the EBS file contents to Amazon S3.

**主分类：** C4-06 EBS-EFS-FSx与存储对比题。

**题库记录答案：** `C`。

**需求/考点标签：** Block Storage。

**社区投票：** C 100%

### Q593.1-题干怎么拆

这道题先识别的不是某个服务名，而是这些约束：**Block Storage**。

判断时应该先找到与这些约束同层、同数据模型或同运维目标的服务，再排除“看起来也属于 AWS，但解决的是另一个层面问题”的选项。

### Q593.2-每个选项的定位

| 选项 | 题库内容 | 服务/概念定位 | 题库答案关系 |
|---|---|---|---|
| A | Attach another EBS volume to the EC2 instance, and copy the contents. | Amazon EC2：可配置虚拟服务器，适合需要 OS/实例级控制的计算工作负载。Amazon EBS：面向 EC2 的持久化块存储卷。 | 题库记录为非正确选项 |
| B | Copy the EBS volume to a server that is running outside AWS and is connected with AWS Direct Connect. | AWS Direct Connect：客户网络到 AWS 的专用网络连接，适合稳定、长期、可预测链路需求。Amazon EBS：面向 EC2 的持久化块存储卷。 | 题库记录为非正确选项 |
| C | Create an EBS snapshot of the volume. | Amazon EBS：面向 EC2 的持久化块存储卷。 | 题库记录为正确选项 |
| D | Create a custom script to copy the EBS file contents to Amazon S3. | Amazon EBS：面向 EC2 的持久化块存储卷。Amazon S3：高耐久、可扩展的对象存储，以 Bucket/Object 组织数据。 | 题库记录为非正确选项 |

### Q593.3-为什么题库会这样选

题库记录的正确选项定位为：Amazon EBS：面向 EC2 的持久化块存储卷。

它与题干要求的对象/约束直接对应。

其余选项虽然可能也属于同一大类，但主要解决不同问题。

---

---

## Q625-EBS-EFS-FSx与存储对比题

**题目：** A company needs a managed NFS file system that the company can use with its AWS compute resources. Which AWS service or feature will meet these requirements?。

**选项：**

- A. Amazon Elastic Block Store (Amazon EBS)
- B. AWS Storage Gateway Tape Gateway
- C. Amazon S3 Glacier Flexible Retrieval
- D. Amazon Elastic File System (Amazon EFS)

**主分类：** C4-06 EBS-EFS-FSx与存储对比题。

**题库记录答案：** `D`。

**需求/考点标签：** File Storage。

### Q625.1-题干怎么拆

这道题先识别的不是某个服务名，而是这些约束：**File Storage**。

判断时应该先找到与这些约束同层、同数据模型或同运维目标的服务，再排除“看起来也属于 AWS，但解决的是另一个层面问题”的选项。

### Q625.2-每个选项的定位

| 选项 | 题库内容 | 服务/概念定位 | 题库答案关系 |
|---|---|---|---|
| A | Amazon Elastic Block Store (Amazon EBS) | Amazon EBS：面向 EC2 的持久化块存储卷。 | 题库记录为非正确选项 |
| B | AWS Storage Gateway Tape Gateway | AWS Storage Gateway：把本地环境通过文件/卷/虚拟磁带等接口连接 AWS 存储的混合存储服务。 | 题库记录为非正确选项 |
| C | Amazon S3 Glacier Flexible Retrieval | Amazon S3：高耐久、可扩展的对象存储，以 Bucket/Object 组织数据。 | 题库记录为非正确选项 |
| D | Amazon Elastic File System (Amazon EFS) | Amazon EFS：托管弹性 NFS 文件系统，可被多个计算资源共享。 | 题库记录为正确选项 |

### Q625.3-为什么题库会这样选

题库记录的正确选项定位为：Amazon EFS：托管弹性 NFS 文件系统，可被多个计算资源共享。

它与题干要求的对象/约束直接对应。

其余选项虽然可能也属于同一大类，但主要解决不同问题。

---

## 本篇概述

- 本篇梳理了EBS-EFS-FSx与存储对比题相关的核心知识、适用场景与判断要点。
- 本篇梳理了EBS-EFS-FSx与存储对比题相关的核心知识、适用场景与判断要点。

[返回本章总述](./00-总述.md)｜[查看本章概述](./99-概述.md)

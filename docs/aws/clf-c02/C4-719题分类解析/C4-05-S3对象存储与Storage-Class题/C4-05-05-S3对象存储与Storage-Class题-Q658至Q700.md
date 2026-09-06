---
id: C4-05-05-S3对象存储与Storage-Class题-Q658至Q700
sidebar_position: 5
---

# C4-05-05-S3对象存储与Storage-Class题-Q658至Q700

> 本篇是《C4-05-S3对象存储与Storage-Class题》的第5个分篇，主要包含：S3对象存储与Storage-Class题、S3对象存储与Storage-Class题、S3对象存储与Storage-Class题。

## Q658-S3对象存储与Storage-Class题

**题目：** What is the total volume of data that can be stored in Amazon S3?。

**选项：**

- A. 10 PB
- B. 50 PB
- C. 100 PB
- D. Virtually unlimited

**主分类：** C4-05 S3对象存储与Storage-Class题。

**题库记录答案：** `D`。

**需求/考点标签：** Object Storage。

**社区投票：** D 100%

### Q658.1-题干怎么拆

这道题先识别的不是某个服务名，而是这些约束：**Object Storage**。

判断时应该先找到与这些约束同层、同数据模型或同运维目标的服务，再排除“看起来也属于 AWS，但解决的是另一个层面问题”的选项。

### Q658.2-每个选项的定位

| 选项 | 题库内容 | 服务/概念定位 | 题库答案关系 |
|---|---|---|---|
| A | 10 PB | 该选项是题库中的概念/服务描述。现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为非正确选项 |
| B | 50 PB | 该选项是题库中的概念/服务描述。现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为非正确选项 |
| C | 100 PB | 该选项是题库中的概念/服务描述。现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为非正确选项 |
| D | Virtually unlimited | 该选项是题库中的概念/服务描述。现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为正确选项 |

### Q658.3-为什么题库会这样选

题库记录的正确选项定位为：该选项是题库中的概念/服务描述。

现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。

它与题干要求的对象/约束直接对应。

其余选项虽然可能也属于同一大类，但主要解决不同问题。

---

---

## Q660-S3对象存储与Storage-Class题

**题目：** A company stores data in an Amazon S3 bucket. Which task is the responsibility of AWS?。

**选项：**

- A. Configure an S3 Lifecycle policy.
- B. Activate S3 Versioning.
- C. Configure S3 bucket policies.
- D. Protect the infrastructure that supports S3 storage.

**主分类：** C4-05 S3对象存储与Storage-Class题。

**题库记录答案：** `D`。

**需求/考点标签：** Object Storage。

### Q660.1-题干怎么拆

这道题先识别的不是某个服务名，而是这些约束：**Object Storage**。

判断时应该先找到与这些约束同层、同数据模型或同运维目标的服务，再排除“看起来也属于 AWS，但解决的是另一个层面问题”的选项。

### Q660.2-每个选项的定位

| 选项 | 题库内容 | 服务/概念定位 | 题库答案关系 |
|---|---|---|---|
| A | Configure an S3 Lifecycle policy. | Amazon S3：高耐久、可扩展的对象存储，以 Bucket/Object 组织数据。 | 题库记录为非正确选项 |
| B | Activate S3 Versioning. | Amazon S3：高耐久、可扩展的对象存储，以 Bucket/Object 组织数据。 | 题库记录为非正确选项 |
| C | Configure S3 bucket policies. | Amazon S3：高耐久、可扩展的对象存储，以 Bucket/Object 组织数据。 | 题库记录为非正确选项 |
| D | Protect the infrastructure that supports S3 storage. | Amazon S3：高耐久、可扩展的对象存储，以 Bucket/Object 组织数据。 | 题库记录为正确选项 |

### Q660.3-为什么题库会这样选

题库记录的正确选项定位为：Amazon S3：高耐久、可扩展的对象存储，以 Bucket/Object 组织数据。

它与题干要求的对象/约束直接对应。

其余选项虽然可能也属于同一大类，但主要解决不同问题。

---

---

## Q700-S3对象存储与Storage-Class题

**题目：** A company wants an Amazon S3 solution that provides access to object storage within single-digit milliseconds. Which solution will meet these requirements?。

**选项：**

- A. S3 Express One Zone
- B. S3 Standard
- C. S3 Glacier Flexible Retrieval
- D. S3 Glacier Instant Retrieval

**主分类：** C4-05 S3对象存储与Storage-Class题。

**题库记录答案：** `A`。

**需求/考点标签：** Object Storage。

**社区投票：** A 56%, B 44%。

### Q700.1-题干怎么拆

这道题先识别的不是某个服务名，而是这些约束：**Object Storage**。

判断时应该先找到与这些约束同层、同数据模型或同运维目标的服务，再排除“看起来也属于 AWS，但解决的是另一个层面问题”的选项。

### Q700.2-每个选项的定位

| 选项 | 题库内容 | 服务/概念定位 | 题库答案关系 |
|---|---|---|---|
| A | S3 Express One Zone | Amazon S3：高耐久、可扩展的对象存储，以 Bucket/Object 组织数据。 | 题库记录为正确选项 |
| B | S3 Standard | Amazon S3：高耐久、可扩展的对象存储，以 Bucket/Object 组织数据。 | 题库记录为非正确选项 |
| C | S3 Glacier Flexible Retrieval | Amazon S3：高耐久、可扩展的对象存储，以 Bucket/Object 组织数据。 | 题库记录为非正确选项 |
| D | S3 Glacier Instant Retrieval | Amazon S3：高耐久、可扩展的对象存储，以 Bucket/Object 组织数据。 | 题库记录为非正确选项 |

### Q700.3-为什么题库会这样选

题库记录的正确选项定位为：Amazon S3：高耐久、可扩展的对象存储，以 Bucket/Object 组织数据。

它与题干要求的对象/约束直接对应。

其余选项虽然可能也属于同一大类，但主要解决不同问题。

### Q700.4-⚠-争议/版本提示

- 社区投票分散，最高项仅 56%
- 本题同时收录到 `C4-27-旧题争议题与当前AWS差异.md`，不在这里强行替题库修正答案。

---

## 本篇概述

- 本篇梳理了S3对象存储与Storage-Class题相关的核心知识、适用场景与判断要点。
- 本篇梳理了S3对象存储与Storage-Class题相关的核心知识、适用场景与判断要点。
- 本篇梳理了S3对象存储与Storage-Class题相关的核心知识、适用场景与判断要点。

[返回本章总述](./C4-05-00-章节总述.md)｜[查看本章概述](./C4-05-99-章节概述.md)

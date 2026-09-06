---
id: C4-15-08-Shared-Responsibility题-Q631至Q648
sidebar_position: 8
---

# C4-15-08-Shared-Responsibility题-Q631至Q648

> 本篇是《C4-15-Shared-Responsibility题》的第8个分篇，主要包含：Shared-Responsibility题、Shared-Responsibility题。

## Q631-Shared-Responsibility题

**题目：** Under the AWS shared responsibility model, which of the following is a responsibility of the customer?。

**选项：**

- A. Shred disk drives before they leave a data center.
- B. Prevent customers from gathering packets or collecting traffic at the hypervisor level.
- C. Patch the guest operating system with the latest security patches.
- D. Maintain security systems that provide physical monitoring of data centers.

**主分类：** C4-15 Shared-Responsibility题。

**题库记录答案：** `C`。

**需求/考点标签：** Shared Responsibility。

**社区投票：** C 100%

### Q631.1-题干怎么拆

这道题先识别的不是某个服务名，而是这些约束：**Shared Responsibility**。

判断时应该先找到与这些约束同层、同数据模型或同运维目标的服务，再排除“看起来也属于 AWS，但解决的是另一个层面问题”的选项。

### Q631.2-每个选项的定位

| 选项 | 题库内容 | 服务/概念定位 | 题库答案关系 |
|---|---|---|---|
| A | Shred disk drives before they leave a data center. | 该选项是题库中的概念/服务描述。现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为非正确选项 |
| B | Prevent customers from gathering packets or collecting traffic at the hypervisor level. | 该选项是题库中的概念/服务描述。现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为非正确选项 |
| C | Patch the guest operating system with the latest security patches. | 该选项是题库中的概念/服务描述。现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为正确选项 |
| D | Maintain security systems that provide physical monitoring of data centers. | 该选项是题库中的概念/服务描述。现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为非正确选项 |

### Q631.3-为什么题库会这样选

题库记录的正确选项定位为：该选项是题库中的概念/服务描述。

现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。

它与题干要求的对象/约束直接对应。

其余选项虽然可能也属于同一大类，但主要解决不同问题。

---

---

## Q648-Shared-Responsibility题

**题目：** Which of the following is a customer responsibility according to the AWS shared responsibility model?。

**选项：**

- A. Apply security patches for Amazon S3 infrastructure devices.
- B. Provide physical security for AWS datacenters.
- C. Install operating system updates on Lambda@Edge.
- D. Implement multi-factor authentication (MFA) for IAM user accounts.

**主分类：** C4-15 Shared-Responsibility题。

**题库记录答案：** `D`。

**需求/考点标签：** Shared Responsibility。

### Q648.1-题干怎么拆

这道题先识别的不是某个服务名，而是这些约束：**Shared Responsibility**。

判断时应该先找到与这些约束同层、同数据模型或同运维目标的服务，再排除“看起来也属于 AWS，但解决的是另一个层面问题”的选项。

### Q648.2-每个选项的定位

| 选项 | 题库内容 | 服务/概念定位 | 题库答案关系 |
|---|---|---|---|
| A | Apply security patches for Amazon S3 infrastructure devices. | Amazon S3：高耐久、可扩展的对象存储，以 Bucket/Object 组织数据。 | 题库记录为非正确选项 |
| B | Provide physical security for AWS datacenters. | 该选项是题库中的概念/服务描述。现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为非正确选项 |
| C | Install operating system updates on Lambda@Edge. | AWS Lambda：事件驱动的 Serverless 函数运行环境，无需管理服务器。 | 题库记录为非正确选项 |
| D | Implement multi-factor authentication (MFA) for IAM user accounts. | AWS IAM：AWS 身份、认证授权与权限策略核心服务。MFA：多因素认证，增强账号登录安全。 | 题库记录为正确选项 |

### Q648.3-为什么题库会这样选

题库记录的正确选项定位为：AWS IAM：AWS 身份、认证授权与权限策略核心服务。

MFA：多因素认证，增强账号登录安全。

它与题干要求的对象/约束直接对应。

其余选项虽然可能也属于同一大类，但主要解决不同问题。

---

## 本篇概述

- 本篇梳理了Shared-Responsibility题相关的核心知识、适用场景与判断要点。
- 本篇梳理了Shared-Responsibility题相关的核心知识、适用场景与判断要点。

[返回本章总述](./C4-15-00-章节总述.md)｜[查看本章概述](./C4-15-99-章节概述.md)

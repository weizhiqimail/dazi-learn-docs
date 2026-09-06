---
id: 06-Shared-Responsibility题-等
sidebar_position: 6
---

# C4-15-Shared-Responsibility题-Shared-Responsibility题与Shared-Responsibility题与Shared-Responsibility题与Shared-Responsibility题与Shared-Responsibility题

> 本篇是《C4-15-Shared-Responsibility题》的第6个分篇，主要包含：Shared-Responsibility题、Shared-Responsibility题、Shared-Responsibility题、Shared-Responsibility题、Shared-Responsibility题。

## Q497-Shared-Responsibility题

**题目：** According to the AWS shared responsibility model, which task is the customer's responsibility?。

**选项：**

- A. Maintaining the infrastructure needed to run AWS Lambda
- B. Updating the operating system of Amazon DynamoDB instances
- C. Maintaining Amazon S3 infrastructure
- D. Updating the guest operating system on Amazon EC2 instances

**主分类：** C4-15 Shared-Responsibility题。

**题库记录答案：** `D`。

**需求/考点标签：** Shared Responsibility。

**社区投票：** D 100%

### Q497.1-题干怎么拆

这道题先识别的不是某个服务名，而是这些约束：**Shared Responsibility**。

判断时应该先找到与这些约束同层、同数据模型或同运维目标的服务，再排除“看起来也属于 AWS，但解决的是另一个层面问题”的选项。

### Q497.2-每个选项的定位

| 选项 | 题库内容 | 服务/概念定位 | 题库答案关系 |
|---|---|---|---|
| A | Maintaining the infrastructure needed to run AWS Lambda | AWS Lambda：事件驱动的 Serverless 函数运行环境，无需管理服务器。 | 题库记录为非正确选项 |
| B | Updating the operating system of Amazon DynamoDB instances | Amazon DynamoDB：Serverless NoSQL Key-Value/Document 数据库，适合高规模、低延迟访问。 | 题库记录为非正确选项 |
| C | Maintaining Amazon S3 infrastructure | Amazon S3：高耐久、可扩展的对象存储，以 Bucket/Object 组织数据。 | 题库记录为非正确选项 |
| D | Updating the guest operating system on Amazon EC2 instances | Amazon EC2：可配置虚拟服务器，适合需要 OS/实例级控制的计算工作负载。 | 题库记录为正确选项 |

### Q497.3-为什么题库会这样选

题库记录的正确选项定位为：Amazon EC2：可配置虚拟服务器，适合需要 OS/实例级控制的计算工作负载。

它与题干要求的对象/约束直接对应。

其余选项虽然可能也属于同一大类，但主要解决不同问题。

---

---

## Q498-Shared-Responsibility题

**题目：** A company is learning about its responsibilities that are related to the management of Amazon EC2 instances. Which tasks for EC2 instances are the company’s responsibility, according to the AWS shared responsibility model? (Choose two.)。

**选项：**

- A. Install and patch the machine hypervisor.
- B. Patch the guest operating system.
- C. Encrypt data at rest on associated storage.
- D. Install the physical hardware and cabling.
- E. Provide physical security for the EC2 instances.

**主分类：** C4-15 Shared-Responsibility题。

**题库记录答案：** `BC`。

**需求/考点标签：** Shared Responsibility。

**社区投票：** BC 100%

### Q498.1-题干怎么拆

这道题先识别的不是某个服务名，而是这些约束：**Shared Responsibility**。

判断时应该先找到与这些约束同层、同数据模型或同运维目标的服务，再排除“看起来也属于 AWS，但解决的是另一个层面问题”的选项。

### Q498.2-每个选项的定位

| 选项 | 题库内容 | 服务/概念定位 | 题库答案关系 |
|---|---|---|---|
| A | Install and patch the machine hypervisor. | 该选项是题库中的概念/服务描述。现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为非正确选项 |
| B | Patch the guest operating system. | 该选项是题库中的概念/服务描述。现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为正确选项 |
| C | Encrypt data at rest on associated storage. | 该选项是题库中的概念/服务描述。现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为正确选项 |
| D | Install the physical hardware and cabling. | 该选项是题库中的概念/服务描述。现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为非正确选项 |
| E | Provide physical security for the EC2 instances. | Amazon EC2：可配置虚拟服务器，适合需要 OS/实例级控制的计算工作负载。 | 题库记录为非正确选项 |

### Q498.3-为什么题库会这样选

题库记录的正确选项定位为：该选项是题库中的概念/服务描述。

现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。

该选项是题库中的概念/服务描述。

现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。

它与题干要求的对象/约束直接对应。

其余选项虽然可能也属于同一大类，但主要解决不同问题。

---

---

## Q511-Shared-Responsibility题

**题目：** Which task is the responsibility of the customer, according to the AWS shared responsibility model?。

**选项：**

- A. Patch the Amazon DynamoDB operating system.
- B. Secure Amazon CloudFront edge locations by allowing physical access according to the principle of least privilege.
- C. Protect the hardware that runs AWS services.
- D. Use AWS Identity and Access Management (IAM) according to the principle of least privilege.

**主分类：** C4-15 Shared-Responsibility题。

**题库记录答案：** `D`。

**需求/考点标签：** Shared Responsibility。

**社区投票：** D 100%

### Q511.1-题干怎么拆

这道题先识别的不是某个服务名，而是这些约束：**Shared Responsibility**。

判断时应该先找到与这些约束同层、同数据模型或同运维目标的服务，再排除“看起来也属于 AWS，但解决的是另一个层面问题”的选项。

### Q511.2-每个选项的定位

| 选项 | 题库内容 | 服务/概念定位 | 题库答案关系 |
|---|---|---|---|
| A | Patch the Amazon DynamoDB operating system. | Amazon DynamoDB：Serverless NoSQL Key-Value/Document 数据库，适合高规模、低延迟访问。 | 题库记录为非正确选项 |
| B | Secure Amazon CloudFront edge locations by allowing physical access according to the principle of least privilege. | Amazon CloudFront：AWS CDN，利用 Edge Location 缓存和分发内容。 | 题库记录为非正确选项 |
| C | Protect the hardware that runs AWS services. | 该选项是题库中的概念/服务描述。现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为非正确选项 |
| D | Use AWS Identity and Access Management (IAM) according to the principle of least privilege. | AWS IAM：AWS 身份、认证授权与权限策略核心服务。 | 题库记录为正确选项 |

### Q511.3-为什么题库会这样选

题库记录的正确选项定位为：AWS IAM：AWS 身份、认证授权与权限策略核心服务。

它与题干要求的对象/约束直接对应。

其余选项虽然可能也属于同一大类，但主要解决不同问题。

---

---

## Q535-Shared-Responsibility题

**题目：** Which task is the customer's responsibility, according to the AWS shared responsibility model?。

**选项：**

- A. Patch a guest operating system that is deployed on an Amazon EC2 instance.
- B. Control physical access to an AWS data center.
- C. Control access to AWS underlying hardware.
- D. Patch a host operating system that is deployed on Amazon S3.

**主分类：** C4-15 Shared-Responsibility题。

**题库记录答案：** `A`。

**需求/考点标签：** Shared Responsibility。

**社区投票：** A 100%

### Q535.1-题干怎么拆

这道题先识别的不是某个服务名，而是这些约束：**Shared Responsibility**。

判断时应该先找到与这些约束同层、同数据模型或同运维目标的服务，再排除“看起来也属于 AWS，但解决的是另一个层面问题”的选项。

### Q535.2-每个选项的定位

| 选项 | 题库内容 | 服务/概念定位 | 题库答案关系 |
|---|---|---|---|
| A | Patch a guest operating system that is deployed on an Amazon EC2 instance. | Amazon EC2：可配置虚拟服务器，适合需要 OS/实例级控制的计算工作负载。 | 题库记录为正确选项 |
| B | Control physical access to an AWS data center. | 该选项是题库中的概念/服务描述。现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为非正确选项 |
| C | Control access to AWS underlying hardware. | 该选项是题库中的概念/服务描述。现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为非正确选项 |
| D | Patch a host operating system that is deployed on Amazon S3. | Amazon S3：高耐久、可扩展的对象存储，以 Bucket/Object 组织数据。 | 题库记录为非正确选项 |

### Q535.3-为什么题库会这样选

题库记录的正确选项定位为：Amazon EC2：可配置虚拟服务器，适合需要 OS/实例级控制的计算工作负载。

它与题干要求的对象/约束直接对应。

其余选项虽然可能也属于同一大类，但主要解决不同问题。

---

---

## Q544-Shared-Responsibility题

**题目：** According to the AWS shared responsibility model, which of the following are AWS responsibilities? (Choose two.)。

**选项：**

- A. Network infrastructure and virtualization of infrastructure
- B. Security of application data
- C. Guest operating systems
- D. Physical security of hardware
- E. Credentials and policies

**主分类：** C4-15 Shared-Responsibility题。

**题库记录答案：** `AD`。

**需求/考点标签：** Shared Responsibility。

**社区投票：** AD 100%

### Q544.1-题干怎么拆

这道题先识别的不是某个服务名，而是这些约束：**Shared Responsibility**。

判断时应该先找到与这些约束同层、同数据模型或同运维目标的服务，再排除“看起来也属于 AWS，但解决的是另一个层面问题”的选项。

### Q544.2-每个选项的定位

| 选项 | 题库内容 | 服务/概念定位 | 题库答案关系 |
|---|---|---|---|
| A | Network infrastructure and virtualization of infrastructure | 该选项是题库中的概念/服务描述。现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为正确选项 |
| B | Security of application data | 该选项是题库中的概念/服务描述。现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为非正确选项 |
| C | Guest operating systems | 该选项是题库中的概念/服务描述。现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为非正确选项 |
| D | Physical security of hardware | 该选项是题库中的概念/服务描述。现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为正确选项 |
| E | Credentials and policies | 该选项是题库中的概念/服务描述。现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为非正确选项 |

### Q544.3-为什么题库会这样选

题库记录的正确选项定位为：该选项是题库中的概念/服务描述。

现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。

该选项是题库中的概念/服务描述。

现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。

它与题干要求的对象/约束直接对应。

其余选项虽然可能也属于同一大类，但主要解决不同问题。

---

## 本篇概述

- 本篇梳理了Shared-Responsibility题相关的核心知识、适用场景与判断要点。
- 本篇梳理了Shared-Responsibility题相关的核心知识、适用场景与判断要点。
- 本篇梳理了Shared-Responsibility题相关的核心知识、适用场景与判断要点。
- 本篇梳理了Shared-Responsibility题相关的核心知识、适用场景与判断要点。
- 本篇梳理了Shared-Responsibility题相关的核心知识、适用场景与判断要点。

[返回本章总述](./00-总述.md)｜[查看本章概述](./99-概述.md)

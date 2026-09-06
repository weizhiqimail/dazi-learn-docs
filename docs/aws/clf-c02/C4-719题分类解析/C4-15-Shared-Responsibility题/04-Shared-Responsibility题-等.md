---
id: 04-Shared-Responsibility题-等
sidebar_position: 4
---

# C4-15-Shared-Responsibility题-Shared-Responsibility题与Shared-Responsibility题与Shared-Responsibility题与Shared-Responsibility题与Shared-Responsibility题与Shared-Responsibility题

> 本篇是《C4-15-Shared-Responsibility题》的第4个分篇，主要包含：Shared-Responsibility题、Shared-Responsibility题、Shared-Responsibility题、Shared-Responsibility题、Shared-Responsibility题、Shared-Responsibility题。

## Q249-Shared-Responsibility题

**题目：** Which option is a shared control between AWS and the customer, according to the AWS shared responsibility model?。

**选项：**

- A. Configuration management
- B. Physical and environmental controls
- C. Data integrity authentication
- D. Identity and access management

**主分类：** C4-15 Shared-Responsibility题。

**题库记录答案：** `A`。

**需求/考点标签：** Shared Responsibility。

**社区投票：** A 100%

### Q249.1-题干怎么拆

这道题先识别的不是某个服务名，而是这些约束：**Shared Responsibility**。

判断时应该先找到与这些约束同层、同数据模型或同运维目标的服务，再排除“看起来也属于 AWS，但解决的是另一个层面问题”的选项。

### Q249.2-每个选项的定位

| 选项 | 题库内容 | 服务/概念定位 | 题库答案关系 |
|---|---|---|---|
| A | Configuration management | 该选项是题库中的概念/服务描述。现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为正确选项 |
| B | Physical and environmental controls | 该选项是题库中的概念/服务描述。现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为非正确选项 |
| C | Data integrity authentication | 该选项是题库中的概念/服务描述。现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为非正确选项 |
| D | Identity and access management | 该选项是题库中的概念/服务描述。现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为非正确选项 |

### Q249.3-为什么题库会这样选

题库记录的正确选项定位为：该选项是题库中的概念/服务描述。

现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。

它与题干要求的对象/约束直接对应。

其余选项虽然可能也属于同一大类，但主要解决不同问题。

### Q249.4-⚠-争议/版本提示

- 社区评论存在明显质疑/版本差异信号
- 本题同时收录到 `C4-27-旧题争议题与当前AWS差异.md`，不在这里强行替题库修正答案。

---

---

## Q282-Shared-Responsibility题

**题目：** Which of the following is the customer's responsibility under the AWS shared responsibility model? (Choose two.)。

**选项：**

- A. Maintain the configuration of infrastructure devices.
- B. Maintain patching and updates within the hardware infrastructure.
- C. Maintain the configuration of guest operating systems and applications.
- D. Manage decisions involving encryption options.
- E. Maintain infrastructure hardware.

**主分类：** C4-15 Shared-Responsibility题。

**题库记录答案：** `CD`。

**需求/考点标签：** Shared Responsibility。

**社区投票：** CD 100%

### Q282.1-题干怎么拆

这道题先识别的不是某个服务名，而是这些约束：**Shared Responsibility**。

判断时应该先找到与这些约束同层、同数据模型或同运维目标的服务，再排除“看起来也属于 AWS，但解决的是另一个层面问题”的选项。

### Q282.2-每个选项的定位

| 选项 | 题库内容 | 服务/概念定位 | 题库答案关系 |
|---|---|---|---|
| A | Maintain the configuration of infrastructure devices. | 该选项是题库中的概念/服务描述。现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为非正确选项 |
| B | Maintain patching and updates within the hardware infrastructure. | 该选项是题库中的概念/服务描述。现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为非正确选项 |
| C | Maintain the configuration of guest operating systems and applications. | 该选项是题库中的概念/服务描述。现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为正确选项 |
| D | Manage decisions involving encryption options. | 该选项是题库中的概念/服务描述。现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为正确选项 |
| E | Maintain infrastructure hardware. | 该选项是题库中的概念/服务描述。现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为非正确选项 |

### Q282.3-为什么题库会这样选

题库记录的正确选项定位为：该选项是题库中的概念/服务描述。

现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。

该选项是题库中的概念/服务描述。

现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。

它与题干要求的对象/约束直接对应。

其余选项虽然可能也属于同一大类，但主要解决不同问题。

---

---

## Q293-Shared-Responsibility题

**题目：** According to the AWS shared responsibility model, the customer is responsible for applying the latest security updates and patches for which of the following?。

**选项：**

- A. Amazon DynamoDB
- B. Amazon EC2 instances
- C. Amazon RDS instances
- D. Amazon S3

**主分类：** C4-15 Shared-Responsibility题。

**题库记录答案：** `B`。

**需求/考点标签：** Shared Responsibility。

**社区投票：** B 100%

### Q293.1-题干怎么拆

这道题先识别的不是某个服务名，而是这些约束：**Shared Responsibility**。

判断时应该先找到与这些约束同层、同数据模型或同运维目标的服务，再排除“看起来也属于 AWS，但解决的是另一个层面问题”的选项。

### Q293.2-每个选项的定位

| 选项 | 题库内容 | 服务/概念定位 | 题库答案关系 |
|---|---|---|---|
| A | Amazon DynamoDB | Amazon DynamoDB：Serverless NoSQL Key-Value/Document 数据库，适合高规模、低延迟访问。 | 题库记录为非正确选项 |
| B | Amazon EC2 instances | Amazon EC2：可配置虚拟服务器，适合需要 OS/实例级控制的计算工作负载。 | 题库记录为正确选项 |
| C | Amazon RDS instances | Amazon RDS：托管关系数据库服务，负责大量数据库基础设施运维。 | 题库记录为非正确选项 |
| D | Amazon S3 | Amazon S3：高耐久、可扩展的对象存储，以 Bucket/Object 组织数据。 | 题库记录为非正确选项 |

### Q293.3-为什么题库会这样选

题库记录的正确选项定位为：Amazon EC2：可配置虚拟服务器，适合需要 OS/实例级控制的计算工作负载。

它与题干要求的对象/约束直接对应。

其余选项虽然可能也属于同一大类，但主要解决不同问题。

---

---

## Q297-Shared-Responsibility题

**题目：** Who is responsible for managing IAM user access and secret keys according to the AWS shared responsibility model?。

**选项：**

- A. IAM access and secret keys are static, so there is no need to rotate them.
- B. The customer is responsible for rotating keys.
- C. AWS will rotate the keys whenever required.
- D. The AWS Support team will rotate keys when requested by the customer.

**主分类：** C4-15 Shared-Responsibility题。

**题库记录答案：** `B`。

**需求/考点标签：** Shared Responsibility。

**社区投票：** B 100%

### Q297.1-题干怎么拆

这道题先识别的不是某个服务名，而是这些约束：**Shared Responsibility**。

判断时应该先找到与这些约束同层、同数据模型或同运维目标的服务，再排除“看起来也属于 AWS，但解决的是另一个层面问题”的选项。

### Q297.2-每个选项的定位

| 选项 | 题库内容 | 服务/概念定位 | 题库答案关系 |
|---|---|---|---|
| A | IAM access and secret keys are static, so there is no need to rotate them. | AWS IAM：AWS 身份、认证授权与权限策略核心服务。 | 题库记录为非正确选项 |
| B | The customer is responsible for rotating keys. | 该选项描述 Shared Responsibility 中客户侧的管理/安全责任。 | 题库记录为正确选项 |
| C | AWS will rotate the keys whenever required. | 该选项是题库中的概念/服务描述。现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为非正确选项 |
| D | The AWS Support team will rotate keys when requested by the customer. | AWS Support：AWS 技术支持与客户服务计划体系。项目资料明确提示当前计划体系有更新。 | 题库记录为非正确选项 |

### Q297.3-为什么题库会这样选

题库记录的正确选项定位为：该选项描述 Shared Responsibility 中客户侧的管理/安全责任。

它与题干要求的对象/约束直接对应。

其余选项虽然可能也属于同一大类，但主要解决不同问题。

---

---

## Q300-Shared-Responsibility题

**题目：** Which of the following is entirely the responsibility of AWS, according to the AWS shared responsibility model?。

**选项：**

- A. Security awareness and training
- B. Development of an IAM password policy
- C. Patching of the guest operating system
- D. Physical and environmental controls

**主分类：** C4-15 Shared-Responsibility题。

**题库记录答案：** `D`。

**需求/考点标签：** Shared Responsibility。

**社区投票：** D 100%

### Q300.1-题干怎么拆

这道题先识别的不是某个服务名，而是这些约束：**Shared Responsibility**。

判断时应该先找到与这些约束同层、同数据模型或同运维目标的服务，再排除“看起来也属于 AWS，但解决的是另一个层面问题”的选项。

### Q300.2-每个选项的定位

| 选项 | 题库内容 | 服务/概念定位 | 题库答案关系 |
|---|---|---|---|
| A | Security awareness and training | 该选项是题库中的概念/服务描述。现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为非正确选项 |
| B | Development of an IAM password policy | AWS IAM：AWS 身份、认证授权与权限策略核心服务。 | 题库记录为非正确选项 |
| C | Patching of the guest operating system | 该选项是题库中的概念/服务描述。现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为非正确选项 |
| D | Physical and environmental controls | 该选项是题库中的概念/服务描述。现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为正确选项 |

### Q300.3-为什么题库会这样选

题库记录的正确选项定位为：该选项是题库中的概念/服务描述。

现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。

它与题干要求的对象/约束直接对应。

其余选项虽然可能也属于同一大类，但主要解决不同问题。

---

---

## Q334-Shared-Responsibility题

**题目：** Which task is a responsibility of AWS, according to the AWS shared responsibility model?。

**选项：**

- A. Encryption of application data
- B. Authentication of application users
- C. Protection of physical network infrastructure
- D. Configuration of firewalls

**主分类：** C4-15 Shared-Responsibility题。

**题库记录答案：** `C`。

**需求/考点标签：** Shared Responsibility。

**社区投票：** C 100%

### Q334.1-题干怎么拆

这道题先识别的不是某个服务名，而是这些约束：**Shared Responsibility**。

判断时应该先找到与这些约束同层、同数据模型或同运维目标的服务，再排除“看起来也属于 AWS，但解决的是另一个层面问题”的选项。

### Q334.2-每个选项的定位

| 选项 | 题库内容 | 服务/概念定位 | 题库答案关系 |
|---|---|---|---|
| A | Encryption of application data | 该选项是题库中的概念/服务描述。现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为非正确选项 |
| B | Authentication of application users | 该选项是题库中的概念/服务描述。现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为非正确选项 |
| C | Protection of physical network infrastructure | 该选项是题库中的概念/服务描述。现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为正确选项 |
| D | Configuration of firewalls | 该选项是题库中的概念/服务描述。现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为非正确选项 |

### Q334.3-为什么题库会这样选

题库记录的正确选项定位为：该选项是题库中的概念/服务描述。

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
- 本篇梳理了Shared-Responsibility题相关的核心知识、适用场景与判断要点。

[返回本章总述](./00-总述.md)｜[查看本章概述](./99-概述.md)

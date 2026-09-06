---
id: C4-18-02-WAF-Shield与网络安全题-Q490至Q713
sidebar_position: 2
---

# C4-18-02-WAF-Shield与网络安全题-Q490至Q713

> 本篇是《C4-18-WAF-Shield与网络安全题》的第2个分篇，主要包含：WAF-Shield与网络安全题、WAF-Shield与网络安全题、WAF-Shield与网络安全题、WAF-Shield与网络安全题、WAF-Shield与网络安全题。

## Q490-WAF-Shield与网络安全题

**题目：** A company is building a web application using AWS. Which AWS service will help prevent network layer DDoS attacks against the web application?。

**选项：**

- A. AWS WAF
- B. AWS Firewall Manager
- C. Amazon GuardDuty
- D. AWS Shield

**主分类：** C4-18 WAF-Shield与网络安全题。

**题库记录答案：** `D`。

**需求/考点标签：** DDoS防护。

**社区投票：** D 100%

### Q490.1-题干怎么拆

这道题先识别的不是某个服务名，而是这些约束：**DDoS防护**。

判断时应该先找到与这些约束同层、同数据模型或同运维目标的服务，再排除“看起来也属于 AWS，但解决的是另一个层面问题”的选项。

### Q490.2-每个选项的定位

| 选项 | 题库内容 | 服务/概念定位 | 题库答案关系 |
|---|---|---|---|
| A | AWS WAF | AWS WAF：Web 应用防火墙，过滤 HTTP(S) Web 请求。 | 题库记录为非正确选项 |
| B | AWS Firewall Manager | 该选项描述 Shared Responsibility 中 AWS 侧的基础设施责任。 | 题库记录为非正确选项 |
| C | Amazon GuardDuty | Amazon GuardDuty：基于多种日志与威胁情报进行持续威胁检测。 | 题库记录为非正确选项 |
| D | AWS Shield | AWS Shield：AWS DDoS 防护服务。 | 题库记录为正确选项 |

### Q490.3-为什么题库会这样选

题库记录的正确选项定位为：AWS Shield：AWS DDoS 防护服务。

它与题干要求的对象/约束直接对应。

其余选项虽然可能也属于同一大类，但主要解决不同问题。

---

---

## Q546-WAF-Shield与网络安全题

**题目：** A company is hosting a web application on Amazon EC2 instances. The company wants to implement custom conditions to filter and control inbound web traffic. Which AWS service will meet these requirements?。

**选项：**

- A. Amazon GuardDuty
- B. AWS WAF
- C. Amazon Macie
- D. AWS Shield

**主分类：** C4-18 WAF-Shield与网络安全题。

**题库记录答案：** `B`。

**社区投票：** B 100%

### Q546.1-题干怎么拆

现有题库没有提供独立 explanation。

这里按题干中的动作、对象和所有选项的服务定位进行比较。

### Q546.2-每个选项的定位

| 选项 | 题库内容 | 服务/概念定位 | 题库答案关系 |
|---|---|---|---|
| A | Amazon GuardDuty | Amazon GuardDuty：基于多种日志与威胁情报进行持续威胁检测。 | 题库记录为非正确选项 |
| B | AWS WAF | AWS WAF：Web 应用防火墙，过滤 HTTP(S) Web 请求。 | 题库记录为正确选项 |
| C | Amazon Macie | Amazon Macie：发现和保护 S3 中的敏感数据。 | 题库记录为非正确选项 |
| D | AWS Shield | AWS Shield：AWS DDoS 防护服务。 | 题库记录为非正确选项 |

### Q546.3-为什么题库会这样选

题库记录的正确选项定位为：AWS WAF：Web 应用防火墙，过滤 HTTP(S) Web 请求。

它与题干要求的对象/约束直接对应。

其余选项虽然可能也属于同一大类，但主要解决不同问题。

---

---

## Q589-WAF-Shield与网络安全题

**题目：** A company's cloud environment includes Amazon EC2 instances and Application Load Balancers. The company wants to improve protections for its cloud resources against DDoS attacks. The company also wants to have real-time visibility into any DDoS attacks. Which AWS service will meet these requirements?

**选项：**

- A. AWS Shield Standard
- B. AWS Firewall Manager
- C. AWS Shield Advanced
- D. Amazon GuardDuty

**主分类：** C4-18 WAF-Shield与网络安全题。

**题库记录答案：** `C`。

**需求/考点标签：** DDoS防护。

**社区投票：** C 100%

### Q589.1-题干怎么拆

这道题先识别的不是某个服务名，而是这些约束：**DDoS防护**。

判断时应该先找到与这些约束同层、同数据模型或同运维目标的服务，再排除“看起来也属于 AWS，但解决的是另一个层面问题”的选项。

### Q589.2-每个选项的定位

| 选项 | 题库内容 | 服务/概念定位 | 题库答案关系 |
|---|---|---|---|
| A | AWS Shield Standard | AWS Shield：AWS DDoS 防护服务。 | 题库记录为非正确选项 |
| B | AWS Firewall Manager | 该选项描述 Shared Responsibility 中 AWS 侧的基础设施责任。 | 题库记录为非正确选项 |
| C | AWS Shield Advanced | AWS Shield：AWS DDoS 防护服务。 | 题库记录为正确选项 |
| D | Amazon GuardDuty | Amazon GuardDuty：基于多种日志与威胁情报进行持续威胁检测。 | 题库记录为非正确选项 |

### Q589.3-为什么题库会这样选

题库记录的正确选项定位为：AWS Shield：AWS DDoS 防护服务。

它与题干要求的对象/约束直接对应。

其余选项虽然可能也属于同一大类，但主要解决不同问题。

---

---

## Q606-WAF-Shield与网络安全题

**题目：** A food delivery company needs to block users in certain countries from accessing its website. Which AWS service should the company use to meet this requirement?。

**选项：**

- A. AWS WAF
- B. AWS Control Tower
- C. Amazon Fraud Detector
- D. Amazon Pinpoint

**主分类：** C4-18 WAF-Shield与网络安全题。

**题库记录答案：** `A`。

**需求/考点标签：** Block Storage。

**社区投票：** A 100%

### Q606.1-题干怎么拆

这道题先识别的不是某个服务名，而是这些约束：**Block Storage**。

判断时应该先找到与这些约束同层、同数据模型或同运维目标的服务，再排除“看起来也属于 AWS，但解决的是另一个层面问题”的选项。

### Q606.2-每个选项的定位

| 选项 | 题库内容 | 服务/概念定位 | 题库答案关系 |
|---|---|---|---|
| A | AWS WAF | AWS WAF：Web 应用防火墙，过滤 HTTP(S) Web 请求。 | 题库记录为正确选项 |
| B | AWS Control Tower | AWS Control Tower：基于最佳实践建立和治理多账号 Landing Zone。 | 题库记录为非正确选项 |
| C | Amazon Fraud Detector | 该选项是题库中的概念/服务描述。现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为非正确选项 |
| D | Amazon Pinpoint | 该选项是题库中的概念/服务描述。现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为非正确选项 |

### Q606.3-为什么题库会这样选

题库记录的正确选项定位为：AWS WAF：Web 应用防火墙，过滤 HTTP(S) Web 请求。

它与题干要求的对象/约束直接对应。

其余选项虽然可能也属于同一大类，但主要解决不同问题。

---

---

## Q713-WAF-Shield与网络安全题

**题目：** A company needs to block SQL injection attacks. Which AWS service or feature provides this functionality?。

**选项：**

- A. AWS WAF
- B. Network ACLs
- C. Security groups
- D. AWS Trusted Advisor

**主分类：** C4-18 WAF-Shield与网络安全题。

**题库记录答案：** `A`。

**需求/考点标签：** Web攻击防护。

**社区投票：** A 100%

### Q713.1-题干怎么拆

这道题先识别的不是某个服务名，而是这些约束：**Web攻击防护**。

判断时应该先找到与这些约束同层、同数据模型或同运维目标的服务，再排除“看起来也属于 AWS，但解决的是另一个层面问题”的选项。

### Q713.2-每个选项的定位

| 选项 | 题库内容 | 服务/概念定位 | 题库答案关系 |
|---|---|---|---|
| A | AWS WAF | AWS WAF：Web 应用防火墙，过滤 HTTP(S) Web 请求。 | 题库记录为正确选项 |
| B | Network ACLs | Network ACL：Subnet 级无状态网络访问控制列表。 | 题库记录为非正确选项 |
| C | Security groups | Security Group：资源/ENI 级有状态虚拟防火墙。 | 题库记录为非正确选项 |
| D | AWS Trusted Advisor | AWS Trusted Advisor：根据 AWS 最佳实践提供成本、安全、性能、可靠性等检查建议。 | 题库记录为非正确选项 |

### Q713.3-为什么题库会这样选

题库记录的正确选项定位为：AWS WAF：Web 应用防火墙，过滤 HTTP(S) Web 请求。

它与题干要求的对象/约束直接对应。

其余选项虽然可能也属于同一大类，但主要解决不同问题。

---

## 本篇概述

- 本篇梳理了WAF-Shield与网络安全题相关的核心知识、适用场景与判断要点。
- 本篇梳理了WAF-Shield与网络安全题相关的核心知识、适用场景与判断要点。
- 本篇梳理了WAF-Shield与网络安全题相关的核心知识、适用场景与判断要点。
- 本篇梳理了WAF-Shield与网络安全题相关的核心知识、适用场景与判断要点。
- 本篇梳理了WAF-Shield与网络安全题相关的核心知识、适用场景与判断要点。

[返回本章总述](./C4-18-00-章节总述.md)｜[查看本章概述](./C4-18-99-章节概述.md)

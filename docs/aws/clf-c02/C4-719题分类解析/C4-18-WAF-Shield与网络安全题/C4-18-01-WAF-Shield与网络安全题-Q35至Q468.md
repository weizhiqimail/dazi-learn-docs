---
id: C4-18-01-WAF-Shield与网络安全题-Q35至Q468
sidebar_position: 1
---

# C4-18-01-WAF-Shield与网络安全题-Q35至Q468

> 本篇是《C4-18-WAF-Shield与网络安全题》的第1个分篇，主要包含：WAF-Shield与网络安全题、WAF-Shield与网络安全题、WAF-Shield与网络安全题、WAF-Shield与网络安全题、WAF-Shield与网络安全题、WAF-Shield与网络安全题、WAF-Shield与网络安全题、WAF-Shield与网络安全题。

## Q35-WAF-Shield与网络安全题

**题目：** A company needs to block SQL injection attacks. Which AWS service or feature can meet this requirement?。

**选项：**

- A. AWS WAF
- B. AWS Shield
- C. Network ACLs
- D. Security groups

**主分类：** C4-18 WAF-Shield与网络安全题。

**题库记录答案：** `A`。

**需求/考点标签：** Web攻击防护。

**社区投票：** A 100%

### Q35.1-题干怎么拆

这道题先识别的不是某个服务名，而是这些约束：**Web攻击防护**。

判断时应该先找到与这些约束同层、同数据模型或同运维目标的服务，再排除“看起来也属于 AWS，但解决的是另一个层面问题”的选项。

### Q35.2-每个选项的定位

| 选项 | 题库内容 | 服务/概念定位 | 题库答案关系 |
|---|---|---|---|
| A | AWS WAF | AWS WAF：Web 应用防火墙，过滤 HTTP(S) Web 请求。 | 题库记录为正确选项 |
| B | AWS Shield | AWS Shield：AWS DDoS 防护服务。 | 题库记录为非正确选项 |
| C | Network ACLs | Network ACL：Subnet 级无状态网络访问控制列表。 | 题库记录为非正确选项 |
| D | Security groups | Security Group：资源/ENI 级有状态虚拟防火墙。 | 题库记录为非正确选项 |

### Q35.3-为什么题库会这样选

题库记录的正确选项定位为：AWS WAF：Web 应用防火墙，过滤 HTTP(S) Web 请求。

它与题干要求的对象/约束直接对应。

其余选项虽然可能也属于同一大类，但主要解决不同问题。

---

---

## Q115-WAF-Shield与网络安全题

**题目：** A social media company wants to protect its web application from common web exploits such as SQL injections and cross-site scripting. Which AWS service will meet these requirements?。

**选项：**

- A. Amazon Inspector
- B. AWS WAF
- C. Amazon GuardDuty
- D. Amazon CloudWatch

**主分类：** C4-18 WAF-Shield与网络安全题。

**题库记录答案：** `B`。

**需求/考点标签：** Web攻击防护。

**社区投票：** B 100%

### Q115.1-题干怎么拆

这道题先识别的不是某个服务名，而是这些约束：**Web攻击防护**。

判断时应该先找到与这些约束同层、同数据模型或同运维目标的服务，再排除“看起来也属于 AWS，但解决的是另一个层面问题”的选项。

### Q115.2-每个选项的定位

| 选项 | 题库内容 | 服务/概念定位 | 题库答案关系 |
|---|---|---|---|
| A | Amazon Inspector | Amazon Inspector：持续漏洞管理与工作负载漏洞扫描。 | 题库记录为非正确选项 |
| B | AWS WAF | AWS WAF：Web 应用防火墙，过滤 HTTP(S) Web 请求。 | 题库记录为正确选项 |
| C | Amazon GuardDuty | Amazon GuardDuty：基于多种日志与威胁情报进行持续威胁检测。 | 题库记录为非正确选项 |
| D | Amazon CloudWatch | Amazon CloudWatch：Metrics/Logs/Alarms 等运行时监控与可观测性服务。 | 题库记录为非正确选项 |

### Q115.3-为什么题库会这样选

题库记录的正确选项定位为：AWS WAF：Web 应用防火墙，过滤 HTTP(S) Web 请求。

它与题干要求的对象/约束直接对应。

其余选项虽然可能也属于同一大类，但主要解决不同问题。

---

---

## Q124-WAF-Shield与网络安全题

**题目：** A company wants to block SQL injection attacks. Which AWS service or feature should the company use to meet this requirement?。

**选项：**

- A. AWS WAF
- B. Network ACLs
- C. Security groups
- D. AWS Certificate Manager (ACM)

**主分类：** C4-18 WAF-Shield与网络安全题。

**题库记录答案：** `A`。

**需求/考点标签：** Web攻击防护。

**社区投票：** A 100%

### Q124.1-题干怎么拆

这道题先识别的不是某个服务名，而是这些约束：**Web攻击防护**。

判断时应该先找到与这些约束同层、同数据模型或同运维目标的服务，再排除“看起来也属于 AWS，但解决的是另一个层面问题”的选项。

### Q124.2-每个选项的定位

| 选项 | 题库内容 | 服务/概念定位 | 题库答案关系 |
|---|---|---|---|
| A | AWS WAF | AWS WAF：Web 应用防火墙，过滤 HTTP(S) Web 请求。 | 题库记录为正确选项 |
| B | Network ACLs | Network ACL：Subnet 级无状态网络访问控制列表。 | 题库记录为非正确选项 |
| C | Security groups | Security Group：资源/ENI 级有状态虚拟防火墙。 | 题库记录为非正确选项 |
| D | AWS Certificate Manager (ACM) | AWS Certificate Manager：供应和管理 TLS/SSL 证书。 | 题库记录为非正确选项 |

### Q124.3-为什么题库会这样选

题库记录的正确选项定位为：AWS WAF：Web 应用防火墙，过滤 HTTP(S) Web 请求。

它与题干要求的对象/约束直接对应。

其余选项虽然可能也属于同一大类，但主要解决不同问题。

---

---

## Q211-WAF-Shield与网络安全题

**题目：** Which AWS security service protects applications from distributed denial of service attacks with always-on detection and automatic inline mitigations?。

**选项：**

- A. Amazon Inspector
- B. AWS Web Application Firewall (AWS WAF)
- C. Elastic Load Balancing (ELB)
- D. AWS Shield

**主分类：** C4-18 WAF-Shield与网络安全题。

**题库记录答案：** `D`。

**社区投票：** D 100%

### Q211.1-题干怎么拆

现有题库没有提供独立 explanation。

这里按题干中的动作、对象和所有选项的服务定位进行比较。

### Q211.2-每个选项的定位

| 选项 | 题库内容 | 服务/概念定位 | 题库答案关系 |
|---|---|---|---|
| A | Amazon Inspector | Amazon Inspector：持续漏洞管理与工作负载漏洞扫描。 | 题库记录为非正确选项 |
| B | AWS Web Application Firewall (AWS WAF) | AWS WAF：Web 应用防火墙，过滤 HTTP(S) Web 请求。 | 题库记录为非正确选项 |
| C | Elastic Load Balancing (ELB) | Elastic Load Balancing：在多个后端目标间分发流量并提高可用性。 | 题库记录为非正确选项 |
| D | AWS Shield | AWS Shield：AWS DDoS 防护服务。 | 题库记录为正确选项 |

### Q211.3-为什么题库会这样选

题库记录的正确选项定位为：AWS Shield：AWS DDoS 防护服务。

它与题干要求的对象/约束直接对应。

其余选项虽然可能也属于同一大类，但主要解决不同问题。

---

---

## Q223-WAF-Shield与网络安全题

**题目：** A company website is experiencing DDoS attacks. Which AWS service can help protect the company website against these attacks?。

**选项：**

- A. AWS Resource Access Manager
- B. AWS Amplify
- C. AWS Shield
- D. Amazon GuardDuty

**主分类：** C4-18 WAF-Shield与网络安全题。

**题库记录答案：** `C`。

**需求/考点标签：** DDoS防护。

**社区投票：** C 100%

### Q223.1-题干怎么拆

这道题先识别的不是某个服务名，而是这些约束：**DDoS防护**。

判断时应该先找到与这些约束同层、同数据模型或同运维目标的服务，再排除“看起来也属于 AWS，但解决的是另一个层面问题”的选项。

### Q223.2-每个选项的定位

| 选项 | 题库内容 | 服务/概念定位 | 题库答案关系 |
|---|---|---|---|
| A | AWS Resource Access Manager | AWS RAM：在账号/组织之间共享支持的 AWS 资源。 | 题库记录为非正确选项 |
| B | AWS Amplify | 该选项是题库中的概念/服务描述。现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为非正确选项 |
| C | AWS Shield | AWS Shield：AWS DDoS 防护服务。 | 题库记录为正确选项 |
| D | Amazon GuardDuty | Amazon GuardDuty：基于多种日志与威胁情报进行持续威胁检测。 | 题库记录为非正确选项 |

### Q223.3-为什么题库会这样选

题库记录的正确选项定位为：AWS Shield：AWS DDoS 防护服务。

它与题干要求的对象/约束直接对应。

其余选项虽然可能也属于同一大类，但主要解决不同问题。

---

---

## Q280-WAF-Shield与网络安全题

**题目：** A global company wants to use a managed security service for protection from SQL injection attacks. The service also must provide detailed logging information about access to the company's ecommerce applications. Which AWS service will meet these requirements?

**选项：**

- A. AWS Network Firewall
- B. Amazon RDS for SQL Server
- C. Amazon GuardDuty
- D. AWS WAF

**主分类：** C4-18 WAF-Shield与网络安全题。

**题库记录答案：** `D`。

**需求/考点标签：** Web攻击防护。

**社区投票：** D 100%

### Q280.1-题干怎么拆

这道题先识别的不是某个服务名，而是这些约束：**Web攻击防护**。

判断时应该先找到与这些约束同层、同数据模型或同运维目标的服务，再排除“看起来也属于 AWS，但解决的是另一个层面问题”的选项。

### Q280.2-每个选项的定位

| 选项 | 题库内容 | 服务/概念定位 | 题库答案关系 |
|---|---|---|---|
| A | AWS Network Firewall | 该选项是题库中的概念/服务描述。现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为非正确选项 |
| B | Amazon RDS for SQL Server | Amazon RDS：托管关系数据库服务，负责大量数据库基础设施运维。 | 题库记录为非正确选项 |
| C | Amazon GuardDuty | Amazon GuardDuty：基于多种日志与威胁情报进行持续威胁检测。 | 题库记录为非正确选项 |
| D | AWS WAF | AWS WAF：Web 应用防火墙，过滤 HTTP(S) Web 请求。 | 题库记录为正确选项 |

### Q280.3-为什么题库会这样选

题库记录的正确选项定位为：AWS WAF：Web 应用防火墙，过滤 HTTP(S) Web 请求。

它与题干要求的对象/约束直接对应。

其余选项虽然可能也属于同一大类，但主要解决不同问题。

---

---

## Q309-WAF-Shield与网络安全题

**题目：** Which AWS service could an administrator use to provide desktop environments for several employees?。

**选项：**

- A. AWS Organizations
- B. AWS Fargate
- C. AWS WAF
- D. AWS WorkSpaces

**主分类：** C4-18 WAF-Shield与网络安全题。

**题库记录答案：** `D`。

**社区投票：** D 100%

### Q309.1-题干怎么拆

现有题库没有提供独立 explanation。

这里按题干中的动作、对象和所有选项的服务定位进行比较。

### Q309.2-每个选项的定位

| 选项 | 题库内容 | 服务/概念定位 | 题库答案关系 |
|---|---|---|---|
| A | AWS Organizations | AWS Organizations：集中组织和治理多个 AWS Account，并支持 Consolidated Billing、SCP 等。 | 题库记录为非正确选项 |
| B | AWS Fargate | AWS Fargate：为 ECS/EKS 提供不需要管理底层服务器的容器计算能力。 | 题库记录为非正确选项 |
| C | AWS WAF | AWS WAF：Web 应用防火墙，过滤 HTTP(S) Web 请求。 | 题库记录为非正确选项 |
| D | AWS WorkSpaces | 该选项是题库中的概念/服务描述。现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为正确选项 |

### Q309.3-为什么题库会这样选

题库记录的正确选项定位为：该选项是题库中的概念/服务描述。

现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。

它与题干要求的对象/约束直接对应。

其余选项虽然可能也属于同一大类，但主要解决不同问题。

---

---

## Q468-WAF-Shield与网络安全题

**题目：** A company wants to monitor and block malicious HTTP and HTTPS requests that its Amazon CloudFront distributions receive. Which AWS service should the company use to meet these requirements?。

**选项：**

- A. Amazon GuardDuty
- B. Amazon Inspector
- C. AWS WAF
- D. Amazon Detective

**主分类：** C4-18 WAF-Shield与网络安全题。

**题库记录答案：** `C`。

**需求/考点标签：** 全球静态内容加速 / 威胁检测。

**社区投票：** C 100%

### Q468.1-题干怎么拆

这道题先识别的不是某个服务名，而是这些约束：**全球静态内容加速、威胁检测**。

判断时应该先找到与这些约束同层、同数据模型或同运维目标的服务，再排除“看起来也属于 AWS，但解决的是另一个层面问题”的选项。

### Q468.2-每个选项的定位

| 选项 | 题库内容 | 服务/概念定位 | 题库答案关系 |
|---|---|---|---|
| A | Amazon GuardDuty | Amazon GuardDuty：基于多种日志与威胁情报进行持续威胁检测。 | 题库记录为非正确选项 |
| B | Amazon Inspector | Amazon Inspector：持续漏洞管理与工作负载漏洞扫描。 | 题库记录为非正确选项 |
| C | AWS WAF | AWS WAF：Web 应用防火墙，过滤 HTTP(S) Web 请求。 | 题库记录为正确选项 |
| D | Amazon Detective | Amazon Detective：基于安全数据帮助调查潜在安全事件和根因。 | 题库记录为非正确选项 |

### Q468.3-为什么题库会这样选

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
- 本篇梳理了WAF-Shield与网络安全题相关的核心知识、适用场景与判断要点。
- 本篇梳理了WAF-Shield与网络安全题相关的核心知识、适用场景与判断要点。
- 本篇梳理了WAF-Shield与网络安全题相关的核心知识、适用场景与判断要点。

[返回本章总述](./C4-18-00-章节总述.md)｜[查看本章概述](./C4-18-99-章节概述.md)

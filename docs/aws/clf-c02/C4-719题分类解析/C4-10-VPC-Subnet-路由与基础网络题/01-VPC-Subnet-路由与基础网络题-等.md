---
id: 01-VPC-Subnet-路由与基础网络题-等
sidebar_position: 1
---

# C4-10-VPC-Subnet-路由与基础网络题-VPC-Subnet-路由与基础网络题与VPC-Subnet-路由与基础网络题与VPC-Subnet-路由与基础网络题与VPC-Subnet-路由与基础网络题与VPC-Subnet-路由与基础网络题与VPC-Subnet-路由与基础网络题与VPC-Subnet-路由与基础网络题

> 本篇是《C4-10-VPC-Subnet-路由与基础网络题》的第1个分篇，主要包含：VPC-Subnet-路由与基础网络题、VPC-Subnet-路由与基础网络题、VPC-Subnet-路由与基础网络题、VPC-Subnet-路由与基础网络题、VPC-Subnet-路由与基础网络题、VPC-Subnet-路由与基础网络题、VPC-Subnet-路由与基础网络题。

## Q24-VPC-Subnet-路由与基础网络题

**题目：** What is the purpose of having an internet gateway within a VPC?。

**选项：**

- A. To create a VPN connection to the VPC
- B. To allow communication between the VPC and the internet
- C. To impose bandwidth constraints on internet traffic
- D. To load balance traffic from the internet across Amazon EC2 instances

**主分类：** C4-10 VPC-Subnet-路由与基础网络题。

**题库记录答案：** `B`。

**需求/考点标签：** Disaster Recovery。

**社区投票：** B 100%

### Q24.1-题干怎么拆

这道题先识别的不是某个服务名，而是这些约束：**Disaster Recovery**。

判断时应该先找到与这些约束同层、同数据模型或同运维目标的服务，再排除“看起来也属于 AWS，但解决的是另一个层面问题”的选项。

### Q24.2-每个选项的定位

| 选项 | 题库内容 | 服务/概念定位 | 题库答案关系 |
|---|---|---|---|
| A | To create a VPN connection to the VPC | AWS Site-to-Site VPN：通过 Internet 建立加密隧道连接本地网络与 AWS。Amazon VPC：AWS 中用户定义的逻辑隔离虚拟网络。 | 题库记录为非正确选项 |
| B | To allow communication between the VPC and the internet | Amazon VPC：AWS 中用户定义的逻辑隔离虚拟网络。 | 题库记录为正确选项 |
| C | To impose bandwidth constraints on internet traffic | 该选项是题库中的概念/服务描述。现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为非正确选项 |
| D | To load balance traffic from the internet across Amazon EC2 instances | Amazon EC2：可配置虚拟服务器，适合需要 OS/实例级控制的计算工作负载。 | 题库记录为非正确选项 |

### Q24.3-为什么题库会这样选

题库记录的正确选项定位为：Amazon VPC：AWS 中用户定义的逻辑隔离虚拟网络。

它与题干要求的对象/约束直接对应。

其余选项虽然可能也属于同一大类，但主要解决不同问题。

---

---

## Q59-VPC-Subnet-路由与基础网络题

**题目：** Which of the following services can be used to block network traffic to an instance? (Choose two.)。

**选项：**

- A. Security groups
- B. Amazon Virtual Private Cloud (Amazon VPC) flow logs
- C. Network ACLs
- D. Amazon CloudWatch
- E. AWS CloudTrail

**主分类：** C4-10 VPC-Subnet-路由与基础网络题。

**题库记录答案：** `AC`。

**社区投票：** AC 100%

### Q59.1-题干怎么拆

现有题库没有提供独立 explanation。

这里按题干中的动作、对象和所有选项的服务定位进行比较。

### Q59.2-每个选项的定位

| 选项 | 题库内容 | 服务/概念定位 | 题库答案关系 |
|---|---|---|---|
| A | Security groups | Security Group：资源/ENI 级有状态虚拟防火墙。 | 题库记录为正确选项 |
| B | Amazon Virtual Private Cloud (Amazon VPC) flow logs | Amazon VPC：AWS 中用户定义的逻辑隔离虚拟网络。 | 题库记录为非正确选项 |
| C | Network ACLs | Network ACL：Subnet 级无状态网络访问控制列表。 | 题库记录为正确选项 |
| D | Amazon CloudWatch | Amazon CloudWatch：Metrics/Logs/Alarms 等运行时监控与可观测性服务。 | 题库记录为非正确选项 |
| E | AWS CloudTrail | AWS CloudTrail：记录 AWS API/账号活动，回答谁在什么时候做了什么操作。 | 题库记录为非正确选项 |

### Q59.3-为什么题库会这样选

题库记录的正确选项定位为：Security Group：资源/ENI 级有状态虚拟防火墙。

Network ACL：Subnet 级无状态网络访问控制列表。

它与题干要求的对象/约束直接对应。

其余选项虽然可能也属于同一大类，但主要解决不同问题。

---

---

## Q95-VPC-Subnet-路由与基础网络题

**题目：** Which AWS service or tool can be used to set up a firewall to control traffic going into and coming out of an Amazon VPC subnet?。

**选项：**

- A. Security group
- B. AWS WAF
- C. AWS Firewall Manager
- D. Network ACL

**主分类：** C4-10 VPC-Subnet-路由与基础网络题。

**题库记录答案：** `D`。

**社区投票：** D 77%, C 15%, A 8%。

### Q95.1-题干怎么拆

现有题库没有提供独立 explanation。

这里按题干中的动作、对象和所有选项的服务定位进行比较。

### Q95.2-每个选项的定位

| 选项 | 题库内容 | 服务/概念定位 | 题库答案关系 |
|---|---|---|---|
| A | Security group | Security Group：资源/ENI 级有状态虚拟防火墙。 | 题库记录为非正确选项 |
| B | AWS WAF | AWS WAF：Web 应用防火墙，过滤 HTTP(S) Web 请求。 | 题库记录为非正确选项 |
| C | AWS Firewall Manager | 该选项描述 Shared Responsibility 中 AWS 侧的基础设施责任。 | 题库记录为非正确选项 |
| D | Network ACL | Network ACL：Subnet 级无状态网络访问控制列表。 | 题库记录为正确选项 |

### Q95.3-为什么题库会这样选

题库记录的正确选项定位为：Network ACL：Subnet 级无状态网络访问控制列表。

它与题干要求的对象/约束直接对应。

其余选项虽然可能也属于同一大类，但主要解决不同问题。

---

---

## Q119-VPC-Subnet-路由与基础网络题

**题目：** Which AWS service or feature provides log information of the inbound and outbound traffic on network interfaces in a VPC?。

**选项：**

- A. Amazon CloudWatch Logs
- B. AWS CloudTrail
- C. VPC Flow Logs
- D. AWS Identity and Access Management (IAM)

**主分类：** C4-10 VPC-Subnet-路由与基础网络题。

**题库记录答案：** `C`。

**社区投票：** C 100%

### Q119.1-题干怎么拆

现有题库没有提供独立 explanation。

这里按题干中的动作、对象和所有选项的服务定位进行比较。

### Q119.2-每个选项的定位

| 选项 | 题库内容 | 服务/概念定位 | 题库答案关系 |
|---|---|---|---|
| A | Amazon CloudWatch Logs | Amazon CloudWatch：Metrics/Logs/Alarms 等运行时监控与可观测性服务。 | 题库记录为非正确选项 |
| B | AWS CloudTrail | AWS CloudTrail：记录 AWS API/账号活动，回答谁在什么时候做了什么操作。 | 题库记录为非正确选项 |
| C | VPC Flow Logs | Amazon VPC：AWS 中用户定义的逻辑隔离虚拟网络。 | 题库记录为正确选项 |
| D | AWS Identity and Access Management (IAM) | AWS IAM：AWS 身份、认证授权与权限策略核心服务。 | 题库记录为非正确选项 |

### Q119.3-为什么题库会这样选

题库记录的正确选项定位为：Amazon VPC：AWS 中用户定义的逻辑隔离虚拟网络。

它与题干要求的对象/约束直接对应。

其余选项虽然可能也属于同一大类，但主要解决不同问题。

---

---

## Q150-VPC-Subnet-路由与基础网络题

**题目：** Which option is an environment that consists of one or more data centers?。

**选项：**

- A. Amazon CloudFront
- B. Availability Zone
- C. VPC
- D. AWS Outposts

**主分类：** C4-10 VPC-Subnet-路由与基础网络题。

**题库记录答案：** `B`。

**社区投票：** B 93%, C 7%。

### Q150.1-题干怎么拆

现有题库没有提供独立 explanation。

这里按题干中的动作、对象和所有选项的服务定位进行比较。

### Q150.2-每个选项的定位

| 选项 | 题库内容 | 服务/概念定位 | 题库答案关系 |
|---|---|---|---|
| A | Amazon CloudFront | Amazon CloudFront：AWS CDN，利用 Edge Location 缓存和分发内容。 | 题库记录为非正确选项 |
| B | Availability Zone | Availability Zone 是 Region 内相互隔离的故障域/部署位置。 | 题库记录为正确选项 |
| C | VPC | Amazon VPC：AWS 中用户定义的逻辑隔离虚拟网络。 | 题库记录为非正确选项 |
| D | AWS Outposts | AWS Outposts：把 AWS 基础设施和服务运行到客户本地场所。 | 题库记录为非正确选项 |

### Q150.3-为什么题库会这样选

题库记录的正确选项定位为：Availability Zone 是 Region 内相互隔离的故障域/部署位置。

它与题干要求的对象/约束直接对应。

其余选项虽然可能也属于同一大类，但主要解决不同问题。

---

---

## Q172-VPC-Subnet-路由与基础网络题

**题目：** Which AWS service or tool can be used to capture information about inbound and outbound traffic in an Amazon VPC?。

**选项：**

- A. VPC Flow Logs
- B. Amazon Inspector
- C. VPC endpoint services
- D. NAT gateway

**主分类：** C4-10 VPC-Subnet-路由与基础网络题。

**题库记录答案：** `A`。

**社区投票：** A 100%

### Q172.1-题干怎么拆

现有题库没有提供独立 explanation。

这里按题干中的动作、对象和所有选项的服务定位进行比较。

### Q172.2-每个选项的定位

| 选项 | 题库内容 | 服务/概念定位 | 题库答案关系 |
|---|---|---|---|
| A | VPC Flow Logs | Amazon VPC：AWS 中用户定义的逻辑隔离虚拟网络。 | 题库记录为正确选项 |
| B | Amazon Inspector | Amazon Inspector：持续漏洞管理与工作负载漏洞扫描。 | 题库记录为非正确选项 |
| C | VPC endpoint services | VPC Endpoint：让 VPC 私网访问支持的 AWS 服务，而无需经过公共 Internet。Amazon VPC：AWS 中用户定义的逻辑隔离虚拟网络。 | 题库记录为非正确选项 |
| D | NAT gateway | NAT Gateway：常用于 Private Subnet 资源主动访问外部 IPv4 网络。 | 题库记录为非正确选项 |

### Q172.3-为什么题库会这样选

题库记录的正确选项定位为：Amazon VPC：AWS 中用户定义的逻辑隔离虚拟网络。

它与题干要求的对象/约束直接对应。

其余选项虽然可能也属于同一大类，但主要解决不同问题。

---

---

## Q184-VPC-Subnet-路由与基础网络题

**题目：** Which AWS service or feature can a company use to apply security rules to specific Amazon EC2 instances?。

**选项：**

- A. Network ACLs
- B. Security groups
- C. AWS Trusted Advisor
- D. AWS WAF

**主分类：** C4-10 VPC-Subnet-路由与基础网络题。

**题库记录答案：** `B`。

**社区投票：** B 100%

### Q184.1-题干怎么拆

现有题库没有提供独立 explanation。

这里按题干中的动作、对象和所有选项的服务定位进行比较。

### Q184.2-每个选项的定位

| 选项 | 题库内容 | 服务/概念定位 | 题库答案关系 |
|---|---|---|---|
| A | Network ACLs | Network ACL：Subnet 级无状态网络访问控制列表。 | 题库记录为非正确选项 |
| B | Security groups | Security Group：资源/ENI 级有状态虚拟防火墙。 | 题库记录为正确选项 |
| C | AWS Trusted Advisor | AWS Trusted Advisor：根据 AWS 最佳实践提供成本、安全、性能、可靠性等检查建议。 | 题库记录为非正确选项 |
| D | AWS WAF | AWS WAF：Web 应用防火墙，过滤 HTTP(S) Web 请求。 | 题库记录为非正确选项 |

### Q184.3-为什么题库会这样选

题库记录的正确选项定位为：Security Group：资源/ENI 级有状态虚拟防火墙。

它与题干要求的对象/约束直接对应。

其余选项虽然可能也属于同一大类，但主要解决不同问题。

---

## 本篇概述

- 本篇梳理了VPC-Subnet-路由与基础网络题相关的核心知识、适用场景与判断要点。
- 本篇梳理了VPC-Subnet-路由与基础网络题相关的核心知识、适用场景与判断要点。
- 本篇梳理了VPC-Subnet-路由与基础网络题相关的核心知识、适用场景与判断要点。
- 本篇梳理了VPC-Subnet-路由与基础网络题相关的核心知识、适用场景与判断要点。
- 本篇梳理了VPC-Subnet-路由与基础网络题相关的核心知识、适用场景与判断要点。
- 本篇梳理了VPC-Subnet-路由与基础网络题相关的核心知识、适用场景与判断要点。
- 本篇梳理了VPC-Subnet-路由与基础网络题相关的核心知识、适用场景与判断要点。

[返回本章总述](./00-总述.md)｜[查看本章概述](./99-概述.md)

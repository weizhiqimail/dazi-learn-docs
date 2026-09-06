---
id: 02-VPC-Subnet-路由与基础网络题-等
sidebar_position: 2
---

# C4-10-VPC-Subnet-路由与基础网络题-VPC-Subnet-路由与基础网络题与VPC-Subnet-路由与基础网络题与VPC-Subnet-路由与基础网络题与VPC-Subnet-路由与基础网络题与VPC-Subnet-路由与基础网络题与VPC-Subnet-路由与基础网络题与VPC-Subnet-路由与基础网络题

> 本篇是《C4-10-VPC-Subnet-路由与基础网络题》的第2个分篇，主要包含：VPC-Subnet-路由与基础网络题、VPC-Subnet-路由与基础网络题、VPC-Subnet-路由与基础网络题、VPC-Subnet-路由与基础网络题、VPC-Subnet-路由与基础网络题、VPC-Subnet-路由与基础网络题、VPC-Subnet-路由与基础网络题。

## Q199-VPC-Subnet-路由与基础网络题

**题目：** A company has an Amazon EC2 instance in a private subnet. The company wants to initiate a connection to the internet to pull operating system updates while preventing traffic from the internet from accessing the EC2 instance. Which AWS managed service allows this?

**选项：**

- A. VPC endpoint
- B. NAT gateway
- C. Amazon PrivateLink
- D. VPC peering

**主分类：** C4-10 VPC-Subnet-路由与基础网络题。

**题库记录答案：** `B`。

**需求/考点标签：** 私网实例访问互联网。

**社区投票：** B 100%

### Q199.1-题干怎么拆

这道题先识别的不是某个服务名，而是这些约束：**私网实例访问互联网**。

判断时应该先找到与这些约束同层、同数据模型或同运维目标的服务，再排除“看起来也属于 AWS，但解决的是另一个层面问题”的选项。

### Q199.2-每个选项的定位

| 选项 | 题库内容 | 服务/概念定位 | 题库答案关系 |
|---|---|---|---|
| A | VPC endpoint | VPC Endpoint：让 VPC 私网访问支持的 AWS 服务，而无需经过公共 Internet。Amazon VPC：AWS 中用户定义的逻辑隔离虚拟网络。 | 题库记录为非正确选项 |
| B | NAT gateway | NAT Gateway：常用于 Private Subnet 资源主动访问外部 IPv4 网络。 | 题库记录为正确选项 |
| C | Amazon PrivateLink | AWS PrivateLink：通过私有 IP/接口 Endpoint 私下发布和访问服务。 | 题库记录为非正确选项 |
| D | VPC peering | VPC Peering：两个 VPC 之间的点到点私网连接。Amazon VPC：AWS 中用户定义的逻辑隔离虚拟网络。 | 题库记录为非正确选项 |

### Q199.3-为什么题库会这样选

题库记录的正确选项定位为：NAT Gateway：常用于 Private Subnet 资源主动访问外部 IPv4 网络。

它与题干要求的对象/约束直接对应。

其余选项虽然可能也属于同一大类，但主要解决不同问题。

---

---

## Q214-VPC-Subnet-路由与基础网络题

**题目：** Which of the following acts as an instance-level firewall to control inbound and outbound access?。

**选项：**

- A. Network access control list
- B. Security groups
- C. AWS Trusted Advisor
- D. Virtual private gateways

**主分类：** C4-10 VPC-Subnet-路由与基础网络题。

**题库记录答案：** `B`。

**社区投票：** B 100%

### Q214.1-题干怎么拆

现有题库没有提供独立 explanation。

这里按题干中的动作、对象和所有选项的服务定位进行比较。

### Q214.2-每个选项的定位

| 选项 | 题库内容 | 服务/概念定位 | 题库答案关系 |
|---|---|---|---|
| A | Network access control list | 该选项是题库中的概念/服务描述。现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为非正确选项 |
| B | Security groups | Security Group：资源/ENI 级有状态虚拟防火墙。 | 题库记录为正确选项 |
| C | AWS Trusted Advisor | AWS Trusted Advisor：根据 AWS 最佳实践提供成本、安全、性能、可靠性等检查建议。 | 题库记录为非正确选项 |
| D | Virtual private gateways | 该选项是题库中的概念/服务描述。现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为非正确选项 |

### Q214.3-为什么题库会这样选

题库记录的正确选项定位为：Security Group：资源/ENI 级有状态虚拟防火墙。

它与题干要求的对象/约束直接对应。

其余选项虽然可能也属于同一大类，但主要解决不同问题。

---

---

## Q291-VPC-Subnet-路由与基础网络题

**题目：** Which of the following are features of network ACLs as they are used in the AWS Cloud? (Choose two.)。

**选项：**

- A. They are stateless.
- B. They are stateful.
- C. They evaluate all rules before allowing traffic.
- D. They process rules in order, starting with the lowest numbered rule, when deciding whether to allow traffic.
- E. They operate at the instance level.

**主分类：** C4-10 VPC-Subnet-路由与基础网络题。

**题库记录答案：** `AD`。

**社区投票：** AD 90%, CD 10%。

### Q291.1-题干怎么拆

现有题库没有提供独立 explanation。

这里按题干中的动作、对象和所有选项的服务定位进行比较。

### Q291.2-每个选项的定位

| 选项 | 题库内容 | 服务/概念定位 | 题库答案关系 |
|---|---|---|---|
| A | They are stateless. | 该选项是题库中的概念/服务描述。现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为正确选项 |
| B | They are stateful. | 该选项是题库中的概念/服务描述。现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为非正确选项 |
| C | They evaluate all rules before allowing traffic. | 该选项是题库中的概念/服务描述。现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为非正确选项 |
| D | They process rules in order, starting with the lowest numbered rule, when deciding whether to allow traffic. | 该选项是题库中的概念/服务描述。现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为正确选项 |
| E | They operate at the instance level. | 该选项是题库中的概念/服务描述。现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为非正确选项 |

### Q291.3-为什么题库会这样选

题库记录的正确选项定位为：该选项是题库中的概念/服务描述。

现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。

该选项是题库中的概念/服务描述。

现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。

它与题干要求的对象/约束直接对应。

其余选项虽然可能也属于同一大类，但主要解决不同问题。

### Q291.4-⚠-争议/版本提示

- 社区评论存在明显质疑/版本差异信号
- 本题同时收录到 `C4-27-旧题争议题与当前AWS差异.md`，不在这里强行替题库修正答案。

---

---

## Q310-VPC-Subnet-路由与基础网络题

**题目：** Which AWS service or feature gives users the ability to capture information about network traffic in a VPC?。

**选项：**

- A. VPC Flow Logs
- B. Amazon Inspector
- C. VPC route tables
- D. AWS CloudTrail

**主分类：** C4-10 VPC-Subnet-路由与基础网络题。

**题库记录答案：** `A`。

**社区投票：** A 100%

### Q310.1-题干怎么拆

现有题库没有提供独立 explanation。

这里按题干中的动作、对象和所有选项的服务定位进行比较。

### Q310.2-每个选项的定位

| 选项 | 题库内容 | 服务/概念定位 | 题库答案关系 |
|---|---|---|---|
| A | VPC Flow Logs | Amazon VPC：AWS 中用户定义的逻辑隔离虚拟网络。 | 题库记录为正确选项 |
| B | Amazon Inspector | Amazon Inspector：持续漏洞管理与工作负载漏洞扫描。 | 题库记录为非正确选项 |
| C | VPC route tables | Amazon VPC：AWS 中用户定义的逻辑隔离虚拟网络。 | 题库记录为非正确选项 |
| D | AWS CloudTrail | AWS CloudTrail：记录 AWS API/账号活动，回答谁在什么时候做了什么操作。 | 题库记录为非正确选项 |

### Q310.3-为什么题库会这样选

题库记录的正确选项定位为：Amazon VPC：AWS 中用户定义的逻辑隔离虚拟网络。

它与题干要求的对象/约束直接对应。

其余选项虽然可能也属于同一大类，但主要解决不同问题。

---

---

## Q340-VPC-Subnet-路由与基础网络题

**题目：** A company created an Amazon EC2 instance. The company wants to control the incoming and outgoing network traffic at the instance level. Which AWS resource or service will meet this requirement?。

**选项：**

- A. AWS Shield
- B. Security groups
- C. Network Access Analyzer
- D. VPC endpoints

**主分类：** C4-10 VPC-Subnet-路由与基础网络题。

**题库记录答案：** `B`。

**社区投票：** B 100%

### Q340.1-题干怎么拆

现有题库没有提供独立 explanation。

这里按题干中的动作、对象和所有选项的服务定位进行比较。

### Q340.2-每个选项的定位

| 选项 | 题库内容 | 服务/概念定位 | 题库答案关系 |
|---|---|---|---|
| A | AWS Shield | AWS Shield：AWS DDoS 防护服务。 | 题库记录为非正确选项 |
| B | Security groups | Security Group：资源/ENI 级有状态虚拟防火墙。 | 题库记录为正确选项 |
| C | Network Access Analyzer | 该选项是题库中的概念/服务描述。现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为非正确选项 |
| D | VPC endpoints | VPC Endpoint：让 VPC 私网访问支持的 AWS 服务，而无需经过公共 Internet。Amazon VPC：AWS 中用户定义的逻辑隔离虚拟网络。 | 题库记录为非正确选项 |

### Q340.3-为什么题库会这样选

题库记录的正确选项定位为：Security Group：资源/ENI 级有状态虚拟防火墙。

它与题干要求的对象/约束直接对应。

其余选项虽然可能也属于同一大类，但主要解决不同问题。

---

---

## Q352-VPC-Subnet-路由与基础网络题

**题目：** Which AWS service or component allows inbound traffic from the internet to access a VPC?。

**选项：**

- A. Internet gateway
- B. NAT gateway
- C. AWS WAF
- D. VPC peering

**主分类：** C4-10 VPC-Subnet-路由与基础网络题。

**题库记录答案：** `A`。

**社区投票：** A 94%, B 6%。

### Q352.1-题干怎么拆

现有题库没有提供独立 explanation。

这里按题干中的动作、对象和所有选项的服务定位进行比较。

### Q352.2-每个选项的定位

| 选项 | 题库内容 | 服务/概念定位 | 题库答案关系 |
|---|---|---|---|
| A | Internet gateway | Internet Gateway：VPC 与公网 Internet 之间的网关组件。 | 题库记录为正确选项 |
| B | NAT gateway | NAT Gateway：常用于 Private Subnet 资源主动访问外部 IPv4 网络。 | 题库记录为非正确选项 |
| C | AWS WAF | AWS WAF：Web 应用防火墙，过滤 HTTP(S) Web 请求。 | 题库记录为非正确选项 |
| D | VPC peering | VPC Peering：两个 VPC 之间的点到点私网连接。Amazon VPC：AWS 中用户定义的逻辑隔离虚拟网络。 | 题库记录为非正确选项 |

### Q352.3-为什么题库会这样选

题库记录的正确选项定位为：Internet Gateway：VPC 与公网 Internet 之间的网关组件。

它与题干要求的对象/约束直接对应。

其余选项虽然可能也属于同一大类，但主要解决不同问题。

---

---

## Q413-VPC-Subnet-路由与基础网络题

**题目：** A company runs many Amazon EC2 instances in its VPC. The company wants to use a native AWS security resource to control network traffic between certain EC2 instances. Which AWS service or feature will meet this requirement?。

**选项：**

- A. Network ACLs
- B. AWS WAF
- C. Amazon GuardDuty
- D. Security groups

**主分类：** C4-10 VPC-Subnet-路由与基础网络题。

**题库记录答案：** `D`。

**社区投票：** D 100%

### Q413.1-题干怎么拆

现有题库没有提供独立 explanation。

这里按题干中的动作、对象和所有选项的服务定位进行比较。

### Q413.2-每个选项的定位

| 选项 | 题库内容 | 服务/概念定位 | 题库答案关系 |
|---|---|---|---|
| A | Network ACLs | Network ACL：Subnet 级无状态网络访问控制列表。 | 题库记录为非正确选项 |
| B | AWS WAF | AWS WAF：Web 应用防火墙，过滤 HTTP(S) Web 请求。 | 题库记录为非正确选项 |
| C | Amazon GuardDuty | Amazon GuardDuty：基于多种日志与威胁情报进行持续威胁检测。 | 题库记录为非正确选项 |
| D | Security groups | Security Group：资源/ENI 级有状态虚拟防火墙。 | 题库记录为正确选项 |

### Q413.3-为什么题库会这样选

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

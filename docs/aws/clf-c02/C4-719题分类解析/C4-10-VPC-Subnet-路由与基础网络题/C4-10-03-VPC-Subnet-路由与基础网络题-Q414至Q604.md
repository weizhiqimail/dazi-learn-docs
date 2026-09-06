---
id: C4-10-03-VPC-Subnet-路由与基础网络题-Q414至Q604
sidebar_position: 3
---

# C4-10-03-VPC-Subnet-路由与基础网络题-Q414至Q604

> 本篇是《C4-10-VPC-Subnet-路由与基础网络题》的第3个分篇，主要包含：VPC-Subnet-路由与基础网络题、VPC-Subnet-路由与基础网络题、VPC-Subnet-路由与基础网络题、VPC-Subnet-路由与基础网络题、VPC-Subnet-路由与基础网络题、VPC-Subnet-路由与基础网络题、VPC-Subnet-路由与基础网络题、VPC-Subnet-路由与基础网络题。

## Q414-VPC-Subnet-路由与基础网络题

**题目：** Which of the following can be components of a VPC in the AWS Cloud? (Choose two.)。

**选项：**

- A. Amazon API Gateway
- B. Amazon S3 buckets and objects
- C. AWS Storage Gateway
- D. Internet gateway
- E. Subnet

**主分类：** C4-10 VPC-Subnet-路由与基础网络题。

**题库记录答案：** `DE`。

**社区投票：** DE 100%

### Q414.1-题干怎么拆

现有题库没有提供独立 explanation。

这里按题干中的动作、对象和所有选项的服务定位进行比较。

### Q414.2-每个选项的定位

| 选项 | 题库内容 | 服务/概念定位 | 题库答案关系 |
|---|---|---|---|
| A | Amazon API Gateway | Amazon API Gateway：托管 API 前门，用于发布、保护和管理 API。 | 题库记录为非正确选项 |
| B | Amazon S3 buckets and objects | Amazon S3：高耐久、可扩展的对象存储，以 Bucket/Object 组织数据。 | 题库记录为非正确选项 |
| C | AWS Storage Gateway | AWS Storage Gateway：把本地环境通过文件/卷/虚拟磁带等接口连接 AWS 存储的混合存储服务。 | 题库记录为非正确选项 |
| D | Internet gateway | Internet Gateway：VPC 与公网 Internet 之间的网关组件。 | 题库记录为正确选项 |
| E | Subnet | 该选项是题库中的概念/服务描述。现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为正确选项 |

### Q414.3-为什么题库会这样选

题库记录的正确选项定位为：Internet Gateway：VPC 与公网 Internet 之间的网关组件。

该选项是题库中的概念/服务描述。

现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。

它与题干要求的对象/约束直接对应。

其余选项虽然可能也属于同一大类，但主要解决不同问题。

---

---

## Q417-VPC-Subnet-路由与基础网络题

**题目：** Which AWS service or feature can a user configure to limit network access at the subnet level?。

**选项：**

- A. AWS Shield
- B. AWS WAF
- C. Network ACL
- D. Security group

**主分类：** C4-10 VPC-Subnet-路由与基础网络题。

**题库记录答案：** `C`。

**需求/考点标签：** Configuration Compliance。

**社区投票：** C 100%

### Q417.1-题干怎么拆

这道题先识别的不是某个服务名，而是这些约束：**Configuration Compliance**。

判断时应该先找到与这些约束同层、同数据模型或同运维目标的服务，再排除“看起来也属于 AWS，但解决的是另一个层面问题”的选项。

### Q417.2-每个选项的定位

| 选项 | 题库内容 | 服务/概念定位 | 题库答案关系 |
|---|---|---|---|
| A | AWS Shield | AWS Shield：AWS DDoS 防护服务。 | 题库记录为非正确选项 |
| B | AWS WAF | AWS WAF：Web 应用防火墙，过滤 HTTP(S) Web 请求。 | 题库记录为非正确选项 |
| C | Network ACL | Network ACL：Subnet 级无状态网络访问控制列表。 | 题库记录为正确选项 |
| D | Security group | Security Group：资源/ENI 级有状态虚拟防火墙。 | 题库记录为非正确选项 |

### Q417.3-为什么题库会这样选

题库记录的正确选项定位为：Network ACL：Subnet 级无状态网络访问控制列表。

它与题干要求的对象/约束直接对应。

其余选项虽然可能也属于同一大类，但主要解决不同问题。

---

---

## Q493-VPC-Subnet-路由与基础网络题

**题目：** Which AWS tool or feature acts as a VPC firewall at the subnet level?。

**选项：**

- A. Security group
- B. Network ACL
- C. Traffic Mirroring
- D. Internet gateway

**主分类：** C4-10 VPC-Subnet-路由与基础网络题。

**题库记录答案：** `B`。

**社区投票：** B 100%

### Q493.1-题干怎么拆

现有题库没有提供独立 explanation。

这里按题干中的动作、对象和所有选项的服务定位进行比较。

### Q493.2-每个选项的定位

| 选项 | 题库内容 | 服务/概念定位 | 题库答案关系 |
|---|---|---|---|
| A | Security group | Security Group：资源/ENI 级有状态虚拟防火墙。 | 题库记录为非正确选项 |
| B | Network ACL | Network ACL：Subnet 级无状态网络访问控制列表。 | 题库记录为正确选项 |
| C | Traffic Mirroring | 该选项是题库中的概念/服务描述。现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为非正确选项 |
| D | Internet gateway | Internet Gateway：VPC 与公网 Internet 之间的网关组件。 | 题库记录为非正确选项 |

### Q493.3-为什么题库会这样选

题库记录的正确选项定位为：Network ACL：Subnet 级无状态网络访问控制列表。

它与题干要求的对象/约束直接对应。

其余选项虽然可能也属于同一大类，但主要解决不同问题。

---

---

## Q516-VPC-Subnet-路由与基础网络题

**题目：** Which component must be attached to a VPC to enable inbound internet access?。

**选项：**

- A. NAT gateway
- B. VPC endpoint
- C. VPN connection
- D. Internet gateway

**主分类：** C4-10 VPC-Subnet-路由与基础网络题。

**题库记录答案：** `D`。

**社区投票：** D 100%

### Q516.1-题干怎么拆

现有题库没有提供独立 explanation。

这里按题干中的动作、对象和所有选项的服务定位进行比较。

### Q516.2-每个选项的定位

| 选项 | 题库内容 | 服务/概念定位 | 题库答案关系 |
|---|---|---|---|
| A | NAT gateway | NAT Gateway：常用于 Private Subnet 资源主动访问外部 IPv4 网络。 | 题库记录为非正确选项 |
| B | VPC endpoint | VPC Endpoint：让 VPC 私网访问支持的 AWS 服务，而无需经过公共 Internet。Amazon VPC：AWS 中用户定义的逻辑隔离虚拟网络。 | 题库记录为非正确选项 |
| C | VPN connection | AWS Site-to-Site VPN：通过 Internet 建立加密隧道连接本地网络与 AWS。 | 题库记录为非正确选项 |
| D | Internet gateway | Internet Gateway：VPC 与公网 Internet 之间的网关组件。 | 题库记录为正确选项 |

### Q516.3-为什么题库会这样选

题库记录的正确选项定位为：Internet Gateway：VPC 与公网 Internet 之间的网关组件。

它与题干要求的对象/约束直接对应。

其余选项虽然可能也属于同一大类，但主要解决不同问题。

---

---

## Q536-VPC-Subnet-路由与基础网络题

**题目：** Which AWS service or feature provides a firewall at the subnet level within a VPC?。

**选项：**

- A. Security group
- B. Network ACL
- C. Elastic network interface
- D. AWS WAF

**主分类：** C4-10 VPC-Subnet-路由与基础网络题。

**题库记录答案：** `B`。

**社区投票：** B 100%

### Q536.1-题干怎么拆

现有题库没有提供独立 explanation。

这里按题干中的动作、对象和所有选项的服务定位进行比较。

### Q536.2-每个选项的定位

| 选项 | 题库内容 | 服务/概念定位 | 题库答案关系 |
|---|---|---|---|
| A | Security group | Security Group：资源/ENI 级有状态虚拟防火墙。 | 题库记录为非正确选项 |
| B | Network ACL | Network ACL：Subnet 级无状态网络访问控制列表。 | 题库记录为正确选项 |
| C | Elastic network interface | 弹性是资源随当前负载自动扩大或缩小。 | 题库记录为非正确选项 |
| D | AWS WAF | AWS WAF：Web 应用防火墙，过滤 HTTP(S) Web 请求。 | 题库记录为非正确选项 |

### Q536.3-为什么题库会这样选

题库记录的正确选项定位为：Network ACL：Subnet 级无状态网络访问控制列表。

它与题干要求的对象/约束直接对应。

其余选项虽然可能也属于同一大类，但主要解决不同问题。

---

---

## Q554-VPC-Subnet-路由与基础网络题

**题目：** A company needs a firewall that will control network connections to and from a single Amazon EC2 instance. This firewall will not control network connections to and from other instances that are in the same subnet. Which AWS service or feature can the company use to meet these requirements?

**选项：**

- A. Network ACL
- B. AWS WAF
- C. Route table
- D. Security group

**主分类：** C4-10 VPC-Subnet-路由与基础网络题。

**题库记录答案：** `D`。

**社区投票：** D 100%

### Q554.1-题干怎么拆

现有题库没有提供独立 explanation。

这里按题干中的动作、对象和所有选项的服务定位进行比较。

### Q554.2-每个选项的定位

| 选项 | 题库内容 | 服务/概念定位 | 题库答案关系 |
|---|---|---|---|
| A | Network ACL | Network ACL：Subnet 级无状态网络访问控制列表。 | 题库记录为非正确选项 |
| B | AWS WAF | AWS WAF：Web 应用防火墙，过滤 HTTP(S) Web 请求。 | 题库记录为非正确选项 |
| C | Route table | 该选项是题库中的概念/服务描述。现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为非正确选项 |
| D | Security group | Security Group：资源/ENI 级有状态虚拟防火墙。 | 题库记录为正确选项 |

### Q554.3-为什么题库会这样选

题库记录的正确选项定位为：Security Group：资源/ENI 级有状态虚拟防火墙。

它与题干要求的对象/约束直接对应。

其余选项虽然可能也属于同一大类，但主要解决不同问题。

---

---

## Q581-VPC-Subnet-路由与基础网络题

**题目：** Which AWS service or feature allows a company to have its own logically isolated section of the AWS Cloud?。

**选项：**

- A. AWS VPN
- B. Availability Zones
- C. Amazon Virtual Private Cloud (Amazon VPC)
- D. AWS Regions

**主分类：** C4-10 VPC-Subnet-路由与基础网络题。

**题库记录答案：** `C`。

**社区投票：** C 100%

### Q581.1-题干怎么拆

现有题库没有提供独立 explanation。

这里按题干中的动作、对象和所有选项的服务定位进行比较。

### Q581.2-每个选项的定位

| 选项 | 题库内容 | 服务/概念定位 | 题库答案关系 |
|---|---|---|---|
| A | AWS VPN | AWS Site-to-Site VPN：通过 Internet 建立加密隧道连接本地网络与 AWS。 | 题库记录为非正确选项 |
| B | Availability Zones | Availability Zone 是 Region 内相互隔离的故障域/部署位置。 | 题库记录为非正确选项 |
| C | Amazon Virtual Private Cloud (Amazon VPC) | Amazon VPC：AWS 中用户定义的逻辑隔离虚拟网络。 | 题库记录为正确选项 |
| D | AWS Regions | Region 是 AWS 独立的地理区域，内部包含多个 Availability Zone。 | 题库记录为非正确选项 |

### Q581.3-为什么题库会这样选

题库记录的正确选项定位为：Amazon VPC：AWS 中用户定义的逻辑隔离虚拟网络。

它与题干要求的对象/约束直接对应。

其余选项虽然可能也属于同一大类，但主要解决不同问题。

---

---

## Q604-VPC-Subnet-路由与基础网络题

**题目：** Which VPC component can a company use to set up a virtual firewall at the Amazon EC2 instance level?。

**选项：**

- A. Network ACL
- B. Security group
- C. Route table
- D. NAT gateway

**主分类：** C4-10 VPC-Subnet-路由与基础网络题。

**题库记录答案：** `B`。

**社区投票：** B 100%

### Q604.1-题干怎么拆

现有题库没有提供独立 explanation。

这里按题干中的动作、对象和所有选项的服务定位进行比较。

### Q604.2-每个选项的定位

| 选项 | 题库内容 | 服务/概念定位 | 题库答案关系 |
|---|---|---|---|
| A | Network ACL | Network ACL：Subnet 级无状态网络访问控制列表。 | 题库记录为非正确选项 |
| B | Security group | Security Group：资源/ENI 级有状态虚拟防火墙。 | 题库记录为正确选项 |
| C | Route table | 该选项是题库中的概念/服务描述。现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为非正确选项 |
| D | NAT gateway | NAT Gateway：常用于 Private Subnet 资源主动访问外部 IPv4 网络。 | 题库记录为非正确选项 |

### Q604.3-为什么题库会这样选

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
- 本篇梳理了VPC-Subnet-路由与基础网络题相关的核心知识、适用场景与判断要点。

[返回本章总述](./C4-10-00-章节总述.md)｜[查看本章概述](./C4-10-99-章节概述.md)

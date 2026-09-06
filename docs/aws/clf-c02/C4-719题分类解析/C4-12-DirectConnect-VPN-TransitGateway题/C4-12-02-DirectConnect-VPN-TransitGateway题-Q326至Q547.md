---
id: C4-12-02-DirectConnect-VPN-TransitGateway题-Q326至Q547
sidebar_position: 2
---

# C4-12-02-DirectConnect-VPN-TransitGateway题-Q326至Q547

> 本篇是《C4-12-DirectConnect-VPN-TransitGateway题》的第2个分篇，主要包含：DirectConnect-VPN-TransitGateway题、DirectConnect-VPN-TransitGateway题、DirectConnect-VPN-TransitGateway题、DirectConnect-VPN-TransitGateway题、DirectConnect-VPN-TransitGateway题、DirectConnect-VPN-TransitGateway题、DirectConnect-VPN-TransitGateway题。

## Q326-DirectConnect-VPN-TransitGateway题

**题目：** A company wants to establish a private network connection between AWS and its corporate network. Which AWS service or feature will meet this requirement?。

**选项：**

- A. Amazon Connect
- B. Amazon Route 53
- C. AWS Direct Connect
- D. VPC peering

**主分类：** C4-12 DirectConnect-VPN-TransitGateway题。

**题库记录答案：** `C`。

**需求/考点标签：** Disaster Recovery。

**社区投票：** C 100%

### Q326.1-题干怎么拆

这道题先识别的不是某个服务名，而是这些约束：**Disaster Recovery**。

判断时应该先找到与这些约束同层、同数据模型或同运维目标的服务，再排除“看起来也属于 AWS，但解决的是另一个层面问题”的选项。

### Q326.2-每个选项的定位

| 选项 | 题库内容 | 服务/概念定位 | 题库答案关系 |
|---|---|---|---|
| A | Amazon Connect | Amazon Connect：云联络中心服务。 | 题库记录为非正确选项 |
| B | Amazon Route 53 | Amazon Route 53：AWS 托管 DNS 与 DNS 路由服务。 | 题库记录为非正确选项 |
| C | AWS Direct Connect | AWS Direct Connect：客户网络到 AWS 的专用网络连接，适合稳定、长期、可预测链路需求。 | 题库记录为正确选项 |
| D | VPC peering | VPC Peering：两个 VPC 之间的点到点私网连接。Amazon VPC：AWS 中用户定义的逻辑隔离虚拟网络。 | 题库记录为非正确选项 |

### Q326.3-为什么题库会这样选

题库记录的正确选项定位为：AWS Direct Connect：客户网络到 AWS 的专用网络连接，适合稳定、长期、可预测链路需求。

它与题干要求的对象/约束直接对应。

其余选项虽然可能也属于同一大类，但主要解决不同问题。

---

---

## Q357-DirectConnect-VPN-TransitGateway题

**题目：** A company needs to connect its on-premises data center to the AWS Cloud. The company needs a dedicated, low-latency connection with consistent network performance. Which AWS service will meet these requirements?。

**选项：**

- A. AWS Global Accelerator
- B. Amazon CloudFront
- C. AWS Direct Connect
- D. AWS Managed VPN

**主分类：** C4-12 DirectConnect-VPN-TransitGateway题。

**题库记录答案：** `C`。

**需求/考点标签：** Hybrid Cloud。

**社区投票：** C 100%

### Q357.1-题干怎么拆

这道题先识别的不是某个服务名，而是这些约束：**Hybrid Cloud**。

判断时应该先找到与这些约束同层、同数据模型或同运维目标的服务，再排除“看起来也属于 AWS，但解决的是另一个层面问题”的选项。

### Q357.2-每个选项的定位

| 选项 | 题库内容 | 服务/概念定位 | 题库答案关系 |
|---|---|---|---|
| A | AWS Global Accelerator | AWS Global Accelerator：利用 AWS 全球网络和 Anycast 静态 IP 改善全球应用访问路径。 | 题库记录为非正确选项 |
| B | Amazon CloudFront | Amazon CloudFront：AWS CDN，利用 Edge Location 缓存和分发内容。 | 题库记录为非正确选项 |
| C | AWS Direct Connect | AWS Direct Connect：客户网络到 AWS 的专用网络连接，适合稳定、长期、可预测链路需求。 | 题库记录为正确选项 |
| D | AWS Managed VPN | AWS Site-to-Site VPN：通过 Internet 建立加密隧道连接本地网络与 AWS。 | 题库记录为非正确选项 |

### Q357.3-为什么题库会这样选

题库记录的正确选项定位为：AWS Direct Connect：客户网络到 AWS 的专用网络连接，适合稳定、长期、可预测链路需求。

它与题干要求的对象/约束直接对应。

其余选项虽然可能也属于同一大类，但主要解决不同问题。

---

---

## Q443-DirectConnect-VPN-TransitGateway题

**题目：** Which AWS service or feature gives users the ability to connect VPCs and on-premises networks to a central hub?。

**选项：**

- A. Virtual private gateway
- B. AWS Transit Gateway
- C. Internet gateway
- D. Customer gateway

**主分类：** C4-12 DirectConnect-VPN-TransitGateway题。

**题库记录答案：** `B`。

**需求/考点标签：** Hybrid Cloud。

**社区投票：** B 100%

### Q443.1-题干怎么拆

这道题先识别的不是某个服务名，而是这些约束：**Hybrid Cloud**。

判断时应该先找到与这些约束同层、同数据模型或同运维目标的服务，再排除“看起来也属于 AWS，但解决的是另一个层面问题”的选项。

### Q443.2-每个选项的定位

| 选项 | 题库内容 | 服务/概念定位 | 题库答案关系 |
|---|---|---|---|
| A | Virtual private gateway | 该选项是题库中的概念/服务描述。现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为非正确选项 |
| B | AWS Transit Gateway | AWS Transit Gateway：连接多个 VPC 与本地网络的中心 Hub/云路由器。 | 题库记录为正确选项 |
| C | Internet gateway | Internet Gateway：VPC 与公网 Internet 之间的网关组件。 | 题库记录为非正确选项 |
| D | Customer gateway | 该选项是题库中的概念/服务描述。现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为非正确选项 |

### Q443.3-为什么题库会这样选

题库记录的正确选项定位为：AWS Transit Gateway：连接多个 VPC 与本地网络的中心 Hub/云路由器。

它与题干要求的对象/约束直接对应。

其余选项虽然可能也属于同一大类，但主要解决不同问题。

---

---

## Q445-DirectConnect-VPN-TransitGateway题

**题目：** A company is connecting multiple VPCs and on-premises networks. The company needs to use an AWS service as a cloud router to simplify peering relationships. Which AWS service can the company use to meet this requirement?。

**选项：**

- A. AWS Direct Connect
- B. AWS Transit Gateway
- C. Amazon Connect
- D. Amazon Route 53

**主分类：** C4-12 DirectConnect-VPN-TransitGateway题。

**题库记录答案：** `B`。

**需求/考点标签：** Hybrid Cloud。

**社区投票：** B 86%, A 14%。

### Q445.1-题干怎么拆

这道题先识别的不是某个服务名，而是这些约束：**Hybrid Cloud**。

判断时应该先找到与这些约束同层、同数据模型或同运维目标的服务，再排除“看起来也属于 AWS，但解决的是另一个层面问题”的选项。

### Q445.2-每个选项的定位

| 选项 | 题库内容 | 服务/概念定位 | 题库答案关系 |
|---|---|---|---|
| A | AWS Direct Connect | AWS Direct Connect：客户网络到 AWS 的专用网络连接，适合稳定、长期、可预测链路需求。 | 题库记录为非正确选项 |
| B | AWS Transit Gateway | AWS Transit Gateway：连接多个 VPC 与本地网络的中心 Hub/云路由器。 | 题库记录为正确选项 |
| C | Amazon Connect | Amazon Connect：云联络中心服务。 | 题库记录为非正确选项 |
| D | Amazon Route 53 | Amazon Route 53：AWS 托管 DNS 与 DNS 路由服务。 | 题库记录为非正确选项 |

### Q445.3-为什么题库会这样选

题库记录的正确选项定位为：AWS Transit Gateway：连接多个 VPC 与本地网络的中心 Hub/云路由器。

它与题干要求的对象/约束直接对应。

其余选项虽然可能也属于同一大类，但主要解决不同问题。

---

---

## Q466-DirectConnect-VPN-TransitGateway题

**题目：** A company is building AWS architecture to deliver real-time data feeds from an on-premises data center into an application that runs on AWS. The company needs a consistent network connection with minimal latency. What should the company use to connect the application and the data center to meet these requirements?

**选项：**

- A. AWS Direct Connect
- B. Public internet
- C. AWS VPN
- D. Amazon Connect

**主分类：** C4-12 DirectConnect-VPN-TransitGateway题。

**题库记录答案：** `A`。

**需求/考点标签：** Hybrid Cloud。

**社区投票：** A 100%

### Q466.1-题干怎么拆

这道题先识别的不是某个服务名，而是这些约束：**Hybrid Cloud**。

判断时应该先找到与这些约束同层、同数据模型或同运维目标的服务，再排除“看起来也属于 AWS，但解决的是另一个层面问题”的选项。

### Q466.2-每个选项的定位

| 选项 | 题库内容 | 服务/概念定位 | 题库答案关系 |
|---|---|---|---|
| A | AWS Direct Connect | AWS Direct Connect：客户网络到 AWS 的专用网络连接，适合稳定、长期、可预测链路需求。 | 题库记录为正确选项 |
| B | Public internet | 该选项是题库中的概念/服务描述。现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为非正确选项 |
| C | AWS VPN | AWS Site-to-Site VPN：通过 Internet 建立加密隧道连接本地网络与 AWS。 | 题库记录为非正确选项 |
| D | Amazon Connect | Amazon Connect：云联络中心服务。 | 题库记录为非正确选项 |

### Q466.3-为什么题库会这样选

题库记录的正确选项定位为：AWS Direct Connect：客户网络到 AWS 的专用网络连接，适合稳定、长期、可预测链路需求。

它与题干要求的对象/约束直接对应。

其余选项虽然可能也属于同一大类，但主要解决不同问题。

---

---

## Q471-DirectConnect-VPN-TransitGateway题

**题目：** Which AWS service or feature requires an internet service provider (ISP) and a colocation facility to be implemented?。

**选项：**

- A. AWS VPN
- B. Amazon Connect
- C. AWS Direct Connect
- D. Internet gateway

**主分类：** C4-12 DirectConnect-VPN-TransitGateway题。

**题库记录答案：** `C`

### Q471.1-题干怎么拆

现有题库没有提供独立 explanation。

这里按题干中的动作、对象和所有选项的服务定位进行比较。

### Q471.2-每个选项的定位

| 选项 | 题库内容 | 服务/概念定位 | 题库答案关系 |
|---|---|---|---|
| A | AWS VPN | AWS Site-to-Site VPN：通过 Internet 建立加密隧道连接本地网络与 AWS。 | 题库记录为非正确选项 |
| B | Amazon Connect | Amazon Connect：云联络中心服务。 | 题库记录为非正确选项 |
| C | AWS Direct Connect | AWS Direct Connect：客户网络到 AWS 的专用网络连接，适合稳定、长期、可预测链路需求。 | 题库记录为正确选项 |
| D | Internet gateway | Internet Gateway：VPC 与公网 Internet 之间的网关组件。 | 题库记录为非正确选项 |

### Q471.3-为什么题库会这样选

题库记录的正确选项定位为：AWS Direct Connect：客户网络到 AWS 的专用网络连接，适合稳定、长期、可预测链路需求。

它与题干要求的对象/约束直接对应。

其余选项虽然可能也属于同一大类，但主要解决不同问题。

---

---

## Q547-DirectConnect-VPN-TransitGateway题

**题目：** A company wants to maintain bandwidth throughput and provide a more consistent network experience than public internet- based connections. Which AWS service should the company choose?。

**选项：**

- A. AWS VPN
- B. AWS Direct Connect
- C. Amazon Connect
- D. Amazon CloudFront

**主分类：** C4-12 DirectConnect-VPN-TransitGateway题。

**题库记录答案：** `B`。

**社区投票：** B 80%, D 20%。

### Q547.1-题干怎么拆

现有题库没有提供独立 explanation。

这里按题干中的动作、对象和所有选项的服务定位进行比较。

### Q547.2-每个选项的定位

| 选项 | 题库内容 | 服务/概念定位 | 题库答案关系 |
|---|---|---|---|
| A | AWS VPN | AWS Site-to-Site VPN：通过 Internet 建立加密隧道连接本地网络与 AWS。 | 题库记录为非正确选项 |
| B | AWS Direct Connect | AWS Direct Connect：客户网络到 AWS 的专用网络连接，适合稳定、长期、可预测链路需求。 | 题库记录为正确选项 |
| C | Amazon Connect | Amazon Connect：云联络中心服务。 | 题库记录为非正确选项 |
| D | Amazon CloudFront | Amazon CloudFront：AWS CDN，利用 Edge Location 缓存和分发内容。 | 题库记录为非正确选项 |

### Q547.3-为什么题库会这样选

题库记录的正确选项定位为：AWS Direct Connect：客户网络到 AWS 的专用网络连接，适合稳定、长期、可预测链路需求。

它与题干要求的对象/约束直接对应。

其余选项虽然可能也属于同一大类，但主要解决不同问题。

---

## 本篇概述

- 本篇梳理了DirectConnect-VPN-TransitGateway题相关的核心知识、适用场景与判断要点。
- 本篇梳理了DirectConnect-VPN-TransitGateway题相关的核心知识、适用场景与判断要点。
- 本篇梳理了DirectConnect-VPN-TransitGateway题相关的核心知识、适用场景与判断要点。
- 本篇梳理了DirectConnect-VPN-TransitGateway题相关的核心知识、适用场景与判断要点。
- 本篇梳理了DirectConnect-VPN-TransitGateway题相关的核心知识、适用场景与判断要点。
- 本篇梳理了DirectConnect-VPN-TransitGateway题相关的核心知识、适用场景与判断要点。
- 本篇梳理了DirectConnect-VPN-TransitGateway题相关的核心知识、适用场景与判断要点。

[返回本章总述](./C4-12-00-章节总述.md)｜[查看本章概述](./C4-12-99-章节概述.md)

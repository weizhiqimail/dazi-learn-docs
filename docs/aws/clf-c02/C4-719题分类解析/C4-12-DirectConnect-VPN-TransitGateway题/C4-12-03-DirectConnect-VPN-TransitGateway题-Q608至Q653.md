---
id: C4-12-03-DirectConnect-VPN-TransitGateway题-Q608至Q653
sidebar_position: 3
---

# C4-12-03-DirectConnect-VPN-TransitGateway题-Q608至Q653

> 本篇是《C4-12-DirectConnect-VPN-TransitGateway题》的第3个分篇，主要包含：DirectConnect-VPN-TransitGateway题、DirectConnect-VPN-TransitGateway题、DirectConnect-VPN-TransitGateway题、DirectConnect-VPN-TransitGateway题。

## Q608-DirectConnect-VPN-TransitGateway题

**题目：** A company wants to set up a secure network connection from on premises to the AWS Cloud within 1 week. Which solution will meet these requirements?。

**选项：**

- A. AWS Direct Connect
- B. Amazon VPC
- C. AWS Site-to-Site VPN
- D. Edge location

**主分类：** C4-12 DirectConnect-VPN-TransitGateway题。

**题库记录答案：** `C`。

**需求/考点标签：** Hybrid Cloud。

**社区投票：** C 100%

### Q608.1-题干怎么拆

这道题先识别的不是某个服务名，而是这些约束：**Hybrid Cloud**。

判断时应该先找到与这些约束同层、同数据模型或同运维目标的服务，再排除“看起来也属于 AWS，但解决的是另一个层面问题”的选项。

### Q608.2-每个选项的定位

| 选项 | 题库内容 | 服务/概念定位 | 题库答案关系 |
|---|---|---|---|
| A | AWS Direct Connect | AWS Direct Connect：客户网络到 AWS 的专用网络连接，适合稳定、长期、可预测链路需求。 | 题库记录为非正确选项 |
| B | Amazon VPC | Amazon VPC：AWS 中用户定义的逻辑隔离虚拟网络。 | 题库记录为非正确选项 |
| C | AWS Site-to-Site VPN | AWS Site-to-Site VPN：通过 Internet 建立加密隧道连接本地网络与 AWS。 | 题库记录为正确选项 |
| D | Edge location | 该选项是题库中的概念/服务描述。现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为非正确选项 |

### Q608.3-为什么题库会这样选

题库记录的正确选项定位为：AWS Site-to-Site VPN：通过 Internet 建立加密隧道连接本地网络与 AWS。

它与题干要求的对象/约束直接对应。

其余选项虽然可能也属于同一大类，但主要解决不同问题。

---

---

## Q616-DirectConnect-VPN-TransitGateway题

**题目：** A company needs to set up dedicated network connectivity between its on-premises data center and the AWS Cloud. The network cannot use the public internet. Which AWS service or feature will meet these requirements?。

**选项：**

- A. AWS Transit Gateway
- B. AWS VPN
- C. Amazon CloudFront
- D. AWS Direct Connect

**主分类：** C4-12 DirectConnect-VPN-TransitGateway题。

**题库记录答案：** `D`。

**需求/考点标签：** 本地到AWS专线。

**社区投票：** D 100%

### Q616.1-题干怎么拆

这道题先识别的不是某个服务名，而是这些约束：**本地到AWS专线**。

判断时应该先找到与这些约束同层、同数据模型或同运维目标的服务，再排除“看起来也属于 AWS，但解决的是另一个层面问题”的选项。

### Q616.2-每个选项的定位

| 选项 | 题库内容 | 服务/概念定位 | 题库答案关系 |
|---|---|---|---|
| A | AWS Transit Gateway | AWS Transit Gateway：连接多个 VPC 与本地网络的中心 Hub/云路由器。 | 题库记录为非正确选项 |
| B | AWS VPN | AWS Site-to-Site VPN：通过 Internet 建立加密隧道连接本地网络与 AWS。 | 题库记录为非正确选项 |
| C | Amazon CloudFront | Amazon CloudFront：AWS CDN，利用 Edge Location 缓存和分发内容。 | 题库记录为非正确选项 |
| D | AWS Direct Connect | AWS Direct Connect：客户网络到 AWS 的专用网络连接，适合稳定、长期、可预测链路需求。 | 题库记录为正确选项 |

### Q616.3-为什么题库会这样选

题库记录的正确选项定位为：AWS Direct Connect：客户网络到 AWS 的专用网络连接，适合稳定、长期、可预测链路需求。

它与题干要求的对象/约束直接对应。

其余选项虽然可能也属于同一大类，但主要解决不同问题。

---

---

## Q630-DirectConnect-VPN-TransitGateway题

**题目：** Which AWS service can create a private network connection from on premises to the AWS Cloud?。

**选项：**

- A. AWS Config
- B. Virtual Private Cloud (Amazon VPC)
- C. AWS Direct Connect
- D. Amazon Route 53

**主分类：** C4-12 DirectConnect-VPN-TransitGateway题。

**题库记录答案：** `C`。

**需求/考点标签：** Hybrid Cloud。

**社区投票：** C 100%

### Q630.1-题干怎么拆

这道题先识别的不是某个服务名，而是这些约束：**Hybrid Cloud**。

判断时应该先找到与这些约束同层、同数据模型或同运维目标的服务，再排除“看起来也属于 AWS，但解决的是另一个层面问题”的选项。

### Q630.2-每个选项的定位

| 选项 | 题库内容 | 服务/概念定位 | 题库答案关系 |
|---|---|---|---|
| A | AWS Config | AWS Config：记录资源配置与变化，并可按规则检查配置合规性。 | 题库记录为非正确选项 |
| B | Virtual Private Cloud (Amazon VPC) | Amazon VPC：AWS 中用户定义的逻辑隔离虚拟网络。 | 题库记录为非正确选项 |
| C | AWS Direct Connect | AWS Direct Connect：客户网络到 AWS 的专用网络连接，适合稳定、长期、可预测链路需求。 | 题库记录为正确选项 |
| D | Amazon Route 53 | Amazon Route 53：AWS 托管 DNS 与 DNS 路由服务。 | 题库记录为非正确选项 |

### Q630.3-为什么题库会这样选

题库记录的正确选项定位为：AWS Direct Connect：客户网络到 AWS 的专用网络连接，适合稳定、长期、可预测链路需求。

它与题干要求的对象/约束直接对应。

其余选项虽然可能也属于同一大类，但主要解决不同问题。

---

---

## Q653-DirectConnect-VPN-TransitGateway题

**题目：** A company wants to use an AWS networking solution that can act as a centralized gateway between multiple VPCs and on- premises networks. Which AWS service or feature will meet this requirement?。

**选项：**

- A. Gateway VPC endpoint
- B. AWS Direct Connect
- C. AWS Transit Gateway
- D. AWS PrivateLink

**主分类：** C4-12 DirectConnect-VPN-TransitGateway题。

**题库记录答案：** `C`。

**社区投票：** C 100%

### Q653.1-题干怎么拆

现有题库没有提供独立 explanation。

这里按题干中的动作、对象和所有选项的服务定位进行比较。

### Q653.2-每个选项的定位

| 选项 | 题库内容 | 服务/概念定位 | 题库答案关系 |
|---|---|---|---|
| A | Gateway VPC endpoint | VPC Endpoint：让 VPC 私网访问支持的 AWS 服务，而无需经过公共 Internet。Amazon VPC：AWS 中用户定义的逻辑隔离虚拟网络。 | 题库记录为非正确选项 |
| B | AWS Direct Connect | AWS Direct Connect：客户网络到 AWS 的专用网络连接，适合稳定、长期、可预测链路需求。 | 题库记录为非正确选项 |
| C | AWS Transit Gateway | AWS Transit Gateway：连接多个 VPC 与本地网络的中心 Hub/云路由器。 | 题库记录为正确选项 |
| D | AWS PrivateLink | AWS PrivateLink：通过私有 IP/接口 Endpoint 私下发布和访问服务。 | 题库记录为非正确选项 |

### Q653.3-为什么题库会这样选

题库记录的正确选项定位为：AWS Transit Gateway：连接多个 VPC 与本地网络的中心 Hub/云路由器。

它与题干要求的对象/约束直接对应。

其余选项虽然可能也属于同一大类，但主要解决不同问题。

---

## 本篇概述

- 本篇梳理了DirectConnect-VPN-TransitGateway题相关的核心知识、适用场景与判断要点。
- 本篇梳理了DirectConnect-VPN-TransitGateway题相关的核心知识、适用场景与判断要点。
- 本篇梳理了DirectConnect-VPN-TransitGateway题相关的核心知识、适用场景与判断要点。
- 本篇梳理了DirectConnect-VPN-TransitGateway题相关的核心知识、适用场景与判断要点。

[返回本章总述](./C4-12-00-章节总述.md)｜[查看本章概述](./C4-12-99-章节概述.md)

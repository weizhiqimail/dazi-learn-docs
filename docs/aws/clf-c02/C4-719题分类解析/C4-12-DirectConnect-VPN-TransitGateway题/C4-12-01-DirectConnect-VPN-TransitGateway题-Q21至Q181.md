---
id: C4-12-01-DirectConnect-VPN-TransitGateway题-Q21至Q181
sidebar_position: 1
---

# C4-12-01-DirectConnect-VPN-TransitGateway题-Q21至Q181

> 本篇是《C4-12-DirectConnect-VPN-TransitGateway题》的第1个分篇，主要包含：DirectConnect-VPN-TransitGateway题、DirectConnect-VPN-TransitGateway题、DirectConnect-VPN-TransitGateway题、DirectConnect-VPN-TransitGateway题、DirectConnect-VPN-TransitGateway题、DirectConnect-VPN-TransitGateway题。

## Q21-DirectConnect-VPN-TransitGateway题

**题目：** Which AWS service or feature allows a user to establish a dedicated network connection between a company’s on-premises data center and the AWS Cloud?。

**选项：**

- A. AWS Direct Connect
- B. VPC peering
- C. AWS VPN
- D. Amazon Route 53

**主分类：** C4-12 DirectConnect-VPN-TransitGateway题。

**题库记录答案：** `A`。

**需求/考点标签：** 本地到AWS专线。

**社区投票：** A 100%

### Q21.1-题干怎么拆

这道题先识别的不是某个服务名，而是这些约束：**本地到AWS专线**。

判断时应该先找到与这些约束同层、同数据模型或同运维目标的服务，再排除“看起来也属于 AWS，但解决的是另一个层面问题”的选项。

### Q21.2-每个选项的定位

| 选项 | 题库内容 | 服务/概念定位 | 题库答案关系 |
|---|---|---|---|
| A | AWS Direct Connect | AWS Direct Connect：客户网络到 AWS 的专用网络连接，适合稳定、长期、可预测链路需求。 | 题库记录为正确选项 |
| B | VPC peering | VPC Peering：两个 VPC 之间的点到点私网连接。Amazon VPC：AWS 中用户定义的逻辑隔离虚拟网络。 | 题库记录为非正确选项 |
| C | AWS VPN | AWS Site-to-Site VPN：通过 Internet 建立加密隧道连接本地网络与 AWS。 | 题库记录为非正确选项 |
| D | Amazon Route 53 | Amazon Route 53：AWS 托管 DNS 与 DNS 路由服务。 | 题库记录为非正确选项 |

### Q21.3-为什么题库会这样选

题库记录的正确选项定位为：AWS Direct Connect：客户网络到 AWS 的专用网络连接，适合稳定、长期、可预测链路需求。

它与题干要求的对象/约束直接对应。

其余选项虽然可能也属于同一大类，但主要解决不同问题。

---

---

## Q64-DirectConnect-VPN-TransitGateway题

**题目：** A company wants to provide managed Windows virtual desktops and applications to its remote employees over secure network connections. Which AWS services can the company use to meet these requirements? (Choose two.)。

**选项：**

- A. Amazon Connect
- B. Amazon AppStream 2.0
- C. Amazon WorkSpaces
- D. AWS Site-to-Site VPN
- E. Amazon Elastic Container Service (Amazon ECS)

**主分类：** C4-12 DirectConnect-VPN-TransitGateway题。

**题库记录答案：** `BC`。

**社区投票：** BC 66%, CD 34%。

### Q64.1-题干怎么拆

现有题库没有提供独立 explanation。

这里按题干中的动作、对象和所有选项的服务定位进行比较。

### Q64.2-每个选项的定位

| 选项 | 题库内容 | 服务/概念定位 | 题库答案关系 |
|---|---|---|---|
| A | Amazon Connect | Amazon Connect：云联络中心服务。 | 题库记录为非正确选项 |
| B | Amazon AppStream 2.0 | 该选项是题库中的概念/服务描述。现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为正确选项 |
| C | Amazon WorkSpaces | 该选项是题库中的概念/服务描述。现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为正确选项 |
| D | AWS Site-to-Site VPN | AWS Site-to-Site VPN：通过 Internet 建立加密隧道连接本地网络与 AWS。 | 题库记录为非正确选项 |
| E | Amazon Elastic Container Service (Amazon ECS) | Amazon ECS：AWS 原生托管容器编排服务。 | 题库记录为非正确选项 |

### Q64.3-为什么题库会这样选

题库记录的正确选项定位为：该选项是题库中的概念/服务描述。

现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。

该选项是题库中的概念/服务描述。

现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。

它与题干要求的对象/约束直接对应。

其余选项虽然可能也属于同一大类，但主要解决不同问题。

### Q64.4-⚠-争议/版本提示

- 社区投票分散，最高项仅 66%
- 本题同时收录到 `C4-27-旧题争议题与当前AWS差异.md`，不在这里强行替题库修正答案。

---

---

## Q70-DirectConnect-VPN-TransitGateway题

**题目：** A network engineer needs to build a hybrid cloud architecture connecting on-premises networks to the AWS Cloud using AWS Direct Connect. The company has a few VPCs in a single AWS Region and expects to increase the number of VPCs to hundreds over time. Which AWS service or feature should the engineer use to simplify and scale this connectivity as the VPCs increase in number?

**选项：**

- A. VPC endpoints
- B. AWS Transit Gateway
- C. Amazon Route 53
- D. AWS Secrets Manager

**主分类：** C4-12 DirectConnect-VPN-TransitGateway题。

**题库记录答案：** `B`。

**需求/考点标签：** 本地到AWS专线。

**社区投票：** B 100%

### Q70.1-题干怎么拆

这道题先识别的不是某个服务名，而是这些约束：**本地到AWS专线**。

判断时应该先找到与这些约束同层、同数据模型或同运维目标的服务，再排除“看起来也属于 AWS，但解决的是另一个层面问题”的选项。

### Q70.2-每个选项的定位

| 选项 | 题库内容 | 服务/概念定位 | 题库答案关系 |
|---|---|---|---|
| A | VPC endpoints | VPC Endpoint：让 VPC 私网访问支持的 AWS 服务，而无需经过公共 Internet。Amazon VPC：AWS 中用户定义的逻辑隔离虚拟网络。 | 题库记录为非正确选项 |
| B | AWS Transit Gateway | AWS Transit Gateway：连接多个 VPC 与本地网络的中心 Hub/云路由器。 | 题库记录为正确选项 |
| C | Amazon Route 53 | Amazon Route 53：AWS 托管 DNS 与 DNS 路由服务。 | 题库记录为非正确选项 |
| D | AWS Secrets Manager | AWS Secrets Manager：安全保存、检索和轮换数据库密码/API Key 等 Secret。 | 题库记录为非正确选项 |

### Q70.3-为什么题库会这样选

题库记录的正确选项定位为：AWS Transit Gateway：连接多个 VPC 与本地网络的中心 Hub/云路由器。

它与题干要求的对象/约束直接对应。

其余选项虽然可能也属于同一大类，但主要解决不同问题。

---

---

## Q73-DirectConnect-VPN-TransitGateway题

**题目：** Which AWS service or feature can be used to create a private connection between an on-premises workload and an AWS Cloud workload?。

**选项：**

- A. Amazon Route 53
- B. Amazon Macie
- C. AWS Direct Connect
- D. AWS PrivateLink

**主分类：** C4-12 DirectConnect-VPN-TransitGateway题。

**题库记录答案：** `C`。

**需求/考点标签：** Hybrid Cloud。

**社区投票：** C 77%, D 23%。

### Q73.1-题干怎么拆

这道题先识别的不是某个服务名，而是这些约束：**Hybrid Cloud**。

判断时应该先找到与这些约束同层、同数据模型或同运维目标的服务，再排除“看起来也属于 AWS，但解决的是另一个层面问题”的选项。

### Q73.2-每个选项的定位

| 选项 | 题库内容 | 服务/概念定位 | 题库答案关系 |
|---|---|---|---|
| A | Amazon Route 53 | Amazon Route 53：AWS 托管 DNS 与 DNS 路由服务。 | 题库记录为非正确选项 |
| B | Amazon Macie | Amazon Macie：发现和保护 S3 中的敏感数据。 | 题库记录为非正确选项 |
| C | AWS Direct Connect | AWS Direct Connect：客户网络到 AWS 的专用网络连接，适合稳定、长期、可预测链路需求。 | 题库记录为正确选项 |
| D | AWS PrivateLink | AWS PrivateLink：通过私有 IP/接口 Endpoint 私下发布和访问服务。 | 题库记录为非正确选项 |

### Q73.3-为什么题库会这样选

题库记录的正确选项定位为：AWS Direct Connect：客户网络到 AWS 的专用网络连接，适合稳定、长期、可预测链路需求。

它与题干要求的对象/约束直接对应。

其余选项虽然可能也属于同一大类，但主要解决不同问题。

---

---

## Q125-DirectConnect-VPN-TransitGateway题

**题目：** A company wants a unified tool to provide a consistent method to interact with AWS services. Which AWS service or tool will meet this requirement?。

**选项：**

- A. AWS CLI
- B. Amazon Elastic Container Service (Amazon ECS)
- C. AWS Cloud9
- D. AWS Virtual Private Network (AWS VPN)

**主分类：** C4-12 DirectConnect-VPN-TransitGateway题。

**题库记录答案：** `A`。

**社区投票：** A 100%

### Q125.1-题干怎么拆

现有题库没有提供独立 explanation。

这里按题干中的动作、对象和所有选项的服务定位进行比较。

### Q125.2-每个选项的定位

| 选项 | 题库内容 | 服务/概念定位 | 题库答案关系 |
|---|---|---|---|
| A | AWS CLI | 该选项是题库中的概念/服务描述。现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为正确选项 |
| B | Amazon Elastic Container Service (Amazon ECS) | Amazon ECS：AWS 原生托管容器编排服务。 | 题库记录为非正确选项 |
| C | AWS Cloud9 | 该选项是题库中的概念/服务描述。现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为非正确选项 |
| D | AWS Virtual Private Network (AWS VPN) | AWS Site-to-Site VPN：通过 Internet 建立加密隧道连接本地网络与 AWS。 | 题库记录为非正确选项 |

### Q125.3-为什么题库会这样选

题库记录的正确选项定位为：该选项是题库中的概念/服务描述。

现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。

它与题干要求的对象/约束直接对应。

其余选项虽然可能也属于同一大类，但主要解决不同问题。

---

---

## Q181-DirectConnect-VPN-TransitGateway题

**题目：** Which AWS services or features enable users to connect on-premises networks to a VPC? (Choose two.)。

**选项：**

- A. AWS VPN
- B. Elastic Load Balancing
- C. AWS Direct Connect
- D. VPC peering
- E. Amazon CloudFront

**主分类：** C4-12 DirectConnect-VPN-TransitGateway题。

**题库记录答案：** `AC`。

**需求/考点标签：** Hybrid Cloud。

**社区投票：** AC 100%

### Q181.1-题干怎么拆

这道题先识别的不是某个服务名，而是这些约束：**Hybrid Cloud**。

判断时应该先找到与这些约束同层、同数据模型或同运维目标的服务，再排除“看起来也属于 AWS，但解决的是另一个层面问题”的选项。

### Q181.2-每个选项的定位

| 选项 | 题库内容 | 服务/概念定位 | 题库答案关系 |
|---|---|---|---|
| A | AWS VPN | AWS Site-to-Site VPN：通过 Internet 建立加密隧道连接本地网络与 AWS。 | 题库记录为正确选项 |
| B | Elastic Load Balancing | Elastic Load Balancing：在多个后端目标间分发流量并提高可用性。 | 题库记录为非正确选项 |
| C | AWS Direct Connect | AWS Direct Connect：客户网络到 AWS 的专用网络连接，适合稳定、长期、可预测链路需求。 | 题库记录为正确选项 |
| D | VPC peering | VPC Peering：两个 VPC 之间的点到点私网连接。Amazon VPC：AWS 中用户定义的逻辑隔离虚拟网络。 | 题库记录为非正确选项 |
| E | Amazon CloudFront | Amazon CloudFront：AWS CDN，利用 Edge Location 缓存和分发内容。 | 题库记录为非正确选项 |

### Q181.3-为什么题库会这样选

题库记录的正确选项定位为：AWS Site-to-Site VPN：通过 Internet 建立加密隧道连接本地网络与 AWS。

AWS Direct Connect：客户网络到 AWS 的专用网络连接，适合稳定、长期、可预测链路需求。

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

[返回本章总述](./C4-12-00-章节总述.md)｜[查看本章概述](./C4-12-99-章节概述.md)

---
id: C4-10-04-VPC-Subnet-路由与基础网络题-Q614至Q665
sidebar_position: 4
---

# C4-10-04-VPC-Subnet-路由与基础网络题-Q614至Q665

> 本篇是《C4-10-VPC-Subnet-路由与基础网络题》的第4个分篇，主要包含：VPC-Subnet-路由与基础网络题、VPC-Subnet-路由与基础网络题。

## Q614-VPC-Subnet-路由与基础网络题

**题目：** Which AWS network services or features allow CIDR block notation when providing an IP address range? (Choose two.)。

**选项：**

- A. Security groups
- B. Amazon Machine Image (AMI)
- C. Network access control list (network ACL)
- D. AWS Budgets
- E. Amazon Elastic Block Store (Amazon EBS)

**主分类：** C4-10 VPC-Subnet-路由与基础网络题。

**题库记录答案：** `AC`。

**社区投票：** AC 100%

### Q614.1-题干怎么拆

现有题库没有提供独立 explanation。

这里按题干中的动作、对象和所有选项的服务定位进行比较。

### Q614.2-每个选项的定位

| 选项 | 题库内容 | 服务/概念定位 | 题库答案关系 |
|---|---|---|---|
| A | Security groups | Security Group：资源/ENI 级有状态虚拟防火墙。 | 题库记录为正确选项 |
| B | Amazon Machine Image (AMI) | AMI：EC2 启动模板，定义实例启动所需的软件配置。 | 题库记录为非正确选项 |
| C | Network access control list (network ACL) | Network ACL：Subnet 级无状态网络访问控制列表。 | 题库记录为正确选项 |
| D | AWS Budgets | AWS Budgets：设置成本/用量预算阈值和告警。 | 题库记录为非正确选项 |
| E | Amazon Elastic Block Store (Amazon EBS) | Amazon EBS：面向 EC2 的持久化块存储卷。 | 题库记录为非正确选项 |

### Q614.3-为什么题库会这样选

题库记录的正确选项定位为：Security Group：资源/ENI 级有状态虚拟防火墙。

Network ACL：Subnet 级无状态网络访问控制列表。

它与题干要求的对象/约束直接对应。

其余选项虽然可能也属于同一大类，但主要解决不同问题。

---

---

## Q665-VPC-Subnet-路由与基础网络题

**题目：** A company needs stateless network filtering for its VPC. Which AWS service, tool, or feature will meet this requirement?。

**选项：**

- A. AWS PrivateLink
- B. Security group
- C. Network access control list (ACL)
- D. AWS WAF

**主分类：** C4-10 VPC-Subnet-路由与基础网络题。

**题库记录答案：** `C`。

**社区投票：** C 100%

### Q665.1-题干怎么拆

现有题库没有提供独立 explanation。

这里按题干中的动作、对象和所有选项的服务定位进行比较。

### Q665.2-每个选项的定位

| 选项 | 题库内容 | 服务/概念定位 | 题库答案关系 |
|---|---|---|---|
| A | AWS PrivateLink | AWS PrivateLink：通过私有 IP/接口 Endpoint 私下发布和访问服务。 | 题库记录为非正确选项 |
| B | Security group | Security Group：资源/ENI 级有状态虚拟防火墙。 | 题库记录为非正确选项 |
| C | Network access control list (ACL) | 该选项是题库中的概念/服务描述。现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为正确选项 |
| D | AWS WAF | AWS WAF：Web 应用防火墙，过滤 HTTP(S) Web 请求。 | 题库记录为非正确选项 |

### Q665.3-为什么题库会这样选

题库记录的正确选项定位为：该选项是题库中的概念/服务描述。

现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。

它与题干要求的对象/约束直接对应。

其余选项虽然可能也属于同一大类，但主要解决不同问题。

---

## 本篇概述

- 本篇梳理了VPC-Subnet-路由与基础网络题相关的核心知识、适用场景与判断要点。
- 本篇梳理了VPC-Subnet-路由与基础网络题相关的核心知识、适用场景与判断要点。

[返回本章总述](./C4-10-00-章节总述.md)｜[查看本章概述](./C4-10-99-章节概述.md)

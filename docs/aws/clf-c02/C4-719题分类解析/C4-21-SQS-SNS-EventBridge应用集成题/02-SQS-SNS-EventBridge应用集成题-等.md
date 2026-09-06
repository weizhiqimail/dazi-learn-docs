---
id: 02-SQS-SNS-EventBridge应用集成题-等
sidebar_position: 2
---

# C4-21-SQS-SNS-EventBridge应用集成题-SQS-SNS-EventBridge应用集成题与SQS-SNS-EventBridge应用集成题与SQS-SNS-EventBridge应用集成题

> 本篇是《C4-21-SQS-SNS-EventBridge应用集成题》的第2个分篇，主要包含：SQS-SNS-EventBridge应用集成题、SQS-SNS-EventBridge应用集成题、SQS-SNS-EventBridge应用集成题。

## Q502-SQS-SNS-EventBridge应用集成题

**题目：** A user wants to invoke an AWS Lambda function when an Amazon EC2 instance enters the “stopping” state. Which AWS service is appropriate for this use case?。

**选项：**

- A. Amazon EventBridge
- B. AWS Config
- C. Amazon Simple Notification Service (Amazon SNS)
- D. AWS CloudFormation

**主分类：** C4-21 SQS-SNS-EventBridge应用集成题。

**题库记录答案：** `A`。

**需求/考点标签：** Serverless。

**社区投票：** A 100%

### Q502.1-题干怎么拆

这道题先识别的不是某个服务名，而是这些约束：**Serverless**。

判断时应该先找到与这些约束同层、同数据模型或同运维目标的服务，再排除“看起来也属于 AWS，但解决的是另一个层面问题”的选项。

### Q502.2-每个选项的定位

| 选项 | 题库内容 | 服务/概念定位 | 题库答案关系 |
|---|---|---|---|
| A | Amazon EventBridge | Amazon EventBridge：事件总线和规则路由服务，用事件来源/模式连接多个目标。 | 题库记录为正确选项 |
| B | AWS Config | AWS Config：记录资源配置与变化，并可按规则检查配置合规性。 | 题库记录为非正确选项 |
| C | Amazon Simple Notification Service (Amazon SNS) | Amazon SNS：Pub/Sub 消息与通知分发，一个发布可扇出到多个订阅者。 | 题库记录为非正确选项 |
| D | AWS CloudFormation | AWS CloudFormation：AWS Infrastructure as Code，用模板声明和部署资源。 | 题库记录为非正确选项 |

### Q502.3-为什么题库会这样选

题库记录的正确选项定位为：Amazon EventBridge：事件总线和规则路由服务，用事件来源/模式连接多个目标。

它与题干要求的对象/约束直接对应。

其余选项虽然可能也属于同一大类，但主要解决不同问题。

---

---

## Q645-SQS-SNS-EventBridge应用集成题

**题目：** A company wants an AWS service that can automate software deployment in Amazon EC2 instances and on-premises instances. Which AWS service will meet this requirement?。

**选项：**

- A. AWS CodeCommit
- B. AWS CodeBuild
- C. AWS CodeDeploy
- D. AWS CodePipeline

**主分类：** C4-21 SQS-SNS-EventBridge应用集成题。

**题库记录答案：** `C`。

**需求/考点标签：** Hybrid Cloud。

**社区投票：** C 100%

### Q645.1-题干怎么拆

这道题先识别的不是某个服务名，而是这些约束：**Hybrid Cloud**。

判断时应该先找到与这些约束同层、同数据模型或同运维目标的服务，再排除“看起来也属于 AWS，但解决的是另一个层面问题”的选项。

### Q645.2-每个选项的定位

| 选项 | 题库内容 | 服务/概念定位 | 题库答案关系 |
|---|---|---|---|
| A | AWS CodeCommit | 该选项是题库中的概念/服务描述。现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为非正确选项 |
| B | AWS CodeBuild | AWS CodeBuild：托管代码构建与测试服务。 | 题库记录为非正确选项 |
| C | AWS CodeDeploy | AWS CodeDeploy：自动化应用部署服务。项目资料将其视为题库历史/当前范围需复核项。 | 题库记录为正确选项 |
| D | AWS CodePipeline | AWS CodePipeline：持续交付 Pipeline 编排服务。 | 题库记录为非正确选项 |

### Q645.3-为什么题库会这样选

题库记录的正确选项定位为：AWS CodeDeploy：自动化应用部署服务。

项目资料将其视为题库历史/当前范围需复核项。

它与题干要求的对象/约束直接对应。

其余选项虽然可能也属于同一大类，但主要解决不同问题。

### Q645.4-⚠-争议/版本提示

- 涉及项目资料已提示需关注当前状态的词：codedeploy
- 本题同时收录到 `C4-27-旧题争议题与当前AWS差异.md`，不在这里强行替题库修正答案。

---

---

## Q710-SQS-SNS-EventBridge应用集成题

**题目：** A company wants to consolidate its call centers to improve the customer voice and chat experience with call center agents. Which AWS service or tool will meet these requirements?。

**选项：**

- A. Amazon Simple Notification Service (Amazon SNS)
- B. AWS Support Center
- C. Amazon Cognito
- D. Amazon Connect

**主分类：** C4-21 SQS-SNS-EventBridge应用集成题。

**题库记录答案：** `D`。

**社区投票：** D 100%

### Q710.1-题干怎么拆

现有题库没有提供独立 explanation。

这里按题干中的动作、对象和所有选项的服务定位进行比较。

### Q710.2-每个选项的定位

| 选项 | 题库内容 | 服务/概念定位 | 题库答案关系 |
|---|---|---|---|
| A | Amazon Simple Notification Service (Amazon SNS) | Amazon SNS：Pub/Sub 消息与通知分发，一个发布可扇出到多个订阅者。 | 题库记录为非正确选项 |
| B | AWS Support Center | AWS Support：AWS 技术支持与客户服务计划体系。项目资料明确提示当前计划体系有更新。 | 题库记录为非正确选项 |
| C | Amazon Cognito | Amazon Cognito：面向 Web/Mobile 应用终端用户的身份注册、登录与联合身份能力。 | 题库记录为非正确选项 |
| D | Amazon Connect | Amazon Connect：云联络中心服务。 | 题库记录为正确选项 |

### Q710.3-为什么题库会这样选

题库记录的正确选项定位为：Amazon Connect：云联络中心服务。

它与题干要求的对象/约束直接对应。

其余选项虽然可能也属于同一大类，但主要解决不同问题。

---

## 本篇概述

- 本篇梳理了SQS-SNS-EventBridge应用集成题相关的核心知识、适用场景与判断要点。
- 本篇梳理了SQS-SNS-EventBridge应用集成题相关的核心知识、适用场景与判断要点。
- 本篇梳理了SQS-SNS-EventBridge应用集成题相关的核心知识、适用场景与判断要点。

[返回本章总述](./00-总述.md)｜[查看本章概述](./99-概述.md)

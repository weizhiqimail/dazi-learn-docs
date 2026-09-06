---
id: 01-Analytics-AI-ML-IoT题-等
sidebar_position: 1
---

# C4-23-Analytics-AI-ML-IoT题-Analytics-AI-ML-IoT题与Analytics-AI-ML-IoT题与Analytics-AI-ML-IoT题与Analytics-AI-ML-IoT题与Analytics-AI-ML-IoT题与Analytics-AI-ML-IoT题与Analytics-AI-ML-IoT题

> 本篇是《C4-23-Analytics-AI-ML-IoT题》的第1个分篇，主要包含：Analytics-AI-ML-IoT题、Analytics-AI-ML-IoT题、Analytics-AI-ML-IoT题、Analytics-AI-ML-IoT题、Analytics-AI-ML-IoT题、Analytics-AI-ML-IoT题、Analytics-AI-ML-IoT题。

## Q14-Analytics-AI-ML-IoT题

**题目：** A company is using a central data platform to manage multiple types of data for its customers. The company wants to use AWS services to discover, transform, and visualize the data. Which combination of AWS services should the company use to meet these requirements? (Choose two.)。

**选项：**

- A. AWS Glue
- B. Amazon Elastic File System (Amazon EFS)
- C. Amazon Redshift
- D. Amazon QuickSight
- E. Amazon Quantum Ledger Database (Amazon QLDB)

**主分类：** C4-23 Analytics-AI-ML-IoT题。

**题库记录答案：** `AD`。

**社区投票：** AD 100%

### Q14.1-题干怎么拆

现有题库没有提供独立 explanation。

这里按题干中的动作、对象和所有选项的服务定位进行比较。

### Q14.2-每个选项的定位

| 选项 | 题库内容 | 服务/概念定位 | 题库答案关系 |
|---|---|---|---|
| A | AWS Glue | AWS Glue：Serverless 数据集成/ETL 与 Data Catalog 服务。 | 题库记录为正确选项 |
| B | Amazon Elastic File System (Amazon EFS) | Amazon EFS：托管弹性 NFS 文件系统，可被多个计算资源共享。 | 题库记录为非正确选项 |
| C | Amazon Redshift | Amazon Redshift：托管云数据仓库，用于大规模分析型查询。 | 题库记录为非正确选项 |
| D | Amazon QuickSight | Amazon QuickSight：云端 BI 与可视化分析服务。Amazon Q：AWS 的生成式 AI 助手家族，用于企业知识和开发者场景。 | 题库记录为正确选项 |
| E | Amazon Quantum Ledger Database (Amazon QLDB) | Amazon Q：AWS 的生成式 AI 助手家族，用于企业知识和开发者场景。 | 题库记录为非正确选项 |

### Q14.3-为什么题库会这样选

题库记录的正确选项定位为：AWS Glue：Serverless 数据集成/ETL 与 Data Catalog 服务。

Amazon QuickSight：云端 BI 与可视化分析服务。

Amazon Q：AWS 的生成式 AI 助手家族，用于企业知识和开发者场景。

它与题干要求的对象/约束直接对应。

其余选项虽然可能也属于同一大类，但主要解决不同问题。

---

---

## Q43-Analytics-AI-ML-IoT题

**题目：** A company has 5 TB of data stored in Amazon S3. The company plans to occasionally run queries on the data for analysis. Which AWS service should the company use to run these queries in the MOST cost-effective manner?。

**选项：**

- A. Amazon Redshift
- B. Amazon Athena
- C. Amazon Kinesis
- D. Amazon RDS

**主分类：** C4-23 Analytics-AI-ML-IoT题。

**题库记录答案：** `B`。

**需求/考点标签：** Object Storage / Cost Optimization。

**社区投票：** B 98%

### Q43.1-题干怎么拆

这道题先识别的不是某个服务名，而是这些约束：**Object Storage、Cost Optimization**。

判断时应该先找到与这些约束同层、同数据模型或同运维目标的服务，再排除“看起来也属于 AWS，但解决的是另一个层面问题”的选项。

### Q43.2-每个选项的定位

| 选项 | 题库内容 | 服务/概念定位 | 题库答案关系 |
|---|---|---|---|
| A | Amazon Redshift | Amazon Redshift：托管云数据仓库，用于大规模分析型查询。 | 题库记录为非正确选项 |
| B | Amazon Athena | Amazon Athena：Serverless 交互式 SQL 查询服务，典型为直接查询 S3 数据。 | 题库记录为正确选项 |
| C | Amazon Kinesis | Amazon Kinesis：实时数据流采集、处理与传输家族。 | 题库记录为非正确选项 |
| D | Amazon RDS | Amazon RDS：托管关系数据库服务，负责大量数据库基础设施运维。 | 题库记录为非正确选项 |

### Q43.3-为什么题库会这样选

题库记录的正确选项定位为：Amazon Athena：Serverless 交互式 SQL 查询服务，典型为直接查询 S3 数据。

它与题干要求的对象/约束直接对应。

其余选项虽然可能也属于同一大类，但主要解决不同问题。

---

---

## Q96-Analytics-AI-ML-IoT题

**题目：** A company wants to operate a data warehouse to analyze data without managing the data warehouse infrastructure. Which AWS service will meet this requirement?。

**选项：**

- A. Amazon Aurora
- B. Amazon Redshift Serverless
- C. AWS Lambda
- D. Amazon RDS

**主分类：** C4-23 Analytics-AI-ML-IoT题。

**题库记录答案：** `B`。

**需求/考点标签：** 数据仓库。

**社区投票：** B 100%

### Q96.1-题干怎么拆

这道题先识别的不是某个服务名，而是这些约束：**数据仓库**。

判断时应该先找到与这些约束同层、同数据模型或同运维目标的服务，再排除“看起来也属于 AWS，但解决的是另一个层面问题”的选项。

### Q96.2-每个选项的定位

| 选项 | 题库内容 | 服务/概念定位 | 题库答案关系 |
|---|---|---|---|
| A | Amazon Aurora | Amazon Aurora：AWS 云原生关系数据库，兼容 MySQL/PostgreSQL 生态，强调高性能与高可用。 | 题库记录为非正确选项 |
| B | Amazon Redshift Serverless | Amazon Redshift：托管云数据仓库，用于大规模分析型查询。 | 题库记录为正确选项 |
| C | AWS Lambda | AWS Lambda：事件驱动的 Serverless 函数运行环境，无需管理服务器。 | 题库记录为非正确选项 |
| D | Amazon RDS | Amazon RDS：托管关系数据库服务，负责大量数据库基础设施运维。 | 题库记录为非正确选项 |

### Q96.3-为什么题库会这样选

题库记录的正确选项定位为：Amazon Redshift：托管云数据仓库，用于大规模分析型查询。

它与题干要求的对象/约束直接对应。

其余选项虽然可能也属于同一大类，但主要解决不同问题。

---

---

## Q113-Analytics-AI-ML-IoT题

**题目：** A company wants an AWS service to provide product recommendations based on its customer data. Which AWS service will meet this requirement?。

**选项：**

- A. Amazon Polly
- B. Amazon Personalize
- C. Amazon Comprehend
- D. Amazon Rekognition

**主分类：** C4-23 Analytics-AI-ML-IoT题。

**题库记录答案：** `B`。

**社区投票：** B 100%

### Q113.1-题干怎么拆

现有题库没有提供独立 explanation。

这里按题干中的动作、对象和所有选项的服务定位进行比较。

### Q113.2-每个选项的定位

| 选项 | 题库内容 | 服务/概念定位 | 题库答案关系 |
|---|---|---|---|
| A | Amazon Polly | Amazon Polly：Text-to-Speech，文本转自然语音。 | 题库记录为非正确选项 |
| B | Amazon Personalize | Amazon Personalize：托管个性化推荐服务。项目资料提示当前考试范围需复核。 | 题库记录为正确选项 |
| C | Amazon Comprehend | Amazon Comprehend：自然语言处理与文本洞察服务。 | 题库记录为非正确选项 |
| D | Amazon Rekognition | Amazon Rekognition：图像和视频分析/计算机视觉服务。 | 题库记录为非正确选项 |

### Q113.3-为什么题库会这样选

题库记录的正确选项定位为：Amazon Personalize：托管个性化推荐服务。

项目资料提示当前考试范围需复核。

它与题干要求的对象/约束直接对应。

其余选项虽然可能也属于同一大类，但主要解决不同问题。

### Q113.4-⚠-争议/版本提示

- 涉及项目资料已提示需关注当前状态的词：amazon personalize。
- 本题同时收录到 `C4-27-旧题争议题与当前AWS差异.md`，不在这里强行替题库修正答案。

---

---

## Q166-Analytics-AI-ML-IoT题

**题目：** Which AWS service gives users the ability to build interactive business intelligence dashboards that include machine learning insights?。

**选项：**

- A. Amazon Athena
- B. Amazon Kendra
- C. Amazon QuickSight
- D. Amazon Redshift

**主分类：** C4-23 Analytics-AI-ML-IoT题。

**题库记录答案：** `C`。

**需求/考点标签：** 关系数据库高可用。

**社区投票：** C 100%

### Q166.1-题干怎么拆

这道题先识别的不是某个服务名，而是这些约束：**关系数据库高可用**。

判断时应该先找到与这些约束同层、同数据模型或同运维目标的服务，再排除“看起来也属于 AWS，但解决的是另一个层面问题”的选项。

### Q166.2-每个选项的定位

| 选项 | 题库内容 | 服务/概念定位 | 题库答案关系 |
|---|---|---|---|
| A | Amazon Athena | Amazon Athena：Serverless 交互式 SQL 查询服务，典型为直接查询 S3 数据。 | 题库记录为非正确选项 |
| B | Amazon Kendra | Amazon Kendra：面向企业内容的智能搜索服务。 | 题库记录为非正确选项 |
| C | Amazon QuickSight | Amazon QuickSight：云端 BI 与可视化分析服务。Amazon Q：AWS 的生成式 AI 助手家族，用于企业知识和开发者场景。 | 题库记录为正确选项 |
| D | Amazon Redshift | Amazon Redshift：托管云数据仓库，用于大规模分析型查询。 | 题库记录为非正确选项 |

### Q166.3-为什么题库会这样选

题库记录的正确选项定位为：Amazon QuickSight：云端 BI 与可视化分析服务。

Amazon Q：AWS 的生成式 AI 助手家族，用于企业知识和开发者场景。

它与题干要求的对象/约束直接对应。

其余选项虽然可能也属于同一大类，但主要解决不同问题。

---

---

## Q262-Analytics-AI-ML-IoT题

**题目：** Which of the following is a managed AWS service that is used specifically for extract, transform, and load (ETL) data?。

**选项：**

- A. Amazon Athena
- B. AWS Glue
- C. Amazon S3
- D. AWS Snowball Edge

**主分类：** C4-23 Analytics-AI-ML-IoT题。

**题库记录答案：** `B`。

**需求/考点标签：** ETL与数据目录。

**社区投票：** B 100%

### Q262.1-题干怎么拆

这道题先识别的不是某个服务名，而是这些约束：**ETL与数据目录**。

判断时应该先找到与这些约束同层、同数据模型或同运维目标的服务，再排除“看起来也属于 AWS，但解决的是另一个层面问题”的选项。

### Q262.2-每个选项的定位

| 选项 | 题库内容 | 服务/概念定位 | 题库答案关系 |
|---|---|---|---|
| A | Amazon Athena | Amazon Athena：Serverless 交互式 SQL 查询服务，典型为直接查询 S3 数据。 | 题库记录为非正确选项 |
| B | AWS Glue | AWS Glue：Serverless 数据集成/ETL 与 Data Catalog 服务。 | 题库记录为正确选项 |
| C | Amazon S3 | Amazon S3：高耐久、可扩展的对象存储，以 Bucket/Object 组织数据。 | 题库记录为非正确选项 |
| D | AWS Snowball Edge | AWS Snow Family：用于大规模离线数据迁移、边缘数据处理等的物理设备家族。 | 题库记录为非正确选项 |

### Q262.3-为什么题库会这样选

题库记录的正确选项定位为：AWS Glue：Serverless 数据集成/ETL 与 Data Catalog 服务。

它与题干要求的对象/约束直接对应。

其余选项虽然可能也属于同一大类，但主要解决不同问题。

---

---

## Q318-Analytics-AI-ML-IoT题

**题目：** A company has been storing monthly reports in an Amazon S3 bucket. The company exports the report data into comma- separated values (.csv) files. A developer wants to write a simple query that can read all of these files and generate a summary report. Which AWS service or feature should the developer use to meet these requirements with the LEAST amount of operational overhead?

**选项：**

- A. Amazon S3 Select
- B. Amazon Athena
- C. Amazon Redshift
- D. Amazon EC2

**主分类：** C4-23 Analytics-AI-ML-IoT题。

**题库记录答案：** `B`。

**需求/考点标签：** Object Storage。

**社区投票：** B 91%, A 9%。

### Q318.1-题干怎么拆

这道题先识别的不是某个服务名，而是这些约束：**Object Storage**。

判断时应该先找到与这些约束同层、同数据模型或同运维目标的服务，再排除“看起来也属于 AWS，但解决的是另一个层面问题”的选项。

### Q318.2-每个选项的定位

| 选项 | 题库内容 | 服务/概念定位 | 题库答案关系 |
|---|---|---|---|
| A | Amazon S3 Select | Amazon S3：高耐久、可扩展的对象存储，以 Bucket/Object 组织数据。 | 题库记录为非正确选项 |
| B | Amazon Athena | Amazon Athena：Serverless 交互式 SQL 查询服务，典型为直接查询 S3 数据。 | 题库记录为正确选项 |
| C | Amazon Redshift | Amazon Redshift：托管云数据仓库，用于大规模分析型查询。 | 题库记录为非正确选项 |
| D | Amazon EC2 | Amazon EC2：可配置虚拟服务器，适合需要 OS/实例级控制的计算工作负载。 | 题库记录为非正确选项 |

### Q318.3-为什么题库会这样选

题库记录的正确选项定位为：Amazon Athena：Serverless 交互式 SQL 查询服务，典型为直接查询 S3 数据。

它与题干要求的对象/约束直接对应。

其余选项虽然可能也属于同一大类，但主要解决不同问题。

---

## 本篇概述

- 本篇梳理了Analytics-AI-ML-IoT题相关的核心知识、适用场景与判断要点。
- 本篇梳理了Analytics-AI-ML-IoT题相关的核心知识、适用场景与判断要点。
- 本篇梳理了Analytics-AI-ML-IoT题相关的核心知识、适用场景与判断要点。
- 本篇梳理了Analytics-AI-ML-IoT题相关的核心知识、适用场景与判断要点。
- 本篇梳理了Analytics-AI-ML-IoT题相关的核心知识、适用场景与判断要点。
- 本篇梳理了Analytics-AI-ML-IoT题相关的核心知识、适用场景与判断要点。
- 本篇梳理了Analytics-AI-ML-IoT题相关的核心知识、适用场景与判断要点。

[返回本章总述](./00-总述.md)｜[查看本章概述](./99-概述.md)

---
title: "Cloud Technology & Services"
fullName: "Cloud Technology & Services"
description: "按业务用途识别计算、存储、数据库、网络、分析与 AI 服务，而不是只记产品名称。"
service: "Cloud Practitioner"
category: cloud-practitioner
kind: topic
lang: zh
topicKey: "Cloud Technology & Services"
frequency: "阶段性总结"
date: 2026-07-31
updated: 2026-08-05
tags: ["cloud-practitioner","Cloud Technology & Services","AWS"]
notionId: 3a6964dc-ce4a-817f-8834-c24908271ac1
notionUrl: https://app.notion.com/p/3a6964dcce4a817f8834c24908271ac1
notionUpdated: "2026-08-05T02:02:00.000Z"
---

## 一句话理解

按业务用途识别计算、存储、数据库、网络、分析与 AI 服务，而不是只记产品名称。

## 核心要点

- S3 是数据湖和对象存储；Redshift 是数据仓库；Athena 直接用 SQL 查询 S3。
- Glue Data Catalog 保存元数据；Glue ETL 清洗转换；Kinesis Streams 接收流，Firehose 自动交付。
- 预训练 AI 能力选 AWS AI Services；自定义模型选 SageMaker；基础模型 API 选 Bedrock。
- RDS/Aurora 处理关系型事务；DynamoDB 处理大规模低延迟 Key-Value；缓存用 DAX 或 ElastiCache。

## 考试重点

- Polly 念、Transcribe 写、Translate 换语言、Comprehend 懂文本、Textract 拆文档、Rekognition 看图。
- Multi-AZ 是高可用，Read Replica 是读取扩展；Query 通常比 Scan 高效。

## 常见误区

- 不要只凭产品名称选择服务，先确认数据类型、延迟、控制力、运维与成本限制。

## 重点记忆

**先看用途，再看服务；先区分职责，再排除相似选项。**

## 新增服务与迁移速查

| 需求 | 首选概念或服务 |
| --- | --- |
| 评估迁移商业案例 | Migration Evaluator |
| 发现服务器与依赖 | Application Discovery Service |
| 服务器块级复制 | AWS Transform MGN |
| 数据库全量与 CDC | AWS DMS；异构结构转换配合 SCT |
| 高速文件迁移 | AWS DataSync |
| SFTP / FTPS / FTP / AS2 | AWS Transfer Family |
| GraphQL 与实时数据 | AWS AppSync |
| Web / 移动应用构建托管 | AWS Amplify |
| 完整云桌面 / 应用串流 / 隔离浏览 | WorkSpaces / WorkSpaces Applications / Secure Browser |
| IoT 设备证书、MQTT 与规则路由 | AWS IoT Core |

迁移项目顺序记为 **Assess → Mobilize → Migrate & Modernize**，应用策略再从 7R 中选择。

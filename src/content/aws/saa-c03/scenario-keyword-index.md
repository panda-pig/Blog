---
title: "场景题关键词索引"
fullName: "Scenario Keyword Index"
description: "先识别业务目标和限制，再用关键词把候选服务缩小到最合适的架构模式。"
service: "SAA-C03"
category: saa-c03
kind: topic
lang: zh
topicKey: "场景题关键词索引"
frequency: "阶段性总结"
date: 2026-07-31
updated: 2026-07-31
tags: ["saa-c03","场景题关键词索引","AWS"]
notionId: 3a6964dc-ce4a-81d7-bfeb-ed10071385bc
notionUrl: https://app.notion.com/p/3a6964dcce4a81d7bfebed10071385bc
notionUpdated: "2026-07-30T08:08:30.476Z"
---

## 一句话理解

先识别业务目标和限制，再用关键词把候选服务缩小到最合适的架构模式。

## 核心要点

- 解耦/削峰 → SQS；扇出 → SNS + SQS；无服务器事件处理 → Lambda。
- 私有访问 AWS 服务 → VPC Endpoint；直接查询 S3 → Athena + Glue Catalog。
- 长期复杂 BI → Redshift；Serverless ETL → Glue；Spark/Hadoop → EMR。
- 多消费者与回放 → Kinesis Data Streams；低运维自动交付 → Data Firehose。
- 自定义模型 → SageMaker；基础模型 API → Bedrock；企业/开发助手 → Amazon Q。

## 考试重点

- 读题时依次标记：业务目标、强制限制、RTO/RPO、一致性、延迟、流量、运维、安全和成本。

## 常见误区

- 不要只凭产品名称选择服务，先确认数据类型、延迟、控制力、运维与成本限制。

## 重点记忆

**关键词只负责缩小范围，最终答案仍由限制条件决定。**

---
title: "数据分析与机器学习管道"
fullName: "Automated Data Analytics and Machine Learning Pipeline"
description: "把 DynamoDB 的持续变化送入 S3 数据湖，让同一份历史数据同时服务 Athena 分析与 SageMaker 训练。"
service: "Data Analytics & ML Pipeline"
category: architecture
kind: concept
lang: zh
topicKey: "数据分析与机器学习管道"
frequency: "考试频率 ⭐⭐⭐⭐⭐"
date: 2026-07-31
updated: 2026-07-31
tags: ["architecture","数据分析与机器学习管道","AWS"]
notionId: 3ad964dc-ce4a-811e-9a30-deace5b9866a
notionUrl: https://app.notion.com/p/3ad964dcce4a811e9a30deace5b9866a
notionUpdated: "2026-07-30T08:30:54.807Z"
---

## 基本信息

| 字段 | 内容 |
| --- | --- |
| 英文 | Data Analytics & ML Pipeline |
| 全称 | Automated Data Analytics and Machine Learning Pipeline |
| 中文释义 | 自动化数据分析与机器学习管道 |
| 日文释义 | 自動データ分析・機械学習パイプライン |
| 考试频率 | ⭐⭐⭐⭐⭐ |
| 易混淆 | DynamoDB / S3 / Kinesis Data Streams / Firehose / Glue / Athena / SageMaker |

## 一句话理解

把 DynamoDB 的持续变化送入 S3 数据湖，让同一份历史数据同时服务 Athena 分析与 SageMaker 训练。

## 核心要点

- 典型流程：DynamoDB → Kinesis Data Streams → Data Firehose → Lambda → S3 → Glue Catalog → Athena / SageMaker。
- DynamoDB 负责低延迟在线业务，S3 负责低成本历史存储与分析，避免频繁扫描生产表。
- Data Streams 负责摄取和保留变化，Firehose 负责缓冲与交付，Glue Catalog 负责元数据。
- 工作负载隔离、松耦合和同一份数据多用途是核心架构原则。

## 考试重点

- 不要让分析或训练任务频繁扫描线上 DynamoDB。
- 区分 Streams/Firehose、Catalog/ETL、Athena/Redshift 的职责。

## 常见误区

- 不要只凭产品名称选择服务，先确认数据类型、延迟、控制力、运维与成本限制。

## 重点记忆

**DynamoDB 管在线业务；S3 管历史；Athena 查；SageMaker 训。**

---
title: "Amazon Managed Service for Apache Flink"
fullName: "Amazon Managed Service for Apache Flink"
description: "对 Kinesis Data Streams 或 Kafka/MSK 中持续到达的数据做有状态实时计算。"
service: "Amazon Managed Service for Apache Flink"
category: analytics
kind: service
lang: zh
topicKey: "Amazon Managed Service for Apache Flink"
frequency: "考试频率 ⭐⭐⭐"
date: 2026-10-08
updated: 2026-10-08
tags: ["analytics","Amazon Managed Service for Apache Flink","AWS"]
notionId: 3ea964dc-ce4a-814d-8a10-f455ed95cdcb
notionUrl: https://app.notion.com/p/3ea964dcce4a814d8a10f455ed95cdcb
notionUpdated: "2026-09-29T05:03:39.405Z"
---
## 基本信息

| 字段 | 内容 |
| --- | --- |
| 英文 / 全称 | Amazon Managed Service for Apache Flink |
| 中文 | 托管实时流处理 |
| 日文 | マネージドリアルタイムストリーム処理 |
| 复习优先级 | 考试频率 ⭐⭐⭐ |
| 易混淆 | Kinesis Data Streams / Amazon Data Firehose / Glue Streaming ETL |

## 一句话理解

对 Kinesis Data Streams 或 Kafka/MSK 中持续到达的数据做有状态实时计算。

## 核心整理

托管运行 Java、Scala 或 SQL 的 Flink 应用，适合窗口聚合、实时指标、异常检测和持续转换。

## 学习重点

- Data Streams/MSK 保存并传输流，Flink 负责计算。
- Firehose 负责缓冲和交付，不是通用复杂流计算引擎。
- Flink 不能把 Firehose 当作直接 Source。
- Checkpoint 与 Snapshot 支持状态恢复。

## 常见误区

- 旧名是 Kinesis Data Analytics for Apache Flink。
- Studio Notebook、Flink Application 与旧版 SQL Application 不要混淆。

## 重点记忆

**Stream 是道路，Firehose 是运输车，Flink 是实时加工厂。**

---
title: "Amazon Kinesis Data Streams 与 Data Firehose"
fullName: "Amazon Kinesis Data Streams / Amazon Data Firehose"
description: "Data Streams 负责接收、保留和回放实时数据流；Data Firehose 负责低运维地缓冲并交付到分析目标。"
service: "Amazon Kinesis Data Streams & Amazon Data Firehose"
category: messaging
kind: service
lang: zh
topicKey: "Amazon Kinesis Data Streams & Data Firehose"
frequency: "考试频率 ⭐⭐⭐⭐"
date: 2026-07-31
updated: 2026-09-29
tags: ["messaging","Amazon Kinesis Data Streams & Data Firehose","AWS"]
notionId: 3a6964dc-ce4a-8106-bfc9-db1375ab325d
notionUrl: https://app.notion.com/p/3a6964dcce4a8106bfc9db1375ab325d
notionUpdated: "2026-09-28T06:40:09.985Z"
---

## 基本信息

| 字段 | 内容 |
| --- | --- |
| 英文 | Amazon Kinesis Data Streams & Amazon Data Firehose |
| 全称 | Amazon Kinesis Data Streams / Amazon Data Firehose |
| 中文释义 | 实时数据流与托管式数据交付 |
| 日文释义 | リアルタイムデータストリームとマネージドデータ配信 |
| 考试频率 | ⭐⭐⭐⭐ |
| 易混淆 | Kinesis Data Streams / Amazon Data Firehose / Amazon MSK |

## 一句话理解

Data Streams 负责接收、保留和回放实时数据流；Data Firehose 负责低运维地缓冲并交付到分析目标。

## 核心要点

- Data Streams 支持多个消费者、自定义处理和数据回放，容量与分片设计需要关注。
- Data Firehose 自动扩展并把数据交付到 S3、Redshift、OpenSearch 等目标，可调用 Lambda 做轻量转换。
- Firehose 会缓冲数据，因此是“近实时”而不是逐条立即送达。

## 考试重点

- 需要多消费者、自定义读取或回放时优先选择 Data Streams。
- 只需低运维地把流数据送到固定目标时优先选择 Data Firehose。

## 常见误区

- 不要只凭产品名称选择服务，先确认数据类型、延迟、控制力、运维与成本限制。

## 重点记忆

**Streams 负责流与回放；Firehose 负责缓冲与交付。**

+## 本轮补充：Streams 与 Firehose

- Kinesis Data Streams 是可重放实时流，Partition Key 决定 Shard，同一 Shard 内有序，保留期可扩展。
- Shared Throughput 与 Enhanced Fan-Out 的消费者吞吐模型不同。
- Amazon Data Firehose 是面向目标的近实时托管投递，会按大小或时间缓冲，并可转换、压缩、改格式。
- Firehose 投递 Redshift 时先写 S3 再由 COPY 加载；它不是让多个消费者任意重放的流。

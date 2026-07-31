---
title: "Kinesis Data Streams 与 Amazon Data Firehose"
fullName: "Kinesis Data Streams vs Amazon Data Firehose"
description: "两者都处理流数据，但 Data Streams 提供可读取和回放的流，Data Firehose 提供托管交付。"
service: "AWS Comparison"
category: compare
kind: comparison
lang: zh
topicKey: "Kinesis Data Streams vs Amazon Data Firehose"
frequency: "阶段性总结"
date: 2026-07-31
updated: 2026-07-31
tags: ["compare","Kinesis Data Streams vs Amazon Data Firehose","AWS"]
notionId: 3ad964dc-ce4a-810c-b5ec-dc6fe72875e5
notionUrl: https://app.notion.com/p/3ad964dcce4a810cb5ecdc6fe72875e5
notionUpdated: "2026-07-30T08:06:14.168Z"
---

## 一句话理解

两者都处理流数据，但 Data Streams 提供可读取和回放的流，Data Firehose 提供托管交付。

## 核心要点

- 多个消费者、自定义处理、严格控制读取和回放 → Data Streams。
- 自动扩展、缓冲并交付到 S3/Redshift/OpenSearch → Data Firehose。
- 复杂管道中两者可以同时出现：Streams 摄取，Firehose 交付。

## 考试重点

- 不要把 Firehose 的缓冲交付理解为每条消息立即到达。

## 常见误区

- 不要只凭产品名称选择服务，先确认数据类型、延迟、控制力、运维与成本限制。

## 重点记忆

**需要读流和回放选 Streams；只需送到目标选 Firehose。**

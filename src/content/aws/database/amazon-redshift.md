---
title: "Amazon Redshift"
fullName: "Amazon Redshift"
description: "面向长期、高频、复杂分析型 SQL 和 BI 工作负载的 AWS 云数据仓库。"
service: "Amazon Redshift"
category: database
kind: service
lang: zh
topicKey: "Amazon Redshift"
frequency: "考试频率 ⭐⭐⭐⭐"
date: 2026-07-31
updated: 2026-07-31
tags: ["database","Amazon Redshift","AWS"]
notionId: 3a6964dc-ce4a-81b0-9106-e96badf85a24
notionUrl: https://app.notion.com/p/3a6964dcce4a81b09106e96badf85a24
notionUpdated: "2026-07-30T08:01:27.015Z"
---

## 基本信息

| 字段 | 内容 |
| --- | --- |
| 英文 | Amazon Redshift |
| 全称 | Amazon Redshift |
| 中文释义 | 云数据仓库 |
| 日文释义 | クラウドデータウェアハウス |
| 考试频率 | ⭐⭐⭐⭐ |
| 易混淆 | RDS / Athena |

## 一句话理解

面向长期、高频、复杂分析型 SQL 和 BI 工作负载的 AWS 云数据仓库。

## 核心要点

- 采用面向分析的存储与执行方式，适合聚合大量历史数据。
- 常与 S3 数据湖、Glue、Data Firehose 和 QuickSight 组合。
- Redshift 不是在线交易数据库，不能替代面向 OLTP 的 RDS 或 DynamoDB。

## 考试重点

- “云数据仓库、复杂 BI、长期高频分析”通常指向 Redshift。
- 直接对 S3 做临时 SQL 查询通常选择 Athena。

## 常见误区

- 不要只凭产品名称选择服务，先确认数据类型、延迟、控制力、运维与成本限制。

## 重点记忆

**长期复杂分析用 Redshift；S3 临时查询用 Athena。**

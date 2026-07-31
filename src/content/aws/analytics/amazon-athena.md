---
title: "Amazon Athena"
fullName: "Amazon Athena"
description: "无需管理服务器，直接使用标准 SQL 查询 S3 中的数据。"
service: "Amazon Athena"
category: analytics
kind: service
lang: zh
topicKey: "Amazon Athena"
frequency: "考试频率 ⭐⭐⭐⭐"
date: 2026-07-31
updated: 2026-07-31
tags: ["analytics","Amazon Athena","AWS"]
notionId: 3a6964dc-ce4a-8150-90a6-c97531a9499b
notionUrl: https://app.notion.com/p/3a6964dcce4a815090a6c97531a9499b
notionUpdated: "2026-07-30T08:01:19.200Z"
---

## 基本信息

| 字段 | 内容 |
| --- | --- |
| 英文 | Amazon Athena |
| 全称 | Amazon Athena |
| 中文释义 | S3 无服务器 SQL 查询 |
| 日文释义 | S3 サーバーレス SQL |
| 考试频率 | ⭐⭐⭐⭐ |
| 易混淆 | Redshift / EMR |

## 一句话理解

无需管理服务器，直接使用标准 SQL 查询 S3 中的数据。

## 核心要点

- Athena 读取 S3 数据，常用 Glue Data Catalog 提供表定义和 Schema。
- 费用与扫描数据量相关；分区、压缩和 Parquet/ORC 等列式格式可以降本提速。
- Athena 是查询服务，不是保存数据的数据仓库。

## 考试重点

- 看到“Serverless SQL、直接查询 S3、临时分析”优先想到 Athena。
- 高频复杂 BI 与稳定数据仓库负载应比较 Redshift。

## 常见误区

- 不要只凭产品名称选择服务，先确认数据类型、延迟、控制力、运维与成本限制。

## 重点记忆

**S3 存数据，Glue 描述数据，Athena 用 SQL 查询数据。**

---
title: "AWS Glue"
fullName: "AWS Glue"
description: "无服务器数据集成服务：Data Catalog 描述数据，Glue ETL 清洗和转换数据。"
service: "AWS Glue"
category: analytics
kind: service
lang: zh
topicKey: "AWS Glue"
frequency: "考试频率 ⭐⭐⭐⭐"
date: 2026-07-31
updated: 2026-07-31
tags: ["analytics","AWS Glue","AWS"]
notionId: 3a6964dc-ce4a-81ca-b19a-f1c22750d980
notionUrl: https://app.notion.com/p/3a6964dcce4a81cab19af1c22750d980
notionUpdated: "2026-07-30T08:01:16.710Z"
---

## 基本信息

| 字段 | 内容 |
| --- | --- |
| 英文 | AWS Glue |
| 全称 | AWS Glue |
| 中文释义 | 无服务器数据集成与 ETL |
| 日文释义 | サーバーレス ETL |
| 考试频率 | ⭐⭐⭐⭐ |
| 易混淆 | EMR / Data Pipeline |

## 一句话理解

无服务器数据集成服务：Data Catalog 描述数据，Glue ETL 清洗和转换数据。

## 核心要点

- Crawler 扫描数据源并推断 Schema，Data Catalog 保存位置、格式、列和类型等元数据。
- Glue ETL 负责提取、转换和加载数据，可为 Athena、Redshift 或 ML 准备数据集。
- Catalog 不保存主要业务数据；实际数据通常位于 S3 或其他数据源。

## 考试重点

- “元数据、Schema、数据目录”指向 Glue Data Catalog。
- “Serverless ETL、数据清洗转换”指向 AWS Glue；需要完整 Spark/Hadoop 控制时比较 EMR。

## 常见误区

- 不要只凭产品名称选择服务，先确认数据类型、延迟、控制力、运维与成本限制。

## 重点记忆

**Catalog 是目录；ETL 是加工厂。**

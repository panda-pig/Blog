---
title: "AWS Glue"
fullName: "AWS Glue"
description: "A serverless data integration service: Data Catalog describes data, while Glue ETL cleans and transforms it."
service: "AWS Glue"
category: analytics
kind: service
lang: en
topicKey: "AWS Glue"
frequency: "Exam frequency ⭐⭐⭐⭐"
date: 2026-07-31
updated: 2026-07-31
tags: ["analytics","AWS Glue","AWS"]
notionId: 3a6964dc-ce4a-81ca-b19a-f1c22750d980
notionUrl: https://app.notion.com/p/3a6964dcce4a81cab19af1c22750d980
notionUpdated: "2026-07-30T08:01:16.710Z"
---

## Basic Information

| Field | Details |
| --- | --- |
| English name | AWS Glue |
| Full name | AWS Glue |
| Chinese description | 无服务器数据集成与 ETL |
| Japanese description | サーバーレス ETL |
| Exam frequency | ⭐⭐⭐⭐ |
| Often confused with | EMR / Data Pipeline |

## In one sentence

A serverless data integration service: Data Catalog describes data, while Glue ETL cleans and transforms it.

## Key points

- Crawlers inspect sources and infer schemas; Data Catalog stores metadata such as location, format, columns, and types.
- Glue ETL extracts, transforms, and loads data for Athena, Redshift, or machine learning.
- The Catalog does not store primary business data; the actual data remains in S3 or another source.

## Exam focus

- Metadata, schema, and data catalog point to Glue Data Catalog.
- Serverless ETL and transformation point to Glue; compare EMR when full Spark or Hadoop control is needed.

## Common pitfalls

- Do not choose by product name alone; confirm data type, latency, control, operations, and cost constraints.

## Remember

**Catalog is the directory; ETL is the processing plant.**

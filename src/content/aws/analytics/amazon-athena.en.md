---
title: "Amazon Athena"
fullName: "Amazon Athena"
description: "Run standard SQL directly against data in S3 without managing servers."
service: "Amazon Athena"
category: analytics
kind: service
lang: en
topicKey: "Amazon Athena"
frequency: "Exam frequency ⭐⭐⭐⭐"
date: 2026-07-31
updated: 2026-07-31
tags: ["analytics","Amazon Athena","AWS"]
notionId: 3a6964dc-ce4a-8150-90a6-c97531a9499b
notionUrl: https://app.notion.com/p/3a6964dcce4a815090a6c97531a9499b
notionUpdated: "2026-07-30T08:01:19.200Z"
---

## Basic Information

| Field | Details |
| --- | --- |
| English name | Amazon Athena |
| Full name | Amazon Athena |
| Chinese description | S3 无服务器 SQL 查询 |
| Japanese description | S3 サーバーレス SQL |
| Exam frequency | ⭐⭐⭐⭐ |
| Often confused with | Redshift / EMR |

## In one sentence

Run standard SQL directly against data in S3 without managing servers.

## Key points

- Athena reads S3 data and commonly uses Glue Data Catalog for table definitions and schemas.
- Cost follows bytes scanned; partitions, compression, and columnar formats such as Parquet or ORC improve cost and speed.
- Athena is a query service, not a data warehouse that stores the data.

## Exam focus

- Serverless SQL, direct S3 queries, and ad hoc analysis point to Athena.
- Compare Redshift for frequent complex BI and sustained warehouse workloads.

## Common pitfalls

- Do not choose by product name alone; confirm data type, latency, control, operations, and cost constraints.

## Remember

**S3 stores it, Glue describes it, Athena queries it with SQL.**

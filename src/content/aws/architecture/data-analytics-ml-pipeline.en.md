---
title: "Data Analytics & ML Pipeline"
fullName: "Automated Data Analytics and Machine Learning Pipeline"
description: "Send ongoing DynamoDB changes into an S3 data lake so the same history supports Athena analytics and SageMaker training."
service: "Data Analytics & ML Pipeline"
category: architecture
kind: concept
lang: en
topicKey: "数据分析与机器学习管道"
frequency: "Exam frequency ⭐⭐⭐⭐⭐"
date: 2026-07-31
updated: 2026-07-31
tags: ["architecture","数据分析与机器学习管道","AWS"]
notionId: 3ad964dc-ce4a-811e-9a30-deace5b9866a
notionUrl: https://app.notion.com/p/3ad964dcce4a811e9a30deace5b9866a
notionUpdated: "2026-07-30T08:30:54.807Z"
---

## Basic Information

| Field | Details |
| --- | --- |
| English name | Data Analytics & ML Pipeline |
| Full name | Automated Data Analytics and Machine Learning Pipeline |
| Chinese description | 自动化数据分析与机器学习管道 |
| Japanese description | 自動データ分析・機械学習パイプライン |
| Exam frequency | ⭐⭐⭐⭐⭐ |
| Often confused with | DynamoDB / S3 / Kinesis Data Streams / Firehose / Glue / Athena / SageMaker |

## In one sentence

Send ongoing DynamoDB changes into an S3 data lake so the same history supports Athena analytics and SageMaker training.

## Key points

- Typical flow: DynamoDB → Kinesis Data Streams → Data Firehose → Lambda → S3 → Glue Catalog → Athena / SageMaker.
- DynamoDB serves low-latency transactions; S3 holds low-cost history for analytics, avoiding repeated production-table scans.
- Data Streams ingests and retains changes, Firehose buffers and delivers, and Glue Catalog manages metadata.
- Workload isolation, loose coupling, and one dataset for multiple uses are the core principles.

## Exam focus

- Do not let analytics or training repeatedly scan the production DynamoDB table.
- Separate the roles of Streams versus Firehose, Catalog versus ETL, and Athena versus Redshift.

## Common pitfalls

- Do not choose by product name alone; confirm data type, latency, control, operations, and cost constraints.

## Remember

**DynamoDB runs the business; S3 keeps history; Athena queries; SageMaker trains.**

---
title: "Design High-Performing Architectures"
fullName: "Design High-Performing Architectures"
description: "Match compute, storage, database, networking, and caching choices to the workload’s access patterns and bottlenecks."
service: "SAA-C03"
category: saa-c03
kind: topic
lang: en
topicKey: "高性能架构设计"
frequency: "Study summary"
date: 2026-07-30
updated: 2026-08-05
tags: ["saa-c03","Design High-Performing Architectures","AWS"]
notionId: 3a6964dc-ce4a-8177-89e9-de191f6694c9
notionUrl: https://app.notion.com/p/3a6964dcce4a817789e9de191f6694c9
notionUpdated: "2026-08-05T02:04:00.000Z"
---

## In one sentence

> Match compute, storage, database, networking, and caching choices to the workload’s access patterns and bottlenecks.

## Key points

- Scale horizontally when possible and use managed or serverless services where their scaling model fits.
- Choose storage by object, block, or file access and databases by relational, key-value, document, graph, or cache patterns.
- Use CloudFront, read replicas, DAX, or ElastiCache only when their cache layer matches the data and consistency needs.

## Exam takeaway

> Measure latency, throughput, concurrency, and cost; do not optimize from service names alone.

## Analytics & AI/ML performance

| Performance or architecture need | Start with |
| --- | --- |
| Ad hoc SQL directly over S3 | Athena + partitions / columnar formats / compression |
| Sustained, frequent, complex analytics and BI | Amazon Redshift |
| Real-time streams, multiple consumers, custom processing | Kinesis Data Streams |
| Low-operations near-real-time delivery to S3 and other targets | Amazon Data Firehose |
| Serverless ETL and data cataloging | AWS Glue |
| Large-scale custom Spark or Hadoop processing | Amazon EMR |
| Train and deploy models with proprietary data | Amazon SageMaker AI |
| Build generative-AI apps through managed foundation-model APIs | Amazon Bedrock |

### Design reminders

- Isolate production DynamoDB traffic from large historical analytics and training workloads.
- Athena scan volume depends on partitioning, compression, and file format.
- Firehose buffers records, so verify whether its delivery latency meets the requirement.
- Training and inference are different workloads; plan compute, scaling, and monitoring separately.
- When model quality drops, check data quality, schema, and training-data freshness first.

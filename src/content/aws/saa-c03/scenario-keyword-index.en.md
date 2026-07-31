---
title: "Scenario Keyword Index"
fullName: "Scenario Keyword Index"
description: "Identify the business goal and constraints first, then use keywords to narrow the service and architecture choices."
service: "SAA-C03"
category: saa-c03
kind: topic
lang: en
topicKey: "场景题关键词索引"
frequency: "Stage summary"
date: 2026-07-31
updated: 2026-07-31
tags: ["saa-c03","场景题关键词索引","AWS"]
notionId: 3a6964dc-ce4a-81d7-bfeb-ed10071385bc
notionUrl: https://app.notion.com/p/3a6964dcce4a81d7bfebed10071385bc
notionUpdated: "2026-07-30T08:08:30.476Z"
---

## In one sentence

Identify the business goal and constraints first, then use keywords to narrow the service and architecture choices.

## Key points

- Decoupling or buffering → SQS; fan-out → SNS + SQS; serverless event processing → Lambda.
- Private access to AWS services → VPC Endpoint; direct S3 SQL → Athena + Glue Catalog.
- Sustained complex BI → Redshift; serverless ETL → Glue; Spark or Hadoop → EMR.
- Multiple consumers and replay → Kinesis Data Streams; low-operations delivery → Data Firehose.
- Custom models → SageMaker; foundation-model APIs → Bedrock; enterprise or developer assistants → Amazon Q.

## Exam focus

- Mark business goal, hard constraints, RTO/RPO, consistency, latency, traffic, operations, security, and cost.

## Common pitfalls

- Do not choose by product name alone; confirm data type, latency, control, operations, and cost constraints.

## Remember

**Keywords narrow the field; constraints still decide the final answer.**

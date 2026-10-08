---
title: "AWS Lambda"
fullName: "AWS Lambda"
description: "Runs function code in response to events without managing servers, with automatic scaling and usage-based billing."
service: "AWS Lambda"
category: compute
kind: service
lang: en
topicKey: "AWS Lambda"
frequency: "Exam frequency ⭐⭐⭐⭐⭐"
date: 2026-07-30
updated: 2026-10-08
tags: ["compute","AWS Lambda","AWS"]
notionId: 3a6964dc-ce4a-81f9-8d71-f17f423387eb
notionUrl: https://app.notion.com/p/3a6964dcce4a81f98d71f17f423387eb
notionUpdated: "2026-10-08T02:19:16.603Z"
---

## Basic Information

| Field | Details |
| --- | --- |
| English name | AWS Lambda |
| Full name | AWS Lambda |
| Chinese description | 无服务器函数计算 |
| Japanese description | AWS Lambda（ラムダ） |
| Exam frequency | ⭐⭐⭐⭐⭐ |
| Often confused with | EC2 / Fargate / AWS Batch |

## In one sentence

> Runs function code in response to events without managing servers, with automatic scaling and usage-based billing.

## Key points

- Lambda is a FaaS and serverless compute service for short-lived, event-driven work.
- Common triggers include S3, SQS, EventBridge, API Gateway, and DynamoDB Streams.
- A single invocation can run for up to 15 minutes; long-running jobs usually fit Batch, ECS/Fargate, or EC2 better.

## Exam takeaway

> For SQS integrations, remember execution roles, batch processing, idempotency, visibility timeout, retries, and DLQs.

## Update: concurrency and startup latency

- **Reserved concurrency** reserves and caps function concurrency. Setting it to zero continuously throttles the function, but does not pre-initialize environments.
- **Provisioned concurrency** keeps a configured number of environments initialized to reduce cold starts. It requires a version or alias and adds cost.
- **SnapStart** snapshots initialized memory and disk state for a published version and restores it on invocation; it is not a concurrency quota.
- Treat the regional concurrency pool, function caps, startup latency, retries, and downstream capacity as separate design concerns.

## Update: event-processing boundaries

- Event source mappings poll SQS, Kinesis, or DynamoDB Streams and invoke functions in batches; design batch size, visibility or retention, concurrency, and downstream capacity together.
- Asynchronous invocation supports success and failure destinations; queue retries, DLQs, and partial batch responses are different mechanisms.
- Batch consumers should be idempotent and define policies for poison messages, checkpoints, and replay scope.

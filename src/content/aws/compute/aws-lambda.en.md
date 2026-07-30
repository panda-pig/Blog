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
updated: 2026-07-30
tags: ["compute","AWS Lambda","AWS"]
notionId: 3a6964dc-ce4a-81f9-8d71-f17f423387eb
notionUrl: https://app.notion.com/p/3a6964dcce4a81f98d71f17f423387eb
notionUpdated: "2026-07-30T01:52:42.048Z"
---

## Basic Information

| Field | Details |
| --- | --- |
| English name | AWS Lambda |
| Full name | AWS Lambda |
| Chinese name | 无服务器函数计算 |
| Japanese name | AWS Lambda（ラムダ） |
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

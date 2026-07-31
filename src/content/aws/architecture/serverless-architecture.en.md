---
title: "Serverless Architecture"
fullName: "Serverless Architecture"
description: "Uses managed, on-demand services to reduce server management while retaining application-level security and reliability duties."
service: "Architecture"
category: architecture
kind: topic
lang: en
topicKey: "无服务器架构"
frequency: "Exam frequency ⭐⭐⭐⭐⭐"
date: 2026-07-30
updated: 2026-07-30
tags: ["Architecture","Serverless","Lambda"]
notionId: 3a6964dc-ce4a-8102-802a-c8a0a767c8f3
notionUrl: https://app.notion.com/p/3a6964dcce4a8102802ac8a0a767c8f3
notionUpdated: "2026-07-30T01:08:04.047Z"
---

## Basic Information

| Field | Details |
| --- | --- |
| English name | Serverless Architecture |
| Full name | Serverless Architecture |
| Chinese description | 无服务器架构 |
| Japanese description | サーバーレスアーキテクチャ |
| Exam frequency | ⭐⭐⭐⭐⭐ |
| Often confused with | 容器 / EC2 |

## In one sentence

> Serverless does not mean no servers; AWS manages server provisioning, maintenance, and scaling.

## Typical components

- API Gateway or EventBridge accepts requests and events.
- Lambda runs short event-driven functions; Fargate runs containers without managing EC2.
- SQS / SNS buffers, decouples, or broadcasts; DynamoDB / S3 stores data.
- Step Functions manages workflows, while CloudWatch provides logs, metrics, and alarms.

## Lambda, Fargate, and EC2

- Lambda: short, event-driven functions.
- Fargate: containers without EC2 management; ECS or EKS still orchestrates them.
- EC2: long-running processes, special OS needs, or maximum control.

## Exam focus

- Lambda processing SQS is at least once, so functions should be idempotent with correct Visibility Timeout and DLQ settings.
- Serverless still requires IAM, networking, data, retries, concurrency, monitoring, and cost management.
- Automatic scaling does not guarantee downstream databases can handle the same concurrency.
- Choose compute from execution duration, runtime model, and control requirements.

## Common misconceptions

- Serverless is neither free nor limited to Lambda.
- Fargate is serverless compute, not a container orchestrator.
- Lambda is not for long-running processes, and every container app need not become functions.

## Key takeaway

> **Serverless shifts management responsibility: functions → Lambda, containers → Fargate, maximum control → EC2.**

## Related services

Lambda, Fargate, ECS, EKS, SQS, EventBridge, API Gateway, DynamoDB, CloudWatch.

---
title: "Amazon SQS"
fullName: "Amazon Simple Queue Service"
description: "A managed message queue that decouples producers and consumers and buffers work for reliable asynchronous processing."
service: "Amazon SQS"
category: messaging
kind: service
lang: en
topicKey: "Amazon SQS"
frequency: "Exam frequency ⭐⭐⭐⭐⭐"
date: 2026-07-30
updated: 2026-09-29
tags: ["messaging","Amazon SQS","AWS"]
notionId: 3a6964dc-ce4a-81ba-bf24-f388c5cddd42
notionUrl: https://app.notion.com/p/3a6964dcce4a81babf24f388c5cddd42
notionUpdated: "2026-09-28T06:40:06.316Z"
---

## Basic Information

| Field | Details |
| --- | --- |
| English name | Amazon SQS |
| Full name | Amazon Simple Queue Service |
| Chinese description | 消息队列服务 |
| Japanese description | マネージドメッセージキューサービス |
| Exam frequency | ⭐⭐⭐⭐⭐ |
| Often confused with | SNS / EventBridge / Kinesis |

## In one sentence

> A managed message queue that decouples producers and consumers and buffers work for reliable asynchronous processing.

## Key points

- Standard queues provide very high throughput with at-least-once delivery and possible duplicates or reordering.
- FIFO queues preserve order within message groups and support deduplication with lower throughput limits.
- Visibility Timeout hides a received message while it is processed; successful consumers delete it.

## Exam takeaway

> Use DLQs, retries, idempotent consumers, and suitable retention and visibility settings.

+## Update: polling, ordering, and idempotency

- Long polling waits up to 20 seconds and reduces empty responses and API cost, but it does not extend visibility timeout.
- In FIFO queues, the message group ID defines the ordering boundary: strict order within a group and parallelism across groups.
- Deduplication IDs address producer duplicates; group IDs address order and concurrency. Consumers still need idempotency for at-least-once delivery.
- Size visibility timeout for normal processing and combine retries with a DLQ and redrive policy.

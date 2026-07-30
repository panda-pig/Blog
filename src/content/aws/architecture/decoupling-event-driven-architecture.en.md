---
title: "Decoupling & Event-Driven Architecture"
fullName: "Decoupling & Event-Driven Architecture"
description: "Uses queues, events, and stable contracts to separate upstream and downstream speed, failure, and scaling boundaries."
service: "Architecture"
category: architecture
kind: topic
lang: en
topicKey: "解耦与事件驱动"
frequency: "Exam frequency ⭐⭐⭐⭐⭐"
date: 2026-07-30
updated: 2026-07-30
tags: ["Architecture","Decoupling","Event-Driven"]
notionId: 3a6964dc-ce4a-815b-9c05-e0a6657c8bc5
notionUrl: https://app.notion.com/p/3a6964dcce4a815b9c05e0a6657c8bc5
notionUpdated: "2026-07-30T01:08:05.518Z"
---

## Basic Information

| Field | Details |
| --- | --- |
| English name | Decoupling & Event-Driven Architecture |
| Full name | Decoupling & Event-Driven Architecture |
| Chinese name | 解耦与事件驱动架构 |
| Japanese name | 疎結合とイベント駆動 |
| Exam frequency | ⭐⭐⭐⭐⭐ |
| Often confused with | 同步调用 |

## In one sentence

> Decoupling lets producers and consumers change and scale independently while containing local failures behind stable boundaries.

## Core purpose

- SQS provides queues, buffering, and load leveling; SNS provides push delivery and fan-out.
- EventBridge routes by event content and rules; Step Functions explicitly orchestrates multi-step workflows.
- Asynchronous processing lets each side run at its own pace, usually with eventual consistency.

## Reliable processing

- At-least-once delivery can duplicate messages, so consumers must be idempotent.
- Visibility Timeout should cover processing time; retries and a DLQ isolate failed messages.
- Monitor backlog, age of the oldest message, failure rate, and processing latency.
- Apply backpressure so producers cannot overwhelm consumers indefinitely.

## Exam focus

- Backlog or buffer usually points to SQS; fan-out to SNS; event patterns to EventBridge.
- SQS is not broadcast, SNS is not a traditional durable queue, and EventBridge is not primarily backlog storage.
- More retries are not automatically safer; prevent retry storms and poison messages.

## Key takeaway

> **Reliable async = idempotency + retries + DLQ + monitoring; decoupling = independent change + fault isolation.**

## Related services

Amazon SQS, Amazon SNS, Amazon EventBridge, AWS Lambda, Step Functions, CloudWatch.

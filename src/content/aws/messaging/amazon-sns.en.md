---
title: "Amazon SNS"
fullName: "Amazon Simple Notification Service"
description: "A managed publish/subscribe service that fans one message out to multiple subscribers."
service: "Amazon SNS"
category: messaging
kind: service
lang: en
topicKey: "Amazon SNS"
frequency: "Exam frequency ⭐⭐⭐⭐⭐"
date: 2026-07-30
updated: 2026-07-30
tags: ["messaging","Amazon SNS","AWS"]
notionId: 3a6964dc-ce4a-815d-a70c-efddf8cc7d63
notionUrl: https://app.notion.com/p/3a6964dcce4a815da70cefddf8cc7d63
notionUpdated: "2026-07-23T07:21:18.671Z"
---

## Basic Information

| Field | Details |
| --- | --- |
| English name | Amazon SNS |
| Full name | Amazon Simple Notification Service |
| Chinese description | 通知与发布订阅服务 |
| Japanese description | 通知・パブリッシュ／サブスクライブサービス |
| Exam frequency | ⭐⭐⭐⭐⭐ |
| Often confused with | SQS / EventBridge |

## In one sentence

> A managed publish/subscribe service that fans one message out to multiple subscribers.

## Key points

- Publishers send to a topic, and SNS pushes messages to subscribers such as SQS, Lambda, HTTP/S, email, or SMS.
- Fan-out commonly uses one SNS topic with multiple SQS queues so each consumer gets its own copy.
- SNS is push-based and does not replace a queue when buffering or independent retries are needed.

## Exam takeaway

> Subscription filters can route only matching messages to each subscriber.

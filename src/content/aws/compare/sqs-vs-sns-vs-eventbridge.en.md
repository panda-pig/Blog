---
title: "SQS vs SNS vs EventBridge"
fullName: "SQS vs SNS vs EventBridge"
description: "Use SQS to queue work, SNS to fan out notifications, and EventBridge to route structured events by rules."
service: "AWS Compare"
category: compare
kind: compare
lang: en
topicKey: "SQS vs SNS vs EventBridge"
frequency: "Study summary"
date: 2026-07-30
updated: 2026-07-30
tags: ["compare","SQS vs SNS vs EventBridge","AWS"]
notionId: 3a6964dc-ce4a-81fb-83ee-e98070269337
notionUrl: https://app.notion.com/p/3a6964dcce4a81fb83eee98070269337
notionUpdated: "2026-07-23T07:24:12.397Z"
---

## In one sentence

> Use SQS to queue work, SNS to fan out notifications, and EventBridge to route structured events by rules.

## Key points

- SQS buffers messages for consumers to pull and supports independent retries and DLQs.
- SNS pushes one published message to multiple subscribers.
- EventBridge matches event patterns and sends events to selected targets across AWS, applications, and SaaS.

## Exam takeaway

> A common design is EventBridge or SNS for routing, with SQS queues protecting individual consumers.

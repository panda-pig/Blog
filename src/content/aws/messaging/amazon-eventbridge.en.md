---
title: "Amazon EventBridge"
fullName: "Amazon EventBridge"
description: "A managed event bus that routes events from AWS services, applications, and SaaS sources using rules."
service: "Amazon EventBridge"
category: messaging
kind: service
lang: en
topicKey: "Amazon EventBridge"
frequency: "Exam frequency ⭐⭐⭐⭐"
date: 2026-07-30
updated: 2026-09-29
tags: ["messaging","Amazon EventBridge","AWS"]
notionId: 3a6964dc-ce4a-8146-be57-defb6099f3b1
notionUrl: https://app.notion.com/p/3a6964dcce4a8146be57defb6099f3b1
notionUpdated: "2026-09-28T04:26:36.036Z"
---

## Basic Information

| Field | Details |
| --- | --- |
| English name | Amazon EventBridge |
| Full name | Amazon EventBridge |
| Chinese description | 事件总线与事件路由服务 |
| Japanese description | Amazon EventBridge（イベントバス） |
| Exam frequency | ⭐⭐⭐⭐ |
| Often confused with | SNS / SQS / CloudWatch Events |

## In one sentence

> A managed event bus that routes events from AWS services, applications, and SaaS sources using rules.

## Key points

- Event buses receive events and rules match their structure or content to select targets.
- Targets include Lambda, Step Functions, SQS, SNS, API destinations, and many AWS services.
- EventBridge supports loosely coupled event-driven architecture and scheduled events.

## Exam takeaway

> Use SNS for simple fan-out notifications, SQS for durable queueing, and EventBridge for rule-based event routing.

+## Update: event routing and replay

- EventBridge matches event patterns and routes events to multiple targets for cross-service integration and event-driven architecture.
- Archive and Replay redelivers historical events; it is not a backup of business data.
- EventBridge does not provide SQS-style consumer polling and buffering. Use SQS as a target when explicit backlog and backpressure are required.
- At-least-once delivery still requires idempotent targets, retries, and DLQs.

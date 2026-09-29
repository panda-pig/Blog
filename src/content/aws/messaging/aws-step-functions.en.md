---
title: "AWS Step Functions"
fullName: "AWS Step Functions"
description: "Uses state machines to coordinate Lambda, service calls, and short- or long-running workflows."
service: "AWS Step Functions"
category: messaging
kind: service
lang: en
topicKey: "AWS Step Functions"
frequency: "Exam frequency ⭐⭐⭐⭐"
date: 2026-07-31
updated: 2026-09-29
tags: ["messaging", "AWS Step Functions", "AWS"]
notionId: 3a6964dc-ce4a-8187-bc25-ef5873cbb0dd
notionUrl: https://app.notion.com/p/3a6964dcce4a8187bc25ef5873cbb0dd
notionUpdated: "2026-09-28T07:51:38.751Z"
---

## Basic information

| Field | Content |
| --- | --- |
| English | AWS Step Functions |
| Full name | AWS Step Functions |
| Chinese | 工作流编排 |
| Japanese | ワークフローオーケストレーション |
| Exam frequency | ⭐⭐⭐⭐ |
| Often confused with | SQS / SWF |

## In one sentence

Uses state machines to coordinate Lambda, service calls, and short- or long-running workflows.

## Stage summary

- **Core role**：Uses state machines to coordinate Lambda, service calls, and short- or long-running workflows.
- **Exam frequency**：4 / 5
- **Compare with**：SQS / SWF

## Memory hook

AWS Step Functions = Uses state machines to coordinate Lambda, service calls, and short- or long-running workflows.

+## Update: orchestration boundaries

- A state machine models sequence, choice, parallel, wait, retry/catch, and callback or human approval.
- Step Functions orchestrates work; it does not execute application code. Lambda, ECS, APIs, or other services perform the computation.
- Retries should separate transient from permanent failures, while catch paths lead to compensation, manual handling, or a DLQ.
- Long workflows need explicit idempotency, execution history, timeouts, compensation, and sensitive-data boundaries.

---
title: "AWS Health Dashboard"
fullName: "AWS Health Dashboard"
description: "Show AWS service events, planned changes, and notifications that affect your account and resources."
service: "AWS Health Dashboard"
category: monitoring
kind: service
lang: en
topicKey: "AWS Health Dashboard"
frequency: "考试频率 ⭐⭐⭐⭐"
date: 2026-08-01
updated: 2026-08-01
tags: ["monitoring", "AWS Health Dashboard", "AWS"]
notionId: 3a6964dc-ce4a-811e-9b8d-c28168427289
notionUrl: https://app.notion.com/p/3a6964dcce4a811e9b8dc28168427289
notionUpdated: "2026-07-31T08:18:17.495Z"
---

## Basic Information

| Field | Value |
| --- | --- |
| English | AWS Health Dashboard |
| Full name | AWS Health Dashboard |
| Chinese | 账户相关的 AWS 服务健康与事件通知 |
| Japanese | AWS Health Dashboard（アカウント別のサービス稼働状況） |
| Exam frequency | ⭐⭐⭐⭐ |
| Often confused with | Amazon CloudWatch / AWS Service Health |

## One-line summary

Show AWS service events, planned changes, and notifications that affect your account and resources.

## Core capabilities and use cases

- Shows service events, planned changes, and account notifications.
- Provides account- and resource-specific details with recommended actions.
- Helps distinguish an AWS-side incident from an application or workload problem.
- The Health API and EventBridge can distribute events and trigger operational workflows.
- Typical cases include scheduled maintenance, instance retirement, and lifecycle events.

## Exam focus and common pitfalls

- CloudWatch observes your metrics and logs; AWS Health reports official AWS events affecting you.
- Public service health information and personalized account impact have different granularity.
- A Health event still requires impact assessment and action.

## Key takeaway

**CloudWatch watches your resources; AWS Health tells you whether official AWS events affect them.**

---
title: "Amazon CloudWatch"
fullName: "Amazon CloudWatch"
description: "Collect metrics and logs, visualize dashboards, and trigger alarms to observe current system health."
service: "Amazon CloudWatch"
category: monitoring
kind: service
lang: en
topicKey: "Amazon CloudWatch"
frequency: "考试频率 ⭐⭐⭐⭐⭐"
date: 2026-08-01
updated: 2026-08-01
tags: ["monitoring", "Amazon CloudWatch", "AWS"]
notionId: 3a6964dc-ce4a-8127-ba14-fcf7b8754155
notionUrl: https://app.notion.com/p/3a6964dcce4a8127ba14fcf7b8754155
notionUpdated: "2026-07-31T08:22:47.242Z"
---

## Basic Information

| Field | Value |
| --- | --- |
| English | Amazon CloudWatch |
| Full name | Amazon CloudWatch |
| Chinese | 监控、日志与可观测性服务 |
| Japanese | Amazon CloudWatch（モニタリング・ログ・可観測性サービス） |
| Exam frequency | ⭐⭐⭐⭐⭐ |
| Often confused with | AWS CloudTrail / AWS Config / AWS Health |

## One-line summary

Collect metrics and logs, visualize dashboards, and trigger alarms to observe current system health.

## Core capabilities and use cases

- Metrics quantify CPU, request count, latency, error rate, and custom measurements.
- Logs centralizes application, operating-system, Lambda, and service logs; Logs Insights queries them.
- Alarms evaluate metric conditions and can notify SNS, trigger Auto Scaling, or start automation.
- Dashboards visualize key information but do not create alerts by themselves.
- EC2 memory and other guest OS metrics commonly require the CloudWatch Agent.

## Exam focus and common pitfalls

- CloudWatch answers how the system is performing now; CloudTrail answers who called an API; Config answers how configuration changed.
- Alarm states are OK, ALARM, and INSUFFICIENT_DATA.
- Metrics measure, alarms decide, SNS notifies, dashboards display, and logs support troubleshooting.

## Key takeaway

**Metrics measure, alarms decide, SNS notifies, dashboards display, and logs troubleshoot.**

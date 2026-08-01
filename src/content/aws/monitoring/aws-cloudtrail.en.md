---
title: "AWS CloudTrail"
fullName: "AWS CloudTrail"
description: "Record API calls and account activity to show who did what, when, and from where."
service: "AWS CloudTrail"
category: monitoring
kind: service
lang: en
topicKey: "AWS CloudTrail"
frequency: "考试频率 ⭐⭐⭐⭐⭐"
date: 2026-08-01
updated: 2026-08-01
tags: ["monitoring", "AWS CloudTrail", "AWS"]
notionId: 3a6964dc-ce4a-81ff-a189-fa2cb5f01fbc
notionUrl: https://app.notion.com/p/3a6964dcce4a81ffa189fa2cb5f01fbc
notionUpdated: "2026-07-31T08:18:14.118Z"
---

## Basic Information

| Field | Value |
| --- | --- |
| English | AWS CloudTrail |
| Full name | AWS CloudTrail |
| Chinese | 账户活动与 API 审计日志 |
| Japanese | AWS CloudTrail（API 操作履歴・監査ログ） |
| Exam frequency | ⭐⭐⭐⭐⭐ |
| Often confused with | Amazon CloudWatch / AWS Config |

## One-line summary

Record API calls and account activity to show who did what, when, and from where.

## Core capabilities and use cases

- Records activity initiated by the console, CLI, SDKs, and AWS services.
- Events include identity, time, source IP, Region, request parameters, and outcome.
- Event history provides recent management events; trails deliver events to S3 for long-term retention.
- Management events cover control-plane actions; data events cover resource-level activity such as S3 object access.
- CloudTrail Insights can detect unusual management-event calling patterns.

## Exam focus and common pitfalls

- Enable data events to audit S3 GetObject/DeleteObject and similar resource-level operations.
- Use an organization trail for centralized multi-account auditing.
- CloudTrail is not primarily a CPU, latency, or application-performance monitor.

## Key takeaway

**Who, when, from where, and which API? Think CloudTrail.**

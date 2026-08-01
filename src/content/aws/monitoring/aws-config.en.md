---
title: "AWS Config"
fullName: "AWS Config"
description: "Record resource configuration history and relationships, then continuously evaluate compliance with rules."
service: "AWS Config"
category: monitoring
kind: service
lang: en
topicKey: "AWS Config"
frequency: "考试频率 ⭐⭐⭐⭐⭐"
date: 2026-08-01
updated: 2026-08-01
tags: ["monitoring", "AWS Config", "AWS"]
notionId: 3a6964dc-ce4a-811b-92b1-ddea29ac500a
notionUrl: https://app.notion.com/p/3a6964dcce4a811b92b1ddea29ac500a
notionUpdated: "2026-07-31T08:18:15.289Z"
---

## Basic Information

| Field | Value |
| --- | --- |
| English | AWS Config |
| Full name | AWS Config |
| Chinese | 资源配置记录与合规评估 |
| Japanese | AWS Config（リソース構成記録・コンプライアンス評価） |
| Exam frequency | ⭐⭐⭐⭐⭐ |
| Often confused with | AWS CloudTrail / AWS Audit Manager |

## One-line summary

Record resource configuration history and relationships, then continuously evaluate compliance with rules.

## Core capabilities and use cases

- The configuration recorder captures supported resource configuration items and relationships.
- The delivery channel sends snapshots and history to designated destinations.
- Managed or custom Config rules evaluate resources on changes or on a schedule.
- Results include COMPLIANT and NON_COMPLIANT and can be aggregated across accounts and Regions.
- Remediation commonly uses Systems Manager Automation and requires carefully scoped permissions.

## Exam focus and common pitfalls

- Choose Config for configuration history, drift, and rule-based compliance checks.
- CloudTrail identifies the actor and API; Audit Manager organizes evidence by audit framework.
- A NON_COMPLIANT result does not mean remediation has completed automatically.

## Key takeaway

**What did the configuration become, and does it comply with the rule? Think AWS Config.**

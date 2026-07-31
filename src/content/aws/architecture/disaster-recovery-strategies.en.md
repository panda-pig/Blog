---
title: "Disaster Recovery Strategies"
fullName: "Disaster Recovery Strategies"
description: "Select backup and restore, pilot light, warm standby, or multi-site active/active according to RTO, RPO, cost, and complexity."
service: "Architecture"
category: architecture
kind: topic
lang: en
topicKey: "灾难恢复策略"
frequency: "Exam frequency ⭐⭐⭐⭐⭐"
date: 2026-07-30
updated: 2026-07-30
tags: ["architecture","Disaster Recovery Strategies","AWS"]
notionId: 3a6964dc-ce4a-81a1-a460-dec79107380f
notionUrl: https://app.notion.com/p/3a6964dcce4a81a1a460dec79107380f
notionUpdated: "2026-07-29T04:44:08.420Z"
---

## Basic Information

| Field | Details |
| --- | --- |
| English name | Disaster Recovery Strategies |
| Full name | Disaster Recovery Strategies |
| Chinese description | 灾难恢复策略 |
| Japanese description | 災害復旧戦略 |
| Exam frequency | ⭐⭐⭐⭐⭐ |
| Often confused with | Backup / Multi-AZ / AWS DRS |

## In one sentence

> Select backup and restore, pilot light, warm standby, or multi-site active/active according to RTO, RPO, cost, and complexity.

## Key points

- Backup and restore is least costly but usually has the longest recovery time.
- Pilot light keeps critical data and core components running; warm standby keeps a reduced working environment.
- Multi-site active/active offers the fastest continuity but has the highest cost and operational complexity.

## Exam takeaway

> Replication is not enough: automate recovery, test failover and failback, and verify dependencies and data consistency.

---
title: "AWS Database 面接速習"
fullName: "AWS Database Interview Guide"
description: "Data Model、Access Pattern、Scaling、Availability、Recovery で RDS、Aurora、DynamoDB、Cache を選びます。"
service: "AWS Database"
category: database
kind: topic
lang: ja
topicKey: "AWS Database Interview Guide"
frequency: "面试高频"
date: 2026-09-29
updated: 2026-09-29
tags: ["database", "interview", "RDS", "DynamoDB"]
notionId: 3a6964dc-ce4a-81ea-b432-de43eb476dfa
notionUrl: https://app.notion.com/p/3a6964dcce4a81eab432de43eb476dfa
notionUpdated: "2026-09-27T06:24:33.069Z"
---

## Access Pattern から始める

Database 選択は **Data Model、Query Pattern、Consistency、Latency、Throughput、Scaling、Recovery Objective** から始めます。

| 要件 | 候補 |
| --- | --- |
| Relational、SQL、Join | RDS / Aurora |
| Key-value / Document、1 桁 ms、水平 Scale | DynamoDB |
| Cassandra CQL 互換 | Keyspaces |
| MongoDB 互換 Document | DocumentDB |
| Graph | Neptune |
| Time Series | Timestream |
| Microsecond Cache、Session、Leaderboard | ElastiCache |

## 頻出ポイント

- RDS Multi-AZ は HA、Read Replica は Read Scaling です。
- Aurora Writer Endpoint は書き込み、Reader Endpoint は一般的な読み取り入口です。
- RDS Proxy は Lambda の Connection Storm を Pooling で緩和し、Query Cache ではありません。
- DynamoDB Partition Key は分散を決め、GSI は Access Pattern、DAX は Eventually Consistent Read の Cache です。
- Cache-aside / Write-through には Invalidation、TTL、Stampede 対策が必要です。
- Backup / PITR、Multi-AZ、Cross-Region DR は別の能力です。

## 回答構造

Data Model → Access Pattern → Capacity / Partition → HA → Backup / DR → Security → Monitoring / Cost。

## 要点

**Service 名より先に Data と Query を説明し、HA、Read Scale、Cache、Backup を分けます。**

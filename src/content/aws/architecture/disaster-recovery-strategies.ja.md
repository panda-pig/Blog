---
title: "災害復旧戦略"
fullName: "Disaster Recovery Strategies"
description: "RTO、RPO、Cost、Complexity に応じて Backup & Restore、Pilot Light、Warm Standby、Multi-Site Active/Active を選ぶ。"
service: "Architecture"
category: architecture
kind: topic
lang: ja
topicKey: "灾难恢复策略"
frequency: "試験頻度 ⭐⭐⭐⭐⭐"
date: 2026-07-30
updated: 2026-07-30
tags: ["architecture","Disaster Recovery Strategies","AWS"]
notionId: 3a6964dc-ce4a-81a1-a460-dec79107380f
notionUrl: https://app.notion.com/p/3a6964dcce4a81a1a460dec79107380f
notionUpdated: "2026-07-29T04:44:08.420Z"
---

## 一言で理解

> RTO、RPO、Cost、Complexity に応じて Backup & Restore、Pilot Light、Warm Standby、Multi-Site Active/Active を選ぶ。

## 要点

- Backup & Restore は低コストだが、一般に復旧時間が最も長い。
- Pilot Light は重要 Data と最小構成を維持し、Warm Standby は縮小した稼働環境を維持する。
- Multi-Site Active/Active は継続性が最も高いが、Cost と運用 Complexity も最大。

## 試験での判断

> Replication だけでは不十分で、Recovery 自動化、Failover / Failback、依存関係、Data Consistency を検証する。

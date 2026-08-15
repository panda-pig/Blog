---
title: "回復性の高いアーキテクチャの設計"
fullName: "Design Resilient Architectures"
description: "Single Point of Failure を除き、RTO / RPO に合わせた冗長化で復旧可能な System を設計する。"
service: "SAA-C03"
category: saa-c03
kind: topic
lang: ja
topicKey: "弹性架构设计"
frequency: "学習まとめ"
date: 2026-07-30
updated: 2026-08-15
tags: ["saa-c03","Design Resilient Architectures","AWS"]
notionId: 3a6964dc-ce4a-811a-9170-e1ab378bb690
notionUrl: https://app.notion.com/p/3a6964dcce4a811a9170e1ab378bb690
notionUpdated: "2026-08-13T00:40:44.044Z"
---

## 一言で理解

> Single Point of Failure を除き、RTO / RPO に合わせた冗長化で復旧可能な System を設計する。

## 要点

- Multi-AZ Compute、Load Balancing、Auto Scaling、適切な Data Replication を組み合わせる。
- High Availability、Backup、Disaster Recovery、Fault Tolerance は対象 Failure Scope が異なる。
- Region 内可用性は Multi-AZ、Region 障害や Global Continuity は Multi-Region を検討する。

## 試験での判断

> Restore、Failover、Dependency Recovery、Runbook を定期的にテストする。

## 障害境界

- Region は複数の分離 AZ を含む地理的な障害境界。
- EC2、EBS、Subnet は Zonal Resource で、AZ 障害対策には Cross-AZ 冗長化が必要。
- Multi-AZ でも Load Balancing、Data Tier Failover、Capacity、Health Check を設計する。
- Multi-Region ではさらに Replication、Routing、RTO / RPO、Failover、演習が必要。
- Regional Managed Service が内部で Multi-AZ を使う場合も、具体的な Resilience は Service ごとに確認する。

---
title: "AWS Architecture 面接速習"
fullName: "AWS Architecture Interview Guide"
description: "要件、制約、Fault Domain、State、Scaling、Recovery で AWS Architecture の回答を構成します。"
service: "AWS Architecture"
category: architecture
kind: topic
lang: ja
topicKey: "AWS Architecture Interview Guide"
frequency: "面试高频"
date: 2026-09-29
updated: 2026-09-29
tags: ["architecture", "interview", "well-architected", "SAA"]
notionId: 3a6964dc-ce4a-818b-9627-ecb35747681e
notionUrl: https://app.notion.com/p/3a6964dcce4a818b9627ecb35747681e
notionUpdated: "2026-09-28T08:49:43.829Z"
---

## 回答フレーム

**機能要件、SLO、RTO/RPO、Traffic、Data Model、Compliance、Budget、Team 能力** を確認し、同期 Main Path と非同期 Branch、失敗時の挙動を説明します。

## 頻出テーマ

- High Availability：Multi-AZ、Health Check、自動置換、Stateless Node、冗長な入口。
- Scalability：Vertical / Horizontal。自動縮小まで含まなければ Elasticity ではありません。
- Decoupling：Queue は Backpressure、Event Bus は Routing、Workflow は Step の Orchestration。
- Event-driven：At-least-once Delivery には Idempotency、Retry、DLQ、Observability が必要。
- Serverless：Server 運用を減らしても Quota、Cold Start、Retry、State、Cost 設計は残ります。
- DR：RTO/RPO と Cost で Backup/Restore、Pilot Light、Warm Standby、Active/Active を選択。
- Three-tier：Entry、Application、Data を分離し、各 Layer の Scale、Security、Fault Domain を設計。

## 面接での順序

1. 制約と重要な Quality Attribute。
2. Main Design と Data Flow。
3. Scaling、Health、State、Failure Handling。
4. Security、Log、Metric、Trace、Backup、DR。
5. Cost、Complexity、代替案の Trade-off。

## 要点

**正常系だけでなく、何が失敗し、どう観測・復旧し、その Cost がなぜ妥当かを説明します。**

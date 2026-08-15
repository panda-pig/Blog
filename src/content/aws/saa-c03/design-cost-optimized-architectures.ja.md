---
title: "コスト最適化アーキテクチャの設計"
fullName: "Design Cost-Optimized Architectures"
description: "Capacity、Pricing、Storage Lifecycle、Data Transfer を業務要件に合わせ、Architecture 全体の Cost を最適化する。"
service: "SAA-C03"
category: saa-c03
kind: topic
lang: ja
topicKey: "成本优化架构设计"
frequency: "学習まとめ"
date: 2026-07-30
updated: 2026-08-15
tags: ["saa-c03","Design Cost-Optimized Architectures","AWS"]
notionId: 3a6964dc-ce4a-815e-9274-d95d1853835b
notionUrl: https://app.notion.com/p/3a6964dcce4a815e9274d95d1853835b
notionUpdated: "2026-08-05T02:02:45.579Z"
---

## 一言で理解

> Capacity、Pricing、Storage Lifecycle、Data Transfer を業務要件に合わせ、Architecture 全体の Cost を最適化する。

## 要点

- Right Sizing と Auto Scaling、Serverless、Schedule、Managed Service で需要に Capacity を合わせる。
- Workload の安定性と中断許容度に応じて On-Demand、Commitment Discount、Spot を選ぶ。
- Access Frequency、Retrieval Time、削除制約を確認して Storage Class と Lifecycle Rule を使う。

## 試験での判断

> Tag、Budget、Metric、NAT / Transfer Cost を追跡し、Security、Reliability、Performance を犠牲にしない。

## Compute・Database・Network の追加ポイント

- EC2 は Right Sizing を行い、安定した基礎負荷には Commitment、Interruptible Workload には Spot、変動負荷には Auto Scaling を使います。
- RDS の Spec、Storage、Replica、Backup、Cache をまとめて比較します。Read Replica、Multi-AZ、ElastiCache は目的が異なります。
- 請求変化は Cost Explorer、しきい値は Budgets、変更前見積もりは Pricing Calculator です。
- Compute Optimizer は Spec、Trusted Advisor は幅広い Best Practice を推奨しますが、Peak と Reliability で検証します。
- Data Transfer Cost は方向、Region、AZ、Path で決まります。S3 / DynamoDB Gateway Endpoint に時間・処理料金はなく、Interface Endpoint は課金されます。

## 料金原則

Pay as you go、Save when you commit、Pay less by using more。最安単価が、Request、Retrieval、Transfer、Operation、Availability、Recovery を含む最小総 Cost とは限りません。

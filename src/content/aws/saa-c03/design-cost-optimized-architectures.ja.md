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
updated: 2026-07-30
tags: ["saa-c03","Design Cost-Optimized Architectures","AWS"]
notionId: 3a6964dc-ce4a-815e-9274-d95d1853835b
notionUrl: https://app.notion.com/p/3a6964dcce4a815e9274d95d1853835b
notionUpdated: "2026-07-29T08:13:04.387Z"
---

## 一言で理解

> Capacity、Pricing、Storage Lifecycle、Data Transfer を業務要件に合わせ、Architecture 全体の Cost を最適化する。

## 要点

- Right Sizing と Auto Scaling、Serverless、Schedule、Managed Service で需要に Capacity を合わせる。
- Workload の安定性と中断許容度に応じて On-Demand、Commitment Discount、Spot を選ぶ。
- Access Frequency、Retrieval Time、削除制約を確認して Storage Class と Lifecycle Rule を使う。

## 試験での判断

> Tag、Budget、Metric、NAT / Transfer Cost を追跡し、Security、Reliability、Performance を犠牲にしない。

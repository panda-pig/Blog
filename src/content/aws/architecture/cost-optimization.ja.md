---
title: "コスト最適化"
fullName: "Cost Optimization"
description: "信頼性・安全性・性能目標を守りながら、Size、容量、料金モデルを継続的に適合させます。"
service: "Architecture"
category: architecture
kind: topic
lang: ja
topicKey: "成本优化"
frequency: "出題頻度 ⭐⭐⭐⭐⭐"
date: 2026-07-30
updated: 2026-07-30
tags: ["Architecture","Cost Optimization","FinOps"]
notionId: 3a6964dc-ce4a-8166-bb96-e568552dd8ce
notionUrl: https://app.notion.com/p/3a6964dcce4a8166bb96e568552dd8ce
notionUpdated: "2026-07-30T01:08:06.892Z"
---

## 基本情報

| 項目 | 内容 |
| --- | --- |
| 英語名 | Cost Optimization |
| 正式名称 | Cost Optimization |
| 中国語名 | 成本优化 |
| 日本語名 | コスト最適化 |
| 出題頻度 | ⭐⭐⭐⭐⭐ |
| 混同しやすいもの | 性能优化 |

## 一言で理解

> Cost Optimization は一度の予算削減ではなく、継続的な測定・選択・監視・改善です。

## 4 つの主要行動

1. Right Sizing：実際の Metric から Compute、Storage、DB の Size を選ぶ。
2. Match Supply to Demand：Auto Scaling、Serverless、Schedule で余剰容量を減らす。
3. Choose Pricing Model：安定性と中断許容度に料金モデルを合わせる。
4. Measure and Govern：Tag、Budget、Alert、Cost Allocation で継続管理する。

## EC2 料金の選択

- On-Demand：短期、予測不能、実験的な負荷。
- Savings Plans / Reserved Instances：安定し、Commit できる長期利用。
- Spot：中断可能、Fault-tolerant、Batch、Retry 可能な処理。
- Dedicated Host：License、Compliance、物理 Host 制御。

## 試験ポイント

- 中断許容度、負荷の安定性、期間、License から料金方式を選ぶ。
- Auto Scaling、S3 Lifecycle、Serverless、Data Transfer 経路も総費用に影響する。
- 節約のために RTO、RPO、安全性、性能を壊してはいけない。
- 単一 Service の最安価格が Architecture 全体の最小 Cost とは限らない。

## よくある誤解

- Serverless が常に最安とは限らず、Spot は中断不能な処理に向かない。
- 割引 Commit を購入しただけでは最適化は完了しない。
- Compute だけを見ると Storage、Log、NAT Gateway、Data Transfer を見落とす。

## 重点記憶

> **Business Goal を先に確認し、容量・Size・料金モデルを合わせ、継続的に測定する。**

## 関連サービス

Cost Explorer、AWS Budgets、Compute Optimizer、Trusted Advisor、Auto Scaling、Savings Plans、S3 Lifecycle。

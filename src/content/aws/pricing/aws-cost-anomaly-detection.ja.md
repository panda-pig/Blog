---
title: "AWS Cost Anomaly Detection"
fullName: "AWS Cost Anomaly Detection"
description: "Machine Learning で通常の支出 Pattern を学習し、大きな偏りを Cost Impact と主要 Dimension とともに検出する。"
service: "AWS Cost Anomaly Detection"
category: pricing
kind: service
lang: ja
topicKey: "AWS Cost Anomaly Detection"
frequency: "复习优先级 ⭐⭐⭐"
date: 2026-10-08
updated: 2026-10-08
tags: ["pricing","AWS Cost Anomaly Detection","AWS"]
notionId: 3f3964dc-ce4a-812d-8472-fefaa4e53df8
notionUrl: https://app.notion.com/p/3f3964dcce4a812d8472fefaa4e53df8
notionUpdated: "2026-10-08T02:55:12.539Z"
---
## 基本情報

| 項目 | 内容 |
| --- | --- |
| 英語 / 正式名称 | AWS Cost Anomaly Detection |
| 中国語 | AWS 成本异常检测 |
| 日本語 | AWS コスト異常検知 |
| 復習優先度 | 复习优先级 ⭐⭐⭐ |
| 混同しやすい項目 | AWS Budgets / Cost Explorer / CloudWatch |

## 一言で理解

Machine Learning で通常の支出 Pattern を学習し、大きな偏りを Cost Impact と主要 Dimension とともに検出する。

## 要点整理

Cost Monitor が Scope を定義し、Model が Anomaly を生成し、Alert Subscription が Threshold に従って通知し、人が調査・対応する。

## 学習ポイント

- Service、Member Account、Tag、Cost Category で Monitor を分けられる。
- Individual Alert は SNS、Daily／Weekly Summary は Email。
- Cost Data 処理には約 24 時間の遅延があり得る。
- Cost Explorer、CloudWatch、CloudTrail、Change Record で原因を調べる。

## よくある誤解

- 請求の Hard Cap ではなく全 Resource を自動停止しない。
- Budgets は Threshold、Explorer は費用分析、Anomaly Detection は偏りを検出する。

## 重要ポイント

**Budgets は予算、Explorer は費用、Anomaly Detection は異常な偏りを見る。**

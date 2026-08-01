---
title: "AWS Trusted Advisor"
fullName: "AWS Trusted Advisor"
description: "コスト、性能、セキュリティ、耐障害性、Quota に関する AWS ベストプラクティスを提示します。"
service: "AWS Trusted Advisor"
category: monitoring
kind: service
lang: ja
topicKey: "AWS Trusted Advisor"
frequency: "考试频率 ⭐⭐⭐⭐"
date: 2026-08-01
updated: 2026-08-01
tags: ["monitoring", "AWS Trusted Advisor", "AWS"]
notionId: 3a6964dc-ce4a-8137-9131-d20e8b6589b3
notionUrl: https://app.notion.com/p/3a6964dcce4a81379131d20e8b6589b3
notionUpdated: "2026-07-31T08:18:16.390Z"
---

## 基本情報

| 項目 | 内容 |
| --- | --- |
| 英語 | AWS Trusted Advisor |
| 正式名称 | AWS Trusted Advisor |
| 中国語 | AWS 最佳实践检查与优化建议 |
| 日本語 | AWS Trusted Advisor（ベストプラクティスに基づく最適化推奨） |
| 試験頻度 | ⭐⭐⭐⭐ |
| 混同しやすいサービス | AWS Well-Architected Tool / AWS Config / Compute Optimizer |

## ひとことで理解

コスト、性能、セキュリティ、耐障害性、Quota に関する AWS ベストプラクティスを提示します。

## 主な機能と利用場面

- 定義済み Check を実行し、重要度ごとに結果を表示します。
- 主な分野は Cost Optimization、Performance、Security、Fault Tolerance、Service Limits です。
- Idle Resource、危険な Port、Root MFA、Backup 不足、Quota 逼迫などを検出します。
- 推奨内容は業務影響を確認して実施し、通常は自動修復ではありません。
- 利用可能な Check や自動化の範囲は Support Plan と機能によって異なります。

## 試験ポイントと注意点

- 複数カテゴリのベストプラクティス改善なら Trusted Advisor です。
- Config は Rule Compliance、Inspector は脆弱性、Compute Optimizer は Size 推奨を扱います。
- Service Quotas は値と引き上げ申請、Trusted Advisor は逼迫への注意を扱います。

## 重要ポイント

**Trusted Advisor は自動修復ではなく、AWS ベストプラクティスの診断と推奨を行います。**

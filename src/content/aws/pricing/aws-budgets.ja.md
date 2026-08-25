---
title: "AWS Budgets"
fullName: "AWS Budgets"
description: "コスト、使用量、割引契約の目標を設定し、実績または予測がしきい値を超えると通知します。"
service: "AWS Budgets"
category: pricing
kind: service
lang: ja
topicKey: "AWS Budgets"
frequency: "出題頻度 ⭐⭐⭐⭐⭐"
date: 2026-08-04
updated: 2026-08-25
tags: ["pricing", "AWS Budgets", "AWS"]
notionId: 3b2964dc-ce4a-816c-9d49-ed1dd09b3c99
notionUrl: https://app.notion.com/p/3b2964dcce4a816c9d49ed1dd09b3c99
notionUpdated: "2026-08-04T02:10:34.308Z"
---

## 基本情報

| 項目 | 内容 |
| --- | --- |
| 英語 | AWS Budgets |
| 中国語 | 预算与阈值提醒 |
| 日本語 | AWS Budgets（予算の設定・アラート） |
| 試験頻度 | ⭐⭐⭐⭐⭐ |
| 混同しやすいサービス | AWS Cost Explorer / AWS Cost Anomaly Detection |

## ひとことで理解

コスト、使用量、Savings Plans / RI の目標を設定し、実績または予測値がしきい値を超えると通知します。

## 試験ポイントと注意点

- Email や SNS 通知、権限管理された Budgets Actions を設定できます。
- Budget は初期状態では超過 Resource を自動停止しません。
- Budgets は設定済みしきい値、Anomaly Detection は異常パターン、Cost Explorer は分析に使います。

## 重要ポイント

**目標と実績・予測のしきい値通知なら AWS Budgets です。**

## 実績・予測費用のアラート

- **Zero spend budget**：支出が初めて発生した段階で通知。
- **Monthly cost budget**：月額に対して Actual Spend と Forecasted Spend の双方を設定。
- Actual 85%、Actual 100%、Forecast 100% など複数しきい値を設定可能。
- Budget Alert は Resource をデフォルト停止しません。Production の Budgets Actions には最小権限、承認、Rollback が必要です。

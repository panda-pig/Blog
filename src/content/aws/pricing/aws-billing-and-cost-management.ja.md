---
title: "AWS Billing and Cost Management"
fullName: "AWS Billing and Cost Management"
description: "現在の料金、請求書、支払い、コスト管理機能を一元的に確認します。"
service: "AWS Billing and Cost Management"
category: pricing
kind: service
lang: ja
topicKey: "AWS Billing and Cost Management"
frequency: "出題頻度 ⭐⭐⭐⭐⭐"
date: 2026-08-04
updated: 2026-08-25
tags: ["pricing", "AWS Billing and Cost Management", "AWS"]
notionId: 3b2964dc-ce4a-8130-af30-fa60658ff24d
notionUrl: https://app.notion.com/p/3b2964dcce4a8130af30fa60658ff24d
notionUpdated: "2026-08-04T02:10:34.280Z"
---

## 基本情報

| 項目 | 内容 |
| --- | --- |
| 英語 | AWS Billing and Cost Management |
| 中国語 | AWS 账单与成本管理 |
| 日本語 | AWS Billing and Cost Management（AWS 請求とコスト管理） |
| 試験頻度 | ⭐⭐⭐⭐⭐ |
| 混同しやすいサービス | AWS Budgets / AWS Cost Explorer / AWS Pricing Calculator |

## ひとことで理解

現在の料金、請求書、支払い情報、コスト管理機能を一つの場所で確認します。

## 試験ポイント

- 現在の請求と支払いは Billing、履歴分析は Cost Explorer、しきい値通知は Budgets、導入前見積もりは Pricing Calculator です。
- Consolidated Billing は支払いを集約しますが、各アカウントの Resource と Identity は統合しません。

## 重要ポイント

**現在の請求書と支払いを確認するなら Billing and Cost Management です。**

## Billing・Bills・Free Tier

AdministratorAccess を持つ IAM User でも Billing Data をデフォルトで見られない場合があります。Root User が Account 設定の **IAM user and role access to billing information** を有効化し、その後 IAM User / Role に適切な Billing 権限を付与します。

- Billing Dashboard：Month-to-date Cost、当月 Forecast、前月総額、月別 Breakdown。
- Bills：対象月の **charges by service** で Service ごとの利用量と費用を確認。
- Free Tier：Current Usage と Forecasted Usage を比較し、予測超過時は不要な課金 Resource を確認・停止。

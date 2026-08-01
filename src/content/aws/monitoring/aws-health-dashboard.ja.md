---
title: "AWS Health Dashboard"
fullName: "AWS Health Dashboard"
description: "アカウントや Resource に影響する AWS Service Event、計画変更、通知を表示します。"
service: "AWS Health Dashboard"
category: monitoring
kind: service
lang: ja
topicKey: "AWS Health Dashboard"
frequency: "考试频率 ⭐⭐⭐⭐"
date: 2026-08-01
updated: 2026-08-01
tags: ["monitoring", "AWS Health Dashboard", "AWS"]
notionId: 3a6964dc-ce4a-811e-9b8d-c28168427289
notionUrl: https://app.notion.com/p/3a6964dcce4a811e9b8dc28168427289
notionUpdated: "2026-07-31T08:18:17.495Z"
---

## 基本情報

| 項目 | 内容 |
| --- | --- |
| 英語 | AWS Health Dashboard |
| 正式名称 | AWS Health Dashboard |
| 中国語 | 账户相关的 AWS 服务健康与事件通知 |
| 日本語 | AWS Health Dashboard（アカウント別のサービス稼働状況） |
| 試験頻度 | ⭐⭐⭐⭐ |
| 混同しやすいサービス | Amazon CloudWatch / AWS Service Health |

## ひとことで理解

アカウントや Resource に影響する AWS Service Event、計画変更、通知を表示します。

## 主な機能と利用場面

- Service Event、Planned Change、Account Notification を表示します。
- アカウントと Resource に固有の詳細および推奨 Action を提供します。
- AWS 側障害か Application / Workload 側の問題かを切り分けます。
- Health API と EventBridge で Event の配信や運用 Workflow を自動化できます。
- 代表例は計画 Maintenance、Instance Retirement、Lifecycle Event です。

## 試験ポイントと注意点

- CloudWatch は自分の Metrics と Logs、AWS Health は自分に影響する AWS 公式 Event を扱います。
- 公開 Service Health とアカウント固有の影響情報では粒度が異なります。
- Health Event を確認した後も影響評価と対応が必要です。

## 重要ポイント

**CloudWatch は自分の Resource、AWS Health は AWS 公式 Event の影響を確認します。**

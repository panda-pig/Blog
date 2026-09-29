---
title: "Amazon SQS"
fullName: "Amazon Simple Queue Service"
description: "Producer と Consumer を疎結合にし、非同期処理のために作業を安全に蓄えるマネージドメッセージキュー。"
service: "Amazon SQS"
category: messaging
kind: service
lang: ja
topicKey: "Amazon SQS"
frequency: "出題頻度 ⭐⭐⭐⭐⭐"
date: 2026-07-30
updated: 2026-09-29
tags: ["messaging","Amazon SQS","AWS"]
notionId: 3a6964dc-ce4a-81ba-bf24-f388c5cddd42
notionUrl: https://app.notion.com/p/3a6964dcce4a81babf24f388c5cddd42
notionUpdated: "2026-09-28T06:40:06.316Z"
---

## 基本情報

| 項目 | 内容 |
| --- | --- |
| 英語名 | Amazon SQS |
| 正式名称 | Amazon Simple Queue Service |
| 中国語の説明 | 消息队列服务 |
| 日本語の説明 | マネージドメッセージキューサービス |
| 出題頻度 | ⭐⭐⭐⭐⭐ |
| 混同しやすいもの | SNS / EventBridge / Kinesis |

## 一言で理解

> Producer と Consumer を疎結合にし、非同期処理のために作業を安全に蓄えるマネージドメッセージキュー。

## 要点

- Standard Queue は高スループットで At-Least-Once Delivery のため、重複や順序入替が起こり得る。
- FIFO Queue は Message Group 内の順序と重複排除を提供するが、スループット制限が異なる。
- Visibility Timeout は処理中の Message を一時的に隠し、成功後に Consumer が削除する。

## 試験での判断

> DLQ、再試行、冪等な Consumer、適切な Retention / Visibility 設定が重要。

+## 追加：Polling、Ordering、Idempotency

- Long Polling は最大 20 秒待機して空 Response と API Cost を減らしますが、Visibility Timeout は延長しません。
- FIFO の Message Group ID は順序境界で、Group 内は厳密な順序、Group 間は並列処理できます。
- Deduplication ID は Producer 重複、Group ID は順序と並列性を扱います。Consumer は At-least-once Delivery に対して Idempotent にします。
- Visibility Timeout、Retry、DLQ、Redrive Policy を一緒に設計します。

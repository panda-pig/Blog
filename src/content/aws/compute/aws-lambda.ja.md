---
title: "AWS Lambda"
fullName: "AWS Lambda"
description: "イベントに応じて関数コードを実行し、サーバー管理なしで自動スケーリングと従量課金を利用するサービス。"
service: "AWS Lambda"
category: compute
kind: service
lang: ja
topicKey: "AWS Lambda"
frequency: "出題頻度 ⭐⭐⭐⭐⭐"
date: 2026-07-30
updated: 2026-10-08
tags: ["compute","AWS Lambda","AWS"]
notionId: 3a6964dc-ce4a-81f9-8d71-f17f423387eb
notionUrl: https://app.notion.com/p/3a6964dcce4a81f98d71f17f423387eb
notionUpdated: "2026-10-08T02:19:16.603Z"
---

## 基本情報

| 項目 | 内容 |
| --- | --- |
| 英語名 | AWS Lambda |
| 正式名称 | AWS Lambda |
| 中国語の説明 | 无服务器函数计算 |
| 日本語の説明 | AWS Lambda（ラムダ） |
| 出題頻度 | ⭐⭐⭐⭐⭐ |
| 混同しやすいもの | EC2 / Fargate / AWS Batch |

## 一言で理解

> イベントに応じて関数コードを実行し、サーバー管理なしで自動スケーリングと従量課金を利用するサービス。

## 要点

- Lambda は短時間・イベント駆動処理向けの FaaS / サーバーレスコンピューティング。
- 主なトリガーは S3、SQS、EventBridge、API Gateway、DynamoDB Streams。
- 1 回の実行は最大 15 分で、長時間処理には Batch、ECS/Fargate、EC2 を検討する。

## 試験での判断

> SQS 連携では実行ロール、バッチ、冪等性、Visibility Timeout、再試行、DLQ が重要。

## 追加：同時実行と起動遅延

- **Reserved Concurrency** は Function 用の同時実行を予約し、同時に上限を設定します。0 にすると継続的に Throttle されますが、Environment は事前初期化されません。
- **Provisioned Concurrency** は指定数の Environment を初期化済みに保ち、Cold Start を減らします。Version / Alias と追加料金が必要です。
- **SnapStart** は公開 Version の初期化済み Memory / Disk 状態を Snapshot 化して復元します。同時実行 Quota ではありません。
- Regional Pool、Function 上限、起動遅延、Retry、Downstream Capacity を分けて設計します。

## 追加：Event Processing の境界

- Event Source Mapping は SQS、Kinesis、DynamoDB Streams を Polling し Batch で Lambda を呼ぶ。Batch Size、Visibility／Retention、Concurrency、下流 Capacity を一緒に設計する。
- Async Invocation の Destination、Queue Retry、DLQ、Partial Batch Response は別の仕組みである。
- Batch Consumer は Idempotent にし、Poison Message、Checkpoint、Replay Scope を定義する。

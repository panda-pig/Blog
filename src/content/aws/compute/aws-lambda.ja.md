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
updated: 2026-07-30
tags: ["compute","AWS Lambda","AWS"]
notionId: 3a6964dc-ce4a-81f9-8d71-f17f423387eb
notionUrl: https://app.notion.com/p/3a6964dcce4a81f98d71f17f423387eb
notionUpdated: "2026-07-30T01:52:42.048Z"
---

## 基本情報

| 項目 | 内容 |
| --- | --- |
| 英語名 | AWS Lambda |
| 正式名称 | AWS Lambda |
| 中国語の説明 | 无服务器函数计算 |
| 日本語の説明 | サーバーレス関数実行サービス |
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

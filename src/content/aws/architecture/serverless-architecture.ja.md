---
title: "サーバーレスアーキテクチャ"
fullName: "Serverless Architecture"
description: "Managed・On-demand Service で Server 管理を減らしつつ、Application 層の安全性と信頼性責任を維持します。"
service: "Architecture"
category: architecture
kind: topic
lang: ja
topicKey: "无服务器架构"
frequency: "出題頻度 ⭐⭐⭐⭐⭐"
date: 2026-07-30
updated: 2026-07-30
tags: ["Architecture","Serverless","Lambda"]
notionId: 3a6964dc-ce4a-8102-802a-c8a0a767c8f3
notionUrl: https://app.notion.com/p/3a6964dcce4a8102802ac8a0a767c8f3
notionUpdated: "2026-07-30T01:08:04.047Z"
---

## 基本情報

| 項目 | 内容 |
| --- | --- |
| 英語名 | Serverless Architecture |
| 正式名称 | Serverless Architecture |
| 中国語名 | 无服务器架构 |
| 日本語名 | サーバーレスアーキテクチャ |
| 出題頻度 | ⭐⭐⭐⭐⭐ |
| 混同しやすいもの | 容器 / EC2 |

## 一言で理解

> Serverless は Server が存在しないのではなく、準備・保守・拡張を AWS が管理することです。

## 代表的な構成

- API Gateway または EventBridge が Request と Event を受け取る。
- Lambda は短時間の Event Function、Fargate は EC2 管理なしで Container を実行する。
- SQS / SNS は Buffer・疎結合・Broadcast、DynamoDB / S3 は Data 保存を担う。
- Step Functions は Workflow、CloudWatch は Log・Metric・Alarm を管理する。

## Lambda、Fargate、EC2

- Lambda：短時間の Event-driven Function。
- Fargate：EC2 を管理せず Container を実行するが、ECS / EKS の編成は必要。
- EC2：長期 Process、特殊な OS 要件、最大の制御が必要な場合。

## 試験ポイント

- Lambda の SQS 処理は At-least-once のため、冪等性、Visibility Timeout、DLQ が重要。
- Serverless でも IAM、Network、Data、Retry、Concurrency、監視、Cost を管理する。
- 自動拡張しても下流 DB が同じ同時実行数に耐えられるとは限らない。
- 実行時間、実行モデル、制御要件から Compute を選ぶ。

## よくある誤解

- Serverless は無料でも Lambda だけでもない。
- Fargate は Serverless Compute であり Container Orchestrator ではない。
- Lambda は長期 Process 向けではなく、全 Container App を Function 化する必要もない。

## 重点記憶

> **Serverless は管理責任を上位へ移す。Function は Lambda、Container は Fargate、最大制御は EC2。**

## 関連サービス

Lambda、Fargate、ECS、EKS、SQS、EventBridge、API Gateway、DynamoDB、CloudWatch。

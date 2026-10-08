---
title: "AWS Step Functions"
fullName: "AWS Step Functions"
description: "ステートマシンで Lambda、サービス呼び出し、短時間・長時間のワークフローを調整する。"
service: "AWS Step Functions"
category: messaging
kind: service
lang: ja
topicKey: "AWS Step Functions"
frequency: "試験頻度 ⭐⭐⭐⭐"
date: 2026-07-31
updated: 2026-09-29
tags: ["messaging", "AWS Step Functions", "AWS"]
notionId: 3a6964dc-ce4a-8187-bc25-ef5873cbb0dd
notionUrl: https://app.notion.com/p/3a6964dcce4a8187bc25ef5873cbb0dd
notionUpdated: "2026-09-28T07:51:38.751Z"
---

## 基本情報

| 項目 | 内容 |
| --- | --- |
| 英語 | AWS Step Functions |
| 正式名称 | AWS Step Functions |
| 中国語 | 工作流编排 |
| 日本語 | ワークフローオーケストレーション |
| 試験頻度 | ⭐⭐⭐⭐ |
| 混同しやすいサービス | SQS / SWF |

## ひとことで

ステートマシンで Lambda、サービス呼び出し、短時間・長時間のワークフローを調整する。

## 段階まとめ

- **主な役割**：ステートマシンで Lambda、サービス呼び出し、短時間・長時間のワークフローを調整する。
- **試験頻度**：⭐⭐⭐⭐
- **比較ポイント**：SQS / SWF

## 覚え方

AWS Step Functions = ワークフローオーケストレーション

## 追加：Orchestration の境界

- State Machine は Sequence、Choice、Parallel、Wait、Retry / Catch、Callback / Human Approval を表現します。
- Step Functions は処理を編成し、Application Code 自体は実行しません。Compute は Lambda、ECS、API などが担当します。
- Retry は一時障害と恒久障害を分け、Catch は Compensation、Manual Handling、DLQ へつなぎます。
- 長い Workflow では Idempotency、Execution History、Timeout、Compensation、機密 Data を設計します。

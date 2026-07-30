---
title: "Amazon SQS"
fullName: "Amazon SQS"
description: "Producer と Consumer を疎結合にし、非同期処理のために作業を安全に蓄えるマネージドメッセージキュー。"
service: "Amazon SQS"
category: messaging
kind: service
lang: ja
topicKey: "Amazon SQS"
frequency: "試験頻度 ⭐⭐⭐⭐⭐"
date: 2026-07-30
updated: 2026-07-30
tags: ["messaging","Amazon SQS","AWS"]
notionId: 3a6964dc-ce4a-81ba-bf24-f388c5cddd42
notionUrl: https://app.notion.com/p/3a6964dcce4a81babf24f388c5cddd42
notionUpdated: "2026-07-23T07:21:16.024Z"
---

## 一言で理解

> Producer と Consumer を疎結合にし、非同期処理のために作業を安全に蓄えるマネージドメッセージキュー。

## 要点

- Standard Queue は高スループットで At-Least-Once Delivery のため、重複や順序入替が起こり得る。
- FIFO Queue は Message Group 内の順序と重複排除を提供するが、スループット制限が異なる。
- Visibility Timeout は処理中の Message を一時的に隠し、成功後に Consumer が削除する。

## 試験での判断

> DLQ、再試行、冪等な Consumer、適切な Retention / Visibility 設定が重要。

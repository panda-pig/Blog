---
title: "Amazon SNS"
fullName: "Amazon Simple Notification Service"
description: "1 つのメッセージを複数の Subscriber へ配信するマネージド Publish / Subscribe サービス。"
service: "Amazon SNS"
category: messaging
kind: service
lang: ja
topicKey: "Amazon SNS"
frequency: "出題頻度 ⭐⭐⭐⭐⭐"
date: 2026-07-30
updated: 2026-07-30
tags: ["messaging","Amazon SNS","AWS"]
notionId: 3a6964dc-ce4a-815d-a70c-efddf8cc7d63
notionUrl: https://app.notion.com/p/3a6964dcce4a815da70cefddf8cc7d63
notionUpdated: "2026-07-23T07:21:18.671Z"
---

## 基本情報

| 項目 | 内容 |
| --- | --- |
| 英語名 | Amazon SNS |
| 正式名称 | Amazon Simple Notification Service |
| 中国語の説明 | 通知与发布订阅服务 |
| 日本語の説明 | 通知・パブリッシュ／サブスクライブサービス |
| 出題頻度 | ⭐⭐⭐⭐⭐ |
| 混同しやすいもの | SQS / EventBridge |

## 一言で理解

> 1 つのメッセージを複数の Subscriber へ配信するマネージド Publish / Subscribe サービス。

## 要点

- Publisher は Topic に送信し、SNS は SQS、Lambda、HTTP/S、Email、SMS などへ Push する。
- Fan-out では 1 つの SNS Topic と複数の SQS Queue を組み合わせ、各 Consumer にコピーを渡す。
- SNS は Push 型であり、Buffer や独立した再試行が必要な場合は Queue の代替ではない。

## 試験での判断

> Subscription Filter により Subscriber ごとに一致する Message だけを配信できる。

---
title: "SQS vs SNS vs EventBridge"
fullName: "SQS vs SNS vs EventBridge"
description: "作業 Queue は SQS、通知 Fan-out は SNS、Rule による Structured Event Routing は EventBridge。"
service: "AWS Compare"
category: compare
kind: compare
lang: ja
topicKey: "SQS vs SNS vs EventBridge"
frequency: "学習まとめ"
date: 2026-07-30
updated: 2026-09-29
tags: ["compare","SQS vs SNS vs EventBridge","AWS"]
notionId: 3a6964dc-ce4a-81fb-83ee-e98070269337
notionUrl: https://app.notion.com/p/3a6964dcce4a81fb83eee98070269337
notionUpdated: "2026-09-28T06:40:13.513Z"
---

## 一言で理解

> 作業 Queue は SQS、通知 Fan-out は SNS、Rule による Structured Event Routing は EventBridge。

## 要点

- SQS は Consumer が Pull する Message を Buffer し、独立した Retry と DLQ を提供する。
- SNS は 1 つの Publish Message を複数 Subscriber へ Push する。
- EventBridge は Event Pattern を照合し、AWS、Application、SaaS の Target へ送る。

## 試験での判断

> EventBridge / SNS で振り分け、各 Consumer の前に SQS を置く構成がよく使われる。

## 追加の判断軸

- SQS は Poll 型 Queue と Backlog で Buffer、Backpressure、Failure Isolation を提供します。
- SNS は複数 Subscriber への即時 Push Fan-out です。
- EventBridge は Event Content で複数 Target へ Route し、Archive / Replay と SaaS Integration を持ちます。
- SNS / EventBridge → SQS とし、前者が配信、後者が Consumer ごとの独立 Buffer を担当する構成が一般的です。

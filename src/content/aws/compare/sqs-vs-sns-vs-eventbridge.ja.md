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
updated: 2026-07-30
tags: ["compare","SQS vs SNS vs EventBridge","AWS"]
notionId: 3a6964dc-ce4a-81fb-83ee-e98070269337
notionUrl: https://app.notion.com/p/3a6964dcce4a81fb83eee98070269337
notionUpdated: "2026-07-23T07:24:12.397Z"
---

## 一言で理解

> 作業 Queue は SQS、通知 Fan-out は SNS、Rule による Structured Event Routing は EventBridge。

## 要点

- SQS は Consumer が Pull する Message を Buffer し、独立した Retry と DLQ を提供する。
- SNS は 1 つの Publish Message を複数 Subscriber へ Push する。
- EventBridge は Event Pattern を照合し、AWS、Application、SaaS の Target へ送る。

## 試験での判断

> EventBridge / SNS で振り分け、各 Consumer の前に SQS を置く構成がよく使われる。

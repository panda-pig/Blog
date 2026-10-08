---
title: "Amazon Pinpoint（旧サービス概念）"
fullName: "Amazon Pinpoint"
description: "講座の Pinpoint は Segment、Campaign、Journey で Multi-channel の顧客施策と分析を構成する。"
service: "Amazon Pinpoint"
category: architecture
kind: service
lang: ja
topicKey: "Amazon Pinpoint"
frequency: "课程历史概念 ⭐⭐"
date: 2026-10-08
updated: 2026-10-08
tags: ["architecture","Amazon Pinpoint","AWS"]
notionId: 3f3964dc-ce4a-81f7-91b0-edd84cc2d484
notionUrl: https://app.notion.com/p/3f3964dcce4a81f791b0edd84cc2d484
notionUpdated: "2026-10-08T02:55:11.306Z"
---
## 基本情報

| 項目 | 内容 |
| --- | --- |
| 英語 / 正式名称 | Amazon Pinpoint |
| 中国語 | 客户分群与多渠道营销触达（历史） |
| 日本語 | 顧客セグメント・マルチチャネル施策（旧サービス） |
| 復習優先度 | 课程历史概念 ⭐⭐ |
| 混同しやすい項目 | Amazon SES / Amazon SNS / AWS End User Messaging |

## 一言で理解

講座の Pinpoint は Segment、Campaign、Journey で Multi-channel の顧客施策と分析を構成する。

## 要点整理

Pinpoint は新規顧客受付を停止し、2026-10-30 に Support 終了予定。新規 System は最新の移行 Guide と利用可能 Service から選ぶ。

## 学習ポイント

- SES は Application Email を送信する。
- SNS は Topic Pub/Sub と Fan-out を提供する。
- AWS End User Messaging は SMS、Voice、Push などの API を継続提供する。
- Segment、Journey、Campaign は Amazon Connect など現在の機能へ移行する。

## よくある誤解

- Pinpoint の Support 終了は全 SMS／Push API の終了を意味しない。
- ここでの Endpoint は顧客／Device の送信先で VPC Endpoint ではない。

## 重要ポイント

**SES は Email、SNS は Fan-out、Pinpoint は歴史的に Audience と Campaign を担当した。**

---
title: "疎結合とイベント駆動アーキテクチャ"
fullName: "Decoupling & Event-Driven Architecture"
description: "Queue、Event、安定した契約により、上流と下流の速度・障害・拡張境界を分離します。"
service: "Architecture"
category: architecture
kind: topic
lang: ja
topicKey: "解耦与事件驱动"
frequency: "試験頻度 ★★★★★"
date: 2026-07-30
updated: 2026-07-30
tags: ["Architecture","Decoupling","Event-Driven"]
notionId: 3a6964dc-ce4a-815b-9c05-e0a6657c8bc5
notionUrl: https://app.notion.com/p/3a6964dcce4a815b9c05e0a6657c8bc5
notionUpdated: "2026-07-30T01:08:05.518Z"
---

## 一言で理解

> 疎結合により Producer と Consumer は独立して変更・拡張でき、局所障害を安定した境界内に隔離できます。

## 主な役割

- SQS は Queue、Buffer、平準化、SNS は Push と Fan-out を担う。
- EventBridge は Event 内容と Rule で Route し、Step Functions は複数 Step を明示的に編成する。
- 非同期処理では双方が別速度で動けるが、通常は結果整合性を考慮する。

## 信頼性の要点

- At-least-once 配信は重複し得るため、Consumer は冪等にする。
- Visibility Timeout は処理時間を覆い、失敗は Retry と DLQ で隔離する。
- Backlog、最古 Message の年齢、失敗率、処理遅延を監視する。
- Backpressure で Producer が Consumer を圧倒し続けないようにする。

## 試験ポイント

- Backlog / Buffer は SQS、Fan-out は SNS、Event Pattern は EventBridge。
- SQS は Broadcast ではなく、SNS は従来型 Durable Queue ではなく、EventBridge は積滞保存が主目的ではない。
- Retry を増やすだけでは不十分で、Retry Storm と Poison Message を防ぐ。

## 重点記憶

> **信頼できる非同期 = 冪等 + Retry + DLQ + 監視。疎結合 = 独立変更 + 障害隔離。**

## 関連サービス

Amazon SQS、Amazon SNS、Amazon EventBridge、AWS Lambda、Step Functions、CloudWatch。

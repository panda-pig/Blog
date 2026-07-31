---
title: "Amazon Kinesis Data Streams と Data Firehose"
fullName: "Amazon Kinesis Data Streams / Amazon Data Firehose"
description: "Data Streams はリアルタイムストリームを取り込み・保持・再生し、Data Firehose は低運用でバッファリングして分析先へ配信します。"
service: "Amazon Kinesis Data Streams & Amazon Data Firehose"
category: messaging
kind: service
lang: ja
topicKey: "Amazon Kinesis Data Streams & Data Firehose"
frequency: "出題頻度 ⭐⭐⭐⭐"
date: 2026-07-31
updated: 2026-07-31
tags: ["messaging","Amazon Kinesis Data Streams & Data Firehose","AWS"]
notionId: 3a6964dc-ce4a-8106-bfc9-db1375ab325d
notionUrl: https://app.notion.com/p/3a6964dcce4a8106bfc9db1375ab325d
notionUpdated: "2026-07-30T08:01:42.663Z"
---

## 基本情報

| 項目 | 内容 |
| --- | --- |
| 英語名 | Amazon Kinesis Data Streams & Amazon Data Firehose |
| 正式名称 | Amazon Kinesis Data Streams / Amazon Data Firehose |
| 中国語の説明 | 实时数据流与托管式数据交付 |
| 日本語の説明 | リアルタイムデータストリームとマネージドデータ配信 |
| 出題頻度 | ⭐⭐⭐⭐ |
| 混同しやすいもの | Kinesis Data Streams / Amazon Data Firehose / Amazon MSK |

## 一言で理解

Data Streams はリアルタイムストリームを取り込み・保持・再生し、Data Firehose は低運用でバッファリングして分析先へ配信します。

## 要点

- Data Streams は複数コンシューマー、独自処理、リプレイに対応し、容量とシャード設計が重要です。
- Data Firehose は自動スケールし、S3、Redshift、OpenSearch などへ配信し、Lambda で軽量変換もできます。
- Firehose はレコードをバッファリングするため、1 件ずつ即時ではなくニアリアルタイム配信です。

## 試験ポイント

- 複数コンシューマー、独自読み取り、リプレイには Data Streams を選びます。
- 低運用で決まった宛先へ配信するなら Data Firehose を選びます。

## よくある誤解

- 製品名だけで選ばず、データ型、遅延、制御性、運用、コスト制約を確認します。

## 重要ポイント

**Streams はストリームと再生、Firehose はバッファリングと配信。**

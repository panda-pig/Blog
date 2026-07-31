---
title: "Amazon EMR"
fullName: "Amazon Elastic MapReduce"
description: "Spark や Hadoop などのビッグデータフレームワークを実行するマネージド分析基盤です。"
service: "Amazon EMR"
category: analytics
kind: service
lang: ja
topicKey: "Amazon EMR"
frequency: "出題頻度 ⭐⭐⭐"
date: 2026-07-31
updated: 2026-07-31
tags: ["analytics","Amazon EMR","AWS"]
notionId: 3a6964dc-ce4a-8107-aa07-d1d87996dcea
notionUrl: https://app.notion.com/p/3a6964dcce4a8107aa07d1d87996dcea
notionUpdated: "2026-07-30T08:01:29.061Z"
---

## 基本情報

| 項目 | 内容 |
| --- | --- |
| 英語名 | Amazon EMR |
| 正式名称 | Amazon Elastic MapReduce |
| 中国語の説明 | 大数据处理平台 |
| 日本語の説明 | ビッグデータ処理 |
| 出題頻度 | ⭐⭐⭐ |
| 混同しやすいもの | Glue / Athena |

## 一言で理解

Spark や Hadoop などのビッグデータフレームワークを実行するマネージド分析基盤です。

## 要点

- 大規模で独自性の高い分散処理や、フレームワーク制御が必要な負荷に向きます。
- S3、Glue Catalog、EC2、Spot Instance と組み合わせて分析クラスターを構築できます。
- Glue よりランタイムとクラスターを細かく制御できますが、運用責任も増えます。

## 試験ポイント

- 「Spark・Hadoop・大規模な独自処理」は EMR です。
- 低運用の Serverless ETL なら Glue を選びます。

## よくある誤解

- 製品名だけで選ばず、データ型、遅延、制御性、運用、コスト制約を確認します。

## 重要ポイント

**Glue はマネージド ETL、EMR はビッグデータ基盤の制御。**

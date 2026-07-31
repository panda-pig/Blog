---
title: "データ分析・機械学習パイプライン"
fullName: "Automated Data Analytics and Machine Learning Pipeline"
description: "DynamoDB の継続的な変更を S3 データレイクへ送り、同じ履歴を Athena 分析と SageMaker 学習に利用します。"
service: "Data Analytics & ML Pipeline"
category: architecture
kind: concept
lang: ja
topicKey: "数据分析与机器学习管道"
frequency: "出題頻度 ⭐⭐⭐⭐⭐"
date: 2026-07-31
updated: 2026-07-31
tags: ["architecture","数据分析与机器学习管道","AWS"]
notionId: 3ad964dc-ce4a-811e-9a30-deace5b9866a
notionUrl: https://app.notion.com/p/3ad964dcce4a811e9a30deace5b9866a
notionUpdated: "2026-07-30T08:30:54.807Z"
---

## 基本情報

| 項目 | 内容 |
| --- | --- |
| 英語名 | Data Analytics & ML Pipeline |
| 正式名称 | Automated Data Analytics and Machine Learning Pipeline |
| 中国語の説明 | 自动化数据分析与机器学习管道 |
| 日本語の説明 | 自動データ分析・機械学習パイプライン |
| 出題頻度 | ⭐⭐⭐⭐⭐ |
| 混同しやすいもの | DynamoDB / S3 / Kinesis Data Streams / Firehose / Glue / Athena / SageMaker |

## 一言で理解

DynamoDB の継続的な変更を S3 データレイクへ送り、同じ履歴を Athena 分析と SageMaker 学習に利用します。

## 要点

- 典型フロー：DynamoDB → Kinesis Data Streams → Data Firehose → Lambda → S3 → Glue Catalog → Athena / SageMaker。
- DynamoDB は低遅延のオンライン処理、S3 は低コストの履歴分析を担い、本番テーブルの反復 Scan を避けます。
- Data Streams は変更の取り込み・保持、Firehose は配信、Glue Catalog はメタデータを担当します。
- ワークロード分離、疎結合、1 つのデータを複数用途で使うことが核心です。

## 試験ポイント

- 分析や学習で本番 DynamoDB を繰り返し Scan しないようにします。
- Streams/Firehose、Catalog/ETL、Athena/Redshift の役割を区別します。

## よくある誤解

- 製品名だけで選ばず、データ型、遅延、制御性、運用、コスト制約を確認します。

## 重要ポイント

**DynamoDB は業務、S3 は履歴、Athena は検索、SageMaker は学習。**

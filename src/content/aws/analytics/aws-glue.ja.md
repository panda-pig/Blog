---
title: "AWS Glue"
fullName: "AWS Glue"
description: "サーバーレスのデータ統合サービスで、Data Catalog がデータを記述し、Glue ETL がデータを整形・変換します。"
service: "AWS Glue"
category: analytics
kind: service
lang: ja
topicKey: "AWS Glue"
frequency: "出題頻度 ⭐⭐⭐⭐"
date: 2026-07-31
updated: 2026-07-31
tags: ["analytics","AWS Glue","AWS"]
notionId: 3a6964dc-ce4a-81ca-b19a-f1c22750d980
notionUrl: https://app.notion.com/p/3a6964dcce4a81cab19af1c22750d980
notionUpdated: "2026-07-30T08:01:16.710Z"
---

## 基本情報

| 項目 | 内容 |
| --- | --- |
| 英語名 | AWS Glue |
| 正式名称 | AWS Glue |
| 中国語の説明 | 无服务器数据集成与 ETL |
| 日本語の説明 | サーバーレス ETL |
| 出題頻度 | ⭐⭐⭐⭐ |
| 混同しやすいもの | EMR / Data Pipeline |

## 一言で理解

サーバーレスのデータ統合サービスで、Data Catalog がデータを記述し、Glue ETL がデータを整形・変換します。

## 要点

- Crawler がデータソースを調査してスキーマを推論し、Data Catalog が場所・形式・列・型などのメタデータを保存します。
- Glue ETL はデータを抽出・変換・ロードし、Athena、Redshift、ML 向けに準備します。
- Catalog は主要な業務データを保存せず、実データは通常 S3 などにあります。

## 試験ポイント

- 「メタデータ・スキーマ・データカタログ」は Glue Data Catalog です。
- 「Serverless ETL・データ変換」は Glue、Spark/Hadoop を細かく制御するなら EMR を比較します。

## よくある誤解

- 製品名だけで選ばず、データ型、遅延、制御性、運用、コスト制約を確認します。

## 重要ポイント

**Catalog は目録、ETL は加工工場。**

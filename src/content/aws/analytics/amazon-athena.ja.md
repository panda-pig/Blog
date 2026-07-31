---
title: "Amazon Athena"
fullName: "Amazon Athena"
description: "サーバーを管理せず、S3 上のデータを標準 SQL で直接検索します。"
service: "Amazon Athena"
category: analytics
kind: service
lang: ja
topicKey: "Amazon Athena"
frequency: "出題頻度 ⭐⭐⭐⭐"
date: 2026-07-31
updated: 2026-07-31
tags: ["analytics","Amazon Athena","AWS"]
notionId: 3a6964dc-ce4a-8150-90a6-c97531a9499b
notionUrl: https://app.notion.com/p/3a6964dcce4a815090a6c97531a9499b
notionUpdated: "2026-07-30T08:01:19.200Z"
---

## 基本情報

| 項目 | 内容 |
| --- | --- |
| 英語名 | Amazon Athena |
| 正式名称 | Amazon Athena |
| 中国語の説明 | S3 无服务器 SQL 查询 |
| 日本語の説明 | S3 サーバーレス SQL |
| 出題頻度 | ⭐⭐⭐⭐ |
| 混同しやすいもの | Redshift / EMR |

## 一言で理解

サーバーを管理せず、S3 上のデータを標準 SQL で直接検索します。

## 要点

- Athena は S3 データを読み取り、表定義とスキーマには Glue Data Catalog をよく使います。
- 料金はスキャン量に連動し、パーティション、圧縮、Parquet/ORC などの列指向形式でコストと速度を改善できます。
- Athena はクエリサービスであり、データを保持する DWH ではありません。

## 試験ポイント

- 「Serverless SQL・S3 を直接検索・アドホック分析」は Athena です。
- 高頻度で複雑な BI や継続的な DWH 負荷には Redshift を比較します。

## よくある誤解

- 製品名だけで選ばず、データ型、遅延、制御性、運用、コスト制約を確認します。

## 重要ポイント

**S3 が保存し、Glue が記述し、Athena が SQL で検索します。**

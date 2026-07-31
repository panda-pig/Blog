---
title: DynamoDB Accelerator (DAX)
fullName: "DynamoDB Accelerator (DAX)"
description: DynamoDB API と高い互換性を持ち、繰り返す結果整合読み取りをマイクロ秒級にするマネージド Cache。
service: DAX
category: database
kind: service
lang: ja
frequency: "出題頻度 ⭐⭐⭐⭐"
date: 2026-07-29
updated: 2026-07-31
tags: [Database, DynamoDB, Cache]
notionId: 3ac964dc-ce4a-815c-be49-c16168d8604b
notionUrl: https://app.notion.com/p/3ac964dcce4a815cbe49c16168d8604b
notionUpdated: "2026-07-30T04:29:06.012Z"
---

## 基本情報

| 項目 | 内容 |
| --- | --- |
| 英語名 | DynamoDB Accelerator (DAX) |
| 正式名称 | DynamoDB Accelerator (DAX) |
| 中国語の説明 | DynamoDB 专用内存缓存 |
| 日本語の説明 | DynamoDB 専用インメモリキャッシュ |
| 出題頻度 | ⭐⭐⭐⭐ |
| 混同しやすいもの | ElastiCache / RDS Read Replica |

## 一言で理解

> DAX は Application と DynamoDB の間で Key ベースの繰り返し読み取りを Cache し、DynamoDB は永続 Source のままです。

## 主な役割

- Application は DAX Client を使い、Hit は直接、Miss は DynamoDB を読んで Cache する。
- 読み取り中心、同じ Key の反復、Burst Read に適する。
- Multi-AZ DAX Cluster で Cache Layer の可用性を高められる。

## 試験ポイント

- DynamoDB 専用 Cache、マイクロ秒読み取りなら DAX。
- 強い整合読み取り、Write 中心、低 Hit Rate は DAX に不向き。
- RDS、任意 API、Session の Cache は ElastiCache を検討する。

## よくある誤解

- DAX は DynamoDB の代替ではない。
- マイクロ秒級でも全 Request が必ず Hit するわけではない。

## 重要ポイント

> **DynamoDB + 繰り返す結果整合読み取り + マイクロ秒 → DAX。**

## 関連サービス

DynamoDB、ElastiCache、Global Tables、Lambda。

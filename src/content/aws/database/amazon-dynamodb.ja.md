---
title: Amazon DynamoDB
fullName: "Amazon DynamoDB"
description: Primary Key のアクセスパターンを中心に設計し、自動拡張と低遅延を提供する Serverless Key-Value/Document DB。
service: DynamoDB
category: database
kind: service
lang: ja
frequency: "出題頻度 ⭐⭐⭐⭐⭐"
date: 2026-07-29
updated: 2026-07-30
tags: [Database, NoSQL, Serverless]
notionId: 3a6964dc-ce4a-8198-a171-ce08f0f442b0
notionUrl: https://app.notion.com/p/3a6964dcce4a8198a171ce08f0f442b0
notionUpdated: "2026-07-29T08:10:28.597Z"
---

## 基本情報

| 項目 | 内容 |
| --- | --- |
| 英語名 | Amazon DynamoDB |
| 正式名称 | Amazon DynamoDB |
| 中国語名 | 无服务器 Key-Value 与文档型 NoSQL 数据库 |
| 日本語名 | サーバーレス NoSQL データベース |
| 出題頻度 | ⭐⭐⭐⭐⭐ |
| 混同しやすいもの | RDS / DocumentDB / DAX |

## 一言で理解

> DynamoDB は Table、Item、Attribute で構成します。まず Access Pattern を決め、Partition Key、Sort Key、Index を設計します。

## 主な役割

- Partition Key がデータ分散を決め、高 Cardinality で均等なアクセスが Hot Partition を防ぐ。
- Query は Partition Key と Sort Key 条件で読む。Scan は広く読んでから Filter するため Capacity 消費が大きい。
- Global Tables は Multi-Region Multi-Active、DAX は繰り返す結果整合読み取りを Cache する。

## 試験ポイント

- Serverless NoSQL、大規模低遅延、自動拡張なら DynamoDB。
- Shopping Cart、Session、Game State、IoT、Event Metadata が代表例。
- Consistency、Capacity Mode、Index、TTL、Streams、Backup を Access Pattern から選ぶ。

## よくある誤解

- NoSQL でも Primary Key 構造は必要。
- DynamoDB は任意の複雑 JOIN や一時的な関係 Query 向けではない。

## 重要ポイント

> **Table → Item → Attribute。Access Pattern が先、Partition Key が後。Scan より Query。**

## 関連サービス

DAX、Lambda、API Gateway、Streams、Global Tables、AWS Backup。

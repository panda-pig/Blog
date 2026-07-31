---
title: Amazon DocumentDB
fullName: "Amazon DocumentDB (with MongoDB compatibility)"
description: JSON に似た半構造化 Document と MongoDB 互換 Workload のためのマネージドデータベース。
service: DocumentDB
category: database
kind: service
lang: ja
frequency: "出題頻度 ⭐⭐"
date: 2026-07-29
updated: 2026-07-31
tags: [Database, Document, MongoDB]
notionId: 3a6964dc-ce4a-813c-bc72-c55eb53fb37a
notionUrl: https://app.notion.com/p/3a6964dcce4a813cbc72c55eb53fb37a
notionUpdated: "2026-07-30T04:29:02.997Z"
---

## 基本情報

| 項目 | 内容 |
| --- | --- |
| 英語名 | Amazon DocumentDB (with MongoDB compatibility) |
| 正式名称 | Amazon DocumentDB (with MongoDB compatibility) |
| 中国語の説明 | 托管文档数据库 |
| 日本語の説明 | マネージドドキュメントデータベース |
| 出題頻度 | ⭐⭐ |
| 混同しやすいもの | DynamoDB / MongoDB / Neptune |

## 一言で理解

> DocumentDB は入れ子 Attribute、Array、Record ごとに異なる Field を持つ複雑 Document に適します。

## 主な役割

- Content Management、Product Catalog、User Profile、Personalization、Mobile Backend が代表例。
- 互換 MongoDB Driver/API を使えるが、Version、Command、Operator の互換性確認が必要。
- 自動拡張 Storage、Backup、Read Replica、Enterprise Security を提供する。

## 試験ポイント

- MongoDB 互換、複雑 JSON、入れ子 Document、柔軟 Schema なら DocumentDB。
- DynamoDB は Primary Key Access、Serverless Scale、低遅延を重視。
- Neptune は関係 Traversal、RDS は SQL/JOIN/Transaction。

## よくある誤解

- Document DB の Document は Word/PDF ではない。
- MongoDB 互換は全機能が完全一致する意味ではない。

## 重要ポイント

> **複雑 JSON + 入れ子 Attribute + MongoDB 互換 → DocumentDB。**

## 関連サービス

DynamoDB、Neptune、DMS、AWS Backup、VPC、KMS。

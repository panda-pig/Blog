---
title: Amazon Neptune
fullName: "Amazon Neptune"
description: Vertex、Edge、Property で複雑な関係を表現・探索するマネージドグラフデータベース。
service: Neptune
category: database
kind: service
lang: ja
frequency: "出題頻度 ⭐⭐"
date: 2026-07-29
updated: 2026-07-31
tags: [Database, Graph, Analytics]
notionId: 3a6964dc-ce4a-812c-aa72-e53ae5cfe29f
notionUrl: https://app.notion.com/p/3a6964dcce4a812caa72e53ae5cfe29f
notionUpdated: "2026-07-30T04:29:07.777Z"
---

## 基本情報

| 項目 | 内容 |
| --- | --- |
| 英語名 | Amazon Neptune |
| 正式名称 | Amazon Neptune |
| 中国語の説明 | 托管图数据库 |
| 日本語の説明 | マネージドグラフデータベース |
| 出題頻度 | ⭐⭐ |
| 混同しやすいもの | RDS / DocumentDB |

## 一言で理解

> 個々の Record より関係 Path が重要な場合、Neptune は多段 JOIN より自然です。

## 主な役割

- Property Graph や RDF をサポートし、多 Hop Traversal と Pattern Matching を最適化する。
- Social Network、Fraud Detection、Recommendation、Knowledge Graph、Network Topology が代表例。
- Managed Backup、Failover、自動拡張 Storage を提供する。

## 試験ポイント

- Graph、Fraud Detection、Recommendation、Knowledge Graph なら Neptune。
- 通常の Foreign Key 関係だけで Graph DB が必要とは限らない。
- 関係 Traversal 自体が中心問題のとき利点が大きい。

## よくある誤解

- Neptune はすべての複雑 DB 問題の万能解ではない。
- 容量と Quota は現在の Region とサービス資料を確認する。

## 重要ポイント

> **複雑な関係 Path が中心なら Neptune。**

## 関連サービス

DocumentDB、DynamoDB、RDS、S3、Analytics。

---
title: Amazon Aurora
fullName: "Amazon Aurora"
description: MySQL/PostgreSQL 互換で、Compute と分散 Cluster Storage を分離したクラウドネイティブ RDB。
service: Aurora
category: database
kind: service
lang: ja
frequency: "出題頻度 ⭐⭐⭐⭐⭐"
date: 2026-07-29
updated: 2026-07-30
tags: [Database, Relational, Multi-AZ]
notionId: 3a6964dc-ce4a-8118-949e-f11c86e47043
notionUrl: https://app.notion.com/p/3a6964dcce4a8118949ef11c86e47043
notionUpdated: "2026-07-29T08:10:24.915Z"
---

## 基本情報

| 項目 | 内容 |
| --- | --- |
| 英語名 | Amazon Aurora |
| 正式名称 | Amazon Aurora |
| 中国語名 | AWS 云原生关系型数据库 |
| 日本語名 | クラウドネイティブリレーショナルデータベース |
| 出題頻度 | ⭐⭐⭐⭐⭐ |
| 混同しやすいもの | RDS 常规引擎 / DynamoDB |

## 一言で理解

> Aurora は SQL と Transaction を保ちつつ、3 AZ に分散した Storage で耐久性、可用性、読み取り拡張を高めます。

## 主な役割

- Cluster Storage は 3 AZ に 6 Copy を保持するが、DB Instance が 6 台という意味ではない。
- 1 Writer が書き込み、最大 15 Aurora Replica が読み取りと Failover に参加できる。
- Cluster Endpoint は Writer、Reader Endpoint は Reader 間へ読み取りを分散する。

## 試験ポイント

- MySQL/PostgreSQL 互換、クラウドネイティブ、高性能・高可用なら Aurora。
- Aurora Global Database は Region 間読み取りと DR 用で、通常の Multi-AZ とは異なる。
- Serverless v2 は Compute を調整するが DB 設計やコスト管理は必要。

## よくある誤解

- Aurora はすべての RDS Engine をサポートしない。
- 15 Replica は Reader Instance 数で、独立 Storage Copy 数ではない。

## 重要ポイント

> **MySQL/PostgreSQL 互換 + 分散クラウド Storage + 複数 Reader → Aurora。**

## 関連サービス

RDS、Global Database、AWS Backup、DMS、Secrets Manager。

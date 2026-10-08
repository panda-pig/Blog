---
title: "Snapshot vs Read Replica vs DMS vs S3 Import"
fullName: "Snapshot vs Read Replica vs DMS vs S3 Import"
description: "Source Engine、Target Compatibility、停止可能時間を確認し、Point-in-time 移行、継続同期、Table Data Import を分ける。"
service: "Snapshot vs Read Replica vs DMS vs S3 Import"
category: compare
kind: compare
lang: ja
topicKey: "Snapshot vs Read Replica vs DMS vs S3 Import"
frequency: "高频对比"
date: 2026-10-08
updated: 2026-10-08
tags: ["compare","Snapshot vs Read Replica vs DMS vs S3 Import","AWS"]
notionId: 3f3964dc-ce4a-8108-bab2-d09539dba46c
notionUrl: https://app.notion.com/p/3f3964dcce4a8108bab2d09539dba46c
notionUpdated: "2026-10-08T01:45:33.847Z"
---
## 基本情報

| 項目 | 内容 |
| --- | --- |
| 英語 / 正式名称 | Snapshot vs Read Replica vs DMS vs S3 Import |
| 中国語 | 数据库迁移方法对比 |
| 日本語 | Database 移行方式の比較 |
| 復習優先度 | 高频对比 |
| 混同しやすい項目 | Point-in-time copy / Continuous replication / Table import |

## 一言で理解

Source Engine、Target Compatibility、停止可能時間を確認し、Point-in-time 移行、継続同期、Table Data Import を分ける。

## 要点整理

Snapshot は時点 Copy、Aurora 移行 Replica は変更追随、DMS は Full Load + CDC、S3 Import は Backup Format と Target の入口に依存する。

## 学習ポイント

- 異種 Engine では Schema／Code 変換後に DMS で Data を移す。
- Cutover 前に書き込み停止、追随、Data 検証、接続切替を行う。
- Percona XtraBackup と mysqldump は Format と Restore Path が異なる。
- Replica Lag=0 は観測値で安全な Cutover 手順そのものではない。

## よくある誤解

- Aurora PostgreSQL の aws_s3 は Table Data Import で任意の Full Database Restore ではない。
- Snapshot Export to S3 は汎用 Restore Input ではない。

## 重要ポイント

**時点は Snapshot、低停止同期は Replica／DMS、S3 File は Format と入口を確認する。**

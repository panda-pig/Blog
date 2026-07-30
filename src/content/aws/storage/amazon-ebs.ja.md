---
title: Amazon EBS
fullName: "Amazon Elastic Block Store"
description: EC2 に提供する、ホストローカルストレージから独立した容量・性能設定可能な永続ブロックボリューム。
service: EBS
category: storage
kind: service
lang: ja
frequency: "出題頻度 ⭐⭐⭐⭐⭐"
date: 2026-07-29
updated: 2026-07-30
tags: [Storage, Block Storage, EC2]
notionId: 3a6964dc-ce4a-8126-968f-e04a57570ada
notionUrl: https://app.notion.com/p/3a6964dcce4a8126968fe04a57570ada
notionUpdated: "2026-07-29T04:41:27.242Z"
---

## 基本情報

| 項目 | 内容 |
| --- | --- |
| 英語名 | Amazon EBS |
| 正式名称 | Amazon Elastic Block Store |
| 中国語名 | 弹性块存储 |
| 日本語名 | ブロックストレージ |
| 出題頻度 | ⭐⭐⭐⭐⭐ |
| 混同しやすいもの | Instance Store / EFS / S3 |

## 一言で理解

> EBS は同じ AZ の EC2 に接続するクラウドディスクです。OS、データベース、低遅延ランダム I/O に適します。

## 主な役割

- EBS は AZ 単位。別 AZ への移行は通常 Snapshot から新しい Volume を作成する。
- EC2 の Stop では保持され、Terminate 時の削除は Delete on Termination に依存する。
- IOPS は秒間操作数、Throughput は秒間データ量を表す。

## 試験ポイント

- 一時的で再生成可能なデータは Instance Store、永続 OS や DB は EBS。
- gp3/gp2 は汎用、io2/io1 は重要な高 IOPS、st1/sc1 は順次スループットや低頻度データ向け。
- Snapshot は増分ブロック単位の時点バックアップで、DLM がライフサイクルを自動化する。

## よくある誤解

- 永続であっても Instance 終了時に必ず残るとは限らない。
- EBS は標準で Multi-AZ 共有ファイルシステムではない。

## 重要ポイント

> **一時ローカルは Instance Store、永続ディスクは EBS、AZ 間は Snapshot から再作成。**

## 関連サービス

EC2、EBS Snapshot、DLM、AWS Backup、KMS。

---
title: "AWS Database Migration Service"
fullName: "AWS Database Migration Service"
description: "Source Database を稼働させたまま、低停止時間で移行または継続レプリケーションを行う。"
service: "AWS Database Migration Service"
category: migration
kind: service
lang: ja
topicKey: "AWS Database Migration Service"
frequency: "出題頻度 ⭐⭐⭐⭐"
date: 2026-07-30
updated: 2026-07-30
tags: ["migration","AWS Database Migration Service","AWS"]
notionId: 3a6964dc-ce4a-811f-a33e-cb3fff35d10d
notionUrl: https://app.notion.com/p/3a6964dcce4a811fa33ecb3fff35d10d
notionUpdated: "2026-07-29T08:11:51.664Z"
---

## 基本情報

| 項目 | 内容 |
| --- | --- |
| 英語名 | AWS Database Migration Service (AWS DMS) |
| 正式名称 | AWS Database Migration Service |
| 中国語の説明 | 数据库迁移服务 |
| 日本語の説明 | データベース移行サービス |
| 出題頻度 | ⭐⭐⭐⭐ |
| 混同しやすいもの | AWS SCT / EC2 Lift and Shift |

## 一言で理解

> Source Database を稼働させたまま、低停止時間で移行または継続レプリケーションを行う。

## 要点

- Full Load、Change Data Capture、または両方を使って対応 Source / Target 間で移行する。
- DMS はデータ移動を担当し、異種 Database では Schema / Code 変換に AWS SCT も必要になる場合がある。
- Replication Instance または Serverless Replication Resource が転送を実行する。

## 試験での判断

> 本番前に Data Type、LOB、Network、性能、Validation、Cutover を検証する。

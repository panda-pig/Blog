---
title: "DMS vs SCT"
fullName: "DMS vs SCT"
description: "DMS は Database Data を移動・複製し、AWS SCT は異種移行の Schema / Code を変換する。"
service: "AWS Compare"
category: compare
kind: compare
lang: ja
topicKey: "DMS vs SCT"
frequency: "学習まとめ"
date: 2026-07-30
updated: 2026-08-15
tags: ["compare","DMS vs SCT","AWS"]
notionId: 3a6964dc-ce4a-81fa-9b04-f271ad097934
notionUrl: https://app.notion.com/p/3a6964dcce4a81fa9b04f271ad097934
notionUpdated: "2026-08-05T01:42:29.235Z"
---

## 一言で理解

> DMS は Database Data を移動・複製し、AWS SCT は異種移行の Schema / Code を変換する。

## 要点

- DMS は Full Load と Change Data Capture で Downtime を減らす。
- SCT は Source Schema を分析し、可能な Database Object と Embedded SQL を変換する。
- 同種 Database 移行では Schema 変換なしで DMS だけを使う場合がある。

| 例 | 種類 | 組み合わせ |
| --- | --- | --- |
| MySQL → RDS for MySQL | 同種 | DMS |
| Oracle → RDS for Oracle | 同種 | DMS |
| Oracle → Aurora PostgreSQL | 異種 | SCT + DMS |
| SQL Server → Aurora MySQL | 異種 | SCT + DMS |

## 試験での判断

> 異種移行では通常 SCT で変換し、DMS で実 Data を転送する。

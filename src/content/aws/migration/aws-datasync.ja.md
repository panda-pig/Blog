---
title: "AWS DataSync"
fullName: "AWS DataSync"
description: "オンプレミス、AWS、他クラウド間の File / Object を高速にオンライン転送・同期する。"
service: "AWS DataSync"
category: migration
kind: service
lang: ja
topicKey: "AWS DataSync"
frequency: "出題頻度 ⭐⭐⭐⭐"
date: 2026-07-30
updated: 2026-07-30
tags: ["migration","AWS DataSync","AWS"]
notionId: 3a6964dc-ce4a-8155-9ae9-f3e18ec458d5
notionUrl: https://app.notion.com/p/3a6964dcce4a81559ae9f3e18ec458d5
notionUpdated: "2026-07-30T01:52:42.983Z"
---

## 基本情報

| 項目 | 内容 |
| --- | --- |
| 英語名 | AWS DataSync |
| 正式名称 | AWS DataSync |
| 中国語の説明 | 在线数据传输 |
| 日本語の説明 | オンラインデータ転送 |
| 出題頻度 | ⭐⭐⭐⭐ |
| 混同しやすいもの | Storage Gateway / Snow Family |

## 一言で理解

> オンプレミス、AWS、他クラウド間の File / Object を高速にオンライン転送・同期する。

## 要点

- Source / Destination Location を作成し、Task で転送、Metadata、検証、Schedule を定義する。
- オンプレミスや自主管理 Storage では DataSync Agent を使うことが多いが、要否は Source / Destination による。
- DataSync はデータを搬送・同期し、Storage Gateway は長期的な Hybrid Storage Interface を提供する。

## 試験での判断

> Network 転送が困難なら Snow Family、Managed File Transfer Protocol は Transfer Family、Database は DMS。

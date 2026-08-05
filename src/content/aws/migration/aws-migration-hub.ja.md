---
title: "AWS Migration Hub"
fullName: "AWS Migration Hub"
description: "複数の移行ツールを横断して、検出、計画、進捗追跡を一元化する。"
service: "AWS Migration Hub"
category: migration
kind: service
lang: ja
topicKey: "AWS Migration Hub"
frequency: "試験頻度 ⭐⭐"
date: 2026-07-31
updated: 2026-08-05
tags: ["migration", "AWS Migration Hub", "AWS"]
notionId: 3a6964dc-ce4a-8147-b0bc-cdd879225f2b
notionUrl: https://app.notion.com/p/3a6964dcce4a8147b0bccdd879225f2b
notionUpdated: "2026-08-05T01:39:41.105Z"
---

## 基本情報

| 項目 | 内容 |
| --- | --- |
| 英語 | AWS Migration Hub |
| 正式名称 | AWS Migration Hub |
| 中国語 | 迁移跟踪中心 |
| 日本語 | 移行追跡ハブ |
| 試験頻度 | ⭐⭐ |
| 混同しやすいサービス | MGN |

## ひとことで

複数の移行ツールを横断して、検出、計画、進捗追跡を一元化する。

## 段階まとめ

- **主な役割**：複数の移行ツールを横断して、検出、計画、進捗追跡を一元化する。
- **試験頻度**：⭐⭐
- **比較ポイント**：MGN

## 覚え方

AWS Migration Hub = 移行追跡ハブ

## 主な役割

- Server、Application、Migration Wave を一つの View で計画・追跡する。
- 複数 Tool の Status を集約し、Blocker と進捗を確認する。
- 関連機能は AWS Transform へ段階的に統合されるが、旧問題では Migration Hub の名称も出る。

Migration Hub は **Management / Visualization Layer** であり Replication Engine ではない。Server は Transform MGN、Database は DMS、File は DataSync / Transfer Family。

---
title: "AWS Application Discovery Service"
fullName: "AWS Application Discovery Service"
description: "オンプレミスサーバーの構成、使用率、依存関係を収集する。"
service: "AWS Application Discovery Service"
category: migration
kind: service
lang: ja
topicKey: "AWS Application Discovery Service"
frequency: "試験頻度 ⭐⭐"
date: 2026-07-31
updated: 2026-08-05
tags: ["migration", "AWS Application Discovery Service", "AWS"]
notionId: 3a6964dc-ce4a-8126-ba15-cba01a50d25f
notionUrl: https://app.notion.com/p/3a6964dcce4a8126ba15cba01a50d25f
notionUpdated: "2026-08-05T01:39:41.105Z"
---

## 基本情報

| 項目 | 内容 |
| --- | --- |
| 英語 | AWS Application Discovery Service |
| 正式名称 | AWS Application Discovery Service |
| 中国語 | 本地环境发现 |
| 日本語 | オンプレミス環境検出 |
| 試験頻度 | ⭐⭐ |
| 混同しやすいサービス | Migration Hub |

## ひとことで

オンプレミスサーバーの構成、使用率、依存関係を収集する。

## 段階まとめ

- **主な役割**：オンプレミスサーバーの構成、使用率、依存関係を収集する。
- **試験頻度**：⭐⭐
- **比較ポイント**：Migration Hub

## 覚え方

AWS Application Discovery Service = オンプレミス環境検出

## 収集と利用

- Agentless は構成と利用率を素早く Inventory 化し、Agent-based は Process、Connection、Dependency まで収集する。
- 結果は Application 境界と Migration Wave の特定に使い、Workload 自体は移行しない。
- Discovery、Application Group 化、Migration Evaluator による Business Case、Strategy と Service 選定の順で使う。

**Discovery Service** は現状と依存関係、**Migration Evaluator** は Business Case、**Migration Hub** は Project と進捗を扱う。

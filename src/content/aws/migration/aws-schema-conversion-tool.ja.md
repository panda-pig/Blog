---
title: "AWS Schema Conversion Tool"
fullName: "AWS Schema Conversion Tool (AWS SCT)"
description: "異種データベースエンジン間でスキーマとコードオブジェクトを変換する。"
service: "AWS Schema Conversion Tool"
category: migration
kind: service
lang: ja
topicKey: "AWS Schema Conversion Tool"
frequency: "試験頻度 ⭐⭐⭐"
date: 2026-07-31
updated: 2026-08-05
tags: ["migration", "AWS Schema Conversion Tool", "AWS"]
notionId: 3a6964dc-ce4a-8163-b911-fcb47562d655
notionUrl: https://app.notion.com/p/3a6964dcce4a8163b911fcb47562d655
notionUpdated: "2026-08-05T01:39:41.105Z"
---

## 基本情報

| 項目 | 内容 |
| --- | --- |
| 英語 | AWS Schema Conversion Tool |
| 正式名称 | AWS Schema Conversion Tool (AWS SCT) |
| 中国語 | 数据库架构转换工具 |
| 日本語 | スキーマ変換ツール |
| 試験頻度 | ⭐⭐⭐ |
| 混同しやすいサービス | DMS |

## ひとことで

異種データベースエンジン間でスキーマとコードオブジェクトを変換する。

## 段階まとめ

- **主な役割**：異種データベースエンジン間でスキーマとコードオブジェクトを変換する。
- **試験頻度**：⭐⭐⭐
- **比較ポイント**：DMS

## 覚え方

AWS Schema Conversion Tool = スキーマ変換ツール

## 基本 Workflow

1. Source / Target Database に接続し、Assessment Report を作成する。
2. 互換性のある Schema、View、Stored Procedure、Application SQL を変換する。
3. 自動変換できない Object を修正して Target Schema を適用する。
4. AWS DMS で Full Load と CDC を実行する。

**SCT は構造と Code、DMS は Data を扱う。** 異なる Database Engine 間が SCT の代表的な用途で、Assessment Report は Data 移行完了を意味しない。

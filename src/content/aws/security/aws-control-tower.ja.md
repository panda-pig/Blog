---
title: "AWS Control Tower"
fullName: "AWS Control Tower"
description: "ベストプラクティスに基づく標準的なマルチアカウント AWS 環境を構築・継続統制します。"
service: "AWS Control Tower"
category: security
kind: service
lang: ja
topicKey: "AWS Control Tower"
frequency: "考试频率 ⭐⭐⭐⭐"
date: 2026-08-01
updated: 2026-08-01
tags: ["security", "AWS Control Tower", "AWS"]
notionId: 3a6964dc-ce4a-819b-9a04-ec24282b93ea
notionUrl: https://app.notion.com/p/3a6964dcce4a819b9a04ec24282b93ea
notionUpdated: "2026-07-31T08:22:50.099Z"
---

## 基本情報

| 項目 | 内容 |
| --- | --- |
| 英語 | AWS Control Tower |
| 正式名称 | AWS Control Tower |
| 中国語 | 多账户 Landing Zone 与治理 |
| 日本語 | AWS Control Tower（マルチアカウント環境の構築・統制） |
| 試験頻度 | ⭐⭐⭐⭐ |
| 混同しやすいサービス | AWS Organizations / AWS Config |

## ひとことで理解

ベストプラクティスに基づく標準的なマルチアカウント AWS 環境を構築・継続統制します。

## 主な機能と利用場面

- Landing Zone は事前構成されたマルチアカウント基盤です。
- Account Factory は標準テンプレートから新しいアカウントを作成・設定します。
- 予防的、検出型、プロアクティブな Control でガバナンス要件を実施します。
- Dashboard で Account、OU、Control の状態を一元確認します。
- Organizations を基盤に IAM Identity Center、Config、CloudTrail、Service Catalog と連携します。

## 試験ポイントと注意点

- 標準 Landing Zone、新規アカウントの自動管理、統制 Control が必要なら Control Tower です。
- 予防的 Control は SCP、検出型 Control は Config を利用することが一般的です。
- Organizations や Workload 単位の設計を置き換えるものではありません。

## 重要ポイント

**Organizations が基盤で、Control Tower が標準環境を構築・継続統制します。**

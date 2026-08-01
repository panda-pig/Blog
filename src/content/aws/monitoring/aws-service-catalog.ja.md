---
title: "AWS Service Catalog"
fullName: "AWS Service Catalog"
description: "承認済みの標準 Cloud Product を Catalog 化し、統制されたセルフサービスで提供します。"
service: "AWS Service Catalog"
category: monitoring
kind: service
lang: ja
topicKey: "AWS Service Catalog"
frequency: "考试频率 ⭐⭐⭐⭐"
date: 2026-08-01
updated: 2026-08-01
tags: ["monitoring", "AWS Service Catalog", "AWS"]
notionId: 3ae964dc-ce4a-8193-b94e-f813e47ed756
notionUrl: https://app.notion.com/p/3ae964dcce4a8193b94ef813e47ed756
notionUpdated: "2026-07-31T08:16:23.065Z"
---

## 基本情報

| 項目 | 内容 |
| --- | --- |
| 英語 | AWS Service Catalog |
| 正式名称 | AWS Service Catalog |
| 中国語 | 已批准 IT 服务目录 |
| 日本語 | AWS Service Catalog（承認済み IT サービスのカタログ管理） |
| 試験頻度 | ⭐⭐⭐⭐ |
| 混同しやすいサービス | AWS Marketplace / AWS Control Tower |

## ひとことで理解

承認済みの標準 Cloud Product を Catalog 化し、統制されたセルフサービスで提供します。

## 主な機能と利用場面

- Portfolio が Product をまとめ、利用者を定義します。
- Product は CloudFormation Template で定義され、環境全体を表すこともできます。
- 管理者が Version を公開し、Launch / Template Constraint を設定します。
- 利用者は広範な Infrastructure 権限を持たず、Provisioned Product を起動できます。
- 標準 Test 環境、3 層 Stack、Instance Size、Network、Tag の統制に利用します。

## 試験ポイントと注意点

- 承認 Product Catalog と統制された Self-Service Deployment は Service Catalog です。
- Marketplace は第三者 Software / Data 市場、Control Tower は Multi-Account Landing Zone を統制します。
- Service Catalog は配備可能な Product、License Manager は License 使用量を管理します。

## 重要ポイント

**承認 Template を Product 化し、利用者へ統制された Self-Service Deployment を提供します。**

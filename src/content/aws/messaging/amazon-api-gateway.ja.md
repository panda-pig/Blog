---
title: "Amazon API Gateway"
fullName: "Amazon API Gateway"
description: "API の作成、公開、保護、スロットリング、監視を行うマネージドフロントドア。"
service: "Amazon API Gateway"
category: messaging
kind: service
lang: ja
topicKey: "Amazon API Gateway"
frequency: "出題頻度 ⭐⭐⭐⭐⭐"
date: 2026-07-30
updated: 2026-07-30
tags: ["messaging","Amazon API Gateway","AWS"]
notionId: 3aa964dc-ce4a-816a-9659-d08ad7142c2d
notionUrl: https://app.notion.com/p/3aa964dcce4a816a9659d08ad7142c2d
notionUpdated: "2026-07-27T05:39:16.622Z"
---

## 基本情報

| 項目 | 内容 |
| --- | --- |
| 英語名 | Amazon API Gateway |
| 正式名称 | Amazon API Gateway |
| 中国語名 | API 网关 |
| 日本語名 | Amazon API Gateway |
| 出題頻度 | ⭐⭐⭐⭐⭐ |
| 混同しやすいもの | ALB / Internet Gateway / NAT Gateway |

## 一言で理解

> API の作成、公開、保護、スロットリング、監視を行うマネージドフロントドア。

## 要点

- HTTP、REST、WebSocket API を Client に公開し、Request を Backend へ転送する。
- Backend には Lambda、HTTP Service、VPC Link を使う Private Integration などがある。
- 認証、Throttling、Validation、Stage、Cache、Monitoring が主要設計点。

## 試験での判断

> Application API の入口であり、VPC の Route Gateway ではない。

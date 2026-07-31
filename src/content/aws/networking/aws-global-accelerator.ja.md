---
title: "AWS Global Accelerator"
fullName: "AWS Global Accelerator"
description: "固定 Anycast IP を提供し、TCP/UDP 通信を AWS グローバルネットワーク経由で正常な Regional Endpoint へ転送する。"
service: "AWS Global Accelerator"
category: networking
kind: service
lang: ja
topicKey: "AWS Global Accelerator"
frequency: "出題頻度 ⭐⭐⭐⭐"
date: 2026-07-30
updated: 2026-07-31
tags: ["networking","AWS Global Accelerator","AWS"]
notionId: 3a6964dc-ce4a-814f-9602-eca85431f9f2
notionUrl: https://app.notion.com/p/3a6964dcce4a814f9602eca85431f9f2
notionUpdated: "2026-07-30T04:29:19.082Z"
---

## 基本情報

| 項目 | 内容 |
| --- | --- |
| 英語名 | AWS Global Accelerator |
| 正式名称 | AWS Global Accelerator |
| 中国語の説明 | 全球网络加速 |
| 日本語の説明 | グローバルアクセラレーター |
| 出題頻度 | ⭐⭐⭐⭐ |
| 混同しやすいもの | CloudFront / Route 53 / Direct Connect |

## 一言で理解

> 固定 Anycast IP を提供し、TCP/UDP 通信を AWS グローバルネットワーク経由で正常な Regional Endpoint へ転送する。

## 要点

- コンテンツをキャッシュせず、グローバルアプリの経路安定性とフェイルオーバーを改善する。
- Endpoint には ALB、NLB、EC2、Elastic IP を利用できる。
- ヘルスチェックにより異常な Endpoint からトラフィックを退避する。

## 試験での判断

> HTTP キャッシュは CloudFront、グローバル経路最適化と固定入口 IP は Global Accelerator。

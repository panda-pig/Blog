---
title: "AWS Direct Connect"
fullName: "AWS Direct Connect"
description: "オンプレミスと AWS を専用線で接続し、帯域と遅延を安定させるプライベート接続サービス。"
service: "AWS Direct Connect"
category: networking
kind: service
lang: ja
topicKey: "AWS Direct Connect"
frequency: "出題頻度 ⭐⭐⭐⭐"
date: 2026-07-30
updated: 2026-08-15
tags: ["networking","AWS Direct Connect","AWS"]
notionId: 3a6964dc-ce4a-812a-be47-ffe0e7198291
notionUrl: https://app.notion.com/p/3a6964dcce4a812abe47ffe0e7198291
notionUpdated: "2026-08-05T01:42:28.433Z"
---

## 基本情報

| 項目 | 内容 |
| --- | --- |
| 英語名 | AWS Direct Connect |
| 正式名称 | AWS Direct Connect |
| 中国語の説明 | AWS 专线连接 |
| 日本語の説明 | 専用線接続 |
| 出題頻度 | ⭐⭐⭐⭐ |
| 混同しやすいもの | Site-to-Site VPN / Global Accelerator |

## 一言で理解

> オンプレミスと AWS を専用線で接続し、帯域と遅延を安定させるプライベート接続サービス。

## 要点

- Public Internet 経路を避けるが、標準では暗号化されない。
- 設計に応じて Virtual Interface から Public AWS Services、VPC、Transit Gateway へ接続する。
- 本番では拠点、装置、回線の冗長化を検討する。

## 試験での判断

> 暗号化された Internet 接続は VPN、専用線上の暗号化には Direct Connect と VPN の併用を検討する。

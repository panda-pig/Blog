---
title: "AWS Transit Gateway"
fullName: "AWS Transit Gateway"
description: "多数の VPC とオンプレミスネットワークを集中ルーティングで接続する Regional Hub。"
service: "AWS Transit Gateway"
category: networking
kind: service
lang: ja
topicKey: "AWS Transit Gateway"
frequency: "出題頻度 ⭐⭐⭐⭐"
date: 2026-07-30
updated: 2026-07-30
tags: ["networking","AWS Transit Gateway","AWS"]
notionId: 3a6964dc-ce4a-8124-a67f-cdc37acbaba8
notionUrl: https://app.notion.com/p/3a6964dcce4a8124a67fcdc37acbaba8
notionUpdated: "2026-07-27T05:40:32.699Z"
---

## 基本情報

| 項目 | 内容 |
| --- | --- |
| 英語名 | AWS Transit Gateway |
| 正式名称 | AWS Transit Gateway |
| 中国語名 | 中转网关 |
| 日本語名 | トランジットゲートウェイ |
| 出題頻度 | ⭐⭐⭐⭐ |
| 混同しやすいもの | VPC Peering / Virtual Private Gateway |

## 一言で理解

> 多数の VPC とオンプレミスネットワークを集中ルーティングで接続する Regional Hub。

## 要点

- 多数の Point-to-Point Peering や VPN 接続の複雑さを減らす。
- Attachment で VPC、VPN、Direct Connect Gateway、Peered Transit Gateway を接続する。
- Transit Gateway Route Table によりネットワーク群を分離できる。

## 試験での判断

> ルーティング Hub であり Firewall ではないため、検査とセキュリティ制御は別途設計する。

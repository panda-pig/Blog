---
title: "VPC Peering vs Transit Gateway vs PrivateLink"
fullName: "VPC Peering vs Transit Gateway vs PrivateLink"
description: "少数 VPC の直接接続は Peering、多数 Network の Hub は TGW、特定 Service の公開は PrivateLink。"
service: "VPC Peering vs Transit Gateway vs PrivateLink"
category: compare
kind: compare
lang: ja
topicKey: "VPC Peering vs Transit Gateway vs PrivateLink"
frequency: "高频对比"
date: 2026-10-08
updated: 2026-10-08
tags: ["compare","VPC Peering vs Transit Gateway vs PrivateLink","AWS"]
notionId: 3f3964dc-ce4a-8182-ad3f-dd048402b06c
notionUrl: https://app.notion.com/p/3f3964dcce4a8182ad3fdd048402b06c
notionUpdated: "2026-10-08T01:19:18.066Z"
---
## 基本情報

| 項目 | 内容 |
| --- | --- |
| 英語 / 正式名称 | VPC Peering vs Transit Gateway vs PrivateLink |
| 中国語 | VPC 私网连接方案对比 |
| 日本語 | VPC Private 接続方式の比較 |
| 復習優先度 | 高频对比 |
| 混同しやすい項目 | Network connectivity / Service exposure |

## 一言で理解

少数 VPC の直接接続は Peering、多数 Network の Hub は TGW、特定 Service の公開は PrivateLink。

## 要点整理

Peering は Point-to-point で非推移的、TGW は Hub-and-spoke と Route Table 分離、PrivateLink は Network 全体ではなく Service を公開する。

## 学習ポイント

- Peering では CIDR が重複できない。
- TGW Association は Ingress の Route Table、Propagation は Route の伝播先を決める。
- PrivateLink は Address Space が重複していても Service Access に使える。
- Path 作成後も IAM、Resource Policy、Endpoint Policy、TLS が必要。

## よくある誤解

- TGW が推移的でも Route は自動完成しない。
- PrivateLink は汎用 Transit Network ではない。

## 重要ポイント

**2 Network は Peering、Hub は TGW、特定 Service は PrivateLink。**

---
title: "IGW、NAT、EIGW、VPC Endpoint"
fullName: "IGW vs NAT Gateway vs NAT Instance vs Egress-only IGW vs VPC Endpoint"
description: "Internet、IPv4-only Target、特定 AWS Service のどこへ向かうかを先に確認して出口を選ぶ。"
service: "IGW vs NAT Gateway vs NAT Instance vs Egress-only IGW vs VPC Endpoint"
category: compare
kind: compare
lang: ja
topicKey: "IGW vs NAT Gateway vs NAT Instance vs Egress-only IGW vs VPC Endpoint"
frequency: "高频对比"
date: 2026-10-08
updated: 2026-10-08
tags: ["compare","IGW vs NAT Gateway vs NAT Instance vs Egress-only IGW vs VPC Endpoint","AWS"]
notionId: 3f3964dc-ce4a-81f0-b01d-e5d7ed9d80b0
notionUrl: https://app.notion.com/p/3f3964dcce4a81f0b01de5d7ed9d80b0
notionUpdated: "2026-10-08T01:19:18.066Z"
---
## 基本情報

| 項目 | 内容 |
| --- | --- |
| 英語 / 正式名称 | IGW vs NAT Gateway vs NAT Instance vs Egress-only IGW vs VPC Endpoint |
| 中国語 | 互联网出口与私有服务访问对比 |
| 日本語 | Internet 出口と Private Service Access の比較 |
| 復習優先度 | 高频对比 |
| 混同しやすい項目 | Internet / IPv4-only / AWS Service / Administrative Access |

## 一言で理解

Internet、IPv4-only Target、特定 AWS Service のどこへ向かうかを先に確認して出口を選ぶ。

## 要点整理

IGW は直接 Public 接続、NAT は Private IPv4 外向き通信、EIGW は IPv6 外向き開始のみ、Endpoint は特定 Service への Private Access を提供する。

## 学習ポイント

- 同一 Region の S3／DynamoDB へ大量アクセスするなら Gateway Endpoint。
- Interface Endpoint は Subnet ENI、Private IP、Security Group を使う。
- 固定 IPv4 出口には通常 Public NAT。
- IPv6→IPv4 は EIGW ではなく DNS64／NAT64。

## よくある誤解

- NAT Gateway に Security Group は関連付けられない。
- Bastion は管理入口であり NAT ではない。

## 重要ポイント

**Internet、IPv4-only、特定 Service、管理者 Login は別の要件。**

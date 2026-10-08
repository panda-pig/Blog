---
title: "VPC Peering"
fullName: "VPC Peering"
description: "重複しない CIDR の 2 VPC を AWS Network 上で直接接続する非推移的な Private 接続。"
service: "VPC Peering"
category: networking
kind: service
lang: ja
topicKey: "VPC Peering"
frequency: "考试频率 ⭐⭐⭐⭐⭐"
date: 2026-10-08
updated: 2026-10-08
tags: ["networking","VPC Peering","AWS"]
notionId: 3f3964dc-ce4a-81f6-a599-d72ed784da65
notionUrl: https://app.notion.com/p/3f3964dcce4a81f6a599d72ed784da65
notionUpdated: "2026-10-08T01:13:37.200Z"
---
## 基本情報

| 項目 | 内容 |
| --- | --- |
| 英語 / 正式名称 | VPC Peering |
| 中国語 | VPC 对等连接 |
| 日本語 | VPC ピアリング |
| 復習優先度 | 考试频率 ⭐⭐⭐⭐⭐ |
| 混同しやすい項目 | Transit Gateway / PrivateLink |

## 一言で理解

重複しない CIDR の 2 VPC を AWS Network 上で直接接続する非推移的な Private 接続。

## 要点整理

承認後も双方の Route Table に相手 CIDR への Route を追加し、Security Group と NACL で許可する。

## 学習ポイント

- Account 間、Region 間でも利用できる。
- A–B と B–C があっても A–C は自動接続されない。
- 相手側の IGW、NAT、VPN、Direct Connect、Gateway Endpoint を借用できない。
- VPC 数が増えたら Transit Gateway を検討する。

## よくある誤解

- Accepted の状態だけでは疎通しない。双方向 Route が必要。
- CIDR が重複し、特定 Service だけを公開するなら PrivateLink を検討する。

## 重要ポイント

**2 VPC、CIDR 非重複、双方向 Route、非推移的接続。**

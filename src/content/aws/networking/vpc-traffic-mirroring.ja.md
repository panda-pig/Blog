---
title: "VPC Traffic Mirroring"
fullName: "Amazon VPC Traffic Mirroring"
description: "対応 ENI の Packet を監視装置へ複製し、元の業務 Traffic は通常経路を通り続ける。"
service: "Amazon VPC Traffic Mirroring"
category: networking
kind: service
lang: ja
topicKey: "Amazon VPC Traffic Mirroring"
frequency: "考试频率 ⭐⭐⭐"
date: 2026-10-08
updated: 2026-10-08
tags: ["networking","Amazon VPC Traffic Mirroring","AWS"]
notionId: 3f3964dc-ce4a-8129-83bf-d15a04f6844b
notionUrl: https://app.notion.com/p/3f3964dcce4a812983bfd15a04f6844b
notionUpdated: "2026-10-08T01:13:37.200Z"
---
## 基本情報

| 項目 | 内容 |
| --- | --- |
| 英語 / 正式名称 | Amazon VPC Traffic Mirroring |
| 中国語 | VPC 流量镜像 |
| 日本語 | VPC トラフィックミラーリング |
| 復習優先度 | 考试频率 ⭐⭐⭐ |
| 混同しやすい項目 | VPC Flow Logs / Gateway Load Balancer / Network Firewall |

## 一言で理解

対応 ENI の Packet を監視装置へ複製し、元の業務 Traffic は通常経路を通り続ける。

## 要点整理

Source、Target、Session／Filter が主要要素で、Target は ENI、NLB、Gateway Load Balancer Endpoint。

## 学習ポイント

- Forensics、侵入分析、Packet 単位の障害調査に使う。
- Mirror は Out-of-band Copy で元 Traffic を自動遮断しない。
- 暗号化 Packet は複製後も暗号化されたまま。
- Source から Target への有効な Network Path が必要。

## よくある誤解

- Flow Logs は Metadata、Traffic Mirroring は Packet Copy を扱う。
- Inline Blocking には Network Firewall または GWLB Appliance Chain を使う。

## 重要ポイント

**Copy は観測、Inline Inspection は制御のために使う。**

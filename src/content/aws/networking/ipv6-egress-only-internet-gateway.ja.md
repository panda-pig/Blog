---
title: "IPv6 & Egress-only Internet Gateway"
fullName: "IPv6 and Egress-only Internet Gateway"
description: "EIGW は Public IPv6 Workload に外向き開始のみの Internet Path を提供し、対応する戻り通信を許可する。NAT は行わない。"
service: "IPv6 and Egress-only Internet Gateway"
category: networking
kind: service
lang: ja
topicKey: "IPv6 and Egress-only Internet Gateway"
frequency: "考试频率 ⭐⭐⭐⭐"
date: 2026-10-08
updated: 2026-10-08
tags: ["networking","IPv6 and Egress-only Internet Gateway","AWS"]
notionId: 3f3964dc-ce4a-81fa-a77f-f09140280e7d
notionUrl: https://app.notion.com/p/3f3964dcce4a81faa77ff09140280e7d
notionUpdated: "2026-10-08T01:13:37.200Z"
---
## 基本情報

| 項目 | 内容 |
| --- | --- |
| 英語 / 正式名称 | IPv6 and Egress-only Internet Gateway |
| 中国語 | IPv6 与仅出站互联网网关 |
| 日本語 | IPv6 と Egress-only Internet Gateway |
| 復習優先度 | 考试频率 ⭐⭐⭐⭐ |
| 混同しやすい項目 | Internet Gateway / NAT Gateway / NAT64 / Dual Stack |

## 一言で理解

EIGW は Public IPv6 Workload に外向き開始のみの Internet Path を提供し、対応する戻り通信を許可する。NAT は行わない。

## 要点整理

IPv4 と IPv6 は CIDR、Route、Security Rule が別で、::/0 → EIGW が IPv6 外向き通信を制御する。

## 学習ポイント

- IPv6 から IPv6 への外向き通信には EIGW。
- IPv6 Client から IPv4-only Target へは DNS64／NAT64。
- Dual Stack Subnet でも IPv4 Address が枯渇する場合がある。
- Public IPv6 でも SG／NACL は必要。

## よくある誤解

- 0.0.0.0/0 は IPv6 を、::/0 は IPv4 を対象にしない。
- EIGW は NAT も IPv6→IPv4 変換も行わない。

## 重要ポイント

**IPv6→IPv6 の外向き通信は EIGW、IPv6→IPv4 変換は NAT64。**

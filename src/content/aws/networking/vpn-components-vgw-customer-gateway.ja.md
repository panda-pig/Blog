---
title: "VPN コンポーネント：VGW と Customer Gateway"
fullName: "Virtual Private Gateway & Customer Gateway"
description: "Site-to-Site VPN は AWS 側 Gateway と顧客側装置の定義を冗長 Tunnel で接続する。"
service: "VPN Components：VGW & Customer Gateway"
category: networking
kind: service
lang: ja
topicKey: "VPN Components：VGW & Customer Gateway"
frequency: "出題頻度 ⭐⭐⭐⭐"
date: 2026-07-30
updated: 2026-07-31
tags: ["networking","VPN Components：VGW & Customer Gateway","AWS"]
notionId: 3aa964dc-ce4a-8199-bdd8-df77a47a2a89
notionUrl: https://app.notion.com/p/3aa964dcce4a8199bdd8df77a47a2a89
notionUpdated: "2026-07-30T04:27:13.346Z"
---

## 基本情報

| 項目 | 内容 |
| --- | --- |
| 英語名 | VPN Components |
| 正式名称 | Virtual Private Gateway & Customer Gateway |
| 中国語の説明 | VPN 组件：虚拟私有网关与客户网关 |
| 日本語の説明 | VPN コンポーネント（仮想プライベートゲートウェイ／カスタマーゲートウェイ） |
| 出題頻度 | ⭐⭐⭐⭐ |
| 混同しやすいもの | Client VPN / Site-to-Site VPN / Direct Connect |

## 一言で理解

> Site-to-Site VPN は AWS 側 Gateway と顧客側装置の定義を冗長 Tunnel で接続する。

## 要点

- Virtual Private Gateway は VPC に接続し、従来型 VPN の AWS 側を表す。
- Customer Gateway は顧客 Router の Public IP や BGP 情報を表す AWS Resource。
- 物理的な顧客 Router と AWS の Customer Gateway Resource は同一ではない。

## 試験での判断

> 冗長性を得るには 2 本の Tunnel と Routing を正しく利用する。

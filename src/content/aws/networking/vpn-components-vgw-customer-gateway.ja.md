---
title: "VPN コンポーネント：VGW と Customer Gateway"
fullName: "VPN Components：VGW & Customer Gateway"
description: "Site-to-Site VPN は AWS 側 Gateway と顧客側装置の定義を冗長 Tunnel で接続する。"
service: "VPN Components：VGW & Customer Gateway"
category: networking
kind: service
lang: ja
topicKey: "VPN Components：VGW & Customer Gateway"
frequency: "学習まとめ"
date: 2026-07-30
updated: 2026-07-30
tags: ["networking","VPN Components：VGW & Customer Gateway","AWS"]
notionId: 3aa964dc-ce4a-8199-bdd8-df77a47a2a89
notionUrl: https://app.notion.com/p/3aa964dcce4a8199bdd8df77a47a2a89
notionUpdated: "2026-07-27T05:39:15.128Z"
---

## 一言で理解

> Site-to-Site VPN は AWS 側 Gateway と顧客側装置の定義を冗長 Tunnel で接続する。

## 要点

- Virtual Private Gateway は VPC に接続し、従来型 VPN の AWS 側を表す。
- Customer Gateway は顧客 Router の Public IP や BGP 情報を表す AWS Resource。
- 物理的な顧客 Router と AWS の Customer Gateway Resource は同一ではない。

## 試験での判断

> 冗長性を得るには 2 本の Tunnel と Routing を正しく利用する。

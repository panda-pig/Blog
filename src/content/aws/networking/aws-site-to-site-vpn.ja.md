---
title: "AWS Site-to-Site VPN"
fullName: "AWS Site-to-Site VPN"
description: "Internet 上の IPsec により、オンプレミスネットワークと VPC / Transit Gateway を暗号化接続する。"
service: "AWS Site-to-Site VPN"
category: networking
kind: service
lang: ja
topicKey: "AWS Site-to-Site VPN"
frequency: "出題頻度 ⭐⭐⭐⭐"
date: 2026-07-30
updated: 2026-07-30
tags: ["networking","AWS Site-to-Site VPN","AWS"]
notionId: 3a6964dc-ce4a-81c3-8250-ffcdaf8d86b0
notionUrl: https://app.notion.com/p/3a6964dcce4a81c38250ffcdaf8d86b0
notionUpdated: "2026-07-27T05:40:28.036Z"
---

## 基本情報

| 項目 | 内容 |
| --- | --- |
| 英語名 | AWS Site-to-Site VPN |
| 正式名称 | AWS Site-to-Site VPN |
| 中国語名 | 站点到站点 VPN |
| 日本語名 | サイト間 VPN |
| 出題頻度 | ⭐⭐⭐⭐ |
| 混同しやすいもの | Client VPN / Direct Connect / PrivateLink |

## 一言で理解

> Internet 上の IPsec により、オンプレミスネットワークと VPC / Transit Gateway を暗号化接続する。

## 要点

- AWS 側は Virtual Private Gateway または Transit Gateway、顧客側は Customer Gateway を使う。
- 通常は冗長化のため 2 本の Tunnel が提供される。
- 構成により Static Route または BGP を利用する。

## 試験での判断

> VPN は迅速な Internet ベース接続、Direct Connect は専用接続と安定した性能が特徴。

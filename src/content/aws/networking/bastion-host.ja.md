---
title: "Bastion Host"
fullName: "Bastion Host / SSH Jump Host"
description: "Public Subnet に置く管理用入口から、許可された利用者が Private EC2 へ接続する。"
service: "Bastion Host / SSH Jump Host"
category: networking
kind: service
lang: ja
topicKey: "Bastion Host / SSH Jump Host"
frequency: "考试频率 ⭐⭐⭐⭐"
date: 2026-10-08
updated: 2026-10-08
tags: ["networking","Bastion Host / SSH Jump Host","AWS"]
notionId: 3f3964dc-ce4a-819c-8ab0-cc18ee856221
notionUrl: https://app.notion.com/p/3f3964dcce4a819c8ab0cc18ee856221
notionUpdated: "2026-10-08T01:13:37.200Z"
---
## 基本情報

| 項目 | 内容 |
| --- | --- |
| 英語 / 正式名称 | Bastion Host / SSH Jump Host |
| 中国語 | 堡垒机 / 跳板机 |
| 日本語 | 踏み台サーバー |
| 復習優先度 | 考试频率 ⭐⭐⭐⭐ |
| 混同しやすい項目 | NAT Instance / Session Manager / EC2 Instance Connect Endpoint |

## 一言で理解

Public Subnet に置く管理用入口から、許可された利用者が Private EC2 へ接続する。

## 要点整理

最初は Bastion の Public Address、次は対象の Private Address を使う。両方に Route、NACL、Security Group、認証が必要である。

## 学習ポイント

- Bastion の TCP 22 は信頼できる送信元だけに制限する。
- Private EC2 の TCP 22 は Bastion の Security Group を送信元として許可できる。
- 秘密鍵を長期保存せず、Session Manager も検討する。
- 管理経路と Application の外向き通信は別経路である。

## よくある誤解

- Bastion は NAT ではなく、Private EC2 の Internet 接続を保証しない。
- SSH の成功だけで ICMP や HTTP まで許可されたとは判断できない。

## 重要ポイント

**Bastion は Login、NAT は外向き通信、Endpoint は特定 Service への接続を担当する。**

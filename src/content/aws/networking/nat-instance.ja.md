---
title: "NAT Instance"
fullName: "Network Address Translation Instance"
description: "顧客管理の EC2 で Private Workload の IPv4 外向き通信を転送・変換する。"
service: "Network Address Translation Instance"
category: networking
kind: service
lang: ja
topicKey: "Network Address Translation Instance"
frequency: "考试频率 ⭐⭐⭐"
date: 2026-10-08
updated: 2026-10-08
tags: ["networking","Network Address Translation Instance","AWS"]
notionId: 3f3964dc-ce4a-816d-ad4f-e365e586abfc
notionUrl: https://app.notion.com/p/3f3964dcce4a816dad4fe365e586abfc
notionUpdated: "2026-10-08T01:13:37.200Z"
---
## 基本情報

| 項目 | 内容 |
| --- | --- |
| 英語 / 正式名称 | Network Address Translation Instance |
| 中国語 | NAT 实例 |
| 日本語 | NAT インスタンス |
| 復習優先度 | 考试频率 ⭐⭐⭐ |
| 混同しやすい項目 | NAT Gateway / Bastion Host |

## 一言で理解

顧客管理の EC2 で Private Workload の IPv4 外向き通信を転送・変換する。

## 要点整理

通常は Public Subnet に配置し、Public Address または EIP を持たせ、Source/Destination Check を無効化する。OS が Forwarding と NAT を行う。

## 学習ポイント

- Security Group で実際の Protocol を許可する。
- Patch、Capacity、Monitoring、Failover は顧客が管理する。
- Target が失われると Route が blackhole になる場合がある。
- 一般的な新規設計では NAT Gateway を優先する。

## よくある誤解

- Source/Destination Check の無効化だけでは OS の NAT は設定されない。
- 旧 NAT AMI の Support 終了と EC2 NAT 方式の廃止を混同しない。

## 重要ポイント

**EC2 NAT は Route、Forwarding、Source/Destination Check 無効化、SG、OS 設定の組み合わせ。**

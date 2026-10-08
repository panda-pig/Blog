---
title: "AWS Network Firewall"
fullName: "AWS Network Firewall"
description: "VPC の実 Traffic Path に Managed Firewall Endpoint を置き、Network Traffic を検査・Filter する。"
service: "AWS Network Firewall"
category: security
kind: service
lang: ja
topicKey: "AWS Network Firewall"
frequency: "考试频率 ⭐⭐⭐⭐"
date: 2026-10-08
updated: 2026-10-08
tags: ["security","AWS Network Firewall","AWS"]
notionId: 3f3964dc-ce4a-813c-98c2-e5aff6fa8260
notionUrl: https://app.notion.com/p/3f3964dcce4a813c98c2e5aff6fa8260
notionUpdated: "2026-10-08T01:19:17.132Z"
---
## 基本情報

| 項目 | 内容 |
| --- | --- |
| 英語 / 正式名称 | AWS Network Firewall |
| 中国語 | AWS 网络防火墙 |
| 日本語 | AWS ネットワークファイアウォール |
| 復習優先度 | 考试频率 ⭐⭐⭐⭐ |
| 混同しやすい項目 | AWS WAF / Security Group / NACL / Firewall Manager / GWLB |

## 一言で理解

VPC の実 Traffic Path に Managed Firewall Endpoint を置き、Network Traffic を検査・Filter する。

## 要点整理

Policy は Stateless／Stateful Rule Group を組み合わせる。Forward と Return は同じ AZ Endpoint を対称的に通る Route が必要。

## 学習ポイント

- IP、Port、Protocol、Domain、Connection State を検査できる。
- 集中 Inspection VPC では Transit Gateway と Appliance Mode を組み合わせる。
- Log は CloudWatch Logs、S3、Firehose へ送れる。
- Firewall Manager で Organization 全体の Policy を管理できる。

## よくある誤解

- Endpoint 作成だけでは VPC 全体が自動検査されない。
- WAF は Web Request、Network Firewall は Endpoint を通る Traffic を検査する。

## 重要ポイント

**Network Firewall は Traffic を検査し、Firewall Manager は Policy を管理する。**

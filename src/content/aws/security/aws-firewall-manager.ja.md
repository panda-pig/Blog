---
title: "AWS Firewall Manager"
fullName: "AWS Firewall Manager"
description: "AWS Organizations の Account、OU、Resource に Security Policy を集中配布し、継続的に維持する。"
service: "AWS Firewall Manager"
category: security
kind: service
lang: ja
topicKey: "AWS Firewall Manager"
frequency: "考试频率 ⭐⭐⭐"
date: 2026-10-08
updated: 2026-10-08
tags: ["security","AWS Firewall Manager","AWS"]
notionId: 3f3964dc-ce4a-81ff-8fa7-e438933cef1b
notionUrl: https://app.notion.com/p/3f3964dcce4a81ff8fa7e438933cef1b
notionUpdated: "2026-10-08T01:27:32.796Z"
---
## 基本情報

| 項目 | 内容 |
| --- | --- |
| 英語 / 正式名称 | AWS Firewall Manager |
| 中国語 | 多账户安全策略集中管理 |
| 日本語 | 複数アカウントのセキュリティポリシー一元管理 |
| 復習優先度 | 考试频率 ⭐⭐⭐ |
| 混同しやすい項目 | AWS WAF / Shield / Security Group / Network Firewall |

## 一言で理解

AWS Organizations の Account、OU、Resource に Security Policy を集中配布し、継続的に維持する。

## 要点整理

WAF、Shield Advanced、Security Group、Network Firewall、DNS Firewall の Policy を管理する Governance Layer。

## 学習ポイント

- Scope に合う新規 Resource を自動的に Policy 対象へ含められる。
- Administrator Account、Policy Scope、Region、Resource Type を確認する。
- 具体的な Web Rule は WAF が定義する。
- 実際の Packet Inspection は Network Firewall が行う。

## よくある誤解

- Firewall Manager と Network Firewall は別 Service。
- 集中管理だけで個別 Resource の Route や Endpoint が正しくなるわけではない。

## 重要ポイント

**WAF は Rule、Network Firewall は Traffic、Firewall Manager は Account 間 Policy 配布を担当する。**

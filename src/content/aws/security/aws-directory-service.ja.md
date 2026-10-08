---
title: "AWS Directory Service"
fullName: "AWS Directory Service"
description: "Identity の所在と On-premises AD の有無に応じて Managed Microsoft AD、AD Connector、Simple AD を選ぶ。"
service: "AWS Directory Service"
category: security
kind: service
lang: ja
topicKey: "AWS Directory Service"
frequency: "考试频率 ⭐⭐⭐⭐"
date: 2026-10-08
updated: 2026-10-08
tags: ["security","AWS Directory Service","AWS"]
notionId: 3f3964dc-ce4a-8120-8453-e3e74bfb9001
notionUrl: https://app.notion.com/p/3f3964dcce4a81208453e3e74bfb9001
notionUpdated: "2026-10-08T00:20:24.463Z"
---
## 基本情報

| 項目 | 内容 |
| --- | --- |
| 英語 / 正式名称 | AWS Directory Service |
| 中国語 | 托管目录与 Active Directory 集成 |
| 日本語 | マネージドディレクトリと Active Directory 連携 |
| 復習優先度 | 考试频率 ⭐⭐⭐⭐ |
| 混同しやすい項目 | Managed Microsoft AD / AD Connector / Simple AD / IAM Identity Center |

## 一言で理解

Identity の所在と On-premises AD の有無に応じて Managed Microsoft AD、AD Connector、Simple AD を選ぶ。

## 要点整理

Managed Microsoft AD は AWS 上の実 Microsoft AD、AD Connector は On-premises AD への認証 Proxy、Simple AD は独立した AD-compatible Directory。

## 学習ポイント

- Cloud 内で実 Microsoft AD と Trust が必要なら Managed Microsoft AD。
- 利用者を AWS に保存せず既存 AD を使うなら AD Connector。
- 既存 AD がなく小規模な独立 Directory なら Simple AD。
- Account 間 Workforce SSO は IAM Identity Center が担当する。

## よくある誤解

- Directory Service、IAM Identity Center、Cognito の役割を区別する。
- Simple AD は On-premises AD と Trust を構成できない。

## 重要ポイント

**Cloud AD は Managed Microsoft AD、Proxy は AD Connector、Standalone は Simple AD。**

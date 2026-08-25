---
title: "AWS Account と Root User のセキュリティ"
fullName: "AWS Account and AWS Account Root User Security"
description: "Root User は Account の作成・Recovery に使い、日常の Administrator Identity には使用しません。"
service: "Cloud Foundations"
category: cloud-practitioner
kind: topic
lang: ja
topicKey: "AWS 账户与 Root User 安全"
frequency: "試験頻度 ⭐⭐⭐⭐⭐"
date: 2026-08-13
updated: 2026-08-25
tags: ["AWS Account", "Root User", "Security", "AWS"]
notionId: 3bb964dc-ce4a-81c3-9d23-dd3deb0dda3e
notionUrl: https://app.notion.com/p/3bb964dcce4a81c39d23dd3deb0dda3e
notionUpdated: "2026-08-13T08:20:08.794Z"
---

## 一言で理解

登録 Email で Account 最高権限の **Root User** が作成されます。Account の作成、Recovery、少数の Root-only Task に限定し、日常管理には使いません。

## Security Baseline

- 直ちに MFA を有効化し、Backup Device と Recovery Procedure を保護する。
- 強力で固有の Password を使い、登録 Email、Phone、Payment Channel を守る。
- Root Access Key を作成せず、不要な既存 Key は削除する。
- People は IAM Identity Center / Federation、Workload は Role と Temporary Credentials を優先する。
- Billing、Budget、Free Tier Monitoring を設定する。Credits は Spending Cap ではない。
- 企業 Account は管理された Group Email、Approval、Emergency Access、Audit を整備する。

## Identity の境界

Root は IAM User ではありません。Root、Administrator User、Restricted User は同じ Account 内の異なる Identity です。User が作成した Resource は作成者個人ではなく Account と対象 Region / AZ に属します。

Console Multi-session は Login Context を並行保持するだけで、Account 作成、Resource Copy、Permission Merge、Ownership 変更は行いません。Account Alias は Account ID の代わりに使える Sign-in 用の一意な別名です。

## MFA の選択

Passkey / Security Key は FIDO による耐 Phishing 認証です。Authenticator App は最初に QR / Secret Key で登録し、TOTP Code を生成します。Hardware TOTP Token は物理 Device です。登録用 Secret は機密 Credential として扱います。

## 重点記憶

**Account は Resource と Billing の境界、Root・User・Role は Identity、Session は Login Context、Root は特殊 Task に限定します。**

## コスト可視性とアラート

Root User が **IAM user and role access to billing information** を有効化すると、適切な権限を持つ IAM User / Role が Billing Data を確認できます。Billing / Bills で費用元、Free Tier で現在・予測使用量、Zero spend / Monthly cost budget で予期しない支出を早期検知します。

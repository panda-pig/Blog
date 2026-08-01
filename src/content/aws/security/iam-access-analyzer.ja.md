---
title: "IAM Access Analyzer"
fullName: "AWS Identity and Access Management Access Analyzer"
description: "外部アクセス、ポリシー、未使用権限を分析し、最小権限を支援します。"
service: "IAM Access Analyzer"
category: security
kind: service
lang: ja
topicKey: "IAM Access Analyzer"
frequency: "考试频率 ⭐⭐⭐⭐"
date: 2026-08-01
updated: 2026-08-01
tags: ["security", "IAM Access Analyzer", "AWS"]
notionId: 3ae964dc-ce4a-8137-ab78-e4c595870913
notionUrl: https://app.notion.com/p/3ae964dcce4a8137ab78e4c595870913
notionUpdated: "2026-07-31T08:17:19.589Z"
---

## 基本情報

| 項目 | 内容 |
| --- | --- |
| 英語 | IAM Access Analyzer |
| 正式名称 | AWS Identity and Access Management Access Analyzer |
| 中国語 | 访问权限分析器 |
| 日本語 | IAM Access Analyzer（外部アクセス・未使用アクセスの分析） |
| 試験頻度 | ⭐⭐⭐⭐ |
| 混同しやすいサービス | AWS Trusted Advisor / IAM Policy Simulator |

## ひとことで理解

外部アクセス、ポリシー、未使用権限を分析し、最小権限を支援します。

## 主な機能と利用場面

- Resource Policy と Trust Relationship を分析し、公開または外部アカウントからのアクセス経路を検出します。
- IAM Policy の構文、セキュリティ、ベストプラクティスを検証します。
- アクセス履歴から Policy の絞り込みや未使用権限の特定を支援します。
- 代表的な対象は S3 Bucket、KMS Key、IAM Role の Trust Policy です。
- 管理者は Finding を確認し、意図した共有を Archive するか、不要なアクセスを修正します。

## 試験ポイントと注意点

- アカウントや組織の外部から誰がアクセスできるかを調べるなら Access Analyzer です。
- Policy Simulator はリクエストの許可可否を試験し、Access Analyzer は Policy とアクセス経路を分析します。
- Finding は正当な共有を表す場合もあり、自動的に悪意を意味しません。

## 重要ポイント

**外部から誰がアクセスでき、Policy が広すぎないかを調べるのが IAM Access Analyzer です。**

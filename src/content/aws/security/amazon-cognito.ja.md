---
title: "Amazon Cognito"
fullName: "Amazon Cognito"
description: "Web・モバイルアプリケーション向けの登録、サインイン、アクセス制御を提供する。"
service: "Amazon Cognito"
category: security
kind: service
lang: ja
topicKey: "Amazon Cognito"
frequency: "試験頻度 ⭐⭐⭐⭐"
date: 2026-07-31
updated: 2026-09-29
tags: ["security", "Amazon Cognito", "AWS"]
notionId: 3a6964dc-ce4a-8127-8404-f710d2103003
notionUrl: https://app.notion.com/p/3a6964dcce4a81278404f710d2103003
notionUpdated: "2026-09-28T07:51:39.985Z"
---

## 基本情報

| 項目 | 内容 |
| --- | --- |
| 英語 | Amazon Cognito |
| 正式名称 | Amazon Cognito |
| 中国語 | 应用用户身份服务 |
| 日本語 | アプリユーザー認証 |
| 試験頻度 | ⭐⭐⭐⭐ |
| 混同しやすいサービス | IAM / IAM Identity Center |

## ひとことで

Web・モバイルアプリケーション向けの登録、サインイン、アクセス制御を提供する。

## 段階まとめ

- **主な役割**：Web・モバイルアプリケーション向けの登録、サインイン、アクセス制御を提供する。
- **試験頻度**：⭐⭐⭐⭐
- **比較ポイント**：IAM / IAM Identity Center

## 覚え方

Amazon Cognito = アプリユーザー認証

## 追加：User Pool と Identity Pool

- User Pool は Application User Directory と Authentication を提供し、ID / Access / Refresh Token を発行します。
- Identity Pool は User Pool または外部 IdP の Identity を、IAM Role で制限された一時 AWS Credential に交換します。
- Token は API Gateway / ALB で検証できますが、AWS Access Key ではありません。
- Workforce Identity は通常 IAM Identity Center、Cognito は Customer-facing Application User 向けです。

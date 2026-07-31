---
title: "KMS vs Secrets Manager vs ACM"
fullName: "KMS vs Secrets Manager vs ACM"
description: "KMS は暗号鍵、Secrets Manager はシークレット値、ACM は HTTPS 用証明書を管理する。"
service: "AWS Compare"
category: compare
kind: compare
lang: ja
topicKey: "KMS vs Secrets Manager vs ACM"
frequency: "頻出比較"
date: 2026-07-31
updated: 2026-07-31
tags: ["compare", "KMS vs Secrets Manager vs ACM", "AWS"]
notionId: 3ae964dc-ce4a-8160-adb5-fb18d6e81d89
notionUrl: https://app.notion.com/p/3ae964dcce4a8160adb5fb18d6e81d89
notionUpdated: "2026-07-31T04:09:10.498Z"
---

## ひとことで

- **AWS KMS**：暗号鍵を管理する。
- **AWS Secrets Manager**：パスワード、トークン、API キーを保存・ローテーションする。
- **AWS Certificate Manager**：HTTPS 用の SSL/TLS 証明書を管理する。

## 主な違い

| 観点 | KMS | Secrets Manager | ACM |
| --- | --- | --- | --- |
| 管理対象 | 暗号鍵 | シークレット値 | SSL/TLS 証明書 |
| 代表的な要件 | S3、EBS、RDS の暗号化 | DB パスワードの自動ローテーション | ALB、CloudFront の HTTPS 化 |
| 保護する段階 | 保管中のデータ | シークレットのライフサイクル | 転送中のデータ |
| 主な連携 | S3、EBS、RDS、DynamoDB | RDS、Lambda、IAM ロール | ALB、CloudFront、API Gateway |

## 選択の近道

「暗号鍵」は KMS、「パスワードやトークンのローテーション」は Secrets Manager、「HTTPS 証明書」は ACM。

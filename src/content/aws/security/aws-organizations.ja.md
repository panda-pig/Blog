---
title: "AWS Organizations"
fullName: "AWS Organizations"
description: "AWS アカウント、OU、SCP の権限境界、一括請求を一元管理します."
service: "AWS Organizations"
category: security
kind: service
lang: ja
topicKey: "AWS Organizations"
frequency: "考试频率 ⭐⭐⭐⭐⭐"
date: 2026-08-01
updated: 2026-08-01
tags: ["security", "AWS Organizations", "AWS"]
notionId: 3a6964dc-ce4a-811f-8285-dd7360095a9f
notionUrl: https://app.notion.com/p/3a6964dcce4a811f8285dd7360095a9f
notionUpdated: "2026-07-31T08:22:49.155Z"
---

## 基本情報

| 項目 | 内容 |
| --- | --- |
| 英語 | AWS Organizations |
| 正式名称 | AWS Organizations |
| 中国語 | 多账户集中管理 |
| 日本語 | AWS Organizations（複数アカウントの一元管理） |
| 試験頻度 | ⭐⭐⭐⭐⭐ |
| 混同しやすいサービス | AWS Control Tower / AWS IAM |

## ひとことで理解

AWS アカウント、OU、SCP の権限境界、一括請求を一元管理します.

## 主な機能と利用場面

- メンバーアカウントを、業務・環境・セキュリティ境界ごとに OU へ整理します。
- SCP は Root、OU、Account から継承され、利用可能な権限の上限を定義します。
- SCP は制限するだけで権限を付与しません。実行には IAM Policy などの Allow が必要です。
- 一括請求で料金を集約し、対象となるボリュームディスカウントを共有できます。
- 本番、開発、セキュリティ、ログ保管用アカウントを分離して境界を強化します。

## 試験ポイントと注意点

- Organizations は Account、OU、SCP、一括請求の基盤です。
- Control Tower は Organizations 上に Landing Zone を構築し、IAM はアカウント内の ID と権限を管理します。
- OU は論理グループであり、AWS アカウントではありません。

## 重要ポイント

**Organizations はアカウントと権限境界を管理し、SCP は制限だけを行います。**

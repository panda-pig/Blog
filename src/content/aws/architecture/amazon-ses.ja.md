---
title: "Amazon SES"
fullName: "Amazon Simple Email Service"
description: "Application から API または SMTP で Transaction・通知・Marketing Email を送信します。"
service: "Amazon SES"
category: architecture
kind: service
lang: ja
topicKey: "Amazon SES"
frequency: "試験頻度 ⭐⭐⭐"
date: 2026-08-05
updated: 2026-08-05
tags: ["architecture", "SES", "email", "AWS"]
notionId: 3b3964dc-ce4a-8146-aa99-cef193233027
notionUrl: https://app.notion.com/p/3b3964dcce4a8146aa99cef193233027
notionUpdated: "2026-08-05T01:59:00.000Z"
---

## 一言で理解

Application が API または SMTP を使い、登録確認、Password Reset、注文、通知、Marketing Email を大規模に送信できます。

## 主な役割

- Email Delivery、Domain / Address 検証、Template、送信統計を管理する。
- Bounce、Complaint、Suppression List、Delivery Event を処理する。
- S3 → API Gateway → Lambda → SES の Serverless Contact Form を構成できる。

## 試験ポイントと注意点

- Application Email → SES、複数 Subscriber への通知 → SNS、Contact Center → Connect。
- Lambda は SES を呼び出せるが、Lambda 自体は Email System ではない。
- Sandbox、Quota、SPF / DKIM / DMARC、Reputation、不正利用防止、最小権限を設計する。

## 重要ポイント

**Application から Email を送るなら Amazon SES。**

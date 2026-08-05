---
title: "AWS Amplify"
fullName: "AWS Amplify"
description: "Web・Mobile チーム向けの Full-stack 開発、継続的デプロイ、Hosting Platform です。"
service: "AWS Amplify"
category: architecture
kind: service
lang: ja
topicKey: "AWS Amplify"
frequency: "試験頻度 ⭐⭐⭐"
date: 2026-08-05
updated: 2026-08-05
tags: ["architecture", "Amplify", "AWS"]
notionId: 3b3964dc-ce4a-8124-8dcd-fd5d91da65b9
notionUrl: https://app.notion.com/p/3b3964dcce4a81248dcdfd5d91da65b9
notionUpdated: "2026-08-05T01:59:00.000Z"
---

## 一言で理解

Web/Mobile チームへ Frontend Build、Git 駆動の継続的デプロイ、Hosting、Cloud Backend 接続を一体で提供します。

## 主な役割

- Repository から Frontend を Build・公開し、Branch Preview と自動 Deploy を提供する。
- 認証、API、Data、Storage、Function を接続する。
- UI Component、Client Library、複数 Environment の Workflow を提供する。

## 試験ポイントと注意点

- Frontend チーム、迅速な Full-stack Delivery、Git 駆動 Hosting → Amplify。
- AppSync は GraphQL API。Amplify は AppSync を作成・利用できるが責務は異なる。
- S3 + CloudFront はより低レベルな Static Hosting / Distribution 構成。
- Amplify を使っても IAM、認証、Environment 分離、Data 権限の設計は必要。

## 重要ポイント

**Amplify は Web/Mobile 開発体験、AppSync は GraphQL API を担当する。**

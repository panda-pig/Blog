---
title: "Amazon CloudFront"
fullName: "Amazon CloudFront"
description: "Edge Location にコンテンツをキャッシュし、低遅延配信とプライベートオリジン保護を行う CDN。"
service: "Amazon CloudFront"
category: networking
kind: service
lang: ja
topicKey: "Amazon CloudFront"
frequency: "出題頻度 ⭐⭐⭐⭐⭐"
date: 2026-07-30
updated: 2026-07-31
tags: ["networking","Amazon CloudFront","AWS"]
notionId: 3a6964dc-ce4a-8198-a643-ce1e9079cf9c
notionUrl: https://app.notion.com/p/3a6964dcce4a8198a643ce1e9079cf9c
notionUpdated: "2026-07-30T04:29:21.974Z"
---

## 基本情報

| 項目 | 内容 |
| --- | --- |
| 英語名 | Amazon CloudFront |
| 正式名称 | Amazon CloudFront |
| 中国語の説明 | 内容分发网络（CDN） |
| 日本語の説明 | コンテンツ配信ネットワーク |
| 出題頻度 | ⭐⭐⭐⭐⭐ |
| 混同しやすいもの | Route 53 / Global Accelerator / S3 Transfer Acceleration |

## 一言で理解

> Edge Location にコンテンツをキャッシュし、低遅延配信とプライベートオリジン保護を行う CDN。

## 要点

- ユーザーに近い場所からキャッシュ済みコンテンツを配信して遅延を減らす。
- Origin には S3、ALB、EC2、API Gateway、独自 HTTP サーバーを指定できる。
- S3 Bucket を公開せず、Origin Access Control でプライベートに保つ。

## 試験での判断

> Cache Policy、TTL、Invalidation、HTTPS、WAF、Signed URL / Cookie が主要設計点。

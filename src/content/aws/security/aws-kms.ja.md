---
title: "AWS KMS"
fullName: "AWS Key Management Service"
description: "データの暗号化と復号に使うキーを管理し、業務データそのものは保存しない。"
service: "AWS KMS"
category: security
kind: service
lang: ja
topicKey: "AWS KMS"
frequency: "試験頻度 ⭐⭐⭐⭐⭐"
date: 2026-07-31
updated: 2026-09-29
tags: ["security", "AWS KMS", "AWS"]
notionId: 3a6964dc-ce4a-81e1-9905-e5b2a49bdc26
notionUrl: https://app.notion.com/p/3a6964dcce4a81e19905e5b2a49bdc26
notionUpdated: "2026-09-28T04:42:21.030Z"
---

## 基本情報

| 項目 | 内容 |
| --- | --- |
| 英語 | AWS KMS |
| 正式名称 | AWS Key Management Service |
| 中国語 | 密钥管理服务 |
| 日本語 | AWS KMS（暗号鍵管理サービス） |
| 試験頻度 | ⭐⭐⭐⭐⭐ |
| 混同しやすいサービス | CloudHSM / Secrets Manager / ACM |

## ひとことで

データの暗号化と復号に使うキーを管理し、業務データそのものは保存しない。

## 段階まとめ

- **主な役割**：データの暗号化と復号に使うキーを管理し、業務データそのものは保存しない。
- **試験頻度**：⭐⭐⭐⭐⭐
- **比較ポイント**：CloudHSM / Secrets Manager / ACM

## 覚え方

AWS KMS = AWS KMS（暗号鍵管理サービス）

## 追加：S3 Encryption の境界

- SSE-S3 は S3 Managed Key、SSE-KMS は S3 権限と KMS Key Policy / Grant の両方が必要で、KMS Audit と Cost が発生します。
- S3 Bucket Key は SSE-KMS の KMS Request と Cost を減らせます。
- DSSE-KMS は高 Compliance 用の独立した 2 層の At-rest Encryption で、TLS + SSE-KMS ではありません。
- SSE-C は Request ごとに Customer Key を渡し、S3 は保存せず HTTPS が必須です。

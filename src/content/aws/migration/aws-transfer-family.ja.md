---
title: "AWS Transfer Family"
fullName: "AWS Transfer Family"
description: "SFTP、FTPS、FTP、AS2 を使って S3 と EFS にアクセスできるようにする。"
service: "AWS Transfer Family"
category: migration
kind: service
lang: ja
topicKey: "AWS Transfer Family"
frequency: "試験頻度 ⭐⭐⭐"
date: 2026-07-31
updated: 2026-08-05
tags: ["migration", "AWS Transfer Family", "AWS"]
notionId: 3a6964dc-ce4a-81a3-ad26-c77b03ce8fa3
notionUrl: https://app.notion.com/p/3a6964dcce4a81a3ad26c77b03ce8fa3
notionUpdated: "2026-08-05T01:39:41.105Z"
---

## 基本情報

| 項目 | 内容 |
| --- | --- |
| 英語 | AWS Transfer Family |
| 正式名称 | AWS Transfer Family |
| 中国語 | 托管文件传输 |
| 日本語 | マネージドファイル転送 |
| 試験頻度 | ⭐⭐⭐ |
| 混同しやすいサービス | DataSync |

## ひとことで

SFTP、FTPS、FTP、AS2 を使って S3 と EFS にアクセスできるようにする。

## 段階まとめ

- **主な役割**：SFTP、FTPS、FTP、AS2 を使って S3 と EFS にアクセスできるようにする。
- **試験頻度**：⭐⭐⭐
- **比較ポイント**：DataSync

## 覚え方

AWS Transfer Family = マネージドファイル転送

## Managed Endpoint

- SFTP、FTPS、FTP、AS2 を Amazon S3 または Amazon EFS に接続する。
- Partner や Legacy Application の Protocol を維持し、転送 Server の運用を不要にする。
- Identity Provider、IAM、CloudWatch Logs、Network Control と連携できる。

**Transfer Family** は継続的な Protocol-based File Exchange、**DataSync** は高速な定期・一括転送、**Storage Gateway** は継続的な Hybrid Storage Interface。

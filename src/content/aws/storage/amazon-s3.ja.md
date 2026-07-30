---
title: Amazon S3
fullName: "Amazon Simple Storage Service"
description: API または HTTP で完全なオブジェクトを保存する、高耐久でスケーラブルなリージョン単位のオブジェクトストレージ。
service: S3
category: storage
kind: service
lang: ja
frequency: "出題頻度 ⭐⭐⭐⭐⭐"
date: 2026-07-29
updated: 2026-07-30
tags: [Storage, Object Storage, SAA-C03]
notionId: 3a6964dc-ce4a-8167-bdc7-d3b96eb969dc
notionUrl: https://app.notion.com/p/3a6964dcce4a8167bdc7d3b96eb969dc
notionUpdated: "2026-07-29T04:41:23.982Z"
---

## 基本情報

| 項目 | 内容 |
| --- | --- |
| 英語名 | Amazon S3 |
| 正式名称 | Amazon Simple Storage Service |
| 中国語名 | 对象存储 |
| 日本語名 | オブジェクトストレージ |
| 出題頻度 | ⭐⭐⭐⭐⭐ |
| 混同しやすいもの | EBS / EFS / S3 on Outposts |

## 一言で理解

> S3 は AWS のオブジェクトストレージです。Bucket が管理境界、Object がデータとメタデータ、Key が Bucket 内の一意な識別子になります。

## 主な役割

- 1 オブジェクトは最大 5 TB。5 GB を超えるアップロードでは Multipart Upload が必須。
- 既定では非公開。IAM、Bucket Policy、Block Public Access、Presigned URL、暗号化でアクセスを制御する。
- Versioning は履歴保護、Lifecycle は移行と期限管理、Replication と Object Lock は追加保護を担う。

## 試験ポイント

- オブジェクト、静的資産、ログ、バックアップ、Data Lake には S3 を検討する。
- アクセス頻度、復元時間、総コストから Standard、IA、Glacier、Intelligent-Tiering を選ぶ。
- CloudFront と非公開 S3 Origin は代表的な安全配信構成。

## よくある誤解

- Key のスラッシュは Prefix の見え方にすぎず、S3 は POSIX ファイルシステムではない。
- Versioning の旧バージョンにも料金が発生し、無料バックアップではない。

## 重要ポイント

> **Bucket に Object、Key で特定。Policy で権限、Versioning で履歴、Lifecycle でコストを管理。**

## 関連サービス

CloudFront、IAM、KMS、CloudTrail、AWS Backup。

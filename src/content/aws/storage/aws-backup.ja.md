---
title: AWS Backup
fullName: "AWS Backup"
description: 複数 AWS サービスのバックアップを統一ポリシーでスケジュール、保持、監視、統制するサービス。
service: AWS Backup
category: storage
kind: service
lang: ja
frequency: "出題頻度 ⭐⭐⭐⭐"
date: 2026-07-29
updated: 2026-07-31
tags: [Storage, Backup, Governance]
notionId: 3a6964dc-ce4a-8144-a676-dad1d439be1f
notionUrl: https://app.notion.com/p/3a6964dcce4a8144a676dad1d439be1f
notionUpdated: "2026-07-30T04:28:49.972Z"
---

## 基本情報

| 項目 | 内容 |
| --- | --- |
| 英語名 | AWS Backup |
| 正式名称 | AWS Backup |
| 中国語の説明 | 集中式备份管理 |
| 日本語の説明 | 一元バックアップ |
| 出題頻度 | ⭐⭐⭐⭐ |
| 混同しやすいもの | EBS Snapshot / DLM / AWS DRS / S3 Lifecycle |

## 一言で理解

> AWS Backup は Backup Plan、Resource 選択、Backup Vault を共通のマルチサービス統制フローにまとめます。

## 主な役割

- Backup Plan で頻度、ウィンドウ、ライフサイクル、保持期間を定義する。
- Recovery Point は Vault に保存され、対応サービスでは Account/Region 間コピーが可能。
- Tag と Organizations で複数 Account のポリシー配布とコンプライアンス確認を行える。

## 試験ポイント

- 複数サービス、集中ポリシー、コンプライアンス、統一監視なら AWS Backup。
- DLM は主に EBS Snapshot/AMI、DRS はサーバーを継続複製して高速復旧する。
- バックアップ成功だけでは RTO/RPO を証明できず、Restore Testing が必要。

## よくある誤解

- Backup Plan 作成だけで全 Resource が自動保護されるわけではない。
- AWS Backup は DB ネイティブ PITR やサーバー単位 DRS の代替ではない。

## 重要ポイント

> **DLM は EBS Snapshot、AWS Backup は複数サービス、DRS はサーバー高速復旧。**

## 関連サービス

EBS、RDS、Aurora、DynamoDB、EFS、FSx、AWS DRS。

---
title: AWS Elastic Disaster Recovery
fullName: "AWS Elastic Disaster Recovery"
description: サーバーの変更ブロックを AWS へ継続複製し、災害時に Recovery Instance を迅速起動するサービス。
service: AWS DRS
category: storage
kind: service
lang: ja
frequency: "出題頻度 ⭐⭐⭐⭐"
date: 2026-07-29
updated: 2026-07-31
tags: [Storage, Disaster Recovery, Architecture]
notionId: 3ac964dc-ce4a-81f3-bec3-cd5079cbbaa7
notionUrl: https://app.notion.com/p/3ac964dcce4a81f3bec3cd5079cbbaa7
notionUpdated: "2026-07-30T08:30:13.728Z"
---

## 基本情報

| 項目 | 内容 |
| --- | --- |
| 英語名 | AWS Elastic Disaster Recovery (AWS DRS) |
| 正式名称 | AWS Elastic Disaster Recovery |
| 中国語の説明 | AWS 弹性灾难恢复 |
| 日本語の説明 | AWS Elastic Disaster Recovery（災害復旧サービス） |
| 出題頻度 | ⭐⭐⭐⭐ |
| 混同しやすいもの | AWS Backup / EBS Snapshot / Storage Gateway |

## 一言で理解

> AWS DRS は物理、仮想、他 Cloud のサーバーを継続ブロック複製し、RPO と RTO を短縮します。

## 主な役割

- Source Server の Agent が変更 Block を低コスト Staging Area へ複製する。
- テストや障害時に Recovery EC2 を起動し、検証後 Failover、後で Failback を計画する。
- 継続複製でデータ損失を減らしても、Network、DNS、起動設定、依存関係のテストは必要。

## 試験ポイント

- Disaster Recovery、Continuous Replication、サーバー全体の高速復旧なら AWS DRS。
- EBS Snapshot は Volume、AWS Backup は複数サービス、Storage Gateway は Hybrid Storage を担当。
- RPO、RTO、復旧演習、待機環境コストを合わせて評価する。

## よくある誤解

- DRS は通常の長期バックアップではない。
- 継続複製でも整合性、DNS、アプリ依存関係の検証は必要。

## 重要ポイント

> **Backup はデータ保護、DRS はサーバーと業務の高速復旧。**

## 関連サービス

EC2、AWS Backup、EBS Snapshot、Route 53、Storage Gateway。

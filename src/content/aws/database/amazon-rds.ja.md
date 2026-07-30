---
title: Amazon RDS
fullName: "Amazon Relational Database Service"
description: MySQL や PostgreSQL などのリレーショナルエンジンを管理し、基盤、パッチ、バックアップ運用を軽減するサービス。
service: RDS
category: database
kind: service
lang: ja
frequency: "出題頻度 ⭐⭐⭐⭐⭐"
date: 2026-07-29
updated: 2026-07-30
tags: [Database, Relational, SAA-C03]
notionId: 3a6964dc-ce4a-81a2-9c3d-ebba79e9df68
notionUrl: https://app.notion.com/p/3a6964dcce4a81a29c3debba79e9df68
notionUpdated: "2026-07-29T08:10:20.563Z"
---

## 基本情報

| 項目 | 内容 |
| --- | --- |
| 英語名 | Amazon RDS |
| 正式名称 | Amazon Relational Database Service |
| 中国語名 | 托管关系型数据库服务 |
| 日本語名 | マネージドリレーショナルデータベース |
| 出題頻度 | ⭐⭐⭐⭐⭐ |
| 混同しやすいもの | Aurora / DynamoDB / EC2 自建数据库 |

## 一言で理解

> RDS は SQL、JOIN、Transaction、関係制約が必要な業務向けです。Schema、Query、Account、Access は利用者が管理します。

## 主な役割

- Application は Endpoint で接続し、本番 DB は通常 Private Subnet と Security Group で保護する。
- Multi-AZ は高可用性と Failover、Read Replica は非同期複製による読み取り拡張。
- Automated Backup と Log は保持期間内 PITR、Manual Snapshot は特定時点を保存する。

## 試験ポイント

- 高可用性は Multi-AZ、読み取り拡張は Read Replica。
- RDS は基盤を管理するが、保持期間、権限、復旧手順は利用者が決める。
- Cross-Region Replica、Backup Copy、AWS Backup は目的が異なる。

## よくある誤解

- Multi-AZ Standby は通常の読み取り拡張用ではない。
- RDS がすべての SQL、Index、Schema を自動最適化するわけではない。

## 重要ポイント

> **SQL/JOIN/Transaction → RDS、高可用 → Multi-AZ、読み取り拡張 → Read Replica。**

## 関連サービス

Aurora、DMS、AWS Backup、Secrets Manager、KMS、CloudWatch。

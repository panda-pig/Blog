---
title: "AWS Artifact"
fullName: "AWS Artifact"
description: "AWS のコンプライアンスレポートを取得し、対象の契約を確認・管理します。"
service: "AWS Artifact"
category: monitoring
kind: service
lang: ja
topicKey: "AWS Artifact"
frequency: "考试频率 ⭐⭐⭐⭐"
date: 2026-08-01
updated: 2026-08-01
tags: ["monitoring", "AWS Artifact", "AWS"]
notionId: 3ae964dc-ce4a-8113-bd40-da498ab87dd3
notionUrl: https://app.notion.com/p/3ae964dcce4a8113bd40da498ab87dd3
notionUpdated: "2026-07-31T08:16:23.004Z"
---

## 基本情報

| 項目 | 内容 |
| --- | --- |
| 英語 | AWS Artifact |
| 正式名称 | AWS Artifact |
| 中国語 | 合规文档与协议自助服务 |
| 日本語 | AWS Artifact（コンプライアンス文書・契約のセルフサービス） |
| 試験頻度 | ⭐⭐⭐⭐ |
| 混同しやすいサービス | AWS Audit Manager / AWS Config |

## ひとことで理解

AWS のコンプライアンスレポートを取得し、対象の契約を確認・管理します。

## 主な機能と利用場面

- Artifact Reports で SOC、ISO、PCI など第三者監査・コンプライアンス文書を取得します。
- Artifact Agreements で対象契約を確認、承諾、管理します。
- 監査、Risk Assessment、Vendor Due Diligence に必要な AWS 側証拠を提供します。
- Report と Agreement へのアクセスはアカウント権限で制御します。
- 顧客 Resource を Scan せず、顧客 Workload の自動 Compliance を証明しません。

## 試験ポイントと注意点

- AWS の SOC / ISO / PCI Report や Agreement が必要なら Artifact です。
- Audit Manager は顧客環境の Evidence、Config は Resource 構成を評価します。
- AWS の Report があっても Shared Responsibility における顧客責任は残ります。

## 重要ポイント

**AWS の Report と Agreement は Artifact、顧客環境の Evidence は Audit Manager です。**

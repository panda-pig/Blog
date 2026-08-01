---
title: "AWS License Manager"
fullName: "AWS License Manager"
description: "AWS とオンプレミス環境の Software License 使用状況を一元追跡・制御します。"
service: "AWS License Manager"
category: monitoring
kind: service
lang: ja
topicKey: "AWS License Manager"
frequency: "考试频率 ⭐⭐⭐"
date: 2026-08-01
updated: 2026-08-01
tags: ["monitoring", "AWS License Manager", "AWS"]
notionId: 3ae964dc-ce4a-8178-af3d-e8f6f33334e2
notionUrl: https://app.notion.com/p/3ae964dcce4a8178af3de8f6f33334e2
notionUpdated: "2026-07-31T08:16:23.096Z"
---

## 基本情報

| 項目 | 内容 |
| --- | --- |
| 英語 | AWS License Manager |
| 正式名称 | AWS License Manager |
| 中国語 | 软件许可证集中管理 |
| 日本語 | AWS License Manager（ソフトウェアライセンスの一元管理） |
| 試験頻度 | ⭐⭐⭐ |
| 混同しやすいサービス | AWS Service Catalog / AWS Marketplace |

## ひとことで理解

AWS とオンプレミス環境の Software License 使用状況を一元追跡・制御します。

## 主な機能と利用場面

- License Configuration、Count Rule、使用上限を定義します。
- EC2、Dedicated Host、Hybrid 環境の BYOL Workload を追跡します。
- Hard Limit は超過を防止し、Soft Limit は停止せず警告できます。
- Organizations と Systems Manager で複数 Account・環境の利用状況を集約できます。
- License 権利の消費を管理しますが、購入や Vendor 契約の代替ではありません。

## 試験ポイントと注意点

- BYOL、環境横断の License 追跡、超過防止なら License Manager です。
- Dedicated Host は物理 Host 制御、License Manager は License Rule と消費量を管理します。
- Service Catalog は Product、License Manager は利用可能な License 数を管理します。

## 重要ポイント

**BYOL、環境横断追跡、License 上限は AWS License Manager です。**

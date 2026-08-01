---
title: "AWS Audit Manager"
fullName: "AWS Audit Manager"
description: "監査フレームワークに沿って顧客 AWS 環境の監査証拠を継続収集・整理します。"
service: "AWS Audit Manager"
category: monitoring
kind: service
lang: ja
topicKey: "AWS Audit Manager"
frequency: "考试频率 ⭐⭐⭐⭐"
date: 2026-08-01
updated: 2026-08-01
tags: ["monitoring", "AWS Audit Manager", "AWS"]
notionId: 3ae964dc-ce4a-81cf-8ffa-dd58eedfe4c2
notionUrl: https://app.notion.com/p/3ae964dcce4a81cf8ffadd58eedfe4c2
notionUpdated: "2026-07-31T08:16:23.036Z"
---

## 基本情報

| 項目 | 内容 |
| --- | --- |
| 英語 | AWS Audit Manager |
| 正式名称 | AWS Audit Manager |
| 中国語 | 审计证据自动收集与评估管理 |
| 日本語 | AWS Audit Manager（監査証拠の自動収集・評価支援） |
| 試験頻度 | ⭐⭐⭐⭐ |
| 混同しやすいサービス | AWS Artifact / AWS Config / AWS CloudTrail |

## ひとことで理解

監査フレームワークに沿って顧客 AWS 環境の監査証拠を継続収集・整理します。

## 主な機能と利用場面

- Prebuilt / Custom Framework で Control、Control Set、Evidence を整理します。
- Assessment が Scope を定義し、Control を AWS の Evidence Source に対応付けます。
- Config、CloudTrail、Security Hub などから Evidence を継続収集します。
- Team が Assessment の進捗を確認し、監査向け Report を作成します。
- 証拠収集を効率化しますが、認証取得や自動修復を行うものではありません。

## 試験ポイントと注意点

- 監査 Framework に沿った Evidence の自動収集なら Audit Manager です。
- Artifact は AWS Report、CloudTrail は API Activity、Config は構成 Rule を扱います。
- 人による Review、修復、監査機関の判断は引き続き必要です。

## 重要ポイント

**監査 Framework、継続的な Evidence 収集、Assessment は AWS Audit Manager です。**

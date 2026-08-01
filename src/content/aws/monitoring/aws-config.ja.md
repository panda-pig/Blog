---
title: "AWS Config"
fullName: "AWS Config"
description: "Resource の構成履歴と関係を記録し、Rule で継続的にコンプライアンスを評価します。"
service: "AWS Config"
category: monitoring
kind: service
lang: ja
topicKey: "AWS Config"
frequency: "考试频率 ⭐⭐⭐⭐⭐"
date: 2026-08-01
updated: 2026-08-01
tags: ["monitoring", "AWS Config", "AWS"]
notionId: 3a6964dc-ce4a-811b-92b1-ddea29ac500a
notionUrl: https://app.notion.com/p/3a6964dcce4a811b92b1ddea29ac500a
notionUpdated: "2026-07-31T08:18:15.289Z"
---

## 基本情報

| 項目 | 内容 |
| --- | --- |
| 英語 | AWS Config |
| 正式名称 | AWS Config |
| 中国語 | 资源配置记录与合规评估 |
| 日本語 | AWS Config（リソース構成記録・コンプライアンス評価） |
| 試験頻度 | ⭐⭐⭐⭐⭐ |
| 混同しやすいサービス | AWS CloudTrail / AWS Audit Manager |

## ひとことで理解

Resource の構成履歴と関係を記録し、Rule で継続的にコンプライアンスを評価します。

## 主な機能と利用場面

- Configuration Recorder が対応 Resource の Configuration Item と関係を記録します。
- Delivery Channel が Snapshot と履歴を指定先へ配信します。
- Managed Rule または Custom Rule が変更時や定期的に Resource を評価します。
- 結果は COMPLIANT / NON_COMPLIANT で、複数 Account・Region に集約できます。
- 修復には Systems Manager Automation を使うことが多く、権限設計が必要です。

## 試験ポイントと注意点

- 構成履歴、Drift、Rule による継続コンプライアンスには Config を選びます。
- CloudTrail は実行者と API、Audit Manager は監査フレームワーク別の証拠を扱います。
- NON_COMPLIANT は評価結果であり、自動修復完了を意味しません。

## 重要ポイント

**構成がどう変わり、Rule に準拠しているかを見るのが AWS Config です。**

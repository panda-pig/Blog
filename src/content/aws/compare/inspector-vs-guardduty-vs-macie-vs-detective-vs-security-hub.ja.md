---
title: "Inspector vs GuardDuty vs Macie vs Detective vs Security Hub"
fullName: "Inspector vs GuardDuty vs Macie vs Detective vs Security Hub"
description: "脆弱性スキャン、脅威検出、機密データ検出、インシデント調査、一元集約は、セキュリティ運用の異なる段階を担当する。"
service: "AWS Compare"
category: compare
kind: compare
lang: ja
topicKey: "Inspector vs GuardDuty vs Macie vs Detective vs Security Hub"
frequency: "頻出比較"
date: 2026-07-31
updated: 2026-07-31
tags: ["compare", "Inspector vs GuardDuty vs Macie vs Detective vs Security Hub", "AWS"]
notionId: 3ae964dc-ce4a-81e7-b1fb-e71132a8c36d
notionUrl: https://app.notion.com/p/3ae964dcce4a81e7b1fbe71132a8c36d
notionUpdated: "2026-07-31T04:09:10.477Z"
---

## ひとことで

- **Amazon Inspector**：EC2、ECR イメージ、Lambda のソフトウェア脆弱性をスキャンする。
- **Amazon GuardDuty**：アカウント、ネットワーク、ワークロードの不審な動作を継続的に検出する。
- **Amazon Macie**：S3 内の PII などの機密データを検出する。
- **Amazon Detective**：根本原因、関係性、攻撃経路を調査する。
- **AWS Security Hub**：複数のセキュリティサービスの検出結果を集約・標準化する。

## 主な違い

| サービス | 主な対象 | 代表キーワード | 主な出力 |
| --- | --- | --- | --- |
| Inspector | EC2、ECR、Lambda | CVE、パッケージ、脆弱性スキャン | 脆弱性の検出結果と修復案 |
| GuardDuty | アカウント・ネットワーク・ワークロードの動作 | 悪意ある IP、異常 API、脅威情報 | 脅威の検出結果 |
| Macie | Amazon S3 データ | PII、機密データ、データ検出 | 機密データの検出結果 |
| Detective | セキュリティ事象のコンテキスト | 根本原因、タイムライン、関係図 | 調査情報と影響範囲 |
| Security Hub | 複数ソースの検出結果 | 集約、標準化、コンプライアンス | 統合セキュリティビューと Insights |

## 組み合わせ

Inspector / GuardDuty / Macie が検出 → Security Hub が集約・優先順位付け → Detective が詳細調査 → EventBridge が自動対応を起動する。

## よくある誤解

- Inspector は行動ベースの脅威検出ではない。
- GuardDuty は脆弱性を修正しない。
- Macie は S3 の機密データが中心。
- Detective は調査用で、検出結果の集約基盤ではない。

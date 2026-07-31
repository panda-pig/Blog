---
title: "シナリオ問題キーワード索引"
fullName: "Scenario Keyword Index"
description: "業務目標と制約を先に特定し、キーワードでサービスと構成候補を絞ります。"
service: "SAA-C03"
category: saa-c03
kind: topic
lang: ja
topicKey: "场景题关键词索引"
frequency: "段階サマリー"
date: 2026-07-31
updated: 2026-07-31
tags: ["saa-c03","场景题关键词索引","AWS"]
notionId: 3a6964dc-ce4a-81d7-bfeb-ed10071385bc
notionUrl: https://app.notion.com/p/3a6964dcce4a81d7bfebed10071385bc
notionUpdated: "2026-07-30T08:08:30.476Z"
---

## 一言で理解

業務目標と制約を先に特定し、キーワードでサービスと構成候補を絞ります。

## 要点

- 疎結合・平準化 → SQS、ファンアウト → SNS + SQS、サーバーレスイベント処理 → Lambda。
- AWS サービスへのプライベート接続 → VPC Endpoint、S3 直接 SQL → Athena + Glue Catalog。
- 継続的で複雑な BI → Redshift、Serverless ETL → Glue、Spark/Hadoop → EMR。
- 複数コンシューマーとリプレイ → Kinesis Data Streams、低運用配信 → Data Firehose。
- 独自モデル → SageMaker、基盤モデル API → Bedrock、企業・開発助手 → Amazon Q。

## 試験ポイント

- 業務目標、必須制約、RTO/RPO、一貫性、遅延、トラフィック、運用、セキュリティ、コストの順に確認します。

## よくある誤解

- 製品名だけで選ばず、データ型、遅延、制御性、運用、コスト制約を確認します。

## 重要ポイント

**キーワードは候補を絞り、最終回答は制約条件で決まります。**

---
title: "Amazon Athena と Amazon Redshift"
fullName: "Amazon Athena vs Amazon Redshift"
description: "Athena は S3 のアドホック検索、Redshift は継続的・高頻度・複雑な DWH 分析に向きます。"
service: "AWS Comparison"
category: compare
kind: comparison
lang: ja
topicKey: "Amazon Athena vs Amazon Redshift"
frequency: "段階サマリー"
date: 2026-07-31
updated: 2026-07-31
tags: ["compare","Amazon Athena vs Amazon Redshift","AWS"]
notionId: 3ad964dc-ce4a-818d-8637-e83f4cc78324
notionUrl: https://app.notion.com/p/3ad964dcce4a818d8637e83f4cc78324
notionUpdated: "2026-07-30T08:06:14.182Z"
---

## 一言で理解

Athena は S3 のアドホック検索、Redshift は継続的・高頻度・複雑な DWH 分析に向きます。

## 要点

- Athena はサーバーレスでスキャン量課金、データは S3 にあります。
- Redshift は安定した BI、複雑な Join、企業分析向けクラウド DWH です。
- データレイクと DWH は共存し、S3 が生データ、Redshift が分析モデルを保持します。

## 試験ポイント

- 一時的な検索、低運用、S3 直接検索 → Athena。
- 高頻度で複雑な BI、安定した DWH → Redshift。

## よくある誤解

- 製品名だけで選ばず、データ型、遅延、制御性、運用、コスト制約を確認します。

## 重要ポイント

**Athena は S3 検索、Redshift は DWH。**

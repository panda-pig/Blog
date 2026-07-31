---
title: "データ分析の基本概念"
fullName: "Data Lake / ETL / ELT / Zero-ETL / Data Pipeline"
description: "データパイプラインは生データを、検索・可視化・モデル学習に使えるデータ資産へ継続的に変換します。"
service: "Data Analytics Core Concepts"
category: analytics
kind: concept
lang: ja
topicKey: "数据分析核心概念"
frequency: "出題頻度 ⭐⭐⭐⭐⭐"
date: 2026-07-31
updated: 2026-07-31
tags: ["analytics","数据分析核心概念","AWS"]
notionId: 3ad964dc-ce4a-8104-9a1c-f733b70b5005
notionUrl: https://app.notion.com/p/3ad964dcce4a81049a1cf733b70b5005
notionUpdated: "2026-07-30T08:30:52.312Z"
---

## 基本情報

| 項目 | 内容 |
| --- | --- |
| 英語名 | Data Analytics Core Concepts |
| 正式名称 | Data Lake / ETL / ELT / Zero-ETL / Data Pipeline |
| 中国語の説明 | 数据分析核心概念 |
| 日本語の説明 | データ分析の基本概念 |
| 出題頻度 | ⭐⭐⭐⭐⭐ |
| 混同しやすいもの | Data Lake / Data Warehouse / ETL / ELT / Zero-ETL |

## 一言で理解

データパイプラインは生データを、検索・可視化・モデル学習に使えるデータ資産へ継続的に変換します。

## 要点

- データレイクは一般に S3 を使い、構造化・半構造化・非構造化データを低コストで保存します。
- ETL は変換してからロードし、ELT は先にロードして対象側の計算能力で変換します。
- Zero-ETL は従来のパイプライン管理を減らしますが、変換が完全になくなるわけではありません。
- 典型的な流れは、取り込み → 保存 → カタログ → 処理 → 検索 → 可視化または ML です。

## 試験ポイント

- データレイクは S3、データウェアハウスは Redshift です。
- Glue Catalog はメタデータを保存し、主要な業務データは保存しません。

## よくある誤解

- 製品名だけで選ばず、データ型、遅延、制御性、運用、コスト制約を確認します。

## 重要ポイント

**取り込み、保存、カタログ、処理、検索、可視化または学習。**

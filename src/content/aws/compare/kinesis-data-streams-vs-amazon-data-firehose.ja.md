---
title: "Kinesis Data Streams と Amazon Data Firehose"
fullName: "Kinesis Data Streams vs Amazon Data Firehose"
description: "どちらもストリームデータを扱いますが、Data Streams は読み取り・再生可能なストリーム、Data Firehose はマネージド配信です。"
service: "AWS Comparison"
category: compare
kind: comparison
lang: ja
topicKey: "Kinesis Data Streams vs Amazon Data Firehose"
frequency: "段階サマリー"
date: 2026-07-31
updated: 2026-07-31
tags: ["compare","Kinesis Data Streams vs Amazon Data Firehose","AWS"]
notionId: 3ad964dc-ce4a-810c-b5ec-dc6fe72875e5
notionUrl: https://app.notion.com/p/3ad964dcce4a810cb5ecdc6fe72875e5
notionUpdated: "2026-07-30T08:06:14.168Z"
---

## 一言で理解

どちらもストリームデータを扱いますが、Data Streams は読み取り・再生可能なストリーム、Data Firehose はマネージド配信です。

## 要点

- 複数コンシューマー、独自処理、読み取り制御、リプレイ → Data Streams。
- 自動スケール、バッファリング、S3/Redshift/OpenSearch への配信 → Data Firehose。
- 両方を組み合わせ、Streams が取り込み、Firehose が配信することもあります。

## 試験ポイント

- Firehose のバッファ配信を 1 件ずつ即時配信と考えないこと。

## よくある誤解

- 製品名だけで選ばず、データ型、遅延、制御性、運用、コスト制約を確認します。

## 重要ポイント

**読み取り・再生なら Streams、宛先への配信なら Firehose。**

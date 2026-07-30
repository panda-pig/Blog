---
title: "高性能アーキテクチャの設計"
fullName: "Design High-Performing Architectures"
description: "Workload の Access Pattern と Bottleneck に合わせて Compute、Storage、Database、Network、Cache を選ぶ。"
service: "SAA-C03"
category: saa-c03
kind: topic
lang: ja
topicKey: "高性能架构设计"
frequency: "学習まとめ"
date: 2026-07-30
updated: 2026-07-30
tags: ["saa-c03","Design High-Performing Architectures","AWS"]
notionId: 3a6964dc-ce4a-8177-89e9-de191f6694c9
notionUrl: https://app.notion.com/p/3a6964dcce4a817789e9de191f6694c9
notionUpdated: "2026-07-29T08:13:11.121Z"
---

## 一言で理解

> Workload の Access Pattern と Bottleneck に合わせて Compute、Storage、Database、Network、Cache を選ぶ。

## 要点

- 可能なら Horizontal Scaling を使い、Scaling Model が合う Managed / Serverless Service を利用する。
- Storage は Object / Block / File、Database は Relational / Key-Value / Document / Graph / Cache で選ぶ。
- CloudFront、Read Replica、DAX、ElastiCache は Data と Consistency 要件に合う場合だけ利用する。

## 試験での判断

> Service 名だけでなく Latency、Throughput、Concurrency、Cost を計測して最適化する。

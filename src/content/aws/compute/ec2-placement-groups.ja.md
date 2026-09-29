---
title: "EC2 Placement Group：Cluster、Spread、Partition"
fullName: "Amazon EC2 Placement Groups"
description: "ネットワーク性能、インスタンス単位の分離、パーティション単位の障害分離で配置戦略を選びます。"
service: "Amazon EC2"
category: compute
kind: topic
lang: ja
topicKey: "EC2 Placement Groups"
frequency: "SAA 高频"
date: 2026-09-29
updated: 2026-09-29
tags: ["EC2", "placement group", "high availability", "HPC"]
notionId: 3e8964dc-ce4a-8154-a5b9-c2100ce5ced4
notionUrl: https://app.notion.com/p/3e8964dcce4a8154a5b9c2100ce5ced4
notionUpdated: "2026-09-27T05:01:04.233Z"
---

## ひとことで

Placement Group は EC2 の相対的な物理配置を制御し、近接配置で性能を得るか、分散配置で相関障害を抑えます。

## 3 つの戦略

| 戦略 | 目的 | 範囲と制限 | 代表例 |
| --- | --- | --- | --- |
| Cluster | 低遅延・高スループット | 単一 AZ、障害範囲は集中 | HPC、密結合処理 |
| Spread | 少数の重要インスタンスを個別分離 | 1 AZ・1 Group あたり Running 7 台まで | 重要ノード |
| Partition | 多数のノードを障害ドメインに分割 | 1 AZ あたり 7 Partition、各 Partition に複数台 | HDFS、Cassandra、Kafka |

- Cluster は性能向けで、Multi-AZ HA ではありません。
- Spread の「7」は Instance 数、Partition の「7」は Partition 数です。
- 1 Partition は 1 Rack ではなく、独立した Rack の集合です。
- Capacity Reservation、Dedicated Host、ASG とは目的が異なります。

## 選択の目安

- 極低遅延と高いノード間帯域 → Cluster。
- 少数の重要インスタンスを別ハードウェアへ → Spread。
- 大規模分散システムで Replica 配置を制御 → Partition。

## 要点

**Cluster は近接で性能、Spread は個別分離、Partition はグループ分離で規模に対応します。**

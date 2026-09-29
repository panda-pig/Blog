---
title: Amazon ElastiCache
fullName: "Amazon ElastiCache"
description: Valkey、Redis OSS、Memcached で Hot Data を保持するマネージドインメモリ Cache。
service: ElastiCache
category: database
kind: service
lang: ja
frequency: "出題頻度 ⭐⭐⭐⭐"
date: 2026-07-29
updated: 2026-09-29
tags: [Database, Cache, Performance]
notionId: 3a6964dc-ce4a-819f-a367-c7390c1af894
notionUrl: https://app.notion.com/p/3a6964dcce4a819fa367c7390c1af894
notionUpdated: "2026-09-28T08:57:41.942Z"
---

## 基本情報

| 項目 | 内容 |
| --- | --- |
| 英語名 | Amazon ElastiCache |
| 正式名称 | Amazon ElastiCache |
| 中国語の説明 | 托管内存缓存 |
| 日本語の説明 | マネージドインメモリキャッシュ |
| 出題頻度 | ⭐⭐⭐⭐ |
| 混同しやすいもの | DAX / RDS Read Replica / CloudFront / MemoryDB |

## 一言で理解

> ElastiCache は繰り返し読む Hot Data を Memory に置き、Backend DB の負荷と応答時間を減らします。

## 主な役割

- Cache Hit は直接返し、Miss は DB へ戻って Policy に従い再格納する。
- Cache-Aside は柔軟で一般的。Write-Through は書き込み時に Cache も更新するが Write Path が増える。
- Valkey/Redis OSS は豊富な構造と HA、Memcached は軽量。

## 試験ポイント

- Memory Cache、Redis/Valkey/Memcached、DB 負荷削減なら ElastiCache。
- DAX は DynamoDB 専用、Read Replica は完全 DB、CloudFront は Edge HTTP Cache。
- TTL、Eviction、Invalidation、Failure、Cache Stampede を設計する。

## よくある誤解

- Cache は通常、永続的な Source of Truth ではない。
- 強い整合性で頻繁に変化するデータは Cache に適さない場合がある。

## 重要ポイント

> **繰り返し読み取り + Hot Data + Memory Access → ElastiCache。**

## 関連サービス

RDS、Aurora、DAX、CloudFront、EC2、Lambda。

+## 追加：Cache Pattern と Security

- Cache-aside は Miss 時に Application が DB を読み Cache へ格納し、Write-through は Main Data 更新時に Cache も更新します。
- TTL、Invalidation、Jitter、Request Coalescing で Stale Data と Cache Stampede を抑えます。
- Redis OSS / Valkey は Replica、Failover、Sorted Set などを持ち、Memcached は単純な水平分割 Cache に向きます。
- RBAC は単一 AUTH Token より細粒度で、Encryption、Subnet、SG の分離も必要です。

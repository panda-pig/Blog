---
title: Amazon ElastiCache
fullName: Amazon ElastiCache
description: Valkey、Redis OSS、Memcached で Hot Data を保持するマネージドインメモリ Cache。
service: ElastiCache
category: database
kind: service
lang: ja
frequency: "試験頻度 ★★★★"
date: 2026-07-29
updated: 2026-07-29
tags: [Database, Cache, Performance]
notionId: 3a6964dc-ce4a-819f-a367-c7390c1af894
notionUrl: https://app.notion.com/p/3a6964dcce4a819fa367c7390c1af894
notionUpdated: "2026-07-29T08:10:32.594Z"
---

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

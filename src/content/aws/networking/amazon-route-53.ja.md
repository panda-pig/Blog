---
title: "Amazon Route 53"
fullName: "Amazon Route 53"
description: "ドメイン登録、名前解決、ヘルスチェック、ポリシーベースのルーティングを提供する AWS DNS サービス。"
service: "Amazon Route 53"
category: networking
kind: service
lang: ja
topicKey: "Amazon Route 53"
frequency: "出題頻度 ⭐⭐⭐⭐⭐"
date: 2026-07-30
updated: 2026-07-31
tags: ["networking","Amazon Route 53","AWS"]
notionId: 3a6964dc-ce4a-812e-8b52-d74e98d40a3d
notionUrl: https://app.notion.com/p/3a6964dcce4a812e8b52d74e98d40a3d
notionUpdated: "2026-07-30T08:30:19.458Z"
---

## 基本情報

| 項目 | 内容 |
| --- | --- |
| 英語名 | Amazon Route 53 |
| 正式名称 | Amazon Route 53 |
| 中国語の説明 | DNS、域名注册、健康检查与流量路由 |
| 日本語の説明 | Amazon Route 53（DNS・ドメイン登録・ヘルスチェック・トラフィックルーティング） |
| 出題頻度 | ⭐⭐⭐⭐⭐ |
| 混同しやすいもの | CloudFront / ELB / Global Accelerator |

## 一言で理解

> ドメイン登録、名前解決、ヘルスチェック、ポリシーベースのルーティングを提供する AWS DNS サービス。

## 要点

- ドメイン名をエンドポイントへ解決し、ドメイン登録も行える。
- Simple、Weighted、Latency、Failover、Geolocation、Geoproximity、Multivalue などのルーティングポリシーがある。
- ヘルスチェックでフェイルオーバー判断を支援できるが、DNS キャッシュは切替速度に影響する。

## 試験での判断

> Route 53 は接続先を選び、CloudFront はキャッシュし、Global Accelerator は AWS グローバルネットワーク経由で転送する。

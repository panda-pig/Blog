---
title: "Elastic Load Balancing"
fullName: "Elastic Load Balancing"
description: "正常なターゲットへトラフィックを分散し、アプリケーション入口の可用性と拡張性を高める。"
service: "Elastic Load Balancing"
category: networking
kind: service
lang: ja
topicKey: "Elastic Load Balancing"
frequency: "出題頻度 ⭐⭐⭐⭐⭐"
date: 2026-07-30
updated: 2026-07-30
tags: ["networking","Elastic Load Balancing","AWS"]
notionId: 3a6964dc-ce4a-810c-87bf-c6a286d89cdf
notionUrl: https://app.notion.com/p/3a6964dcce4a810c87bfc6a286d89cdf
notionUpdated: "2026-07-23T07:21:23.243Z"
---

## 基本情報

| 項目 | 内容 |
| --- | --- |
| 英語名 | Elastic Load Balancing |
| 正式名称 | Elastic Load Balancing |
| 中国語の説明 | 弹性负载均衡 |
| 日本語の説明 | マネージドロードバランシングサービス |
| 出題頻度 | ⭐⭐⭐⭐⭐ |
| 混同しやすいもの | Auto Scaling / ALB / NLB / GWLB |

## 一言で理解

> 正常なターゲットへトラフィックを分散し、アプリケーション入口の可用性と拡張性を高める。

## 要点

- ALB は Layer 7 で HTTP/HTTPS のホスト、パス、アプリケーションルールに基づき振り分ける。
- NLB は Layer 4 で高性能な TCP/UDP/TLS と固定 IP 要件に対応する。
- GWLB は仮想ネットワークアプライアンスを挿入・拡張する。

## 試験での判断

> Load Balancer は通信を分散し、Auto Scaling はターゲット容量を変える。

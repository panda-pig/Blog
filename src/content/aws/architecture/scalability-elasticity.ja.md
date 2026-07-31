---
title: "スケーラビリティと弾力性"
fullName: "Scalability & Elasticity"
description: "成長を受け止める能力と、実需要に合わせて資源を自動増減する能力を区別します。"
service: "Architecture"
category: architecture
kind: topic
lang: ja
topicKey: "可扩展性与弹性"
frequency: "出題頻度 ⭐⭐⭐⭐⭐"
date: 2026-07-30
updated: 2026-07-30
tags: ["Architecture","Scalability","Elasticity"]
notionId: 3a6964dc-ce4a-818b-a872-e1eb3d60acd5
notionUrl: https://app.notion.com/p/3a6964dcce4a818ba872e1eb3d60acd5
notionUpdated: "2026-07-30T01:08:00.877Z"
---

## 基本情報

| 項目 | 内容 |
| --- | --- |
| 英語名 | Scalability & Elasticity |
| 正式名称 | Scalability & Elasticity |
| 中国語の説明 | 可扩展性与弹性 |
| 日本語の説明 | スケーラビリティと弾力性 |
| 出題頻度 | ⭐⭐⭐⭐⭐ |
| 混同しやすいもの | High Availability |

## 一言で理解

> Scalability は「成長できること」、Elasticity は「需要に合わせて伸縮すること」です。

## 主な役割

- Scale Out / In は Instance 数を増減し、Stateless な分散 Application に向く。
- Scale Up / Down は 1 台の性能を変えるが、上限があり停止を伴う場合がある。
- ASG は Min、Desired、Max を容量境界として、Metric や Schedule から自動調整する。

## 試験ポイント

- Auto Scaling は容量、ELB は Traffic を管理し、組み合わせても役割は異なる。
- Target Tracking は目標指標、Scheduled Scaling は予測可能な Peak に向く。
- Scalability は High Availability と同義ではなく、HA には障害領域の分離と Failover が必要。
- DB、Service Quota、Cost、下流 Throughput も合わせて確認する。

## よくある誤解

- 拡張可能でも、低負荷時に自動で縮小するとは限らない。
- Vertical Scaling は自動 Elasticity の同義語ではない。
- Auto Scaling は非効率な Code や Query 自体を修正しない。

## 重点記憶

> **Scalability = 成長対応、Elasticity = 需要追従、ASG = Min ≤ Desired ≤ Max。**

## 関連サービス

EC2 Auto Scaling、Elastic Load Balancing、CloudWatch、SQS、ECS Service Auto Scaling。

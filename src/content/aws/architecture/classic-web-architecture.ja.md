---
title: "クラシック Web アーキテクチャ：単一サーバーから Stateless Multi-AZ へ"
fullName: "Classic Web Architecture: From a Single Server to Stateless Multi-AZ"
description: "単一障害点、状態、容量、Data、Static Content の観点で AWS Web Architecture を発展させます。"
service: "AWS Architecture"
category: architecture
kind: topic
lang: ja
topicKey: "Classic Web Architecture"
frequency: "SAA 高频"
date: 2026-09-29
updated: 2026-09-29
tags: ["architecture", "multi-AZ", "stateless", "web"]
notionId: 3e9964dc-ce4a-8167-833b-ed8b7001bbed
notionUrl: https://app.notion.com/p/3e9964dcce4a8167833bed8b7001bbed
notionUpdated: "2026-09-28T04:06:59.327Z"
---

## 発展の流れ

単一 Server は Entry、Application、Session、Database を 1 つの障害ドメインに集中させます。耐障害性のある構成では責務を分離します。

1. Route 53 が DNS を提供。
2. CloudFront が Static / Cacheable Content を配信し、Edge で WAF と連携。
3. ALB が HTTP / HTTPS Traffic を分散。
4. Auto Scaling Group が複数 AZ で Stateless Node を維持。
5. Session を ElastiCache または DynamoDB へ外部化。
6. Static File と Upload Object を S3 へ移動。
7. RDS / Aurora は Multi-AZ で可用性を確保し、必要に応じて Read Replica を追加。
8. SQS、EventBridge、Step Functions で Background Job と長い Workflow を分離。

## Stateless が必要な理由

Session、Upload、Job State が 1 台にしかなければ、Instance の置換や水平 Scaling で利用者状態が失われます。Stateless は「状態がない」ことではなく、全 Node が利用できる信頼性の高い Managed Store に状態を置くことです。

## HA と Backup は別

Multi-AZ、Health Check、自動置換は可用性を守ります。Snapshot、PITR、Cross-Region Copy、復旧訓練は Recoverability を守ります。

## よくある誤り

- ALB だけでは、複数 AZ と Healthy Backend がなければ HA ではありません。
- Sticky Session は移行手段であり、Stateless の代替ではありません。
- Read Replica は Read Scaling 用で、Multi-AZ Failover の代替ではありません。
- NAT Gateway は AZ ごとに設計し、Cross-AZ 依存を避けます。
- Serverless でも Quota、Retry、Idempotency、Observability、Cost の設計が必要です。

## 要点

**単一障害点を除き、状態を外部化し、各 Layer で Scaling、Fault Domain、Security、Observability、Recovery を設計します。**

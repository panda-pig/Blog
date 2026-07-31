---
title: "AWS PrivateLink と VPC Endpoints"
fullName: "AWS PrivateLink & VPC Endpoints"
description: "Public Internet を経由せず、VPC から AWS サービスまたは Endpoint Service へプライベート接続する。"
service: "AWS PrivateLink & VPC Endpoints"
category: networking
kind: service
lang: ja
topicKey: "AWS PrivateLink & VPC Endpoints"
frequency: "出題頻度 ⭐⭐⭐⭐⭐"
date: 2026-07-30
updated: 2026-07-31
tags: ["networking","AWS PrivateLink & VPC Endpoints","AWS"]
notionId: 3a6964dc-ce4a-81f7-8e00-fab34be32604
notionUrl: https://app.notion.com/p/3a6964dcce4a81f78e00fab34be32604
notionUpdated: "2026-07-30T04:29:21.069Z"
---

## 基本情報

| 項目 | 内容 |
| --- | --- |
| 英語名 | AWS PrivateLink & VPC Endpoints |
| 正式名称 | AWS PrivateLink & VPC Endpoints |
| 中国語の説明 | 私有服务访问 |
| 日本語の説明 | プライベートサービス接続 |
| 出題頻度 | ⭐⭐⭐⭐⭐ |
| 混同しやすいもの | NAT Gateway / VPC Peering / Site-to-Site VPN |

## 一言で理解

> Public Internet を経由せず、VPC から AWS サービスまたは Endpoint Service へプライベート接続する。

## 要点

- Gateway Endpoint は S3 / DynamoDB に対応し、Route Table で設定する。
- Interface Endpoint は Private ENI を作成し、多くのサービスで AWS PrivateLink を利用する。
- Endpoint Policy、Security Group、DNS、サービス権限による制御は引き続き必要。

## 試験での判断

> Endpoint はプライベート経路を提供するが、自動的にアクセス権を付与しない。

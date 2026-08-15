---
title: "AWS グローバルインフラストラクチャ"
fullName: "AWS Global Infrastructure"
description: "AWS は Infrastructure を Region、隔離された Availability Zone、User に近い Edge Location で構成する。"
service: "Cloud Foundations"
category: cloud-practitioner
kind: topic
lang: ja
topicKey: "AWS 全球基础设施"
frequency: "出題頻度 ⭐⭐⭐⭐⭐"
date: 2026-07-30
updated: 2026-08-15
tags: ["cloud-practitioner","AWS 全球基础设施","AWS"]
notionId: 3a6964dc-ce4a-8137-955b-d4d5d4decdc2
notionUrl: https://app.notion.com/p/3a6964dcce4a8137955bd4d5d4decdc2
notionUpdated: "2026-08-13T00:39:04.753Z"
---

## 基本情報

| 項目 | 内容 |
| --- | --- |
| 英語名 | AWS Global Infrastructure |
| 正式名称 | AWS Global Infrastructure |
| 中国語の説明 | AWS 全球基础设施 |
| 日本語の説明 | AWS グローバルインフラストラクチャ |
| 出題頻度 | ⭐⭐⭐⭐⭐ |
| 混同しやすいもの | Region / Availability Zone / Edge Location / Multi-AZ / Multi-Region |

## 一言で理解

> AWS は Infrastructure を Region、隔離された Availability Zone、User に近い Edge Location で構成する。

## 要点

- Region は Compliance / Data Residency、Proximity、Service Availability、Price で選ぶ。
- Multi-AZ は 1 Region 内の可用性、Multi-Region は Region Recovery、Global Latency、Residency に対応する。
- Edge Location は CloudFront などで使われ、通常の EC2 を配置する Availability Zone ではない。
- Global Service は 1 Region Selector を中心に管理しないが、全 Data が自動的に Global Replication される意味ではない。
- Regional Resource は Region Selector で表示が変わり、EC2、EBS、Subnet などの Zonal Resource は特定 AZ にある。
- VPC は Regional、Subnet は Zonal。S3 Bucket Name の Global Unique は Bucket が Global Resource という意味ではない。
- AWS WAF の Scope は保護対象に依存し、CloudFront Scope と ALB / API Gateway などの Regional Scope を区別する。

## 試験での判断

> Cross-Region の Replication、Routing、RTO、RPO、Failover は明示的に設計する。

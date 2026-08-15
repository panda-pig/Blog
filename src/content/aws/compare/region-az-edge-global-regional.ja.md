---
title: "Region・AZ・Edge・Global・Regional 総比較"
fullName: "Region, Availability Zone, Edge, Global and Regional Scope"
description: "AWS の地理階層、Service Scope、Resource 配置を一つの比較で整理します。"
service: "AWS Compare"
category: compare
kind: compare
lang: ja
topicKey: "Region・AZ・Edge・Global・Regional 总对比"
frequency: "頻出比較"
date: 2026-08-13
updated: 2026-08-15
tags: ["compare", "Region", "Availability Zone", "AWS"]
notionId: 3bb964dc-ce4a-8118-a234-eeafd5e36e4b
notionUrl: https://app.notion.com/p/3bb964dcce4a8118a234eeafd5e36e4b
notionUpdated: "2026-08-13T00:36:56.363Z"
---

## 一言で理解

**Region / AZ は配置と障害分離、Edge は User に近い入口、Global / Regional / Zonal は Service と Resource の Scope を表します。**

## 総比較

| 概念 | 意味 | 代表例 |
| --- | --- | --- |
| Region | 複数 AZ を含む独立した地理領域 | ap-northeast-1 |
| Availability Zone | 1 つ以上の Data Center から成る障害分離境界 | Multi-AZ |
| Edge Location / PoP | End User に近い Edge Network 拠点 | CloudFront、Route 53 |
| Global Service | 単一 Region Selector を中心に管理しない Service | IAM、CloudFront |
| Regional Service | 1 Region を作用範囲とする Service | DynamoDB、SQS |
| Zonal Resource | 特定 AZ に配置される Resource | EC2、EBS、Subnet |

## 重要な境界

- VPC は Regional、Subnet は Zonal。
- EC2 は Region ごとに表示されるが、Instance は特定 AZ に置かれる。
- S3 Bucket Name の Global Unique は Bucket 自体が Global Resource という意味ではない。
- Console の Region を切り替えると Regional Resource の一覧も変わる。
- Region は Compliance、Latency、Service Availability、Pricing の順で判断する。

## 試験の注意点

Multi-AZ は Region 障害対策ではなく、Multi-Region も Replication や Failover を自動化しません。Edge Location は AZ でも通常の EC2 配置先でもありません。

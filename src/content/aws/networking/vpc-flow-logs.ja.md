---
title: "VPC Flow Logs"
fullName: "Amazon VPC Flow Logs"
description: "ENI の通信相手、Port、Byte 数、ACCEPT／REJECT などの Traffic Metadata を記録する。"
service: "Amazon VPC Flow Logs"
category: networking
kind: service
lang: ja
topicKey: "Amazon VPC Flow Logs"
frequency: "考试频率 ⭐⭐⭐⭐⭐"
date: 2026-10-08
updated: 2026-10-08
tags: ["networking","Amazon VPC Flow Logs","AWS"]
notionId: 3f3964dc-ce4a-8150-a03f-fd1db871cb44
notionUrl: https://app.notion.com/p/3f3964dcce4a8150a03ffd1db871cb44
notionUpdated: "2026-10-08T01:13:37.200Z"
---
## 基本情報

| 項目 | 内容 |
| --- | --- |
| 英語 / 正式名称 | Amazon VPC Flow Logs |
| 中国語 | VPC 流日志 |
| 日本語 | VPC フローログ |
| 復習優先度 | 考试频率 ⭐⭐⭐⭐⭐ |
| 混同しやすい項目 | Traffic Mirroring / CloudTrail / Reachability Analyzer |

## 一言で理解

ENI の通信相手、Port、Byte 数、ACCEPT／REJECT などの Traffic Metadata を記録する。

## 要点整理

VPC、Subnet、ENI 単位で有効化し、CloudWatch Logs、S3、Firehose へ配信できる。完全な Packet Payload は含まれない。

## 学習ポイント

- ACCEPT は Network Control の通過を示すだけで Application の成功を保証しない。
- REJECT の原因は実際の Security Group／NACL Rule を確認する。
- S3 は Athena、CloudWatch Logs は Logs Insights や Alarm と組み合わせる。
- 集約と配信には遅延があり、Real-time Packet Capture ではない。

## よくある誤解

- NODATA／SKIPDATA を正常通信の証拠にしない。
- Flow Logs は Metadata、CloudTrail は API、Mirroring は Packet Copy を見る。

## 重要ポイント

**Flow Logs は Metadata、Mirroring は Packet、CloudTrail は API を見る。**

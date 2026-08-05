---
title: "AWS X-Ray"
fullName: "AWS X-Ray"
description: "分散アプリケーションのリクエストを追跡し、性能ボトルネックとエラーを分析する。"
service: "AWS X-Ray"
category: monitoring
kind: service
lang: ja
topicKey: "AWS X-Ray"
frequency: "試験頻度 ⭐⭐⭐"
date: 2026-07-31
updated: 2026-08-05
tags: ["monitoring", "AWS X-Ray", "AWS"]
notionId: 3a6964dc-ce4a-814a-a684-f401dfdce7d9
notionUrl: https://app.notion.com/p/3a6964dcce4a814aa684f401dfdce7d9
notionUpdated: "2026-08-05T01:57:35.867Z"
---

## 基本情報

| 項目 | 内容 |
| --- | --- |
| 英語 | AWS X-Ray |
| 正式名称 | AWS X-Ray |
| 中国語 | 分布式追踪 |
| 日本語 | 分散トレーシング |
| 試験頻度 | ⭐⭐⭐ |
| 混同しやすいサービス | CloudWatch |

## ひとことで

分散アプリケーションのリクエストを追跡し、性能ボトルネックとエラーを分析する。

## 段階まとめ

- **主な役割**：分散アプリケーションのリクエストを追跡し、性能ボトルネックとエラーを分析する。
- **試験頻度**：⭐⭐⭐
- **比較ポイント**：CloudWatch

## 覚え方

AWS X-Ray = 分散トレーシング

## 基本概念

- **Trace**：一つの Request が Distributed System を通る全経路。
- **Segment / Subsegment**：Service と Downstream Call の Latency、Error、Metadata。
- **Service Map**：Dependency、Latency、Error Rate を可視化し、Sampling で量を制御する。

X-Ray SDK または OpenTelemetry が Trace Context を伝播し、Lambda、API Gateway、ECS、EC2 などが End-to-end Trace を作る。CloudWatch は System 状態、X-Ray は Request の遅延・失敗箇所、CloudTrail は API Audit を示す。

---
title: "EC2 vs Lambda vs Fargate"
fullName: "EC2 vs Lambda vs Fargate"
description: "Host 制御は EC2、短時間の Event Function は Lambda、Serverless Container Task は Fargate を選ぶ。"
service: "AWS Compare"
category: compare
kind: compare
lang: ja
topicKey: "EC2 vs Lambda vs Fargate"
frequency: "学習まとめ"
date: 2026-07-30
updated: 2026-09-29
tags: ["compare","EC2 vs Lambda vs Fargate","AWS"]
notionId: 3a6964dc-ce4a-8171-99fc-f885174daf42
notionUrl: https://app.notion.com/p/3a6964dcce4a817199fcf885174daf42
notionUpdated: "2026-09-28T07:43:18.851Z"
---

## 一言で理解

> Host 制御は EC2、短時間の Event Function は Lambda、Serverless Container Task は Fargate を選ぶ。

## 要点

- EC2 は OS 制御と長時間・特殊 Workload に向くが、Instance 管理が必要。
- Lambda は短い Function を自動 Scaling し、Request と実行時間で課金され、最大 15 分。
- Fargate は Server 管理なしで Container を実行するが、ECS / EKS の編成が必要。

## 試験での判断

> Deployment Unit、実行時間、Host 制御、Scaling、運用責任で判断する。

## 追加の判断軸

- 完全な OS、専用 Hardware、Daemon、Platform 制限を超える長時間処理 → EC2。
- Event-driven、15 分以内、同時実行で自動 Scale → Lambda。Cold Start と Downstream Capacity は設計が必要です。
- Container Image があり、長時間 Task で Node 運用を避けたい → ECS / EKS 上の Fargate。
- 安定した大規模負荷、特殊 Node、GPU、Cost Control → ECS / EKS on EC2 も検討します。

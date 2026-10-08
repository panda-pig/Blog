---
title: "Instance Scheduler on AWS"
fullName: "Instance Scheduler on AWS"
description: "CloudFormation で展開し、Time Zone、時間帯、Tag に基づいて EC2 や RDS を集中起動・停止する Solution。"
service: "Instance Scheduler on AWS"
category: devops
kind: service
lang: ja
topicKey: "Instance Scheduler on AWS"
frequency: "复习优先级 ⭐⭐"
date: 2026-10-08
updated: 2026-10-08
tags: ["devops","Instance Scheduler on AWS","AWS"]
notionId: 3f3964dc-ce4a-815f-9802-f55a5539f7fe
notionUrl: https://app.notion.com/p/3f3964dcce4a815f9802f55a5539f7fe
notionUpdated: "2026-10-08T02:55:13.905Z"
---
## 基本情報

| 項目 | 内容 |
| --- | --- |
| 英語 / 正式名称 | Instance Scheduler on AWS |
| 中国語 | 实例定时启停解决方案 |
| 日本語 | インスタンスのスケジュール起動・停止ソリューション |
| 復習優先度 | 复习优先级 ⭐⭐ |
| 混同しやすい項目 | EventBridge Scheduler / Auto Scaling / CloudFormation |

## 一言で理解

CloudFormation で展開し、Time Zone、時間帯、Tag に基づいて EC2 や RDS を集中起動・停止する Solution。

## 要点整理

DynamoDB が Schedule を保存し、Lambda が処理を実行し、Tag が対象を選ぶ。Account／Region 間では明示的な Scope と権限が必要。

## 学習ポイント

- 開発・検証環境の営業時間 Schedule に適する。
- Stop は Delete ではなく、Storage、Snapshot、Solution Resource は課金される場合がある。
- 停止した RDS DB Instance は最長 7 日後に自動再起動する。
- Auto Scaling Group は Capacity／Schedule 機能で管理する。

## よくある誤解

- 同名の汎用 Managed Scheduler ではなく AWS Solution。
- 計画停止は Dependency、Availability、RTO に影響し得る。

## 重要ポイント

**CloudFormation で展開、DynamoDB に計画、Lambda が実行、Tag で対象を選ぶ。**

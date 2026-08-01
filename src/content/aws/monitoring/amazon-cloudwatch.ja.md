---
title: "Amazon CloudWatch"
fullName: "Amazon CloudWatch"
description: "Metrics と Logs を収集し、Dashboard 表示と Alarm により現在の稼働状況を監視します。"
service: "Amazon CloudWatch"
category: monitoring
kind: service
lang: ja
topicKey: "Amazon CloudWatch"
frequency: "考试频率 ⭐⭐⭐⭐⭐"
date: 2026-08-01
updated: 2026-08-01
tags: ["monitoring", "Amazon CloudWatch", "AWS"]
notionId: 3a6964dc-ce4a-8127-ba14-fcf7b8754155
notionUrl: https://app.notion.com/p/3a6964dcce4a8127ba14fcf7b8754155
notionUpdated: "2026-07-31T08:22:47.242Z"
---

## 基本情報

| 項目 | 内容 |
| --- | --- |
| 英語 | Amazon CloudWatch |
| 正式名称 | Amazon CloudWatch |
| 中国語 | 监控、日志与可观测性服务 |
| 日本語 | Amazon CloudWatch（モニタリング・ログ・可観測性サービス） |
| 試験頻度 | ⭐⭐⭐⭐⭐ |
| 混同しやすいサービス | AWS CloudTrail / AWS Config / AWS Health |

## ひとことで理解

Metrics と Logs を収集し、Dashboard 表示と Alarm により現在の稼働状況を監視します。

## 主な機能と利用場面

- Metrics は CPU、Request 数、Latency、Error Rate、Custom Metric を数値化します。
- Logs は Application、OS、Lambda、Service の Log を集約し、Logs Insights で検索します。
- Alarm は条件を評価し、SNS 通知、Auto Scaling、Automation を起動できます。
- Dashboard は情報を可視化しますが、それだけでは通知しません。
- EC2 の Memory など Guest OS 内部の Metric には通常 CloudWatch Agent が必要です。

## 試験ポイントと注意点

- CloudWatch は現在の稼働状況、CloudTrail は API 操作者、Config は構成変更を扱います。
- Alarm の状態は OK、ALARM、INSUFFICIENT_DATA です。
- Metrics は計測、Alarm は判断、SNS は通知、Dashboard は表示、Logs は調査を担います。

## 重要ポイント

**Metrics で測り、Alarm で判断し、SNS で通知し、Dashboard で表示し、Logs で調査します。**

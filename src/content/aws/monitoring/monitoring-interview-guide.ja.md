---
title: "Monitoring 面接ガイド"
fullName: "AWS Monitoring and Governance Interview Guide"
description: "監視・Governance の質問は、目的、Data Source、Service 分担、権限と保持、Alert、Automation の順で答える。"
service: "AWS Monitoring and Governance Interview Guide"
category: monitoring
kind: topic
lang: ja
topicKey: "AWS Monitoring and Governance Interview Guide"
frequency: "面试专题"
date: 2026-10-08
updated: 2026-10-08
tags: ["monitoring","AWS Monitoring and Governance Interview Guide","AWS"]
notionId: 3a6964dc-ce4a-813e-933c-d8d035aa99a5
notionUrl: https://app.notion.com/p/3a6964dcce4a813e933cd8d035aa99a5
notionUpdated: "2026-10-08T00:13:02.223Z"
---
## 基本情報

| 項目 | 内容 |
| --- | --- |
| 英語 / 正式名称 | AWS Monitoring and Governance Interview Guide |
| 中国語 | AWS 监控与治理面试 |
| 日本語 | AWS 監視・ガバナンス面接ガイド |
| 復習優先度 | 面试专题 |
| 混同しやすい項目 | CloudWatch / CloudTrail / Config / EventBridge |

## 一言で理解

監視・Governance の質問は、目的、Data Source、Service 分担、権限と保持、Alert、Automation の順で答える。

## 要点整理

CloudWatch は実行状態、CloudTrail は API 操作、Config は設定と Compliance、EventBridge は Event から Action への Routing を担当する。

## 学習ポイント

- Resource 削除では CloudTrail で Principal、時刻、API を確認する。
- 開放 SSH の継続監視は Config Rule と Automation、操作証拠は CloudTrail。
- Organizations は Account、OU、SCP、Control Tower は Landing Zone と Controls。
- Artifact は AWS Compliance Report、Audit Manager は顧客環境の Evidence。

## よくある誤解

- SCP は Permission Ceiling であり単独では権限を付与しない。
- Configuration、操作証拠、Runtime Metric は別 Service から得る。

## 重要ポイント

**監視目的を述べ、Data、Permission、Alert、Remediation、Validation を説明する。**

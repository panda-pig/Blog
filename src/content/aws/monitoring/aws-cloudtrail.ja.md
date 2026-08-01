---
title: "AWS CloudTrail"
fullName: "AWS CloudTrail"
description: "API 呼び出しとアカウント活動を記録し、誰がいつどこから何をしたかを示します。"
service: "AWS CloudTrail"
category: monitoring
kind: service
lang: ja
topicKey: "AWS CloudTrail"
frequency: "考试频率 ⭐⭐⭐⭐⭐"
date: 2026-08-01
updated: 2026-08-01
tags: ["monitoring", "AWS CloudTrail", "AWS"]
notionId: 3a6964dc-ce4a-81ff-a189-fa2cb5f01fbc
notionUrl: https://app.notion.com/p/3a6964dcce4a81ffa189fa2cb5f01fbc
notionUpdated: "2026-07-31T08:18:14.118Z"
---

## 基本情報

| 項目 | 内容 |
| --- | --- |
| 英語 | AWS CloudTrail |
| 正式名称 | AWS CloudTrail |
| 中国語 | 账户活动与 API 审计日志 |
| 日本語 | AWS CloudTrail（API 操作履歴・監査ログ） |
| 試験頻度 | ⭐⭐⭐⭐⭐ |
| 混同しやすいサービス | Amazon CloudWatch / AWS Config |

## ひとことで理解

API 呼び出しとアカウント活動を記録し、誰がいつどこから何をしたかを示します。

## 主な機能と利用場面

- Console、CLI、SDK、AWS Service から実行された API 活動を記録します。
- Event には実行主体、時刻、Source IP、Region、Request Parameter、結果が含まれます。
- Event History は最近の Management Event、Trail は S3 への継続配信と長期保存に使います。
- Management Event は Control Plane、Data Event は S3 Object など Resource 単位の操作を扱います。
- CloudTrail Insights は Management Event の異常な呼び出し傾向を検出します。

## 試験ポイントと注意点

- S3 GetObject/DeleteObject など Resource 単位の監査には Data Events を有効にします。
- マルチアカウントの集中監査には Organization Trail を利用します。
- CPU、Latency、Application Performance の監視が主目的ではありません。

## 重要ポイント

**誰が、いつ、どこから、どの API を実行したかは CloudTrail です。**

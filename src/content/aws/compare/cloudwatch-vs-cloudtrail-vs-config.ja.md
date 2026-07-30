---
title: "CloudWatch vs CloudTrail vs Config"
fullName: "CloudWatch vs CloudTrail vs Config"
description: "CloudWatch は運用監視、CloudTrail は API Activity 監査、AWS Config は Resource Configuration と Compliance を追跡する。"
service: "AWS Compare"
category: compare
kind: compare
lang: ja
topicKey: "CloudWatch vs CloudTrail vs Config"
frequency: "学習まとめ"
date: 2026-07-30
updated: 2026-07-30
tags: ["compare","CloudWatch vs CloudTrail vs Config","AWS"]
notionId: 3a6964dc-ce4a-81f8-9d61-d77aa17cd145
notionUrl: https://app.notion.com/p/3a6964dcce4a81f89d61d77aa17cd145
notionUpdated: "2026-07-23T07:24:14.608Z"
---

## 一言で理解

> CloudWatch は運用監視、CloudTrail は API Activity 監査、AWS Config は Resource Configuration と Compliance を追跡する。

## 要点

- CloudWatch は Metric、Log、Alarm、Dashboard で System の状態を確認する。
- CloudTrail は誰が、いつ、どこから、どの AWS API を呼び、どうなったかを記録する。
- AWS Config は Configuration Change を記録し、Rule による Compliance 評価を行う。

## 試験での判断

> S3 Object Level の監査には Metric だけでなく CloudTrail Data Events を有効にする。

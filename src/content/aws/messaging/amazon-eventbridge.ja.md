---
title: "Amazon EventBridge"
fullName: "Amazon EventBridge"
description: "AWS サービス、アプリケーション、SaaS の Event を Rule で振り分けるマネージド Event Bus。"
service: "Amazon EventBridge"
category: messaging
kind: service
lang: ja
topicKey: "Amazon EventBridge"
frequency: "試験頻度 ⭐⭐⭐⭐"
date: 2026-07-30
updated: 2026-07-30
tags: ["messaging","Amazon EventBridge","AWS"]
notionId: 3a6964dc-ce4a-8146-be57-defb6099f3b1
notionUrl: https://app.notion.com/p/3a6964dcce4a8146be57defb6099f3b1
notionUpdated: "2026-07-23T07:21:20.695Z"
---

## 一言で理解

> AWS サービス、アプリケーション、SaaS の Event を Rule で振り分けるマネージド Event Bus。

## 要点

- Event Bus が Event を受け取り、Rule が構造や内容を照合して Target を選ぶ。
- Target には Lambda、Step Functions、SQS、SNS、API Destination などを指定できる。
- 疎結合な Event-Driven Architecture と Schedule Event を実現する。

## 試験での判断

> 単純な通知 Fan-out は SNS、耐久 Queue は SQS、ルールベースの Event Routing は EventBridge。

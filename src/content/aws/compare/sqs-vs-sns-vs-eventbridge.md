---
title: "SQS vs SNS vs EventBridge"
fullName: "SQS vs SNS vs EventBridge"
description: "SNS → 多个 SQS：广播给多个业务，同时每个业务有自己的缓冲与重试。"
service: "AWS Compare"
category: compare
kind: compare
lang: zh
topicKey: "SQS vs SNS vs EventBridge"
frequency: "高频对比"
date: 2026-07-30
updated: 2026-07-30
tags: ["compare","SQS vs SNS vs EventBridge","AWS"]
notionId: 3a6964dc-ce4a-81fb-83ee-e98070269337
notionUrl: https://app.notion.com/p/3a6964dcce4a81fb83eee98070269337
notionUpdated: "2026-07-23T07:24:12.397Z"
---

## 一句话结论

- **SQS**：消息要排队等待消费者处理。
- **SNS**：同一条消息要主动推送给多个订阅者。
- **EventBridge**：要根据事件来源、类型或内容进行规则路由。

## 核心差异

| 维度 | SQS | SNS | EventBridge |
| --- | --- | --- | --- |
| 模式 | Queue / Pull | Topic / Push | Event Bus / Rule |
| 核心用途 | 缓冲、削峰、解耦 | 广播、通知、Fan-out | 事件匹配与路由 |
| 消费方式 | 消费者主动拉取 | 服务主动推送 | 规则匹配后发送目标 |
| 一对多 | 通常一个消息被一个消费者成功处理 | 原生一对多 | 一个事件可匹配多个规则 |
| 消息保留 | 队列中保留等待处理 | 不是传统持久队列 | 可配置 Archive / Replay |
| 典型目标 | Worker、Lambda | SQS、Lambda、HTTP、Email | Lambda、SQS、SNS、Step Functions |

## 经典组合

SNS → 多个 SQS：广播给多个业务，同时每个业务有自己的缓冲与重试。
EventBridge → SQS / Lambda / Step Functions：根据事件类型送到不同处理流程。
SQS → Lambda：队列削峰，Lambda 批量消费。

## 题目关键词

- Backlog、Buffer、Decouple、Peak Traffic → SQS
- Fan-out、Broadcast、Notification → SNS
- Event Pattern、SaaS、Event Bus、Routing → EventBridge

## 常见陷阱

- SQS Standard 可能重复投递，需要幂等。
- SNS 不等于持久队列。
- EventBridge 不主要解决积压缓冲。
- 三者经常组合，并非只能选择一个。

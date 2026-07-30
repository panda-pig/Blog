---
title: "Amazon SNS"
fullName: "Amazon Simple Notification Service"
description: "发布者把消息发送到 Topic，SNS 再把同一条消息主动推送给一个或多个订阅者。"
service: "Amazon SNS"
category: messaging
kind: service
lang: zh
topicKey: "Amazon SNS"
frequency: "考试频率 ⭐⭐⭐⭐⭐"
date: 2026-07-30
updated: 2026-07-30
tags: ["messaging","Amazon SNS","AWS"]
notionId: 3a6964dc-ce4a-815d-a70c-efddf8cc7d63
notionUrl: https://app.notion.com/p/3a6964dcce4a815da70cefddf8cc7d63
notionUpdated: "2026-07-23T07:21:18.671Z"
---

## 基本信息

| 字段 | 内容 |
| --- | --- |
| 英文 | Amazon SNS |
| 全称 | Amazon Simple Notification Service |
| 中文 | 通知与发布订阅服务 |
| 日文 | Amazon SNS（通知サービス） |
| 考试频率 | ⭐⭐⭐⭐⭐ |
| 易混淆 | SQS / EventBridge |

## 一句话理解

发布者把消息发送到 Topic，SNS 再把同一条消息主动推送给一个或多个订阅者。

## 核心作用

- 一对多广播。
- 发布者与订阅者解耦。
- 把同一事件发送给多个独立处理流程。

## 工作原理

Publisher → SNS Topic → Subscription → SQS、Lambda、HTTP(S)、Email 等订阅端。

## Fan-out

SNS 同时向多个 SQS Queue 推送消息。每个队列由自己的消费者独立处理，既能广播又能保留队列缓冲与失败隔离。

## Cloud Practitioner 考点

- SNS 是 Push / Pub-Sub。
- 一个 Topic 可有多个订阅者。
- 常用于通知和一对多消息分发。

## SAA-C03 考点

- SNS + SQS Fan-out。
- Subscription Filter Policy。
- 重试、DLQ 和不同订阅端的行为。
- 与 EventBridge 的选型。

## 与 SQS 的区别

- SNS：主动推送，一条消息发给多个订阅者。
- SQS：消费者主动拉取，消息排队等待处理。
- 常见组合不是二选一，而是 SNS 广播到多个 SQS。

## 常见误区

- SNS 不等于持久消息队列。
- SNS 和 SQS 可以互补。
- Topic 与 Queue 不是同一种资源。

## 重点记忆

SNS = Push + Pub/Sub + Fan-out。

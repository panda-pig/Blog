---
title: "解耦与事件驱动架构"
fullName: "Decoupling & Event-Driven Architecture"
description: "通过队列、事件与稳定契约拆开上下游的速度、故障和扩缩边界。"
service: "Architecture"
category: architecture
kind: topic
lang: zh
topicKey: "解耦与事件驱动"
frequency: "考试频率 ★★★★★"
date: 2026-07-30
updated: 2026-07-30
tags: ["Architecture","Decoupling","Event-Driven"]
notionId: 3a6964dc-ce4a-815b-9c05-e0a6657c8bc5
notionUrl: https://app.notion.com/p/3a6964dcce4a815b9c05e0a6657c8bc5
notionUpdated: "2026-07-30T01:08:05.518Z"
---

## 一句话理解

> 解耦让生产者和消费者可以独立变化、独立扩缩，并把局部故障隔离在稳定边界内。

## 核心作用

- SQS 提供队列、缓冲和削峰；SNS 负责 Push 与 Fan-out。
- EventBridge 按事件内容和规则路由；Step Functions 显式编排多步骤工作流。
- 异步处理让上下游按各自速度运行，但通常需要接受最终一致性。

## 可靠处理要点

- 至少一次投递可能产生重复消息，消费者必须具备幂等性。
- Visibility Timeout 应覆盖处理时间，失败消息通过重试和 DLQ 隔离。
- 监控队列积压、最旧消息年龄、失败率和处理延迟。
- 设计 Backpressure，避免上游持续压垮下游。

## 考试重点

- Backlog / Buffer 通常指向 SQS；Fan-out 指向 SNS；Event Pattern 指向 EventBridge。
- SQS 不是广播，SNS 不是传统持久队列，EventBridge 不主要解决积压。
- 重试次数越多不一定越可靠，还要防止重试风暴和毒消息。

## 重点记忆

> **可靠异步 = 幂等 + 重试 + DLQ + 监控；解耦 = 独立变化 + 故障隔离。**

## 关联服务

Amazon SQS、Amazon SNS、Amazon EventBridge、AWS Lambda、Step Functions、CloudWatch。

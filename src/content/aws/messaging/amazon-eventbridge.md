---
title: "Amazon EventBridge"
fullName: "Amazon EventBridge"
description: "接收来自 AWS 服务、应用和 SaaS 的事件，按规则匹配内容，再把事件路由到合适的目标。"
service: "Amazon EventBridge"
category: messaging
kind: service
lang: zh
topicKey: "Amazon EventBridge"
frequency: "考试频率 ⭐⭐⭐⭐"
date: 2026-07-30
updated: 2026-07-30
tags: ["messaging","Amazon EventBridge","AWS"]
notionId: 3a6964dc-ce4a-8146-be57-defb6099f3b1
notionUrl: https://app.notion.com/p/3a6964dcce4a8146be57defb6099f3b1
notionUpdated: "2026-07-23T07:21:20.695Z"
---

## 基本信息

| 字段 | 内容 |
| --- | --- |
| 英文 | Amazon EventBridge |
| 全称 | Amazon EventBridge |
| 中文 | 事件总线与事件路由服务 |
| 日文 | Amazon EventBridge（イベントバス） |
| 考试频率 | ⭐⭐⭐⭐ |
| 易混淆 | SNS / SQS / CloudWatch Events |

## 一句话理解

接收来自 AWS 服务、应用和 SaaS 的事件，按规则匹配内容，再把事件路由到合适的目标。

## 核心作用

- 构建事件驱动架构。
- 根据事件内容进行规则匹配。
- 连接 AWS 服务、应用和 SaaS。
- 降低事件生产者与处理方之间的耦合。

## 工作原理

Event Source → Event Bus → Rule / Event Pattern → Target（Lambda、SQS、SNS、Step Functions 等）。

## 与 SQS、SNS 的关系

| 服务 | 主要职责 |
| --- | --- |
| SQS | 排队、缓冲、消费者拉取 |
| SNS | 一对多推送与广播 |
| EventBridge | 按事件内容和规则进行路由 |

## 经典组合

业务事件 → EventBridge 判断类型 → 路由到 SNS / SQS / Lambda / Step Functions → 各下游独立处理。

## Cloud Practitioner 考点

识别事件总线、事件驱动架构、AWS / SaaS 事件路由。

## SAA-C03 考点

- Event Pattern 与 Rule。
- Default / Custom / Partner Event Bus。
- Archive、Replay、Schema 等能力的场景。
- 与 SNS、SQS、Step Functions 的组合选型。

## 常见误区

- EventBridge 不只是通知服务。
- 它不等于消息缓冲队列。
- CloudWatch Events 是其前身，EventBridge 功能范围更广。

## 重点记忆

EventBridge = 看事件内容，再决定送到哪里。

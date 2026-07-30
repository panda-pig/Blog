---
title: "Amazon SQS"
fullName: "Amazon Simple Queue Service"
description: "把消息先放进队列，消费者按自己的速度拉取处理，从而缓冲流量并解耦系统。"
service: "Amazon SQS"
category: messaging
kind: service
lang: zh
topicKey: "Amazon SQS"
frequency: "考试频率 ⭐⭐⭐⭐⭐"
date: 2026-07-30
updated: 2026-07-30
tags: ["messaging","Amazon SQS","AWS"]
notionId: 3a6964dc-ce4a-81ba-bf24-f388c5cddd42
notionUrl: https://app.notion.com/p/3a6964dcce4a81babf24f388c5cddd42
notionUpdated: "2026-07-23T07:21:16.024Z"
---

## 基本信息

| 字段 | 内容 |
| --- | --- |
| 英文 | Amazon SQS |
| 全称 | Amazon Simple Queue Service |
| 中文 | 消息队列服务 |
| 日文 | Amazon SQS（メッセージキュー） |
| 考试频率 | ⭐⭐⭐⭐⭐ |
| 易混淆 | SNS / EventBridge / Kinesis |

## 一句话理解

把消息先放进队列，消费者按自己的速度拉取处理，从而缓冲流量并解耦系统。

## 核心作用

- 解耦生产者与消费者。
- 削峰填谷，避免突发请求压垮下游。
- 在下游临时故障时暂存消息。
- 支持独立扩缩生产端与消费端。

## Standard 与 FIFO

| 类型 | 特点 |
| --- | --- |
| Standard Queue | 高吞吐，至少一次投递，可能重复，尽力保持顺序 |
| FIFO Queue | 保证顺序并提供去重能力，适合顺序和重复控制要求高的场景 |

## 核心概念

- Producer：发送消息。
- Consumer：拉取并处理消息。
- Visibility Timeout：消息被读取后暂时对其他消费者不可见。
- Message Retention：消息可以在队列中保留的时间。
- DLQ：保存多次处理失败的消息。
- Idempotency：重复处理同一消息不会产生额外副作用。

## 与 Lambda 集成

SQS → Event Source Mapping 轮询 → Lambda 批量处理 → 成功后删除；失败则消息重新可见，必要时进入 DLQ。

## Cloud Practitioner 考点

- SQS 是 Pull 模式队列。
- 用于缓冲、解耦和削峰。
- 一个消息通常由一个消费者成功处理。

## SAA-C03 考点

- Standard vs FIFO。
- Visibility Timeout 应覆盖处理时间。
- DLQ 与 Redrive Policy。
- 至少一次投递意味着消费者必须幂等。
- Long Polling、批量处理与扩缩消费者。
- SNS → 多个 SQS 的 Fan-out 架构。

## 常见误区

- SQS 不是广播服务。
- 消息被读取不代表立即删除。
- Standard Queue 不保证绝对一次投递。
- DLQ 不是自动修复服务，仍需排查和重新处理。

## 重点记忆

SQS = Pull + 缓冲 + 解耦；考试重点是 Standard/FIFO、Visibility Timeout、DLQ 和幂等性。

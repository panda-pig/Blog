---
title: "AWS Step Functions"
fullName: "AWS Step Functions"
description: "用状态机协调 Lambda、服务调用与长短流程。"
service: "AWS Step Functions"
category: messaging
kind: service
lang: zh
topicKey: "AWS Step Functions"
frequency: "考试频率 ⭐⭐⭐⭐"
date: 2026-07-31
updated: 2026-09-29
tags: ["messaging", "AWS Step Functions", "AWS"]
notionId: 3a6964dc-ce4a-8187-bc25-ef5873cbb0dd
notionUrl: https://app.notion.com/p/3a6964dcce4a8187bc25ef5873cbb0dd
notionUpdated: "2026-09-28T07:51:38.751Z"
---

## 基本信息

| 字段 | 内容 |
| --- | --- |
| 英文 | AWS Step Functions |
| 全称 | AWS Step Functions |
| 中文释义 | 工作流编排 |
| 日文释义 | ワークフローオーケストレーション |
| 考试频率 | ⭐⭐⭐⭐ |
| 易混淆 | SQS / SWF |

## 一句话理解

用状态机协调 Lambda、服务调用与长短流程。

## 阶段小结

- **核心定位**：用状态机协调 Lambda、服务调用与长短流程。
- **考试频率**：⭐⭐⭐⭐
- **对比检查**：SQS / SWF

## 重点记忆

AWS Step Functions = 工作流编排

+## 本轮补充：编排边界

- State Machine 负责 Sequence、Choice、Parallel、Wait、Retry / Catch 与 Callback / Human Approval。
- Step Functions 编排工作，不执行应用代码；实际计算由 Lambda、ECS、API 或其他服务完成。
- Retry 要区分可重试与永久错误，Catch 将失败引向补偿、人工处理或 DLQ。
- 长流程应明确幂等、Execution History、超时、补偿事务与敏感数据边界。

---
title: "AWS X-Ray"
fullName: "AWS X-Ray"
description: "追踪分布式应用请求并分析性能瓶颈和错误。"
service: "AWS X-Ray"
category: monitoring
kind: service
lang: zh
topicKey: "AWS X-Ray"
frequency: "考试频率 ⭐⭐⭐"
date: 2026-07-31
updated: 2026-08-05
tags: ["monitoring", "AWS X-Ray", "AWS"]
notionId: 3a6964dc-ce4a-814a-a684-f401dfdce7d9
notionUrl: https://app.notion.com/p/3a6964dcce4a814aa684f401dfdce7d9
notionUpdated: "2026-08-05T01:57:35.867Z"
---

## 基本信息

| 字段 | 内容 |
| --- | --- |
| 英文 | AWS X-Ray |
| 全称 | AWS X-Ray |
| 中文释义 | 分布式追踪 |
| 日文释义 | 分散トレーシング |
| 考试频率 | ⭐⭐⭐ |
| 易混淆 | CloudWatch |

## 一句话理解

追踪分布式应用请求并分析性能瓶颈和错误。

## 阶段小结

- **核心定位**：追踪分布式应用请求并分析性能瓶颈和错误。
- **考试频率**：⭐⭐⭐
- **对比检查**：CloudWatch

## 重点记忆

AWS X-Ray = 分布式追踪

## 核心概念

- **Trace**：一次请求穿过分布式系统的完整路径。
- **Segment / Subsegment**：服务与下游调用的耗时、错误和元数据。
- **Service Map**：可视化依赖、延迟和错误率；Sampling 控制采集量。

应用通过 X-Ray SDK 或 OpenTelemetry 传播追踪上下文，Lambda、API Gateway、ECS/EC2 等组件共同形成端到端 Trace。

- **CloudWatch** 回答系统当前表现如何。
- **X-Ray** 回答这次请求慢在或错在哪里。
- **CloudTrail** 回答谁在什么时候做了什么。

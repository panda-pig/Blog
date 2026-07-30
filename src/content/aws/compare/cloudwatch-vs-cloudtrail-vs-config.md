---
title: "CloudWatch vs CloudTrail vs Config"
fullName: "CloudWatch vs CloudTrail vs Config"
description: "整理自 AWS 学习手册的阶段性知识总结。"
service: "AWS Compare"
category: compare
kind: compare
lang: zh
topicKey: "CloudWatch vs CloudTrail vs Config"
frequency: "高频对比"
date: 2026-07-30
updated: 2026-07-30
tags: ["compare","CloudWatch vs CloudTrail vs Config","AWS"]
notionId: 3a6964dc-ce4a-81f8-9d61-d77aa17cd145
notionUrl: https://app.notion.com/p/3a6964dcce4a81f89d61d77aa17cd145
notionUpdated: "2026-07-23T07:24:14.608Z"
---

## 一句话结论
- **CloudWatch**：系统现在表现如何？
- **CloudTrail**：谁在什么时候调用了什么 API？
- **AWS Config**：资源配置如何变化、是否符合规则？
## 核心差异

| 维度 | CloudWatch | CloudTrail | AWS Config |
| --- | --- | --- | --- |
| 核心对象 | 指标、日志、告警 | API 调用与账户活动 | 资源配置与合规 |
| 典型问题 | CPU 为什么高？错误率多少？ | 谁删除了资源？ | Security Group 何时被改？是否违规？ |
| 时间视角 | 运行状态和趋势 | 操作历史 | 配置历史与规则评估 |
| 常见输出 | Metrics、Logs、Alarms、Dashboard | Event History、Trail | Configuration Item、Config Rule |
| 常见集成 | Auto Scaling、SNS | S3、CloudWatch Logs、EventBridge | Security Hub、Automation |

## 场景判断
- “监控 CPU、延迟、错误、日志并告警” → CloudWatch。
- “调查谁执行 DeleteBucket、StopInstances 等操作” → CloudTrail。
- “追踪资源配置变化、检查是否允许 0.0.0.0/0” → AWS Config。
## 常见陷阱
- CloudWatch Logs 可以保存应用日志，但不因此等于 CloudTrail。
- CloudTrail 记录 API 操作，不主要负责性能监控。
- Config 关注资源配置状态，不记录全部应用行为。
- 实际治理中三者经常一起使用。

---
title: "Amazon CloudWatch"
fullName: "Amazon CloudWatch"
description: "收集系统的指标、日志和事件，创建仪表板与告警，回答“系统现在运行得怎么样”。"
service: "Amazon CloudWatch"
category: monitoring
kind: service
lang: zh
topicKey: "Amazon CloudWatch"
frequency: "考试频率 ⭐⭐⭐⭐⭐"
date: 2026-07-30
updated: 2026-07-31
tags: ["monitoring","Amazon CloudWatch","AWS"]
notionId: 3a6964dc-ce4a-8127-ba14-fcf7b8754155
notionUrl: https://app.notion.com/p/3a6964dcce4a8127ba14fcf7b8754155
notionUpdated: "2026-07-30T08:30:25.135Z"
---

## 基本信息

| 字段 | 内容 |
| --- | --- |
| 英文 | Amazon CloudWatch |
| 全称 | Amazon CloudWatch |
| 中文释义 | 监控、日志与可观测性服务 |
| 日文释义 | Amazon CloudWatch（モニタリング・ログ・オブザーバビリティサービス） |
| 考试频率 | ⭐⭐⭐⭐⭐ |
| 易混淆 | CloudTrail / AWS Config |

## 一句话理解

收集系统的指标、日志和事件，创建仪表板与告警，回答“系统现在运行得怎么样”。

## 核心能力

- Metrics：CPU、请求数、延迟、错误率等数值指标。
- Logs：集中收集应用、系统和 Lambda 日志。
- Alarms：指标达到条件时告警或触发动作。
- Dashboards：可视化关键指标。
- Logs Insights：查询和分析日志。

## CloudWatch Logs

- Log Group：按应用或资源组织日志并设置保留期。
- Log Stream：来自某个具体来源的一系列日志事件。
- Lambda 通常把函数输出写入 CloudWatch Logs，但 Execution Role 必须有相应权限。

## 工作场景

- EC2 CPU 过高触发告警。
- Lambda 错误率、执行时长和日志排查。
- ALB 延迟和 5xx 错误监控。
- Auto Scaling 根据 CloudWatch 指标调整容量。

## Cloud Practitioner 考点

- CloudWatch = Metrics、Logs、Alarms、Dashboard。
- 监控资源状态和应用表现。

## SAA-C03 考点

- 指标维度、Alarm 状态和复合告警。
- 自定义指标与 Agent。
- 日志保留、过滤、订阅与跨账户可观测性。
- 与 Auto Scaling、SNS、EventBridge 的集成。

## 高频易混淆

- CloudWatch：系统表现和日志。
- CloudTrail：谁在何时调用了什么 API。
- AWS Config：资源配置如何变化、是否合规。

## 常见误区

- CloudWatch 不等于 API 审计。
- 不是所有 OS 内部指标都会自动提供，部分指标需要 Agent。
- 写入日志需要正确 IAM 权限。

## 重点记忆

CloudWatch 回答“现在运行如何”；CloudTrail 回答“谁做了什么”；Config 回答“配置变成了什么、是否合规”。

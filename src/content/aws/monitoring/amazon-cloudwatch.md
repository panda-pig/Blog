---
title: "Amazon CloudWatch"
fullName: "Amazon CloudWatch"
description: "收集指标和日志、展示仪表板并触发告警，观察系统当前运行状态。"
service: "Amazon CloudWatch"
category: monitoring
kind: service
lang: zh
topicKey: "Amazon CloudWatch"
frequency: "考试频率 ⭐⭐⭐⭐⭐"
date: 2026-08-01
updated: 2026-08-01
tags: ["monitoring", "Amazon CloudWatch", "AWS"]
notionId: 3a6964dc-ce4a-8127-ba14-fcf7b8754155
notionUrl: https://app.notion.com/p/3a6964dcce4a8127ba14fcf7b8754155
notionUpdated: "2026-07-31T08:22:47.242Z"
---

## 基本信息

| 字段 | 内容 |
| --- | --- |
| 英文 | Amazon CloudWatch |
| 全称 | Amazon CloudWatch |
| 中文 | 监控、日志与可观测性服务 |
| 日文 | Amazon CloudWatch（モニタリング・ログ・可観測性サービス） |
| 考试频率 | ⭐⭐⭐⭐⭐ |
| 易混淆 | AWS CloudTrail / AWS Config / AWS Health |
## 一句话理解
收集指标和日志、展示仪表板并触发告警，回答“系统现在运行得怎么样”。
## 核心作用
- **Metrics**：CPU、请求数、延迟、错误率等数值指标。
- **Logs**：集中收集应用、系统和 AWS 服务日志。
- **Alarms**：指标达到条件时通知或触发动作。
- **Dashboards**：在统一视图中可视化关键指标。
- **Logs Insights**：查询和分析日志。
## 工作中的应用场景
- EC2 CPU 过高触发告警并通知运维。
- Lambda 错误率、执行时长和日志排查。
- ALB 延迟和 5xx 错误监控。
- Auto Scaling 根据 CloudWatch 指标调整容量。
## 工作原理
资源和应用发布指标或日志到 CloudWatch；Alarm 评估指标阈值并进入 OK、ALARM 或 INSUFFICIENT_DATA 状态，再通过 SNS、Auto Scaling、EventBridge 等触发动作。
## Cloud Practitioner 考点
- CloudWatch = Metrics + Logs + Alarms + Dashboards。
- Alarm 负责判断是否达到条件；SNS 常负责发送通知。
## SAA-C03 考点
- EC2 默认指标不包含全部操作系统内部数据，内存等常需 CloudWatch Agent。
- 自定义指标、日志保留、Metric Filter、订阅和跨账户可观测性是常见设计点。
- Alarm 可触发 Auto Scaling、SNS 或其他自动化动作。
## 常见误区
- CloudWatch 不等于 API 审计。
- 不是所有 OS 指标都会自动提供。
- Dashboard 只展示信息，告警与动作需要单独配置。
## 易混淆服务
- **CloudWatch**：资源表现、指标、日志和告警。
- **CloudTrail**：谁调用了什么 API。
- **Config**：配置历史与规则合规。
- **AWS Health**：AWS 官方事件是否影响账户。
## 面试高频问题
- 如何为一个 Web 应用设计指标、日志和告警？
- 为什么 CloudWatch Alarm 常与 SNS 和 Auto Scaling 配合？
- EC2 内存指标为什么可能看不到？
## 重点记忆
**Metrics 负责量化，Alarm 负责判断，SNS 负责通知，Dashboard 负责展示，Logs 负责排障。**
## 关联服务
Amazon SNS / Auto Scaling / Amazon EventBridge / AWS Lambda / AWS CloudTrail

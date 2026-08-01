---
title: "AWS Health Dashboard"
fullName: "AWS Health Dashboard"
description: "展示影响账户和资源的 AWS 服务事件、计划变更与通知。"
service: "AWS Health Dashboard"
category: monitoring
kind: service
lang: zh
topicKey: "AWS Health Dashboard"
frequency: "考试频率 ⭐⭐⭐⭐"
date: 2026-08-01
updated: 2026-08-01
tags: ["monitoring", "AWS Health Dashboard", "AWS"]
notionId: 3a6964dc-ce4a-811e-9b8d-c28168427289
notionUrl: https://app.notion.com/p/3a6964dcce4a811e9b8dc28168427289
notionUpdated: "2026-07-31T08:18:17.495Z"
---

## 基本信息

| 字段 | 内容 |
| --- | --- |
| 英文 | AWS Health Dashboard |
| 全称 | AWS Health Dashboard |
| 中文 | 账户相关的 AWS 服务健康与事件通知 |
| 日文 | AWS Health Dashboard（アカウント別のサービス稼働状況） |
| 考试频率 | ⭐⭐⭐⭐ |
| 易混淆 | Amazon CloudWatch / AWS Service Health |
## 一句话理解
告诉你 AWS 官方事件、计划变更或账户通知是否影响你的资源。
## 核心作用
- 展示 Service Events、Planned Changes 和 Account Notifications。
- 提供与你账户和资源相关的事件详情及建议行动。
- 可通过 AWS Health API 和事件集成实现大规模通知与自动化。
## 工作中的应用场景
- 判断故障是否来自 AWS 服务而不是应用本身。
- 提前处理实例退役、计划维护或生命周期事件。
- 在多账户环境集中汇总与分发 Health 事件。
## 工作原理
AWS 发布事件后，Health Dashboard 根据账户和资源影响范围显示个性化信息；可结合 EventBridge、通知和自动化工作流处理事件。
## Cloud Practitioner 考点
- AWS Health = AWS 官方服务事件与账户影响信息。
- “计划维护、实例退役、AWS 服务故障” → Health Dashboard。
## SAA-C03 考点
- CloudWatch 发现自己的指标异常；AWS Health 判断是否存在 AWS 侧事件。
- 事件驱动运维可将 Health 事件发送到 EventBridge 并触发通知或自动响应。
## 常见误区
- AWS Health 不是 CPU、日志和应用错误监控工具。
- 个性化 Dashboard 与公开服务状态信息的粒度不同。
- 看到 Health 事件仍需评估资源影响并采取行动。
## 易混淆服务
- **AWS Health**：AWS 官方事件及账户影响。
- **CloudWatch**：自己的资源和应用运行状态。
- **CloudTrail**：账户中的 API 操作记录。
## 面试高频问题
- 网站故障时如何区分应用问题和 AWS 服务事件？
- 如何在多账户环境自动分发实例退役通知？
## 重点记忆
**CloudWatch 看你的资源，AWS Health 看 AWS 官方事件是否影响你。**
## 关联服务
Amazon EventBridge / AWS Organizations / Amazon SNS / Amazon CloudWatch / AWS Support

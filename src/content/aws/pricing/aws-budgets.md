---
title: "AWS Budgets"
fullName: "AWS Budgets"
description: "为成本、使用量和承诺折扣设置目标，并在实际或预测值越过阈值时通知。"
service: "AWS Budgets"
category: pricing
kind: service
lang: zh
topicKey: "AWS Budgets"
frequency: "考试频率 ⭐⭐⭐⭐⭐"
date: 2026-08-04
updated: 2026-08-25
tags: ["pricing", "AWS Budgets", "AWS"]
notionId: 3b2964dc-ce4a-816c-9d49-ed1dd09b3c99
notionUrl: https://app.notion.com/p/3b2964dcce4a816c9d49ed1dd09b3c99
notionUpdated: "2026-08-04T02:10:34.308Z"
---

## 基本信息

| 字段 | 内容 |
| --- | --- |
| 英文 | AWS Budgets |
| 全称 | AWS Budgets |
| 中文 | 预算与阈值提醒 |
| 日文 | AWS Budgets（予算の設定・アラート） |
| 考试频率 | ⭐⭐⭐⭐⭐ |
| 易混淆 | AWS Cost Explorer / AWS Cost Anomaly Detection |

## 一句话理解

为成本、使用量或 Savings Plans/RI 覆盖率与利用率设置目标，并在实际或预测值越过阈值时通知。

## 核心作用

- 创建成本、用量或承诺折扣预算，并设置多个实际或预测阈值。
- 通过 Email、SNS 等渠道通知；Budgets Actions 可在授权与审批设计下执行动作。
- 可按账户、服务、项目或成本分配标签设置预算。

## 常见误区

- 预算不会默认停止所有超支资源。
- Budgets 比较预设阈值；Cost Anomaly Detection 寻找异常模式；Cost Explorer 用于自由分析。
- 对生产资源执行预算动作时，需要最小权限、审批和回滚设计。

## 重点记忆

**先设目标，再对实际或预测值设阈值 → AWS Budgets。**

## 实际与预测费用告警

- **Zero spend budget**：首次出现支出时尽早告警。
- **Monthly cost budget**：按月设置金额，可同时配置 actual spend 与 forecasted spend 阈值。
- 可设置多个阈值，例如 actual 85%、actual 100%、forecast 100%。
- Budget Alert 不会默认停止资源；生产 Budgets Actions 需要最小权限、审批与回滚设计。

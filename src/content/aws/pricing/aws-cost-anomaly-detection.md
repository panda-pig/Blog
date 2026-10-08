---
title: "AWS Cost Anomaly Detection"
fullName: "AWS Cost Anomaly Detection"
description: "用机器学习学习正常支出模式，发现明显偏离并给出成本影响和主要维度。"
service: "AWS Cost Anomaly Detection"
category: pricing
kind: service
lang: zh
topicKey: "AWS Cost Anomaly Detection"
frequency: "复习优先级 ⭐⭐⭐"
date: 2026-10-08
updated: 2026-10-08
tags: ["pricing","AWS Cost Anomaly Detection","AWS"]
notionId: 3f3964dc-ce4a-812d-8472-fefaa4e53df8
notionUrl: https://app.notion.com/p/3f3964dcce4a812d8472fefaa4e53df8
notionUpdated: "2026-10-08T02:55:12.539Z"
---
## 基本信息

| 字段 | 内容 |
| --- | --- |
| 英文 / 全称 | AWS Cost Anomaly Detection |
| 中文 | AWS 成本异常检测 |
| 日文 | AWS コスト異常検知 |
| 复习优先级 | 复习优先级 ⭐⭐⭐ |
| 易混淆 | AWS Budgets / Cost Explorer / CloudWatch |

## 一句话理解

用机器学习学习正常支出模式，发现明显偏离并给出成本影响和主要维度。

## 核心整理

Cost Monitor 定义范围，模型产生 Anomaly，Alert Subscription 按阈值通知，再由人员调查处理。

## 学习重点

- Monitor 可按服务、成员账户、Tag 或 Cost Category 划分。
- Individual Alert 用 SNS，Daily/Weekly 汇总用邮件。
- 成本数据处理可能延迟约 24 小时。
- 结合 Cost Explorer、CloudWatch、CloudTrail 和变更记录定位原因。

## 常见误区

- 它不是账单硬上限，也不会自动停止所有资源。
- Budgets 看预设阈值，Explorer 查费用，Anomaly Detection 找偏离。

## 重点记忆

**Budgets 看预算，Explorer 查费用，Anomaly Detection 找异常偏离。**

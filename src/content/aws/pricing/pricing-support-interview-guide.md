---
title: "AWS Pricing & Support 面试速查"
fullName: "AWS Pricing and Support Interview Guide"
description: "分清账单、预算、成本分析、价格估算、优化建议与支持计划。"
service: "AWS Pricing"
category: pricing
kind: topic
lang: zh
topicKey: "AWS Pricing and Support Interview Guide"
frequency: "面试高频"
date: 2026-09-29
updated: 2026-09-29
tags: ["pricing", "interview", "billing", "support"]
notionId: 3b2964dc-ce4a-8137-8374-c4dfd5457a3c
notionUrl: https://app.notion.com/p/3b2964dcce4a81378374c4dfd5457a3c
notionUpdated: "2026-09-27T02:41:12.754Z"
---

## 工具分工

| 需求 | 工具 |
| --- | --- |
| 当前账单、发票与付款 | Billing and Cost Management |
| 阈值、预测、使用量与 RI / SP 覆盖告警 | AWS Budgets |
| 历史成本、分组、筛选与趋势 | Cost Explorer |
| 架构上线前的价格估算 | Pricing Calculator |
| 细粒度用量与成本明细 | Cost and Usage Report |
| 闲置与 Rightsizing 建议 | Compute Optimizer / Trusted Advisor |
| 技术案例与响应级别 | AWS Support Plan |

## 高频边界

- Budget 不会默认自动停止资源；它主要产生 Alert，动作需显式配置。
- Cost Explorer 分析已经发生或预测的成本；Pricing Calculator 估算计划中的架构。
- Savings Plans 与 RI 主要提供折扣，不保证特定 AZ 容量。
- Support Plan 的响应时间取决于严重级别和计划，不等于自动修复系统。
- Zero Spend Budget 适合发现 Free Tier 外的第一笔意外费用。
- Cost Allocation Tag 需要激活后才能用于成本归属分析。

## 回答结构

成本归属 → 可见性 → 预算 Guardrail → 优化建议 → 购买承诺 → 支持与事件响应。

## 重点记忆

**账单回答“花了多少”，Cost Explorer 回答“花在哪里”，Budget 回答“何时提醒”，Calculator 回答“计划要花多少”。**

---
title: "成本优化"
fullName: "Cost Optimization"
description: "在满足可靠性、安全和性能目标的前提下，持续匹配规格、容量与计费方式。"
service: "Architecture"
category: architecture
kind: topic
lang: zh
topicKey: "成本优化"
frequency: "考试频率 ★★★★★"
date: 2026-07-30
updated: 2026-07-30
tags: ["Architecture","Cost Optimization","FinOps"]
notionId: 3a6964dc-ce4a-8166-bb96-e568552dd8ce
notionUrl: https://app.notion.com/p/3a6964dcce4a8166bb96e568552dd8ce
notionUpdated: "2026-07-30T01:08:06.892Z"
---

## 一句话理解

> 成本优化不是一次性削减预算，而是持续衡量、选择、监控和改进。

## 四类核心动作

1. Right Sizing：根据指标选择合适的计算、存储和数据库规格。
2. Match Supply to Demand：使用 Auto Scaling、Serverless 和计划扩缩减少空闲容量。
3. Choose Pricing Model：根据稳定性和可中断性选择计费方式。
4. Measure and Govern：使用标签、预算、告警和成本分配持续治理。

## EC2 计费选型

- On-Demand：短期、不可预测或试验负载。
- Savings Plans / Reserved Instances：较稳定、可承诺的长期使用。
- Spot：可中断、容错、批处理和可重试任务。
- Dedicated Host：许可证、合规或物理主机控制。

## 考试重点

- 先判断可中断性、负载稳定度、期限和许可证要求，再选计费方式。
- Auto Scaling、S3 Lifecycle、Serverless 和合理数据传输路径都能影响总成本。
- 不能为省钱破坏 RTO、RPO、安全或性能目标。
- 计算单价最低，不一定代表整个架构的总成本最低。

## 常见误区

- Serverless 不一定最便宜，Spot 也不适合无法中断的任务。
- 购买了承诺折扣，不代表已经完成成本优化。
- 只看计算费用会漏掉存储、日志、NAT Gateway 和数据传输。

## 重点记忆

> **先看业务目标，再匹配容量、规格与计费模型，并持续监控。**

## 关联服务

Cost Explorer、AWS Budgets、Compute Optimizer、Trusted Advisor、Auto Scaling、Savings Plans、S3 Lifecycle。

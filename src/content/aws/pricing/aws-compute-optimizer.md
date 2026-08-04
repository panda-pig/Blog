---
title: "AWS Compute Optimizer"
fullName: "AWS Compute Optimizer"
description: "根据历史利用率和性能数据，为支持的计算资源提供 Right Sizing 与成本优化建议。"
service: "AWS Compute Optimizer"
category: pricing
kind: service
lang: zh
topicKey: "AWS Compute Optimizer"
frequency: "考试频率 ⭐⭐⭐⭐"
date: 2026-08-04
updated: 2026-08-04
tags: ["pricing", "AWS Compute Optimizer", "AWS"]
notionId: 3b2964dc-ce4a-8102-b38b-f75aa50e29bf
notionUrl: https://app.notion.com/p/3b2964dcce4a8102b38bf75aa50e29bf
notionUpdated: "2026-08-04T02:10:34.500Z"
---

## 基本信息

| 字段 | 内容 |
| --- | --- |
| 英文 | AWS Compute Optimizer |
| 中文 | 计算资源规格优化建议 |
| 日文 | AWS Compute Optimizer（コンピューティングリソースの適正化推奨） |
| 考试频率 | ⭐⭐⭐⭐ |
| 易混淆 | AWS Trusted Advisor / AWS Cost Explorer |

## 一句话理解

根据 CloudWatch 等历史利用率和配置数据，为支持的资源生成候选规格、性能风险与预计节省。

## 核心作用

- 识别过度或不足配置，并为 EC2、Auto Scaling、EBS、Lambda、ECS/Fargate、RDS 等支持资源给出建议。
- 建议不是自动变更；实施前要确认观察周期、季节峰值、内存指标、许可、可用性和性能风险。
- Compute Optimizer 建议规格；Auto Scaling 调整容量数量；Cost Explorer 分析费用；Trusted Advisor 跨多个最佳实践类别检查。

## 重点记忆

**利用率数据 → 规格候选、风险与预计节省 → Compute Optimizer。**

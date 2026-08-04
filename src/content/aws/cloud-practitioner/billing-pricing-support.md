---
title: "Billing, Pricing & Support"
fullName: "Billing, Pricing & Support"
description: "Cloud Practitioner 必考的定价原则、成本工具、合并计费、支持计划与采购生态。"
service: "Cloud Practitioner"
category: cloud-practitioner
kind: topic
lang: zh
topicKey: "Billing, Pricing & Support"
frequency: "阶段性总结"
date: 2026-08-04
updated: 2026-08-04
tags: ["cloud-practitioner", "billing", "pricing", "support", "AWS"]
notionId: 3a6964dc-ce4a-8132-b31c-c457a5752be7
notionUrl: https://app.notion.com/p/3a6964dcce4a8132b31cc457a5752be7
notionUpdated: "2026-08-04T02:14:22.144Z"
---

## 必须掌握

- 三个原则：Pay as you go、Save when you commit、Pay less by using more。
- 三类主要成本驱动：计算、存储、Data Transfer Out。
- Billing、Budgets、Cost Explorer、Pricing Calculator 的职责区别。
- Organizations 合并计费、Cost Allocation Tags、Compute Optimizer 和 Trusted Advisor。
- 支持计划、AWS Health、TAM、Marketplace 与 APN。

## 成本工具速查

| 需求 | 首先想到 | 关键区别 |
| --- | --- | --- |
| 当前账单和付款 | Billing Dashboard | 账单事实，不做部署前估算 |
| 实际或预测超预算 | AWS Budgets | 阈值提醒，不默认停止资源 |
| 历史费用与趋势 | Cost Explorer | 筛选、分组和预测 |
| 部署前方案费用 | Pricing Calculator | 基于假设，不等于真实账单 |
| 多账户统一结算 | Organizations | 账户与资源仍隔离 |
| 资源规格建议 | Compute Optimizer | 基于历史利用率 Right Sizing |

## 支持与采购

- Basic 无技术案例响应 SLA；Business Support+ 面向生产；Enterprise 强调指定 TAM；Unified Operations 面向任务关键运营。
- 旧题可能使用 Developer、Business、Enterprise On-Ramp，按题目版本判断。
- Marketplace 买第三方产品；APN 找咨询、迁移和实施伙伴。

## 高频陷阱

- 支持响应时间是首次响应目标，不是问题解决保证。
- VPC Endpoint 不一定免费：Gateway Endpoint 与 Interface Endpoint 的收费方式不同。
- Pay as you go 不代表天然便宜，闲置、过大规格、日志、快照和数据传输仍会收费。

## 考前一分钟

**预算告警看 Budgets，历史分析看 Cost Explorer，部署前估算看 Pricing Calculator，多账户结算看 Organizations；买产品看 Marketplace，找伙伴看 APN。**

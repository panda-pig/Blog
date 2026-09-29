---
title: "AWS Pricing & Support 面接速習"
fullName: "AWS Pricing and Support Interview Guide"
description: "Billing、Budget、Cost 分析、見積、最適化提案、Support Plan の役割を分けます。"
service: "AWS Pricing"
category: pricing
kind: topic
lang: ja
topicKey: "AWS Pricing and Support Interview Guide"
frequency: "面试高频"
date: 2026-09-29
updated: 2026-09-29
tags: ["pricing", "interview", "billing", "support"]
notionId: 3b2964dc-ce4a-8137-8374-c4dfd5457a3c
notionUrl: https://app.notion.com/p/3b2964dcce4a81378374c4dfd5457a3c
notionUpdated: "2026-09-27T02:41:12.754Z"
---

## Tool の役割

| 要件 | Tool |
| --- | --- |
| 現在の請求、Invoice、支払い | Billing and Cost Management |
| Threshold、Forecast、Usage、RI/SP Coverage Alert | AWS Budgets |
| 過去 Cost、Group、Filter、Trend | Cost Explorer |
| 導入前 Architecture の見積 | Pricing Calculator |
| 詳細な Usage / Cost Record | Cost and Usage Report |
| Idle Resource / Rightsizing 提案 | Compute Optimizer / Trusted Advisor |
| 技術 Case と Response Target | AWS Support Plan |

## 境界

- Budget は既定で Resource を停止せず、Action を明示しなければ Alert が中心です。
- Cost Explorer は発生済み・予測 Cost、Pricing Calculator は計画 Architecture を扱います。
- Savings Plans / RI は主に割引で、特定 AZ Capacity を保証しません。
- Support の Response Target は Severity と Plan に依存し、自動修復ではありません。
- Zero Spend Budget は Free Tier 外の最初の予期しない課金検知に向きます。
- Cost Allocation Tag は有効化後に Cost Attribution で利用できます。

## 回答構造

Cost Ownership → Visibility → Budget Guardrail → Optimization → Purchase Commitment → Support / Incident Response。

## 要点

**Billing は金額、Cost Explorer は内訳、Budget は Alert、Pricing Calculator は計画 Cost を答えます。**

---
title: "Billing・Budgets・Cost Explorer・Pricing Calculator・Support 总对比"
fullName: "Billing, Budgets, Cost Explorer, Pricing Calculator & Support"
description: "集中比较 AWS 账单、预算、成本分析、事前估算、优化建议、采购生态与支持计划。"
service: "AWS"
category: compare
kind: compare
lang: zh
topicKey: "Billing・Budgets・Cost Explorer・Pricing Calculator・Support 总对比"
frequency: "专题对比"
date: 2026-08-04
updated: 2026-08-04
tags: ["compare", "billing", "pricing", "support", "AWS"]
notionId: 3b2964dc-ce4a-81e9-a839-c4c3d534ba92
notionUrl: https://app.notion.com/p/3b2964dcce4a81e9a839c4c3d534ba92
notionUpdated: "2026-08-04T02:15:47.326Z"
---

## 一张表先分清

| 服务 / 概念 | 主要问题 | 时间视角 | 典型动作 |
| --- | --- | --- | --- |
| Billing Dashboard | 当前账单和付款如何？ | 当前账期 | 查看账单、发票和服务费用 |
| AWS Budgets | 是否接近或超过预算？ | 当前 + 预测 | 阈值告警与受控动作 |
| Cost Explorer | 钱花在哪里、趋势如何？ | 历史 + 预测 | 筛选、分组和趋势分析 |
| Pricing Calculator | 新方案预计多少钱？ | 部署前 | 基于架构假设估算 |
| Cost Allocation Tags | 费用属于哪个团队？ | 运行期间 | 按项目、部门和环境分摊 |
| AWS Organizations | 多账户如何统一结算？ | 持续 | 合并计费、OU、SCP |
| Compute Optimizer | 资源规格是否合适？ | 历史利用率 | Right Sizing 建议 |
| Trusted Advisor | 环境有哪些改进项？ | 持续检查 | 成本、安全、性能、容错和配额建议 |
| Support Plans | AWS 能提供什么帮助？ | 事件 + 主动支持 | 案例响应、TAM 与主动指导 |
| AWS Marketplace | 从哪里购买第三方产品？ | 采购与部署 | AMI、SaaS、数据和专业服务 |
| AWS Partner Network | 从哪里找合作伙伴？ | 选型与合作 | 咨询、迁移、实施和托管伙伴 |

## 高频二选一

- 部署前估算月费 → Pricing Calculator；分析过去花费 → Cost Explorer。
- 预测超过金额时通知 → Budgets；直接看本月账单 → Billing Dashboard。
- 规格建议 → Compute Optimizer；跨类别最佳实践检查 → Trusted Advisor。
- 买第三方产品 → Marketplace；找咨询与实施伙伴 → APN。

## Support Plans

当前主线是 Basic、Business Support+、Enterprise Support、Unified Operations；旧题可能仍使用 Developer、Business、Enterprise On-Ramp。Enterprise 强调指定 TAM。任何响应时间都是首次响应目标，而不是解决保证。

## 高频陷阱

- Budgets 不会默认停止所有超预算资源；Pricing Calculator 不读取真实账单。
- Cost Explorer 不是实时性能监控；Consolidated Billing 不合并资源或身份。
- Basic 没有技术支持案例响应 SLA。

## 重点记忆

**看账单 Billing，设预算 Budgets，查趋势 Explorer，事前估价 Calculator；买产品 Marketplace，找伙伴 APN。**

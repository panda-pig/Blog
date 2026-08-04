---
title: "定价、账单与支持概览"
fullName: "Pricing, Billing & Support Overview"
description: "从定价原则、成本驱动、管理工具到支持计划，建立完整的 AWS 成本治理框架。"
service: "AWS"
category: pricing
kind: topic
lang: zh
topicKey: "定价、账单与支持概览"
frequency: "阶段性总结"
date: 2026-08-04
updated: 2026-08-04
tags: ["pricing", "billing", "support", "AWS"]
notionId: 3b2964dc-ce4a-81fb-8521-da039e182107
notionUrl: https://app.notion.com/p/3b2964dcce4a81fb8521da039e182107
notionUpdated: "2026-08-04T02:10:34.250Z"
---

## 三个定价原则

1. **Pay as you go**：按实际用量付费，减少前期采购和容量猜测。
2. **Save when you commit**：稳定用量通过 Savings Plans、Reserved Instances 等承诺换取折扣。
3. **Pay less by using more**：部分服务按阶梯或规模定价，使用量越大单位价格可能越低。

## 主要成本驱动

| 来源 | 常见计费维度 | 判断重点 |
| --- | --- | --- |
| 计算 | 规格、运行时长、调用量、CPU/内存 | 闲置、Right Sizing、承诺或中断能力 |
| 存储 | 容量、类别、请求、检索、备份 | 访问频率、恢复速度、最短存储期 |
| 数据传输 | 跨 AZ、跨 Region、Internet 出站、网关路径 | 流向、路径和具体服务定价 |

## 成本工具分工

- **Billing** 看当前账单、发票和付款；**Budgets** 对实际或预测值设阈值告警。
- **Cost Explorer** 分析历史成本、趋势和预测；**Pricing Calculator** 在部署前估算。
- **Organizations** 负责多账户合并计费；**Cost Allocation Tags** 负责项目、部门和环境归属。
- **Compute Optimizer** 给出规格建议；**Trusted Advisor** 做更广的最佳实践检查。

## 持续优化框架

先用 Billing 与 Cost Explorer 找到成本驱动，再用账户和标签归属费用；结合 Right Sizing、计费承诺、Auto Scaling、存储生命周期和数据路径进行优化，最后用 Budgets、告警和周期审查防止反弹。

## 支持与采购

- 当前主线为 Basic、Business Support+、Enterprise Support 和 Unified Operations。
- 响应时间是首次响应目标，不是保证解决时间；Enterprise 的关键识别词是指定 TAM。
- Marketplace 用于购买第三方产品；APN 用于寻找咨询、迁移、实施和托管伙伴。

## 重点记忆

**先估算，再部署；看账单、设预算、查趋势、持续优化；支持计划按业务关键程度选择。**

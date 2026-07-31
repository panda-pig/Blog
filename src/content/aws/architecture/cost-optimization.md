---
title: "成本优化"
fullName: "Cost Optimization"
description: "在满足可靠性、安全和性能目标的前提下，持续匹配规格、容量与计费方式。"
service: "Architecture"
category: architecture
kind: topic
lang: zh
topicKey: "成本优化"
frequency: "考试频率 ⭐⭐⭐⭐⭐"
date: 2026-07-30
updated: 2026-07-30
tags: ["Architecture","Cost Optimization","FinOps"]
notionId: 3a6964dc-ce4a-8166-bb96-e568552dd8ce
notionUrl: https://app.notion.com/p/3a6964dcce4a8166bb96e568552dd8ce
notionUpdated: "2026-07-30T01:08:06.892Z"
---

## 基本信息

| 字段 | 内容 |
| --- | --- |
| 英文 | Cost Optimization |
| 全称 | Cost Optimization |
| 中文释义 | 成本优化 |
| 日文释义 | コスト最適化 |
| 考试频率 | ⭐⭐⭐⭐⭐ |
| 易混淆 | 性能优化 |

## 一句话理解

通过合适计费方式、资源规格、存储层级和持续治理降低成本。

## 核心作用

在满足业务、可靠性、安全与性能目标的前提下，以最低合理成本交付业务价值。成本优化不是一次性砍预算，而是持续衡量、选择、监控和改进。

## 从本地采购到云计费

- 传统环境常需提前购买硬件，形成较大的前期固定投入。
- 云中可按需获取资源，并按实际使用量付费，把部分固定费用转为可变费用。
- “按使用量付费”不代表天然便宜；闲置资源、错误规格、跨区传输和无治理的自动扩展都会增加成本。

## 四类核心动作

1. **Right Sizing**：根据指标选择合适实例、存储和数据库规格。
2. **Match Supply to Demand**：通过 Auto Scaling、Serverless 和计划扩缩让容量贴合需求。
3. **Choose Pricing Model**：按负载稳定性和可中断性选择 On-Demand、Savings Plans、Reserved Instances 或 Spot。
4. **Measure and Govern**：用标签、预算、告警、成本分配与定期审查持续治理。

## EC2 计费选型

| 选项 | 适合 | 关键权衡 |
| --- | --- | --- |
| On-Demand | 短期、不可预测、试验 | 无长期承诺，灵活 |
| Savings Plans | 稳定的计算使用金额 | 以 1 年或 3 年小时消费承诺换折扣 |
| Reserved Instances | 稳定且较明确的 EC2 需求 | 折扣与灵活性取决于具体 RI 类型和属性 |
| Spot | 可中断、容错、批处理 | 成本低，但容量可能被回收 |
| Dedicated Host | 许可证、合规、物理主机控制 | 控制更高，通常成本也更高 |

## 工作中的应用场景

- 开发环境夜间停止，临时测试完成后删除资源。
- 稳定基础负载使用承诺折扣，突发部分使用 On-Demand 或 Spot。
- 批处理和可重试 Worker 使用 Spot，并设计中断恢复。
- 通过 Auto Scaling 回收低峰期容量。
- 清理闲置 EC2、未挂载 EBS、旧 Snapshot 和无效负载均衡器。

## 工作原理

成本数据与业务指标 → 找出主要成本驱动 → 调整架构、规格、使用时段或计费模型 → 验证性能与可靠性 → 持续复盘。

## Cloud Practitioner 考点

- Pay-as-you-go、规模经济、无需猜测容量。
- On-Demand、Savings Plans、Reserved Instances、Spot 的基本适用场景。
- 云成本是持续责任，不是 AWS 自动替客户优化。

## SAA-C03 考点

- 先判断可中断性、负载稳定度、期限和许可证要求，再选计费方式。
- 结合 Auto Scaling、Serverless、存储生命周期与数据传输路径优化。
- 成本最低的单项服务不一定产生最低的总体架构成本。
- 不能为省钱破坏 RTO、RPO、安全和性能要求。

## 常见误区

- “Serverless 一定最便宜”不成立，必须按调用量、时长和周边服务计算。
- Spot 不适合无法中断且没有容错设计的任务。
- 买了承诺折扣不等于完成成本优化，过度承诺同样会浪费。
- 只看计算单价而忽略存储、日志、NAT Gateway 和数据传输会低估总成本。

## 易混淆服务

Savings Plans vs Reserved Instances；Spot vs On-Demand；成本优化 vs 单纯削减资源。

## 面试高频问题

- 如何在不降低可靠性的前提下降低 AWS 账单？
- 基础负载与突发负载如何组合计费方式？
- 为什么某个自动扩展系统仍然很贵？
- 如何验证一次 Right Sizing 不会伤害性能？

## 重点记忆

先看业务目标，再看使用模式；匹配容量、规格与计费模型，并持续监控。

## 关联服务

AWS Cost Explorer、AWS Budgets、AWS Compute Optimizer、Trusted Advisor、EC2 Auto Scaling、Savings Plans、Spot Instances、S3 Lifecycle。

## 官方参考

- [AWS Well-Architected：Cost Optimization](https://docs.aws.amazon.com/wellarchitected/latest/framework/cost-optimization.html)
- [选择合适的计费模型](https://docs.aws.amazon.com/wellarchitected/latest/cost-optimization-pillar/select-the-best-pricing-model.html)

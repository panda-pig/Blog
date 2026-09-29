---
title: "AWS Architecture 面试速查"
fullName: "AWS Architecture Interview Guide"
description: "用需求、约束、故障域、状态、扩展和恢复组织 AWS 架构面试回答。"
service: "AWS Architecture"
category: architecture
kind: topic
lang: zh
topicKey: "AWS Architecture Interview Guide"
frequency: "面试高频"
date: 2026-09-29
updated: 2026-09-29
tags: ["architecture", "interview", "well-architected", "SAA"]
notionId: 3a6964dc-ce4a-818b-9627-ecb35747681e
notionUrl: https://app.notion.com/p/3a6964dcce4a818b9627ecb35747681e
notionUpdated: "2026-09-28T08:49:43.829Z"
---

## 回答框架

先澄清 **功能需求、SLO、RTO/RPO、流量、数据模型、合规、预算与团队能力**，再画同步主链路和异步支线，并说明失败路径。

## 高频主题

- High Availability：Multi-AZ、Health Check、自动替换、无状态节点与冗余入口。
- Scalability：Vertical / Horizontal；扩展不等于 Elasticity，后者还要自动收缩。
- Decoupling：Queue 缓冲背压，Event Bus 路由事件，Workflow 编排步骤。
- Event-driven：至少一次投递意味着 Consumer 需要幂等、Retry、DLQ 与可观察性。
- Serverless：减少服务器运维，不免除配额、冷启动、重试、状态与成本设计。
- DR：Backup & Restore、Pilot Light、Warm Standby、Multi-site Active/Active 按 RTO/RPO 与成本选择。
- Three-tier：入口、应用、数据分层，并分别设计扩展、安全和故障域。

## 面试答题顺序

1. 明确约束与最重要的质量属性。
2. 给出主方案和数据流。
3. 说明扩缩、健康检查、状态位置与故障处理。
4. 说明安全、日志、指标、追踪、Backup 和 DR。
5. 点出成本、复杂度与替代方案的权衡。

## 重点记忆

**好的架构回答不只画正常路径，还要说明失败时发生什么、如何观察、如何恢复以及为什么值得这个成本。**

---
title: "Multi-AZ vs Multi-Region"
fullName: "Multi-AZ vs Multi-Region"
description: "Multi-AZ 不等于“任何服务都会自动切换”。是否自动 Failover、如何复制数据，要看具体服务和架构配置。"
service: "AWS Compare"
category: compare
kind: compare
lang: zh
topicKey: "Multi-AZ vs Multi-Region"
frequency: "高频对比"
date: 2026-07-30
updated: 2026-07-30
tags: ["compare","Multi-AZ vs Multi-Region","AWS"]
notionId: 3a6964dc-ce4a-8107-b0f1-e6c4850f9cb9
notionUrl: https://app.notion.com/p/3a6964dcce4a8107b0f1e6c4850f9cb9
notionUpdated: "2026-07-23T08:23:51.914Z"
---

## 一句话结论

- Multi-AZ：防御单个 AZ 故障，重点是 Region 内高可用。
- Multi-Region：防御 Region 级灾害，或满足全球低延迟、合规和更高级灾备需求。

## 核心差异

| 维度 | Multi-AZ | Multi-Region |
| --- | --- | --- |
| 范围 | 同一个 Region 内多个 AZ | 两个或更多 Region |
| 主要目标 | 高可用、AZ 故障恢复 | 区域级灾备、全球部署 |
| 延迟 | AZ 间通常低延迟 | Region 间延迟更高 |
| 数据复制 | 服务相关，常见同步或低延迟复制 | 常见异步复制 |
| 成本与复杂度 | 较低 | 更高 |
| 典型服务 | RDS Multi-AZ、Multi-AZ ASG | Route 53、跨 Region 复制、DR 架构 |

## 重要修正

Multi-AZ 不等于“任何服务都会自动切换”。是否自动 Failover、如何复制数据，要看具体服务和架构配置。
Multi-Region 也不一定自动切换。需要设计数据复制、健康检查、流量路由、RTO/RPO 和恢复流程。

## 题目关键词

- “AZ failure、High Availability、最少停机” → Multi-AZ。
- “Region failure、global users、data residency、disaster recovery” → Multi-Region。

## 重点记忆

Multi-AZ 防可用区级故障；Multi-Region 防区域级故障。

---
title: "EC2 购买选项：折扣、容量保证与隔离"
fullName: "EC2 Purchasing Options Capacity and Isolation"
description: "把实例性能、价格承诺、中断风险、容量保证和硬件隔离拆开选择。"
service: "AWS Compare"
category: compare
kind: compare
lang: zh
topicKey: "EC2 Purchasing Options Capacity and Isolation"
frequency: "高频对比"
date: 2026-09-29
updated: 2026-09-29
tags: ["compare", "EC2", "pricing", "capacity"]
notionId: 3e8964dc-ce4a-818e-a142-d10683591ae3
notionUrl: https://app.notion.com/p/3e8964dcce4a818ea142d10683591ae3
notionUpdated: "2026-09-27T02:35:48.957Z"
---

## 先分开五个问题

Instance Type 决定“什么机器”；Purchasing Option 决定“怎么买、能否中断”；Capacity Reservation 决定“特定 AZ 有没有机器”；Tenancy 决定“是否独占硬件”。

| 选项 | 主要交换 | 中断 | 容量保证 | 适合 |
| --- | --- | --- | --- | --- |
| On-Demand | 无长期承诺 | 否 | 无 | 短期、不可预测、不能中断 |
| Standard / Convertible RI | 1 或 3 年承诺换折扣 | 否 | Regional 无；Zonal 有 | 长期稳定 EC2 |
| Savings Plans | 每小时美元承诺换灵活折扣 | 否 | 无 | 长期计算使用 |
| Spot | 低价换回收风险 | 是 | 无 | 可重试、无状态、Batch |
| Dedicated Instance | 与其他客户物理隔离 | 否 | 非整台 Host 控制 | 合规隔离 |
| Dedicated Host | 整台物理主机、Socket / Core 可见 | 否 | Host Capacity | BYOL、主机级控制 |
| Capacity Reservation | 为特定 AZ / 配置保留容量 | 否 | 有 | 必须随时能启动 |

## 高频边界

- Savings Plans 与 Regional RI 主要解决价格，不保证特定 AZ 容量。
- Capacity Reservation 本身不提供长期折扣，未使用容量通常仍收费。
- Zonal RI 同时提供匹配折扣与对应 AZ 的容量利益。
- Spot 中断通知是 Best Effort；状态应持续 Checkpoint 到外部存储。
- Spot Capacity Pool 由 Instance Type、AZ、Platform 等形成；多样化可降低单一池风险。
- 新 Spot Workload 通常优先 price-capacity-optimized，而不是只追最低价。

## 选择顺序

先问能否中断，再看使用期限与稳定性，然后分别判断是否需要硬件隔离或特定 AZ 的容量保证。

## 重点记忆

**折扣、容量、隔离是三条独立轴；不要把 Savings Plans、RI 与 Capacity Reservation 当成同一件事。**

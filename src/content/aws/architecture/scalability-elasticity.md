---
title: "可扩展性与弹性"
fullName: "Scalability & Elasticity"
description: "区分系统承载增长的能力，与资源随实际需求自动增减的能力。"
service: "Architecture"
category: architecture
kind: topic
lang: zh
topicKey: "可扩展性与弹性"
frequency: "考试频率 ⭐⭐⭐⭐⭐"
date: 2026-07-30
updated: 2026-07-30
tags: ["Architecture","Scalability","Elasticity"]
notionId: 3a6964dc-ce4a-818b-a872-e1eb3d60acd5
notionUrl: https://app.notion.com/p/3a6964dcce4a818ba872e1eb3d60acd5
notionUpdated: "2026-07-30T01:08:00.877Z"
---

## 基本信息

| 字段 | 内容 |
| --- | --- |
| 英文 | Scalability & Elasticity |
| 全称 | Scalability & Elasticity |
| 中文释义 | 可扩展性与弹性 |
| 日文释义 | スケーラビリティと弾力性 |
| 考试频率 | ⭐⭐⭐⭐⭐ |
| 易混淆 | High Availability |

## 一句话理解

既能承载增长，又能随需求自动增减资源。

## 核心作用

- **Scalability（可扩展性）**：系统能够承载业务增长。
- **Elasticity（弹性）**：资源能随实际需求增加或减少，尽量让容量贴合负载。
- 两者经常一起出现，但不是同义词：系统可以“能扩展”，却不一定会“自动回缩”。

## 横向与纵向扩展

| 方式 | 含义 | 特点 |
| --- | --- | --- |
| Scale Out / In | 增加 / 减少实例数量 | 适合分布式、无状态应用，是云中常见做法 |
| Scale Up / Down | 提高 / 降低单台实例规格 | 实现较简单，但存在规格上限并可能需要停机 |

## Auto Scaling Group 的容量边界

- Minimum Capacity：无论负载多低都至少保留的实例数。
- Desired Capacity：当前希望维持的实例数，必须位于 Min 与 Max 之间。
- Maximum Capacity：允许扩展到的实例上限；到达上限后不会继续 Scale Out。

## 常见扩缩策略

- **Target Tracking**：把 CPU、请求数等指标维持在目标值附近，系统自动调整容量。
- **Step Scaling**：CloudWatch 告警跨越不同阈值时，按不同幅度扩缩。
- **Scheduled Scaling**：根据可预测的时间规律提前改变容量边界或目标容量。
- **Manual Scaling**：人工修改 Desired Capacity，适合临时或简单场景。

## 工作中的应用场景

- 电商促销时自动增加 Web 实例，流量回落后自动减少。
- 工作日白天提高最低容量，夜间降低容量。
- 队列积压时增加 Worker，积压消退后回缩。
- 多 AZ ASG 配合 ELB，在扩缩的同时维持健康流量入口。

## 工作原理

监控指标或时间计划 → Scaling Policy 判断是否需要调整 → ASG 修改 Desired Capacity → 按 Launch Template 启动或终止实例 → ELB 只向健康目标分流。

## Cloud Practitioner 考点

- 弹性可减少容量猜测和空闲资源。
- Auto Scaling 负责容量，ELB 负责流量分配。
- 横向扩展通常比只升级单机更符合云设计。

## SAA-C03 考点

- 正确判断 Min / Desired / Max。
- 根据可预测性选择 Target Tracking、Step 或 Scheduled Scaling。
- 使用多 AZ、ELB Health Check、Launch Template 和 CloudWatch。
- Scale In 前要考虑连接排空、状态、冷却 / 预热时间和数据安全。

## 常见误区

- 可扩展性不等于高可用；高可用还需要跨故障域与故障切换。
- Auto Scaling 不会修复应用代码的性能瓶颈。
- 把 Max 设置得很大不代表系统一定能安全扩到那么大，下游数据库、配额和成本仍可能成为限制。
- 纵向扩展不是“自动弹性”的同义词。

## 易混淆服务

- Auto Scaling vs ELB：前者管容量，后者管流量。
- Scalability vs Elasticity：前者强调承载增长，后者强调随需求动态增减。
- Elasticity vs High Availability：前者解决容量变化，后者解决故障持续服务。

## 面试高频问题

- 为什么无状态应用更适合横向扩展？
- 如何为突发流量选择扩缩指标？
- ASG 达到最大容量但延迟仍上升时如何排查？
- Scale In 时如何保护长连接、任务和本地状态？

## 重点记忆

Scalability = 能长大；Elasticity = 会随需求伸缩；ASG = Min ≤ Desired ≤ Max。

## 关联服务

Amazon EC2 Auto Scaling、Elastic Load Balancing、CloudWatch、Launch Template、SQS、ECS Service Auto Scaling。

## 官方参考

- [EC2 Auto Scaling 容量边界](https://docs.aws.amazon.com/autoscaling/ec2/userguide/asg-capacity-limits.html)
- [Target Tracking Scaling](https://docs.aws.amazon.com/autoscaling/ec2/userguide/as-scaling-target-tracking.html)

---
title: "可扩展性与弹性"
fullName: "Scalability & Elasticity"
description: "区分系统承载增长的能力，与资源随实际需求自动增减的能力。"
service: "Architecture"
category: architecture
kind: topic
lang: zh
topicKey: "可扩展性与弹性"
frequency: "考试频率 ★★★★★"
date: 2026-07-30
updated: 2026-07-30
tags: ["Architecture","Scalability","Elasticity"]
notionId: 3a6964dc-ce4a-818b-a872-e1eb3d60acd5
notionUrl: https://app.notion.com/p/3a6964dcce4a818ba872e1eb3d60acd5
notionUpdated: "2026-07-30T01:08:00.877Z"
---

## 一句话理解

> Scalability 是“能长大”，Elasticity 是“会随需求伸缩”。

## 核心作用

- Scale Out / In 通过增加或减少实例数量扩缩，适合无状态和分布式应用。
- Scale Up / Down 调整单台实例规格，实现简单，但存在规格上限并可能需要停机。
- ASG 使用 Min、Desired、Max 控制容量边界，并根据指标或计划自动调整。

## 考试重点

- Auto Scaling 管容量，ELB 管流量；两者经常组合但职责不同。
- Target Tracking 适合围绕目标指标自动调节；Scheduled Scaling 适合可预测高峰。
- 可扩展性不等于高可用，高可用还需要跨故障域和故障切换。
- 扩展设计要同时检查数据库、服务配额、成本和下游吞吐。

## 常见误区

- 系统能够扩展，不代表它会在低峰时自动回缩。
- 纵向扩展不是自动弹性的同义词。
- Auto Scaling 无法修复应用代码或数据库查询本身的性能瓶颈。

## 重点记忆

> **Scalability = 承载增长；Elasticity = 容量贴合需求；ASG = Min ≤ Desired ≤ Max。**

## 关联服务

EC2 Auto Scaling、Elastic Load Balancing、CloudWatch、SQS、ECS Service Auto Scaling。

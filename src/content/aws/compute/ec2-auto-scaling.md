---
title: "Amazon EC2 Auto Scaling"
fullName: "Amazon EC2 Auto Scaling"
description: "根据负载自动增加、减少或替换 EC2 实例，让容量在边界内跟随需求变化。"
service: "Auto Scaling"
category: compute
kind: service
lang: zh
frequency: "考试频率 ★★★★★"
date: 2026-07-30
updated: 2026-07-30
tags: ["Compute","Auto Scaling","SAA-C03"]
notionId: 3a6964dc-ce4a-811a-bc62-e247c6def362
notionUrl: https://app.notion.com/p/3a6964dcce4a811abc62e247c6def362
notionUpdated: "2026-07-30T01:09:11.112Z"
---

## 一句话理解

> Auto Scaling Group（ASG）维护 EC2 实例数量与健康状态；ELB 管流量，ASG 管容量。

## 核心作用

- Minimum、Desired、Maximum 定义容量下限、当前目标和扩展上限。
- Launch Template 定义实例配置，ASG 可跨多个 AZ 启动并替换不健康实例。
- CloudWatch 指标、告警或时间计划触发 Scaling Policy，策略再调整 Desired Capacity。

## 考试重点

- Target Tracking 让指标维持在目标附近；Step Scaling 按告警区间分级扩缩。
- Scheduled Scaling 适合可预测高峰；Manual Scaling 是直接调整目标容量。
- 常见高可用组合是 ALB + Multi-AZ ASG + EC2。
- Scale In 前应考虑连接排空、预热时间、本地状态和下游容量。

## 常见误区

- Auto Scaling 不负责请求分发，ELB 不负责决定实例数量。
- Desired Capacity 会被策略动态修改，不是永久固定值。
- 把 Maximum 设置得很大，不代表数据库、配额与预算也能承受同样规模。

## 重点记忆

> **Min ≤ Desired ≤ Max；Launch Template 定义实例，Scaling Policy 调整容量。**

## 关联服务

Elastic Load Balancing、CloudWatch、Launch Template、EC2、SQS。

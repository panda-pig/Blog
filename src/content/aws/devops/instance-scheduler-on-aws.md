---
title: "Instance Scheduler on AWS"
fullName: "Instance Scheduler on AWS"
description: "通过 CloudFormation 部署，按时区、时间段和标签集中启停 EC2、RDS 等受支持资源。"
service: "Instance Scheduler on AWS"
category: devops
kind: service
lang: zh
topicKey: "Instance Scheduler on AWS"
frequency: "复习优先级 ⭐⭐"
date: 2026-10-08
updated: 2026-10-08
tags: ["devops","Instance Scheduler on AWS","AWS"]
notionId: 3f3964dc-ce4a-815f-9802-f55a5539f7fe
notionUrl: https://app.notion.com/p/3f3964dcce4a815f9802f55a5539f7fe
notionUpdated: "2026-10-08T02:55:13.905Z"
---
## 基本信息

| 字段 | 内容 |
| --- | --- |
| 英文 / 全称 | Instance Scheduler on AWS |
| 中文 | 实例定时启停解决方案 |
| 日文 | インスタンスのスケジュール起動・停止ソリューション |
| 复习优先级 | 复习优先级 ⭐⭐ |
| 易混淆 | EventBridge Scheduler / Auto Scaling / CloudFormation |

## 一句话理解

通过 CloudFormation 部署，按时区、时间段和标签集中启停 EC2、RDS 等受支持资源。

## 核心整理

DynamoDB 保存计划，Lambda 执行启停，标签选择目标；跨账户和跨 Region 仍需配置授权与范围。

## 学习重点

- 适合开发测试环境的办公时间计划。
- Stop 不等于删除，存储、快照和解决方案自身仍可能计费。
- RDS 停止最多 7 天后会自动启动。
- ASG 应通过容量或计划机制管理，不能只停单台实例。

## 常见误区

- 它是 AWS Solution，不是同名通用托管调度服务。
- 计划停机可能影响依赖、可用性和 RTO。

## 重点记忆

**CloudFormation 部署，DynamoDB 存计划，Lambda 执行，Tag 选目标。**

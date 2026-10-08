---
title: "Monitoring 面试"
fullName: "AWS Monitoring and Governance Interview Guide"
description: "用“目标、数据来源、服务分工、权限留存、告警与自动化”回答监控与治理题。"
service: "AWS Monitoring and Governance Interview Guide"
category: monitoring
kind: topic
lang: zh
topicKey: "AWS Monitoring and Governance Interview Guide"
frequency: "面试专题"
date: 2026-10-08
updated: 2026-10-08
tags: ["monitoring","AWS Monitoring and Governance Interview Guide","AWS"]
notionId: 3a6964dc-ce4a-813e-933c-d8d035aa99a5
notionUrl: https://app.notion.com/p/3a6964dcce4a813e933cd8d035aa99a5
notionUpdated: "2026-10-08T00:13:02.223Z"
---
## 基本信息

| 字段 | 内容 |
| --- | --- |
| 英文 / 全称 | AWS Monitoring and Governance Interview Guide |
| 中文 | AWS 监控与治理面试 |
| 日文 | AWS 監視・ガバナンス面接ガイド |
| 复习优先级 | 面试专题 |
| 易混淆 | CloudWatch / CloudTrail / Config / EventBridge |

## 一句话理解

用“目标、数据来源、服务分工、权限留存、告警与自动化”回答监控与治理题。

## 核心整理

CloudWatch 看运行表现，CloudTrail 看 API 行为，Config 看配置与合规，EventBridge 把事件路由到响应动作。

## 学习重点

- 调查资源删除：CloudTrail 确认身份、时间和 API。
- 持续检查开放 SSH：Config Rule + Automation，CloudTrail 补操作证据。
- Organizations 提供账户、OU 和 SCP；Control Tower 建 Landing Zone 与 Controls。
- Artifact 提供 AWS 合规报告；Audit Manager 收集客户环境证据。

## 常见误区

- SCP 只设权限上限，不直接授予权限。
- 配置事实、操作事实和运行指标来自不同服务。

## 重点记忆

**先说监控目标，再说数据、权限、告警、修复和验证。**

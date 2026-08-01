---
title: "AWS Config"
fullName: "AWS Config"
description: "记录资源配置历史和关系，并用规则持续评估合规性。"
service: "AWS Config"
category: monitoring
kind: service
lang: zh
topicKey: "AWS Config"
frequency: "考试频率 ⭐⭐⭐⭐⭐"
date: 2026-08-01
updated: 2026-08-01
tags: ["monitoring", "AWS Config", "AWS"]
notionId: 3a6964dc-ce4a-811b-92b1-ddea29ac500a
notionUrl: https://app.notion.com/p/3a6964dcce4a811b92b1ddea29ac500a
notionUpdated: "2026-07-31T08:18:15.289Z"
---

## 基本信息

| 字段 | 内容 |
| --- | --- |
| 英文 | AWS Config |
| 全称 | AWS Config |
| 中文 | 资源配置记录与合规评估 |
| 日文 | AWS Config（リソース構成記録・コンプライアンス評価） |
| 考试频率 | ⭐⭐⭐⭐⭐ |
| 易混淆 | AWS CloudTrail / AWS Audit Manager |
## 一句话理解
持续记录受支持资源的配置与关系，并使用规则判断是否符合要求。
## 核心作用
- 记录资源配置项和配置历史。
- 追踪资源之间的关系与变更时间线。
- 使用 AWS Managed Rules 或自定义 Config Rules 评估合规性。
- 可通过 EventBridge、SNS 或 Systems Manager Automation 通知和修复。
## 工作中的应用场景
- 持续检查 S3 Bucket 不得公开。
- 检查 Security Group 是否允许 0.0.0.0/0 访问管理端口。
- 审计资源何时从合规变为不合规，并查看变更前后。
## 工作原理
Configuration Recorder 记录配置项；Delivery Channel 交付快照和历史；Config Rule 按变更触发或定期评估资源，输出 COMPLIANT / NON_COMPLIANT 等结果。
## Cloud Practitioner 考点
- Config = 配置历史 + 规则合规性。
- 题目出现“配置是否符合规则”优先考虑 Config。
## SAA-C03 考点
- 管理规则减少自定义逻辑；需要特殊判断时可使用自定义规则。
- 可汇总多账户、多区域合规状态。
- 自动修复通常借助 Systems Manager Automation；需设计权限和失败处理。
## 常见误区
- Config 不记录全部应用行为，也不等于 CloudTrail。
- NON_COMPLIANT 是评估结果，不等于服务自动修复完成。
- 启用服务后也不代表所有资源和区域已被正确覆盖。
## 易混淆服务
- **Config**：配置状态、历史与规则。
- **CloudTrail**：API 调用和操作者。
- **Audit Manager**：按审计框架组织多来源证据。
## 面试高频问题
- 如何持续保证所有 S3 Bucket 不公开？
- 如何追踪某条 Security Group 规则何时改变？
- Config 自动修复应该如何设计安全边界？
## 重点记忆
**配置变成什么、是否符合规则 → AWS Config。**
## 关联服务
AWS CloudTrail / Amazon EventBridge / Amazon SNS / AWS Systems Manager / AWS Organizations

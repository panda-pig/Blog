---
title: "AWS Trusted Advisor"
fullName: "AWS Trusted Advisor"
description: "针对成本、性能、安全、容错和配额给出 AWS 最佳实践建议。"
service: "AWS Trusted Advisor"
category: monitoring
kind: service
lang: zh
topicKey: "AWS Trusted Advisor"
frequency: "考试频率 ⭐⭐⭐⭐"
date: 2026-08-01
updated: 2026-08-01
tags: ["monitoring", "AWS Trusted Advisor", "AWS"]
notionId: 3a6964dc-ce4a-8137-9131-d20e8b6589b3
notionUrl: https://app.notion.com/p/3a6964dcce4a81379131d20e8b6589b3
notionUpdated: "2026-07-31T08:18:16.390Z"
---

## 基本信息

| 字段 | 内容 |
| --- | --- |
| 英文 | AWS Trusted Advisor |
| 全称 | AWS Trusted Advisor |
| 中文 | AWS 最佳实践检查与优化建议 |
| 日文 | AWS Trusted Advisor（ベストプラクティスに基づく最適化推奨） |
| 考试频率 | ⭐⭐⭐⭐ |
| 易混淆 | AWS Well-Architected Tool / AWS Config / Compute Optimizer |
## 一句话理解
像 AWS 官方体检顾问一样检查环境，并针对成本、性能、安全、容错和服务配额给出建议。
## 核心作用
- 按最佳实践检查环境并显示需要关注的结果。
- 经典考试范围包括 Cost Optimization、Performance、Security、Fault Tolerance、Service Limits。
- 帮助发现空闲资源、危险端口、Root MFA 风险、缺少备份和配额压力。
## 工作中的应用场景
- 查找长期空闲的 EC2、RDS 或未使用的资源。
- 发现 Security Group 对公网开放高风险端口。
- 检查资源是否接近服务配额，并提前申请提高。
## 工作原理
服务运行预定义检查，将结果按严重程度展示并提供整改建议；可用检查的深度和自动化能力取决于支持计划与具体功能。
## Cloud Practitioner 考点
- Trusted Advisor = AWS 最佳实践检查和优化建议。
- 它通常告诉你哪里需要改进，而不是自动替你改完。
## SAA-C03 考点
- 题目同时涉及成本、安全、性能、容错或服务限制建议时优先考虑 Trusted Advisor。
- Service Quotas 管理配额值与申请；Trusted Advisor 可提醒接近配额。
## 常见误区
- 不是自定义企业合规规则引擎；那是 Config 的典型定位。
- 不是漏洞扫描器；Inspector 扫描软件漏洞。
- 建议仍需评估业务影响后执行。
## 易混淆服务
- **Trusted Advisor**：多类别最佳实践建议。
- **Well-Architected Tool**：按框架问题评审工作负载。
- **Config**：自定义或托管规则的持续配置合规。
- **Compute Optimizer**：基于利用率建议资源规格。
## 面试高频问题
- Trusted Advisor 与 Well-Architected Tool 有什么区别？
- 如何把 Trusted Advisor 建议纳入持续优化流程？
## 重点记忆
**成本、性能、安全、容错、配额的官方体检建议 → Trusted Advisor。**
## 关联服务
AWS Support / AWS Config / AWS Well-Architected Tool / AWS Service Quotas / Amazon CloudWatch

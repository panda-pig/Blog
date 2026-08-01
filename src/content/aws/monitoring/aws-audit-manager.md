---
title: "AWS Audit Manager"
fullName: "AWS Audit Manager"
description: "依据审计框架持续收集和整理客户 AWS 环境的审计证据。"
service: "AWS Audit Manager"
category: monitoring
kind: service
lang: zh
topicKey: "AWS Audit Manager"
frequency: "考试频率 ⭐⭐⭐⭐"
date: 2026-08-01
updated: 2026-08-01
tags: ["monitoring", "AWS Audit Manager", "AWS"]
notionId: 3ae964dc-ce4a-81cf-8ffa-dd58eedfe4c2
notionUrl: https://app.notion.com/p/3ae964dcce4a81cf8ffadd58eedfe4c2
notionUpdated: "2026-07-31T08:16:23.036Z"
---

## 基本信息

| 字段 | 内容 |
| --- | --- |
| 英文 | AWS Audit Manager |
| 全称 | AWS Audit Manager |
| 中文 | 审计证据自动收集与评估管理 |
| 日文 | AWS Audit Manager（監査証拠の自動収集・評価支援） |
| 考试频率 | ⭐⭐⭐⭐ |
| 易混淆 | AWS Artifact / AWS Config / AWS CloudTrail |
## 一句话理解
依据审计框架持续收集并整理 AWS 环境证据，减轻人工审计准备工作。
## 核心作用
- 使用预构建或自定义框架组织控制、控制集和证据。
- 自动从 AWS 环境收集与审计控制相关的证据。
- 跟踪评估进度，供审计人员审阅并生成评估报告。
## 工作中的应用场景
- 为 PCI DSS、HIPAA、GDPR 或内部控制审计准备证据。
- 将分散的配置、活动和安全证据集中到一项 Assessment。
- 定期审计多个账户中的控制执行情况。
## 工作原理
Assessment 定义范围并选择预构建或自定义框架；控制映射到 AWS 数据源，服务持续收集证据，团队再审阅结果并生成报告。
## Cloud Practitioner 考点
- 自动收集和整理审计证据 → Audit Manager。
- 它帮助准备审计，不直接颁发合规认证。
## SAA-C03 考点
- 减少手工证据收集、按框架持续准备审计材料 → Audit Manager。
- 可结合 CloudTrail、Config、Security Hub 等来源形成证据。
## 常见误区
- 不会自动保证企业合规，也不替代人工判断、整改和审计机构。
- 不是实时性能监控或漏洞扫描服务。
## 易混淆服务
- **Audit Manager**：按框架收集和组织证据。
- **Artifact**：下载 AWS 合规报告与协议。
- **Config**：配置历史与规则合规。
- **CloudTrail**：API 活动记录。
## 面试高频问题
- Audit Manager 如何降低合规审计的人工成本？
- Audit Manager、Config 与 CloudTrail 如何分工？
## 重点记忆
**审计框架 + 自动证据收集 + Assessment → Audit Manager。**
## 关联服务
AWS Config / AWS CloudTrail / AWS Security Hub / AWS Artifact / AWS Organizations

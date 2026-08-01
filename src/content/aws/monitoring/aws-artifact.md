---
title: "AWS Artifact"
fullName: "AWS Artifact"
description: "按需获取 AWS 合规报告，并查看或管理适用的合规协议。"
service: "AWS Artifact"
category: monitoring
kind: service
lang: zh
topicKey: "AWS Artifact"
frequency: "考试频率 ⭐⭐⭐⭐"
date: 2026-08-01
updated: 2026-08-01
tags: ["monitoring", "AWS Artifact", "AWS"]
notionId: 3ae964dc-ce4a-8113-bd40-da498ab87dd3
notionUrl: https://app.notion.com/p/3ae964dcce4a8113bd40da498ab87dd3
notionUpdated: "2026-07-31T08:16:23.004Z"
---

## 基本信息

| 字段 | 内容 |
| --- | --- |
| 英文 | AWS Artifact |
| 全称 | AWS Artifact |
| 中文 | 合规文档与协议自助服务 |
| 日文 | AWS Artifact（コンプライアンス文書・契約のセルフサービス） |
| 考试频率 | ⭐⭐⭐⭐ |
| 易混淆 | AWS Audit Manager / AWS Config |
## 一句话理解
按需下载 AWS 的合规报告，并查看、接受或管理部分合规协议。
## 核心作用
- **Artifact Reports**：获取 AWS 的第三方审计与合规报告，例如 SOC、ISO、PCI 等文档。
- **Artifact Agreements**：查看、接受和管理适用的 AWS 合规协议。
- 为审计、风险评估和供应商尽职调查提供 AWS 侧证明材料。
## 工作中的应用场景
- 审计人员要求 AWS 的 SOC 或 ISO 报告。
- 法务或合规团队需要审阅协议。
- 企业进行云供应商安全评估时收集 AWS 侧证明。
## 工作原理
用户通过受控权限访问 Artifact Reports 或 Agreements，按需要下载报告、审阅并管理协议；这些材料证明 AWS 侧控制，不会检查客户工作负载。
## Cloud Practitioner 考点
- 需要 AWS 合规报告或协议 → AWS Artifact。
- Artifact 提供文档和协议，不持续监控资源配置。
## SAA-C03 考点
- “下载 SOC/ISO/PCI 报告”“获取 AWS 合规文档”“审阅协议” → Artifact。
- AWS 的报告不能替代客户对工作负载配置、数据和访问控制的责任。
## 常见误区
- Artifact 不扫描资源，也不会自动修复不合规配置。
- 拿到 AWS 合规报告不代表客户应用自动合规。
## 易混淆服务
- **Artifact**：拿 AWS 的合规文档与协议。
- **Audit Manager**：组织客户环境的审计证据。
- **Config**：持续评估资源配置合规性。
## 面试高频问题
- AWS Artifact 在合规审计中解决什么问题？
- 为什么 AWS 合规报告不能证明客户应用自动合规？
## 重点记忆
**要报告和协议找 Artifact；要客户环境的审计证据找 Audit Manager。**
## 关联服务
AWS Audit Manager / AWS Config / AWS CloudTrail / AWS Organizations

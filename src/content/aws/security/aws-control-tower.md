---
title: "AWS Control Tower"
fullName: "AWS Control Tower"
description: "基于最佳实践建立并持续治理标准化多账户 AWS 环境。"
service: "AWS Control Tower"
category: security
kind: service
lang: zh
topicKey: "AWS Control Tower"
frequency: "考试频率 ⭐⭐⭐⭐"
date: 2026-08-01
updated: 2026-08-01
tags: ["security", "AWS Control Tower", "AWS"]
notionId: 3a6964dc-ce4a-819b-9a04-ec24282b93ea
notionUrl: https://app.notion.com/p/3a6964dcce4a819b9a04ec24282b93ea
notionUpdated: "2026-07-31T08:22:50.099Z"
---

## 基本信息

| 字段 | 内容 |
| --- | --- |
| 英文 | AWS Control Tower |
| 全称 | AWS Control Tower |
| 中文 | 多账户 Landing Zone 与治理 |
| 日文 | AWS Control Tower（マルチアカウント環境の構築・統制） |
| 考试频率 | ⭐⭐⭐⭐ |
| 易混淆 | AWS Organizations / AWS Config |
## 一句话理解
基于最佳实践快速建立并持续治理标准化的多账户 AWS 环境。
## 核心作用
- **Landing Zone**：预先配置的多账户基础环境。
- **Account Factory**：按标准模板创建和配置新账户。
- **Controls**：预防性、检测性或主动式控制，帮助执行治理要求。
- **Dashboard**：集中查看账户、OU 和控制状态。
## 工作中的应用场景
- 新企业快速建立生产、开发、安全和日志账户基线。
- 新账户自动套用身份、日志和合规控制。
- 统一查看哪些账户或 OU 偏离治理要求。
## 工作原理
Control Tower 以 Organizations 为底座，并结合 IAM Identity Center、AWS Config、CloudTrail 等服务建立 Landing Zone、账户配置流程和治理控制。
## Cloud Practitioner 考点
- Control Tower = 多账户 Landing Zone + Account Factory + Controls。
## SAA-C03 考点
- 看到“快速建立标准多账户环境”“新账户自动纳管”“防护控制” → Control Tower。
- 预防性控制常借助 SCP，检测性控制常借助 Config；具体实现以控制类型为准。
## 常见误区
- Control Tower 不替代 Organizations。
- Control 不是 IAM 权限本身；它是治理要求及其实施机制。
- 部署 Landing Zone 后仍需设计工作负载架构与应用安全。
## 易混淆服务
- **Organizations**：账户、OU、SCP、合并计费的基础能力。
- **Control Tower**：在其之上的标准化环境搭建和持续治理。
- **Config**：配置记录和规则合规。
## 面试高频问题
- Control Tower 与 Organizations 有什么区别？
- Account Factory 和 Landing Zone 分别解决什么问题？
- 如何处理控制不合规的账户？
## 重点记忆
**Organizations 是底座，Control Tower 是搭好并持续看管的多账户标准环境。**
## 关联服务
AWS Organizations / AWS IAM Identity Center / AWS Config / AWS CloudTrail / AWS Service Catalog

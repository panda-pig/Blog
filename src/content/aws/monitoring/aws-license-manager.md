---
title: "AWS License Manager"
fullName: "AWS License Manager"
description: "集中跟踪并控制 AWS 与本地环境的软件许可证使用。"
service: "AWS License Manager"
category: monitoring
kind: service
lang: zh
topicKey: "AWS License Manager"
frequency: "考试频率 ⭐⭐⭐"
date: 2026-08-01
updated: 2026-08-01
tags: ["monitoring", "AWS License Manager", "AWS"]
notionId: 3ae964dc-ce4a-8178-af3d-e8f6f33334e2
notionUrl: https://app.notion.com/p/3ae964dcce4a8178af3de8f6f33334e2
notionUpdated: "2026-07-31T08:16:23.096Z"
---

## 基本信息

| 字段 | 内容 |
| --- | --- |
| 英文 | AWS License Manager |
| 全称 | AWS License Manager |
| 中文 | 软件许可证集中管理 |
| 日文 | AWS License Manager（ソフトウェアライセンスの一元管理） |
| 考试频率 | ⭐⭐⭐ |
| 易混淆 | AWS Service Catalog / AWS Marketplace |
## 一句话理解
集中跟踪并控制 AWS 与本地环境的软件许可证使用，避免超用和合规风险。
## 核心作用
- 管理许可证配置、使用规则与数量限制。
- 跟踪 BYOL 软件在 EC2、专用主机或混合环境中的使用。
- 通过硬限制或软限制控制许可证消耗。
## 工作中的应用场景
- 将现有 Windows Server、SQL Server、Oracle 等许可证带到 AWS。
- 防止部署数量超过企业购买的权益。
- 集中查看多账户和本地环境的许可证使用。
## 工作原理
管理员定义许可证配置、计数规则和上限，并关联 AWS 或混合环境资源；服务持续跟踪使用量，按软限制告警或按硬限制阻止超用。
## Cloud Practitioner 考点
- BYOL、许可证数量跟踪、避免超用 → License Manager。
## SAA-C03 考点
- 跨 AWS 与本地统一管理商业软件许可证 → License Manager。
- Dedicated Host 管物理主机控制；License Manager 管许可规则与使用，两者可组合。
## 常见误区
- 不等于购买许可证，也不替代软件厂商授权条款。
- Service Catalog 管允许部署的产品，License Manager 管许可证如何使用。
## 易混淆服务
- **License Manager**：许可证规则、数量与合规。
- **Service Catalog**：已批准 IT 产品目录。
- **Marketplace**：第三方软件与服务市场。
## 面试高频问题
- 企业迁移 BYOL 工作负载时如何防止许可证超用？
- License Manager 与 Dedicated Host 分别解决什么问题？
## 重点记忆
**BYOL + 跨环境跟踪 + 许可证上限 → License Manager。**
## 关联服务
Amazon EC2 / Dedicated Hosts / AWS Organizations / AWS Systems Manager

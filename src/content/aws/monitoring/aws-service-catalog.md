---
title: "AWS Service Catalog"
fullName: "AWS Service Catalog"
description: "将企业批准的标准云产品放入目录，供用户受控自助部署。"
service: "AWS Service Catalog"
category: monitoring
kind: service
lang: zh
topicKey: "AWS Service Catalog"
frequency: "考试频率 ⭐⭐⭐⭐"
date: 2026-08-01
updated: 2026-08-01
tags: ["monitoring", "AWS Service Catalog", "AWS"]
notionId: 3ae964dc-ce4a-8193-b94e-f813e47ed756
notionUrl: https://app.notion.com/p/3ae964dcce4a8193b94ef813e47ed756
notionUpdated: "2026-07-31T08:16:23.065Z"
---

## 基本信息

| 字段 | 内容 |
| --- | --- |
| 英文 | AWS Service Catalog |
| 全称 | AWS Service Catalog |
| 中文 | 已批准 IT 服务目录 |
| 日文 | AWS Service Catalog（承認済み IT サービスのカタログ管理） |
| 考试频率 | ⭐⭐⭐⭐ |
| 易混淆 | AWS Marketplace / AWS Control Tower |
## 一句话理解
管理员发布标准化、已批准的云产品，用户在授权范围内自助部署。
## 核心作用
- 以 **Portfolio** 组织并授权产品。
- 产品常由 CloudFormation 模板定义，可包含服务器、数据库、网络或完整应用环境。
- 通过约束、权限和版本控制保证企业标准。
## 工作中的应用场景
- 开发人员自助创建符合安全基线的测试环境。
- 企业统一发布已批准的三层架构或软件栈。
- 限制团队只能使用指定实例规格、网络和标签。
## 工作原理
管理员创建 Portfolio，将 CloudFormation 模板发布为带版本和约束的 Product，并授权用户；用户随后启动受控的 Provisioned Product。
## Cloud Practitioner 考点
- “企业批准的产品目录”“员工自助部署标准环境” → Service Catalog。
## SAA-C03 考点
- 既要自助服务又要保持治理与标准化 → Service Catalog。
- 常与 CloudFormation、IAM 和 Organizations 配合。
## 常见误区
- 不是购买第三方软件的 AWS Marketplace。
- 不是多账户 Landing Zone 管理工具；那是 Control Tower。
## 易混淆服务
- **Service Catalog**：企业批准的可部署产品。
- **Marketplace**：第三方软件、数据或服务市场。
- **Control Tower**：多账户环境治理。
## 面试高频问题
- 如何让开发团队自助部署资源同时保证符合企业标准？
- Service Catalog 与 CloudFormation 的关系是什么？
## 重点记忆
**批准模板做成产品，放进目录让用户受控自助部署。**
## 关联服务
AWS CloudFormation / AWS IAM / AWS Organizations / AWS Control Tower

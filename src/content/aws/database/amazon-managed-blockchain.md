---
title: Amazon Managed Blockchain
fullName: "Amazon Managed Blockchain (AMB)"
description: 为多组织共享、可验证且难以篡改的记录提供托管区块链能力。
service: AMB
category: database
kind: service
lang: zh
frequency: "考试频率 ⭐"
date: 2026-07-29
updated: 2026-07-31
tags: [Database, Blockchain, Ledger]
notionId: 3ac964dc-ce4a-81ef-ba29-c54db8aa90b2
notionUrl: https://app.notion.com/p/3ac964dcce4a81efba29c54db8aa90b2
notionUpdated: "2026-07-30T04:29:06.851Z"
---

## 基本信息

| 字段 | 内容 |
| --- | --- |
| 英文 | Amazon Managed Blockchain (AMB) |
| 全称 | Amazon Managed Blockchain (AMB) |
| 中文释义 | 托管区块链服务 |
| 日文释义 | マネージドブロックチェーンサービス |
| 考试频率 | ⭐ |
| 易混淆 | 普通数据库 / 审计日志 / QLDB |

## 一句话理解

为需要共享、可验证且难以篡改记录的多参与方场景提供托管区块链能力。

## 核心作用

- 减少搭建与维护区块链网络基础设施的工作。
- 让多个组织或参与方在缺少单一完全可信中心的情况下共享账本。
- 支持溯源、审计和跨组织交易记录。

## 典型场景

供应链溯源、跨机构金融网络、产品来源验证和多组织资产转移记录。

## 什么时候才值得使用

同时出现以下信号时再考虑：
- 多个独立组织共同参与。
- 参与方之间不完全信任。
- 需要共享账本、可验证历史和防篡改能力。

## 不适合

单一公司内部的普通 CRUD、订单系统或仅仅需要保存审计记录，通常使用关系数据库、NoSQL、日志或其他审计方案更简单。

## Cloud Practitioner / SAA 考点

辨认“多参与方、共享账本、防篡改、可追踪”场景即可，不应把所有历史记录题都选成区块链。

## 常见误区

- 区块链不是数据库的默认升级版。
- “需要审计”不自动等于“需要区块链”。
- 先确认是否真的存在跨组织信任问题。

## 面试高频问题

为什么普通 RDS 审计表不能满足这个场景？

## 重点记忆

**多组织 + 不完全互信 + 共享防篡改账本 → Managed Blockchain。**

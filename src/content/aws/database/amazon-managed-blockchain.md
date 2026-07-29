---
title: Amazon Managed Blockchain
fullName: Amazon Managed Blockchain
description: 为多组织共享、可验证且难以篡改的记录提供托管区块链能力。
service: AMB
category: database
kind: service
lang: zh
frequency: "考试频率 ★"
date: 2026-07-29
updated: 2026-07-29
tags: [Database, Blockchain, Ledger]
notionId: 3ac964dc-ce4a-81ef-ba29-c54db8aa90b2
notionUrl: https://app.notion.com/p/3ac964dcce4a81efba29c54db8aa90b2
notionUpdated: "2026-07-29T08:07:57.567Z"
---

## 一句话理解

> 只有在多个独立参与方不完全互信、又需要共享账本与可验证历史时，Managed Blockchain 才值得考虑。

## 核心作用

- 减少区块链网络基础设施的搭建和维护工作。
- 适合供应链溯源、跨机构金融网络、来源验证与资产转移记录。
- 重点在多参与方共享与防篡改，而不是普通 CRUD 性能。

## 考试重点

- 多参与方、共享账本、防篡改、可追踪通常指向区块链服务。
- 单一公司的订单系统、普通审计记录通常使用 RDS、NoSQL 或日志更简单。
- 先确认场景是否真的存在跨组织信任问题。

## 常见误区

- 区块链不是普通数据库的默认升级版。
- 只需要审计并不自动等于需要区块链。

## 重点记忆

> **多组织 + 不完全互信 + 共享防篡改账本 → Managed Blockchain。**

## 关联服务

RDS、DynamoDB、Audit Logs、Supply Chain。

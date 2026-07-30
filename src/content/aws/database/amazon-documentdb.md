---
title: Amazon DocumentDB
fullName: "Amazon DocumentDB (with MongoDB compatibility)"
description: 为类似 JSON 的半结构化文档和 MongoDB 兼容工作负载提供托管数据库。
service: DocumentDB
category: database
kind: service
lang: zh
frequency: "考试频率 ⭐⭐"
date: 2026-07-29
updated: 2026-07-30
tags: [Database, Document, MongoDB]
notionId: 3a6964dc-ce4a-813c-bc72-c55eb53fb37a
notionUrl: https://app.notion.com/p/3a6964dcce4a813cbc72c55eb53fb37a
notionUpdated: "2026-07-29T08:10:40.179Z"
---

## 基本信息

| 字段 | 内容 |
| --- | --- |
| 英文 | Amazon DocumentDB (with MongoDB compatibility) |
| 全称 | Amazon DocumentDB (with MongoDB compatibility) |
| 中文 | 托管文档数据库 |
| 日文 | マネージドドキュメントデータベース |
| 考试频率 | ⭐⭐ |
| 易混淆 | DynamoDB / MongoDB / Neptune |

## 一句话理解

为类似 JSON 的半结构化文档和 MongoDB 兼容工作负载提供托管数据库能力。

## 核心作用

- 保存嵌套属性、数组和不同记录字段不完全一致的文档。
- 适合内容管理、商品目录、用户资料、个性化和移动应用后端。
- 提供自动扩展存储、备份、读取副本和企业安全能力。

## 工作原理

应用使用兼容的 MongoDB 驱动与 API 访问 DocumentDB，但具体操作符、版本和功能支持需要查兼容性文档。

## Cloud Practitioner / SAA 考点

“MongoDB 兼容、复杂 JSON、嵌套文档、灵活 Schema” → DocumentDB。

## 常见误区

- 文档不是 Word/PDF，而是类似 JSON/BSON 的数据结构。
- “MongoDB compatibility” 不等于与 MongoDB 所有版本、命令和功能 100% 相同。
- DynamoDB 也支持文档型 Item，但更强调主键访问、大规模 Serverless 与已知访问模式。
- 源笔记中的 64 TB 已过时；当前上限随引擎版本变化，较新版本可高于此值。

## 易混淆服务

- DynamoDB：Key-Value / Document NoSQL，按主键访问模式设计。
- Neptune：图关系遍历。
- RDS：固定关系、SQL、JOIN 和事务。

## 面试高频问题

1. 为什么不把复杂用户资料拆成大量关系表？
2. DocumentDB 与 DynamoDB 如何选？
3. MongoDB 迁移前要验证哪些兼容性？

## 重点记忆

**复杂 JSON / 嵌套属性 / MongoDB 兼容 → DocumentDB。**

## 关联服务

DynamoDB、Neptune、DMS、AWS Backup、VPC、KMS。

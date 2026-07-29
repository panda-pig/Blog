---
title: Amazon DocumentDB
fullName: Amazon DocumentDB (with MongoDB compatibility)
description: 为类似 JSON 的半结构化文档和 MongoDB 兼容工作负载提供托管数据库。
service: DocumentDB
category: database
kind: service
lang: zh
frequency: "考试频率 ★★"
date: 2026-07-29
updated: 2026-07-29
tags: [Database, Document, MongoDB]
notionId: 3a6964dc-ce4a-813c-bc72-c55eb53fb37a
notionUrl: https://app.notion.com/p/3a6964dcce4a813cbc72c55eb53fb37a
notionUpdated: "2026-07-29T08:10:40.179Z"
---

## 一句话理解

> DocumentDB 适合字段不完全一致、包含嵌套属性与数组的复杂文档数据。

## 核心作用

- 典型场景包括内容管理、商品目录、用户资料、个性化与移动应用后端。
- 应用可使用兼容的 MongoDB 驱动和 API，但需核对版本、命令与操作符兼容性。
- 提供自动扩展存储、备份、读取副本和企业安全能力。

## 考试重点

- MongoDB 兼容、复杂 JSON、嵌套文档、灵活 Schema 通常选择 DocumentDB。
- DynamoDB 更强调主键访问模式、Serverless 与大规模低延迟。
- Neptune 面向关系路径遍历，RDS 面向 SQL、JOIN 与事务。

## 常见误区

- 文档数据库中的“文档”不是 Word 或 PDF。
- MongoDB compatibility 不等于所有 MongoDB 功能 100% 相同。

## 重点记忆

> **复杂 JSON / 嵌套属性 / MongoDB 兼容 → DocumentDB。**

## 关联服务

DynamoDB、Neptune、DMS、AWS Backup、VPC、KMS。

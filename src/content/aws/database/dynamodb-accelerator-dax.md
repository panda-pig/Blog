---
title: DynamoDB Accelerator (DAX)
fullName: DynamoDB Accelerator
description: 与 DynamoDB API 高度兼容、把重复最终一致读取降到微秒级的托管内存缓存。
service: DAX
category: database
kind: service
lang: zh
frequency: "考试频率 ★★★★"
date: 2026-07-29
updated: 2026-07-29
tags: [Database, DynamoDB, Cache]
notionId: 3ac964dc-ce4a-815c-be49-c16168d8604b
notionUrl: https://app.notion.com/p/3ac964dcce4a815cbe49c16168d8604b
notionUpdated: "2026-07-29T08:07:57.540Z"
---

## 一句话理解

> DAX 位于应用与 DynamoDB 之间，缓存按 Key 重复读取的数据；DynamoDB 仍是持久数据源。

## 核心作用

- 应用使用 DAX Client；命中直接返回，未命中访问 DynamoDB 并缓存。
- 适合读多写少、重复 Key 访问和突发读取。
- Multi-AZ DAX Cluster 可提高缓存层可用性。

## 考试重点

- DynamoDB 专用缓存、微秒级读取通常选择 DAX。
- 需要强一致读取、写多读少或缓存命中率低的负载不适合 DAX。
- 缓存 RDS、任意 API 或会话时通常考虑 ElastiCache。

## 常见误区

- DAX 不替代 DynamoDB。
- 微秒级并不代表每个请求都一定命中缓存。

## 重点记忆

> **DynamoDB + 重复最终一致读取 + 微秒级 → DAX。**

## 关联服务

DynamoDB、ElastiCache、Global Tables、Lambda。

---
title: DynamoDB Accelerator (DAX)
fullName: "DynamoDB Accelerator (DAX)"
description: 与 DynamoDB API 高度兼容、把重复最终一致读取降到微秒级的托管内存缓存。
service: DAX
category: database
kind: service
lang: zh
frequency: "考试频率 ⭐⭐⭐⭐"
date: 2026-07-29
updated: 2026-07-30
tags: [Database, DynamoDB, Cache]
notionId: 3ac964dc-ce4a-815c-be49-c16168d8604b
notionUrl: https://app.notion.com/p/3ac964dcce4a815cbe49c16168d8604b
notionUpdated: "2026-07-29T08:07:57.540Z"
---

## 基本信息

| 字段 | 内容 |
| --- | --- |
| 英文 | DynamoDB Accelerator (DAX) |
| 全称 | DynamoDB Accelerator (DAX) |
| 中文释义 | DynamoDB 专用内存缓存 |
| 日文释义 | DynamoDB 専用インメモリキャッシュ |
| 考试频率 | ⭐⭐⭐⭐ |
| 易混淆 | ElastiCache / RDS Read Replica |

## 一句话理解

DAX 是与 DynamoDB API 高度兼容的托管内存缓存，把适合的最终一致性读取从毫秒级降低到微秒级。

## 核心作用

- 缓存重复的 DynamoDB 读取，减少表的读取流量。
- 适合读多写少、按 Key 重复访问、突发读取的工作负载。
- 应用改用 DAX Client 后，缓存命中直接返回；未命中时访问 DynamoDB 并缓存结果。

## 典型场景

实时竞价、社交游戏、交易展示、热门商品、用户资料和高流量页面。

## 不适合

- 需要强一致读取的请求。
- 写多读少或每次都读取不同数据、缓存命中率低的工作负载。
- 需要缓存 RDS、任意 API 或会话时，应考虑 ElastiCache。

## Cloud Practitioner 考点

“DynamoDB 专用缓存、微秒级读取” → DAX。

## SAA-C03 考点

- DAX 是 DynamoDB 专用，不是通用 Redis 缓存。
- 主要优化最终一致性读取；要评估 TTL、热点数据和陈旧数据容忍度。
- 高可用可使用 Multi-AZ DAX Cluster。

## 常见误区

- DAX 不替代 DynamoDB，DynamoDB 仍是持久数据源。
- DAX 不等于 ElastiCache。
- 微秒级并不代表所有请求都必然命中缓存。

## 面试高频问题

1. 为什么选择 DAX 而不是 ElastiCache？
2. 哪些访问模式无法从 DAX 获益？
3. 如何处理缓存陈旧和失效？

## 重点记忆

**DynamoDB + 重复读取 + 微秒级 → DAX。**

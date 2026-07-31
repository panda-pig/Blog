---
title: Amazon DynamoDB
fullName: "Amazon DynamoDB"
description: 按主键访问模式设计、自动扩展并提供低延迟的 Serverless Key-Value/Document 数据库。
service: DynamoDB
category: database
kind: service
lang: zh
frequency: "考试频率 ⭐⭐⭐⭐⭐"
date: 2026-07-29
updated: 2026-07-31
tags: [Database, NoSQL, Serverless]
notionId: 3a6964dc-ce4a-8198-a171-ce08f0f442b0
notionUrl: https://app.notion.com/p/3a6964dcce4a8198a171ce08f0f442b0
notionUpdated: "2026-07-30T04:28:54.006Z"
---

## 基本信息

| 字段 | 内容 |
| --- | --- |
| 英文 | Amazon DynamoDB |
| 全称 | Amazon DynamoDB |
| 中文释义 | 无服务器 Key-Value 与文档型 NoSQL 数据库 |
| 日文释义 | サーバーレス NoSQL データベース |
| 考试频率 | ⭐⭐⭐⭐⭐ |
| 易混淆 | RDS / DocumentDB / DAX |

## 一句话理解

按主键访问模式设计、可自动扩展并在任意规模提供低延迟的 Serverless NoSQL 数据库。

## 核心作用

- Table 包含 Item；Item 由 Attribute 组成。
- Primary Key 可以只有 Partition Key，也可以是 Partition Key + Sort Key。
- 除主键属性外，不要求所有 Item 拥有完全相同的字段。
- 支持按需或预置容量、自动扩展、备份、TTL、Streams 和 Global Tables。

## 工作中的应用场景

购物车、会话、游戏状态、用户资料、IoT、事件元数据和大规模互联网应用。

## 工作原理

Partition Key 决定数据分布；良好的高基数键设计有助于均匀流量。
- Query：指定 Partition Key，可结合 Sort Key 条件，高效读取目标项。
- Scan：读取表或索引中的大量项目再过滤，通常更耗容量，应谨慎使用。
- Global Tables：Multi-Region、Multi-Active，每个副本可读写。

## Cloud Practitioner 考点

“Serverless NoSQL、Key-Value、大规模低延迟、自动扩展” → DynamoDB。

## SAA-C03 考点

- 先设计访问模式，再设计键和索引。
- 避免低基数热点 Partition Key。
- Query 通常优于 Scan。
- 全球多 Region 读写 → Global Tables。
- 高频重复读取要求微秒级 → DAX。
- 强一致、最终一致与 Global Tables 的一致性模式要按题目判断。

## 常见误区

- NoSQL 不等于完全没有 Schema；主键结构和访问模式仍需设计。
- DynamoDB 不适合任意复杂 JOIN 和临时关系查询。
- Scan 不是“查询某个主键”的推荐方式。
- Serverless 不代表没有容量、成本、安全和数据建模责任。

## 易混淆服务

- RDS / Aurora：关系、SQL、JOIN 和复杂事务。
- DocumentDB：MongoDB 兼容的复杂文档查询。
- DAX：DynamoDB 专用缓存，不是数据库替代品。

## 面试高频问题

1. 如何选择 Partition Key 避免 Hot Partition？
2. Query 和 Scan 有什么成本差异？
3. 什么时候选择 Global Tables？
4. DynamoDB 为什么不适合这个关系型场景？

## 重点记忆

**Table → Item → Attribute；先访问模式，后设计 Partition Key；Query 优先于 Scan。**

## 关联服务

DAX、Lambda、API Gateway、Streams、Global Tables、AWS Backup、Gateway VPC Endpoint。

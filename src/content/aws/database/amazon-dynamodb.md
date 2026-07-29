---
title: Amazon DynamoDB
fullName: Amazon DynamoDB
description: 按主键访问模式设计、自动扩展并提供低延迟的 Serverless Key-Value/Document 数据库。
service: DynamoDB
category: database
kind: service
lang: zh
frequency: "考试频率 ★★★★★"
date: 2026-07-29
updated: 2026-07-29
tags: [Database, NoSQL, Serverless]
notionId: 3a6964dc-ce4a-8198-a171-ce08f0f442b0
notionUrl: https://app.notion.com/p/3a6964dcce4a8198a171ce08f0f442b0
notionUpdated: "2026-07-29T08:10:28.597Z"
---

## 一句话理解

> DynamoDB 以 Table、Item、Attribute 组织数据，先确定访问模式，再设计 Partition Key、Sort Key 和索引。

## 核心作用

- Partition Key 决定数据分布；高基数、均匀访问可降低 Hot Partition 风险。
- Query 指定 Partition Key 并可带 Sort Key 条件；Scan 大量读取后过滤，通常更耗容量。
- Global Tables 提供 Multi-Region、Multi-Active；DAX 缓存重复的最终一致读取。

## 考试重点

- Serverless NoSQL、大规模低延迟、自动扩展通常选择 DynamoDB。
- 购物车、会话、游戏状态、IoT 和事件元数据是典型场景。
- 一致性、容量模式、索引、TTL、Streams 和备份要按访问模式判断。

## 常见误区

- NoSQL 不等于没有 Schema，主键结构仍需设计。
- DynamoDB 不适合任意复杂 JOIN 和临时关系查询。

## 重点记忆

> **Table → Item → Attribute；先访问模式，再设计 Partition Key；Query 优先于 Scan。**

## 关联服务

DAX、Lambda、API Gateway、Streams、Global Tables、AWS Backup。

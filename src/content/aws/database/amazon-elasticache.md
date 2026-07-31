---
title: Amazon ElastiCache
fullName: "Amazon ElastiCache"
description: 使用 Valkey、Redis OSS 或 Memcached 托管热点数据内存缓存。
service: ElastiCache
category: database
kind: service
lang: zh
frequency: "考试频率 ⭐⭐⭐⭐"
date: 2026-07-29
updated: 2026-07-31
tags: [Database, Cache, Performance]
notionId: 3a6964dc-ce4a-819f-a367-c7390c1af894
notionUrl: https://app.notion.com/p/3a6964dcce4a819fa367c7390c1af894
notionUpdated: "2026-07-30T04:28:56.104Z"
---

## 基本信息

| 字段 | 内容 |
| --- | --- |
| 英文 | Amazon ElastiCache |
| 全称 | Amazon ElastiCache |
| 中文释义 | 托管内存缓存 |
| 日文释义 | マネージドインメモリキャッシュ |
| 考试频率 | ⭐⭐⭐⭐ |
| 易混淆 | DAX / RDS Read Replica / CloudFront / MemoryDB |

## 一句话理解

把热点数据放入 Valkey、Redis OSS 或 Memcached 内存中，降低后端数据库压力并缩短响应时间。

## 核心作用

- 缓存重复查询、用户会话、排行榜、热门商品和临时结果。
- Cache Hit 直接返回；Cache Miss 回源数据库并把结果写入缓存。
- 减少重复数据库 I/O，可改善性能并降低数据库扩容压力。

## 常见缓存模式

- Cache-Aside：应用先查缓存；未命中时查数据库并回填。灵活，但要处理过期与陈旧数据。
- Write-Through：数据库写入时同步更新缓存，提高新鲜度，但增加写路径工作。

## 引擎选择

- Valkey / Redis OSS：丰富数据结构、复制、高可用、排行榜和会话等。
- Memcached：简单分布式缓存，功能较轻。
- ElastiCache Serverless：自动管理容量，但应用仍需设计缓存键、TTL 与失效策略。

## Cloud Practitioner 考点

“内存缓存、Redis/Valkey/Memcached、减少数据库负载” → ElastiCache。

## SAA-C03 考点

- 缓存适合重复读取且允许一定陈旧的数据。
- 设计 TTL、缓存失效、Eviction、故障和缓存雪崩处理。
- ElastiCache 可与 RDS、Aurora 和应用后端配合；DAX 只针对 DynamoDB。

## 常见误区

- 缓存通常不是持久化事实来源。
- 不是所有数据都适合缓存，强一致且频繁变化的数据需要谨慎。
- Read Replica 保存完整数据库并可执行 SQL；ElastiCache 只保存选定缓存内容。
- CloudFront 缓存边缘 HTTP 内容，ElastiCache 位于应用后端。

## 面试高频问题

1. Cache-Aside 如何处理数据不一致？
2. Redis/Valkey 和 Memcached 如何选择？
3. 为什么选择缓存而不是继续增加 RDS 实例规格？

## 重点记忆

**重复读取 + 热点数据 + 微秒级内存访问 → ElastiCache。**

## 关联服务

RDS、Aurora、DAX、CloudFront、MemoryDB、EC2、Lambda。

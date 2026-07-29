---
title: Amazon ElastiCache
fullName: Amazon ElastiCache
description: 使用 Valkey、Redis OSS 或 Memcached 托管热点数据内存缓存。
service: ElastiCache
category: database
kind: service
lang: zh
frequency: "考试频率 ★★★★"
date: 2026-07-29
updated: 2026-07-29
tags: [Database, Cache, Performance]
notionId: 3a6964dc-ce4a-819f-a367-c7390c1af894
notionUrl: https://app.notion.com/p/3a6964dcce4a819fa367c7390c1af894
notionUpdated: "2026-07-29T08:10:32.594Z"
---

## 一句话理解

> ElastiCache 把重复读取的热点数据放在内存中，降低后端数据库压力并缩短响应时间。

## 核心作用

- Cache Hit 直接返回；Cache Miss 回源数据库并按策略回填。
- Cache-Aside 灵活常见；Write-Through 同步更新缓存但会增加写路径工作。
- Valkey/Redis OSS 提供丰富结构与高可用，Memcached 更轻量。

## 考试重点

- 内存缓存、Redis/Valkey/Memcached、减少数据库负载通常选择 ElastiCache。
- DAX 只面向 DynamoDB；Read Replica 保存完整数据库；CloudFront 缓存边缘 HTTP 内容。
- 设计 TTL、Eviction、失效、故障和缓存雪崩处理。

## 常见误区

- 缓存通常不是持久化事实来源。
- 强一致且频繁变化的数据不一定适合缓存。

## 重点记忆

> **重复读取 + 热点数据 + 内存访问 → ElastiCache。**

## 关联服务

RDS、Aurora、DAX、CloudFront、EC2、Lambda。

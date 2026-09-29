---
title: "AWS Database 面试速查"
fullName: "AWS Database Interview Guide"
description: "从数据模型、访问模式、扩展、可用性与恢复选择 RDS、Aurora、DynamoDB 和缓存服务。"
service: "AWS Database"
category: database
kind: topic
lang: zh
topicKey: "AWS Database Interview Guide"
frequency: "面试高频"
date: 2026-09-29
updated: 2026-09-29
tags: ["database", "interview", "RDS", "DynamoDB"]
notionId: 3a6964dc-ce4a-81ea-b432-de43eb476dfa
notionUrl: https://app.notion.com/p/3a6964dcce4a81eab432de43eb476dfa
notionUpdated: "2026-09-27T06:24:33.069Z"
---

## 先问访问模式

数据库选型从 **数据模型、Query Pattern、一致性、延迟、吞吐、扩展与恢复目标** 开始，而不是先背服务名。

| 需求 | 候选 |
| --- | --- |
| 关系模型、SQL、Join | RDS / Aurora |
| Key-value / Document、单毫秒、大规模水平扩展 | DynamoDB |
| Cassandra CQL 兼容 | Keyspaces |
| MongoDB 兼容 Document | DocumentDB |
| 图关系 | Neptune |
| 时间序列 | Timestream |
| 微秒级缓存、Session、Leaderboard | ElastiCache |

## 高频问题

- RDS Multi-AZ 解决高可用，不负责读扩展；Read Replica 解决读扩展，可提升为独立数据库。
- Aurora Writer Endpoint 处理写入；Reader Endpoint 为通用读取提供入口。
- RDS Proxy 通过连接池缓解 Lambda Connection Storm，不是查询缓存。
- DynamoDB Partition Key 决定分布；GSI 支持不同访问模式，DAX 缓存最终一致读取。
- ElastiCache 的 Cache-aside、Write-through 要结合失效策略、TTL 与 Stampede 防护。
- Backup / PITR、Multi-AZ 与 Cross-Region DR 是不同能力。

## 回答结构

数据模型 → 访问模式 → 容量与分区 → HA → Backup / DR → 安全 → 监控与成本。

## 重点记忆

**先说数据和查询，再说服务；高可用、读扩展、缓存和备份是四个不同问题。**

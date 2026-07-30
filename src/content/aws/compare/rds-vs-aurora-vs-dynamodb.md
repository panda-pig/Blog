---
title: "RDS vs Aurora vs DynamoDB"
fullName: "RDS vs Aurora vs DynamoDB"
description: "比较传统托管关系型、AWS 云原生关系型与 Serverless NoSQL。"
service: "AWS Compare"
category: compare
kind: compare
lang: zh
topicKey: "RDS vs Aurora vs DynamoDB"
frequency: "高频对比"
date: 2026-07-30
updated: 2026-07-30
tags: ["compare","RDS vs Aurora vs DynamoDB","AWS"]
notionId: 3a6964dc-ce4a-81bc-8e9a-ce92a59d7ce7
notionUrl: https://app.notion.com/p/3a6964dcce4a81bc8e9ace92a59d7ce7
notionUpdated: "2026-07-29T08:11:55.994Z"
---

> 比较传统托管关系型、AWS 云原生关系型与 Serverless NoSQL。
## 对比结论
- 需要 SQL、JOIN、事务和多种常见引擎 → RDS。
- 需要 MySQL/PostgreSQL 兼容，同时追求更强读扩展与云原生高可用 → Aurora。
- 访问模式明确、Key-Value / Document、大规模低延迟与 Serverless → DynamoDB。
## 核心差异

| 维度 | RDS | Aurora | DynamoDB |
| --- | --- | --- | --- |
| 数据模型 | 关系型 | 关系型 | Key-Value / Document NoSQL |
| 查询 | SQL、JOIN | SQL、JOIN | API / PartiQL，按 Key 和索引访问 |
| 引擎 | 多种常见关系引擎 | 兼容 MySQL / PostgreSQL | AWS 托管 NoSQL 引擎 |
| 扩展 | 实例扩容 + Read Replica | 最多 15 Readers + 自动存储扩展 | 自动分区与容量扩展 |
| 高可用 | Multi-AZ | 跨 3 AZ 分布式存储 + Readers | 区域级托管能力；Global Tables 跨 Region |
| 设计重点 | Schema、索引、SQL | Endpoint、Reader、集群架构 | 访问模式、Partition Key、索引 |
| 典型词 | Oracle、SQL Server、JOIN | MySQL/PostgreSQL、高性能 | Serverless、毫秒级、Key-Value |

## 选型判断
先看数据模型与访问方式，再看一致性、扩展、可用性、运维与成本，不要只因为“流量大”就自动选择 NoSQL。
## 常见陷阱
- RDS Multi-AZ 解决高可用，不是读扩展。
- Aurora 仍是关系型数据库，不是 NoSQL。
- DynamoDB 不擅长任意复杂 JOIN 和临时查询。
- Serverless 不等于自动获得正确数据模型。
## 面试回答
“先从访问模式和数据关系出发；需要复杂事务/查询选关系型，需要可预测 Key 访问和大规模水平扩展选 DynamoDB，再根据兼容性、高可用和运维需求在 RDS 与 Aurora 中选择。”

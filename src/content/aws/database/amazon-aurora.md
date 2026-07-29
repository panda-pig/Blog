---
title: Amazon Aurora
fullName: Amazon Aurora
description: 兼容 MySQL/PostgreSQL、计算与分布式集群存储分离的云原生关系型数据库。
service: Aurora
category: database
kind: service
lang: zh
frequency: "考试频率 ★★★★★"
date: 2026-07-29
updated: 2026-07-29
tags: [Database, Relational, Multi-AZ]
notionId: 3a6964dc-ce4a-8118-949e-f11c86e47043
notionUrl: https://app.notion.com/p/3a6964dcce4a8118949ef11c86e47043
notionUpdated: "2026-07-29T08:10:24.915Z"
---

## 一句话理解

> Aurora 保留关系型 SQL 与事务能力，同时用跨 3 个 AZ 的分布式存储提高耐久性、可用性和读取扩展。

## 核心作用

- 集群存储跨 3 个 AZ 保存 6 份数据；这不等于 6 个数据库实例。
- Writer 负责写入，可配置最多 15 个 Aurora Replicas 参与读扩展和故障转移。
- Cluster Endpoint 连接 Writer，Reader Endpoint 在读取副本间分散流量。

## 考试重点

- MySQL/PostgreSQL 兼容、云原生、高性能高可用关系数据库通常选择 Aurora。
- Aurora Global Database 面向跨 Region 读取和灾备，不等于普通 Multi-AZ。
- Serverless v2 调整计算容量，但数据库设计和成本仍需管理。

## 常见误区

- Aurora 不支持所有 RDS 数据库引擎。
- 15 个副本指 Reader 实例，不是 15 份独立存储。

## 重点记忆

> **MySQL/PostgreSQL 兼容 + 云原生分布式存储 + 多 Reader → Aurora。**

## 关联服务

RDS、Global Database、AWS Backup、DMS、Secrets Manager。

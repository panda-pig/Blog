---
title: Amazon Aurora
fullName: "Amazon Aurora"
description: 兼容 MySQL/PostgreSQL、计算与分布式集群存储分离的云原生关系型数据库。
service: Aurora
category: database
kind: service
lang: zh
frequency: "考试频率 ⭐⭐⭐⭐⭐"
date: 2026-07-29
updated: 2026-09-29
tags: [Database, Relational, Multi-AZ]
notionId: 3a6964dc-ce4a-8118-949e-f11c86e47043
notionUrl: https://app.notion.com/p/3a6964dcce4a8118949ef11c86e47043
notionUpdated: "2026-09-28T08:57:43.843Z"
---

## 基本信息

| 字段 | 内容 |
| --- | --- |
| 英文 | Amazon Aurora |
| 全称 | Amazon Aurora |
| 中文释义 | AWS 云原生关系型数据库 |
| 日文释义 | クラウドネイティブリレーショナルデータベース |
| 考试频率 | ⭐⭐⭐⭐⭐ |
| 易混淆 | RDS 常规引擎 / DynamoDB |

## 一句话理解

兼容 MySQL 或 PostgreSQL 的高性能关系型数据库，把计算实例与分布式集群存储分离。

## 核心作用

- 提供关系型 SQL、事务和 MySQL / PostgreSQL 兼容能力。
- 集群存储跨 3 个 AZ 保存 6 份数据，提高耐久性和可用性。
- 一个 Writer 负责写入；最多可配置 15 个 Aurora Replicas 扩展读取并参与故障转移。
- 存储按使用量自动增长；最大容量取决于引擎版本，当前部分版本可达 256 TiB。

## 工作中的应用场景

高吞吐 Web、游戏、媒体内容管理、SaaS、关键事务系统和读流量较大的关系型应用。

## 工作原理

Writer 与 Reader 使用共享 Cluster Volume。应用可使用 Cluster Endpoint 连接 Writer，使用 Reader Endpoint 在副本间分散读取。Aurora 持续备份到 S3，并支持保留期内 PITR。

## Cloud Practitioner 考点

“AWS 云原生、兼容 MySQL/PostgreSQL、高性能高可用关系数据库” → Aurora。

## SAA-C03 考点

- 六份存储副本跨三个 AZ，不等于六个数据库实例。
- Aurora Replica 共享集群存储，适合读取扩展和故障转移。
- Aurora Global Database 用于跨 Region 读取和灾备，不等于普通 Multi-AZ。
- Aurora Serverless v2 解决可变计算容量，不代表数据库设计无需管理。

## 常见误区

- Aurora 不是支持所有 RDS 数据库引擎，只兼容 MySQL / PostgreSQL 生态。
- “最多 15 个副本”指 Reader 实例，不是 15 份独立存储。
- 自动扩展存储不等于成本一定最优。
- 精确容量数字会随引擎版本变化，考试先记架构能力。

## 易混淆服务

RDS 常规引擎、DynamoDB、Aurora Global Database。

## 面试高频问题

1. Aurora 为什么能比传统架构更快地故障转移？
2. Reader Endpoint 与 Cluster Endpoint 有什么区别？
3. Aurora 与普通 RDS MySQL 如何选？

## 重点记忆

**MySQL/PostgreSQL 兼容 + 云原生分布式存储 + 15 Readers → Aurora。**

## 关联服务

RDS、Global Database、AWS Backup、DMS、Secrets Manager、CloudWatch。

+## 本轮补充：端点、扩展与恢复

- Writer / Cluster Endpoint 用于读写、DDL 与事务；Reader Endpoint 为通用读取提供统一入口。
- Aurora Replica Auto Scaling 根据 Reader CPU、连接等指标调整 Replica 数量。
- Global Database 以 Primary Region 写入，Secondary Region 提供全球读取和区域级 DR。
- Backtrack 是 Aurora MySQL 的快速倒回能力，需创建时启用，不能替代 Backup / PITR。
- Database Clone 使用 Copy-on-Write 快速建立可读写 Dev/Test 环境。

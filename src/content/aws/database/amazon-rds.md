---
title: Amazon RDS
fullName: "Amazon Relational Database Service"
description: 托管 MySQL、PostgreSQL 等关系型引擎，减少基础设施、补丁与备份运维。
service: RDS
category: database
kind: service
lang: zh
frequency: "考试频率 ⭐⭐⭐⭐⭐"
date: 2026-07-29
updated: 2026-07-30
tags: [Database, Relational, SAA-C03]
notionId: 3a6964dc-ce4a-81a2-9c3d-ebba79e9df68
notionUrl: https://app.notion.com/p/3a6964dcce4a81a29c3debba79e9df68
notionUpdated: "2026-07-29T08:10:20.563Z"
---

## 基本信息

| 字段 | 内容 |
| --- | --- |
| 英文 | Amazon RDS |
| 全称 | Amazon Relational Database Service |
| 中文释义 | 托管关系型数据库服务 |
| 日文释义 | マネージドリレーショナルデータベース |
| 考试频率 | ⭐⭐⭐⭐⭐ |
| 易混淆 | Aurora / DynamoDB / EC2 自建数据库 |

## 一句话理解

让 AWS 管理数据库基础设施、硬件预置、部分补丁和备份等工作，客户专注数据模型、访问、安全与查询。

## 核心作用

- 运行 MySQL、PostgreSQL、MariaDB、Oracle、Microsoft SQL Server 和 IBM Db2 等支持引擎。
- 提供自动备份、监控、扩容、Multi-AZ、Read Replica 等能力（具体能力依引擎与部署类型）。
- 适合订单、库存、财务和电商等需要 SQL、事务与关系约束的系统。

## 工作原理

应用通过 RDS Endpoint 和数据库端口连接实例。生产数据库通常放在私有子网，由 Security Group 限制来源。
- Multi-AZ：维护同步备用或多实例部署，用于高可用和自动故障转移。
- Read Replica：异步复制，用于分担读请求。
- Automated Backup：快照与事务日志支持保留期内 PITR。
- Manual Snapshot：保存某个时刻的实例状态，需显式删除。

## Cloud Practitioner 考点

- RDS 是托管关系数据库；减少硬件、备份、补丁等运维。
- 托管不代表客户无需管理数据、账号、访问和配置。

## SAA-C03 考点

- 高可用 → Multi-AZ；读取扩展 → Read Replica。
- PITR 依赖自动备份/事务日志；不要把手动 Snapshot 与任意时间点恢复混为一谈。
- Read Replica 可用于报表和读多工作负载，但不直接扩展主库写入。
- 评估跨 Region Read Replica、自动备份复制和 AWS Backup 的不同目标。

## 常见误区

- Multi-AZ 备用实例不是给应用做普通读扩展。
- RDS 不会替客户优化所有 SQL、索引和 Schema。
- Public Access = No 不代表无需 Security Group 与路由设计。
- “托管”不等于 AWS 自动替客户决定备份保留期和恢复流程。

## 易混淆服务

- Aurora：AWS 云原生关系型引擎，分布式存储与更强读扩展。
- DynamoDB：NoSQL Key-Value / Document，按访问模式设计。
- EC2 自建数据库：保留最大控制，但客户承担 OS、数据库软件、高可用、备份和补丁。

## 面试高频问题

1. Multi-AZ 与 Read Replica 有什么区别？
2. RDS 发生主库故障时如何恢复？
3. 如何保护数据库凭据并限制网络访问？
4. 为什么不直接把 MySQL 安装在 EC2？

## 重点记忆

**SQL / JOIN / 事务 → RDS；高可用 → Multi-AZ；读扩展 → Read Replica。**

## 关联服务

Aurora、DMS、AWS Backup、Secrets Manager、KMS、CloudWatch、VPC。

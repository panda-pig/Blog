---
title: Amazon RDS
fullName: Amazon Relational Database Service
description: 托管 MySQL、PostgreSQL 等关系型引擎，减少基础设施、补丁与备份运维。
service: RDS
category: database
kind: service
lang: zh
frequency: "考试频率 ★★★★★"
date: 2026-07-29
updated: 2026-07-29
tags: [Database, Relational, SAA-C03]
notionId: 3a6964dc-ce4a-81a2-9c3d-ebba79e9df68
notionUrl: https://app.notion.com/p/3a6964dcce4a81a29c3debba79e9df68
notionUpdated: "2026-07-29T08:10:20.563Z"
---

## 一句话理解

> RDS 适合需要 SQL、JOIN、事务和关系约束的业务；客户仍负责数据模型、查询、账号与访问控制。

## 核心作用

- 应用通过 Endpoint 连接数据库，生产实例通常放在私有子网并由 Security Group 限制来源。
- Multi-AZ 用于高可用和自动故障转移；Read Replica 异步复制并扩展读取。
- Automated Backup 和事务日志支持保留期内 PITR；Manual Snapshot 保留指定时刻状态。

## 考试重点

- 高可用选择 Multi-AZ，读取扩展选择 Read Replica。
- RDS 托管基础设施，但客户仍要决定备份保留期、权限和恢复流程。
- 跨 Region 只读副本、备份复制与 AWS Backup 的目标不同。

## 常见误区

- Multi-AZ 的备用实例通常不用于普通读扩展。
- RDS 不会自动替客户优化所有 SQL、索引和 Schema。

## 重点记忆

> **SQL / JOIN / 事务 → RDS；高可用 → Multi-AZ；读扩展 → Read Replica。**

## 关联服务

Aurora、DMS、AWS Backup、Secrets Manager、KMS、CloudWatch。

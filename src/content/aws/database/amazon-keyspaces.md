---
title: "Amazon Keyspaces"
fullName: "Amazon Keyspaces (for Apache Cassandra)"
description: "面向 Cassandra 兼容工作负载的 Serverless 托管宽列数据库。"
service: "Amazon Keyspaces"
category: database
kind: topic
lang: zh
topicKey: "Amazon Keyspaces"
frequency: "SAA 中频"
date: 2026-09-29
updated: 2026-09-29
tags: ["Keyspaces", "Cassandra", "database", "serverless"]
notionId: 3e9964dc-ce4a-81da-aeac-f438b6119462
notionUrl: https://app.notion.com/p/3e9964dcce4a81daaeacf438b6119462
notionUpdated: "2026-09-28T08:56:22.083Z"
---

## 一句话理解

Amazon Keyspaces 是兼容 Apache Cassandra CQL 的 Serverless 宽列数据库：无需管理 Cassandra Cluster、Node、Patch 或 Replication。

## 核心特点

- 使用 CQL 与常见 Cassandra Driver，适合迁移 Cassandra 兼容应用。
- 计算与存储按需扩展，支持 On-demand 与 Provisioned Capacity。
- 数据默认跨多个 Availability Zone 复制，不需要自行管理 Replica。
- 使用 IAM、KMS、VPC Endpoint、CloudTrail 与 CloudWatch 构建安全和可观察性。
- Partition Key 决定数据分布；糟糕的 Key 设计仍会造成 Hot Partition。

## 与相邻服务的边界

- DynamoDB：AWS 原生 Key-value / Document API，功能生态更完整，但不兼容 CQL。
- DocumentDB：面向 MongoDB 兼容文档模型。
- RDS / Aurora：关系模型、SQL、Join 与事务语义。
- 自建 Cassandra on EC2 / EKS：控制力更高，但需要自己运维节点、修复、扩缩和升级。

## 场景判断

已有 Cassandra 应用，希望保留 CQL 与 Driver，同时消除集群运维 → Keyspaces。需要关系查询、完整 MongoDB 兼容或自定义 Cassandra 运维控制时，应选择相邻方案。

## 重点记忆

**兼容 Cassandra 不等于运行自己的 Cassandra 集群；Keyspaces 托管底层容量与复制，但数据模型和 Partition Key 设计仍由应用负责。**

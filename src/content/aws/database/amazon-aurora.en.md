---
title: Amazon Aurora
fullName: "Amazon Aurora"
description: A MySQL/PostgreSQL-compatible cloud-native relational database with separated compute and distributed cluster storage.
service: Aurora
category: database
kind: service
lang: en
frequency: "Exam frequency ⭐⭐⭐⭐⭐"
date: 2026-07-29
updated: 2026-07-30
tags: [Database, Relational, Multi-AZ]
notionId: 3a6964dc-ce4a-8118-949e-f11c86e47043
notionUrl: https://app.notion.com/p/3a6964dcce4a8118949ef11c86e47043
notionUpdated: "2026-07-29T08:10:24.915Z"
---

## Basic Information

| Field | Details |
| --- | --- |
| English name | Amazon Aurora |
| Full name | Amazon Aurora |
| Chinese description | AWS 云原生关系型数据库 |
| Japanese description | クラウドネイティブリレーショナルデータベース |
| Exam frequency | ⭐⭐⭐⭐⭐ |
| Often confused with | RDS 常规引擎 / DynamoDB |

## In one sentence

> Aurora preserves SQL and transaction semantics while using distributed storage across three AZs for durability, availability, and read scaling.

## Core purpose

- Cluster storage keeps six copies across three AZs; that does not mean six database instances.
- One writer handles writes, and up to 15 Aurora replicas can scale reads and join failover.
- The cluster endpoint targets the writer; the reader endpoint balances across readers.

## Exam focus

- MySQL/PostgreSQL compatibility plus cloud-native high performance and availability point to Aurora.
- Aurora Global Database supports cross-Region reads and disaster recovery, not ordinary Multi-AZ.
- Serverless v2 adjusts compute capacity but does not remove database-design or cost management.

## Common misconceptions

- Aurora does not support every RDS database engine.
- Fifteen replicas means reader instances, not fifteen independent storage copies.

## Key takeaway

> **MySQL/PostgreSQL compatibility + distributed cloud-native storage + multiple readers → Aurora.**

## Related services

RDS, Global Database, AWS Backup, DMS, Secrets Manager.

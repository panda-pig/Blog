---
title: Amazon DynamoDB
fullName: "Amazon DynamoDB"
description: A serverless key-value/document database designed around primary-key access patterns, automatic scaling, and low latency.
service: DynamoDB
category: database
kind: service
lang: en
frequency: "Exam frequency ⭐⭐⭐⭐⭐"
date: 2026-07-29
updated: 2026-09-29
tags: [Database, NoSQL, Serverless]
notionId: 3a6964dc-ce4a-8198-a171-ce08f0f442b0
notionUrl: https://app.notion.com/p/3a6964dcce4a8198a171ce08f0f442b0
notionUpdated: "2026-09-28T08:57:42.791Z"
---

## Basic Information

| Field | Details |
| --- | --- |
| English name | Amazon DynamoDB |
| Full name | Amazon DynamoDB |
| Chinese description | 无服务器 Key-Value 与文档型 NoSQL 数据库 |
| Japanese description | サーバーレス NoSQL データベース |
| Exam frequency | ⭐⭐⭐⭐⭐ |
| Often confused with | RDS / DocumentDB / DAX |

## In one sentence

> DynamoDB organizes tables, items, and attributes. Define access patterns first, then design partition keys, sort keys, and indexes.

## Core purpose

- Partition keys distribute data; high-cardinality, even access helps avoid hot partitions.
- Query specifies a partition key and optional sort-key conditions; Scan reads broadly and normally consumes more capacity.
- Global Tables provide multi-Region multi-active access; DAX caches repeated eventually consistent reads.

## Exam focus

- Serverless NoSQL, large-scale low latency, and automatic scaling point to DynamoDB.
- Shopping carts, sessions, game state, IoT, and event metadata are common use cases.
- Choose consistency, capacity mode, indexes, TTL, Streams, and backups from access patterns.

## Common misconceptions

- NoSQL does not mean no schema; primary-key structure still matters.
- DynamoDB is not designed for arbitrary joins or ad hoc relational queries.

## Key takeaway

> **Table → item → attribute; define access patterns before partition keys; prefer Query to Scan.**

## Related services

DAX, Lambda, API Gateway, Streams, Global Tables, AWS Backup.

+## Update: streams and access patterns

- DynamoDB Streams captures item creates, updates, and deletes in order and retains records for 24 hours.
- Evaluate Kinesis Data Streams for DynamoDB when longer retention or more independent stream consumers are required.
- The partition key controls distribution; add a GSI for a new access pattern instead of scanning the table.
- PITR, on-demand backup, Global Tables, and Streams solve recovery, backup, cross-Region access, and change events respectively.

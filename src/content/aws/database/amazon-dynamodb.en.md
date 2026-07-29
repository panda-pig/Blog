---
title: Amazon DynamoDB
fullName: Amazon DynamoDB
description: A serverless key-value/document database designed around primary-key access patterns, automatic scaling, and low latency.
service: DynamoDB
category: database
kind: service
lang: en
frequency: "Exam frequency ★★★★★"
date: 2026-07-29
updated: 2026-07-29
tags: [Database, NoSQL, Serverless]
notionId: 3a6964dc-ce4a-8198-a171-ce08f0f442b0
notionUrl: https://app.notion.com/p/3a6964dcce4a8198a171ce08f0f442b0
notionUpdated: "2026-07-29T08:10:28.597Z"
---

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

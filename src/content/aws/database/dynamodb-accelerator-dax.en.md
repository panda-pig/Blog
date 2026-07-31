---
title: DynamoDB Accelerator (DAX)
fullName: "DynamoDB Accelerator (DAX)"
description: A managed in-memory cache compatible with DynamoDB APIs that reduces repeated eventually consistent reads to microseconds.
service: DAX
category: database
kind: service
lang: en
frequency: "Exam frequency ⭐⭐⭐⭐"
date: 2026-07-29
updated: 2026-07-30
tags: [Database, DynamoDB, Cache]
notionId: 3ac964dc-ce4a-815c-be49-c16168d8604b
notionUrl: https://app.notion.com/p/3ac964dcce4a815cbe49c16168d8604b
notionUpdated: "2026-07-29T08:07:57.540Z"
---

## Basic Information

| Field | Details |
| --- | --- |
| English name | DynamoDB Accelerator (DAX) |
| Full name | DynamoDB Accelerator (DAX) |
| Chinese description | DynamoDB 专用内存缓存 |
| Japanese description | DynamoDB 専用インメモリキャッシュ |
| Exam frequency | ⭐⭐⭐⭐ |
| Often confused with | ElastiCache / RDS Read Replica |

## In one sentence

> DAX sits between an application and DynamoDB and caches repeated key-based reads; DynamoDB remains the durable source.

## Core purpose

- Applications use the DAX client; hits return directly and misses read DynamoDB then populate cache.
- It fits read-heavy, repeated-key, and bursty workloads.
- A multi-AZ DAX cluster can improve cache-layer availability.

## Exam focus

- DynamoDB-only cache and microsecond reads point to DAX.
- Strongly consistent reads, write-heavy workloads, or low hit rates do not fit DAX well.
- For RDS, arbitrary APIs, or sessions, usually consider ElastiCache.

## Common misconceptions

- DAX does not replace DynamoDB.
- Microsecond latency does not guarantee that every request is a cache hit.

## Key takeaway

> **DynamoDB + repeated eventually consistent reads + microseconds → DAX.**

## Related services

DynamoDB, ElastiCache, Global Tables, Lambda.

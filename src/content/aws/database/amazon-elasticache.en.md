---
title: Amazon ElastiCache
fullName: "Amazon ElastiCache"
description: Managed in-memory caching of hot data with Valkey, Redis OSS, or Memcached.
service: ElastiCache
category: database
kind: service
lang: en
frequency: "Exam frequency ⭐⭐⭐⭐"
date: 2026-07-29
updated: 2026-07-30
tags: [Database, Cache, Performance]
notionId: 3a6964dc-ce4a-819f-a367-c7390c1af894
notionUrl: https://app.notion.com/p/3a6964dcce4a819fa367c7390c1af894
notionUpdated: "2026-07-29T08:10:32.594Z"
---

## Basic Information

| Field | Details |
| --- | --- |
| English name | Amazon ElastiCache |
| Full name | Amazon ElastiCache |
| Chinese name | 托管内存缓存 |
| Japanese name | マネージドインメモリキャッシュ |
| Exam frequency | ⭐⭐⭐⭐ |
| Often confused with | DAX / RDS Read Replica / CloudFront / MemoryDB |

## In one sentence

> ElastiCache moves repeatedly read hot data into memory to reduce database load and response latency.

## Core purpose

- A cache hit returns directly; a miss reads from the database and repopulates according to policy.
- Cache-aside is flexible and common; write-through updates cache on writes but adds work to the write path.
- Valkey/Redis OSS offer rich structures and high availability; Memcached is lighter.

## Exam focus

- In-memory cache, Redis/Valkey/Memcached, and reduced database load point to ElastiCache.
- DAX is DynamoDB-only; read replicas hold complete databases; CloudFront caches edge HTTP content.
- Design TTL, eviction, invalidation, failure behavior, and stampede protection.

## Common misconceptions

- A cache is normally not the durable source of truth.
- Strongly consistent, frequently changing data may not be suitable for caching.

## Key takeaway

> **Repeated reads + hot data + in-memory access → ElastiCache.**

## Related services

RDS, Aurora, DAX, CloudFront, EC2, Lambda.

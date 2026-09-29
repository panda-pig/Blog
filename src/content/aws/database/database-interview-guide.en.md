---
title: "AWS Database Interview Guide"
fullName: "AWS Database Interview Guide"
description: "Choose RDS, Aurora, DynamoDB, and caching services through data model, access pattern, scaling, availability, and recovery."
service: "AWS Database"
category: database
kind: topic
lang: en
topicKey: "AWS Database Interview Guide"
frequency: "面试高频"
date: 2026-09-29
updated: 2026-09-29
tags: ["database", "interview", "RDS", "DynamoDB"]
notionId: 3a6964dc-ce4a-81ea-b432-de43eb476dfa
notionUrl: https://app.notion.com/p/3a6964dcce4a81eab432de43eb476dfa
notionUpdated: "2026-09-27T06:24:33.069Z"
---

## Start with access patterns

Database selection begins with **data model, query patterns, consistency, latency, throughput, scaling, and recovery objectives**, not with a service name.

| Requirement | Candidate |
| --- | --- |
| Relational model, SQL, joins | RDS / Aurora |
| Key-value/document, single-digit-ms latency, horizontal scale | DynamoDB |
| Cassandra CQL compatibility | Keyspaces |
| MongoDB-compatible documents | DocumentDB |
| Graph relationships | Neptune |
| Time series | Timestream |
| Microsecond cache, sessions, leaderboard | ElastiCache |

## Frequent questions

- RDS Multi-AZ is for availability, not read scale; read replicas scale reads and can be promoted.
- Aurora's writer endpoint handles writes; its reader endpoint is a common entry for reads.
- RDS Proxy pools connections for Lambda connection storms; it is not a query cache.
- A DynamoDB partition key controls distribution; GSIs add access patterns, while DAX caches eventually consistent reads.
- Cache-aside and write-through need an invalidation strategy, TTL, and stampede protection.
- Backup/PITR, Multi-AZ, and cross-Region DR are different capabilities.

## Answer structure

Data model → access pattern → capacity and partitioning → HA → backup/DR → security → monitoring and cost.

## Remember

**Describe data and queries before naming a service. Availability, read scaling, caching, and backup are four separate problems.**

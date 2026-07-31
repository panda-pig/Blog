---
title: Amazon Neptune
fullName: "Amazon Neptune"
description: A managed graph database for expressing and traversing complex relationships with vertices, edges, and properties.
service: Neptune
category: database
kind: service
lang: en
frequency: "Exam frequency ⭐⭐"
date: 2026-07-29
updated: 2026-07-30
tags: [Database, Graph, Analytics]
notionId: 3a6964dc-ce4a-812c-aa72-e53ae5cfe29f
notionUrl: https://app.notion.com/p/3a6964dcce4a812caa72e53ae5cfe29f
notionUpdated: "2026-07-29T08:10:36.664Z"
---

## Basic Information

| Field | Details |
| --- | --- |
| English name | Amazon Neptune |
| Full name | Amazon Neptune |
| Chinese description | 托管图数据库 |
| Japanese description | マネージドグラフデータベース |
| Exam frequency | ⭐⭐ |
| Often confused with | RDS / DocumentDB |

## In one sentence

> When relationship paths matter more than individual records, Neptune is more natural than many layers of joins.

## Core purpose

- It supports graph models such as property graphs and RDF and optimizes multi-hop traversal and pattern matching.
- Use cases include social networks, fraud detection, recommendations, knowledge graphs, and network topology.
- It provides managed backups, failover, and automatically growing storage.

## Exam focus

- Graph, fraud detection, recommendation, or knowledge graph usually points to Neptune.
- Ordinary foreign-key relationships do not automatically require a graph database.
- The advantage is strongest when relationship traversal is the core problem.

## Common misconceptions

- Neptune is not a universal answer to every complex database problem.
- Exact capacity and quotas should be checked for the current Region and service version.

## Key takeaway

> **When complex relationship paths are the main data, choose Neptune.**

## Related services

DocumentDB, DynamoDB, RDS, S3, Analytics.

---
title: "DAX vs ElastiCache vs Read Replica vs CloudFront"
fullName: "DAX vs ElastiCache vs Read Replica vs CloudFront"
description: "Choose DAX for DynamoDB caching, ElastiCache for application caching, read replicas for database reads, and CloudFront for edge delivery."
service: "AWS Compare"
category: compare
kind: compare
lang: en
topicKey: "DAX vs ElastiCache vs Read Replica vs CloudFront"
frequency: "Study summary"
date: 2026-07-30
updated: 2026-07-30
tags: ["compare","DAX vs ElastiCache vs Read Replica vs CloudFront","AWS"]
notionId: 3ac964dc-ce4a-81ca-876d-ed2c254cc201
notionUrl: https://app.notion.com/p/3ac964dcce4a81ca876ded2c254cc201
notionUpdated: "2026-07-29T08:07:59.756Z"
---

## In one sentence

> Choose DAX for DynamoDB caching, ElastiCache for application caching, read replicas for database reads, and CloudFront for edge delivery.

## Key points

- DAX is an in-memory cache specifically for DynamoDB API-compatible read acceleration.
- ElastiCache provides Redis, Valkey, or Memcached for general application cache patterns.
- RDS or Aurora read replicas scale relational read queries but remain database instances.

## Exam takeaway

> CloudFront caches HTTP content near users and solves a different edge-delivery problem.

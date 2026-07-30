---
title: "Design High-Performing Architectures"
fullName: "Design High-Performing Architectures"
description: "Match compute, storage, database, networking, and caching choices to the workload’s access patterns and bottlenecks."
service: "SAA-C03"
category: saa-c03
kind: topic
lang: en
topicKey: "高性能架构设计"
frequency: "Study summary"
date: 2026-07-30
updated: 2026-07-30
tags: ["saa-c03","Design High-Performing Architectures","AWS"]
notionId: 3a6964dc-ce4a-8177-89e9-de191f6694c9
notionUrl: https://app.notion.com/p/3a6964dcce4a817789e9de191f6694c9
notionUpdated: "2026-07-29T08:13:11.121Z"
---

## In one sentence

> Match compute, storage, database, networking, and caching choices to the workload’s access patterns and bottlenecks.

## Key points

- Scale horizontally when possible and use managed or serverless services where their scaling model fits.
- Choose storage by object, block, or file access and databases by relational, key-value, document, graph, or cache patterns.
- Use CloudFront, read replicas, DAX, or ElastiCache only when their cache layer matches the data and consistency needs.

## Exam takeaway

> Measure latency, throughput, concurrency, and cost; do not optimize from service names alone.

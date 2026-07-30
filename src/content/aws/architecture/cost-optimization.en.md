---
title: "Cost Optimization"
fullName: "Cost Optimization"
description: "Continuously matches resource size, capacity, and pricing model while preserving reliability, security, and performance goals."
service: "Architecture"
category: architecture
kind: topic
lang: en
topicKey: "成本优化"
frequency: "Exam frequency ⭐⭐⭐⭐⭐"
date: 2026-07-30
updated: 2026-07-30
tags: ["Architecture","Cost Optimization","FinOps"]
notionId: 3a6964dc-ce4a-8166-bb96-e568552dd8ce
notionUrl: https://app.notion.com/p/3a6964dcce4a8166bb96e568552dd8ce
notionUpdated: "2026-07-30T01:08:06.892Z"
---

## Basic Information

| Field | Details |
| --- | --- |
| English name | Cost Optimization |
| Full name | Cost Optimization |
| Chinese name | 成本优化 |
| Japanese name | コスト最適化 |
| Exam frequency | ⭐⭐⭐⭐⭐ |
| Often confused with | 性能优化 |

## In one sentence

> Cost optimization is not a one-time budget cut; it is continuous measurement, selection, monitoring, and improvement.

## Four core actions

1. Right Sizing: choose compute, storage, and database size from real metrics.
2. Match Supply to Demand: use Auto Scaling, serverless, and schedules to reduce idle capacity.
3. Choose Pricing Model: match commitment and interruption tolerance to pricing.
4. Measure and Govern: use tags, budgets, alerts, and cost allocation continuously.

## EC2 pricing choices

- On-Demand: short-term, unpredictable, or experimental workloads.
- Savings Plans / Reserved Instances: stable, long-term usage that can be committed.
- Spot: interruptible, fault-tolerant, batch, and retryable workloads.
- Dedicated Host: licensing, compliance, or physical-host control.

## Exam focus

- Evaluate interruption tolerance, workload stability, term, and licensing before choosing pricing.
- Auto Scaling, S3 Lifecycle, serverless, and data-transfer paths all affect total cost.
- Savings must not break RTO, RPO, security, or performance requirements.
- The cheapest individual service does not always create the lowest total architecture cost.

## Common misconceptions

- Serverless is not always cheapest, and Spot is unsuitable for non-interruptible work.
- Buying a commitment discount does not complete cost optimization.
- Compute-only analysis misses storage, logs, NAT Gateway, and data transfer.

## Key takeaway

> **Start from business goals, then match capacity, size, and pricing model—and keep measuring.**

## Related services

Cost Explorer, AWS Budgets, Compute Optimizer, Trusted Advisor, Auto Scaling, Savings Plans, S3 Lifecycle.

---
title: "EC2 Placement Groups: Cluster, Spread, and Partition"
fullName: "Amazon EC2 Placement Groups"
description: "Choose an EC2 placement strategy based on network performance, per-instance isolation, or partition-level fault domains."
service: "Amazon EC2"
category: compute
kind: topic
lang: en
topicKey: "EC2 Placement Groups"
frequency: "SAA 高频"
date: 2026-09-29
updated: 2026-09-29
tags: ["EC2", "placement group", "high availability", "HPC"]
notionId: 3e8964dc-ce4a-8154-a5b9-c2100ce5ced4
notionUrl: https://app.notion.com/p/3e8964dcce4a8154a5b9c2100ce5ced4
notionUpdated: "2026-09-27T05:01:04.233Z"
---

## In one sentence

A placement group controls the relative physical placement of EC2 instances: place them close for network performance or separate them to contain correlated failures.

## Strategies

| Strategy | Goal | Scope and limit | Typical use |
| --- | --- | --- | --- |
| Cluster | Low latency and high throughput | One AZ; concentrated failure domain | HPC and tightly coupled workloads |
| Spread | Isolate a small number of critical instances | Up to 7 running instances per AZ per group | Critical nodes |
| Partition | Group many nodes into fault domains | Up to 7 partitions per AZ; many instances per partition | HDFS, Cassandra, Kafka |

- Cluster optimizes performance; it is not a Multi-AZ HA design.
- The “7” limit means instances for Spread and partitions for Partition.
- A partition is a set of isolated racks, not one rack.
- Placement groups are different from capacity reservations, dedicated hosts, and Auto Scaling groups.

## Decision cues

- Extremely low latency and node-to-node throughput → Cluster.
- A few critical instances that should not share hardware → Spread.
- A large distributed system with replica-aware placement → Partition.

## Remember

**Cluster trades concentration for speed, Spread isolates individual instances, and Partition isolates groups at scale.**

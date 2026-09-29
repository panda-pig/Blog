---
title: "Amazon Keyspaces"
fullName: "Amazon Keyspaces (for Apache Cassandra)"
description: "A serverless, managed wide-column database for Cassandra-compatible workloads."
service: "Amazon Keyspaces"
category: database
kind: topic
lang: en
topicKey: "Amazon Keyspaces"
frequency: "SAA 中频"
date: 2026-09-29
updated: 2026-09-29
tags: ["Keyspaces", "Cassandra", "database", "serverless"]
notionId: 3e9964dc-ce4a-81da-aeac-f438b6119462
notionUrl: https://app.notion.com/p/3e9964dcce4a81daaeacf438b6119462
notionUpdated: "2026-09-28T08:56:22.083Z"
---

## In one sentence

Amazon Keyspaces is a serverless, Cassandra-compatible wide-column database that removes the need to operate clusters, nodes, patches, and replication.

## Core characteristics

- Uses CQL and common Cassandra drivers for compatible application migrations.
- Scales compute and storage with on-demand or provisioned capacity modes.
- Replicates data across multiple Availability Zones without user-managed replicas.
- Integrates with IAM, KMS, VPC endpoints, CloudTrail, and CloudWatch.
- The partition key still controls distribution; poor key design can create hot partitions.

## Service boundaries

- DynamoDB: AWS-native key-value/document APIs and a broader native ecosystem, but no CQL compatibility.
- DocumentDB: MongoDB-compatible document workloads.
- RDS / Aurora: relational data, SQL, joins, and relational transactions.
- Self-managed Cassandra on EC2 / EKS: more control, but you own nodes, repair, scaling, and upgrades.

## Decision cue

Choose Keyspaces when an existing Cassandra application should retain CQL and drivers while eliminating cluster operations.

## Remember

**Cassandra compatibility does not mean running your own Cassandra cluster. Keyspaces manages capacity and replication; the application still owns its data model and partition-key design.**

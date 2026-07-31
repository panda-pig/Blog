---
title: AWS Elastic Disaster Recovery
fullName: "AWS Elastic Disaster Recovery"
description: Continuous block-level replication of servers to AWS for rapid recovery-instance launch during a disaster.
service: AWS DRS
category: storage
kind: service
lang: en
frequency: "Exam frequency ⭐⭐⭐⭐"
date: 2026-07-29
updated: 2026-07-30
tags: [Storage, Disaster Recovery, Architecture]
notionId: 3ac964dc-ce4a-81f3-bec3-cd5079cbbaa7
notionUrl: https://app.notion.com/p/3ac964dcce4a81f3bec3cd5079cbbaa7
notionUpdated: "2026-07-29T04:39:41.992Z"
---

## Basic Information

| Field | Details |
| --- | --- |
| English name | AWS Elastic Disaster Recovery (AWS DRS) |
| Full name | AWS Elastic Disaster Recovery |
| Chinese description | AWS 弹性灾难恢复 |
| Japanese description | AWS のマネージド災害復旧サービス |
| Exam frequency | ⭐⭐⭐⭐ |
| Often confused with | AWS Backup / EBS Snapshot / Storage Gateway |

## In one sentence

> AWS DRS protects physical, virtual, and other-cloud servers with continuous block replication to reduce RPO and RTO.

## Core purpose

- An agent copies changed blocks from source servers into a low-cost AWS staging area.
- Tests or incidents launch recovery EC2 instances, followed by validation, failover, and later failback planning.
- Continuous replication narrows data loss, but networking, DNS, launch settings, and application dependencies still require testing.

## Exam focus

- Disaster recovery, continuous replication, and rapid full-server recovery point to AWS DRS.
- EBS snapshots protect volumes, AWS Backup governs multiple services, and Storage Gateway provides hybrid storage interfaces.
- Architecture questions balance RPO, RTO, recovery drills, and standby-environment cost.

## Common misconceptions

- DRS is not an ordinary long-term backup service.
- Continuous replication does not remove the need to test consistency, DNS, and application dependencies.

## Key takeaway

> **Backup protects data; DRS brings complete servers and services back online faster.**

## Related services

EC2, AWS Backup, EBS Snapshot, Route 53, Storage Gateway.

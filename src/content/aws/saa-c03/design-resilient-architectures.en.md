---
title: "Design Resilient Architectures"
fullName: "Design Resilient Architectures"
description: "Build recoverable systems by removing single points of failure and matching redundancy to RTO and RPO."
service: "SAA-C03"
category: saa-c03
kind: topic
lang: en
topicKey: "弹性架构设计"
frequency: "Study summary"
date: 2026-07-30
updated: 2026-08-15
tags: ["saa-c03","Design Resilient Architectures","AWS"]
notionId: 3a6964dc-ce4a-811a-9170-e1ab378bb690
notionUrl: https://app.notion.com/p/3a6964dcce4a811a9170e1ab378bb690
notionUpdated: "2026-08-13T00:40:44.044Z"
---

## In one sentence

> Build recoverable systems by removing single points of failure and matching redundancy to RTO and RPO.

## Key points

- Use multi-AZ compute, load balancing, Auto Scaling, and appropriate data replication.
- Separate high availability, backup, disaster recovery, and fault tolerance because they solve different failure scopes.
- Choose Multi-AZ for regional availability and Multi-Region when regional failure or global continuity must be addressed.

## Exam takeaway

> Test restore, failover, dependency recovery, and operational runbooks regularly.

## Failure boundaries

- A Region is a geographic failure boundary containing multiple isolated AZs.
- EC2 instances, EBS volumes, and subnets are zonal resources and need cross-AZ redundancy to survive an AZ failure.
- Multi-AZ also requires load balancing, data-tier failover, capacity, and health checks.
- Multi-Region additionally requires replication, routing, RTO / RPO, failover, and exercises.
- Regional managed services may use multiple AZs internally, but resilience must still be verified per service.

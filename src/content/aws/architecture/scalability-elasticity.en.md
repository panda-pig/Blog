---
title: "Scalability & Elasticity"
fullName: "Scalability & Elasticity"
description: "Separates the ability to handle growth from the ability to automatically match resources to actual demand."
service: "Architecture"
category: architecture
kind: topic
lang: en
topicKey: "可扩展性与弹性"
frequency: "Exam frequency ★★★★★"
date: 2026-07-30
updated: 2026-07-30
tags: ["Architecture","Scalability","Elasticity"]
notionId: 3a6964dc-ce4a-818b-a872-e1eb3d60acd5
notionUrl: https://app.notion.com/p/3a6964dcce4a818ba872e1eb3d60acd5
notionUpdated: "2026-07-30T01:08:00.877Z"
---

## In one sentence

> Scalability means a system can grow; elasticity means capacity expands and contracts with demand.

## Core purpose

- Scale Out / In changes instance count and suits stateless, distributed applications.
- Scale Up / Down changes one instance size, but has hardware limits and may require downtime.
- An ASG uses Min, Desired, and Max as capacity boundaries and adjusts them from metrics or schedules.

## Exam focus

- Auto Scaling manages capacity while ELB manages traffic; they work together but have different jobs.
- Target Tracking follows a target metric; Scheduled Scaling fits predictable peaks.
- Scalability is not high availability; HA also requires failure-domain isolation and failover.
- Scaling plans must account for databases, service quotas, cost, and downstream throughput.

## Common misconceptions

- A scalable system does not necessarily scale back automatically during quiet periods.
- Vertical scaling is not the same as automatic elasticity.
- Auto Scaling cannot repair inefficient application code or database queries.

## Key takeaway

> **Scalability = handle growth; Elasticity = match demand; ASG = Min ≤ Desired ≤ Max.**

## Related services

EC2 Auto Scaling, Elastic Load Balancing, CloudWatch, SQS, ECS Service Auto Scaling.

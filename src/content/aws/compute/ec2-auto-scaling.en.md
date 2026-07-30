---
title: "Amazon EC2 Auto Scaling"
fullName: "Amazon EC2 Auto Scaling"
description: "Automatically adds, removes, or replaces EC2 instances so capacity follows demand within defined limits."
service: "Auto Scaling"
category: compute
kind: service
lang: en
frequency: "Exam frequency ⭐⭐⭐⭐⭐"
date: 2026-07-30
updated: 2026-07-30
tags: ["Compute","Auto Scaling","SAA-C03"]
notionId: 3a6964dc-ce4a-811a-bc62-e247c6def362
notionUrl: https://app.notion.com/p/3a6964dcce4a811abc62e247c6def362
notionUpdated: "2026-07-30T01:09:11.112Z"
---

## Basic Information

| Field | Details |
| --- | --- |
| English name | Amazon EC2 Auto Scaling |
| Full name | Amazon EC2 Auto Scaling |
| Chinese name | EC2 自动扩缩 |
| Japanese name | EC2 オートスケーリング |
| Exam frequency | ⭐⭐⭐⭐⭐ |
| Often confused with | Elastic Load Balancing / Vertical Scaling |

## In one sentence

> An Auto Scaling Group maintains EC2 capacity and health; ELB manages traffic, while ASG manages capacity.

## Core purpose

- Minimum, Desired, and Maximum define the lower bound, current target, and scaling ceiling.
- A Launch Template defines instance configuration, and an ASG can launch across AZs and replace unhealthy instances.
- CloudWatch metrics, alarms, or schedules trigger a Scaling Policy that adjusts Desired Capacity.

## Exam focus

- Target Tracking keeps a metric near a target; Step Scaling changes capacity by alarm range.
- Scheduled Scaling suits predictable peaks; Manual Scaling directly changes desired capacity.
- A common highly available pattern is ALB + Multi-AZ ASG + EC2.
- Before scale-in, consider connection draining, warm-up, local state, and downstream limits.

## Common misconceptions

- Auto Scaling does not distribute requests, and ELB does not decide instance count.
- Desired Capacity can change dynamically; it is not permanently fixed.
- A high Maximum does not guarantee databases, quotas, or budgets can support that scale.

## Key takeaway

> **Min ≤ Desired ≤ Max; Launch Template defines instances, and Scaling Policy adjusts capacity.**

## Related services

Elastic Load Balancing, CloudWatch, Launch Template, EC2, SQS.

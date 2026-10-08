---
title: "SAA Final Review"
fullName: "SAA Final Review"
description: "Review high-frequency architecture domains in order and eliminate options that violate scenario priorities."
service: "SAA-C03"
category: saa-c03
kind: topic
lang: en
topicKey: "SAA 考前速查"
frequency: "阶段性总结"
date: 2026-08-01
updated: 2026-09-29
tags: ["saa-c03", "SAA 考前速查", "AWS"]
notionId: 3a6964dc-ce4a-817c-860b-f61fe547c268
notionUrl: https://app.notion.com/p/3a6964dcce4a817c860bf61fe547c268
notionUpdated: "2026-09-28T08:57:47.312Z"
---

## Review order

1. High-frequency comparisons
2. VPC and networking
3. S3 / EBS / EFS
4. RDS / Aurora / DynamoDB
5. EC2 / Auto Scaling / ELB / Lambda
6. SQS / SNS / EventBridge
7. IAM / KMS / Organizations
8. CloudWatch / CloudTrail / Config / AWS Health
9. Artifact / Audit Manager / Control Tower
10. High availability, disaster recovery, RTO / RPO
11. Cost and performance trade-offs

## Final self-check

- Narrow a scenario to two choices using keywords.
- Explain why the remaining options violate a requirement.
- Identify priorities such as least operations, highest availability, or lowest cost.
- Draw common three-tier, event-driven, and multi-account governance architectures.

## New-topic self-check

- Explain migration with the three phases and 7Rs, and distinguish Evaluator, Discovery, Migration Hub, Transform MGN, DMS, DataSync, and Transfer Family.
- Distinguish AppSync, Amplify, Connect, SES, the three WorkSpaces delivery models, and IoT Core keywords.
- Map the former names Application Migration Service, AppStream 2.0, and WorkSpaces Web to their current service names.
- Distinguish root, IAM user, group, policy, role, and Identity Center; groups do not nest and users may join several.
- Explain implicit Deny, explicit Deny, managed / inline / resource-based policies, and Principal.
- Distinguish password policy, MFA, long-term access keys, and temporary credentials with a session token.
- Troubleshoot visibility through account → identity → Region → permission → filter / state.

## Latest exam review

1. Separate **HA, read scaling, caching, and backup/DR**; one mechanism does not solve all four.
2. ELB Active, ASG InService, target Registered, and target Healthy are different states.
3. DNS policies select answers rather than proxy requests, and TTL delays changes.
4. At-least-once delivery requires idempotent consumers; retries need DLQs, observability, and poison-message handling.
5. Savings Plans/Regional RIs address price, Capacity Reservations address capacity, and Dedicated Hosts address isolation and host control.
6. Serverless reduces server operations but not quota, cold-start, state, retry, and cost design.

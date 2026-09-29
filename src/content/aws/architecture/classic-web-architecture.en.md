---
title: "Classic Web Architecture: From One Server to Stateless Multi-AZ"
fullName: "Classic Web Architecture: From a Single Server to Stateless Multi-AZ"
description: "Evolve an AWS web application along five axes: single points, state, capacity, data, and static content."
service: "AWS Architecture"
category: architecture
kind: topic
lang: en
topicKey: "Classic Web Architecture"
frequency: "SAA 高频"
date: 2026-09-29
updated: 2026-09-29
tags: ["architecture", "multi-AZ", "stateless", "web"]
notionId: 3e9964dc-ce4a-8167-833b-ed8b7001bbed
notionUrl: https://app.notion.com/p/3e9964dcce4a8167833bed8b7001bbed
notionUpdated: "2026-09-28T04:06:59.327Z"
---

## Evolution path

A single server concentrates entry, application, session, and database state in one failure domain. A resilient architecture separates them:

1. Route 53 provides DNS.
2. CloudFront caches static and cacheable content and can pair with WAF at the edge.
3. An ALB distributes HTTP and HTTPS traffic.
4. An Auto Scaling group maintains stateless application nodes across AZs.
5. Sessions move to ElastiCache or DynamoDB.
6. Static files and uploads move to S3.
7. RDS or Aurora uses Multi-AZ for availability and read replicas when read scale is needed.
8. SQS, EventBridge, or Step Functions decouples background work and long-running workflows.

## Why stateless matters

If sessions, uploads, or job state live only on one host, instance replacement and horizontal scaling break user experience. Stateless does not mean “no state”; it means placing state in reliable managed stores that every node can access.

## Availability is not backup

Multi-AZ, health checks, and replacement protect availability. Snapshots, PITR, cross-Region copies, and recovery exercises protect recoverability. Both matter, but they solve different problems.

## Common mistakes

- An ALB alone is not HA without multiple AZs and healthy backends.
- Sticky sessions can be a bridge, not a replacement for stateless design.
- Read replicas scale reads; they do not replace Multi-AZ failover.
- NAT gateways should be designed per AZ to avoid cross-AZ dependencies.
- Serverless architectures still require quota, retry, idempotency, observability, and cost design.

## Remember

**Remove single points of failure, externalize state, then design scaling, fault domains, security, observability, and recovery for every layer.**

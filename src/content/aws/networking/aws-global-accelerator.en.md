---
title: "AWS Global Accelerator"
fullName: "AWS Global Accelerator"
description: "Provides static anycast IP addresses and routes TCP/UDP traffic over the AWS global network to healthy regional endpoints."
service: "AWS Global Accelerator"
category: networking
kind: service
lang: en
topicKey: "AWS Global Accelerator"
frequency: "Exam frequency ⭐⭐⭐⭐"
date: 2026-07-30
updated: 2026-09-29
tags: ["networking","AWS Global Accelerator","AWS"]
notionId: 3a6964dc-ce4a-814f-9602-eca85431f9f2
notionUrl: https://app.notion.com/p/3a6964dcce4a814f9602eca85431f9f2
notionUpdated: "2026-09-28T05:30:48.778Z"
---

## Basic Information

| Field | Details |
| --- | --- |
| English name | AWS Global Accelerator |
| Full name | AWS Global Accelerator |
| Chinese description | 全球网络加速 |
| Japanese description | グローバルアクセラレーター |
| Exam frequency | ⭐⭐⭐⭐ |
| Often confused with | CloudFront / Route 53 / Direct Connect |

## In one sentence

> Provides static anycast IP addresses and routes TCP/UDP traffic over the AWS global network to healthy regional endpoints.

## Key points

- It improves path stability and failover for global applications without caching content.
- Endpoints can include ALB, NLB, EC2 instances, and Elastic IP addresses.
- Health checks move traffic away from unhealthy endpoints.

## Exam takeaway

> Choose CloudFront for caching HTTP content; choose Global Accelerator for global network acceleration and static entry IPs.

## Update: boundary with CloudFront

- Global Accelerator provides two static Anycast IPs, brings TCP/UDP traffic onto the AWS global network early, and selects Regions by endpoint health and weight.
- It does not cache content or understand HTTP paths. Use CloudFront for caching, edge WAF features, and HTTP delivery.
- Route 53 selects DNS answers; Global Accelerator optimizes the connection entry and network path. DNS answer changes do not move existing connections.

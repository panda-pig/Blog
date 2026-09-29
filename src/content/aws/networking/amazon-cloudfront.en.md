---
title: "Amazon CloudFront"
fullName: "Amazon CloudFront"
description: "A content delivery network that caches content at edge locations and protects private origins."
service: "Amazon CloudFront"
category: networking
kind: service
lang: en
topicKey: "Amazon CloudFront"
frequency: "Exam frequency ⭐⭐⭐⭐⭐"
date: 2026-07-30
updated: 2026-09-29
tags: ["networking","Amazon CloudFront","AWS"]
notionId: 3a6964dc-ce4a-8198-a643-ce1e9079cf9c
notionUrl: https://app.notion.com/p/3a6964dcce4a8198a643ce1e9079cf9c
notionUpdated: "2026-09-28T08:50:26.931Z"
---

## Basic Information

| Field | Details |
| --- | --- |
| English name | Amazon CloudFront |
| Full name | Amazon CloudFront |
| Chinese description | 内容分发网络（CDN） |
| Japanese description | コンテンツ配信ネットワーク |
| Exam frequency | ⭐⭐⭐⭐⭐ |
| Often confused with | Route 53 / Global Accelerator / S3 Transfer Acceleration |

## In one sentence

> A content delivery network that caches content at edge locations and protects private origins.

## Key points

- CloudFront reduces latency by serving cached content closer to users.
- Origins can include S3, ALB, EC2, API Gateway, and custom HTTP servers.
- Use Origin Access Control to keep an S3 origin private rather than exposing the bucket.

## Exam takeaway

> Cache policies, TTLs, invalidations, HTTPS, WAF, and signed URLs or cookies are common design points.

+## Update: private origins and edge controls

- Use Origin Access Control plus a bucket policy for a private S3 origin; S3 website endpoints do not support OAC.
- A VPC origin lets CloudFront connect privately to an ALB, NLB, or EC2 instance without exposing the backend directly to the Internet.
- Cache invalidation expires selected paths before their TTL so the next request returns to the origin.
- Geo restriction allows or blocks countries at the distribution level; combine WAF or application authorization for finer control.

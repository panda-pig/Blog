---
title: "AWS PrivateLink and VPC Endpoints"
fullName: "AWS PrivateLink & VPC Endpoints"
description: "Private access to AWS or endpoint services from a VPC without traversing the public internet."
service: "AWS PrivateLink & VPC Endpoints"
category: networking
kind: service
lang: en
topicKey: "AWS PrivateLink & VPC Endpoints"
frequency: "Exam frequency ⭐⭐⭐⭐⭐"
date: 2026-07-30
updated: 2026-07-31
tags: ["networking","AWS PrivateLink & VPC Endpoints","AWS"]
notionId: 3a6964dc-ce4a-81f7-8e00-fab34be32604
notionUrl: https://app.notion.com/p/3a6964dcce4a81f78e00fab34be32604
notionUpdated: "2026-07-30T04:29:21.069Z"
---

## Basic Information

| Field | Details |
| --- | --- |
| English name | AWS PrivateLink & VPC Endpoints |
| Full name | AWS PrivateLink & VPC Endpoints |
| Chinese description | 私有服务访问 |
| Japanese description | プライベートサービス接続 |
| Exam frequency | ⭐⭐⭐⭐⭐ |
| Often confused with | NAT Gateway / VPC Peering / Site-to-Site VPN |

## In one sentence

> Private access to AWS or endpoint services from a VPC without traversing the public internet.

## Key points

- Gateway Endpoints support S3 and DynamoDB and are configured in route tables.
- Interface Endpoints create private ENIs and use AWS PrivateLink for many services.
- Endpoint policies, security groups, DNS, and service permissions still control access.

## Exam takeaway

> An endpoint provides a private path; it does not automatically grant authorization.

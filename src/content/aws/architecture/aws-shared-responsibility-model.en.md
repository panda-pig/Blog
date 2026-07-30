---
title: "AWS Shared Responsibility Model"
fullName: "AWS Shared Responsibility Model"
description: "AWS secures the cloud infrastructure, while customers secure their configurations, identities, applications, and data in the cloud."
service: "Architecture"
category: architecture
kind: topic
lang: en
topicKey: "AWS 责任共担模型"
frequency: "Exam frequency ⭐⭐⭐⭐⭐"
date: 2026-07-30
updated: 2026-07-30
tags: ["architecture","AWS Shared Responsibility Model","AWS"]
notionId: 3a6964dc-ce4a-81b5-b6d2-c6ee58ed36d9
notionUrl: https://app.notion.com/p/3a6964dcce4a81b5b6d2c6ee58ed36d9
notionUpdated: "2026-07-29T08:13:08.678Z"
---

## Basic Information

| Field | Details |
| --- | --- |
| English name | AWS Shared Responsibility Model |
| Full name | AWS Shared Responsibility Model |
| Chinese name | AWS 责任共担模型 |
| Japanese name | AWS 責任共有モデル |
| Exam frequency | ⭐⭐⭐⭐⭐ |
| Often confused with | AWS 的责任 / 客户的责任 / 托管服务边界 |

## In one sentence

> AWS secures the cloud infrastructure, while customers secure their configurations, identities, applications, and data in the cloud.

## Key points

- AWS is responsible for physical facilities, hardware, foundational networking, and virtualization.
- Customers manage data, IAM, network rules, encryption choices, application security, backup policy, and recovery testing.
- Customer responsibility is greater on EC2 and smaller at the infrastructure layer for RDS, Lambda, and DynamoDB, but never disappears.

## Exam takeaway

> Managed, fully managed, and serverless services still require correct permissions, configuration, cost control, and data protection.

---
title: "Design Secure Architectures"
fullName: "Design Secure Architectures"
description: "Apply least privilege, private access, encryption, auditing, and isolated recovery to secure AWS architectures."
service: "SAA-C03"
category: saa-c03
kind: topic
lang: en
topicKey: "安全架构设计"
frequency: "Study summary"
date: 2026-07-30
updated: 2026-07-30
tags: ["saa-c03","Design Secure Architectures","AWS"]
notionId: 3a6964dc-ce4a-815e-9db0-d8343bfa6db7
notionUrl: https://app.notion.com/p/3a6964dcce4a815e9db0d8343bfa6db7
notionUpdated: "2026-07-29T08:13:15.938Z"
---

## In one sentence

> Apply least privilege, private access, encryption, auditing, and isolated recovery to secure AWS architectures.

## Key points

- Keep S3 private by default, use Block Public Access, IAM roles, bucket policies, and private CloudFront origins.
- Distinguish encryption at rest from encryption in transit and manage keys and credentials appropriately.
- Use CloudTrail data events for object-level auditing, VPC endpoints for private access, and Object Lock or isolated backups for immutability.

## Exam takeaway

> CORS is not authorization, encryption is not access control, and a successful backup does not prove recoverability.

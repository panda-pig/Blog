---
title: "KMS vs Secrets Manager vs ACM"
fullName: "KMS vs Secrets Manager vs ACM"
description: "KMS manages encryption keys, Secrets Manager manages secret values, and ACM manages certificates used for HTTPS."
service: "AWS Compare"
category: compare
kind: compare
lang: en
topicKey: "KMS vs Secrets Manager vs ACM"
frequency: "High-frequency comparison"
date: 2026-07-31
updated: 2026-07-31
tags: ["compare", "KMS vs Secrets Manager vs ACM", "AWS"]
notionId: 3ae964dc-ce4a-8160-adb5-fb18d6e81d89
notionUrl: https://app.notion.com/p/3ae964dcce4a8160adb5fb18d6e81d89
notionUpdated: "2026-07-31T04:09:10.498Z"
---

## One-line conclusion

- **AWS KMS** manages encryption keys.
- **AWS Secrets Manager** stores and rotates passwords, tokens, and API keys.
- **AWS Certificate Manager** manages SSL/TLS certificates used for HTTPS.

## Core differences

| Dimension | KMS | Secrets Manager | ACM |
| --- | --- | --- | --- |
| Managed object | Encryption keys | Secret values | SSL/TLS certificates |
| Typical need | Encrypt S3, EBS, or RDS data | Rotate database passwords | Enable HTTPS on ALB or CloudFront |
| Protection stage | Data at rest | Secret lifecycle | Data in transit |
| Common integrations | S3, EBS, RDS, DynamoDB | RDS, Lambda, IAM roles | ALB, CloudFront, API Gateway |

## Scenario shortcut

Choose KMS for encryption keys, Secrets Manager for password or token rotation, and ACM for HTTPS certificates.

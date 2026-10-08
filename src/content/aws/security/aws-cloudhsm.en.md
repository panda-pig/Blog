---
title: "AWS CloudHSM"
fullName: "AWS CloudHSM"
description: "Provides dedicated single-tenant HSMs for workloads requiring stronger customer control over cryptographic keys."
service: "AWS CloudHSM"
category: security
kind: service
lang: en
topicKey: "AWS CloudHSM"
frequency: "考试频率 ⭐⭐⭐"
date: 2026-10-08
updated: 2026-10-08
tags: ["security","AWS CloudHSM","AWS"]
notionId: 3f3964dc-ce4a-81ec-8891-ea6d574e3954
notionUrl: https://app.notion.com/p/3f3964dcce4a81ec8891ea6d574e3954
notionUpdated: "2026-10-08T00:52:15.652Z"
---
## Basic information

| Field | Details |
| --- | --- |
| English / full name | AWS CloudHSM |
| Chinese | 专用硬件安全模块服务 |
| Japanese | 専用ハードウェアセキュリティモジュール |
| Review priority | 考试频率 ⭐⭐⭐ |
| Often confused with | AWS KMS / KMS Custom Key Store |

## In one sentence

Provides dedicated single-tenant HSMs for workloads requiring stronger customer control over cryptographic keys.

## Core summary

AWS operates the hardware while the customer manages HSM users, keys, and permissions. Multi-AZ availability requires multiple HSMs.

## Study points

- Supports symmetric and asymmetric keys.
- Can back a KMS custom key store.
- IAM controls cluster resources, not the internal HSM permission model.
- Prefer KMS when deep managed AWS service integration is the main goal.

## Common pitfalls

- CloudHSM is not just another ordinary KMS key type.
- Using CloudHSM does not automatically create Multi-AZ availability.

## Key memory

**Dedicated HSM: CloudHSM; service integration: KMS; bridge both with a custom key store.**

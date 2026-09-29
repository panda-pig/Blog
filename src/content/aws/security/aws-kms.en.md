---
title: "AWS KMS"
fullName: "AWS Key Management Service"
description: "Manages the encryption keys used to lock and unlock data; it does not store the business data itself."
service: "AWS KMS"
category: security
kind: service
lang: en
topicKey: "AWS KMS"
frequency: "Exam frequency ⭐⭐⭐⭐⭐"
date: 2026-07-31
updated: 2026-09-29
tags: ["security", "AWS KMS", "AWS"]
notionId: 3a6964dc-ce4a-81e1-9905-e5b2a49bdc26
notionUrl: https://app.notion.com/p/3a6964dcce4a81e19905e5b2a49bdc26
notionUpdated: "2026-09-28T04:42:21.030Z"
---

## Basic information

| Field | Content |
| --- | --- |
| English | AWS KMS |
| Full name | AWS Key Management Service |
| Chinese | 密钥管理服务 |
| Japanese | AWS KMS（暗号鍵管理サービス） |
| Exam frequency | ⭐⭐⭐⭐⭐ |
| Often confused with | CloudHSM / Secrets Manager / ACM |

## In one sentence

Manages the encryption keys used to lock and unlock data; it does not store the business data itself.

## Stage summary

- **Core role**：Manages the encryption keys used to lock and unlock data; it does not store the business data itself.
- **Exam frequency**：5 / 5
- **Compare with**：CloudHSM / Secrets Manager / ACM

## Memory hook

AWS KMS = Manages the encryption keys used to lock and unlock data; it does not store the business data itself.

+## Update: S3 encryption boundaries

- SSE-S3 uses S3-managed keys. SSE-KMS requires both S3 authorization and KMS key policy/grants and creates KMS audit events and cost.
- S3 Bucket Keys can reduce KMS request volume and cost for SSE-KMS.
- DSSE-KMS applies two independent encryption-at-rest layers for high-compliance workloads; it is not TLS plus SSE-KMS.
- With SSE-C, the customer supplies the key on every request, S3 does not store it, and HTTPS is mandatory.

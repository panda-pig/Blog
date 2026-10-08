---
title: Amazon S3
fullName: "Amazon Simple Storage Service"
description: Highly durable, scalable regional object storage accessed through APIs or HTTP.
service: S3
category: storage
kind: service
lang: en
frequency: "Exam frequency ⭐⭐⭐⭐⭐"
date: 2026-07-29
updated: 2026-10-08
tags: [Storage, Object Storage, SAA-C03]
notionId: 3a6964dc-ce4a-8167-bdc7-d3b96eb969dc
notionUrl: https://app.notion.com/p/3a6964dcce4a8167bdc7d3b96eb969dc
notionUpdated: "2026-09-28T04:42:18.716Z"
---

## Basic Information

| Field | Details |
| --- | --- |
| English name | Amazon S3 |
| Full name | Amazon Simple Storage Service |
| Chinese description | 对象存储 |
| Japanese description | オブジェクトストレージ |
| Exam frequency | ⭐⭐⭐⭐⭐ |
| Often confused with | EBS / EFS / S3 on Outposts |

## In one sentence

> S3 is AWS object storage: buckets are management boundaries, objects hold data and metadata, and keys uniquely identify objects inside a bucket.

## Core purpose

- An object can be up to 5 TB; uploads larger than 5 GB must use multipart upload.
- Buckets and objects are private by default. IAM, bucket policies, Block Public Access, presigned URLs, and encryption control access.
- Versioning protects history, Lifecycle manages transitions and expiration, while replication and Object Lock add protection.

## Exam focus

- Choose S3 for objects, static assets, logs, backups, and data lakes.
- Select Standard, IA, Glacier, or Intelligent-Tiering from access frequency, retrieval time, and total cost.
- CloudFront with a private S3 origin is a common secure distribution pattern.

## Common misconceptions

- Slashes in a key only create a prefix-like view; S3 is not a POSIX file system.
- Versioning retains billable historical versions and is not a free backup.

## Key takeaway

> **Bucket holds objects; keys locate them; policies control access; Versioning protects history; Lifecycle controls cost.**

## Related services

CloudFront, IAM, KMS, CloudTrail, AWS Backup.

## Update: protection, delivery, and bulk operations

- Versioning, replication, Object Lock, legal holds, and MFA Delete protect different failure paths; replication is not backup.
- Deliver a private S3 origin through CloudFront with OAC and a bucket policy. S3 website endpoints do not support OAC and provide HTTP only.
- S3 event notifications can target SNS, SQS Standard, and Lambda; use EventBridge for richer filtering, replay, or FIFO delivery.
- Batch Operations handles large sets of existing objects; Batch Replication backfills older or failed objects.
- SSE-KMS requires both S3 and KMS permissions, while S3 Bucket Keys can reduce KMS requests and cost.

## Update: events, encryption, and data protection

- Event notifications can target SNS, SQS, Lambda, or EventBridge; consumers must handle duplicates and ordering.
- SSE-S3, SSE-KMS, DSSE-KMS, and SSE-C have different key responsibilities; KMS also requires key-policy and API permissions.
- Versioning, Object Lock, replication, and lifecycle address recovery, immutability, copying, and tiering or deletion respectively.

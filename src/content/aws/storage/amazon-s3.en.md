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
updated: 2026-07-30
tags: [Storage, Object Storage, SAA-C03]
notionId: 3a6964dc-ce4a-8167-bdc7-d3b96eb969dc
notionUrl: https://app.notion.com/p/3a6964dcce4a8167bdc7d3b96eb969dc
notionUpdated: "2026-07-29T04:41:23.982Z"
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

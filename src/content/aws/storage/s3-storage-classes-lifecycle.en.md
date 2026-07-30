---
title: "S3 Storage Classes & Lifecycle"
fullName: "Amazon S3 Storage Classes and Lifecycle Management"
description: "Choose an S3 storage class from access frequency, retrieval time, availability scope, and total cost, then automate transitions and expiration with Lifecycle."
service: "Amazon S3"
category: storage
kind: service
lang: en
topicKey: "S3 存储类别与生命周期"
frequency: "Exam frequency ⭐⭐⭐⭐⭐"
date: 2026-07-30
updated: 2026-07-30
tags: ["S3", "Storage Classes", "Lifecycle", "SAA-C03"]
notionId: 3ac964dc-ce4a-8181-99e4-d57c78a2df22
notionUrl: https://app.notion.com/p/3ac964dcce4a818199e4d57c78a2df22
notionUpdated: "2026-07-30"
---

## Basic Information

| Field | Details |
| --- | --- |
| English name | S3 Storage Classes & Lifecycle |
| Full name | Amazon S3 Storage Classes and Lifecycle Management |
| Chinese name | S3 存储类别与生命周期 |
| Japanese name | S3 ストレージクラスとライフサイクル |
| Exam frequency | ⭐⭐⭐⭐⭐ |
| Often confused with | Standard / IA / Glacier / Intelligent-Tiering |

## Selection logic

Ask four questions first:

1. How often is the data accessed?
2. Must retrieval be immediate, or can it wait?
3. Can the data be rebuilt, and is a single-AZ risk acceptable?
4. Beyond storage, what are the retrieval, request, and minimum-duration costs?

## Main storage classes

| Storage class | Best fit | Key idea |
| --- | --- | --- |
| S3 Standard | Frequently accessed data, dynamic websites, data lakes | Multi-AZ, low latency, default class |
| S3 Intelligent-Tiering | Unknown or changing access patterns | Automatically moves data between access tiers; monitoring and automation fees apply |
| S3 Standard-IA | Infrequent access with millisecond retrieval | Multi-AZ, lower storage price, retrieval fees |
| S3 One Zone-IA | Re-creatable, infrequently accessed data | Single AZ and lower cost |
| S3 Express One Zone | Very high performance and latency-sensitive workloads | Single AZ, directory bucket, single-digit millisecond access |
| Glacier Instant Retrieval | Rarely accessed archives that still need millisecond retrieval | Immediate access to archive data |
| Glacier Flexible Retrieval | Retrieval can wait minutes to hours | Flexible archive retrieval |
| Glacier Deep Archive | Long-term retention and very rare restores | Among the lowest-cost tiers, with the longest restore time |
| S3 on Outposts | On-premises object storage | Data residency, low latency, hybrid cloud |

## Lifecycle Policy

Rules can automatically:

- Transition objects or old versions to lower-cost classes.
- Expire objects after a retention period.
- Clean up old versions and delete markers.
- Abort incomplete multipart uploads.

Lifecycle works well when access patterns are predictable, such as “move to IA after 30 days, archive after 180 days, and delete after seven years.”

## Intelligent-Tiering vs Lifecycle

- **Predictable access pattern**: Lifecycle.
- **Unknown or changing access pattern**: Intelligent-Tiering.
- They can be combined, but monitoring fees, retrieval fees, minimum storage duration, and object-size limits still matter.

## Common scenarios

- Frequently used objects → Standard.
- Infrequent but immediate retrieval → Standard-IA.
- Rare access with millisecond retrieval → Glacier Instant Retrieval.
- Minutes-to-hours retrieval is acceptable → Glacier Flexible Retrieval.
- Long-term compliance retention → Deep Archive.
- Re-creatable data with acceptable single-AZ risk → One Zone-IA.
- Single-AZ, very high performance → Express One Zone.

## Common misconceptions

- The lowest storage price does not always produce the lowest total cost.
- Glacier Instant Retrieval is not a slow-restore tier.
- One Zone classes are not inherently “unsafe”; their failure scope differs from multi-AZ classes.
- Lifecycle does not understand business value, so a bad rule can archive or delete data too early.
- S3 on Outposts stores object data on Outposts, but compliance still depends on configuration, data flow, and governance.

## Memory aid

> **Standard for frequent access; IA for infrequent immediate access; Glacier Instant for rare immediate access; Flexible when waiting is acceptable; Deep Archive for long retention; Intelligent-Tiering when the pattern is unknown.**

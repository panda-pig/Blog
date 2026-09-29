---
title: "AWS Storage Interview Guide"
fullName: "AWS Storage Interview Guide"
description: "Answer storage questions through object, block, file, performance, sharing scope, and lifecycle."
service: "AWS Storage"
category: storage
kind: topic
lang: en
topicKey: "AWS Storage Interview Guide"
frequency: "面试高频"
date: 2026-09-29
updated: 2026-09-29
tags: ["storage", "interview", "S3", "EBS", "EFS"]
notionId: 3a6964dc-ce4a-81a7-8b03-f472f569ea58
notionUrl: https://app.notion.com/p/3a6964dcce4a81a78b03f472f569ea58
notionUpdated: "2026-09-27T05:21:17.403Z"
---

## Selection path

First choose **object, block, or file**, then evaluate sharing scope, AZ boundary, performance model, lifecycle, encryption, and recovery objectives.

| Scenario | Prefer |
| --- | --- |
| Massive objects, static content, data lake | S3 |
| EC2 boot volume or database block storage | EBS |
| Shared POSIX files for Linux EC2 | EFS |
| Windows SMB, Lustre, NetApp ONTAP, OpenZFS | The matching Amazon FSx option |
| Hybrid files, volumes, or virtual tape | Storage Gateway |
| Large offline migration | Snow Family |

## Frequent questions

- S3 strong consistency does not remove every need for retry and idempotency.
- Versioning, replication, Object Lock, and MFA Delete protect different failure paths; replication is not backup.
- EBS belongs to one AZ; a snapshot can create volumes in other AZs in the Region.
- EBS Multi-Attach requires a supported volume, one AZ, and cluster-aware software.
- An EFS mount target is an AZ network entry; clients normally need NFS TCP 2049.
- For private S3 delivery through CloudFront, prefer OAC over a public bucket.

## Answer structure

Access protocol → consistency and performance → failure domain → encryption and authorization → lifecycle and cost → backup and DR.

## Remember

**S3 for objects, EBS for blocks, EFS for shared Linux files; discuss performance, availability, and backup separately.**

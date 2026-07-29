---
title: Amazon EFS
fullName: Amazon Elastic File System
description: A managed, elastic file system that multiple Linux clients can mount concurrently over NFS.
service: EFS
category: storage
kind: service
lang: en
frequency: "Exam frequency ★★★★"
date: 2026-07-29
updated: 2026-07-29
tags: [Storage, File Storage, NFS]
notionId: 3a6964dc-ce4a-81c2-8fc7-def0bc74e454
notionUrl: https://app.notion.com/p/3a6964dcce4a81c28fc7def0bc74e454
notionUpdated: "2026-07-29T04:41:30.363Z"
---

## In one sentence

> EFS provides familiar directory and file semantics, allowing several EC2 instances or containers to share the same path.

## Core purpose

- Standard file systems are regional and multi-AZ by design; One Zone is also available.
- Create mount targets in the AZs you use and allow NFS TCP 2049 in security groups.
- Capacity scales automatically, and lifecycle policies can move cold files to IA or Archive.

## Exam focus

- Linux, NFS, and shared multi-instance directories point to EFS.
- Use EBS for blocks and database disks, S3 for object APIs, and FSx for specialized file systems.
- EFS is not a global file system; cross-VPC or cross-Region access still needs networking.

## Common misconceptions

- Automatic capacity growth does not guarantee unlimited throughput.
- Multi-AZ design does not remove mount-target and security-group requirements.

## Key takeaway

> **Choose EFS for a shared Linux directory and S3 for object APIs.**

## Related services

EC2, ECS, EKS, NFS, FSx, AWS Backup.

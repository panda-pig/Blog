---
title: Amazon FSx
fullName: "Amazon FSx"
description: A family of managed specialized file systems including Windows, Lustre, NetApp ONTAP, and OpenZFS.
service: FSx
category: storage
kind: service
lang: en
frequency: "Exam frequency ⭐⭐⭐⭐"
date: 2026-07-29
updated: 2026-07-30
tags: [Storage, File Storage, Hybrid]
notionId: 3a6964dc-ce4a-81e5-a908-cd990d3f12be
notionUrl: https://app.notion.com/p/3a6964dcce4a81e5a908cd990d3f12be
notionUpdated: "2026-07-29T04:42:39.476Z"
---

## Basic Information

| Field | Details |
| --- | --- |
| English name | Amazon FSx |
| Full name | Amazon FSx |
| Chinese description | 托管专业文件系统家族 |
| Japanese description | マネージドファイルシステム |
| Exam frequency | ⭐⭐⭐⭐ |
| Often confused with | Amazon EFS |

## In one sentence

> FSx preserves familiar protocols and file-system capabilities for traditional or high-performance applications while AWS manages infrastructure.

## Core purpose

- FSx for Windows supports SMB, Active Directory, and enterprise file shares.
- FSx for Lustre targets HPC, machine learning, and parallel throughput, and can integrate with S3 datasets.
- FSx for ONTAP and OpenZFS support existing enterprise storage or ZFS workloads.

## Exam focus

- Use EFS for general Linux NFS sharing and FSx for Windows for Windows/SMB/AD.
- HPC, ML, or Lustre signals FSx for Lustre.
- Start selection with protocol, operating system, performance, and application dependencies.

## Common misconceptions

- FSx is a product family, not one file system.
- FSx is not simply an advanced edition of EFS.

## Key takeaway

> **Use EFS for general Linux sharing; select the matching FSx product for specialized file systems.**

## Related services

EFS, S3, Active Directory, HPC, AWS Backup.

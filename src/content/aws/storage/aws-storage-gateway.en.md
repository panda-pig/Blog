---
title: AWS Storage Gateway
fullName: "AWS Storage Gateway"
description: A hybrid cloud service that exposes file, block, or tape interfaces to local applications while connecting data to AWS storage.
service: Storage Gateway
category: storage
kind: service
lang: en
frequency: "Exam frequency ⭐⭐⭐⭐"
date: 2026-07-29
updated: 2026-07-30
tags: [Storage, Hybrid Cloud, Migration]
notionId: 3a6964dc-ce4a-8139-8147-f4863a4da4ca
notionUrl: https://app.notion.com/p/3a6964dcce4a81398147f4863a4da4ca
notionUpdated: "2026-07-29T04:42:42.955Z"
---

## Basic Information

| Field | Details |
| --- | --- |
| English name | AWS Storage Gateway |
| Full name | AWS Storage Gateway |
| Chinese description | 混合云存储网关 |
| Japanese description | ハイブリッドストレージゲートウェイ |
| Exam frequency | ⭐⭐⭐⭐ |
| Often confused with | DataSync / S3 on Outposts / Direct Connect / AWS DRS |

## In one sentence

> Storage Gateway preserves NFS/SMB, iSCSI, or virtual-tape workflows on premises and bridges them to AWS.

## Core purpose

- S3 File Gateway maps local NFS/SMB files to S3 objects.
- Volume Gateway exposes iSCSI volumes and uses snapshots for backup and recovery.
- Tape Gateway replaces physical tape infrastructure with virtual tapes.

## Exam focus

- Files to S3 point to File Gateway; local block volumes to Volume Gateway; tape replacement to Tape Gateway.
- DataSync favors bulk transfer, Direct Connect/VPN provide networking, and DRS recovers complete servers.
- Plan local cache, bandwidth, permissions, encryption, and recovery procedures.

## Common misconceptions

- Storage Gateway is not a dedicated network connection.
- File Gateway targets S3 objects, but S3 itself is still not a normal file system.

## Key takeaway

> **Files → File Gateway; volumes → Volume Gateway; tapes → Tape Gateway.**

## Related services

S3, EBS Snapshot, DataSync, Direct Connect, AWS DRS.

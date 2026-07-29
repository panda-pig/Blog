---
title: Amazon EBS
fullName: Amazon Elastic Block Store
description: Persistent block volumes for EC2 with configurable capacity and performance, independent of host-local storage.
service: EBS
category: storage
kind: service
lang: en
frequency: "Exam frequency ★★★★★"
date: 2026-07-29
updated: 2026-07-29
tags: [Storage, Block Storage, EC2]
notionId: 3a6964dc-ce4a-8126-968f-e04a57570ada
notionUrl: https://app.notion.com/p/3a6964dcce4a8126968fe04a57570ada
notionUpdated: "2026-07-29T04:41:27.242Z"
---

## In one sentence

> EBS behaves like a cloud disk attached to EC2 in the same Availability Zone. It fits operating systems, databases, and low-latency random I/O.

## Core purpose

- An EBS volume is an AZ-scoped resource; moving across AZs normally uses a snapshot and a new target volume.
- Stopping EC2 preserves the volume; termination behavior depends on Delete on Termination.
- IOPS measures operations per second, while throughput measures data transferred per second.

## Exam focus

- Use Instance Store for temporary, reproducible data and EBS for persistent system or database storage.
- gp3/gp2 are general purpose, io2/io1 target critical high-IOPS workloads, and st1/sc1 favor sequential throughput or cold data.
- Snapshots are incremental block-level point-in-time backups; DLM automates their lifecycle.

## Common misconceptions

- Persistent does not guarantee that a volume survives instance termination.
- EBS is not a naturally multi-AZ shared file system.

## Key takeaway

> **Instance Store for temporary local data; EBS for persistent disks; snapshots rebuild volumes across AZs.**

## Related services

EC2, EBS Snapshot, DLM, AWS Backup, KMS.

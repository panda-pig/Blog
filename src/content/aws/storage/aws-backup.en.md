---
title: AWS Backup
fullName: "AWS Backup"
description: Centralized scheduling, retention, monitoring, and governance for backups across multiple AWS services.
service: AWS Backup
category: storage
kind: service
lang: en
frequency: "Exam frequency ⭐⭐⭐⭐"
date: 2026-07-29
updated: 2026-07-30
tags: [Storage, Backup, Governance]
notionId: 3a6964dc-ce4a-8144-a676-dad1d439be1f
notionUrl: https://app.notion.com/p/3a6964dcce4a8144a676dad1d439be1f
notionUpdated: "2026-07-29T08:13:14.538Z"
---

## Basic Information

| Field | Details |
| --- | --- |
| English name | AWS Backup |
| Full name | AWS Backup |
| Chinese description | 集中式备份管理 |
| Japanese description | 一元バックアップ |
| Exam frequency | ⭐⭐⭐⭐ |
| Often confused with | EBS Snapshot / DLM / AWS DRS / S3 Lifecycle |

## In one sentence

> AWS Backup combines backup plans, resource selection, and backup vaults into a common multi-service governance workflow.

## Core purpose

- A backup plan defines frequency, windows, lifecycle, and retention.
- Recovery points live in vaults and can support cross-account or cross-Region copies where the service allows.
- Tags and Organizations help assign policies and monitor compliance across accounts.

## Exam focus

- Multi-service centralized policy, compliance, and monitoring point to AWS Backup.
- DLM mainly automates EBS snapshots/AMIs; DRS continuously replicates servers for faster recovery.
- A successful backup does not prove RTO/RPO; restore testing is required.

## Common misconceptions

- Creating a backup plan does not automatically protect every resource.
- AWS Backup does not replace database-native PITR and is not server-level DRS.

## Key takeaway

> **DLM manages EBS snapshot lifecycle; AWS Backup governs many services; DRS restores servers quickly.**

## Related services

EBS, RDS, Aurora, DynamoDB, EFS, FSx, AWS DRS.

---
title: "EBS Snapshot & Data Lifecycle Manager"
fullName: "Amazon EBS Snapshot and Amazon Data Lifecycle Manager"
description: "Understand incremental block-level EBS snapshots, application consistency, and how DLM automates snapshot creation, retention, and cleanup."
service: "Amazon EBS"
category: storage
kind: service
lang: en
topicKey: "EBS 快照与生命周期管理"
frequency: "Exam frequency ⭐⭐⭐⭐⭐"
date: 2026-07-30
updated: 2026-07-30
tags: ["EBS", "Snapshot", "DLM", "AWS Backup"]
notionId: 3ac964dc-ce4a-8132-9c35-fef045e66444
notionUrl: https://app.notion.com/p/3ac964dcce4a81329c35fef045e66444
notionUpdated: "2026-07-30"
---

## Basic Information

| Field | Details |
| --- | --- |
| English name | EBS Snapshot & Data Lifecycle Manager |
| Full name | Amazon EBS Snapshot and Amazon Data Lifecycle Manager |
| Chinese description | EBS 快照与生命周期管理 |
| Japanese description | EBS スナップショットと Data Lifecycle Manager |
| Exam frequency | ⭐⭐⭐⭐⭐ |
| Often confused with | EBS Snapshot / DLM / AWS Backup / AMI |

## EBS Snapshot

An EBS snapshot is a block-level point-in-time backup of an EBS volume.

- The first snapshot stores the blocks in use at that time.
- Later snapshots store only blocks changed since the preceding snapshot.
- Storage is incremental underneath, but every snapshot can logically restore a complete new volume.
- When an earlier snapshot is deleted, AWS retains blocks that later snapshots still require.
- Snapshots are redundantly stored and managed by AWS; they are not ordinary S3 objects visible to the customer.

## Main uses

- Recover deleted or damaged data.
- Create a new EBS volume.
- Create a volume in another Availability Zone from a snapshot.
- Copy data across Regions.
- Share with another account.
- Support AMIs, disaster recovery, and test environments.

## Application consistency

An EBS snapshot provides a block-level point in time, but does not automatically guarantee database-transaction or application consistency. Critical applications should coordinate or pause writes, flush caches, use database-native backups, or follow an application-consistent process.

## Amazon Data Lifecycle Manager (DLM)

DLM automates EBS snapshots and EBS-backed AMIs by tag and schedule:

- Create them on a schedule.
- Retain the latest N copies or a defined number of days.
- Delete expired snapshots automatically.
- Apply tags, archive, and Fast Snapshot Restore settings.
- Configure supported cross-Region copy and cross-account sharing actions.

## DLM vs AWS Backup

| Requirement | Choose |
| --- | --- |
| Primarily manage EBS snapshots or EBS-backed AMIs | DLM |
| Centrally manage backups across EBS, RDS, EFS, FSx, and other services | AWS Backup |

## Shared responsibility

AWS manages the snapshot infrastructure. The customer chooses frequency, retention, encryption, permissions, replication, cost monitoring, and restore testing.

## Common scenarios

- Create daily EBS snapshots and delete them after 30 days → DLM.
- Move EBS data to another AZ → Snapshot → new volume in the target AZ.
- Apply one backup policy across several services → AWS Backup.
- A snapshot completed but the database cannot restore cleanly → check application consistency.

## Memory aid

> **Snapshot captures a backup once; DLM continuously creates, retains, and cleans up snapshots according to policy.**

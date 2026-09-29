---
title: "AWS Storage 面接速習"
fullName: "AWS Storage Interview Guide"
description: "Object、Block、File、Performance、共有範囲、Lifecycle で AWS Storage を説明します。"
service: "AWS Storage"
category: storage
kind: topic
lang: ja
topicKey: "AWS Storage Interview Guide"
frequency: "面试高频"
date: 2026-09-29
updated: 2026-09-29
tags: ["storage", "interview", "S3", "EBS", "EFS"]
notionId: 3a6964dc-ce4a-81a7-8b03-f472f569ea58
notionUrl: https://app.notion.com/p/3a6964dcce4a81a78b03f472f569ea58
notionUpdated: "2026-09-27T05:21:17.403Z"
---

## 選択の流れ

まず **Object / Block / File** を選び、共有範囲、AZ 境界、性能、Lifecycle、暗号化、Recovery Objective を確認します。

| 場面 | 選択 |
| --- | --- |
| 大量 Object、Static Content、Data Lake | S3 |
| EC2 Boot / Database Block Storage | EBS |
| Linux EC2 間の共有 POSIX File | EFS |
| Windows SMB、Lustre、ONTAP、OpenZFS | 対応する Amazon FSx |
| Hybrid File / Volume / Tape | Storage Gateway |
| 大規模 Offline Migration | Snow Family |

## 頻出ポイント

- S3 の Strong Consistency でも Retry と Idempotency が常に不要になるわけではありません。
- Versioning、Replication、Object Lock、MFA Delete は異なる保護で、Replication は Backup の代替ではありません。
- EBS は 1 AZ に所属し、Snapshot から他 AZ の Volume を作成できます。
- EBS Multi-Attach は対応 Volume、同一 AZ、Cluster-aware Software が必要です。
- EFS Mount Target は AZ ごとの Network Entry で、通常 NFS TCP 2049 を許可します。
- CloudFront で Private S3 を配信する場合は Public Bucket ではなく OAC を優先します。

## 回答構造

Access Protocol → Consistency / Performance → Fault Domain → Encryption / Authorization → Lifecycle / Cost → Backup / DR。

## 要点

**Object は S3、Block は EBS、共有 Linux File は EFS。性能・可用性・Backup は分けて説明します。**

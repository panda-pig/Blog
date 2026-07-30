---
title: "DRS vs AWS Backup vs EBS Snapshot vs Storage Gateway"
fullName: "DRS vs AWS Backup vs EBS Snapshot vs Storage Gateway"
description: "DRS は Server Recovery、AWS Backup は Backup Governance、EBS Snapshot は Volume 保護、Storage Gateway は Hybrid Interface。"
service: "AWS Compare"
category: compare
kind: compare
lang: ja
topicKey: "DRS vs AWS Backup vs EBS Snapshot vs Storage Gateway"
frequency: "学習まとめ"
date: 2026-07-30
updated: 2026-07-30
tags: ["compare","DRS vs AWS Backup vs EBS Snapshot vs Storage Gateway","AWS"]
notionId: 3ac964dc-ce4a-81db-9096-c642b0043952
notionUrl: https://app.notion.com/p/3ac964dcce4a81db9096c642b0043952
notionUpdated: "2026-07-29T04:39:43.711Z"
---

## 一言で理解

> DRS は Server Recovery、AWS Backup は Backup Governance、EBS Snapshot は Volume 保護、Storage Gateway は Hybrid Interface。

## 要点

- AWS DRS は Server を継続 Replication し、低 RTO の Failover と Failback を支援する。
- AWS Backup は対応 Resource の Schedule、Retention、Vault、Policy を集中管理する。
- EBS Snapshot は Volume の Point-in-Time Copy であり、単独では完全な DR Process ではない。

## 試験での判断

> Storage Gateway は長期 Hybrid Access 用の File / Volume / Tape Interface を提供する。

---
title: Amazon Managed Blockchain
fullName: "Amazon Managed Blockchain (AMB)"
description: Managed blockchain capabilities for shared, verifiable, tamper-resistant records across organizations.
service: AMB
category: database
kind: service
lang: en
frequency: "Exam frequency ⭐"
date: 2026-07-29
updated: 2026-07-31
tags: [Database, Blockchain, Ledger]
notionId: 3ac964dc-ce4a-81ef-ba29-c54db8aa90b2
notionUrl: https://app.notion.com/p/3ac964dcce4a81efba29c54db8aa90b2
notionUpdated: "2026-07-30T04:29:06.851Z"
---

## Basic Information

| Field | Details |
| --- | --- |
| English name | Amazon Managed Blockchain (AMB) |
| Full name | Amazon Managed Blockchain (AMB) |
| Chinese description | 托管区块链服务 |
| Japanese description | マネージドブロックチェーンサービス |
| Exam frequency | ⭐ |
| Often confused with | 普通数据库 / 审计日志 / QLDB |

## In one sentence

> Managed Blockchain is worth considering only when independent parties do not fully trust one another yet need a shared ledger and verifiable history.

## Core purpose

- It reduces the work of building and operating blockchain-network infrastructure.
- Use cases include supply-chain provenance, inter-institution financial networks, origin verification, and asset transfers.
- The key need is multi-party sharing and tamper resistance, not ordinary CRUD performance.

## Exam focus

- Multiple parties, shared ledger, tamper resistance, and traceability point to blockchain.
- A single-company order system or ordinary audit trail is usually simpler with RDS, NoSQL, or logs.
- First verify that the scenario truly has a cross-organization trust problem.

## Common misconceptions

- Blockchain is not the default upgrade for a database.
- Needing an audit trail does not automatically require blockchain.

## Key takeaway

> **Multiple organizations + incomplete trust + shared tamper-resistant ledger → Managed Blockchain.**

## Related services

RDS, DynamoDB, Audit Logs, Supply Chain.

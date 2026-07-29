---
title: Amazon RDS
fullName: Amazon Relational Database Service
description: Managed relational engines such as MySQL and PostgreSQL with reduced infrastructure, patching, and backup operations.
service: RDS
category: database
kind: service
lang: en
frequency: "Exam frequency ★★★★★"
date: 2026-07-29
updated: 2026-07-29
tags: [Database, Relational, SAA-C03]
notionId: 3a6964dc-ce4a-81a2-9c3d-ebba79e9df68
notionUrl: https://app.notion.com/p/3a6964dcce4a81a29c3debba79e9df68
notionUpdated: "2026-07-29T08:10:20.563Z"
---

## In one sentence

> RDS fits workloads needing SQL, joins, transactions, and relationships. Customers still own schemas, queries, accounts, and access controls.

## Core purpose

- Applications connect through endpoints; production databases usually live in private subnets behind security groups.
- Multi-AZ provides high availability and failover; read replicas use asynchronous replication to scale reads.
- Automated backups and logs support PITR within retention, while manual snapshots preserve a chosen point in time.

## Exam focus

- Choose Multi-AZ for availability and read replicas for read scaling.
- RDS manages infrastructure, but customers choose retention, permissions, and recovery procedures.
- Cross-Region replicas, backup copies, and AWS Backup solve different goals.

## Common misconceptions

- A Multi-AZ standby is normally not an ordinary read-scaling target.
- RDS does not automatically optimize every SQL query, index, or schema.

## Key takeaway

> **SQL/joins/transactions → RDS; availability → Multi-AZ; read scale → read replicas.**

## Related services

Aurora, DMS, AWS Backup, Secrets Manager, KMS, CloudWatch.

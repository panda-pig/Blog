---
title: "Migration Interview Guide"
fullName: "AWS Migration Interview Guide"
description: "Start with business goals, application portfolio, dependencies, migration strategy, cutover and rollback, and post-migration modernization."
service: "AWS Migration Interview Guide"
category: migration
kind: topic
lang: en
topicKey: "AWS Migration Interview Guide"
frequency: "面试专题"
date: 2026-10-08
updated: 2026-10-08
tags: ["migration","AWS Migration Interview Guide","AWS"]
notionId: 3b3964dc-ce4a-818c-843f-caff35e7d321
notionUrl: https://app.notion.com/p/3b3964dcce4a818c843fcaff35e7d321
notionUpdated: "2026-10-08T01:56:02.673Z"
---
## Basic information

| Field | Details |
| --- | --- |
| English / full name | AWS Migration Interview Guide |
| Chinese | AWS 迁移面试 |
| Japanese | AWS 移行面接ガイド |
| Review priority | 面试专题 |
| Often confused with | MGN / DRS / DMS / DataSync / Direct Connect |

## In one sentence

Start with business goals, application portfolio, dependencies, migration strategy, cutover and rollback, and post-migration modernization.

## Core summary

Structure the program as Assess, Mobilize, and Migrate & Modernize. Build waves from dependencies and risk, starting with a low-risk pilot.

## Study points

- For low-downtime servers, use MGN block replication, testing, and cutover.
- For heterogeneous databases, convert schema and code, then use DMS full load and CDC.
- DataSync moves files, Transfer Family exposes transfer protocols, and Direct Connect provides a network path.
- A backup plan still needs assignments, permissions, recovery points, and real restore validation.

## Common pitfalls

- MGN supports planned migration; DRS supports ongoing disaster recovery and failback.
- Low downtime is not zero downtime; every cutover needs acceptance and rollback criteria.

## Key memory

**Discover and assess, choose strategies and waves, test before cutover, and always prepare rollback.**

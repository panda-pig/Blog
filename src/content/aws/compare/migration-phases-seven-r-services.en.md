---
title: "Migration Phases, 7Rs & AWS Migration Services"
fullName: "Migration Phases, 7Rs & AWS Migration Services"
description: "Separate project sequence, application strategy, and the services used for evaluation, discovery, replication, transfer, and coordination."
service: "AWS"
category: compare
kind: compare
lang: en
topicKey: "迁移阶段・7R・迁移服务总对比"
frequency: "Comparison"
date: 2026-08-05
updated: 2026-08-05
tags: ["compare", "migration", "7R", "AWS"]
notionId: 3b3964dc-ce4a-817f-a6d4-dfb52a50e40e
notionUrl: https://app.notion.com/p/3b3964dcce4a817fa6d4dfb52a50e40e
notionUpdated: "2026-08-05T01:44:00.000Z"
---

## Separate the three knowledge layers

| Concept | Question answered | Core content |
| --- | --- | --- |
| Three-phase process | In what order does the project proceed? | Assess → Mobilize → Migrate & Modernize |
| AWS CAF | Who participates and which capabilities are needed? | Business, People, Governance, Platform, Security, Operations |
| 7Rs | What happens to each application? | Rehost, Relocate, Replatform, Refactor, Repurchase, Retain, Retire |

## Service responsibility map

| Service | Responsible for | Not responsible for |
| --- | --- | --- |
| Migration Evaluator | TCO, licensing, business case | Executing replication |
| Application Discovery Service | Assets, processes, connections, dependencies | Dedicated TCO modeling |
| Migration Hub / AWS Transform | Planning, collaboration, progress | Being the main replication engine |
| AWS Transform MGN | Continuous block replication of servers | Database schema conversion |
| AWS DMS | Database full load and CDC | Rewriting every application query |
| AWS SCT | Assessing and converting schemas/code objects | Continuously moving business data |
| AWS DataSync | Online file/object migration and synchronization | Providing a persistent mount interface |
| AWS Transfer Family | SFTP, FTPS, FTP, and AS2 exchange | Being a bulk migration engine |
| Direct Connect | A stable dedicated network path | Copying data by itself |
| Snowball Edge | Offline physical transfer in legacy questions | New-customer availability |

## Selection shortcuts

- Homogeneous database migration commonly uses DMS; heterogeneous engines commonly use SCT plus DMS.
- Move many files automatically with DataSync; preserve business file-transfer protocols with Transfer Family.
- Use Direct Connect for a long-lived dedicated network path; legacy offline-device questions point to Snowball Edge.

## Current names

- AWS Application Migration Service was rebranded AWS Transform MGN; its capabilities, APIs, and replication engine remain unchanged.
- Courses still use names such as Migration Hub, Application Discovery Service, and Snowball Edge, while real projects must check current entry points and availability.

## Key takeaway

**Evaluator models, Discovery maps, Hub coordinates, MGN moves servers; SCT converts structure, DMS moves database data; DataSync moves files, Transfer receives files, and Direct Connect supplies the path.**

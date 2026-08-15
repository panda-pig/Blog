---
title: "7R Migration Strategies"
fullName: "Seven Migration Strategies"
description: "Choose whether each application should move as-is, receive limited or major change, be replaced, retained, or retired."
service: "AWS Migration"
category: migration
kind: topic
lang: en
topicKey: "7R 迁移策略"
frequency: "Exam frequency ⭐⭐⭐⭐⭐"
date: 2026-08-05
updated: 2026-08-15
tags: ["migration", "7R", "AWS"]
notionId: 3b3964dc-ce4a-810d-9392-cdcb7db0c5a2
notionUrl: https://app.notion.com/p/3b3964dcce4a810d9392cdcb7db0c5a2
notionUpdated: "2026-08-05T01:41:27.369Z"
---

## One-line summary

Decide per application whether to move it as-is, move the whole platform, make limited changes, re-architect, replace, retain, or retire it.

## The 7Rs

| Strategy | Decision rule | Typical example |
| --- | --- | --- |
| Rehost | Little or no change; lift and shift | On-premises VM → EC2 |
| Relocate | Move an entire platform as a unit | VMware estate → equivalent AWS environment |
| Replatform | Limited optimization without changing the core architecture | Self-managed MySQL → RDS |
| Refactor / Re-architect | Change code and redesign | Monolith → Lambda or microservices |
| Repurchase | Replace the product with SaaS | Self-hosted CRM → SaaS |
| Retain | Keep running for now | Compliance or dependencies are unresolved |
| Retire | Shut down an unneeded system | Decommission an obsolete application |

## Common distinctions

- Rehost moves an application or server; Relocate moves the whole platform.
- Replatform makes bounded improvements; Refactor changes code and architecture.
- Retain means keep it running for now; Retire means stop it.
- MGN commonly supports Rehost; moving a database VM to RDS is commonly Replatform.

## Key takeaway

**Rehost as-is, Relocate the platform, Replatform with limited change, Refactor deeply, Repurchase the product, Retain for now, Retire when unneeded.**

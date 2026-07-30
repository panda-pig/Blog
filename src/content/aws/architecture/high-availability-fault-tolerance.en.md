---
title: "High Availability and Fault Tolerance"
fullName: "High Availability & Fault Tolerance"
description: "High availability reduces downtime through redundancy and recovery, while fault tolerance continues operation with minimal interruption."
service: "Architecture"
category: architecture
kind: topic
lang: en
topicKey: "High Availability & Fault Tolerance"
frequency: "Exam frequency ⭐⭐⭐⭐⭐"
date: 2026-07-30
updated: 2026-07-30
tags: ["architecture","High Availability & Fault Tolerance","AWS"]
notionId: 3a6964dc-ce4a-816d-833f-c03167b88b6c
notionUrl: https://app.notion.com/p/3a6964dcce4a816d833fc03167b88b6c
notionUpdated: "2026-07-23T08:25:18.648Z"
---

## Basic Information

| Field | Details |
| --- | --- |
| English name | High Availability & Fault Tolerance |
| Full name | High Availability & Fault Tolerance |
| Chinese name | 高可用与容错 |
| Japanese name | 高可用性とフォールトトレランス |
| Exam frequency | ⭐⭐⭐⭐⭐ |
| Often confused with | Redundancy / DR / Elasticity |

## In one sentence

> High availability reduces downtime through redundancy and recovery, while fault tolerance continues operation with minimal interruption.

## Key points

- Deploy across multiple Availability Zones to avoid a single-AZ dependency.
- Load balancers, health checks, Auto Scaling, and replicated data layers remove single points of failure.
- High availability may allow brief recovery; fault-tolerant designs require more redundancy and cost.

## Exam takeaway

> Define failure domains, RTO, RPO, state handling, and recovery tests instead of relying on service labels alone.

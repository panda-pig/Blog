---
title: "AWS Direct Connect"
fullName: "AWS Direct Connect"
description: "A dedicated private network connection between on-premises environments and AWS for consistent bandwidth and latency."
service: "AWS Direct Connect"
category: networking
kind: service
lang: en
topicKey: "AWS Direct Connect"
frequency: "Exam frequency ⭐⭐⭐⭐"
date: 2026-07-30
updated: 2026-08-05
tags: ["networking","AWS Direct Connect","AWS"]
notionId: 3a6964dc-ce4a-812a-be47-ffe0e7198291
notionUrl: https://app.notion.com/p/3a6964dcce4a812abe47ffe0e7198291
notionUpdated: "2026-08-05T01:42:00.000Z"
---

## Basic Information

| Field | Details |
| --- | --- |
| English name | AWS Direct Connect |
| Full name | AWS Direct Connect |
| Chinese description | AWS 专线连接 |
| Japanese description | 専用線接続 |
| Exam frequency | ⭐⭐⭐⭐ |
| Often confused with | Site-to-Site VPN / Global Accelerator |

## In one sentence

> A dedicated private network connection between on-premises environments and AWS for consistent bandwidth and latency.

## Key points

- Direct Connect avoids the public internet path but is not encrypted by default.
- Virtual interfaces connect to public AWS services, VPCs, or Transit Gateway depending on design.
- Production architectures should consider redundant locations, devices, and links.

## Exam takeaway

> Use VPN for encrypted internet connectivity; combine VPN with Direct Connect when encryption is required.

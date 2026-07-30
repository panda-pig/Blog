---
title: "ALB vs NLB vs GWLB"
fullName: "ALB vs NLB vs GWLB"
description: "ALB routes HTTP applications, NLB handles high-performance transport traffic, and GWLB inserts network appliances."
service: "AWS Compare"
category: compare
kind: compare
lang: en
topicKey: "ALB vs NLB vs GWLB"
frequency: "Study summary"
date: 2026-07-30
updated: 2026-07-30
tags: ["compare","ALB vs NLB vs GWLB","AWS"]
notionId: 3a6964dc-ce4a-8180-ba10-e743959d6b68
notionUrl: https://app.notion.com/p/3a6964dcce4a8180ba10e743959d6b68
notionUpdated: "2026-07-23T07:04:36.256Z"
---

## In one sentence

> ALB routes HTTP applications, NLB handles high-performance transport traffic, and GWLB inserts network appliances.

## Key points

- ALB is Layer 7 and supports host, path, header, redirect, and application-aware routing.
- NLB is Layer 4 for TCP, UDP, and TLS with very high performance and static IP capabilities.
- GWLB uses GENEVE to transparently steer traffic through scalable virtual appliances.

## Exam takeaway

> Select by protocol and traffic-processing need, not simply by expected request count.

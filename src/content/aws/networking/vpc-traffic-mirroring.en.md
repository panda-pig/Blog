---
title: "VPC Traffic Mirroring"
fullName: "Amazon VPC Traffic Mirroring"
description: "Copies packets from supported ENIs to monitoring appliances while production traffic continues on its normal path."
service: "Amazon VPC Traffic Mirroring"
category: networking
kind: service
lang: en
topicKey: "Amazon VPC Traffic Mirroring"
frequency: "考试频率 ⭐⭐⭐"
date: 2026-10-08
updated: 2026-10-08
tags: ["networking","Amazon VPC Traffic Mirroring","AWS"]
notionId: 3f3964dc-ce4a-8129-83bf-d15a04f6844b
notionUrl: https://app.notion.com/p/3f3964dcce4a812983bfd15a04f6844b
notionUpdated: "2026-10-08T01:13:37.200Z"
---
## Basic information

| Field | Details |
| --- | --- |
| English / full name | Amazon VPC Traffic Mirroring |
| Chinese | VPC 流量镜像 |
| Japanese | VPC トラフィックミラーリング |
| Review priority | 考试频率 ⭐⭐⭐ |
| Often confused with | VPC Flow Logs / Gateway Load Balancer / Network Firewall |

## In one sentence

Copies packets from supported ENIs to monitoring appliances while production traffic continues on its normal path.

## Core summary

Source, target, session, and filter are the core components. A target can be an ENI, NLB, or Gateway Load Balancer endpoint.

## Study points

- Use it for forensics, intrusion analysis, and packet-level troubleshooting.
- Mirroring is out of band and does not automatically block production traffic.
- Encrypted packets remain encrypted in the copy.
- The source still needs a valid network path to the target.

## Common pitfalls

- Flow Logs record metadata; Traffic Mirroring copies packets.
- For inline blocking, use Network Firewall or a GWLB appliance chain.

## Key memory

**Copies are for seeing; inline inspection is for controlling.**

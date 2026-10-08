---
title: "VPC Peering"
fullName: "VPC Peering"
description: "A direct, non-transitive private connection between two VPCs with non-overlapping CIDRs."
service: "VPC Peering"
category: networking
kind: service
lang: en
topicKey: "VPC Peering"
frequency: "考试频率 ⭐⭐⭐⭐⭐"
date: 2026-10-08
updated: 2026-10-08
tags: ["networking","VPC Peering","AWS"]
notionId: 3f3964dc-ce4a-81f6-a599-d72ed784da65
notionUrl: https://app.notion.com/p/3f3964dcce4a81f6a599d72ed784da65
notionUpdated: "2026-10-08T01:13:37.200Z"
---
## Basic information

| Field | Details |
| --- | --- |
| English / full name | VPC Peering |
| Chinese | VPC 对等连接 |
| Japanese | VPC ピアリング |
| Review priority | 考试频率 ⭐⭐⭐⭐⭐ |
| Often confused with | Transit Gateway / PrivateLink |

## In one sentence

A direct, non-transitive private connection between two VPCs with non-overlapping CIDRs.

## Core summary

After acceptance, both sides still need routes to the peer CIDR plus security group and NACL permissions.

## Study points

- Works across accounts and Regions.
- A–B and B–C do not create A–C reachability.
- A peer cannot borrow the other VPC's IGW, NAT, VPN, Direct Connect, or gateway endpoint.
- Use Transit Gateway when a large peering mesh becomes hard to govern.

## Common pitfalls

- Accepted does not mean reachable; routing must work in both directions.
- For overlapping CIDRs with service-only access, consider PrivateLink.

## Key memory

**Two VPCs, non-overlapping addresses, bidirectional routes, and no transitive routing.**

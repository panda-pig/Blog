---
title: "IPv6 & Egress-only Internet Gateway"
fullName: "IPv6 and Egress-only Internet Gateway"
description: "An EIGW gives publicly routable IPv6 workloads outbound-only internet access, permits related return traffic, and performs no NAT."
service: "IPv6 and Egress-only Internet Gateway"
category: networking
kind: service
lang: en
topicKey: "IPv6 and Egress-only Internet Gateway"
frequency: "考试频率 ⭐⭐⭐⭐"
date: 2026-10-08
updated: 2026-10-08
tags: ["networking","IPv6 and Egress-only Internet Gateway","AWS"]
notionId: 3f3964dc-ce4a-81fa-a77f-f09140280e7d
notionUrl: https://app.notion.com/p/3f3964dcce4a81faa77ff09140280e7d
notionUpdated: "2026-10-08T01:13:37.200Z"
---
## Basic information

| Field | Details |
| --- | --- |
| English / full name | IPv6 and Egress-only Internet Gateway |
| Chinese | IPv6 与仅出站互联网网关 |
| Japanese | IPv6 と Egress-only Internet Gateway |
| Review priority | 考试频率 ⭐⭐⭐⭐ |
| Often confused with | Internet Gateway / NAT Gateway / NAT64 / Dual Stack |

## In one sentence

An EIGW gives publicly routable IPv6 workloads outbound-only internet access, permits related return traffic, and performs no NAT.

## Core summary

IPv4 and IPv6 have separate CIDRs, routes, and security rules. A ::/0 route to the EIGW controls IPv6-initiated egress.

## Study points

- Use an EIGW for outbound-only IPv6-to-IPv6 traffic.
- Use DNS64 and NAT64 when an IPv6 client must reach an IPv4-only target.
- A dual-stack subnet can still exhaust IPv4 addresses.
- A routable IPv6 address does not remove security group or NACL controls.

## Common pitfalls

- 0.0.0.0/0 does not cover IPv6, and ::/0 does not cover IPv4.
- An EIGW does not translate addresses or provide IPv6-to-IPv4 conversion.

## Key memory

**EIGW for outbound IPv6-to-IPv6; NAT64 for IPv6-to-IPv4 translation.**

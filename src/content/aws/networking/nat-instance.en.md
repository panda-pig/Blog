---
title: "NAT Instance"
fullName: "Network Address Translation Instance"
description: "A customer-managed EC2 instance that forwards and translates outbound IPv4 traffic for private workloads."
service: "Network Address Translation Instance"
category: networking
kind: service
lang: en
topicKey: "Network Address Translation Instance"
frequency: "考试频率 ⭐⭐⭐"
date: 2026-10-08
updated: 2026-10-08
tags: ["networking","Network Address Translation Instance","AWS"]
notionId: 3f3964dc-ce4a-816d-ad4f-e365e586abfc
notionUrl: https://app.notion.com/p/3f3964dcce4a816dad4fe365e586abfc
notionUpdated: "2026-10-08T01:13:37.200Z"
---
## Basic information

| Field | Details |
| --- | --- |
| English / full name | Network Address Translation Instance |
| Chinese | NAT 实例 |
| Japanese | NAT インスタンス |
| Review priority | 考试频率 ⭐⭐⭐ |
| Often confused with | NAT Gateway / Bastion Host |

## In one sentence

A customer-managed EC2 instance that forwards and translates outbound IPv4 traffic for private workloads.

## Core summary

It normally runs in a public subnet with a public address or EIP and source/destination checks disabled. Private routes point to it, while the OS performs forwarding and NAT.

## Study points

- Allow the actual application protocols in its security group.
- The customer owns patching, capacity, monitoring, and failover.
- A failed target can leave routes in a blackhole state.
- Modern managed architectures usually prefer a NAT Gateway.

## Common pitfalls

- Disabling source/destination checks does not configure OS-level NAT.
- The retirement of an old NAT AMI does not remove the EC2-based NAT pattern.

## Key memory

**EC2 NAT requires routes, forwarding, disabled source/destination checks, security rules, and OS configuration.**

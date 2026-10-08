---
title: "Bastion Host"
fullName: "Bastion Host / SSH Jump Host"
description: "A controlled administrative entry point in a public subnet used to reach private EC2 instances."
service: "Bastion Host / SSH Jump Host"
category: networking
kind: service
lang: en
topicKey: "Bastion Host / SSH Jump Host"
frequency: "考试频率 ⭐⭐⭐⭐"
date: 2026-10-08
updated: 2026-10-08
tags: ["networking","Bastion Host / SSH Jump Host","AWS"]
notionId: 3f3964dc-ce4a-819c-8ab0-cc18ee856221
notionUrl: https://app.notion.com/p/3f3964dcce4a819c8ab0cc18ee856221
notionUpdated: "2026-10-08T01:13:37.200Z"
---
## Basic information

| Field | Details |
| --- | --- |
| English / full name | Bastion Host / SSH Jump Host |
| Chinese | 堡垒机 / 跳板机 |
| Japanese | 踏み台サーバー |
| Review priority | 考试频率 ⭐⭐⭐⭐ |
| Often confused with | NAT Instance / Session Manager / EC2 Instance Connect Endpoint |

## In one sentence

A controlled administrative entry point in a public subnet used to reach private EC2 instances.

## Core summary

The first hop reaches the bastion's public address and the second reaches the target's private address; both require routing, NACLs, security groups, and authentication.

## Study points

- Restrict port 22 on the bastion to trusted sources.
- Allow port 22 on private instances from the bastion security group.
- Avoid storing long-lived private keys on the jump host; evaluate Session Manager.
- Administrative access and application egress are separate paths.

## Common pitfalls

- A bastion is not a NAT device and does not give private instances internet egress.
- Successful SSH does not prove that ICMP, HTTP, or other protocols are allowed.

## Key memory

**Bastion is for login; NAT is for outbound internet; endpoints are for specific services.**

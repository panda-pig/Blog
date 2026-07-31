---
title: Internet Gateway
fullName: "Internet Gateway"
description: A highly available internet entry and exit point attached to a VPC; it does not automatically make every resource publicly reachable.
service: IGW
category: networking
kind: service
lang: en
frequency: "Exam frequency ⭐⭐⭐⭐"
date: 2026-07-27
updated: 2026-07-31
tags: [Internet Gateway, VPC, Public Subnet, SAA-C03]
notionId: 3a6964dc-ce4a-81ba-86d3-dca3dc2f01fd
notionUrl: https://app.notion.com/p/3a6964dcce4a81ba86d3dca3dc2f01fd
notionUpdated: "2026-07-30T04:31:57.202Z"
---

## Basic Information

| Field | Details |
| --- | --- |
| English name | Internet Gateway (IGW) |
| Full name | Internet Gateway |
| Chinese description | 互联网网关 |
| Japanese description | インターネットゲートウェイ |
| Exam frequency | ⭐⭐⭐⭐ |
| Often confused with | NAT Gateway / Virtual Private Gateway |

## In one sentence

> An Internet Gateway is the highly available internet entry and exit point attached to a VPC, but attaching one does not automatically make resources publicly reachable.

## Core purpose

- Provide an IPv4 and IPv6 route target between a VPC and the internet.
- Perform one-to-one mapping between private and public IPv4 addresses for instances with public addresses.
- Scale horizontally as an AWS-managed, redundant component.

## How it works

`Internet ↔ IGW ↔ Route Table ↔ Subnet ↔ ENI / EC2`

Successful communication also requires:

- An IGW attached to the VPC.
- `0.0.0.0/0 → IGW`, or `::/0 → IGW` for IPv6.
- A public IPv4 address or Elastic IP for IPv4.
- Security group, NACL, and host firewall rules that allow the traffic.
- An application listening on the correct port.

## Typical uses

- Internet-facing Application Load Balancers.
- Public web servers or bastion hosts.
- The public subnet that contains a public NAT Gateway.

## Exam focus

- An IGW connects a VPC to the internet; it is neither a firewall nor a NAT Gateway.
- Understand the complete conditions for a public subnet.
- For outbound-only IPv6, consider an Egress-only Internet Gateway rather than NAT Gateway.

## Common misconceptions

- Attaching an IGW does not modify route tables.
- A default route alone does not guarantee internet access.
- An IGW does not filter traffic by port.
- A VPC can have only one attached IGW at a time, but that IGW is already highly available.

## Related services

| Service | Purpose |
| --- | --- |
| Internet Gateway | Direct two-way internet connectivity for eligible resources |
| NAT Gateway | Outbound access for private IPv4 resources |
| Virtual Private Gateway | VPC-side gateway for traditional VPN or Direct Connect designs |

## Key takeaway

> **The IGW is only the doorway; routes, public addresses, and security rules determine whether traffic can actually pass.**

---
title: Subnet & Route Table
fullName: "Subnet & Route Table"
description: A subnet divides the VPC address space and belongs to one Availability Zone; a route table selects the next hop based on the destination.
service: VPC Networking
category: networking
kind: service
lang: en
frequency: "Exam frequency ⭐⭐⭐⭐⭐"
date: 2026-07-27
updated: 2026-07-30
tags: [Subnet, Route Table, CIDR, SAA-C03]
notionId: 3a6964dc-ce4a-818e-972f-f196d09400b4
notionUrl: https://app.notion.com/p/3a6964dcce4a818e972ff196d09400b4
notionUpdated: "2026-07-27T05:37:25.834Z"
---

## Basic Information

| Field | Details |
| --- | --- |
| English name | Subnet & Route Table |
| Full name | Subnet & Route Table |
| Chinese description | 子网与路由表 |
| Japanese description | サブネットとルートテーブル |
| Exam frequency | ⭐⭐⭐⭐⭐ |
| Often confused with | Public / Private Subnet |

## In one sentence

> A subnet divides the VPC address space and is bound to one AZ; a route table chooses the next hop according to the destination address.

## CIDR basics

- IPv4 has 32 bits. A `/16` fixes the first 16 bits and leaves 16 bits for addresses.
- `10.0.0.0/16` contains 65,536 addresses.
- `10.0.1.0/24` contains 256 addresses; AWS reserves the first four and last one, leaving 251 assignable addresses.
- Avoid overlapping CIDRs across VPCs, on-premises networks, and future connections.

## Subnets

- A subnet belongs to exactly one Availability Zone.
- A common design creates public, private application, and private database subnets in two or more AZs.
- “Public” and “private” are not fixed subnet types; they mainly describe the associated routes.

## Route tables

- Every subnet is associated with a route table.
- The `local` route handles traffic inside the VPC CIDR.
- `0.0.0.0/0` is the IPv4 default route and `::/0` is the IPv6 default route.
- AWS uses **longest prefix matching**: the most specific matching route wins.

## What makes a subnet public?

For an EC2 instance to communicate directly with the internet, it normally needs all of the following:

1. A route such as `0.0.0.0/0 → IGW`.
2. A public IPv4 address or Elastic IP.
3. Security group and NACL rules that allow the traffic.
4. An application listening on the expected port.

Automatically assigning a public IPv4 does not, by itself, make a subnet public.

## Private subnets and outbound access

A private subnet has no direct route to an IGW, but it can use:

- A NAT Gateway for outbound internet access.
- A VPC endpoint for private access to supported AWS services.
- VPN or Direct Connect for on-premises access.

## Production guidance

- Build corresponding subnets across at least two AZs.
- Place ALBs and public NAT Gateways in public subnets.
- Keep application and database workloads in private subnets.
- Deploy one NAT Gateway per AZ when availability and cross-AZ cost justify it.
- Express ALB → application → database access with security group references.

## Exam focus

Know CIDR sizing, longest prefix matching, main route tables, cross-AZ subnet design, NAT availability, VPC endpoints, and IPv4 versus IPv6 default routes.

## Key takeaway

> **CIDR divides addresses, a subnet binds them to an AZ, and the route table selects the next hop by longest-prefix match.**

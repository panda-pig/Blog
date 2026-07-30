---
title: Amazon VPC
fullName: "Amazon Virtual Private Cloud"
description: A logically isolated network in an AWS Region where you define address ranges, subnets, routes, and security controls.
service: VPC
category: networking
kind: service
lang: en
frequency: "Exam frequency ⭐⭐⭐⭐⭐"
date: 2026-07-27
updated: 2026-07-30
tags: [Networking, VPC, SAA-C03, Cloud Practitioner]
notionId: 3a6964dc-ce4a-81bd-a288-f2453af8ccda
notionUrl: https://app.notion.com/p/3a6964dcce4a81bda288f2453af8ccda
notionUpdated: "2026-07-27T05:37:23.865Z"
---

## Basic Information

| Field | Details |
| --- | --- |
| English name | Amazon VPC |
| Full name | Amazon Virtual Private Cloud |
| Chinese name | 虚拟私有云 |
| Japanese name | 仮想プライベートクラウド |
| Exam frequency | ⭐⭐⭐⭐⭐ |
| Often confused with | Subnet / Security Group / NACL |

## In one sentence

> A VPC is the logical boundary of your AWS network. Actual connectivity is determined by addressing, routing, gateways, and security controls.

## Core purpose

- Define the IP address range used by AWS resources.
- Separate web, application, and database tiers with subnets.
- Use route tables to decide where traffic goes.
- Filter traffic with security groups and network ACLs.
- Connect to the internet, on-premises networks, or AWS services through IGW, NAT Gateway, VPN, Direct Connect, and PrivateLink.

## How it works

- A VPC is a **Regional** resource and can span multiple Availability Zones in that Region.
- You assign an IPv4 and optionally an IPv6 CIDR when creating it.
- A subnet is carved from the VPC CIDR and belongs to exactly one AZ.
- Every subnet is associated with a route table.
- Every route table contains a `local` route for communication inside the VPC.
- Logical isolation alone does not guarantee security; reachability also depends on routes, gateways, public addresses, security groups, NACLs, identity, and service configuration.

## Common architectures

### Three-tier web application

Place the ALB in public subnets, EC2 or ECS workloads in private application subnets, and RDS in isolated database subnets.

### Multi-AZ deployment

Create corresponding subnets in at least two AZs to reduce the impact of an AZ failure.

### Hybrid networking

Use Site-to-Site VPN or Direct Connect to reach an on-premises network.

### Multi-VPC environment

Separate environments, accounts, or business domains, then connect them with services such as Transit Gateway.

## Cloud Practitioner focus

- A VPC is a logically isolated network defined by the customer.
- Subnets organize and isolate resources.
- An IGW connects to the internet; VGW or TGW can support private connectivity.
- AWS manages the underlying infrastructure; the customer manages VPC configuration, routes, and security rules.

## SAA-C03 focus

- Plan CIDRs to avoid overlap with other VPCs and on-premises networks.
- Design subnets across Availability Zones.
- Choose among public routing, NAT Gateway, and VPC endpoints.
- Troubleshoot with security groups, NACLs, and VPC Flow Logs.
- Understand the boundaries of VPC Peering, Transit Gateway, and PrivateLink.

## Common misconceptions

- A VPC does not span Regions.
- A subnet does not span Availability Zones.
- Services such as S3 or Lambda are not automatically “inside your subnet.”
- Default VPCs and custom VPCs have different initial components and security behavior.

## Key takeaway

> **VPC defines the range, subnets define the partitions, route tables define direction, SGs and NACLs define passage, and gateways define connections.**

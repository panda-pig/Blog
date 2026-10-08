---
title: "IGW, NAT, EIGW & VPC Endpoints"
fullName: "IGW vs NAT Gateway vs NAT Instance vs Egress-only IGW vs VPC Endpoint"
description: "First ask whether traffic targets the internet, an IPv4-only system, or a specific AWS service, then choose the egress component."
service: "IGW vs NAT Gateway vs NAT Instance vs Egress-only IGW vs VPC Endpoint"
category: compare
kind: compare
lang: en
topicKey: "IGW vs NAT Gateway vs NAT Instance vs Egress-only IGW vs VPC Endpoint"
frequency: "高频对比"
date: 2026-10-08
updated: 2026-10-08
tags: ["compare","IGW vs NAT Gateway vs NAT Instance vs Egress-only IGW vs VPC Endpoint","AWS"]
notionId: 3f3964dc-ce4a-81f0-b01d-e5d7ed9d80b0
notionUrl: https://app.notion.com/p/3f3964dcce4a81f0b01de5d7ed9d80b0
notionUpdated: "2026-10-08T01:19:18.066Z"
---
## Basic information

| Field | Details |
| --- | --- |
| English / full name | IGW vs NAT Gateway vs NAT Instance vs Egress-only IGW vs VPC Endpoint |
| Chinese | 互联网出口与私有服务访问对比 |
| Japanese | Internet 出口と Private Service Access の比較 |
| Review priority | 高频对比 |
| Often confused with | Internet / IPv4-only / AWS Service / Administrative Access |

## In one sentence

First ask whether traffic targets the internet, an IPv4-only system, or a specific AWS service, then choose the egress component.

## Core summary

IGW provides direct public connectivity; NAT provides private IPv4 egress; EIGW provides outbound-only IPv6; endpoints provide private access to selected services.

## Study points

- Prefer a gateway endpoint for heavy same-Region S3 or DynamoDB access.
- An interface endpoint uses subnet ENIs, private IPs, and security groups.
- Use a public NAT for a stable IPv4 egress path.
- Use DNS64/NAT64, not EIGW, for IPv6-to-IPv4 access.

## Common pitfalls

- A NAT Gateway cannot have a security group.
- A bastion is an administrative entry point, not a NAT device.

## Key memory

**Internet, IPv4-only destinations, selected services, and administrator access are four separate needs.**

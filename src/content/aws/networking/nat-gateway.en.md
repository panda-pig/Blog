---
title: NAT Gateway
fullName: "Network Address Translation Gateway"
description: Gives private IPv4 resources outbound access to the internet or public services without accepting internet-initiated connections.
service: NAT Gateway
category: networking
kind: service
lang: en
frequency: "Exam frequency ⭐⭐⭐⭐⭐"
date: 2026-07-27
updated: 2026-07-30
tags: [NAT Gateway, Private Subnet, VPC Endpoint, SAA-C03]
notionId: 3a6964dc-ce4a-81f6-b429-f216d258f807
notionUrl: https://app.notion.com/p/3a6964dcce4a81f6b429f216d258f807
notionUpdated: "2026-07-27T05:37:29.758Z"
---

## Basic Information

| Field | Details |
| --- | --- |
| English name | NAT Gateway |
| Full name | Network Address Translation Gateway |
| Chinese description | 网络地址转换网关 |
| Japanese description | NAT ゲートウェイ |
| Exam frequency | ⭐⭐⭐⭐⭐ |
| Often confused with | Internet Gateway / NAT Instance / VPC Endpoint |

## In one sentence

> A NAT Gateway lets private IPv4 resources initiate connections to the internet while preventing the internet from initiating connections to those resources.

## Core purpose

- Translate private IPv4 source addresses.
- Provide an outbound path for patches, software repositories, and external APIs.
- Keep private workloads from needing public IPv4 addresses.

## Public NAT Gateway path

`Private instance → Private route table → NAT Gateway → Public subnet route table → IGW → Internet`

Configuration requirements:

- Create the NAT Gateway in a **public subnet**.
- Assign an Elastic IP to a public NAT Gateway.
- Point the private subnet’s default route to the NAT Gateway.
- Point the NAT subnet’s default route to the IGW.

## Availability and AZ design

A NAT Gateway is created in one AZ. Production designs commonly deploy one per AZ and route each private subnet to the NAT Gateway in the same AZ, reducing cross-AZ dependencies and data-transfer cost.

## Typical uses

- Private EC2 instances downloading patches or calling third-party APIs.
- Private containers pulling public images.
- Applications accessing public services that do not support VPC endpoints.

## Exam focus

- Understand the public subnet, Elastic IP, and route dependencies.
- Know the one-NAT-per-AZ availability pattern.
- Compare NAT Gateway with gateway and interface VPC endpoints.
- IPv6 does not use NAT Gateway; use an Egress-only IGW for outbound-only IPv6.

## Common misconceptions

- NAT Gateway is not an inbound entry point for private instances.
- Placing a public NAT Gateway in a private subnet breaks the normal path.
- Creating one does not automatically change private route tables.
- S3 and DynamoDB traffic may use gateway endpoints instead of NAT.

## Key takeaway

> **The private subnet routes to NAT; the public subnet containing NAT routes through the IGW.**

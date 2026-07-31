---
title: "VPN Components: VGW and Customer Gateway"
fullName: "Virtual Private Gateway & Customer Gateway"
description: "A Site-to-Site VPN connects the AWS-side gateway with a customer-side device definition through redundant tunnels."
service: "VPN Components：VGW & Customer Gateway"
category: networking
kind: service
lang: en
topicKey: "VPN Components：VGW & Customer Gateway"
frequency: "Exam frequency ⭐⭐⭐⭐"
date: 2026-07-30
updated: 2026-07-31
tags: ["networking","VPN Components：VGW & Customer Gateway","AWS"]
notionId: 3aa964dc-ce4a-8199-bdd8-df77a47a2a89
notionUrl: https://app.notion.com/p/3aa964dcce4a8199bdd8df77a47a2a89
notionUpdated: "2026-07-30T04:27:13.346Z"
---

## Basic Information

| Field | Details |
| --- | --- |
| English name | VPN Components |
| Full name | Virtual Private Gateway & Customer Gateway |
| Chinese description | VPN 组件：虚拟私有网关与客户网关 |
| Japanese description | VPN コンポーネント（仮想プライベートゲートウェイ／カスタマーゲートウェイ） |
| Exam frequency | ⭐⭐⭐⭐ |
| Often confused with | Client VPN / Site-to-Site VPN / Direct Connect |

## In one sentence

> A Site-to-Site VPN connects the AWS-side gateway with a customer-side device definition through redundant tunnels.

## Key points

- Virtual Private Gateway attaches to a VPC and represents the AWS side of a traditional VPN design.
- Customer Gateway represents the customer router and its public IP or BGP information.
- The physical customer router and the AWS Customer Gateway resource are not the same thing.

## Exam takeaway

> Both tunnels and routing configuration must be used correctly to achieve redundancy.

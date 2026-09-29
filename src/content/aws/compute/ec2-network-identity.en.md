---
title: "EC2 Network Identity: IPs, Elastic IPs, and ENIs"
fullName: "EC2 Network Identity: IP Addresses and Elastic Network Interfaces"
description: "Understand how EC2 instances, ENIs, private and public addresses, and Elastic IPs behave across lifecycle events."
service: "Amazon EC2"
category: compute
kind: topic
lang: en
topicKey: "EC2 Network Identity"
frequency: "SAA 高频"
date: 2026-09-29
updated: 2026-09-29
tags: ["EC2", "ENI", "Elastic IP", "networking"]
notionId: 3e8964dc-ce4a-818f-b6e3-c873d6aee0e0
notionUrl: https://app.notion.com/p/3e8964dcce4a818fb6e3c873d6aee0e0
notionUpdated: "2026-09-27T05:01:04.233Z"
---

## In one sentence

**EC2 provides compute; an ENI carries network identity.** Private IPs, MAC addresses, and security groups primarily follow the ENI, while an Elastic IP is a fixed public IPv4 address that can be reassociated.

## Addresses and interfaces

| Object | Purpose | Lifecycle behavior |
| --- | --- | --- |
| Private IPv4 | Communication inside a VPC | The primary private IP normally survives stop/start |
| Auto-assigned public IPv4 | Temporary public identity | Released on stop or hibernate and usually changes after start |
| Elastic IP | Fixed public IPv4 | Can be reassociated; unused or attached addresses may incur cost |
| ENI | Virtual NIC and network identity | Belongs to one subnet and therefore one AZ |
| Secondary private IP | An extra address on the same ENI | It is not a second network card |
| Secondary ENI | A separate additional interface | Can move between compatible instances in the same AZ |

A public address alone does not make an instance reachable. The IGW route, security controls, host firewall, and application listener must also be correct.

## Design patterns

- Fixed public entry for one resource: Elastic IP; at scale, prefer DNS and load balancing.
- Fixed egress address: private EC2 → NAT Gateway + Elastic IP.
- Same-AZ network identity failover: move a secondary ENI and retain its private IP, MAC, and security groups.
- NAT, router, or firewall appliance: source/destination checks normally need to be disabled.
- Extra ENIs separate responsibilities and paths; they do not automatically double bandwidth.

## Remember

**An IP identifies an address; an ENI owns the network identity. ENI failover cannot cross AZs, so it is not complete Multi-AZ high availability.**

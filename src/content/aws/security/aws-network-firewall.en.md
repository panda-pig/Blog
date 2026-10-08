---
title: "AWS Network Firewall"
fullName: "AWS Network Firewall"
description: "Deploys managed firewall endpoints in the actual VPC traffic path to inspect and filter network traffic."
service: "AWS Network Firewall"
category: security
kind: service
lang: en
topicKey: "AWS Network Firewall"
frequency: "考试频率 ⭐⭐⭐⭐"
date: 2026-10-08
updated: 2026-10-08
tags: ["security","AWS Network Firewall","AWS"]
notionId: 3f3964dc-ce4a-813c-98c2-e5aff6fa8260
notionUrl: https://app.notion.com/p/3f3964dcce4a813c98c2e5aff6fa8260
notionUpdated: "2026-10-08T01:19:17.132Z"
---
## Basic information

| Field | Details |
| --- | --- |
| English / full name | AWS Network Firewall |
| Chinese | AWS 网络防火墙 |
| Japanese | AWS ネットワークファイアウォール |
| Review priority | 考试频率 ⭐⭐⭐⭐ |
| Often confused with | AWS WAF / Security Group / NACL / Firewall Manager / GWLB |

## In one sentence

Deploys managed firewall endpoints in the actual VPC traffic path to inspect and filter network traffic.

## Core summary

A policy combines stateless and stateful rule groups. Route tables must send forward and return flows symmetrically through the correct AZ endpoint.

## Study points

- Matches IPs, ports, protocols, domains, and connection state.
- Central inspection VPCs often combine Transit Gateway and appliance mode.
- Logs can go to CloudWatch Logs, S3, or Firehose.
- Firewall Manager can govern policies across an organization.

## Common pitfalls

- Creating an endpoint does not automatically inspect an entire VPC.
- WAF filters web requests; Network Firewall inspects traffic routed through its endpoint.

## Key memory

**Network Firewall inspects endpoint traffic; Firewall Manager governs the policy.**

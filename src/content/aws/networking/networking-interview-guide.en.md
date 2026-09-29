---
title: "AWS Networking Interview Guide"
fullName: "AWS Networking Interview Guide"
description: "Troubleshoot AWS networking layer by layer across DNS, routes, subnet controls, load balancing, and host services."
service: "AWS Networking"
category: networking
kind: topic
lang: en
topicKey: "AWS Networking Interview Guide"
frequency: "面试高频"
date: 2026-09-29
updated: 2026-09-29
tags: ["networking", "interview", "VPC", "Route 53"]
notionId: 3a6964dc-ce4a-81c4-b497-e67b87637a6a
notionUrl: https://app.notion.com/p/3a6964dcce4a81c4b497e67b87637a6a
notionUpdated: "2026-09-27T07:54:44.333Z"
---

## Layered answer

Source and destination → DNS → route/IGW/NAT → subnet/NACL → security group → host firewall → application listener → logs and VPC Flow Logs.

## Frequent questions

| Question | Strong answer |
| --- | --- |
| SG vs NACL | ENI, stateful, allow-only / subnet, stateless, allow-deny, rule-number order |
| ALB / NLB / GWLB | HTTP content routing / L4 and static IP / security-appliance traffic |
| Only ALB may reach EC2 | Reference the ALB SG from the application SG; do not hard-code ALB IPs |
| Timeout / refused / permission denied | Network path / service listener / SSH identity |
| Route 53 policy | Weighted, latency, failover, geo, and IP-based policies select DNS answers |
| Hybrid DNS | On-prem to AWS uses inbound; AWS to on-prem uses outbound + resolver rule |
| CloudFront vs Global Accelerator | HTTP cache and edge features / TCP-UDP Anycast IP and path optimization |

## Boundaries

- A public IP does not guarantee Internet reachability.
- Route 53 failover changes DNS answers; it does not move existing connections or provide complete DR.
- Alias records can target supported AWS resources at the zone apex; CNAME cannot be used there.
- An Active load balancer does not mean its targets are healthy.
- An ASG owns capacity and replacement; an ELB routes only to healthy targets.

## Remember

**Troubleshoot by layer; never respond to every timeout by editing only the security group.**

---
title: "ALB vs NLB vs GWLB"
fullName: "ALB vs NLB vs GWLB"
description: "Choose an Elastic Load Balancing type by protocol layer, content routing, static IP requirements, and appliance insertion."
service: "AWS Compare"
category: compare
kind: compare
lang: en
topicKey: "ALB vs NLB vs GWLB"
frequency: "高频对比"
date: 2026-09-29
updated: 2026-09-29
tags: ["compare", "ALB", "NLB", "GWLB"]
notionId: 3a6964dc-ce4a-8180-ba10-e743959d6b68
notionUrl: https://app.notion.com/p/3a6964dcce4a8180ba10e743959d6b68
notionUpdated: "2026-09-27T06:03:01.756Z"
---

## One-line choice

- **ALB**: HTTP/HTTPS, host/path/header routing, and microservice entry points.
- **NLB**: TCP/UDP/TLS, very low latency, high throughput, and static IPs.
- **GWLB**: transparent insertion and scaling of firewalls, IDS/IPS, and DPI appliances.

## Comparison

| Dimension | ALB | NLB | GWLB |
| --- | --- | --- | --- |
| Primary layer | Layer 7 | Layer 4 | Layer 3 |
| Traffic | HTTP, HTTPS, WebSocket, gRPC | TCP, TLS, UDP | IP packet inspection |
| Core strength | Content routing and multiple target groups | Static IP/EIP and low latency | GENEVE encapsulation and appliance scale |
| Fixed public IP | Primarily DNS-based | Static IP per AZ; optional EIP | Traffic enters through GWLBe and route tables |
| Typical target | instance, ip, lambda | instance, ip, alb | firewall / IDS / IPS appliance |

## Exam boundaries

- Need both fixed ingress IPs and Layer 7 routing: NLB → ALB.
- An HTTP health check does not make an NLB a Layer 7 proxy.
- An NLB TLS listener terminates TLS; TCP 443 can pass it through.
- GWLB distributes traffic but does not implement firewall policy itself.
- An Active load balancer does not mean its targets are healthy.
- Cross-zone controls node-to-target routing; it is not the same as Multi-AZ.

## Remember

**Choose ALB for HTTP semantics, NLB for connections and static IPs, and GWLB for a security-appliance service chain.**

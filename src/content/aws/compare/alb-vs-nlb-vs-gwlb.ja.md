---
title: "ALB vs NLB vs GWLB"
fullName: "ALB vs NLB vs GWLB"
description: "Protocol Layer、Content Routing、固定 IP、Security Appliance への引き込みで ELB の種類を選びます。"
service: "AWS Compare"
category: compare
kind: compare
lang: ja
topicKey: "ALB vs NLB vs GWLB"
frequency: "高频对比"
date: 2026-09-29
updated: 2026-09-29
tags: ["compare", "ALB", "NLB", "GWLB"]
notionId: 3a6964dc-ce4a-8180-ba10-e743959d6b68
notionUrl: https://app.notion.com/p/3a6964dcce4a8180ba10e743959d6b68
notionUpdated: "2026-09-27T06:03:01.756Z"
---

## ひとことで選択

- **ALB**：HTTP / HTTPS、Host / Path / Header Routing、Microservice の入口。
- **NLB**：TCP / UDP / TLS、超低遅延、高 Throughput、固定 IP。
- **GWLB**：Firewall、IDS / IPS、DPI Appliance へ IP Traffic を透過的に転送。

## 比較

| 観点 | ALB | NLB | GWLB |
| --- | --- | --- | --- |
| 主な Layer | Layer 7 | Layer 4 | Layer 3 |
| Traffic | HTTP、HTTPS、WebSocket、gRPC | TCP、TLS、UDP | IP Packet Inspection |
| 強み | Content Routing と複数 Target Group | Static IP / EIP と低遅延 | GENEVE と Appliance の Scale |
| 固定 Public IP | 主に DNS | AZ ごとに Static IP、EIP も可 | GWLBe と Route Table で経路化 |
| 代表 Target | instance、ip、lambda | instance、ip、alb | Firewall / IDS / IPS |

## 境界

- 固定 IP と Layer 7 Routing の両方が必要なら NLB → ALB。
- HTTP Health Check を使っても NLB は Layer 7 にはなりません。
- NLB TLS Listener は TLS を終端し、TCP 443 は透過できます。
- GWLB は Traffic を配信しますが、Firewall Policy 自体は実行しません。
- Load Balancer が Active でも Target が Healthy とは限りません。
- Cross-Zone は Node から Target への Routing 範囲で、Multi-AZ と同義ではありません。

## 要点

**HTTP の意味で ALB、接続と固定 IP で NLB、Security Appliance の Service Chain で GWLB を選びます。**

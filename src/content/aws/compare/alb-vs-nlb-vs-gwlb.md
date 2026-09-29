---
title: "ALB vs NLB vs GWLB"
fullName: "ALB vs NLB vs GWLB"
description: "按协议层、内容路由、固定 IP 与安全设备引流选择 Elastic Load Balancing 类型。"
service: "AWS Compare"
category: compare
kind: compare
lang: zh
topicKey: "ALB vs NLB vs GWLB"
frequency: "高频对比"
date: 2026-09-29
updated: 2026-09-29
tags: ["compare", "ALB", "NLB", "GWLB"]
notionId: 3a6964dc-ce4a-8180-ba10-e743959d6b68
notionUrl: https://app.notion.com/p/3a6964dcce4a8180ba10e743959d6b68
notionUpdated: "2026-09-27T06:03:01.756Z"
---

## 一句话结论

- **ALB**：HTTP / HTTPS、Host / Path / Header 路由与微服务入口。
- **NLB**：TCP / UDP / TLS、极低延迟、高吞吐与固定 IP。
- **GWLB**：将 IP 流量透明引向 Firewall、IDS / IPS、DPI 等 Virtual Appliance。

## 核心对比

| 维度 | ALB | NLB | GWLB |
| --- | --- | --- | --- |
| 主要层级 | Layer 7 | Layer 4 | Layer 3 |
| 典型流量 | HTTP、HTTPS、WebSocket、gRPC | TCP、TLS、UDP | IP Packet Inspection |
| 核心能力 | 内容路由、多 Target Group | Static IP / EIP、低延迟 | GENEVE 封装与 Appliance 扩展 |
| 固定公网 IP | 主要使用 DNS | 每 AZ Static IP，可选 EIP | 通过 GWLBe 与 Route Table 引流 |
| 典型目标 | instance、ip、lambda | instance、ip、alb | Firewall / IDS / IPS Appliance |

## 高频边界

- 固定 IP 入口又要 Layer 7 路由，可使用 NLB → ALB。
- NLB 的 HTTP Health Check 不会把它变成 Layer 7。
- NLB TLS Listener 负责 TLS Termination；TCP 443 可以透传。
- GWLB 负责流量分发，不亲自执行 Firewall Policy。
- Load Balancer 为 Active 不代表 Target Healthy；排错从 Target Health、Protocol、Port、Path 与安全规则开始。
- Cross-Zone 是节点到目标的路由范围，不等于 Multi-AZ。

## 重点记忆

**看 HTTP 内容选 ALB，看连接与固定 IP 选 NLB，看安全设备服务链选 GWLB。**

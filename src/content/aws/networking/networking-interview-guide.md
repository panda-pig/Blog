---
title: "AWS Networking 面试速查"
fullName: "AWS Networking Interview Guide"
description: "用 DNS、路由、子网边界、安全控制、负载均衡和主机服务分层排查 AWS 网络。"
service: "AWS Networking"
category: networking
kind: topic
lang: zh
topicKey: "AWS Networking Interview Guide"
frequency: "面试高频"
date: 2026-09-29
updated: 2026-09-29
tags: ["networking", "interview", "VPC", "Route 53"]
notionId: 3a6964dc-ce4a-81c4-b497-e67b87637a6a
notionUrl: https://app.notion.com/p/3a6964dcce4a81c4b497e67b87637a6a
notionUpdated: "2026-09-27T07:54:44.333Z"
---

## 分层回答

流量来源与目的 → DNS → Route / IGW / NAT → Subnet / NACL → Security Group → Host Firewall → Application Listener → Logging / Flow Logs。

## 高频问题

| 问题 | 回答重点 |
| --- | --- |
| SG vs NACL | ENI、Stateful、Allow-only / Subnet、Stateless、Allow-Deny、按号匹配 |
| ALB / NLB / GWLB | HTTP 内容路由 / L4 与固定 IP / 安全设备流量 |
| 只允许 ALB 访问 EC2 | App SG 的 Source 引用 ALB SG，不硬编码 ALB IP |
| Timeout / Refused / Permission Denied | 网络路径 / 服务监听 / SSH 身份 |
| Route 53 Policy | Weighted、Latency、Failover、Geo、IP-based 都是 DNS Answer 选择 |
| Hybrid DNS | On-prem → AWS 用 Inbound；AWS → On-prem 用 Outbound + Resolver Rule |
| CloudFront vs Global Accelerator | HTTP 缓存与边缘能力 / TCP-UDP 固定 Anycast IP 与网络路径优化 |

## 关键边界

- Public IP 不等于公网可达。
- Route 53 Failover 只改变 DNS Answer，不会迁移已有连接，也不等于完整 DR。
- Alias 可用于 Zone Apex 指向受支持 AWS Target；CNAME 不能放在 Apex。
- ELB Active 不等于 Target Healthy。
- ASG 管实例数量与替换；ELB 只向健康目标分流。

## 重点记忆

**网络问题按层排查；不要看到 Timeout 就只改 Security Group。**

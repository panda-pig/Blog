---
title: "IPv6 & Egress-only Internet Gateway"
fullName: "IPv6 and Egress-only Internet Gateway"
description: "EIGW 为公网 IPv6 资源提供仅主动出站的互联网路径，允许相关返回，不做 NAT。"
service: "IPv6 and Egress-only Internet Gateway"
category: networking
kind: service
lang: zh
topicKey: "IPv6 and Egress-only Internet Gateway"
frequency: "考试频率 ⭐⭐⭐⭐"
date: 2026-10-08
updated: 2026-10-08
tags: ["networking","IPv6 and Egress-only Internet Gateway","AWS"]
notionId: 3f3964dc-ce4a-81fa-a77f-f09140280e7d
notionUrl: https://app.notion.com/p/3f3964dcce4a81faa77ff09140280e7d
notionUpdated: "2026-10-08T01:13:37.200Z"
---
## 基本信息

| 字段 | 内容 |
| --- | --- |
| 英文 / 全称 | IPv6 and Egress-only Internet Gateway |
| 中文 | IPv6 与仅出站互联网网关 |
| 日文 | IPv6 と Egress-only Internet Gateway |
| 复习优先级 | 考试频率 ⭐⭐⭐⭐ |
| 易混淆 | Internet Gateway / NAT Gateway / NAT64 / Dual Stack |

## 一句话理解

EIGW 为公网 IPv6 资源提供仅主动出站的互联网路径，允许相关返回，不做 NAT。

## 核心整理

IPv4 和 IPv6 使用独立 CIDR、路由和安全规则；::/0 → EIGW 控制 IPv6 主动出站。

## 学习重点

- IPv6 到 IPv6 的仅出站使用 EIGW。
- IPv6 客户端访问 IPv4-only 目标需要 DNS64/NAT64。
- 双栈子网仍可能因 IPv4 地址耗尽而无法创建实例。
- IPv6 地址可公开路由不等于无需 SG/NACL。

## 常见误区

- 0.0.0.0/0 不覆盖 IPv6，::/0 也不覆盖 IPv4。
- EIGW 不做地址转换，也不负责 IPv6→IPv4。

## 重点记忆

**IPv6→IPv6 仅出网用 EIGW；IPv6→IPv4 转换用 NAT64。**

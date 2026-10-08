---
title: "IGW、NAT、EIGW 与 VPC Endpoint"
fullName: "IGW vs NAT Gateway vs NAT Instance vs Egress-only IGW vs VPC Endpoint"
description: "先问流量去互联网、IPv4-only 目标还是指定 AWS 服务，再选择出口组件。"
service: "IGW vs NAT Gateway vs NAT Instance vs Egress-only IGW vs VPC Endpoint"
category: compare
kind: compare
lang: zh
topicKey: "IGW vs NAT Gateway vs NAT Instance vs Egress-only IGW vs VPC Endpoint"
frequency: "高频对比"
date: 2026-10-08
updated: 2026-10-08
tags: ["compare","IGW vs NAT Gateway vs NAT Instance vs Egress-only IGW vs VPC Endpoint","AWS"]
notionId: 3f3964dc-ce4a-81f0-b01d-e5d7ed9d80b0
notionUrl: https://app.notion.com/p/3f3964dcce4a81f0b01de5d7ed9d80b0
notionUpdated: "2026-10-08T01:19:18.066Z"
---
## 基本信息

| 字段 | 内容 |
| --- | --- |
| 英文 / 全称 | IGW vs NAT Gateway vs NAT Instance vs Egress-only IGW vs VPC Endpoint |
| 中文 | 互联网出口与私有服务访问对比 |
| 日文 | Internet 出口と Private Service Access の比較 |
| 复习优先级 | 高频对比 |
| 易混淆 | Internet / IPv4-only / AWS Service / Administrative Access |

## 一句话理解

先问流量去互联网、IPv4-only 目标还是指定 AWS 服务，再选择出口组件。

## 核心整理

IGW 负责直接公网连接；NAT 负责私有 IPv4 主动出网；EIGW 负责 IPv6 仅主动出网；Endpoint 负责私有访问指定服务。

## 学习重点

- S3/DynamoDB 大量同 Region 访问优先 Gateway Endpoint。
- Interface Endpoint 使用子网 ENI、私有 IP 与 SG。
- 固定 IPv4 出口通常用 Public NAT。
- IPv6→IPv4 访问使用 DNS64/NAT64，而不是 EIGW。

## 常见误区

- NAT Gateway 不绑定 SG。
- Bastion 是管理入口，不是 NAT。

## 重点记忆

**Internet、IPv4-only、指定服务和管理员登录是四种不同需求。**

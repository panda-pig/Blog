---
title: "AWS PrivateLink & VPC Endpoints"
fullName: "AWS PrivateLink & VPC Endpoints"
description: "让 VPC 内客户端通过私有 IP 访问指定服务，无需 IGW、NAT、公有 IP，也无需把两个完整网络打通。"
service: "AWS PrivateLink & VPC Endpoints"
category: networking
kind: service
lang: zh
topicKey: "AWS PrivateLink & VPC Endpoints"
frequency: "考试频率 ⭐⭐⭐⭐⭐"
date: 2026-07-30
updated: 2026-07-31
tags: ["networking","AWS PrivateLink & VPC Endpoints","AWS"]
notionId: 3a6964dc-ce4a-81f7-8e00-fab34be32604
notionUrl: https://app.notion.com/p/3a6964dcce4a81f78e00fab34be32604
notionUpdated: "2026-07-30T04:29:21.069Z"
---

## 基本信息

| 字段 | 内容 |
| --- | --- |
| 英文 | AWS PrivateLink & VPC Endpoints |
| 全称 | AWS PrivateLink & VPC Endpoints |
| 中文释义 | 私有服务访问 |
| 日文释义 | プライベートサービス接続 |
| 考试频率 | ⭐⭐⭐⭐⭐ |
| 易混淆 | NAT Gateway / VPC Peering / Site-to-Site VPN |

## 一句话理解

让 VPC 内客户端通过私有 IP 访问**指定服务**，无需 IGW、NAT、公有 IP，也无需把两个完整网络打通。

## 核心概念

- Interface Endpoint：在子网中创建 ENI 与私有 IP，许多 AWS 服务和 Endpoint Service 使用此方式，底层由 PrivateLink 提供。
- Gateway Endpoint：面向 S3 与 DynamoDB，通过路由表工作，不使用 PrivateLink ENI。
- Endpoint Service：服务提供方通常通过 Network Load Balancer 发布私有服务。
- Private DNS：可让原有服务域名解析到私有端点。

## 典型使用场景

- 私有子网访问支持 PrivateLink 的 AWS 服务。
- VPC A 私密调用 VPC B 发布的内部支付/订单服务。
- 客户私密访问 SaaS 服务。
- 不希望使用公有 IP、NAT 或全网 VPC Peering 的场景。

## 关键价值

- 流量不需要经过公共互联网。
- 只暴露指定服务，减少网络互信范围。
- 支持跨账户服务消费。
- IP 地址空间重叠时，服务级连接往往比全网互联更合适。

## Cloud Practitioner 考点

PrivateLink = 私密访问指定服务；不是 VPN、专线或互联网加速。

## SAA-C03 考点

- Interface Endpoint vs Gateway Endpoint。
- Endpoint Policy、Security Group、Private DNS。
- Endpoint Service 与 NLB。
- PrivateLink vs VPC Peering / Transit Gateway / NAT Gateway。

## 常见误区

- PrivateLink 不提供任意两个网络之间的传递式路由。
- 它不会自动让客户端访问服务 VPC 中的所有资源。
- “连接其他云”不是它最典型的定位；通常仍需服务提供方以受支持方式发布端点服务。
- Gateway Endpoint 与 Interface Endpoint 的实现、计费和服务范围不同。

## 易混淆服务

- NAT Gateway：私有子网主动访问公网。
- VPC Peering / Transit Gateway：网络到网络互联。
- PrivateLink：客户端到指定服务的私密访问。

## 面试高频问题

1. PrivateLink 为什么比 VPC Peering 暴露范围更小？
2. Interface Endpoint 与 Gateway Endpoint 有何区别？
3. 如何发布跨账户私有服务？

## 重点记忆

**PrivateLink 不打通整张网，只把一项服务私密地放到消费者面前。**

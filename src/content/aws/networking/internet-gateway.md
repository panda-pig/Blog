---
title: Internet Gateway
fullName: Internet Gateway (IGW)
description: 附加到 VPC 的高可用互联网入口与出口，但它不会自动让所有资源获得公网连通性。
service: IGW
category: networking
kind: service
lang: zh
frequency: "考试频率 ★★★★"
date: 2026-07-27
updated: 2026-07-27
tags:
  - Internet Gateway
  - VPC
  - Public Subnet
  - SAA-C03
notionId: 3a6964dc-ce4a-81ba-86d3-dca3dc2f01fd
notionUrl: https://app.notion.com/p/3a6964dcce4a81ba86d3dca3dc2f01fd
notionUpdated: "2026-07-27T05:37:27.928Z"
---

## 一句话理解

> IGW 是附加到 VPC 的高可用互联网入口与出口，但它不会自动让所有资源获得公网连通性。

## 核心作用

- 为 VPC 与互联网之间的 IPv4 或 IPv6 通信提供路由目标。
- 对具有公有 IPv4 的实例执行私有 IPv4 与公有 IPv4 的一对一地址映射。
- 由 AWS 托管，能够水平扩展并具有冗余。

## 工作原理

典型公网路径：

`Internet ↔ IGW ↔ Route Table ↔ Subnet ↔ ENI / EC2`

要成功通信，还需要：

- IGW 已附加到 VPC。
- 子网路由表包含 `0.0.0.0/0 → IGW`；IPv6 使用 `::/0 → IGW`。
- IPv4 实例具有公有 IPv4 或 Elastic IP。
- Security Group、NACL 与操作系统防火墙允许流量。
- 应用监听正确端口。

## 工作中的应用场景

- 面向互联网的 Application Load Balancer。
- 需要直接公网入口的 Web 服务器或 Bastion Host。
- 公有 NAT Gateway 所在的公有子网。

## Cloud Practitioner 考点

IGW 是 VPC 与互联网之间的网关；它不是防火墙，也不是 NAT Gateway。

## SAA-C03 考点

- 公有子网的完整判定条件。
- IGW 与路由表、公有 IPv4 或 EIP 的组合。
- IPv6 只允许出站时可以考虑 Egress-only Internet Gateway，而不是 NAT Gateway。

## 常见误区

- 只附加 IGW 不会自动修改路由表。
- 只设置默认路由也不保证实例能够访问互联网。
- IGW 本身不负责按端口过滤流量。
- 一个 VPC 同时只能附加一个 IGW，但该 IGW 本身具备高可用性。

## 易混淆服务

| 服务 | 作用 |
| --- | --- |
| Internet Gateway | 允许具备条件的资源双向连接互联网 |
| NAT Gateway | 允许私有子网主动出网，不接受互联网主动连接 |
| Virtual Private Gateway | 传统 Site-to-Site VPN 或 Direct Connect 的 VPC 端网关 |

## 面试高频问题

EC2 位于公有子网却无法访问互联网时，应按什么顺序检查？

## 重点记忆

> **IGW 只是大门；路由、公网地址和安全规则决定能否真正通行。**

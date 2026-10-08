---
title: "VPC Peering"
fullName: "VPC Peering"
description: "通过 AWS 网络直接连接两个 CIDR 不重叠的 VPC，并提供非传递式私网互通。"
service: "VPC Peering"
category: networking
kind: service
lang: zh
topicKey: "VPC Peering"
frequency: "考试频率 ⭐⭐⭐⭐⭐"
date: 2026-10-08
updated: 2026-10-08
tags: ["networking","VPC Peering","AWS"]
notionId: 3f3964dc-ce4a-81f6-a599-d72ed784da65
notionUrl: https://app.notion.com/p/3f3964dcce4a81f6a599d72ed784da65
notionUpdated: "2026-10-08T01:13:37.200Z"
---
## 基本信息

| 字段 | 内容 |
| --- | --- |
| 英文 / 全称 | VPC Peering |
| 中文 | VPC 对等连接 |
| 日文 | VPC ピアリング |
| 复习优先级 | 考试频率 ⭐⭐⭐⭐⭐ |
| 易混淆 | Transit Gateway / PrivateLink |

## 一句话理解

通过 AWS 网络直接连接两个 CIDR 不重叠的 VPC，并提供非传递式私网互通。

## 核心整理

连接被接受后，双方相关路由表仍要添加对端 CIDR，SG/NACL 也要允许业务流量。

## 学习重点

- 支持同账号、跨账号、同 Region 和跨 Region。
- A-B 与 B-C 不会自动形成 A-C。
- 不能借用对方的 IGW、NAT、VPN、Direct Connect 或 Gateway Endpoint。
- VPC 数量大时用 Transit Gateway 降低 Mesh 复杂度。

## 常见误区

- Accepted 不等于可达，路由必须双向。
- CIDR 重叠而只需发布一个服务时，考虑 PrivateLink。

## 重点记忆

**双 VPC、地址不重叠、双向路由、非传递。**

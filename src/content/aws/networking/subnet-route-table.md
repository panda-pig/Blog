---
title: Subnet & Route Table
fullName: "Subnet & Route Table"
description: Subnet 划分 VPC 地址空间并绑定一个可用区，Route Table 则根据目的地址决定流量的下一跳。
service: VPC Networking
category: networking
kind: service
lang: zh
frequency: "考试频率 ⭐⭐⭐⭐⭐"
date: 2026-07-27
updated: 2026-07-30
tags:
  - Subnet
  - Route Table
  - CIDR
  - SAA-C03
notionId: 3a6964dc-ce4a-818e-972f-f196d09400b4
notionUrl: https://app.notion.com/p/3a6964dcce4a818e972ff196d09400b4
notionUpdated: "2026-07-27T05:37:25.834Z"
---

## 基本信息

| 字段 | 内容 |
| --- | --- |
| 英文 | Subnet & Route Table |
| 全称 | Subnet & Route Table |
| 中文 | 子网与路由表 |
| 日文 | サブネットとルートテーブル |
| 考试频率 | ⭐⭐⭐⭐⭐ |
| 易混淆 | Public / Private Subnet |

## 一句话理解

Subnet 划分 VPC 地址空间并绑定一个 AZ；Route Table 按目的地址决定流量的下一跳。

## CIDR 基础

- IPv4 共 32 位；/16 表示前 16 位固定，剩余 16 位用于地址。
- 例如 10.0.0.0/16 覆盖 10.0.0.0–10.0.255.255，共 65,536 个地址。
- 10.0.1.0/24 共 256 个地址；AWS 在每个 IPv4 子网保留前 4 个和最后 1 个地址，因此可分配 251 个。
- 规划时应避免不同 VPC、本地网络和未来连接的 CIDR 重叠。

## Subnet

- 一个子网只能位于一个 AZ。
- 常见设计是在两个或更多 AZ 分别创建公有、私有应用、私有数据库子网。
- Public / Private 不是创建时固定的“类型”，主要由关联路由决定。

## Route Table

- 每个子网关联一张路由表。
- local 路由负责 VPC CIDR 内部通信。
- 0.0.0.0/0 是 IPv4 默认路由；::/0 是 IPv6 默认路由。
- 路由选择使用 **最长前缀匹配**：更具体的目的网段优先于默认路由。
- 例如 10.0.0.0/16 → local 会优先于 0.0.0.0/0 → IGW。

## 公有子网判定

要让 EC2 直接与互联网通信，通常同时需要：
1. 子网路由表含 0.0.0.0/0 → IGW。
2. 实例具有公有 IPv4 或 Elastic IP。
3. Security Group 和 NACL 允许所需流量。
4. 应用正在正确端口监听。
Auto-assign public IPv4 只决定实例是否自动获得公有 IPv4，不能单独把子网变成公有子网。

## 私有子网与主动出网

私有子网没有到 IGW 的直接路由，但可以：
- 通过公有子网中的 NAT Gateway 主动访问互联网；
- 通过 VPC Endpoint 私密访问支持的 AWS 服务；
- 通过 VPN 或 Direct Connect 访问本地网络。

## 生产架构建议

- 至少跨两个 AZ 建立对应子网。
- 公有层放 ALB、NAT Gateway 等需要公网路径的组件。
- 应用与数据库尽量放私有子网，并按安全边界继续拆分。
- 为避免跨 AZ 依赖和费用，常见做法是每个 AZ 一个 NAT Gateway，并让私有子网使用同 AZ NAT。
- 用安全组引用表达 ALB → 应用 → 数据库的最小权限关系。

## Cloud Practitioner 考点

Subnet 组织资源；Route Table 决定路径；公有子网能通过 IGW 直接连接互联网，私有子网通常通过 NAT 主动出网。

## SAA-C03 考点

CIDR、最长前缀匹配、主路由表、跨 AZ 子网、NAT 高可用、VPC Endpoint、IPv4/IPv6 默认路由。

## 常见误区

- 子网名字写“public”并不会自动创建公网连接。
- 有 IGW 不等于实例可访问互联网。
- 私有子网不是“完全不能出网”。
- 同一 VPC 中不同子网的通信依赖 local 路由，也仍受 SG/NACL 影响。

## 面试高频问题

1. 如何判断一个子网是否为公有子网？
2. 0.0.0.0/0 与 local 路由冲突时选哪条？
3. 为什么要每个 AZ 部署 NAT Gateway？
4. /16 与 /24 分别有多少 IPv4 地址，AWS 可用地址为何更少？

## 重点记忆

**地址用 CIDR 划分，子网绑定 AZ，路由按最长前缀决定下一跳。**

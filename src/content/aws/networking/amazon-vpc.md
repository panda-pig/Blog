---
title: Amazon VPC
fullName: "Amazon Virtual Private Cloud"
description: 在一个 AWS Region 中创建由自己定义地址范围、子网、路由和安全控制的逻辑隔离网络。
service: VPC
category: networking
kind: service
lang: zh
frequency: "考试频率 ⭐⭐⭐⭐⭐"
date: 2026-07-27
updated: 2026-07-30
tags:
  - Networking
  - VPC
  - SAA-C03
  - Cloud Practitioner
notionId: 3a6964dc-ce4a-81bd-a288-f2453af8ccda
notionUrl: https://app.notion.com/p/3a6964dcce4a81bda288f2453af8ccda
notionUpdated: "2026-07-27T05:37:23.865Z"
---

## 基本信息

| 字段 | 内容 |
| --- | --- |
| 英文 | Amazon VPC |
| 全称 | Amazon Virtual Private Cloud |
| 中文 | 虚拟私有云 |
| 日文 | 仮想プライベートクラウド |
| 考试频率 | ⭐⭐⭐⭐⭐ |
| 易混淆 | Subnet / Security Group / NACL |

## 一句话理解

在一个 AWS Region 中创建由你定义地址范围、子网、路由和安全控制的逻辑隔离网络。

## 核心作用

- 控制 AWS 资源使用的 IP 地址范围。
- 通过子网把 Web、应用、数据库等不同安全层分开。
- 使用路由表决定流量去向。
- 使用 Security Group 与 NACL 筛选流量。
- 通过 IGW、NAT Gateway、VPN、Direct Connect、PrivateLink 等连接互联网、本地网络或服务。

## 工作原理

- VPC 是 **Region 级**资源，可以跨该 Region 的多个 AZ。
- 创建 VPC 时指定 IPv4/IPv6 CIDR。
- Subnet 从 VPC CIDR 中切分，并且每个 Subnet 只能属于一个 AZ。
- 每个子网必须关联一张路由表；未显式关联时使用主路由表。
- 每张路由表都有 VPC 内部通信的 local 路由。
- VPC 的逻辑隔离不等于“任何人都绝对无法进入”，实际可达性由路由、网关、公网地址、SG、NACL、身份与服务配置共同决定。

## 工作中的应用场景

- 三层 Web 架构：公有子网放 ALB，私有应用子网放 EC2/ECS，隔离数据库子网放 RDS。
- 多 AZ 部署：在至少两个 AZ 创建对应子网，降低单个 AZ 故障影响。
- 混合云：通过 Site-to-Site VPN 或 Direct Connect 连接公司网络。
- 多 VPC 架构：按环境、账户或业务域隔离，再用 Transit Gateway 等集中互联。

## Cloud Practitioner 考点

- VPC 是客户在 AWS 中定义的逻辑隔离网络。
- Subnet 用于组织与隔离资源。
- IGW 连接互联网；VGW/TGW 可承载私有网络连接。
- AWS 负责底层基础设施，客户负责 VPC 配置、路由与安全规则。

## SAA-C03 考点

- CIDR 规划，避免 VPC 与本地网络地址重叠。
- 跨 AZ 子网布局与高可用。
- 公有/私有路由、NAT Gateway、VPC Endpoint 选型。
- SG、NACL、VPC Flow Logs 的组合排错。
- 多 VPC 连接：Peering、Transit Gateway、PrivateLink 的边界。

## 常见误区

- VPC 不跨 Region；跨 Region 需要多个 VPC 和额外连接。
- Subnet 不跨 AZ。
- VPC 中的 S3、Lambda 等服务不一定“放在你的子网里”；是否进入 VPC取决于服务与配置。
- “默认 VPC”与自定义 VPC 的默认组件和安全状态不同。

## 面试高频问题

1. VPC、Subnet、Route Table 的关系是什么？
2. 如何设计跨两个 AZ 的公有层、应用层和数据库层？
3. 如何排查 EC2 无法访问互联网？
4. 多 VPC 之间会如何选择 Peering、Transit Gateway 或 PrivateLink？

## 重点记忆

**VPC 管范围，Subnet 管分区，Route Table 管方向，SG/NACL 管通行，Gateway 管连接。**

## 关联服务

Subnet、Route Table、IGW、NAT Gateway、VPC Endpoint、Security Group、NACL、Client VPN、Site-to-Site VPN、Direct Connect、Transit Gateway。

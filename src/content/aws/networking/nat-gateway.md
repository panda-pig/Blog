---
title: NAT Gateway
fullName: "Network Address Translation Gateway"
description: 让私有子网中的 IPv4 资源主动访问互联网或公网服务，同时不接受互联网主动建立的连接。
service: NAT Gateway
category: networking
kind: service
lang: zh
frequency: "考试频率 ⭐⭐⭐⭐⭐"
date: 2026-07-27
updated: 2026-07-30
tags:
  - NAT Gateway
  - Private Subnet
  - VPC Endpoint
  - SAA-C03
notionId: 3a6964dc-ce4a-81f6-b429-f216d258f807
notionUrl: https://app.notion.com/p/3a6964dcce4a81f6b429f216d258f807
notionUpdated: "2026-07-27T05:37:29.758Z"
---

## 基本信息

| 字段 | 内容 |
| --- | --- |
| 英文 | NAT Gateway |
| 全称 | Network Address Translation Gateway |
| 中文释义 | 网络地址转换网关 |
| 日文释义 | NAT ゲートウェイ |
| 考试频率 | ⭐⭐⭐⭐⭐ |
| 易混淆 | Internet Gateway / NAT Instance / VPC Endpoint |

## 一句话理解

让私有子网中的 IPv4 资源主动访问互联网或公网服务，同时不接受互联网主动建立到这些资源的连接。

## 核心作用

- 转换私有 IPv4 源地址。
- 为补丁下载、外部 API 调用、软件仓库等提供出站互联网路径。
- 保持工作负载本身不需要公有 IPv4。

## 公有 NAT Gateway 的工作原理

私有子网实例 → 私有路由表 0.0.0.0/0 → NAT Gateway → 公有子网路由表 → IGW → Internet。
配置要点：
- NAT Gateway 创建在 **公有子网**。
- 公有 NAT Gateway 需要 Elastic IP。
- 私有子网默认路由指向 NAT Gateway。
- NAT 所在公有子网的默认路由指向 IGW。

## 高可用与 AZ

NAT Gateway 在单个 AZ 中创建。生产环境常在每个 AZ 部署一个 NAT Gateway，并让该 AZ 的私有子网使用同 AZ NAT，以降低跨 AZ 依赖与数据传输费用。

## 工作中的应用场景

- 私有 EC2 下载补丁或访问第三方 API。
- 私有容器拉取公共镜像。
- 私有应用访问不支持 VPC Endpoint 的公网服务。

## Cloud Practitioner 考点

NAT Gateway 解决私有子网的主动出网；IGW 解决公有互联网连接。

## SAA-C03 考点

- NAT Gateway 的公有子网、EIP 与路由依赖。
- 每 AZ 一个 NAT 的高可用设计。
- 与 Gateway/Interface VPC Endpoint 的成本、安全与流量路径对比。
- IPv6 不使用 NAT Gateway；仅允许 IPv6 出站可使用 Egress-only IGW。

## 常见误区

- NAT Gateway 不是给互联网用户访问私有实例的入口。
- 把 NAT Gateway 放进私有子网会破坏典型公网 NAT 路径。
- 只创建 NAT Gateway 不会自动修改私有子网路由。
- S3、DynamoDB 等支持 Gateway Endpoint 的服务不一定需要通过 NAT 访问。

## 易混淆服务

- IGW：资源可直接双向连接互联网。
- NAT Gateway：私有 IPv4 资源主动出网。
- VPC Endpoint：私密访问指定 AWS 服务，不必经过互联网或 NAT。

## 面试高频问题

1. 私有子网如何安全访问互联网？
2. 为什么每个 AZ 建议一个 NAT Gateway？
3. NAT Gateway 与 VPC Endpoint 如何选？

## 重点记忆

**私有子网默认路由指向 NAT，NAT 所在公有子网再经 IGW 出网。**

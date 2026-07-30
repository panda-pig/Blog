---
title: "AWS Transit Gateway"
fullName: "AWS Transit Gateway"
description: "以中心辐射（Hub-and-Spoke）方式集中连接多个 VPC、账户、Site-to-Site VPN 和本地网络。"
service: "AWS Transit Gateway"
category: networking
kind: service
lang: zh
topicKey: "AWS Transit Gateway"
frequency: "考试频率 ⭐⭐⭐⭐"
date: 2026-07-30
updated: 2026-07-30
tags: ["networking","AWS Transit Gateway","AWS"]
notionId: 3a6964dc-ce4a-8124-a67f-cdc37acbaba8
notionUrl: https://app.notion.com/p/3a6964dcce4a8124a67fcdc37acbaba8
notionUpdated: "2026-07-27T05:40:32.699Z"
---

## 基本信息

| 字段 | 内容 |
| --- | --- |
| 英文 | AWS Transit Gateway |
| 中文 | 中转网关 |
| 日文 | トランジットゲートウェイ |
| 考试频率 | ⭐⭐⭐⭐ |
| 易混淆 | VPC Peering / Virtual Private Gateway |

## 一句话理解
以中心辐射（Hub-and-Spoke）方式集中连接多个 VPC、账户、Site-to-Site VPN 和本地网络。
## 核心作用
- 减少大量 VPC 点对点连接形成的网状复杂度。
- 通过 TGW Route Table 对网络进行分段和控制。
- 可跨账户共享，并支持大规模混合云。
- 可与 Direct Connect Gateway 组合连接本地网络。
## 工作原理
VPC / VPN / Direct Connect Gateway → Transit Gateway Attachments → TGW Route Tables → 目标网络。
Transit Gateway 是 Region 级资源；跨 Region 可使用 Transit Gateway Peering，但仍需明确路由和数据路径。
## 工作中的应用场景
- 多账户、多 VPC 企业网络中心。
- 生产、开发、共享服务按路由表隔离。
- 多分支机构通过 VPN 集中接入。
- Direct Connect 到多个 VPC 的集中路径。
## Cloud Practitioner 考点
Transit Gateway 是多网络中心枢纽；VGW 主要面向单个 VPC。
## SAA-C03 考点
- Attachments、Route Tables、Propagation 与 Association。
- 网络分段。
- VPC Peering vs Transit Gateway。
- 跨账户共享与跨 Region Peering。
- 与 VPN、Direct Connect Gateway 的集成。
## 常见误区
- TGW 不会自动让所有附件彼此互通；路由表决定可达性。
- 它不是全球单一资源。
- TGW 是网络互联，不是 PrivateLink 那样的指定服务发布。
- 中心化简化连接，但会引入费用、路由治理和共享故障域考虑。
## 面试高频问题
1. 为什么不用大量 VPC Peering？
2. 如何通过多张 TGW Route Table 隔离生产和开发？
3. VGW 与 TGW 如何选择？
## 重点记忆
**VGW 是单 VPC 门，TGW 是多网络交通枢纽。**

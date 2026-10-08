---
title: "VPC Peering vs Transit Gateway vs PrivateLink"
fullName: "VPC Peering vs Transit Gateway vs PrivateLink"
description: "少量双网直连用 Peering，多网络枢纽用 TGW，只发布指定服务用 PrivateLink。"
service: "VPC Peering vs Transit Gateway vs PrivateLink"
category: compare
kind: compare
lang: zh
topicKey: "VPC Peering vs Transit Gateway vs PrivateLink"
frequency: "高频对比"
date: 2026-10-08
updated: 2026-10-08
tags: ["compare","VPC Peering vs Transit Gateway vs PrivateLink","AWS"]
notionId: 3f3964dc-ce4a-8182-ad3f-dd048402b06c
notionUrl: https://app.notion.com/p/3f3964dcce4a8182ad3fdd048402b06c
notionUpdated: "2026-10-08T01:19:18.066Z"
---
## 基本信息

| 字段 | 内容 |
| --- | --- |
| 英文 / 全称 | VPC Peering vs Transit Gateway vs PrivateLink |
| 中文 | VPC 私网连接方案对比 |
| 日文 | VPC Private 接続方式の比較 |
| 复习优先级 | 高频对比 |
| 易混淆 | Network connectivity / Service exposure |

## 一句话理解

少量双网直连用 Peering，多网络枢纽用 TGW，只发布指定服务用 PrivateLink。

## 核心整理

Peering 点对点且不传递；TGW 用 Hub-and-spoke 与路由表分段；PrivateLink 让消费者通过端点访问服务而不是整个网络。

## 学习重点

- Peering 要求 CIDR 不重叠。
- TGW Association 决定入站查哪张表，Propagation 决定哪些路由被传播。
- PrivateLink 可用于双方地址重叠的服务访问。
- 网络路径建立后仍需 IAM、资源策略、端点策略和 TLS。

## 常见误区

- TGW 可传递不等于自动可达，仍需完整路由。
- PrivateLink 不是通用传递路由网络。

## 重点记忆

**两网直连 Peering，多网枢纽 TGW，指定服务 PrivateLink。**

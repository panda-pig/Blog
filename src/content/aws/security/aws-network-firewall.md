---
title: "AWS Network Firewall"
fullName: "AWS Network Firewall"
description: "在 VPC 实际流量路径上部署托管防火墙端点，检查并过滤网络流量。"
service: "AWS Network Firewall"
category: security
kind: service
lang: zh
topicKey: "AWS Network Firewall"
frequency: "考试频率 ⭐⭐⭐⭐"
date: 2026-10-08
updated: 2026-10-08
tags: ["security","AWS Network Firewall","AWS"]
notionId: 3f3964dc-ce4a-813c-98c2-e5aff6fa8260
notionUrl: https://app.notion.com/p/3f3964dcce4a813c98c2e5aff6fa8260
notionUpdated: "2026-10-08T01:19:17.132Z"
---
## 基本信息

| 字段 | 内容 |
| --- | --- |
| 英文 / 全称 | AWS Network Firewall |
| 中文 | AWS 网络防火墙 |
| 日文 | AWS ネットワークファイアウォール |
| 复习优先级 | 考试频率 ⭐⭐⭐⭐ |
| 易混淆 | AWS WAF / Security Group / NACL / Firewall Manager / GWLB |

## 一句话理解

在 VPC 实际流量路径上部署托管防火墙端点，检查并过滤网络流量。

## 核心整理

Firewall Policy 组合无状态和有状态 Rule Groups；路由表必须把正向和返回流量对称地导向正确 AZ 的端点。

## 学习重点

- 支持 IP、端口、协议、域名与状态检查。
- 集中检查 VPC 常结合 TGW 与 Appliance Mode。
- 日志可送 CloudWatch Logs、S3 或 Firehose。
- Firewall Manager 可在组织范围集中管理其策略。

## 常见误区

- 创建端点不等于整个 VPC 自动接受检查。
- WAF 过滤 Web 请求；Network Firewall 检查被路由经过的网络流量。

## 重点记忆

**Network Firewall 检查经过端点的流量；Firewall Manager 管策略。**

---
title: "AWS Site-to-Site VPN"
fullName: "AWS Site-to-Site VPN"
description: "通过公共互联网中的 IPsec 加密隧道，把整个数据中心或分支机构网络连接到 AWS。"
service: "AWS Site-to-Site VPN"
category: networking
kind: service
lang: zh
topicKey: "AWS Site-to-Site VPN"
frequency: "考试频率 ⭐⭐⭐⭐"
date: 2026-07-30
updated: 2026-07-30
tags: ["networking","AWS Site-to-Site VPN","AWS"]
notionId: 3a6964dc-ce4a-81c3-8250-ffcdaf8d86b0
notionUrl: https://app.notion.com/p/3a6964dcce4a81c38250ffcdaf8d86b0
notionUpdated: "2026-07-27T05:40:28.036Z"
---

## 基本信息

| 字段 | 内容 |
| --- | --- |
| 英文 | AWS Site-to-Site VPN |
| 全称 | AWS Site-to-Site VPN |
| 中文 | 站点到站点 VPN |
| 日文 | サイト間 VPN |
| 考试频率 | ⭐⭐⭐⭐ |
| 易混淆 | Client VPN / Direct Connect / PrivateLink |

## 一句话理解

通过公共互联网中的 IPsec 加密隧道，把整个数据中心或分支机构网络连接到 AWS。

## 连接对象

它连接的是**两个网络**，而不是单个员工：
本地站点网络 → Customer Gateway → VPN 隧道 → VGW / Transit Gateway → VPC。

## 核心组件

- Customer Gateway（CGW）：代表客户侧路由器、防火墙或 VPN 设备。
- Virtual Private Gateway（VGW）：附加到单个 VPC 的传统 AWS 端网关。
- Transit Gateway（TGW）：面向多个 VPC / 站点的集中式 AWS 端网关。

## 高可用

AWS Site-to-Site VPN 通常提供两条隧道。真正的高可用要求客户侧设备、BGP/静态路由和监控都正确使用两条隧道；更高要求还应考虑冗余客户网关设备和不同网络路径。

## 适用场景

- 快速建立数据中心或分支机构到 AWS 的安全连接。
- 应用迁移期间的临时或备用网络。
- Direct Connect 的加密或故障备用路径。
- 流量不大且成本优先的混合云。

## Cloud Practitioner 考点

看到“数据中心、分支机构、站点、加密、成本效益、通过互联网”优先想到 Site-to-Site VPN。

## SAA-C03 考点

- 双隧道高可用。
- CGW、VGW、TGW 组件。
- BGP 动态路由与静态路由。
- VPN 与 Direct Connect 的备份、带宽和延迟差异。

## 常见误区

- Site-to-Site VPN 不是远程员工逐人登录的 Client VPN。
- “Private session”不代表它不经过互联网；安全性来自加密隧道。
- 两条隧道并不保证客户设备已正确启用两条。
- PrivateLink 只访问指定服务，不是连接两个完整站点。

## 面试高频问题

1. Client VPN 与 Site-to-Site VPN 的连接对象有何不同？
2. Site-to-Site VPN 如何实现高可用？
3. 为什么 Direct Connect 仍可能搭配 VPN？

## 重点记忆

**人 → Client VPN；站点 → Site-to-Site VPN。**

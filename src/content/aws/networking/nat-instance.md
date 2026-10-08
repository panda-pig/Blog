---
title: "NAT Instance"
fullName: "Network Address Translation Instance"
description: "用自行维护的 EC2 转发和转换私有实例的 IPv4 出站流量。"
service: "Network Address Translation Instance"
category: networking
kind: service
lang: zh
topicKey: "Network Address Translation Instance"
frequency: "考试频率 ⭐⭐⭐"
date: 2026-10-08
updated: 2026-10-08
tags: ["networking","Network Address Translation Instance","AWS"]
notionId: 3f3964dc-ce4a-816d-ad4f-e365e586abfc
notionUrl: https://app.notion.com/p/3f3964dcce4a816dad4fe365e586abfc
notionUpdated: "2026-10-08T01:13:37.200Z"
---
## 基本信息

| 字段 | 内容 |
| --- | --- |
| 英文 / 全称 | Network Address Translation Instance |
| 中文 | NAT 实例 |
| 日文 | NAT インスタンス |
| 复习优先级 | 考试频率 ⭐⭐⭐ |
| 易混淆 | NAT Gateway / Bastion Host |

## 一句话理解

用自行维护的 EC2 转发和转换私有实例的 IPv4 出站流量。

## 核心整理

实例通常位于公有子网，使用公网地址或 EIP，并关闭 Source/Destination Check；私有路由指向它，操作系统负责 IP Forwarding 与 NAT。

## 学习重点

- 实例 SG 要允许实际业务协议。
- 补丁、容量、监控和故障切换由客户负责。
- 路由目标失效时可能进入 blackhole。
- 现代托管架构通常优先 NAT Gateway。

## 常见误区

- 关闭源/目标检查不会自动配置操作系统 NAT。
- 旧 NAT AMI 停止支持不等于 EC2 NAT 方式被删除。

## 重点记忆

**EC2 NAT = 路由 + 转发 + 源/目标检查关闭 + SG + OS 配置。**

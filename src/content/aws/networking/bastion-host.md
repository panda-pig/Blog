---
title: "Bastion Host"
fullName: "Bastion Host / SSH Jump Host"
description: "位于公有子网的受控管理入口，让获准用户再经私网连接私有 EC2。"
service: "Bastion Host / SSH Jump Host"
category: networking
kind: service
lang: zh
topicKey: "Bastion Host / SSH Jump Host"
frequency: "考试频率 ⭐⭐⭐⭐"
date: 2026-10-08
updated: 2026-10-08
tags: ["networking","Bastion Host / SSH Jump Host","AWS"]
notionId: 3f3964dc-ce4a-819c-8ab0-cc18ee856221
notionUrl: https://app.notion.com/p/3f3964dcce4a819c8ab0cc18ee856221
notionUpdated: "2026-10-08T01:13:37.200Z"
---
## 基本信息

| 字段 | 内容 |
| --- | --- |
| 英文 / 全称 | Bastion Host / SSH Jump Host |
| 中文 | 堡垒机 / 跳板机 |
| 日文 | 踏み台サーバー |
| 复习优先级 | 考试频率 ⭐⭐⭐⭐ |
| 易混淆 | NAT Instance / Session Manager / EC2 Instance Connect Endpoint |

## 一句话理解

位于公有子网的受控管理入口，让获准用户再经私网连接私有 EC2。

## 核心整理

第一跳到 Bastion 公网地址，第二跳到目标私有地址；两段都需要正确路由、NACL、SG 和身份验证。

## 学习重点

- Bastion 的 22 端口只允许可信来源。
- 私有实例的 22 端口可引用 Bastion SG。
- 生产环境避免长期把私钥复制到跳板机，优先评估 Session Manager。
- 管理入口与应用主动出网是两条不同路径。

## 常见误区

- Bastion 不是 NAT，不能据此证明私有实例能访问互联网。
- SSH 成功不能证明 ICMP、HTTP 或其他协议也被允许。

## 重点记忆

**Bastion 管登录；NAT 管主动出网；Endpoint 管指定服务。**

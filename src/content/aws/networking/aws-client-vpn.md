---
title: "AWS Client VPN"
fullName: "AWS Client VPN"
description: "让单个远程用户从电脑安全接入 AWS VPC，也可在路由与授权允许时访问相连的本地网络。"
service: "AWS Client VPN"
category: networking
kind: service
lang: zh
topicKey: "AWS Client VPN"
frequency: "考试频率 ⭐⭐⭐⭐"
date: 2026-07-30
updated: 2026-07-30
tags: ["networking","AWS Client VPN","AWS"]
notionId: 3aa964dc-ce4a-8111-8599-fcdb921fc955
notionUrl: https://app.notion.com/p/3aa964dcce4a81118599fcdb921fc955
notionUpdated: "2026-07-27T05:39:15.106Z"
---

## 基本信息

| 字段 | 内容 |
| --- | --- |
| 英文 | AWS Client VPN |
| 全称 | AWS Client VPN |
| 中文 | 客户端 VPN / 远程访问 VPN |
| 日文 | AWS Client VPN |
| 考试频率 | ⭐⭐⭐⭐ |
| 易混淆 | Site-to-Site VPN / Direct Connect |

## 一句话理解

让单个远程用户从电脑安全接入 AWS VPC，也可在路由与授权允许时访问相连的本地网络。

## 核心作用

- 为居家办公、外部协作或移动员工提供远程访问。
- 使用基于 OpenVPN 的客户端建立加密连接。
- AWS 托管服务端基础设施并按连接需求扩展。

## 客户仍需配置

- 身份验证方式。
- 授权规则。
- Client VPN 路由。
- 目标子网关联。
- Security Group 与 DNS。
- 可以访问的 VPC / 本地网段。
“完全托管”不等于“无需配置访问控制”。

## 工作中的应用场景

远程员工电脑 → Client VPN Endpoint → VPC → 内部应用 / EC2 / 管理入口。

## Cloud Practitioner 考点

看到“远程员工、个人笔记本、居家办公”优先想到 Client VPN。

## SAA-C03 考点

- Client CIDR 不能与目标网络重叠。
- 目标子网关联、授权规则和路由必须一致。
- 结合 AD、证书或联合身份验证。
- 若要访问本地网络，还需 VPC 到本地网络的连接和正确路由。

## 常见误区

- Client VPN 不是连接两个完整站点的首选。
- 连接建立不等于用户自动获得所有网段权限。
- Client VPN 与 Site-to-Site VPN 的“客户端”对象完全不同。

## 面试高频问题

Client VPN 和 Site-to-Site VPN 如何选？

## 重点记忆

**人和设备 → Client VPN；整个办公室网络 → Site-to-Site VPN。**

---
title: Network ACL
fullName: "Network Access Control List"
description: 作用于子网边界的无状态访问控制列表，同时支持允许和拒绝规则。
service: NACL
category: networking
kind: service
lang: zh
frequency: "考试频率 ⭐⭐⭐⭐⭐"
date: 2026-07-27
updated: 2026-07-30
tags:
  - Network ACL
  - Subnet
  - Stateless
  - SAA-C03
notionId: 3a6964dc-ce4a-8196-a268-c8bdca7d4d53
notionUrl: https://app.notion.com/p/3a6964dcce4a8196a268c8bdca7d4d53
notionUpdated: "2026-07-27T05:38:24.209Z"
---

## 基本信息

| 字段 | 内容 |
| --- | --- |
| 英文 | Network ACL |
| 全称 | Network Access Control List |
| 中文 | 网络访问控制列表 |
| 日文 | ネットワーク ACL |
| 考试频率 | ⭐⭐⭐⭐⭐ |
| 易混淆 | Security Group |

## 一句话理解

作用于子网边界的**无状态、可允许也可拒绝**的流量控制列表。

## 核心作用

- 对进入和离开子网的流量进行粗粒度控制。
- 可按协议、端口和 CIDR 明确 Allow 或 Deny。
- 可作为 Security Group 之外的第二层防护，例如阻止特定恶意网段。

## 规则处理

- 规则按编号从小到大评估。
- 第一条匹配规则立即生效，后续不再检查。
- 因此更具体的规则通常使用更小编号。
- 最后存在隐式拒绝。

## 无状态是什么意思

NACL 不跟踪连接。允许请求方向后，必须另外允许返回方向。返回流量常使用客户端临时端口，具体范围因操作系统与客户端而异。
示例：允许互联网用户访问 Web 服务器 443 时，入站规则允许 TCP 443；出站还要允许返回到客户端临时端口范围。

## 默认行为

- Default NACL 默认允许所有入站和出站流量。
- 新建 Custom NACL 初始没有允许规则，因隐式拒绝而拒绝所有入站和出站流量。
- 实际规则可被修改，排错时应检查当前配置。

## 作用边界

NACL 与 Subnet 关联。流量进入或离开子网时评估；同一子网内资源之间的通信不跨子网边界，主要由 Security Group 等控制。

## Cloud Practitioner 考点

NACL 是子网级、无状态、支持 Allow/Deny 的可选防护层。

## SAA-C03 考点

- 规则编号与首条匹配。
- 入站和出站都必须允许。
- 临时端口。
- Default NACL 与 Custom NACL 的初始行为。
- 与 SG 组合排错。

## 常见误区

- NACL 不是有状态的。
- 只允许入站端口并不代表返回流量会自动通过。
- 编号较大的拒绝规则可能永远不会执行，因为较小编号已匹配。
- NACL 不替代资源级 Security Group。

## 易混淆服务

Security Group 负责资源级精细允许；NACL 负责子网边界的允许与拒绝。

## 面试高频问题

1. NACL 为什么要配置临时端口？
2. 如何用 NACL 阻止特定来源网段？
3. Default NACL 与 Custom NACL 有何区别？

## 重点记忆

**NACL 像子网检查站：每个方向都重新检查，先匹配的编号获胜。**

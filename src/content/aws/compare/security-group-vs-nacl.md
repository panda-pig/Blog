---
title: Security Group vs NACL
fullName: Security Group 与 Network ACL
description: 对比有状态的资源级安全控制与无状态的子网级访问控制，理解两者在架构设计和故障排查中的分工。
service: Networking Security
category: compare
kind: compare
lang: zh
frequency: "高频易混淆"
date: 2026-07-27
updated: 2026-07-27
tags:
  - Security Group
  - NACL
  - Networking
  - SAA-C03
notionId: 3a6964dc-ce4a-8166-b3cb-f4eaffa60db0
notionUrl: https://app.notion.com/p/3a6964dcce4a8166b3cbf4eaffa60db0
notionUpdated: "2026-07-27T05:38:26.424Z"
---

## 一句话选型结论

> 日常最小权限主要使用 **Security Group**；需要在子网边界显式拒绝某个 CIDR，或增加一层粗粒度控制时使用 **Network ACL**。

## 核心差异

| 维度 | Security Group | Network ACL |
| --- | --- | --- |
| 作用层级 | ENI、实例等资源 | Subnet 边界 |
| 状态 | 有状态 | 无状态 |
| 规则类型 | 仅 Allow | Allow 与 Deny |
| 评估方式 | 所有允许规则合并 | 编号从小到大，首条匹配 |
| 返回流量 | 已允许连接自动放行 | 必须显式允许反向流量 |
| 默认特点 | 新建 SG 无入站，通常允许全部出站 | Default NACL 允许全部；Custom NACL 初始拒绝全部 |
| 典型用途 | ALB → App → DB 最小权限 | 封锁恶意网段、子网边界防护 |
| 安全组引用 | 支持 | 不支持 |

## 典型架构

`Internet → ALB SG（443） → App SG（只允许 ALB SG） → DB SG（只允许 App SG）`

NACL 位于各子网边界，按需要允许业务流量与临时端口，或者拒绝特定 CIDR。

## 有状态 vs 无状态

- SG 允许请求后，连接相关的返回流量会被自动允许。
- NACL 对每个方向独立判断，因此 Web 请求的返回流量通常需要出站临时端口规则。

## 考试场景判断

- **只允许 ALB 访问 EC2** → Security Group 引用。
- **阻止特定来源 IP 或 CIDR** → Network ACL。
- **题目强调返回流量自动允许** → Security Group。
- **题目强调规则编号、Allow / Deny、临时端口** → Network ACL。
- **Custom NACL 创建后突然断网** → 检查是否尚未添加双向允许规则。

## 常见陷阱

- 有 SG 规则不代表一定能连通，路由、NACL 与应用监听也要正确。
- NACL 的小编号规则可能遮蔽大编号规则。
- “默认安全组”和“新建安全组”的入站默认规则不能混为一谈。
- 同一子网内通信不经过子网边界，因此不要把 NACL 当作同子网资源间的唯一隔离方式。

## 面试回答

> 我使用 Security Group 做资源级最小权限，它有状态且只允许；NACL 用作子网边界的无状态补充，可以显式拒绝 CIDR。排错时按路由 → NACL 双向规则 → SG → 主机防火墙 → 应用监听逐层检查。

## 记忆口诀

> **SG：资源门卫、只允许、会记忆。NACL：子网检查站、可拒绝、不记忆、按编号。**

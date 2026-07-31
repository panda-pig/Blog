---
title: Security Group
fullName: "Security Group"
description: 附加在 ENI 或资源上的有状态、只允许虚拟防火墙，是 AWS 中实现资源级最小权限的核心工具。
service: Security Group
category: networking
kind: service
lang: zh
frequency: "考试频率 ⭐⭐⭐⭐⭐"
date: 2026-07-27
updated: 2026-07-31
tags:
  - Security Group
  - ENI
  - Stateful
  - SAA-C03
notionId: 3a6964dc-ce4a-8158-822a-c4539e3bd96c
notionUrl: https://app.notion.com/p/3a6964dcce4a8158822ac4539e3bd96c
notionUpdated: "2026-07-30T04:29:15.483Z"
---

## 基本信息

| 字段 | 内容 |
| --- | --- |
| 英文 | Security Group |
| 全称 | Security Group |
| 中文释义 | 安全组 |
| 日文释义 | セキュリティグループ |
| 考试频率 | ⭐⭐⭐⭐⭐ |
| 易混淆 | Network ACL |

## 一句话理解

附加在 ENI/资源上的**有状态、只允许**虚拟防火墙。

## 核心作用

- 控制进入和离开 ENI 的流量。
- 规则可按协议、端口、源/目标 CIDR 或其他安全组表达。
- 多个安全组附加到同一 ENI 时，允许规则取并集；没有显式拒绝规则。

## 有状态是什么意思

如果入站请求被允许，相关返回流量会自动允许，不需要额外创建反向出站规则；反向亦然。这里的“状态”指跟踪已允许连接，不代表所有反向流量都无条件通过。

## 默认行为

- 新建安全组默认没有入站允许规则。
- 新建安全组通常默认允许所有出站流量。
- Default Security Group 还具有“同一默认安全组成员之间互通”的入站规则。
- 默认值可以被修改，因此排错时应查看实际规则。

## 典型三层架构

- ALB SG：允许 Internet → 443。
- Application SG：只允许 ALB SG → 应用端口。
- RDS SG：只允许 Application SG → 数据库端口。
安全组引用比写死 IP 更能表达“谁可以访问谁”。

## Cloud Practitioner 考点

Security Group 是实例/ENI 级、有状态、只支持允许规则的虚拟防火墙。

## SAA-C03 考点

- SG 引用与最小权限。
- 多 SG 规则合并。
- 有状态返回流量。
- ALB → App → DB 分层。
- 与 NACL、操作系统防火墙、路由共同排错。

## 常见误区

- Security Group 不能写显式拒绝规则。
- 安全组不是直接附加到整个子网。
- “有状态”不等于忽略所有出站限制。
- 只开放 SG 仍不保证连通，路由、NACL 和应用端口也必须正确。

## 易混淆服务

| 维度 | Security Group | Network ACL |
| --- | --- | --- |
| 层级 | ENI / 资源 | Subnet 边界 |
| 状态 | 有状态 | 无状态 |
| 规则 | 只允许 | 允许与拒绝 |
| 处理方式 | 所有允许规则合并 | 按编号从小到大首条匹配 |

## 面试高频问题

1. Security Group 为什么称为有状态？
2. 如何只允许 ALB 访问应用服务器？
3. EC2 端口已开放却仍不可达，应继续检查什么？

## 重点记忆

**Security Group 像资源门卫：只发通行证，并记住已经放行的连接。**

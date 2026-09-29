---
title: "EC2 网络身份：IP、Elastic IP 与 ENI"
fullName: "EC2 Network Identity: IP Addresses and Elastic Network Interfaces"
description: "理清 EC2、ENI、私有地址、公网地址与 Elastic IP 的生命周期和故障转移边界。"
service: "Amazon EC2"
category: compute
kind: topic
lang: zh
topicKey: "EC2 Network Identity"
frequency: "SAA 高频"
date: 2026-09-29
updated: 2026-09-29
tags: ["EC2", "ENI", "Elastic IP", "networking"]
notionId: 3e8964dc-ce4a-818f-b6e3-c873d6aee0e0
notionUrl: https://app.notion.com/p/3e8964dcce4a818fb6e3c873d6aee0e0
notionUpdated: "2026-09-27T05:01:04.233Z"
---

## 一句话理解

**EC2 提供计算，ENI 承载网络身份。** Private IP、MAC 地址与 Security Group 主要跟随 ENI；Elastic IP 是可重新关联的固定公网 IPv4。

## 地址与接口

| 对象 | 作用 | 生命周期重点 |
| --- | --- | --- |
| Private IPv4 | VPC 内通信 | Primary Private IP 在 Stop / Start 后通常保持 |
| Auto-assigned Public IPv4 | 临时公网入口 | Stop / Hibernate 后释放，重新启动时通常变化 |
| Elastic IP | 固定公网 IPv4 | 可重新关联；闲置或使用方式可能产生费用 |
| ENI | 虚拟网卡与网络身份 | 属于一个 Subnet，因此固定在一个 AZ |
| Secondary Private IP | 同一 ENI 的额外地址 | 不是第二张网卡 |
| Secondary ENI | 独立的额外网卡 | 可在同一 AZ 的兼容实例间移动 |

公网地址本身不等于可访问，还需要 IGW 路由、Security Group / NACL、主机防火墙和应用监听器同时正确。

## 典型设计

- 固定公网入口：单资源可用 Elastic IP；大规模 Web 服务优先使用 DNS 与 Load Balancer。
- 固定出站地址：Private EC2 → NAT Gateway + Elastic IP。
- 同 AZ 网络身份故障转移：移动 Secondary ENI，保留其 Private IP、MAC 与 Security Group。
- NAT Instance、Router 或 Firewall Appliance：通常需要关闭 Source / Destination Check。
- 多挂 ENI 主要用于职责隔离和多网络路径，不会自动把带宽翻倍。

## 重点记忆

**IP 回答“地址是什么”，ENI 回答“网络身份属于谁”；ENI 故障转移不能跨 AZ，因此不是完整的 Multi-AZ 高可用。**

---
title: "Elastic Load Balancing"
fullName: "Elastic Load Balancing"
description: "把流量分配到多个健康目标，并通过健康检查避免把请求发送给异常目标。"
service: "Elastic Load Balancing"
category: networking
kind: service
lang: zh
topicKey: "Elastic Load Balancing"
frequency: "考试频率 ⭐⭐⭐⭐⭐"
date: 2026-07-30
updated: 2026-07-31
tags: ["networking","Elastic Load Balancing","AWS"]
notionId: 3a6964dc-ce4a-810c-87bf-c6a286d89cdf
notionUrl: https://app.notion.com/p/3a6964dcce4a810c87bfc6a286d89cdf
notionUpdated: "2026-07-30T08:30:21.340Z"
---

## 基本信息

| 字段 | 内容 |
| --- | --- |
| 英文 | Elastic Load Balancing |
| 全称 | Elastic Load Balancing |
| 中文释义 | 弹性负载均衡 |
| 日文释义 | Elastic Load Balancing（マネージド負荷分散サービス） |
| 考试频率 | ⭐⭐⭐⭐⭐ |
| 易混淆 | Auto Scaling / ALB / NLB / GWLB |

## 一句话理解

把流量分配到多个健康目标，并通过健康检查避免把请求发送给异常目标。

## 核心作用

- 分散外部或内部流量。
- 提高可用性。
- 配合多 AZ 和 Auto Scaling。
- 为客户端提供稳定入口。

## ELB 产品类型

| 类型 | 层级与协议 | 典型场景 |
| --- | --- | --- |
| ALB | Layer 7，HTTP / HTTPS | 路径、主机名路由，Web、微服务、容器 |
| NLB | Layer 4，TCP / UDP / TLS | 极高性能、低延迟、固定 IP |
| GWLB | Layer 3/4 网关流量 | 部署和扩展虚拟防火墙等网络设备 |

## 与 Auto Scaling 的关系

- ELB 负责流量。
- ASG 负责实例数量和健康替换。
- ASG 新增实例后可自动注册到 Target Group。
- ELB 发现不健康目标后停止向其发送流量。

## 外部与内部负载均衡

- Internet-facing：接收互联网流量。
- Internal：只在 VPC 内部提供入口。

## Cloud Practitioner 考点

- 分发流量并执行健康检查。
- 常与多 AZ 和 Auto Scaling 组合。
- ELB 本身会按服务需求扩展。

## SAA-C03 考点

- 根据协议、性能、固定 IP 和路由需求选择 ALB / NLB / GWLB。
- Listener、Rule、Target Group 与 Health Check。
- 跨 AZ、内部 / 外部和 TLS 终止。
- 与 ECS、Lambda、EC2、Auto Scaling 集成。

## 常见误区

- ELB 不会替代 Auto Scaling。
- ELB 不负责创建 EC2。
- 轮询等算法并不是考试选型的唯一依据，重点应放在协议、层级和场景需求。

## 重点记忆

ELB 管流量与健康检查，ASG 管容量；Web 路由看 ALB，高性能 TCP/UDP 看 NLB，网络设备看 GWLB。

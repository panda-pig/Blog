---
title: "AWS 全球基础设施"
fullName: "AWS Global Infrastructure"
description: "先确认监管、行业和数据保护要求是否规定数据存放地点或处理方式。多数区域性服务的资源和数据默认位于所选 Region；跨 Region 复制或传输通常需要明确配置，但必须按具体服务核对数据流、控制面、日志和备份行为。"
service: "Cloud Foundations"
category: cloud-practitioner
kind: topic
lang: zh
topicKey: "AWS 全球基础设施"
frequency: "考试频率 ⭐⭐⭐⭐⭐"
date: 2026-07-30
updated: 2026-08-15
tags: ["cloud-practitioner","AWS 全球基础设施","AWS"]
notionId: 3a6964dc-ce4a-8137-955b-d4d5d4decdc2
notionUrl: https://app.notion.com/p/3a6964dcce4a8137955bd4d5d4decdc2
notionUpdated: "2026-08-13T00:39:04.753Z"
---

## 基本信息

| 字段 | 内容 |
| --- | --- |
| 英文 | AWS Global Infrastructure |
| 全称 | AWS Global Infrastructure |
| 中文释义 | AWS 全球基础设施 |
| 日文释义 | AWS グローバルインフラストラクチャ |
| 考试频率 | ⭐⭐⭐⭐⭐ |
| 易混淆 | Region / Availability Zone / Edge Location / Multi-AZ / Multi-Region |

## 全球基础设施层级

- Region：独立的地理区域。
- Availability Zone：Region 内相互隔离、通过低延迟网络连接的故障域。
- Edge Location：靠近终端用户的边缘设施，服务于内容分发和低延迟访问，不属于某个 AZ。

## 选择 Region 的四个核心因素

### 1. 合规性与数据驻留
先确认监管、行业和数据保护要求是否规定数据存放地点或处理方式。多数区域性服务的资源和数据默认位于所选 Region；跨 Region 复制或传输通常需要明确配置，但必须按具体服务核对数据流、控制面、日志和备份行为。
### 2. 邻近性与延迟
选择靠近主要用户或本地系统的 Region，可以减少网络往返时间。距离不是唯一因素，还要综合网络路径、架构与缓存。
### 3. 服务与功能可用性
并非所有 AWS 服务和新功能都会同时在所有 Region 上线。设计前要确认所需服务、实例类型和功能是否可用。
### 4. 成本
相同服务在不同 Region 的价格、数据传输费用、税费和运营成本可能不同。

## Region 隔离

Region 之间在基础设施和故障域上相互隔离。设计时不要理解成“任何数据绝不可能跨 Region”；跨区复制、全球服务、备份、日志和外部集成仍可能产生跨区数据流，必须检查具体配置。

## Multi-AZ

在同一个 Region 的多个 AZ 部署冗余资源，主要用于抵御 AZ 级故障并提高高可用性。
常见思路：
用户 → Load Balancer → AZ-A + AZ-B 中的计算资源 → Multi-AZ 数据层。

## Multi-Region

跨两个或更多 Region 部署，用于：
- Region 级灾备
- 全球用户低延迟
- 特定数据驻留或主权要求
- 更高级别的业务连续性
Multi-Region 并不会天然自动切换，仍要设计数据复制、健康检查、Route 53 路由、RTO/RPO 和 Failover 流程。

## Edge Location

边缘站点常用于 CloudFront 等服务，把内容放到更靠近用户的位置。它不是 Region，也不是用来部署普通 EC2 的 AZ。

## 服务作用域与资源位置

- Global Service 的管理入口不围绕一个 Region 展示，但不代表所有数据自动全球复制。
- Regional Service 的资源与操作属于指定 Region；切换 Region Selector 会看到不同资源集合。
- Zonal Resource 位于具体 AZ，例如 EC2 Instance、EBS Volume 与 Subnet。
- VPC 是 Regional Resource，Subnet 是 Zonal Resource。
- S3 Bucket Name 全局唯一，不代表 Bucket 是 Global Resource。
- AWS WAF 的 Scope 取决于保护对象：CloudFront 使用 CloudFront Scope，ALB / API Gateway 等使用 Regional Scope。

## 高频易混淆

| 概念 | 主要作用 |
| --- | --- |
| Multi-AZ | Region 内高可用 |
| Multi-Region | 区域级灾备与全球部署 |
| Edge Location | 靠近用户分发内容 |
| Outposts | 在客户地点运行部分 AWS 基础设施 |

## 考试重点

- Region 选择：Compliance → Proximity → Feature Availability → Pricing。
- Multi-AZ 主要解决高可用，不是主要用来降低成本。
- Multi-Region 成本与复杂度更高。
- Region、AZ、Edge Location 不可混为一谈。
- 切换 Region 后看不到区域资源，通常是区域上下文变化，不是资源自动删除。

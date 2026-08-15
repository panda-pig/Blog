---
title: "Region・AZ・Edge・Global・Regional 总对比"
fullName: "Region, Availability Zone, Edge, Global and Regional Scope"
description: "把 AWS 的地理层级、服务作用域与资源位置放到同一张图里理解。"
service: "AWS Compare"
category: compare
kind: compare
lang: zh
topicKey: "Region・AZ・Edge・Global・Regional 总对比"
frequency: "高频对比"
date: 2026-08-13
updated: 2026-08-15
tags: ["compare", "Region", "Availability Zone", "AWS"]
notionId: 3bb964dc-ce4a-8118-a234-eeafd5e36e4b
notionUrl: https://app.notion.com/p/3bb964dcce4a8118a234eeafd5e36e4b
notionUpdated: "2026-08-13T00:36:56.363Z"
---

## 一句话结论

**Region / AZ 决定系统在哪里运行和怎样隔离故障；Edge 决定用户从哪里更快接入；Global / Regional / Zonal 描述管理作用域与资源位置。**

## 总对比

| 概念 | 它是什么 | 典型例子 | 不要误解为 |
| --- | --- | --- | --- |
| Region | 相互独立的地理区域，包含多个 AZ | ap-northeast-1 | 单个数据中心 |
| Availability Zone | Region 内由一个或多个离散数据中心组成的故障隔离边界 | Multi-AZ | 独立 Region |
| Edge Location / PoP | 靠近终端用户的边缘网络站点 | CloudFront、Route 53、Global Accelerator | 部署普通 EC2 的 AZ |
| Global Service | 管理入口不围绕单一 Region 展示 | IAM、Route 53、CloudFront | 所有数据天然全球复制 |
| Regional Service | 资源与操作以一个 Region 为作用域 | DynamoDB、SQS、S3 Regional Endpoint | 只能部署在单个 AZ |
| Zonal Resource | 资源明确放在某个 AZ | EC2、EBS、Subnet | Region 级自动冗余 |

## 作用域与资源位置不是一回事

- VPC 是 Regional Resource，Subnet 是 Zonal Resource。
- EC2 Console 按 Region 查看，但每个实例位于具体 AZ。
- DynamoDB 是 Regional Service，并由 AWS 在同一区域内跨 AZ 提供托管韧性。
- S3 Bucket Name 全局唯一，不代表 Bucket 是 Global Resource。
- AWS WAF 的 Scope 取决于保护对象：CloudFront 使用 CloudFront Scope，ALB、API Gateway 等使用 Regional Scope。

## 为什么切换 Region 后资源会“消失”

区域级服务只展示当前 Region 的资源。看不到 EC2、Lambda、RDS 或 EBS 时，依次检查 Account、Region、权限与筛选条件，而不是先假设资源被删除。

## 选择 Region 的四项判断

1. Compliance：法律、行业规则和数据驻留要求。
2. Latency：主要用户或本地系统与目标 Region 的网络距离。
3. Service Availability：所需服务、功能与实例类型是否可用。
4. Pricing：满足前三项后比较整体成本。

## 高频陷阱

- Multi-AZ 解决 AZ 级高可用，不是 Region 级灾备。
- Multi-Region 不会自动完成复制、健康检查与 Failover。
- Edge Location 不是 AZ，也不是 Local Zone。
- AZ 字母映射可能因账户不同，不能用 `2a` 推断两个账户指向同一物理 AZ。

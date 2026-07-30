---
title: "Route 53 vs CloudFront vs Global Accelerator"
fullName: "Route 53 vs CloudFront vs Global Accelerator"
description: "Route 53 找地址；CloudFront 缓存和分发 HTTP 内容；Global Accelerator 加速全球 TCP/UDP 动态流量并快速切换健康端点。"
service: "AWS Compare"
category: compare
kind: compare
lang: zh
topicKey: "Route 53 vs CloudFront vs Global Accelerator"
frequency: "高频对比"
date: 2026-07-30
updated: 2026-07-30
tags: ["compare","Route 53 vs CloudFront vs Global Accelerator","AWS"]
notionId: 3a6964dc-ce4a-8181-9078-e6e673a1ec22
notionUrl: https://app.notion.com/p/3a6964dcce4a81819078e6e673a1ec22
notionUpdated: "2026-07-27T05:41:45.348Z"
---

## 一句话选型

**Route 53 找地址；CloudFront 缓存和分发 HTTP 内容；Global Accelerator 加速全球 TCP/UDP 动态流量并快速切换健康端点。**

## 核心差异

| 维度 | Route 53 | CloudFront | Global Accelerator |
| --- | --- | --- | --- |
| 服务层面 | DNS | HTTP/HTTPS CDN | TCP/UDP 网络加速 |
| 入口 | 域名查询 | Distribution 域名 / 自定义域名 | 静态 Anycast IP |
| 是否承载应用流量 | 否 | 是 | 是 |
| 缓存内容 | 否 | 是，可配置 | 否 |
| 健康切换 | DNS Health Check / Policy | Origin 与边缘机制 | Endpoint Health |
| 切换影响 | 可能受 DNS TTL 缓存影响 | 取决于 Origin 设计 | 通常可更快改变后端方向 |
| 典型关键词 | DNS、域名、地理/延迟路由 | 图片、视频、缓存、CDN | TCP/UDP、静态 IP、全球动态流量 |

## 场景判断

- 根据用户国家返回不同网站 → Route 53 Geolocation。
- 根据 AWS Region 延迟返回端点 → Route 53 Latency-based Routing。
- 全球网站图片和视频较慢，希望缓存 → CloudFront。
- 全球 UDP 游戏延迟抖动大 → Global Accelerator。
- 多 Region 应用需要固定 IP 和快速端点切换 → Global Accelerator。
- API/网页既需要 DNS 又需要边缘分发 → Route 53 + CloudFront。

## 常见组合

- Route 53 → CloudFront → S3 / ALB / API Gateway。
- Route 53 → Global Accelerator → ALB / NLB / EC2 / EIP。
- CloudFront 与 Global Accelerator 解决的问题不同，不应因为都使用边缘网络就视为替代品。

## 高频陷阱

- Route 53 不缓存内容，也不持续代理连接。
- CloudFront 可以传输动态 HTTP 内容，但核心仍是应用层分发与可配置缓存。
- Global Accelerator 不缓存，也不替代数据库复制。
- Edge Location 不是 Region 或 AZ。

## 面试回答

“先看协议和目标：DNS 决策选 Route 53；HTTP/HTTPS 内容分发选 CloudFront；需要静态 IP、TCP/UDP 全球加速和健康端点快速切换选 Global Accelerator。真实架构中常由 Route 53 把域名指向后两者。”

## 记忆口诀

**53 找路，CloudFront 发内容，Global Accelerator 送动态连接。**

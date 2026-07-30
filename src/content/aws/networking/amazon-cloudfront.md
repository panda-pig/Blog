---
title: "Amazon CloudFront"
fullName: "Amazon CloudFront"
description: "通过全球 Edge Location 分发 HTTP/HTTPS 内容，命中缓存时就近返回，未命中时访问 Origin。"
service: "Amazon CloudFront"
category: networking
kind: service
lang: zh
topicKey: "Amazon CloudFront"
frequency: "考试频率 ⭐⭐⭐⭐⭐"
date: 2026-07-30
updated: 2026-07-30
tags: ["networking","Amazon CloudFront","AWS"]
notionId: 3a6964dc-ce4a-8198-a643-ce1e9079cf9c
notionUrl: https://app.notion.com/p/3a6964dcce4a8198a643ce1e9079cf9c
notionUpdated: "2026-07-27T05:41:41.677Z"
---

## 基本信息

| 字段 | 内容 |
| --- | --- |
| 英文 | Amazon CloudFront |
| 中文 | 内容分发网络（CDN） |
| 日文 | コンテンツ配信ネットワーク |
| 考试频率 | ⭐⭐⭐⭐⭐ |
| 易混淆 | Route 53 / Global Accelerator / S3 Transfer Acceleration |

## 一句话理解
通过全球 Edge Location 分发 HTTP/HTTPS 内容，命中缓存时就近返回，未命中时访问 Origin。
## 核心组件
- Distribution：分发配置。
- Origin：S3、ALB、EC2、自定义 HTTP 服务等原始内容来源。
- Edge Location：靠近终端用户的边缘站点。
- Cache Behavior：按路径选择 Origin、协议、缓存与访问策略。
- TTL / Cache Key：决定内容缓存时间和区分方式。
## 工作原理
用户 → CloudFront Edge → 缓存命中直接返回 → 未命中访问 Origin → 按策略缓存 → 返回用户。
CloudFront 可以传输动态内容和 API 请求；只有符合缓存策略的响应才会缓存。
## 使用场景
- 图片、视频、HTML、CSS、JavaScript 与软件下载。
- S3 私有内容安全分发。
- ALB / API Gateway 的全球 HTTP/HTTPS 入口。
- 配合 WAF、Shield、TLS 提升边缘安全。
- Signed URL / Signed Cookie 控制私有内容。
## 与 Route 53 / Global Accelerator
- Route 53：DNS 决策，不承载后续流量。
- CloudFront：面向 HTTP/HTTPS，强调内容分发、缓存和 Origin。
- Global Accelerator：面向 TCP/UDP 动态流量，提供静态 Anycast IP、健康端点选择和快速切换。
## Cloud Practitioner 考点
- CloudFront 是 CDN。
- 使用 Edge Location 降低内容访问延迟。
- Edge Location 不是 Region 或 AZ。
- “缓存、图片、视频、静态资源、CDN”优先选择 CloudFront。
## SAA-C03 考点
- S3 Origin 与 Origin Access Control。
- Cache Policy、TTL、Cache Key、Invalidation。
- Signed URL / Cookie。
- 多 Origin 与 Cache Behavior。
- 与 WAF、ACM、Route 53 的组合。
## 常见误区
- CloudFront 不会自动把数据库复制到边缘。
- 动态内容可经过 CloudFront，但不代表所有响应都会缓存。
- CloudFront 不等于 Global Accelerator；前者是应用层内容分发，后者是网络层全球加速。
- 多 Region Origin 与应用数据同步仍需单独设计。
## 重点记忆
**Route 53 找入口，CloudFront 在边缘交付和缓存 HTTP 内容。**

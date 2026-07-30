---
title: "Amazon Route 53"
fullName: "Amazon Route 53"
description: "把域名解析到正确资源，并可依据策略和健康状态决定 DNS 回答；它不承载后续应用流量。"
service: "Amazon Route 53"
category: networking
kind: service
lang: zh
topicKey: "Amazon Route 53"
frequency: "考试频率 ⭐⭐⭐⭐⭐"
date: 2026-07-30
updated: 2026-07-30
tags: ["networking","Amazon Route 53","AWS"]
notionId: 3a6964dc-ce4a-812e-8b52-d74e98d40a3d
notionUrl: https://app.notion.com/p/3a6964dcce4a812e8b52d74e98d40a3d
notionUpdated: "2026-07-27T05:41:39.696Z"
---

## 基本信息

| 字段 | 内容 |
| --- | --- |
| 英文 | Amazon Route 53 |
| 全称 | Amazon Route 53 |
| 中文 | DNS、域名注册、健康检查与流量路由 |
| 日文 | Amazon Route 53 |
| 考试频率 | ⭐⭐⭐⭐⭐ |
| 易混淆 | CloudFront / ELB / Global Accelerator |

## 一句话理解

把域名解析到正确资源，并可依据策略和健康状态决定 DNS 回答；它不承载后续应用流量。

## 为什么叫 Route 53

DNS 标准端口是 53，因此名称组合了“路由”和“53”。普通 DNS 查询通常使用 UDP 53；响应较大、区域传送或需要回退时可使用 TCP 53。

## 核心能力

- Public / Private DNS Hosted Zone。
- 域名注册。
- Health Check。
- Alias Record 对接 AWS 资源。
- 多种 Routing Policy。
- Traffic Flow。

## 常见 Routing Policy

| 策略 | 典型用途 |
| --- | --- |
| Simple | 单一资源或简单回答 |
| Weighted | 按比例分流、灰度发布 |
| Latency-based | 导向测得延迟较低的 AWS Region |
| Failover | 主备切换 |
| Geolocation | 按用户地理位置返回不同内容/端点 |
| Geoproximity | 按资源位置与 Bias 调整流量范围 |
| Multi-value Answer | 返回多个健康记录 |

## 工作流程

用户查询 [example.com](http://example.com) → 递归 DNS → Route 53 权威 DNS → 返回记录/别名目标 → 客户端连接该目标。
Route 53 做的是 DNS 控制面决策，返回地址后不会持续位于客户端与应用流量之间。

## 与 CloudFront / Global Accelerator

| 服务 | 核心职责 | 是否承载应用流量 |
| --- | --- | --- |
| Route 53 | DNS 解析与策略回答 | 否 |
| CloudFront | HTTP/HTTPS 内容分发与缓存 | 是 |
| Global Accelerator | TCP/UDP 全球流量代理与加速 | 是 |
常见路径：用户 → Route 53 → CloudFront / Global Accelerator / ALB。

## Cloud Practitioner 考点

Route 53 = DNS + 域名 + 健康检查 + 流量路由。

## SAA-C03 考点

- Routing Policy 选型。
- Alias 与 CNAME。
- Public / Private Hosted Zone。
- Health Check、Failover 与 Multi-Region。
- 与 CloudFront、ELB、S3、Global Accelerator 的集成。
- DNS TTL 对变更与故障切换速度的影响。

## 常见误区

- Route 53 不缓存网站图片。
- Latency Routing 不是简单按地理距离。
- DNS 路由成功不代表数据已经跨 Region 同步。
- Route 53 故障切换可能受客户端或递归解析器 TTL 缓存影响。
- Health Check 与备用端点仍需显式配置。

## 重点记忆

**Route 53 负责“返回哪个地址”；CloudFront 负责“交付内容”；Global Accelerator 负责“把动态流量快速送到健康端点”。**

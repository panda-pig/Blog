---
title: "AWS Global Accelerator"
fullName: "AWS Global Accelerator"
description: "使用静态 Anycast IP，让全球 TCP/UDP 流量从附近的 AWS 边缘站点进入 AWS 全球网络，再转发到健康的应用端点。"
service: "AWS Global Accelerator"
category: networking
kind: service
lang: zh
topicKey: "AWS Global Accelerator"
frequency: "考试频率 ⭐⭐⭐⭐"
date: 2026-07-30
updated: 2026-07-30
tags: ["networking","AWS Global Accelerator","AWS"]
notionId: 3a6964dc-ce4a-814f-9602-eca85431f9f2
notionUrl: https://app.notion.com/p/3a6964dcce4a814f9602eca85431f9f2
notionUpdated: "2026-07-27T05:41:43.430Z"
---

## 基本信息

| 字段 | 内容 |
| --- | --- |
| 英文 | AWS Global Accelerator |
| 中文 | 全球网络加速 |
| 日文 | グローバルアクセラレーター |
| 考试频率 | ⭐⭐⭐⭐ |
| 易混淆 | CloudFront / Route 53 / Direct Connect |

## 一句话理解
使用静态 Anycast IP，让全球 TCP/UDP 流量从附近的 AWS 边缘站点进入 AWS 全球网络，再转发到健康的应用端点。
## 工作原理
1. 提供固定的静态 Anycast IP。
2. 用户连接附近的 AWS Edge Location。
3. 流量尽早进入 AWS 全球骨干网络。
4. 根据端点健康、客户端位置和配置策略选择端点。
5. 端点不健康时，把新连接导向健康端点。
## 支持的典型端点
- Application Load Balancer。
- Network Load Balancer。
- EC2 实例。
- Elastic IP。
端点组通常按 Region 组织，可通过 Traffic Dial 调整区域流量比例，通过 Endpoint Weight 调整组内端点权重。
## 使用场景
- 全球在线游戏、语音、IoT 等 TCP/UDP 应用。
- 多 Region 动态应用的健康检查与快速故障切换。
- 客户端或防火墙需要固定入口 IP。
- 减少长距离公共互联网路由波动。
## 与其他服务

| 服务 | 主要对象 | 关键能力 |
| --- | --- | --- |
| Route 53 | DNS | 返回目标地址，切换可能受 TTL 影响 |
| CloudFront | HTTP/HTTPS 内容 | 缓存、分发、Origin |
| Global Accelerator | TCP/UDP 动态流量 | 静态 Anycast IP、AWS 全球网络、健康端点 |
| Direct Connect | 企业本地网络 | 本地到 AWS 的专用连接 |

Global Accelerator 可以把流量送到 ALB/NLB 等端点；负载均衡器再在其区域内分配到后端目标。
## Cloud Practitioner 考点
看到“边缘网络、静态 IP、全球动态应用、健康端点、快速故障转移”优先考虑 Global Accelerator。
## SAA-C03 考点
- Anycast IP。
- Listener、Endpoint Group、Endpoint。
- Traffic Dial 与 Endpoint Weight。
- 多 Region 故障转移。
- CloudFront、Route 53、Direct Connect 对比。
## 常见误区
- Global Accelerator 不缓存内容。
- 它不是企业数据中心到 AWS 的专线。
- 它不能替代应用本身的跨 Region 数据同步。
- “快速故障转移”仍依赖健康检查与端点配置，不等于零中断。
## 面试高频问题
1. Global Accelerator 与 CloudFront 如何选？
2. 为什么它通常比纯 DNS 切换更快？
3. 它与区域内 ALB/NLB 如何配合？
## 重点记忆
**静态 Anycast IP + 边缘入网 + AWS 骨干网络 + 健康端点 = Global Accelerator。**

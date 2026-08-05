---
title: "AWS Direct Connect"
fullName: "AWS Direct Connect"
description: "通过专用网络连接把客户本地环境接入 AWS，获得更稳定、可预测的网络性能。"
service: "AWS Direct Connect"
category: networking
kind: service
lang: zh
topicKey: "AWS Direct Connect"
frequency: "考试频率 ⭐⭐⭐⭐"
date: 2026-07-30
updated: 2026-08-05
tags: ["networking","AWS Direct Connect","AWS"]
notionId: 3a6964dc-ce4a-812a-be47-ffe0e7198291
notionUrl: https://app.notion.com/p/3a6964dcce4a812abe47ffe0e7198291
notionUpdated: "2026-08-05T01:42:00.000Z"
---

## 基本信息

| 字段 | 内容 |
| --- | --- |
| 英文 | AWS Direct Connect |
| 全称 | AWS Direct Connect |
| 中文释义 | AWS 专线连接 |
| 日文释义 | 専用線接続 |
| 考试频率 | ⭐⭐⭐⭐ |
| 易混淆 | Site-to-Site VPN / Global Accelerator |

## 一句话理解

通过专用网络连接把客户本地环境接入 AWS，获得更稳定、可预测的网络性能。

## 核心作用

- 绕开普通公共互联网路径。
- 为长期混合云、大规模数据传输和延迟敏感工作负载提供稳定带宽。
- 使用 Virtual Interface（VIF）访问 AWS 网络资源。

## 适用场景

- 数据中心持续向 AWS 传输大量数据。
- 混合云中的数据库、备份、日志或媒体传输。
- 对网络抖动、带宽可预测性有要求的企业应用。
- 合规要求使用专用连接的环境；但合规是否满足仍取决于整体控制。

## 工作原理

客户网络 → Direct Connect Location / Partner → AWS Direct Connect → Virtual Interface → VGW / Direct Connect Gateway / Transit Gateway / AWS 公共服务。
常见 VIF：
- Private VIF：访问 VPC 私有资源。
- Public VIF：访问 AWS 公共服务端点。
- Transit VIF：连接 Transit Gateway。

## 默认是否加密

**Direct Connect 默认不提供端到端加密。** 专用路径与加密是两个不同概念。有加密要求时可根据架构使用 MACsec（受端口与位置支持限制）或在 Direct Connect 上建立 VPN。

## 高可用与故障转移

- 单条连接仍可能成为故障点。
- 关键业务应设计位于不同设备/地点的冗余 Direct Connect。
- 可用 Site-to-Site VPN 作为备份路径。
- 多连接可通过 Link Aggregation Group 聚合，但“聚合带宽”和“站点级冗余”要分别评估。
- 自动故障转移仍依赖 BGP、路由优先级与客户端配置，并非只创建连接就完成。

## Cloud Practitioner 考点

关键词“专用连接、稳定带宽、大量数据、长期混合云”优先考虑 Direct Connect；快速、低成本、加密则更偏向 VPN。

## SAA-C03 考点

- VIF 类型。
- Direct Connect Gateway、VGW、TGW 的关系。
- BGP、冗余与 VPN 备份。
- 默认不加密。
- 多账户、多 Region 访问范围与路由设计。

## 常见误区

- Direct Connect 不是全球用户访问网站的加速器。
- 专用连接不等于自动加密。
- 一条 Direct Connect 不等于高可用。
- 它的部署周期和成本通常高于 Site-to-Site VPN。

## 面试高频问题

1. VPN 与 Direct Connect 如何选？
2. Direct Connect 如何做冗余？
3. Direct Connect 是否加密，如何满足加密要求？

## 重点记忆

**VPN 走公网加密，Direct Connect 走专用连接但默认不加密；关键业务常把二者组合。**

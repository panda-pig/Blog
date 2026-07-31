---
title: "VPN Components：VGW & Customer Gateway"
fullName: "Virtual Private Gateway & Customer Gateway"
description: "Customer Gateway 表示本地端设备/配置；Virtual Private Gateway 是附加到单个 VPC 的 AWS 端传统网关。"
service: "VPN Components：VGW & Customer Gateway"
category: networking
kind: service
lang: zh
topicKey: "VPN Components：VGW & Customer Gateway"
frequency: "考试频率 ⭐⭐⭐⭐"
date: 2026-07-30
updated: 2026-07-31
tags: ["networking","VPN Components：VGW & Customer Gateway","AWS"]
notionId: 3aa964dc-ce4a-8199-bdd8-df77a47a2a89
notionUrl: https://app.notion.com/p/3aa964dcce4a8199bdd8df77a47a2a89
notionUpdated: "2026-07-30T04:27:13.346Z"
---

## 基本信息

| 字段 | 内容 |
| --- | --- |
| 英文 | VPN Components |
| 全称 | Virtual Private Gateway & Customer Gateway |
| 中文释义 | VPN 组件：虚拟私有网关与客户网关 |
| 日文释义 | VPN コンポーネント（仮想プライベートゲートウェイ／カスタマーゲートウェイ） |
| 考试频率 | ⭐⭐⭐⭐ |
| 易混淆 | Client VPN / Site-to-Site VPN / Direct Connect |

## 一句话理解

Customer Gateway 表示本地端设备/配置；Virtual Private Gateway 是附加到单个 VPC 的 AWS 端传统网关。

## 核心组件

| 组件 | 位置 | 作用 |
| --- | --- | --- |
| Customer Gateway（CGW） | 客户本地一侧 | 代表路由器、防火墙或 VPN 设备及其公网信息 |
| Virtual Private Gateway（VGW） | AWS VPC 一侧 | 终止传统 Site-to-Site VPN，并可承载 Direct Connect 私有虚拟接口路径 |
| Transit Gateway（TGW） | AWS 中心枢纽 | 集中连接多个 VPC、VPN 与本地网络 |

## 典型路径

本地网络 → Customer Gateway → 两条加密 VPN 隧道 → VGW / TGW → VPC。

## 高可用

AWS Site-to-Site VPN 通常提供两条隧道。要获得真正的冗余，本地设备必须正确配置并使用两条隧道；也可使用冗余 Customer Gateway 设备。

## Direct Connect 的关系

Direct Connect 的私有连接可通过 VGW 连接单个 VPC，也可结合 Direct Connect Gateway 和 Transit Gateway 扩展到更多 VPC/Region。具体可达范围取决于虚拟接口、网关关联与路由。

## Cloud Practitioner 考点

- Customer Gateway：客户侧。
- VGW：单 VPC 的 AWS 侧网关。
- TGW：多网络集中互联。

## SAA-C03 考点

- VGW vs TGW。
- 静态路由 vs BGP 动态路由。
- 双隧道与冗余设备。
- VPN、Direct Connect 与备份路径组合。

## 常见误区

- VGW 不是给普通互联网用户访问网站的 IGW。
- CGW 在 AWS 中有配置对象，但代表的是客户侧设备与信息。
- 创建两条隧道不代表客户侧已经自动使用两条。

## 重点记忆

**CGW 在公司端，VGW 在单个 VPC 端，TGW 是多网络中心枢纽。**

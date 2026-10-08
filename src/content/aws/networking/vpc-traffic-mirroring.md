---
title: "VPC Traffic Mirroring"
fullName: "Amazon VPC Traffic Mirroring"
description: "把受支持 ENI 的报文复制到监控设备做深度分析，原业务流量仍走正常路径。"
service: "Amazon VPC Traffic Mirroring"
category: networking
kind: service
lang: zh
topicKey: "Amazon VPC Traffic Mirroring"
frequency: "考试频率 ⭐⭐⭐"
date: 2026-10-08
updated: 2026-10-08
tags: ["networking","Amazon VPC Traffic Mirroring","AWS"]
notionId: 3f3964dc-ce4a-8129-83bf-d15a04f6844b
notionUrl: https://app.notion.com/p/3f3964dcce4a812983bfd15a04f6844b
notionUpdated: "2026-10-08T01:13:37.200Z"
---
## 基本信息

| 字段 | 内容 |
| --- | --- |
| 英文 / 全称 | Amazon VPC Traffic Mirroring |
| 中文 | VPC 流量镜像 |
| 日文 | VPC トラフィックミラーリング |
| 复习优先级 | 考试频率 ⭐⭐⭐ |
| 易混淆 | VPC Flow Logs / Gateway Load Balancer / Network Firewall |

## 一句话理解

把受支持 ENI 的报文复制到监控设备做深度分析，原业务流量仍走正常路径。

## 核心整理

Source、Target、Session/Filter 是核心组件；Target 可以是 ENI、NLB 或 Gateway Load Balancer Endpoint。

## 学习重点

- 适合取证、入侵分析和报文级排错。
- 镜像是旁路副本，不会自动阻断原流量。
- 加密报文被复制后仍是密文。
- Source 到 Target 仍需有效网络路径。

## 常见误区

- Flow Logs 只记录元数据；Mirroring 复制实际报文。
- 需要内联阻断时使用 Network Firewall 或 GWLB 安全设备链路。

## 重点记忆

**复制用于看；串行检查用于管。**

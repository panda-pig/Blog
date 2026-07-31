---
title: "EC2 实例类型与计费模型"
fullName: "Amazon EC2 Instance Types and Purchasing Options"
description: "先判断工作负载是否可中断、持续时间是否稳定、是否涉及许可证和物理主机要求，再选择计费方式。"
service: "EC2 实例类型与计费模型"
category: compute
kind: service
lang: zh
topicKey: "EC2 实例类型与计费模型"
frequency: "考试频率 ⭐⭐⭐⭐⭐"
date: 2026-07-30
updated: 2026-07-31
tags: ["compute","EC2 实例类型与计费模型","AWS"]
notionId: 3a6964dc-ce4a-819c-ac88-d5fe7f897926
notionUrl: https://app.notion.com/p/3a6964dcce4a819cac88d5fe7f897926
notionUpdated: "2026-07-30T04:27:11.353Z"
---

## 基本信息

| 字段 | 内容 |
| --- | --- |
| 英文 | EC2 Instance Types & Pricing Models |
| 全称 | Amazon EC2 Instance Types and Purchasing Options |
| 中文释义 | EC2 实例类型与计费模型 |
| 日文释义 | EC2 インスタンスタイプと料金モデル |
| 考试频率 | ⭐⭐⭐⭐⭐ |
| 易混淆 | On-Demand / Savings Plans / Reserved Instances / Spot / Dedicated Host |

## 实例类型

| 类型 | 适合场景 |
| --- | --- |
| General Purpose | Web 服务、开发测试、通用应用 |
| Compute Optimized | 批处理、高性能计算、游戏服务器、科学建模 |
| Memory Optimized | 内存数据库、大型缓存、实时大数据分析 |
| Accelerated Computing | GPU、机器学习、图形处理 |
| Storage Optimized | 高吞吐本地存储、分布式文件系统、数据仓库 |

## 常见计费选项

| 方式 | 适合场景 | 重点 |
| --- | --- | --- |
| On-Demand | 短期、不可预测、首次测试 | 无长期承诺，灵活但单价通常较高 |
| Savings Plans | 稳定的计算使用量 | 承诺一定使用金额，灵活度通常高于传统 RI |
| Reserved Instances | 稳定的 EC2 使用需求 | 以期限承诺换取折扣 |
| Spot Instances | 可中断、容错、批处理 | 价格低，但实例可能被回收 |
| Dedicated Instance | 单租户硬件需求 | 不控制具体物理主机 |
| Dedicated Host | 许可证与物理主机控制 | 获得整台物理服务器的可见性和控制 |

## 高频易混淆

- Dedicated Host vs Dedicated Instance
- Savings Plans vs Reserved Instances
- Spot vs On-Demand
- Compute Optimized vs Accelerated Computing

## 做题方法

先判断工作负载是否可中断、持续时间是否稳定、是否涉及许可证和物理主机要求，再选择计费方式。

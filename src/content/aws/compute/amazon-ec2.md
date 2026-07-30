---
title: Amazon EC2
fullName: "Amazon Elastic Compute Cloud"
description: AWS 云中的虚拟服务器：拥有较高的系统控制权，同时也需要承担操作系统、补丁和运行环境的管理责任。
service: EC2
category: compute
kind: service
lang: zh
frequency: "考试频率 ⭐⭐⭐⭐⭐"
date: 2026-07-23
updated: 2026-07-30
tags:
  - Compute
  - IaaS
  - SAA-C03
  - Cloud Practitioner
notionId: 3a6964dc-ce4a-8158-b0a8-d1d2f5cf6e05
notionUrl: https://app.notion.com/p/3a6964dcce4a8158b0a8d1d2f5cf6e05
notionUpdated: "2026-07-23T07:19:19.291Z"
---

## 基本信息

| 字段 | 内容 |
| --- | --- |
| 英文 | Amazon EC2 |
| 全称 | Amazon Elastic Compute Cloud |
| 中文 | 弹性云服务器 / 虚拟机 |
| 日文 | Amazon EC2（仮想サーバー） |
| 考试频率 | ⭐⭐⭐⭐⭐ |
| 易混淆 | Lambda / Fargate / Lightsail |

## 一句话理解

EC2 就是 AWS 云中的虚拟服务器：你可以自由选择操作系统和配置，但也要负责操作系统、补丁、运行环境与应用。

## 核心作用

- 运行长期在线的 Web、API、数据库或后台服务。
- 提供可定制的 CPU、内存、网络、存储与加速硬件。
- 适合需要系统级控制、特殊软件或持续运行的工作负载。

## 工作原理

选择 AMI → 选择实例类型 → 配置网络、IAM、Security Group 与存储 → 启动实例 → 部署应用 → 使用 CloudWatch 监控。

## AMI

AMI（Amazon Machine Image）是启动 EC2 的模板，通常包含操作系统、软件和配置，并可关联一个或多个 EBS Snapshot。
- 官方 AMI：AWS 提供。
- Marketplace AMI：第三方提供。
- 自定义 AMI：基于自己的实例创建，便于复制环境。

## 实例类型

- General Purpose：通用 Web、开发测试。
- Compute Optimized：批处理、高性能计算、游戏服务器、科学建模。
- Memory Optimized：内存数据库、大型缓存、实时分析。
- Accelerated Computing：GPU、机器学习、图形处理。
- Storage Optimized：高吞吐本地存储和数据密集型任务。

## 计费方式

- On-Demand：短期、不可预测、无需长期承诺。
- Savings Plans / Reserved Instances：稳定长期使用，以承诺换折扣。
- Spot：价格低但可被回收，适合可中断和容错任务。
- Dedicated Instance：运行在单租户硬件上，但不控制具体主机。
- Dedicated Host：获得整台物理主机的可见性与控制，常用于许可证合规。

## 工作场景

- Spring Boot、Django、Node.js 等长期运行的服务器应用。
- 需要安装自定义驱动、代理或系统软件。
- 旧系统迁移、测试环境、批处理节点。
- 需要 GPU、特殊 CPU 或大内存实例。

## Cloud Practitioner 考点

- EC2 是 IaaS。
- 客户负责 Guest OS、补丁、应用和数据。
- 可按需创建、停止、调整或删除实例。
- EC2 可结合 EBS、ELB 和 Auto Scaling。

## SAA-C03 考点

- 根据 CPU、内存、存储和网络选择实例系列。
- 使用 AMI 和 Launch Template 标准化部署。
- 用多 AZ、ELB 和 Auto Scaling 提高可用性与弹性。
- 按可中断性和使用稳定度选择计费方式。
- 用 IAM Role 代替应用中的长期访问密钥。

## 常见误区

- EC2 不等于物理服务器，它通常是虚拟机实例。
- EC2 不会自动变成高可用，必须设计多 AZ 和故障恢复。
- ELB 负责分配流量，Auto Scaling 负责增加、减少或替换实例。
- Dedicated Host 和 Dedicated Instance 不相同。

## 面试高频问题

- EC2、Lambda、Fargate 如何选择？
- 如何设计跨 AZ 的 EC2 高可用架构？
- Spot 实例适合什么任务，如何处理被回收？
- IAM Role、Security Group、EBS 和 AMI 分别负责什么？

## 重点记忆

EC2 = 控制权高，但管理责任也高。经典高可用组合：AMI / Launch Template + Multi-AZ ASG + ELB + CloudWatch。

## 关联服务

AMI、EBS、Security Group、IAM Role、ELB、Auto Scaling、CloudWatch、Route 53。

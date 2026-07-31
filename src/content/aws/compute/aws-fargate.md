---
title: "AWS Fargate"
fullName: "AWS Fargate"
description: "Fargate 负责提供运行容器的计算资源，让你使用 ECS 或 EKS 时无需管理底层 EC2。"
service: "AWS Fargate"
category: compute
kind: service
lang: zh
topicKey: "AWS Fargate"
frequency: "考试频率 ⭐⭐⭐⭐⭐"
date: 2026-07-30
updated: 2026-07-31
tags: ["compute","AWS Fargate","AWS"]
notionId: 3a6964dc-ce4a-8117-b59f-fb16989375b3
notionUrl: https://app.notion.com/p/3a6964dcce4a8117b59ffb16989375b3
notionUpdated: "2026-07-30T04:28:46.386Z"
---

## 基本信息

| 字段 | 内容 |
| --- | --- |
| 英文 | AWS Fargate |
| 全称 | AWS Fargate |
| 中文释义 | 无服务器容器计算引擎 |
| 日文释义 | AWS Fargate（ファーゲート） |
| 考试频率 | ⭐⭐⭐⭐⭐ |
| 易混淆 | ECS / EKS / Lambda / EC2 |

## 一句话理解

Fargate 负责提供运行容器的计算资源，让你使用 ECS 或 EKS 时无需管理底层 EC2。

## 它不是什么

- 不是镜像仓库：镜像由 ECR 保存。
- 不是容器编排器：ECS / EKS 负责调度和编排。
- 不是函数计算：Lambda 以函数为执行单位。

## 工作原理

ECR 镜像 → ECS Task 或 EKS Pod → Fargate 按请求的 CPU / 内存启动隔离计算环境 → 运行容器 → 按资源与运行时间计费。

## 适用场景

- 小团队或流量变化大的 Web 应用。
- 希望专注应用，不想维护容器节点。
- 工作负载适合 Fargate 支持的计算和网络模型。

## 与 Lambda 的区别

| 维度 | Lambda | Fargate |
| --- | --- | --- |
| 执行单位 | 函数 | 容器 |
| 运行时长 | 单次最长 15 分钟 | 适合更长时间服务或任务 |
| 控制力 | 较少 | 可自定义完整容器镜像 |
| 编排 | 事件触发为主 | 配合 ECS / EKS |

## Cloud Practitioner 考点

Fargate 是无服务器容器计算服务，与 ECS / EKS 配合，不管理底层 EC2。

## SAA-C03 考点

- ECS / EKS 使用 Fargate 与 EC2 节点的选型。
- 网络、Task / Pod 资源和 IAM 权限。
- 以减少运维为目标时优先考虑 Fargate。

## 常见误区

- Fargate 不负责容器编排。
- 使用 Fargate 仍需定义 ECS Task 或 EKS Pod。
- Fargate 不等于 Lambda。

## 重点记忆

ECS / EKS 管“怎么调度”，Fargate 管“在哪里运行”。

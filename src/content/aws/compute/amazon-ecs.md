---
title: "Amazon ECS"
fullName: "Amazon ECS"
description: "ECS 负责在 AWS 上部署、调度、扩缩和维护容器，是 AWS 原生的容器编排服务。"
service: "Amazon ECS"
category: compute
kind: service
lang: zh
topicKey: "Amazon ECS"
frequency: "考试频率 ⭐⭐⭐⭐⭐"
date: 2026-07-30
updated: 2026-07-30
tags: ["compute","Amazon ECS","AWS"]
notionId: 3a6964dc-ce4a-8132-9a5c-c4a14b839c97
notionUrl: https://app.notion.com/p/3a6964dcce4a81329a5cc4a14b839c97
notionUpdated: "2026-07-23T07:19:31.706Z"
---

## 基本信息

| 字段 | 内容 |
| --- | --- |
| 英文 | Amazon ECS |
| 全称 | Amazon Elastic Container Service |
| 中文 | AWS 原生容器编排服务 |
| 日文 | Amazon ECS |
| 考试频率 | ⭐⭐⭐⭐⭐ |
| 易混淆 | EKS / Fargate / ECR |

## 一句话理解
ECS 负责在 AWS 上部署、调度、扩缩和维护容器，是 AWS 原生的容器编排服务。
## 核心组件

| 组件 | 含义 |
| --- | --- |
| Task Definition | 运行模板，描述镜像、CPU、内存、端口、环境变量与 IAM Role |
| Task | Task Definition 的一次实际运行 |
| Service | 持续维持指定数量的 Task，并可连接 ALB 和 Auto Scaling |
| Cluster | 承载和组织 ECS 工作负载的逻辑集合 |

## 两种常见计算方式
- ECS + EC2：你管理实例，可控制硬件、网络和成本。
- ECS + Fargate：不用管理服务器，按 Task 所需资源付费。
## 完整流程
代码 → 构建 Container Image → 推送 ECR → Task Definition 引用镜像 → ECS 调度 → EC2 或 Fargate 运行 → ALB 分发流量。
## 工作场景
- AWS 内部的微服务和 Web API。
- 团队不需要 Kubernetes 生态，希望降低编排复杂度。
- 需要服务持续维持 Task 数量并自动扩缩。
## Cloud Practitioner 考点
- ECS 是容器编排服务。
- ECR 存镜像。
- EC2 / Fargate 提供计算资源。
- Fargate 不是 ECS 的竞争服务。
## SAA-C03 考点
- Task Definition、Task、Service、Cluster。
- EC2 Launch Type 与 Fargate 的选型。
- ALB、ECR、CloudWatch Logs、IAM Task Role 的组合。
- Service Auto Scaling 与多 AZ 部署。
## 常见误区
- ECS 本身不是虚拟机。
- ECS 不存储镜像。
- 使用 ECS 仍需要 EC2 或 Fargate 提供计算。
- ECS 与 Fargate 可以一起使用。
## 重点记忆
ECS = AWS 原生编排；ECR = 镜像仓库；EC2 / Fargate = 运行位置。

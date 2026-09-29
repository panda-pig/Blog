---
title: "AWS Compute 面试速查"
fullName: "AWS Compute Interview Guide"
description: "从运行单位、扩展方式、状态与故障恢复回答 EC2、Lambda、ECS、EKS 和 Fargate 面试题。"
service: "AWS Compute"
category: compute
kind: topic
lang: zh
topicKey: "AWS Compute Interview Guide"
frequency: "面试高频"
date: 2026-09-29
updated: 2026-09-29
tags: ["compute", "interview", "EC2", "Lambda"]
notionId: 3a6964dc-ce4a-813c-8d13-e550b3642dec
notionUrl: https://app.notion.com/p/3a6964dcce4a813c8d13e550b3642dec
notionUpdated: "2026-09-28T04:09:28.875Z"
---

## 回答框架

先说 **运行单位与控制面 → 扩缩方式 → 状态位置 → 健康与替换 → 成本和限制**，再结合业务约束选服务。

## 高频问题

| 问题 | 回答重点 |
| --- | --- |
| EC2、Lambda、Fargate 怎么选 | OS 控制与长期进程 / 短时事件函数 / 无需管理节点的容器 |
| ECS 与 EKS 区别 | AWS 原生编排 / Kubernetes API 与生态；两者都可用 EC2 或 Fargate |
| Task Role vs Execution Role | 应用调用 AWS API / ECS Agent 拉镜像、写日志与取启动 Secret |
| ASG 如何自愈 | Launch Template 定义实例；ASG 维持 Min/Desired/Max，并结合 EC2/ELB Health 替换 |
| Reserved vs Provisioned Concurrency | 预留并限制并发 / 预热执行环境降低 Cold Start |
| EC2 登录与 API 权限 | SSH/SSM 决定进入 OS；Instance Profile 中的 Role 决定调用 AWS API |

## 场景速判

- 完整 OS、特殊硬件、长期进程 → EC2。
- 事件驱动、单次不超过 15 分钟 → Lambda。
- 容器且不想管理节点 → ECS / EKS + Fargate。
- Kubernetes 兼容与生态要求 → EKS。
- 周期负载 → Scheduled / Predictive Scaling；维持指标目标 → Target Tracking。

## 重点记忆

**先解释谁管理什么、状态放哪里、失败后谁替换，再讨论性能和价格。**

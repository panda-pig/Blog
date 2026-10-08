---
title: "AWS ParallelCluster"
fullName: "AWS ParallelCluster"
description: "用配置文件部署和管理 AWS HPC 集群，作业通常由 Slurm 调度。"
service: "AWS ParallelCluster"
category: compute
kind: service
lang: zh
topicKey: "AWS ParallelCluster"
frequency: "考试频率 ⭐⭐⭐"
date: 2026-10-08
updated: 2026-10-08
tags: ["compute","AWS ParallelCluster","AWS"]
notionId: 3f3964dc-ce4a-81ac-94ac-ca8692325425
notionUrl: https://app.notion.com/p/3f3964dcce4a81ac94acca8692325425
notionUpdated: "2026-10-08T02:16:01.778Z"
---
## 基本信息

| 字段 | 内容 |
| --- | --- |
| 英文 / 全称 | AWS ParallelCluster |
| 中文 | AWS HPC 集群部署与管理工具 |
| 日文 | AWS HPC クラスター構築・管理ツール |
| 复习优先级 | 考试频率 ⭐⭐⭐ |
| 易混淆 | AWS Batch / Slurm / EFA |

## 一句话理解

用配置文件部署和管理 AWS HPC 集群，作业通常由 Slurm 调度。

## 核心整理

ParallelCluster 管基础设施与集群配置，Slurm 管队列和资源分配；EFA 与 FSx for Lustre 是可组合的网络和存储组件。

## 学习重点

- 先判断工作负载是独立批处理还是紧耦合 MPI。
- 确定 Head Node、Compute Nodes、子网、实例、共享存储和扩缩策略。
- 紧耦合场景检查 Cluster Placement Group、EFA、驱动和通信库。
- 用真实作业验证通信、I/O、失败重试和 Checkpoint。

## 常见误区

- ParallelCluster 不是 AWS Batch 的别名。
- 自动创建资源不等于自动保证性能，也不代表资源免费。

## 重点记忆

**ParallelCluster 管集群，Slurm 管作业；EFA 管通信，Lustre 管并行 I/O。**

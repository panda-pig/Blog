---
title: "HPC on AWS"
fullName: "High Performance Computing on AWS"
description: "先识别计算、节点通信、存储 I/O 或数据搬运瓶颈，再组合合适的 AWS 组件。"
service: "High Performance Computing on AWS"
category: architecture
kind: topic
lang: zh
topicKey: "High Performance Computing on AWS"
frequency: "考试频率 ⭐⭐⭐"
date: 2026-10-08
updated: 2026-10-08
tags: ["architecture","High Performance Computing on AWS","AWS"]
notionId: 3f3964dc-ce4a-81ce-9e10-ef23fdb9fa6b
notionUrl: https://app.notion.com/p/3f3964dcce4a81ce9e10ef23fdb9fa6b
notionUpdated: "2026-10-08T02:16:00.587Z"
---
## 基本信息

| 字段 | 内容 |
| --- | --- |
| 英文 / 全称 | High Performance Computing on AWS |
| 中文 | AWS 高性能计算架构 |
| 日文 | AWS の高性能コンピューティング |
| 复习优先级 | 考试频率 ⭐⭐⭐ |
| 易混淆 | AWS Batch / ParallelCluster / EFA / FSx for Lustre |

## 一句话理解

先识别计算、节点通信、存储 I/O 或数据搬运瓶颈，再组合合适的 AWS 组件。

## 核心整理

松耦合任务适合 Batch 与弹性节点；紧耦合 MPI 更关注单 AZ Cluster Placement、EFA 和并行文件系统。

## 学习重点

- ENA 改善常规 IP 网络，EFA 面向兼容的低延迟通信。
- FSx for Lustre 适合并行文件 I/O，S3 适合持久数据集和结果。
- Batch 管作业队列，ParallelCluster 管 HPC 集群。
- Spot 要配合可重试任务或可恢复 Checkpoint。

## 常见误区

- 增加实例数量不一定更快，瓶颈可能在通信或存储。
- Cluster Placement Group 提升通信性能，但不提供多 AZ 故障分散。

## 重点记忆

**HPC = 计算 + 低延迟通信 + 并行存储 + 调度。**

---
title: "EC2 Placement Groups：Cluster、Spread 与 Partition"
fullName: "Amazon EC2 Placement Groups"
description: "用性能、实例级隔离和分区级隔离三个维度选择 EC2 Placement Group。"
service: "Amazon EC2"
category: compute
kind: topic
lang: zh
topicKey: "EC2 Placement Groups"
frequency: "SAA 高频"
date: 2026-09-29
updated: 2026-09-29
tags: ["EC2", "placement group", "high availability", "HPC"]
notionId: 3e8964dc-ce4a-8154-a5b9-c2100ce5ced4
notionUrl: https://app.notion.com/p/3e8964dcce4a8154a5b9c2100ce5ced4
notionUpdated: "2026-09-27T05:01:04.233Z"
---

## 一句话理解

Placement Group 控制同组 EC2 的相对底层放置：要么靠近以换取网络性能，要么分散以隔离关联故障。

## 三种策略

| 策略 | 目标 | 范围与限制 | 典型场景 |
| --- | --- | --- | --- |
| Cluster | 低延迟、高吞吐 | 单 AZ，故障范围集中 | HPC、紧耦合计算 |
| Spread | 少量关键实例逐台隔离 | 每 AZ、每组最多 7 台 Running 实例 | 少量关键节点 |
| Partition | 大量节点按故障域分组 | 每 AZ 最多 7 个 Partition，每组可含多实例 | HDFS、Cassandra、Kafka |

- Cluster 优化性能，不提供跨 AZ 高可用。
- Spread 的“7”指实例数；Partition 的“7”指分区数。
- Partition 不是一台机架，而是一组相互隔离的底层机架。
- Placement Group 不等于 Capacity Reservation、Dedicated Host 或 Auto Scaling Group。

## 场景判断

- 极低延迟、节点间高吞吐 → Cluster。
- 少量关键实例避免同时硬件故障 → Spread。
- 大规模分布式系统、应用能感知副本放置 → Partition。

## 重点记忆

**Cluster 靠近换性能，Spread 逐台分散换隔离，Partition 分组隔离换规模。**

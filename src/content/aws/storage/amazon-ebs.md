---
title: Amazon EBS
fullName: Amazon Elastic Block Store
description: 为 EC2 提供独立于宿主机、可配置容量与性能的持久块存储卷。
service: EBS
category: storage
kind: service
lang: zh
frequency: "考试频率 ★★★★★"
date: 2026-07-29
updated: 2026-07-29
tags: [Storage, Block Storage, EC2]
notionId: 3a6964dc-ce4a-8126-968f-e04a57570ada
notionUrl: https://app.notion.com/p/3a6964dcce4a8126968fe04a57570ada
notionUpdated: "2026-07-29T04:41:27.242Z"
---

## 一句话理解

> EBS 像云硬盘一样附加到同一 AZ 的 EC2，适合系统盘、数据库与需要低延迟随机读写的数据。

## 核心作用

- EBS 是单 AZ 资源；跨 AZ 迁移通常先创建 Snapshot，再在目标 AZ 创建新卷。
- Stop EC2 时卷会保留；Terminate 时是否删除取决于 Delete on Termination。
- IOPS 关注每秒操作次数，Throughput 关注每秒传输数据量；卷类型需按负载选择。

## 考试重点

- 临时、可重建数据可用 Instance Store；持久系统盘和数据库通常用 EBS。
- gp3/gp2 适合通用用途，io2/io1 面向关键高 IOPS，st1/sc1 面向顺序吞吐或冷数据。
- Snapshot 是增量块级时间点备份；DLM 可自动管理快照生命周期。

## 常见误区

- EBS 持久不代表终止实例时一定保留。
- EBS 不是天然多 AZ 的共享文件系统。

## 重点记忆

> **临时本地盘用 Instance Store；持久云硬盘用 EBS；跨 AZ 通过 Snapshot 重建。**

## 关联服务

EC2、EBS Snapshot、DLM、AWS Backup、KMS。

---
title: AWS Elastic Disaster Recovery
fullName: AWS Elastic Disaster Recovery
description: 持续把服务器数据块复制到 AWS，并在灾难时快速启动恢复实例。
service: AWS DRS
category: storage
kind: service
lang: zh
frequency: "考试频率 ★★★★"
date: 2026-07-29
updated: 2026-07-29
tags: [Storage, Disaster Recovery, Architecture]
notionId: 3ac964dc-ce4a-81f3-bec3-cd5079cbbaa7
notionUrl: https://app.notion.com/p/3ac964dcce4a81f3bec3cd5079cbbaa7
notionUpdated: "2026-07-29T04:39:41.992Z"
---

## 一句话理解

> AWS DRS 面向物理机、虚拟机和其他云服务器的业务连续性，通过持续块级复制降低 RPO 和 RTO。

## 核心作用

- 源服务器安装代理，将变化的数据块复制到 AWS 的低成本 Staging Area。
- 演练或故障时启动 Recovery EC2，验证后执行 Failover；恢复后可规划 Failback。
- 持续复制降低数据丢失窗口，但网络、DNS、启动配置和应用依赖仍需测试。

## 考试重点

- Disaster Recovery、Continuous Replication、快速恢复整台服务器通常选择 AWS DRS。
- EBS Snapshot 保护卷，AWS Backup 管多服务备份，Storage Gateway 提供混合存储接口。
- 架构题要同时评估 RPO、RTO、恢复演练与备用环境成本。

## 常见误区

- DRS 不是普通长期备份服务。
- 持续复制不代表无需验证数据一致性、DNS 和业务依赖。

## 重点记忆

> **Backup 保护数据；DRS 让整台服务器和业务更快恢复运行。**

## 关联服务

EC2、AWS Backup、EBS Snapshot、Route 53、Storage Gateway。

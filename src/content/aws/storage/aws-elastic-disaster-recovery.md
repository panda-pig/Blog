---
title: AWS Elastic Disaster Recovery
fullName: "AWS Elastic Disaster Recovery"
description: 持续把服务器数据块复制到 AWS，并在灾难时快速启动恢复实例。
service: AWS DRS
category: storage
kind: service
lang: zh
frequency: "考试频率 ⭐⭐⭐⭐"
date: 2026-07-29
updated: 2026-07-31
tags: [Storage, Disaster Recovery, Architecture]
notionId: 3ac964dc-ce4a-81f3-bec3-cd5079cbbaa7
notionUrl: https://app.notion.com/p/3ac964dcce4a81f3bec3cd5079cbbaa7
notionUpdated: "2026-07-30T08:30:13.728Z"
---

## 基本信息

| 字段 | 内容 |
| --- | --- |
| 英文 | AWS Elastic Disaster Recovery (AWS DRS) |
| 全称 | AWS Elastic Disaster Recovery |
| 中文释义 | AWS 弹性灾难恢复 |
| 日文释义 | AWS Elastic Disaster Recovery（災害復旧サービス） |
| 考试频率 | ⭐⭐⭐⭐ |
| 易混淆 | AWS Backup / EBS Snapshot / Storage Gateway |

## 一句话理解

持续把物理机、虚拟机或云服务器的数据块复制到 AWS，灾难时在 AWS 快速启动恢复实例。

## 核心作用

- 降低服务器级工作负载的 RTO 与 RPO。
- 避免长期维护完整的第二数据中心。
- 支持不影响生产环境的恢复演练。
- 灾难发生时执行 Failover，恢复后可规划 Failback。

## 工作原理

源服务器安装复制代理 → 持续 Block-level Replication → AWS 低成本暂存区 → 需要时启动恢复 EC2 → 验证并切换业务流量。
它复制的是服务器磁盘变化，而不是只在固定时间保存一份备份文件。

## 适用场景

- 医院、银行、制造系统等要求快速恢复的关键服务器。
- VMware、Hyper-V、物理服务器或其他云服务器灾备。
- 希望降低备用数据中心成本的企业。
- 需要定期进行非中断式灾难恢复测试。

## Cloud Practitioner 考点

看到 Disaster Recovery、Business Continuity、Continuous Replication、Physical/Virtual Server、快速恢复，优先考虑 AWS DRS。

## SAA-C03 考点

- Block-level Replication。
- Staging Area 与 Recovery Instance。
- Failover / Failback。
- RTO / RPO 与成本权衡。
- 恢复演练、网络、DNS、启动配置和数据一致性。

## 常见误区

- DRS 不是普通长期备份服务。
- EBS Snapshot 备份卷；DRS 面向服务器级恢复流程。
- Storage Gateway 是混合存储接口，不负责快速启动完整服务器。
- 持续复制不等于无需测试恢复、DNS、网络和应用依赖。

## 面试高频问题

1. AWS DRS 与 AWS Backup 的主要区别是什么？
2. 为什么块级持续复制能降低 RPO？
3. 如何规划 Failover 后的网络、DNS 和 Failback？

## 重点记忆

**Backup 保护数据；DRS 让整台服务器和业务更快恢复运行。**

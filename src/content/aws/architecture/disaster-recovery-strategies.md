---
title: "灾难恢复策略"
fullName: "Disaster Recovery Strategies"
description: "根据业务允许的数据丢失量、停机时间和预算，在 Backup & Restore、Pilot Light、Warm Standby、Multi-site 之间选择。"
service: "Architecture"
category: architecture
kind: topic
lang: zh
topicKey: "灾难恢复策略"
frequency: "考试频率 ⭐⭐⭐⭐⭐"
date: 2026-07-30
updated: 2026-07-30
tags: ["architecture","Disaster Recovery Strategies","AWS"]
notionId: 3a6964dc-ce4a-81a1-a460-dec79107380f
notionUrl: https://app.notion.com/p/3a6964dcce4a81a1a460dec79107380f
notionUpdated: "2026-07-29T04:44:08.420Z"
---

## 基本信息

| 字段 | 内容 |
| --- | --- |
| 英文 | Disaster Recovery Strategies |
| 全称 | Disaster Recovery Strategies |
| 中文 | 灾难恢复策略 |
| 日文 | 災害復旧戦略 |
| 考试频率 | ⭐⭐⭐⭐⭐ |
| 易混淆 | Backup / Multi-AZ / AWS DRS |

## 一句话理解

根据业务允许的数据丢失量、停机时间和预算，在 Backup & Restore、Pilot Light、Warm Standby、Multi-site 之间选择。

## RPO 与 RTO

- **RPO（Recovery Point Objective）**：最多允许丢失多长时间的数据。
- **RTO（Recovery Time Objective）**：发生故障后，最多允许停机多久。
一般来说，RPO/RTO 越低，架构成本和复杂度越高。

## 四种典型策略

| 策略 | 灾备环境状态 | 恢复速度 | 成本 |
| --- | --- | --- | --- |
| Backup & Restore | 主要保留备份 | 最慢 | 最低 |
| Pilot Light | 核心数据/最小组件持续运行 | 较快 | 较低 |
| Warm Standby | 缩小版完整环境运行 | 更快 | 中高 |
| Multi-site Active/Active | 多站点同时服务 | 最快 | 最高 |

## AWS Elastic Disaster Recovery 的位置

AWS DRS 持续把物理机、虚拟机或云服务器的数据块复制到 AWS 低成本暂存区，在灾难时启动恢复 EC2。
它通常用于：
- 比纯 Backup & Restore 更低的 RPO/RTO。
- 不想长期运行完整备用数据中心。
- 需要非中断恢复演练。
- 需要 Failover 后再规划 Failback。
具体属于哪种整体 DR 策略，仍取决于应用、网络、数据库和流量切换设计。

## 恢复流程

1. 持续复制数据。
2. 定期执行 Test Recovery。
3. 灾难发生后启动 Recovery Instance。
4. 验证应用、身份、网络与数据。
5. 更新 DNS / 路由并切换用户。
6. 主站恢复后规划 Failback。
7. 复盘 RTO/RPO 是否达标。

## Cloud Practitioner 考点

- Backup 保护数据；Disaster Recovery 恢复业务。
- AWS DRS 关键词：Continuous Block Replication、Physical/Virtual Server、Business Continuity、快速恢复。
- Multi-AZ 是高可用，不等于完整 Region 灾难恢复。

## SAA-C03 考点

- RTO / RPO / 成本权衡。
- 四种 DR 策略。
- AWS DRS 的暂存区、恢复实例和持续块复制。
- S3、EBS Snapshot、AWS Backup、Cross-Region Copy。
- Route 53 / Global Accelerator 流量切换。
- 恢复测试、Runbook、依赖关系与数据一致性。

## 常见误区

- 备份成功不代表能在目标时间内恢复业务。
- AWS DRS 不替代长期合规备份。
- 持续复制可能同步错误或恶意变更，仍需 Versioning / Backup / Object Lock。
- Multi-Region 资源不会自动完成应用和数据一致性。
- 低 RTO/RPO 必须通过演练验证，不能只看服务宣传。

## 面试高频问题

1. 如何根据 RTO/RPO 选择 DR 策略？
2. DRS 与 AWS Backup 如何组合？
3. 灾难恢复演练需要验证哪些依赖？

## 重点记忆

**Backup 恢复数据，DRS 恢复服务器；真正的 DR 还包括网络、DNS、身份、应用依赖和演练。**

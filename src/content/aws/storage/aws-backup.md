---
title: AWS Backup
fullName: "AWS Backup"
description: 用统一策略集中安排、保留、监控和治理多种 AWS 服务备份。
service: AWS Backup
category: storage
kind: service
lang: zh
frequency: "考试频率 ⭐⭐⭐⭐"
date: 2026-07-29
updated: 2026-07-30
tags: [Storage, Backup, Governance]
notionId: 3a6964dc-ce4a-8144-a676-dad1d439be1f
notionUrl: https://app.notion.com/p/3a6964dcce4a8144a676dad1d439be1f
notionUpdated: "2026-07-29T08:13:14.538Z"
---

## 基本信息

| 字段 | 内容 |
| --- | --- |
| 英文 | AWS Backup |
| 全称 | AWS Backup |
| 中文 | 集中式备份管理 |
| 日文 | 一元バックアップ |
| 考试频率 | ⭐⭐⭐⭐ |
| 易混淆 | EBS Snapshot / DLM / AWS DRS / S3 Lifecycle |

## 一句话理解

通过统一策略集中安排、保留、监控和治理多种 AWS 服务的备份。

## 核心作用

- 用 Backup Plan 定义频率、窗口、保留和生命周期。
- 用资源选择或标签决定保护哪些资源。
- 把 Recovery Point 保存到 Backup Vault。
- 支持跨账户/跨 Region 备份策略（取决于资源支持）。
- 集中监控备份任务、恢复点与合规状态。

## 适用场景

- 统一管理 EBS、RDS、EFS、FSx、DynamoDB 等支持服务的备份。
- 多账户备份治理。
- 长期保留、审计和合规。
- 集中设置保留期，减少各团队漏做备份。

## 与相近功能的区别

| 需求 | 优先考虑 |
| --- | --- |
| 只自动管理 EBS Snapshot / EBS-backed AMI | Amazon DLM |
| 多种 AWS 服务集中备份 | AWS Backup |
| EBS 卷的单次时间点副本 | EBS Snapshot |
| 整台服务器持续复制并快速恢复 | AWS DRS |
| S3 对象自动转层/过期 | S3 Lifecycle |

## 责任共担

AWS 负责备份服务基础设施；客户仍负责：
- 选择资源与频率。
- 保留期、加密和访问权限。
- 跨账户/Region 策略。
- 成本监控。
- 恢复测试与业务恢复流程。

## Cloud Practitioner 考点

看到“多个 AWS 服务、集中式、统一备份策略、合规”优先考虑 AWS Backup。

## SAA-C03 考点

- Backup Plan、Vault、Recovery Point。
- 标签选择与 Organizations 集中管理。
- Vault Lock / 不可变保护的概念。
- Cross-Account / Cross-Region。
- Restore Testing 与权限。
- 与原生 Snapshot、DLM、DRS 的边界。

## 常见误区

- 创建 Backup Plan 不等于已选择全部需要保护的资源。
- 备份成功不等于恢复一定满足 RTO/RPO，必须测试。
- AWS Backup 不等于持续复制的服务器级 DRS。
- S3 Lifecycle 是对象成本与保留管理，不是多服务备份控制台。

## 面试高频问题

1. DLM 与 AWS Backup 如何选？
2. 如何设计跨账户备份隔离？
3. 如何证明备份可恢复？

## 重点记忆

**DLM 管 EBS 快照生命周期；AWS Backup 统一管理多服务备份；DRS 快速恢复服务器。**

## 07 数据库补充

- 支持统一管理 RDS、Aurora、DynamoDB 等受支持数据库资源的备份。
- 可以按标签自动分配备份计划，并进行跨账户、跨 Region 复制（依服务支持）。
- AWS Backup 不会自动保护全部数据库；客户必须选择资源、保留期、Vault 权限并验证恢复。
- 与数据库原生能力并不冲突：RDS 自动备份/PITR 解决实例恢复，AWS Backup 侧重跨服务集中治理。

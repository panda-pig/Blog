---
title: "EBS 快照与生命周期管理"
fullName: "Amazon EBS Snapshot and Amazon Data Lifecycle Manager"
description: "理解 EBS Snapshot 的增量块级备份、应用一致性，以及使用 DLM 自动创建、保留和清理快照。"
service: "Amazon EBS"
category: storage
kind: service
lang: zh
topicKey: "EBS 快照与生命周期管理"
frequency: "考试频率 ⭐⭐⭐⭐⭐"
date: 2026-07-30
updated: 2026-07-30
tags: ["EBS", "Snapshot", "DLM", "AWS Backup"]
notionId: 3ac964dc-ce4a-8132-9c35-fef045e66444
notionUrl: https://app.notion.com/p/3ac964dcce4a81329c35fef045e66444
notionUpdated: "2026-07-30"
---

## 基本信息

| 字段 | 内容 |
| --- | --- |
| 英文 | EBS Snapshot & Data Lifecycle Manager |
| 全称 | Amazon EBS Snapshot and Amazon Data Lifecycle Manager |
| 中文释义 | EBS 快照与生命周期管理 |
| 日文释义 | EBS スナップショットと Data Lifecycle Manager |
| 考试频率 | ⭐⭐⭐⭐⭐ |
| 易混淆 | EBS Snapshot / DLM / AWS Backup / AMI |

## EBS Snapshot

EBS Snapshot 是 EBS 卷的块级时间点备份。
- 第一次快照保存当时已使用的数据块。
- 后续快照只保存自上一快照后变化的数据块。
- 底层虽为增量存储，但每个快照都可逻辑上独立恢复完整新卷。
- 删除早期快照时，AWS 会保留后续快照仍需要的数据块。
- 快照由 AWS 管理并以冗余方式存储，不是用户可见的普通 S3 对象。

## 主要用途

- 恢复误删或损坏数据。
- 创建新 EBS 卷。
- 通过 Snapshot 在另一 AZ 创建新卷。
- 跨 Region 复制。
- 跨账户共享。
- AMI、灾难恢复和测试环境。

## 应用一致性

EBS 快照提供块级时间点能力，但不自动保证数据库事务或应用一致性。关键应用应考虑暂停/协调写入、Flush 缓存、数据库原生备份或支持应用一致性的流程。

## Amazon Data Lifecycle Manager（DLM）

DLM 按标签和时间表自动管理 EBS Snapshot / EBS-backed AMI：
- 定时创建。
- 保留最近 N 个或保留指定天数。
- 自动删除过期快照。
- 标签、归档、快速快照恢复。
- 支持的策略中可配置跨 Region 复制、跨账户共享等操作。

## DLM vs AWS Backup

| 需求 | 选择 |
| --- | --- |
| 主要管理 EBS Snapshot / EBS-backed AMI | DLM |
| 集中管理 EBS、RDS、EFS、FSx 等多服务备份 | AWS Backup |

## 责任共担

AWS 负责快照基础设施；客户负责频率、保留期、加密、访问权限、复制、成本监控和恢复测试。

## 高频场景

- 每天自动拍 EBS 快照，30 天后删除 → DLM。
- 把 EBS 数据迁移到另一 AZ → Snapshot → 目标 AZ 新卷。
- 多服务统一备份 → AWS Backup。
- 快照完成但数据库恢复异常 → 检查应用一致性。

## 记忆口诀

**Snapshot 备份一次；DLM 按规则持续创建、保留和清理。**

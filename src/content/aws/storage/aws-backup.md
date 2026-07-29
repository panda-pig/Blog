---
title: AWS Backup
fullName: AWS Backup
description: 用统一策略集中安排、保留、监控和治理多种 AWS 服务备份。
service: AWS Backup
category: storage
kind: service
lang: zh
frequency: "考试频率 ★★★★"
date: 2026-07-29
updated: 2026-07-29
tags: [Storage, Backup, Governance]
notionId: 3a6964dc-ce4a-8144-a676-dad1d439be1f
notionUrl: https://app.notion.com/p/3a6964dcce4a8144a676dad1d439be1f
notionUpdated: "2026-07-29T08:13:14.538Z"
---

## 一句话理解

> AWS Backup 通过 Backup Plan、资源选择和 Backup Vault，把多服务备份放到统一治理流程中。

## 核心作用

- Backup Plan 定义频率、窗口、生命周期和保留期。
- Recovery Point 保存在 Vault 中，可按服务支持进行跨账户或跨 Region 复制。
- 标签与 Organizations 可帮助多账户集中分配策略和检查合规。

## 考试重点

- 多服务、集中策略、合规与统一监控通常选择 AWS Backup。
- DLM 主要自动管理 EBS Snapshot/AMI；DRS 持续复制服务器以缩短恢复时间。
- 备份成功不等于满足 RTO/RPO，必须进行 Restore Testing。

## 常见误区

- 创建 Backup Plan 不会自动保护所有资源。
- AWS Backup 不替代数据库原生 PITR，也不等于服务器级 DRS。

## 重点记忆

> **DLM 管 EBS 快照；AWS Backup 统一多服务备份；DRS 快速恢复服务器。**

## 关联服务

EBS、RDS、Aurora、DynamoDB、EFS、FSx、AWS DRS。

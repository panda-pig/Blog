---
title: "AWS Systems Manager"
fullName: "AWS Systems Manager"
description: "集中管理 AWS 和混合环境中的节点，并自动执行运维与修复任务。"
service: "AWS Systems Manager"
category: monitoring
kind: service
lang: zh
topicKey: "AWS Systems Manager"
frequency: "考试频率 ⭐⭐⭐⭐"
date: 2026-07-31
updated: 2026-10-08
tags: ["monitoring", "AWS Systems Manager", "AWS"]
notionId: 3a6964dc-ce4a-8172-98e0-c06ec5cc85b8
notionUrl: https://app.notion.com/p/3a6964dcce4a817298e0c06ec5cc85b8
notionUpdated: "2026-10-08T02:56:58.732Z"
---

## 基本信息

| 字段 | 内容 |
| --- | --- |
| 英文 | AWS Systems Manager |
| 全称 | AWS Systems Manager |
| 中文释义 | 集中式运维管理 |
| 日文释义 | AWS Systems Manager（統合運用管理サービス） |
| 考试频率 | ⭐⭐⭐⭐ |
| 易混淆 | CloudWatch / AWS Config / Secrets Manager |

## 一句话理解

集中管理 AWS 和混合环境中的节点，并自动执行运维与修复任务。

## 阶段小结

- **核心定位**：集中管理 AWS 和混合环境中的节点，并自动执行运维与修复任务。
- **考试频率**：⭐⭐⭐⭐
- **对比检查**：CloudWatch / AWS Config / Secrets Manager

## 重点记忆

AWS Systems Manager = 集中式运维管理

## 本轮补充：无代理入口与运维自动化

- Session Manager 提供无需开放入站 22/3389 的受控会话，但实例仍需 SSM Agent、实例角色、操作者 IAM 和到 SSM 的出站路径。
- Run Command 批量执行命令；Automation 编排多步骤运维；Patch Manager 通过 Patch Baseline 与 Maintenance Window 管理补丁。
- 成为 Managed Node 不等于所有命令都有权限；文档、目标选择、并发、错误阈值和日志要单独配置。

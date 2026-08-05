---
title: "AWS Transform MGN"
fullName: "AWS Transform MGN（原 AWS Application Migration Service）"
description: "把物理、虚拟或云服务器复制并迁移到 AWS。"
service: "AWS Transform MGN"
category: migration
kind: service
lang: zh
topicKey: "AWS Transform MGN"
frequency: "考试频率 ⭐⭐⭐⭐"
date: 2026-07-31
updated: 2026-08-05
tags: ["migration", "AWS Transform MGN", "AWS Application Migration Service", "AWS"]
notionId: 3a6964dc-ce4a-8178-a861-df3330fe93bc
notionUrl: https://app.notion.com/p/3a6964dcce4a8178a861df3330fe93bc
notionUpdated: "2026-08-05T01:39:32.738Z"
---

## 基本信息

| 字段 | 内容 |
| --- | --- |
| 英文 | AWS Transform MGN |
| 全称 | AWS Transform MGN（原 AWS Application Migration Service） |
| 中文释义 | 服务器与应用迁移服务 |
| 日文释义 | AWS Transform MGN（サーバー・アプリケーション移行サービス） |
| 考试频率 | ⭐⭐⭐⭐ |
| 易混淆 | DMS / Migration Hub |

## 一句话理解

把物理、虚拟或云服务器复制并迁移到 AWS。

## 阶段小结

- **核心定位**：把物理、虚拟或云服务器复制并迁移到 AWS。
- **考试频率**：⭐⭐⭐
- **对比检查**：DMS / Migration Hub

## 重点记忆

AWS Transform MGN = 服务器与应用迁移

## 名称与定位

AWS Application Migration Service 已于 2026 年 6 月更名为 **AWS Transform MGN**。核心能力、API 和复制引擎保持连续，旧题仍可能出现 MGN 或原服务名。

## 工作流程

1. 在源服务器安装代理，把块级变化持续复制到 AWS 暂存区。
2. 启动测试实例，验证应用、网络、性能和依赖。
3. 计划切换窗口，完成最终同步并启动 Cutover 实例。
4. 验证后完成切换，并保留必要的回退方案。

MGN 迁移服务器和应用；DMS 迁移数据库；DataSync 传输文件与对象数据。

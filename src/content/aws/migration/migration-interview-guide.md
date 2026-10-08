---
title: "Migration 面试"
fullName: "AWS Migration Interview Guide"
description: "先回答业务目标、应用组合、依赖、迁移策略、Cutover/回退和迁移后现代化。"
service: "AWS Migration Interview Guide"
category: migration
kind: topic
lang: zh
topicKey: "AWS Migration Interview Guide"
frequency: "面试专题"
date: 2026-10-08
updated: 2026-10-08
tags: ["migration","AWS Migration Interview Guide","AWS"]
notionId: 3b3964dc-ce4a-818c-843f-caff35e7d321
notionUrl: https://app.notion.com/p/3b3964dcce4a818c843fcaff35e7d321
notionUpdated: "2026-10-08T01:56:02.673Z"
---
## 基本信息

| 字段 | 内容 |
| --- | --- |
| 英文 / 全称 | AWS Migration Interview Guide |
| 中文 | AWS 迁移面试 |
| 日文 | AWS 移行面接ガイド |
| 复习优先级 | 面试专题 |
| 易混淆 | MGN / DRS / DMS / DataSync / Direct Connect |

## 一句话理解

先回答业务目标、应用组合、依赖、迁移策略、Cutover/回退和迁移后现代化。

## 核心整理

按 Assess、Mobilize、Migrate & Modernize 组织项目，用依赖和风险划分波次，先做低风险试点。

## 学习重点

- 服务器低停机迁移：MGN 持续块级复制、测试、Cutover。
- 异构数据库：Schema/代码转换 + DMS Full Load/CDC。
- DataSync 搬文件，Transfer Family 提供协议入口，Direct Connect 提供网络路径。
- Backup Plan 还需要正确分配、权限、恢复点和实际恢复验证。

## 常见误区

- MGN 为计划迁移，DRS 为持续灾难恢复和 Failback。
- 低停机不等于零停机；每次切换都要有验收和回退条件。

## 重点记忆

**先发现和评估，再分策略与波次；先测试再切换，并始终准备回退。**

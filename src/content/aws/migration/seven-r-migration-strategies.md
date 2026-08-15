---
title: "7R 迁移策略"
fullName: "Seven Migration Strategies"
description: "为每个应用选择原样搬、小改、大改、换产品、保留或停用。"
service: "AWS Migration"
category: migration
kind: topic
lang: zh
topicKey: "7R 迁移策略"
frequency: "考试频率 ⭐⭐⭐⭐⭐"
date: 2026-08-05
updated: 2026-08-15
tags: ["migration", "7R", "AWS"]
notionId: 3b3964dc-ce4a-810d-9392-cdcb7db0c5a2
notionUrl: https://app.notion.com/p/3b3964dcce4a810d9392cdcb7db0c5a2
notionUpdated: "2026-08-05T01:41:27.369Z"
---

## 一句话理解

逐个应用判断：原样搬、整个平台搬、小改后搬、重新架构、换产品、暂时保留或直接停用。

## 7R 总表

| 策略 | 判断方法 | 典型例子 |
| --- | --- | --- |
| Rehost | 基本不改，Lift and Shift | 本地 VM → EC2 |
| Relocate | 整个平台整体迁移 | VMware 环境 → AWS 同类环境 |
| Replatform | 有限优化，不改核心架构 | 自建 MySQL → RDS |
| Refactor / Re-architect | 修改代码并重新设计 | 单体 → Lambda / 微服务 |
| Repurchase | 放弃旧产品，改用 SaaS | 自建 CRM → SaaS |
| Retain | 当前仍需运行但暂不迁移 | 合规或依赖尚未解决 |
| Retire | 系统不再需要 | 旧系统直接下线 |

## 高频辨析

- Rehost 是单个服务器或应用少改动迁移；Relocate 是整个平台整体搬迁。
- Replatform 只做有限云优化；Refactor 会修改或重写代码。
- Retain 是暂时保留运行；Retire 是停止系统。
- MGN 常对应 Rehost；数据库 VM 改用 RDS 常属于 Replatform。

## 重点记忆

**原样 Rehost，整体 Relocate，小改 Replatform，大改 Refactor，换产品 Repurchase，先保留 Retain，不需要 Retire。**

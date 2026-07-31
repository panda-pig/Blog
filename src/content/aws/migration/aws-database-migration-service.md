---
title: "AWS Database Migration Service"
fullName: "AWS Database Migration Service"
description: "通过全量加载与持续变更复制，以较低停机时间迁移或复制数据库。"
service: "AWS Database Migration Service"
category: migration
kind: service
lang: zh
topicKey: "AWS Database Migration Service"
frequency: "考试频率 ⭐⭐⭐⭐"
date: 2026-07-30
updated: 2026-07-30
tags: ["migration","AWS Database Migration Service","AWS"]
notionId: 3a6964dc-ce4a-811f-a33e-cb3fff35d10d
notionUrl: https://app.notion.com/p/3a6964dcce4a811fa33ecb3fff35d10d
notionUpdated: "2026-07-29T08:11:51.664Z"
---

## 基本信息

| 字段 | 内容 |
| --- | --- |
| 英文 | AWS Database Migration Service (AWS DMS) |
| 全称 | AWS Database Migration Service |
| 中文释义 | 数据库迁移服务 |
| 日文释义 | データベース移行サービス |
| 考试频率 | ⭐⭐⭐⭐ |
| 易混淆 | AWS SCT / EC2 Lift and Shift |

## 一句话理解

通过全量加载与持续变更复制，以较低停机时间迁移或复制数据库。

## 核心作用

- 同构迁移：例如 MySQL → RDS for MySQL。
- 异构迁移：例如 Oracle → Aurora PostgreSQL；通常还需 SCT 转换 Schema 和代码对象。
- 持续复制：在切换前同步后续变更，缩短停机窗口。

## 工作原理

Source Endpoint → DMS Replication → Target Endpoint。迁移期间源数据库通常可继续运行；切换前需验证数据、延迟与应用兼容性。

## Cloud Practitioner / SAA 考点

- 数据搬运与持续复制 → DMS。
- 异构数据库的 Schema、存储过程和代码转换 → SCT。
- DMS 不自动修改所有应用 SQL 和业务逻辑。

## 常见误区

- DMS 不是普通服务器整机迁移工具。
- DMS 不等于将 EC2 虚拟机原样搬迁。
- “低停机”不等于绝对零停机；仍需切换和验证计划。

## 面试高频问题

1. 如何设计低停机数据库迁移？
2. DMS 与 SCT 各自负责什么？
3. 如何验证迁移完整性和切换回退？

## 重点记忆

**DMS 搬数据；SCT 转 Schema/代码；应用切换仍需计划。**

## 关联服务

RDS、Aurora、DocumentDB、S3、SCT、CloudWatch。

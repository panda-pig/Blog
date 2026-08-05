---
title: "AWS Schema Conversion Tool"
fullName: "AWS Schema Conversion Tool (AWS SCT)"
description: "转换异构数据库之间的架构和代码对象。"
service: "AWS Schema Conversion Tool"
category: migration
kind: service
lang: zh
topicKey: "AWS Schema Conversion Tool"
frequency: "考试频率 ⭐⭐⭐"
date: 2026-07-31
updated: 2026-08-05
tags: ["migration", "AWS Schema Conversion Tool", "AWS"]
notionId: 3a6964dc-ce4a-8163-b911-fcb47562d655
notionUrl: https://app.notion.com/p/3a6964dcce4a8163b911fcb47562d655
notionUpdated: "2026-08-05T01:39:41.105Z"
---

## 基本信息

| 字段 | 内容 |
| --- | --- |
| 英文 | AWS Schema Conversion Tool |
| 全称 | AWS Schema Conversion Tool (AWS SCT) |
| 中文释义 | 数据库架构转换工具 |
| 日文释义 | スキーマ変換ツール |
| 考试频率 | ⭐⭐⭐ |
| 易混淆 | DMS |

## 一句话理解

转换异构数据库之间的架构和代码对象。

## 阶段小结

- **核心定位**：转换异构数据库之间的架构和代码对象。
- **考试频率**：⭐⭐⭐
- **对比检查**：DMS

## 重点记忆

AWS Schema Conversion Tool = 数据库架构转换工具

## 核心流程

1. 连接源与目标数据库，生成转换评估报告。
2. 自动转换兼容的 Schema、视图、存储过程和部分应用 SQL。
3. 手工处理无法自动转换的对象，再应用目标 Schema。
4. 使用 AWS DMS 执行全量加载与 CDC 增量复制。

## 考点

- **SCT 转换结构和代码，DMS 搬运数据**；异构迁移经常组合使用。
- 同构迁移通常不需要复杂的 Schema 转换，异构引擎才是 SCT 的典型场景。
- 评估报告用于识别人工改造工作量，不代表数据已经迁移。

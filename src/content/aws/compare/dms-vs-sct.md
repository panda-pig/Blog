---
title: "DMS vs SCT"
fullName: "DMS vs SCT"
description: "比较数据库数据迁移与数据库 Schema / 代码转换。"
service: "AWS Compare"
category: compare
kind: compare
lang: zh
topicKey: "DMS vs SCT"
frequency: "高频对比"
date: 2026-07-30
updated: 2026-07-30
tags: ["compare","DMS vs SCT","AWS"]
notionId: 3a6964dc-ce4a-81fa-9b04-f271ad097934
notionUrl: https://app.notion.com/p/3a6964dcce4a81fa9b04f271ad097934
notionUpdated: "2026-07-29T08:11:58.808Z"
---

> 比较数据库数据迁移与数据库 Schema / 代码转换。
## 对比结论
**DMS 搬数据并持续复制；SCT 分析并转换数据库 Schema 和代码对象。异构迁移通常组合使用。**
## 核心差异

| 维度 | AWS DMS | AWS SCT |
| --- | --- | --- |
| 主要用途 | 全量加载与持续变更复制 | Schema、视图、存储过程等评估与转换 |
| 典型场景 | 低停机迁移、持续复制 | Oracle → PostgreSQL 等异构引擎 |
| 是否搬数据 | 是 | 不是主要职责 |
| 是否解决所有兼容问题 | 否 | 可自动转换一部分，其余需人工处理 |
| 题目关键词 | CDC、Replication、Minimal Downtime | Schema Conversion、Assessment Report |

## 选型判断
- 相同/兼容引擎，只需要迁移数据 → 主要使用 DMS。
- 不同数据库引擎 → SCT 转换 Schema + DMS 迁移数据。
## 常见陷阱
- SCT 不负责把业务数据持续复制到目标库。
- DMS 不会自动重写所有应用程序 SQL。
- 迁移成功仍需验证数据、性能、权限和应用行为。
## 面试回答
先做兼容性评估，再用 SCT 转换可转换对象，用 DMS 完成全量与 CDC，最后进行一致性验证、切换与回退演练。

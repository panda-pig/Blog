---
title: "Snapshot、Read Replica、DMS 与 S3 Import"
fullName: "Snapshot vs Read Replica vs DMS vs S3 Import"
description: "先问源数据库、目标引擎兼容性和允许停机时间，再区分时间点迁移、持续同步和表数据导入。"
service: "Snapshot vs Read Replica vs DMS vs S3 Import"
category: compare
kind: compare
lang: zh
topicKey: "Snapshot vs Read Replica vs DMS vs S3 Import"
frequency: "高频对比"
date: 2026-10-08
updated: 2026-10-08
tags: ["compare","Snapshot vs Read Replica vs DMS vs S3 Import","AWS"]
notionId: 3f3964dc-ce4a-8108-bab2-d09539dba46c
notionUrl: https://app.notion.com/p/3f3964dcce4a8108bab2d09539dba46c
notionUpdated: "2026-10-08T01:45:33.847Z"
---
## 基本信息

| 字段 | 内容 |
| --- | --- |
| 英文 / 全称 | Snapshot vs Read Replica vs DMS vs S3 Import |
| 中文 | 数据库迁移方法对比 |
| 日文 | Database 移行方式の比較 |
| 复习优先级 | 高频对比 |
| 易混淆 | Point-in-time copy / Continuous replication / Table import |

## 一句话理解

先问源数据库、目标引擎兼容性和允许停机时间，再区分时间点迁移、持续同步和表数据导入。

## 核心整理

Snapshot 是时间点副本；Aurora 迁移副本可同步后续变化；DMS 可做 Full Load + CDC；S3 Import 取决于备份格式和目标入口。

## 学习重点

- 异构引擎先做 Schema/代码转换，再用 DMS 搬数据。
- 切换前要停写、追平、核对数据并切换连接。
- Percona XtraBackup 与 mysqldump 的格式和恢复入口不同。
- Replica Lag=0 是观测值，不是安全切换流程。

## 常见误区

- Aurora PostgreSQL aws_s3 是表数据导入，不是任意整库恢复。
- Snapshot Export to S3 不是通用恢复输入。

## 重点记忆

**时间点看 Snapshot，低停机同步看 Replica/DMS，S3 文件先辨认格式和入口。**

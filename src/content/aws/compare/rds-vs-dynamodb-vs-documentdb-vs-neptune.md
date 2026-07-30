---
title: "RDS vs DynamoDB vs DocumentDB vs Neptune"
fullName: "RDS vs DynamoDB vs DocumentDB vs Neptune"
description: "按数据模型和访问模式选数据库，不要强迫所有数据适应一种产品。"
service: "AWS Compare"
category: compare
kind: compare
lang: zh
topicKey: "RDS vs DynamoDB vs DocumentDB vs Neptune"
frequency: "高频对比"
date: 2026-07-30
updated: 2026-07-30
tags: ["compare","RDS vs DynamoDB vs DocumentDB vs Neptune","AWS"]
notionId: 3ac964dc-ce4a-813c-88e4-ea237b89afe1
notionUrl: https://app.notion.com/p/3ac964dcce4a813c88e4ea237b89afe1
notionUpdated: "2026-07-29T08:07:59.775Z"
---

> 按数据模型和访问模式选数据库，不要强迫所有数据适应一种产品。

## 核心对比

| 需求 | 服务 | 识别词 |
| --- | --- | --- |
| 固定结构、事务、SQL、JOIN | RDS / Aurora | 订单、财务、关系、外键 |
| Key-Value、大规模、高并发、已知访问模式 | DynamoDB | Partition Key、Serverless、毫秒级 |
| 复杂 JSON、嵌套字段、MongoDB 兼容工作负载 | DocumentDB | Document、半结构化、灵活 Schema |
| 关系路径本身最重要 | Neptune | Graph、Fraud、Social、Knowledge Graph |

## 选型顺序

1. 先看数据模型：表、Key-Value、文档还是图。
2. 再看访问模式：JOIN、按主键访问、文档查询还是关系遍历。
3. 再看一致性、事务、延迟、吞吐和扩展要求。
4. 最后比较运维责任与成本。

## 高频陷阱

- DynamoDB 也能保存文档型 Item，但 MongoDB 兼容和复杂文档查询通常指向 DocumentDB。
- Neptune 不是普通表格数据的默认选择；“关系本身”必须是核心。
- NoSQL 不等于不支持任何结构，而是不会采用传统固定关系表模型。
- DocumentDB 是 MongoDB 兼容服务，不要写成与 MongoDB 所有功能 100% 相同。

## 重点记忆

**SQL 关系 → RDS/Aurora；Key-Value → DynamoDB；复杂文档 → DocumentDB；复杂关系网络 → Neptune。**

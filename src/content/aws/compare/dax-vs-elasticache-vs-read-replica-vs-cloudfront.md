---
title: "DAX vs ElastiCache vs Read Replica vs CloudFront"
fullName: "DAX vs ElastiCache vs Read Replica vs CloudFront"
description: "四者都可能“提高读取性能”，但缓存位置、数据对象和适用后端不同。"
service: "AWS Compare"
category: compare
kind: compare
lang: zh
topicKey: "DAX vs ElastiCache vs Read Replica vs CloudFront"
frequency: "高频对比"
date: 2026-07-30
updated: 2026-07-30
tags: ["compare","DAX vs ElastiCache vs Read Replica vs CloudFront","AWS"]
notionId: 3ac964dc-ce4a-81ca-876d-ed2c254cc201
notionUrl: https://app.notion.com/p/3ac964dcce4a81ca876ded2c254cc201
notionUpdated: "2026-07-29T08:07:59.756Z"
---

> 四者都可能“提高读取性能”，但缓存位置、数据对象和适用后端不同。
## 核心对比

| 方案 | 主要对象 | 核心用途 | 题目关键词 |
| --- | --- | --- | --- |
| DAX | DynamoDB | DynamoDB 专用内存读取缓存 | DynamoDB、微秒级、重复 Key 读取 |
| ElastiCache | 应用或多种后端 | 通用内存缓存、会话、排行榜 | Valkey、Redis OSS、Memcached、Cache Hit |
| RDS Read Replica | 完整关系数据库副本 | 分担读取 SQL 查询 | 读扩展、报表、完整数据副本 |
| CloudFront | HTTP/HTTPS 内容 | 在全球边缘站点缓存网页和内容 | Edge、静态内容、全球用户 |

## 选型判断
- 只加速 DynamoDB 重复读取 → DAX。
- 缓存数据库结果、会话、排行榜或任意应用数据 → ElastiCache。
- 需要完整关系数据库副本并继续执行 SQL → Read Replica。
- 加速面向终端用户的 HTTP/HTTPS 内容 → CloudFront。
## 高频陷阱
- Multi-AZ 备用实例主要用于高可用，不等于 Read Replica。
- ElastiCache 的缓存不是默认持久事实来源。
- DAX 不适用于 RDS。
- CloudFront 不会减轻任意数据库 SQL 负载，除非缓存的是可缓存的 HTTP 响应。
## 重点记忆
**DAX 缓存 DynamoDB；ElastiCache 缓存应用数据；Read Replica 扩展 SQL 读取；CloudFront 缓存边缘内容。**

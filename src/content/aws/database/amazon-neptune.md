---
title: Amazon Neptune
fullName: "Amazon Neptune"
description: 以 Vertex、Edge 和 Property 表达并遍历复杂关系的托管图数据库。
service: Neptune
category: database
kind: service
lang: zh
frequency: "考试频率 ⭐⭐"
date: 2026-07-29
updated: 2026-07-31
tags: [Database, Graph, Analytics]
notionId: 3a6964dc-ce4a-812c-aa72-e53ae5cfe29f
notionUrl: https://app.notion.com/p/3a6964dcce4a812caa72e53ae5cfe29f
notionUpdated: "2026-07-30T04:29:07.777Z"
---

## 基本信息

| 字段 | 内容 |
| --- | --- |
| 英文 | Amazon Neptune |
| 全称 | Amazon Neptune |
| 中文释义 | 托管图数据库 |
| 日文释义 | マネージドグラフデータベース |
| 考试频率 | ⭐⭐ |
| 易混淆 | RDS / DocumentDB |

## 一句话理解

把 Node / Vertex、Edge 和 Property 作为核心数据，快速遍历复杂关系网络。

## 核心作用

- 适合属性图和 RDF 等图模型。
- 优化多跳关系查询和关系模式匹配。
- 提供托管备份、故障转移与自动扩展存储。

## 工作中的应用场景

社交网络、欺诈检测、推荐系统、知识图谱、网络拓扑和身份关系分析。

## 工作原理

关系数据库也能保存关系，但多层关系通常需要大量 JOIN；Neptune 直接以图模型表达关系路径。

## Cloud Practitioner / SAA 考点

看到 Graph、Social Network、Fraud Detection、Recommendation、Knowledge Graph 时优先考虑 Neptune。

## 常见误区

- 普通表格中存在外键，不代表就应使用图数据库。
- 只有“关系本身”和关系遍历是核心时，Neptune 才具有明显优势。
- 源笔记中的 64 TB 已不是多数 Region 的通用上限；当前多数 Region 的集群卷可到 128 TiB，数字仍应查当前配额。

## 面试高频问题

为什么欺诈关系分析使用图数据库比复杂 JOIN 更自然？

## 重点记忆

**复杂关系路径本身最重要 → Neptune。**

## 关联服务

DocumentDB、DynamoDB、RDS、S3、Analytics。

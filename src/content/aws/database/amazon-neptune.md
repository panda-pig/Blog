---
title: Amazon Neptune
fullName: Amazon Neptune
description: 以 Vertex、Edge 和 Property 表达并遍历复杂关系的托管图数据库。
service: Neptune
category: database
kind: service
lang: zh
frequency: "考试频率 ★★"
date: 2026-07-29
updated: 2026-07-29
tags: [Database, Graph, Analytics]
notionId: 3a6964dc-ce4a-812c-aa72-e53ae5cfe29f
notionUrl: https://app.notion.com/p/3a6964dcce4a812caa72e53ae5cfe29f
notionUpdated: "2026-07-29T08:10:36.664Z"
---

## 一句话理解

> 当关系路径本身比单个记录更重要时，Neptune 比大量多层 JOIN 更自然。

## 核心作用

- 支持属性图与 RDF 等图模型，优化多跳关系查询和模式匹配。
- 典型场景包括社交网络、欺诈检测、推荐系统、知识图谱与网络拓扑。
- 提供托管备份、故障转移和自动扩展存储。

## 考试重点

- Graph、Fraud Detection、Recommendation、Knowledge Graph 通常指向 Neptune。
- 普通外键关系不自动意味着需要图数据库。
- 只有关系遍历是核心问题时，图模型优势才明显。

## 常见误区

- Neptune 不是所有复杂数据库问题的通用答案。
- 精确容量和配额应查看当前 Region 与服务文档。

## 重点记忆

> **复杂关系路径本身最重要 → Neptune。**

## 关联服务

DocumentDB、DynamoDB、RDS、S3、Analytics。

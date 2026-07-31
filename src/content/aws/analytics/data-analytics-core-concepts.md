---
title: "数据分析核心概念"
fullName: "Data Lake / ETL / ELT / Zero-ETL / Data Pipeline"
description: "数据管道把原始数据持续转换为可查询、可视化和可训练模型的数据资产。"
service: "Data Analytics Core Concepts"
category: analytics
kind: concept
lang: zh
topicKey: "数据分析核心概念"
frequency: "考试频率 ⭐⭐⭐⭐⭐"
date: 2026-07-31
updated: 2026-07-31
tags: ["analytics","数据分析核心概念","AWS"]
notionId: 3ad964dc-ce4a-8104-9a1c-f733b70b5005
notionUrl: https://app.notion.com/p/3ad964dcce4a81049a1cf733b70b5005
notionUpdated: "2026-07-30T08:30:52.312Z"
---

## 基本信息

| 字段 | 内容 |
| --- | --- |
| 英文 | Data Analytics Core Concepts |
| 全称 | Data Lake / ETL / ELT / Zero-ETL / Data Pipeline |
| 中文释义 | 数据分析核心概念 |
| 日文释义 | データ分析の基本概念 |
| 考试频率 | ⭐⭐⭐⭐⭐ |
| 易混淆 | Data Lake / Data Warehouse / ETL / ELT / Zero-ETL |

## 一句话理解

数据管道把原始数据持续转换为可查询、可视化和可训练模型的数据资产。

## 核心要点

- Data Lake 通常以 S3 低成本保存结构化、半结构化和非结构化数据。
- ETL 是先转换再加载；ELT 是先加载再利用目标算力转换。
- Zero-ETL 减少传统管道维护，但不代表完全没有数据转换。
- 典型流程是摄取 → 存储 → 编目 → 处理 → 查询 → 可视化或 ML。

## 考试重点

- 数据湖通常想到 S3；数据仓库想到 Redshift。
- Glue Catalog 保存元数据，不保存主要业务数据。

## 常见误区

- 不要只凭产品名称选择服务，先确认数据类型、延迟、控制力、运维与成本限制。

## 重点记忆

**摄取、存储、编目、处理、查询，再进入可视化或 ML。**

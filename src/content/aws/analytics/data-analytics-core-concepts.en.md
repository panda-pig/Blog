---
title: "Data Analytics Core Concepts"
fullName: "Data Lake / ETL / ELT / Zero-ETL / Data Pipeline"
description: "A data pipeline continuously turns raw data into assets that can be queried, visualized, and used for model training."
service: "Data Analytics Core Concepts"
category: analytics
kind: concept
lang: en
topicKey: "数据分析核心概念"
frequency: "Exam frequency ⭐⭐⭐⭐⭐"
date: 2026-07-31
updated: 2026-07-31
tags: ["analytics","数据分析核心概念","AWS"]
notionId: 3ad964dc-ce4a-8104-9a1c-f733b70b5005
notionUrl: https://app.notion.com/p/3ad964dcce4a81049a1cf733b70b5005
notionUpdated: "2026-07-30T08:30:52.312Z"
---

## Basic Information

| Field | Details |
| --- | --- |
| English name | Data Analytics Core Concepts |
| Full name | Data Lake / ETL / ELT / Zero-ETL / Data Pipeline |
| Chinese description | 数据分析核心概念 |
| Japanese description | データ分析の基本概念 |
| Exam frequency | ⭐⭐⭐⭐⭐ |
| Often confused with | Data Lake / Data Warehouse / ETL / ELT / Zero-ETL |

## In one sentence

A data pipeline continuously turns raw data into assets that can be queried, visualized, and used for model training.

## Key points

- A data lake commonly uses S3 to store structured, semi-structured, and unstructured data at low cost.
- ETL transforms before loading; ELT loads first and transforms with the target system.
- Zero-ETL reduces traditional pipeline management; it does not mean transformation disappears.
- A typical flow is ingest → store → catalog → process → query → visualize or ML.

## Exam focus

- Data lake points to S3; data warehouse points to Redshift.
- Glue Catalog stores metadata, not the primary business data.

## Common pitfalls

- Do not choose by product name alone; confirm data type, latency, control, operations, and cost constraints.

## Remember

**Ingest, store, catalog, process, query, then visualize or train.**

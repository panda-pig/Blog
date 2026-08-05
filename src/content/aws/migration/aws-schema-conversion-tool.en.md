---
title: "AWS Schema Conversion Tool"
fullName: "AWS Schema Conversion Tool (AWS SCT)"
description: "Converts schemas and code objects between heterogeneous database engines."
service: "AWS Schema Conversion Tool"
category: migration
kind: service
lang: en
topicKey: "AWS Schema Conversion Tool"
frequency: "Exam frequency ⭐⭐⭐"
date: 2026-07-31
updated: 2026-08-05
tags: ["migration", "AWS Schema Conversion Tool", "AWS"]
notionId: 3a6964dc-ce4a-8163-b911-fcb47562d655
notionUrl: https://app.notion.com/p/3a6964dcce4a8163b911fcb47562d655
notionUpdated: "2026-08-05T01:39:41.105Z"
---

## Basic information

| Field | Content |
| --- | --- |
| English | AWS Schema Conversion Tool |
| Full name | AWS Schema Conversion Tool (AWS SCT) |
| Chinese | 数据库架构转换工具 |
| Japanese | スキーマ変換ツール |
| Exam frequency | ⭐⭐⭐ |
| Often confused with | DMS |

## In one sentence

Converts schemas and code objects between heterogeneous database engines.

## Stage summary

- **Core role**：Converts schemas and code objects between heterogeneous database engines.
- **Exam frequency**：3 / 5
- **Compare with**：DMS

## Memory hook

AWS Schema Conversion Tool = Converts schemas and code objects between heterogeneous database engines.

## Core workflow

1. Connect source and target databases and generate an assessment report.
2. Convert compatible schemas, views, stored procedures, and application SQL.
3. Remediate objects that cannot be converted automatically and apply the target schema.
4. Use AWS DMS for full load and CDC data replication.

**SCT converts structure and code; DMS moves data.** Different database engines are the classic SCT case, and an assessment report does not mean data has moved.

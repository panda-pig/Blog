---
title: "RDS vs Aurora vs DynamoDB"
fullName: "RDS vs Aurora vs DynamoDB"
description: "Managed Relational Engine は RDS、AWS 最適化 Relational は Aurora、Serverless Key-Value Access は DynamoDB。"
service: "AWS Compare"
category: compare
kind: compare
lang: ja
topicKey: "RDS vs Aurora vs DynamoDB"
frequency: "学習まとめ"
date: 2026-07-30
updated: 2026-07-30
tags: ["compare","RDS vs Aurora vs DynamoDB","AWS"]
notionId: 3a6964dc-ce4a-81bc-8e9a-ce92a59d7ce7
notionUrl: https://app.notion.com/p/3a6964dcce4a81bc8e9ace92a59d7ce7
notionUpdated: "2026-07-29T08:11:55.994Z"
---

## 一言で理解

> Managed Relational Engine は RDS、AWS 最適化 Relational は Aurora、Serverless Key-Value Access は DynamoDB。

## 要点

- RDS は一般的な Engine、SQL、Transaction、Join を Managed Operation とともに提供する。
- Aurora は MySQL / PostgreSQL 互換で、分散 Storage と AWS 独自の Scaling / Availability 機能を持つ。
- DynamoDB は Partition Key と既知の Access Pattern を中心に設計する Serverless NoSQL。

## 試験での判断

> Multi-AZ は HA、Read Replica は Read Scaling、DynamoDB は Join ではなく Key / Query から設計する。

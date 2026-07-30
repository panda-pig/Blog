---
title: "RDS vs DynamoDB vs DocumentDB vs Neptune"
fullName: "RDS vs DynamoDB vs DocumentDB vs Neptune"
description: "Relational、Key-Value、Document、Graph という Data Model と Access Pattern で Database を選ぶ。"
service: "AWS Compare"
category: compare
kind: compare
lang: ja
topicKey: "RDS vs DynamoDB vs DocumentDB vs Neptune"
frequency: "学習まとめ"
date: 2026-07-30
updated: 2026-07-30
tags: ["compare","RDS vs DynamoDB vs DocumentDB vs Neptune","AWS"]
notionId: 3ac964dc-ce4a-813c-88e4-ea237b89afe1
notionUrl: https://app.notion.com/p/3ac964dcce4a813c88e4ea237b89afe1
notionUpdated: "2026-07-29T08:07:59.775Z"
---

## 一言で理解

> Relational、Key-Value、Document、Graph という Data Model と Access Pattern で Database を選ぶ。

## 要点

- RDS は SQL、Transaction、Join、一般的 Relational Engine に向く。
- DynamoDB は Partition Key を中心とする Serverless Key-Value / Document Access に向く。
- DocumentDB は MongoDB 互換の Nested JSON-Like Document Workload に向く。

## 試験での判断

> Neptune は Fraud Network、Knowledge Graph、Social Connection など Relationship 中心の Graph Traversal に向く。

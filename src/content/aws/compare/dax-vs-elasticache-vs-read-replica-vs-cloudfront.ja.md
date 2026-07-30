---
title: "DAX vs ElastiCache vs Read Replica vs CloudFront"
fullName: "DAX vs ElastiCache vs Read Replica vs CloudFront"
description: "DynamoDB Cache は DAX、Application Cache は ElastiCache、Database Read は Read Replica、Edge Delivery は CloudFront。"
service: "AWS Compare"
category: compare
kind: compare
lang: ja
topicKey: "DAX vs ElastiCache vs Read Replica vs CloudFront"
frequency: "学習まとめ"
date: 2026-07-30
updated: 2026-07-30
tags: ["compare","DAX vs ElastiCache vs Read Replica vs CloudFront","AWS"]
notionId: 3ac964dc-ce4a-81ca-876d-ed2c254cc201
notionUrl: https://app.notion.com/p/3ac964dcce4a81ca876ded2c254cc201
notionUpdated: "2026-07-29T08:07:59.756Z"
---

## 一言で理解

> DynamoDB Cache は DAX、Application Cache は ElastiCache、Database Read は Read Replica、Edge Delivery は CloudFront。

## 要点

- DAX は DynamoDB API 互換の Read Acceleration 専用 In-Memory Cache。
- ElastiCache は Redis、Valkey、Memcached による一般的 Application Cache を提供する。
- RDS / Aurora Read Replica は Relational Read Query を拡張する Database Instance。

## 試験での判断

> CloudFront は User 近傍で HTTP Content を Cache し、Edge Delivery を解決する。

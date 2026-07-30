---
title: "AWS 責任共有モデル"
fullName: "AWS Shared Responsibility Model"
description: "AWS はクラウド基盤の安全を、顧客はクラウド内の設定、Identity、Application、Data の安全を担当する。"
service: "Architecture"
category: architecture
kind: topic
lang: ja
topicKey: "AWS 责任共担模型"
frequency: "出題頻度 ⭐⭐⭐⭐⭐"
date: 2026-07-30
updated: 2026-07-30
tags: ["architecture","AWS Shared Responsibility Model","AWS"]
notionId: 3a6964dc-ce4a-81b5-b6d2-c6ee58ed36d9
notionUrl: https://app.notion.com/p/3a6964dcce4a81b5b6d2c6ee58ed36d9
notionUpdated: "2026-07-29T08:13:08.678Z"
---

## 基本情報

| 項目 | 内容 |
| --- | --- |
| 英語名 | AWS Shared Responsibility Model |
| 正式名称 | AWS Shared Responsibility Model |
| 中国語名 | AWS 责任共担模型 |
| 日本語名 | AWS 責任共有モデル |
| 出題頻度 | ⭐⭐⭐⭐⭐ |
| 混同しやすいもの | AWS 的责任 / 客户的责任 / 托管服务边界 |

## 一言で理解

> AWS はクラウド基盤の安全を、顧客はクラウド内の設定、Identity、Application、Data の安全を担当する。

## 要点

- AWS は物理施設、Hardware、基盤 Network、Virtualization を担当する。
- 顧客は Data、IAM、Network Rule、暗号化選択、Application Security、Backup Policy、Recovery Test を管理する。
- EC2 では顧客責任が大きく、RDS / Lambda / DynamoDB では基盤責任が減るがゼロにはならない。

## 試験での判断

> Managed / Fully Managed / Serverless でも Permission、Configuration、Cost、Data Protection は顧客責任。

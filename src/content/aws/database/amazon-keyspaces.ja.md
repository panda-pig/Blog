---
title: "Amazon Keyspaces"
fullName: "Amazon Keyspaces (for Apache Cassandra)"
description: "Cassandra 互換 Workload 向けの Serverless マネージド Wide-column Database です。"
service: "Amazon Keyspaces"
category: database
kind: topic
lang: ja
topicKey: "Amazon Keyspaces"
frequency: "SAA 中频"
date: 2026-09-29
updated: 2026-09-29
tags: ["Keyspaces", "Cassandra", "database", "serverless"]
notionId: 3e9964dc-ce4a-81da-aeac-f438b6119462
notionUrl: https://app.notion.com/p/3e9964dcce4a81daaeacf438b6119462
notionUpdated: "2026-09-28T08:56:22.083Z"
---

## ひとことで

Amazon Keyspaces は Cassandra 互換の Serverless Wide-column Database で、Cluster、Node、Patch、Replication の運用を不要にします。

## 主な特徴

- CQL と一般的な Cassandra Driver を利用でき、互換 Application の移行に適します。
- On-demand または Provisioned Capacity で Compute と Storage を拡張します。
- 複数 AZ に Data を複製し、Replica を自分で管理する必要がありません。
- IAM、KMS、VPC Endpoint、CloudTrail、CloudWatch と統合します。
- Partition Key が分散を決めるため、設計が悪いと Hot Partition は発生します。

## 近接サービスとの違い

- DynamoDB：AWS Native の Key-value / Document API。CQL 互換ではありません。
- DocumentDB：MongoDB 互換の Document Workload。
- RDS / Aurora：Relational Model、SQL、Join、Transaction。
- EC2 / EKS 上の Cassandra：制御性は高い一方、Node、Repair、Scaling、Upgrade を自分で運用します。

## 選択

CQL と Driver を維持しながら Cassandra Cluster の運用をなくしたい場合に Keyspaces を選びます。

## 要点

**Cassandra 互換は自前 Cluster を意味しません。Keyspaces は Capacity と Replication を管理しますが、Data Model と Partition Key は Application の責任です。**

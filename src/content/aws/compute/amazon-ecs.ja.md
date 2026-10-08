---
title: "Amazon ECS"
fullName: "Amazon Elastic Container Service"
description: "コンテナのデプロイ、スケジューリング、スケーリング、維持を行う AWS ネイティブのコンテナオーケストレーション。"
service: "Amazon ECS"
category: compute
kind: service
lang: ja
topicKey: "Amazon ECS"
frequency: "出題頻度 ⭐⭐⭐⭐⭐"
date: 2026-07-30
updated: 2026-09-29
tags: ["compute","Amazon ECS","AWS"]
notionId: 3a6964dc-ce4a-8132-9a5c-c4a14b839c97
notionUrl: https://app.notion.com/p/3a6964dcce4a81329a5cc4a14b839c97
notionUpdated: "2026-09-28T07:43:11.818Z"
---

## 基本情報

| 項目 | 内容 |
| --- | --- |
| 英語名 | Amazon ECS |
| 正式名称 | Amazon Elastic Container Service |
| 中国語の説明 | AWS 原生容器编排服务 |
| 日本語の説明 | Amazon ECS（コンテナオーケストレーションサービス） |
| 出題頻度 | ⭐⭐⭐⭐⭐ |
| 混同しやすいもの | EKS / Fargate / ECR |

## 一言で理解

> コンテナのデプロイ、スケジューリング、スケーリング、維持を行う AWS ネイティブのコンテナオーケストレーション。

## 要点

- Task Definition は実行テンプレート、Task は実行単位、Service は必要数を維持し、Cluster は実行基盤をまとめる。
- ECS は制御性の高い EC2、またはサーバー管理不要の Fargate 上で実行できる。
- ECR はイメージを保存し、EC2 / Fargate は計算資源を提供し、ECS が編成を担当する。

## 試験での判断

> 代表構成はコード → イメージ → ECR → Task Definition → ECS Service → ALB / Auto Scaling。

## 追加：Role と Capacity Provider

- **Task Role** は Container 内 Application の AWS API 権限、**Task Execution Role** は ECS Agent の ECR Image Pull、Log、Startup Secret 用です。
- Capacity Provider は Task が FARGATE、FARGATE_SPOT、ASG のどこから Compute を得るかを定義します。
- Strategy の Base は最低割当、Weight は残り Task の相対配分で、固定 Percentage ではありません。

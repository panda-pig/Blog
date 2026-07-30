---
title: "Amazon ECR"
fullName: "Amazon Elastic Container Registry"
description: "ECS、EKS、IAM、スキャン、デプロイ工程と連携するマネージドコンテナイメージレジストリ。"
service: "Amazon ECR"
category: compute
kind: service
lang: ja
topicKey: "Amazon ECR"
frequency: "出題頻度 ⭐⭐⭐⭐"
date: 2026-07-30
updated: 2026-07-30
tags: ["compute","Amazon ECR","AWS"]
notionId: 3a6964dc-ce4a-81a9-9648-e0852b505c1e
notionUrl: https://app.notion.com/p/3a6964dcce4a81a99648e0852b505c1e
notionUpdated: "2026-07-23T07:17:27.703Z"
---

## 基本情報

| 項目 | 内容 |
| --- | --- |
| 英語名 | Amazon ECR |
| 正式名称 | Amazon Elastic Container Registry |
| 中国語名 | 容器镜像仓库 |
| 日本語名 | Amazon ECR（コンテナレジストリ） |
| 出題頻度 | ⭐⭐⭐⭐ |
| 混同しやすいもの | ECS / EKS / Fargate |

## 一言で理解

> ECS、EKS、IAM、スキャン、デプロイ工程と連携するマネージドコンテナイメージレジストリ。

## 要点

- ECR はコンテナイメージを保存・バージョン管理するが、コンテナを実行しない。
- ECS、EKS などの実行環境が起動時にリポジトリからイメージを取得する。
- IAM によるアクセス制御、イメージスキャン、Lifecycle Policy を利用できる。

## 試験での判断

> ECR は保存、ECS/EKS は編成、EC2/Fargate は実行という役割分担を覚える。

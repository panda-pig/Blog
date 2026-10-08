---
title: "Amazon EKS"
fullName: "Amazon Elastic Kubernetes Service"
description: "Kubernetes API、ツール、エコシステム互換性が必要なワークロード向けの AWS マネージド Kubernetes。"
service: "Amazon EKS"
category: compute
kind: service
lang: ja
topicKey: "Amazon EKS"
frequency: "出題頻度 ⭐⭐⭐⭐"
date: 2026-07-30
updated: 2026-09-29
tags: ["compute","Amazon EKS","AWS"]
notionId: 3a6964dc-ce4a-8197-9431-e9339a24f693
notionUrl: https://app.notion.com/p/3a6964dcce4a81979431e9339a24f693
notionUpdated: "2026-09-28T07:43:10.648Z"
---

## 基本情報

| 項目 | 内容 |
| --- | --- |
| 英語名 | Amazon EKS |
| 正式名称 | Amazon Elastic Kubernetes Service |
| 中国語の説明 | 托管 Kubernetes 服务 |
| 日本語の説明 | Amazon EKS（マネージド Kubernetes サービス） |
| 出題頻度 | ⭐⭐⭐⭐ |
| 混同しやすいもの | ECS / Kubernetes / Fargate |

## 一言で理解

> Kubernetes API、ツール、エコシステム互換性が必要なワークロード向けの AWS マネージド Kubernetes。

## 要点

- AWS は Kubernetes コントロールプレーンを管理するが、ワークロード、ネットワーク、権限、更新、ノード設計は利用者の責任。
- ワーカーノードには EC2 Managed Node Groups または Fargate を利用できる。
- 既存の Kubernetes 基盤や K8s 互換性が重要なら EKS を選ぶ。

## 試験での判断

> AWS ネイティブでより簡単な編成で足りるなら、まず ECS を検討する。

## 追加：Node と Storage

- Managed Node Group は EC2 Worker Node の Provisioning と Lifecycle を自動化しますが、基盤は EC2 + ASG で Serverless ではありません。
- EKS Auto Mode は Pod 要求から追加 EC2 Infrastructure を管理し、Fargate の Node Group 不要モデルとは異なります。
- CSI Driver は StorageClass / PVC と EBS / EFS を接続する Integration で、Storage Service 自体ではありません。

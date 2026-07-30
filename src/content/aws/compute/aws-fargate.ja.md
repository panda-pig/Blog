---
title: "AWS Fargate"
fullName: "AWS Fargate"
description: "ECS または EKS と組み合わせ、Task / Pod のリソース単位で課金されるサーバーレスコンテナ実行基盤。"
service: "AWS Fargate"
category: compute
kind: service
lang: ja
topicKey: "AWS Fargate"
frequency: "試験頻度 ⭐⭐⭐⭐⭐"
date: 2026-07-30
updated: 2026-07-30
tags: ["compute","AWS Fargate","AWS"]
notionId: 3a6964dc-ce4a-8117-b59f-fb16989375b3
notionUrl: https://app.notion.com/p/3a6964dcce4a8117b59ffb16989375b3
notionUpdated: "2026-07-23T07:19:36.892Z"
---

## 一言で理解

> ECS または EKS と組み合わせ、Task / Pod のリソース単位で課金されるサーバーレスコンテナ実行基盤。

## 要点

- Fargate はオーケストレーターではなく、コンテナ向けの計算資源。
- ECS / EKS がワークロードを定義・編成し、Fargate が実行する。
- サーバーのプロビジョニング、パッチ、クラスタ容量管理を不要にする。

## 試験での判断

> 特殊インスタンス、ホスト制御、安定した大規模負荷では EC2 容量も検討する。

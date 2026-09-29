---
title: "ECS vs EKS"
fullName: "ECS vs EKS"
description: "ECS は簡潔な AWS ネイティブ編成、EKS は Managed Kubernetes の互換性とエコシステムを提供する。"
service: "AWS Compare"
category: compare
kind: compare
lang: ja
topicKey: "ECS vs EKS"
frequency: "学習まとめ"
date: 2026-07-30
updated: 2026-09-29
tags: ["compare","ECS vs EKS","AWS"]
notionId: 3a6964dc-ce4a-81c4-b765-d0f7ad35f8f0
notionUrl: https://app.notion.com/p/3a6964dcce4a81c4b765d0f7ad35f8f0
notionUpdated: "2026-09-28T07:43:17.837Z"
---

## 一言で理解

> ECS は簡潔な AWS ネイティブ編成、EKS は Managed Kubernetes の互換性とエコシステムを提供する。

## 要点

- ECS は Task Definition、Task、Service、Cluster という AWS 独自概念を使う。
- EKS は Kubernetes API を提供し、既存 K8s Tool、Skill、Portability 要件に合う。
- どちらも EC2 または Fargate 上で Workload を実行できる。

## 試験での判断

> Kubernetes 互換性と運用の簡潔さで選び、Image 保存や実行場所と混同しない。

+## 追加の判断軸

- ECS は AWS Native の Task / Service Model で、学習・運用面が比較的小さい選択です。
- EKS は Kubernetes API、Ecosystem、Portability を提供しますが Control Plane / Add-on は複雑です。
- 両方 EC2 / Fargate を使えるため、Orchestrator と Compute Capacity は別の選択軸です。
- ECS Task / Execution Role、EKS Pod / Node Role で Application と Platform の権限を分離します。

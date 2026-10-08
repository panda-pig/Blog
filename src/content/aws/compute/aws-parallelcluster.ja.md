---
title: "AWS ParallelCluster"
fullName: "AWS ParallelCluster"
description: "設定ファイルから AWS の HPC クラスターを構築・管理し、通常は Slurm でジョブをスケジュールする。"
service: "AWS ParallelCluster"
category: compute
kind: service
lang: ja
topicKey: "AWS ParallelCluster"
frequency: "考试频率 ⭐⭐⭐"
date: 2026-10-08
updated: 2026-10-08
tags: ["compute","AWS ParallelCluster","AWS"]
notionId: 3f3964dc-ce4a-81ac-94ac-ca8692325425
notionUrl: https://app.notion.com/p/3f3964dcce4a81ac94acca8692325425
notionUpdated: "2026-10-08T02:16:01.778Z"
---
## 基本情報

| 項目 | 内容 |
| --- | --- |
| 英語 / 正式名称 | AWS ParallelCluster |
| 中国語 | AWS HPC 集群部署与管理工具 |
| 日本語 | AWS HPC クラスター構築・管理ツール |
| 復習優先度 | 考试频率 ⭐⭐⭐ |
| 混同しやすい項目 | AWS Batch / Slurm / EFA |

## 一言で理解

設定ファイルから AWS の HPC クラスターを構築・管理し、通常は Slurm でジョブをスケジュールする。

## 要点整理

ParallelCluster はクラスター基盤を管理し、Slurm はキューとリソース割り当てを管理する。EFA と FSx for Lustre は組み合わせて使う要素である。

## 学習ポイント

- 独立 Batch か密結合 MPI かを先に分類する。
- Head Node、Compute Nodes、Subnet、Instance、共有ストレージ、Scaling を決める。
- 密結合では Placement Group、EFA、Driver、通信 Library の対応を確認する。
- 実際の Job で通信、I/O、再試行、Checkpoint を検証する。

## よくある誤解

- ParallelCluster と AWS Batch は同じものではない。
- 自動構築できても性能が自動最適化されるわけではなく、Resource は課金対象である。

## 重要ポイント

**ParallelCluster は Cluster、Slurm は Job、EFA は通信、Lustre は並列 I/O を担当する。**

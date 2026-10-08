---
title: "HPC on AWS"
fullName: "High Performance Computing on AWS"
description: "Compute、Node 間通信、Storage I/O、Data Transfer のどこが Bottleneck かを見極めてから AWS Component を組み合わせる。"
service: "High Performance Computing on AWS"
category: architecture
kind: topic
lang: ja
topicKey: "High Performance Computing on AWS"
frequency: "考试频率 ⭐⭐⭐"
date: 2026-10-08
updated: 2026-10-08
tags: ["architecture","High Performance Computing on AWS","AWS"]
notionId: 3f3964dc-ce4a-81ce-9e10-ef23fdb9fa6b
notionUrl: https://app.notion.com/p/3f3964dcce4a81ce9e10ef23fdb9fa6b
notionUpdated: "2026-10-08T02:16:00.587Z"
---
## 基本情報

| 項目 | 内容 |
| --- | --- |
| 英語 / 正式名称 | High Performance Computing on AWS |
| 中国語 | AWS 高性能计算架构 |
| 日本語 | AWS の高性能コンピューティング |
| 復習優先度 | 考试频率 ⭐⭐⭐ |
| 混同しやすい項目 | AWS Batch / ParallelCluster / EFA / FSx for Lustre |

## 一言で理解

Compute、Node 間通信、Storage I/O、Data Transfer のどこが Bottleneck かを見極めてから AWS Component を組み合わせる。

## 要点整理

疎結合 Job は Batch と Elastic Node、密結合 MPI は Single-AZ Cluster Placement、EFA、並列 File System を重視する。

## 学習ポイント

- ENA は通常の IP Network、EFA は対応する低遅延通信を改善する。
- FSx for Lustre は並列 File I/O、S3 は永続 Dataset と結果保存に適する。
- Batch は Job／Queue、ParallelCluster は HPC Cluster を管理する。
- Spot には再試行可能な Job または復元可能な Checkpoint が必要。

## よくある誤解

- Instance を増やしても通信や Storage が Bottleneck なら速くならない。
- Cluster Placement Group は通信性能を高めるが Multi-AZ 分散を提供しない。

## 重要ポイント

**HPC は Compute、低遅延通信、並列 Storage、Scheduling の組み合わせ。**

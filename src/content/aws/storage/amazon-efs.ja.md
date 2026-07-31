---
title: Amazon EFS
fullName: "Amazon Elastic File System"
description: 複数の Linux クライアントが NFS で同時マウントでき、容量が自動伸縮するマネージドファイルシステム。
service: EFS
category: storage
kind: service
lang: ja
frequency: "出題頻度 ⭐⭐⭐⭐"
date: 2026-07-29
updated: 2026-07-30
tags: [Storage, File Storage, NFS]
notionId: 3a6964dc-ce4a-81c2-8fc7-def0bc74e454
notionUrl: https://app.notion.com/p/3a6964dcce4a81c28fc7def0bc74e454
notionUpdated: "2026-07-29T04:41:30.363Z"
---

## 基本情報

| 項目 | 内容 |
| --- | --- |
| 英語名 | Amazon EFS |
| 正式名称 | Amazon Elastic File System |
| 中国語の説明 | 弹性共享文件系统 |
| 日本語の説明 | 共有ファイルストレージ |
| 出題頻度 | ⭐⭐⭐⭐ |
| 混同しやすいもの | EBS / S3 / FSx |

## 一言で理解

> EFS は従来のディレクトリとファイルの意味を提供し、複数の EC2 やコンテナが同じパスを共有できます。

## 主な役割

- Standard はリージョン / Multi-AZ 設計で、One Zone も選択できる。
- 利用する AZ ごとに Mount Target を配置し、Security Group で NFS TCP 2049 を許可する。
- 容量は自動伸縮し、Lifecycle で低頻度ファイルを IA や Archive に移行できる。

## 試験ポイント

- Linux、NFS、複数 Instance の共有ディレクトリは EFS。
- ブロックや DB ディスクは EBS、Object API は S3、専門ファイルシステムは FSx。
- EFS はグローバルファイルシステムではなく、VPC/Region 間には追加ネットワークが必要。

## よくある誤解

- 容量の自動伸縮は無制限のスループットを意味しない。
- Multi-AZ でも Mount Target と Security Group は必要。

## 重要ポイント

> **共有 Linux ディレクトリは EFS、Object API は S3。**

## 関連サービス

EC2、ECS、EKS、NFS、FSx、AWS Backup。

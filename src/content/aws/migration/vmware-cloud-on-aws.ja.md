---
title: "VMware Cloud on AWS"
fullName: "VMware Cloud on AWS"
description: "VMware SDDC を AWS へ拡張し、使い慣れた VMware Software と運用 Tool を維持する。"
service: "VMware Cloud on AWS"
category: migration
kind: service
lang: ja
topicKey: "VMware Cloud on AWS"
frequency: "考试频率 ⭐⭐"
date: 2026-10-08
updated: 2026-10-08
tags: ["migration","VMware Cloud on AWS","AWS"]
notionId: 3f3964dc-ce4a-814d-bafa-fc7d9b76fa1b
notionUrl: https://app.notion.com/p/3f3964dcce4a814dbafafc7d9b76fa1b
notionUpdated: "2026-10-08T01:44:50.384Z"
---
## 基本情報

| 項目 | 内容 |
| --- | --- |
| 英語 / 正式名称 | VMware Cloud on AWS |
| 中国語 | AWS 上的 VMware 云环境 |
| 日本語 | AWS 上の VMware クラウド環境 |
| 復習優先度 | 考试频率 ⭐⭐ |
| 混同しやすい項目 | AWS Transform MGN / VM Import/Export / AWS DRS |

## 一言で理解

VMware SDDC を AWS へ拡張し、使い慣れた VMware Software と運用 Tool を維持する。

## 要点整理

On-premises VMware と AWS 上の vSphere、vSAN、NSX を接続し、拡張、移行、Hybrid Cloud、DR に利用する。

## 学習ポイント

- VMware Platform を維持する方式は Relocate。
- Native EC2 への低停止 Rehost は MGN。
- Native AWS Service への接続には Network、IAM、Encryption が必要。
- DR では Replication、RPO/RTO、Recovery 手順、演習を別途設計する。

## よくある誤解

- Source が VMware でも Target が必ず VMware Cloud とは限らない。
- Platform 拡張と継続 Block Replication は目的が異なる。

## 重要ポイント

**VMware 運用を残すなら VMware Cloud、Native EC2 へ移すなら MGN／Image Import。**

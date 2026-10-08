---
title: "VM Import/Export"
fullName: "VM Import/Export"
description: "対応する VM Image を AWS へ Import して EC2 Image／Instance を作成し、条件を満たす AWS Image を Export する。"
service: "VM Import/Export"
category: migration
kind: service
lang: ja
topicKey: "VM Import/Export"
frequency: "考试频率 ⭐⭐"
date: 2026-10-08
updated: 2026-10-08
tags: ["migration","VM Import/Export","AWS"]
notionId: 3f3964dc-ce4a-8103-b195-cff86463077d
notionUrl: https://app.notion.com/p/3f3964dcce4a8103b195cff86463077d
notionUpdated: "2026-10-08T01:44:50.384Z"
---
## 基本情報

| 項目 | 内容 |
| --- | --- |
| 英語 / 正式名称 | VM Import/Export |
| 中国語 | 虚拟机镜像导入与导出 |
| 日本語 | 仮想マシンイメージのインポート／エクスポート |
| 復習優先度 | 考试频率 ⭐⭐ |
| 混同しやすい項目 | AWS Transform MGN / VMware Cloud on AWS |

## 一言で理解

対応する VM Image を AWS へ Import して EC2 Image／Instance を作成し、条件を満たす AWS Image を Export する。

## 要点整理

Image を S3 へ置き、Service Role を設定して Import する。Network、IAM、License、Application Dependency は別途設定する。

## 学習ポイント

- 少数 VM と Offline Window が許容される場合に向く。
- 継続 Block Replication と低停止移行は MGN。
- VMware 運用モデルを維持するなら VMware Cloud on AWS。
- Import 後に Source の変更は継続同期されない。

## よくある誤解

- すべての Marketplace AMI、暗号化 Image、License が Export できるわけではない。
- 同じ S3 上の File でも Restore の入口は異なる場合がある。

## 重要ポイント

**VM Import/Export は Image、MGN は Server、VMware Cloud は VMware 運用モデルを移す。**

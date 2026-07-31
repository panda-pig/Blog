---
title: Amazon EC2
fullName: "Amazon Elastic Compute Cloud"
description: AWS クラウド上の仮想サーバー。高い制御性を持つ一方、OS、パッチ、実行環境、アプリケーションは利用者が管理します。
service: EC2
category: compute
kind: service
lang: ja
frequency: "出題頻度 ⭐⭐⭐⭐⭐"
date: 2026-07-23
updated: 2026-07-30
tags: [Compute, IaaS, SAA-C03, Cloud Practitioner]
notionId: 3a6964dc-ce4a-8158-b0a8-d1d2f5cf6e05
notionUrl: https://app.notion.com/p/3a6964dcce4a8158b0a8d1d2f5cf6e05
notionUpdated: "2026-07-23T07:19:19.291Z"
---

## 基本情報

| 項目 | 内容 |
| --- | --- |
| 英語名 | Amazon EC2 |
| 正式名称 | Amazon Elastic Compute Cloud |
| 中国語の説明 | 弹性云服务器 / 虚拟机 |
| 日本語の説明 | 仮想サーバーサービス |
| 出題頻度 | ⭐⭐⭐⭐⭐ |
| 混同しやすいもの | Lambda / Fargate / Lightsail |

## 一言で理解

> EC2 は AWS クラウド上の仮想サーバーです。OS や構成を自由に選べますが、ゲスト OS、パッチ、実行環境、アプリケーションの管理も利用者が担当します。

## 主な役割

- 長時間稼働する Web、API、データベース、バックグラウンドサービスを実行する。
- CPU、メモリ、ネットワーク、ストレージ、アクセラレーターを選択する。
- OS レベルの制御や特殊なソフトウェアが必要なワークロードに対応する。

## 仕組み

AMI を選択 → インスタンスタイプを選択 → ネットワーク、IAM、Security Group、ストレージを設定 → 起動 → アプリを配置 → CloudWatch で監視、という流れです。

### AMI

AMI（Amazon Machine Image）は EC2 を起動するテンプレートです。通常は OS、ソフトウェア、設定、EBS Snapshot への参照を含みます。

- **AWS 公式 AMI**：AWS が提供。
- **Marketplace AMI**：サードパーティーが提供。
- **カスタム AMI**：自分のインスタンスから作成し、環境を再現。

## インスタンスファミリー

| 種類 | 主な用途 |
| --- | --- |
| General Purpose | Web、開発、テスト |
| Compute Optimized | バッチ、HPC、ゲームサーバー、科学計算 |
| Memory Optimized | インメモリ DB、大規模キャッシュ、リアルタイム分析 |
| Accelerated Computing | GPU、機械学習、画像処理 |
| Storage Optimized | 高スループットのローカルストレージ |

## 料金モデル

| モデル | 適した用途 |
| --- | --- |
| On-Demand | 短期または予測しにくい利用 |
| Savings Plans / Reserved Instances | 安定した長期利用 |
| Spot | 中断可能で耐障害性のある処理 |
| Dedicated Instance | 単一テナントのハードウェア |
| Dedicated Host | 物理ホストの可視性やライセンス要件 |

## Cloud Practitioner のポイント

- EC2 は IaaS。
- ゲスト OS、パッチ、アプリ、データは利用者の責任。
- インスタンスはオンデマンドで作成、停止、変更、削除できる。
- EBS、ELB、Auto Scaling と組み合わせることが多い。

## SAA-C03 のポイント

- CPU、メモリ、ストレージ、ネットワーク要件からファミリーを選ぶ。
- AMI と Launch Template で構成を標準化する。
- Multi-AZ、ELB、Auto Scaling で可用性と伸縮性を高める。
- 中断許容度と利用の安定性から料金モデルを選ぶ。
- アプリ内の長期アクセスキーではなく IAM Role を利用する。

## よくある誤解

- EC2 は通常、物理サーバーではなく仮想マシン。
- EC2 を 1 台起動しただけでは高可用にならない。
- ELB はトラフィック分散、Auto Scaling は台数の増減と置換を担当。
- Dedicated Host と Dedicated Instance は異なる。

## 重要ポイント

> **EC2 は制御性が高い分、運用責任も大きい。**

代表的な高可用構成は **AMI / Launch Template + Multi-AZ Auto Scaling Group + ELB + CloudWatch** です。

---
title: Amazon VPC
fullName: "Amazon Virtual Private Cloud"
description: AWS Region 内に、アドレス範囲、サブネット、ルート、セキュリティを自分で定義できる論理的に分離されたネットワーク。
service: VPC
category: networking
kind: service
lang: ja
frequency: "出題頻度 ⭐⭐⭐⭐⭐"
date: 2026-07-27
updated: 2026-07-30
tags: [Networking, VPC, SAA-C03, Cloud Practitioner]
notionId: 3a6964dc-ce4a-81bd-a288-f2453af8ccda
notionUrl: https://app.notion.com/p/3a6964dcce4a81bda288f2453af8ccda
notionUpdated: "2026-07-27T05:37:23.865Z"
---

## 基本情報

| 項目 | 内容 |
| --- | --- |
| 英語名 | Amazon VPC |
| 正式名称 | Amazon Virtual Private Cloud |
| 中国語名 | 虚拟私有云 |
| 日本語名 | 仮想プライベートクラウド |
| 出題頻度 | ⭐⭐⭐⭐⭐ |
| 混同しやすいもの | Subnet / Security Group / NACL |

## 一言で理解

> VPC は AWS ネットワークの論理的な境界です。実際の接続性は、アドレス、ルート、ゲートウェイ、セキュリティ制御の組み合わせで決まります。

## 主な役割

- AWS リソースが利用する IP アドレス範囲を定義する。
- Subnet で Web、アプリ、データベースなどの層を分離する。
- Route Table でトラフィックの行き先を決める。
- Security Group と NACL で通信を制御する。
- IGW、NAT Gateway、VPN、Direct Connect、PrivateLink で外部と接続する。

## 仕組み

- VPC は **Region 単位**のリソースで、同一 Region の複数 AZ にまたがる。
- 作成時に IPv4、必要に応じて IPv6 の CIDR を指定する。
- Subnet は VPC CIDR から切り出し、1 つの AZ にのみ属する。
- 各 Subnet は 1 つの Route Table に関連付けられる。
- Route Table には VPC 内通信用の `local` ルートがある。
- 論理分離だけで安全になるわけではなく、接続性はルート、ゲートウェイ、パブリックアドレス、SG、NACL、IAM、各サービス設定で決まる。

## 主な構成例

### 3 層 Web アーキテクチャ

Public Subnet に ALB、Private Application Subnet に EC2 または ECS、分離した Database Subnet に RDS を配置します。

### Multi-AZ

少なくとも 2 つの AZ に対応する Subnet を作成し、単一 AZ 障害の影響を減らします。

### ハイブリッド接続

Site-to-Site VPN または Direct Connect で社内ネットワークに接続します。

### 複数 VPC

環境、アカウント、業務領域ごとに分離し、Transit Gateway などで集中接続します。

## Cloud Practitioner のポイント

- VPC は利用者が定義する論理的に分離されたネットワーク。
- Subnet はリソースの整理と分離に使う。
- IGW はインターネット、VGW や TGW はプライベート接続に利用できる。
- AWS は基盤を、利用者は VPC の設定、ルート、セキュリティルールを管理する。

## SAA-C03 のポイント

- VPC やオンプレミスと重複しない CIDR を設計する。
- AZ をまたいだ Subnet 構成を設計する。
- Public Route、NAT Gateway、VPC Endpoint を正しく選ぶ。
- SG、NACL、VPC Flow Logs を組み合わせて障害を切り分ける。
- VPC Peering、Transit Gateway、PrivateLink の違いを理解する。

## よくある誤解

- VPC は Region をまたがない。
- Subnet は AZ をまたがない。
- S3 や Lambda が常に自分の Subnet 内にあるわけではない。
- Default VPC と Custom VPC は初期構成とセキュリティ状態が異なる。

## 重要ポイント

> **VPC は範囲、Subnet は分割、Route Table は方向、SG / NACL は通行、Gateway は接続を管理する。**

---
title: Internet Gateway
fullName: "Internet Gateway"
description: VPC に接続する高可用なインターネット出入口。ただし、接続するだけですべてのリソースが公開されるわけではありません。
service: IGW
category: networking
kind: service
lang: ja
frequency: "出題頻度 ⭐⭐⭐⭐"
date: 2026-07-27
updated: 2026-07-31
tags: [Internet Gateway, VPC, Public Subnet, SAA-C03]
notionId: 3a6964dc-ce4a-81ba-86d3-dca3dc2f01fd
notionUrl: https://app.notion.com/p/3a6964dcce4a81ba86d3dca3dc2f01fd
notionUpdated: "2026-07-30T04:31:57.202Z"
---

## 基本情報

| 項目 | 内容 |
| --- | --- |
| 英語名 | Internet Gateway (IGW) |
| 正式名称 | Internet Gateway |
| 中国語の説明 | 互联网网关 |
| 日本語の説明 | インターネットゲートウェイ |
| 出題頻度 | ⭐⭐⭐⭐ |
| 混同しやすいもの | NAT Gateway / Virtual Private Gateway |

## 一言で理解

> Internet Gateway は VPC に接続する高可用なインターネットの出入口ですが、接続するだけですべてのリソースが公開されるわけではありません。

## 主な役割

- VPC とインターネット間の IPv4 / IPv6 ルートターゲットになる。
- Public IPv4 を持つインスタンスで、Private IPv4 と Public IPv4 を 1 対 1 で対応させる。
- AWS 管理の冗長コンポーネントとして水平にスケールする。

## 仕組み

`Internet ↔ IGW ↔ Route Table ↔ Subnet ↔ ENI / EC2`

通信にはさらに次の条件が必要です。

- IGW が VPC に接続されている。
- `0.0.0.0/0 → IGW`、IPv6 なら `::/0 → IGW` がある。
- IPv4 では Public IPv4 または Elastic IP がある。
- Security Group、NACL、OS ファイアウォールが許可している。
- アプリが正しいポートで待ち受けている。

## 主な利用例

- Internet-facing ALB。
- 公開 Web サーバーや Bastion Host。
- Public NAT Gateway を置く Public Subnet。

## 試験ポイント

- IGW は VPC とインターネットを接続するが、ファイアウォールでも NAT Gateway でもない。
- Public Subnet の完全な成立条件を理解する。
- IPv6 の送信だけを許可する場合は Egress-only Internet Gateway を検討する。

## よくある誤解

- IGW を接続しても Route Table は自動更新されない。
- デフォルトルートだけではインターネット接続は保証されない。
- IGW はポート単位のフィルタリングを行わない。
- 1 つの VPC に同時接続できる IGW は 1 つだが、IGW 自体は高可用。

## 重要ポイント

> **IGW は入口にすぎず、実際に通れるかはルート、Public IP、セキュリティルールで決まる。**

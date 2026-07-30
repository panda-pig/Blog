---
title: NAT Gateway
fullName: "Network Address Translation Gateway"
description: Private Subnet の IPv4 リソースに外向き通信を提供し、インターネット側から開始される接続は受け付けません。
service: NAT Gateway
category: networking
kind: service
lang: ja
frequency: "出題頻度 ⭐⭐⭐⭐⭐"
date: 2026-07-27
updated: 2026-07-30
tags: [NAT Gateway, Private Subnet, VPC Endpoint, SAA-C03]
notionId: 3a6964dc-ce4a-81f6-b429-f216d258f807
notionUrl: https://app.notion.com/p/3a6964dcce4a81f6b429f216d258f807
notionUpdated: "2026-07-27T05:37:29.758Z"
---

## 基本情報

| 項目 | 内容 |
| --- | --- |
| 英語名 | NAT Gateway |
| 正式名称 | Network Address Translation Gateway |
| 中国語名 | 网络地址转换网关 |
| 日本語名 | NAT ゲートウェイ |
| 出題頻度 | ⭐⭐⭐⭐⭐ |
| 混同しやすいもの | Internet Gateway / NAT Instance / VPC Endpoint |

## 一言で理解

> NAT Gateway は Private Subnet の IPv4 リソースからインターネットへの接続を可能にし、インターネット側から開始される接続は受け付けません。

## 主な役割

- Private IPv4 の送信元アドレスを変換する。
- パッチ取得、外部 API、ソフトウェアリポジトリへの外向き経路を提供する。
- Private ワークロードに Public IPv4 を持たせずに済む。

## Public NAT Gateway の通信経路

`Private Instance → Private Route Table → NAT Gateway → Public Subnet Route Table → IGW → Internet`

必要な設定：

- NAT Gateway を **Public Subnet** に作成する。
- Public NAT Gateway に Elastic IP を割り当てる。
- Private Subnet のデフォルトルートを NAT Gateway に向ける。
- NAT がある Public Subnet のデフォルトルートを IGW に向ける。

## 可用性と AZ

NAT Gateway は 1 つの AZ に作成されます。本番では AZ ごとに NAT Gateway を配置し、各 Private Subnet が同じ AZ の NAT を利用する構成が一般的です。これにより AZ 間の依存と転送料金を抑えられます。

## 主な利用例

- Private EC2 がパッチを取得、または外部 API を呼び出す。
- Private Container が公開イメージを取得する。
- VPC Endpoint 非対応の公開サービスへアクセスする。

## 試験ポイント

- Public Subnet、Elastic IP、Route Table の依存関係。
- AZ ごとに NAT を配置する高可用構成。
- Gateway / Interface VPC Endpoint とのコストと経路の比較。
- IPv6 は NAT Gateway を使わず、送信専用なら Egress-only IGW を使う。

## よくある誤解

- NAT Gateway は Private Instance への受信入口ではない。
- Public NAT Gateway を Private Subnet に置くと通常の経路が成立しない。
- 作成しただけでは Private Route Table は更新されない。
- S3 や DynamoDB は Gateway Endpoint を利用できる。

## 重要ポイント

> **Private Subnet は NAT に、NAT を置く Public Subnet は IGW にルーティングする。**

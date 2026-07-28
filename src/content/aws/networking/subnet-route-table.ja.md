---
title: Subnet & Route Table
fullName: Subnet and Route Table
description: Subnet は VPC のアドレス空間を分割して 1 つの AZ に属し、Route Table は宛先に応じて次の転送先を決定します。
service: VPC Networking
category: networking
kind: service
lang: ja
frequency: "試験頻度 ★★★★★"
date: 2026-07-27
updated: 2026-07-27
tags: [Subnet, Route Table, CIDR, SAA-C03]
notionId: 3a6964dc-ce4a-818e-972f-f196d09400b4
notionUrl: https://app.notion.com/p/3a6964dcce4a818e972ff196d09400b4
notionUpdated: "2026-07-27T05:37:25.834Z"
---

## 一言で理解

> Subnet は VPC のアドレス空間を分割して 1 つの AZ に属し、Route Table は宛先アドレスから次の転送先を決めます。

## CIDR の基礎

- IPv4 は 32 ビット。`/16` は先頭 16 ビットが固定されることを表す。
- `10.0.0.0/16` には 65,536 個のアドレスがある。
- `10.0.1.0/24` は 256 個。AWS は先頭 4 個と最後 1 個を予約するため、割り当て可能なのは 251 個。
- VPC、オンプレミス、将来の接続先で CIDR が重複しないようにする。

## Subnet

- 1 つの Subnet は 1 つの AZ にのみ属する。
- 2 つ以上の AZ に Public、Private Application、Private Database Subnet を作る構成が一般的。
- Public / Private は作成時の固定タイプではなく、主に関連付けたルートで決まる。

## Route Table

- 各 Subnet は 1 つの Route Table に関連付けられる。
- `local` ルートは VPC CIDR 内の通信を処理する。
- `0.0.0.0/0` は IPv4、`::/0` は IPv6 のデフォルトルート。
- ルート選択は**最長プレフィックス一致**で、より具体的な宛先が優先される。

## Public Subnet の条件

EC2 がインターネットと直接通信するには通常、次の条件が必要です。

1. `0.0.0.0/0 → IGW` のルート。
2. Public IPv4 または Elastic IP。
3. 通信を許可する Security Group と NACL。
4. 正しいポートで待ち受けるアプリケーション。

Public IPv4 の自動割り当てだけでは Public Subnet にはなりません。

## Private Subnet の外向き通信

- NAT Gateway でインターネットへ送信。
- VPC Endpoint で対応 AWS サービスへプライベート接続。
- VPN または Direct Connect でオンプレミスへ接続。

## 本番設計のポイント

- 少なくとも 2 つの AZ に対応する Subnet を作る。
- ALB や Public NAT Gateway は Public Subnet に配置。
- アプリと DB は Private Subnet に配置。
- 可用性とコストに応じて AZ ごとに NAT Gateway を用意する。
- ALB → App → DB の最小権限は Security Group 参照で表現する。

## 重要ポイント

> **CIDR でアドレスを分割し、Subnet を AZ に結び付け、Route Table が最長プレフィックス一致で転送先を決める。**

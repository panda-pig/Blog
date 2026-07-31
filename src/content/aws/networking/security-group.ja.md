---
title: Security Group
fullName: "Security Group"
description: ENI や対応リソースに関連付ける、ステートフルで Allow のみの仮想ファイアウォール。
service: Security Group
category: networking
kind: service
lang: ja
frequency: "出題頻度 ⭐⭐⭐⭐⭐"
date: 2026-07-27
updated: 2026-07-30
tags: [Security Group, ENI, Stateful, SAA-C03]
notionId: 3a6964dc-ce4a-8158-822a-c4539e3bd96c
notionUrl: https://app.notion.com/p/3a6964dcce4a8158822ac4539e3bd96c
notionUpdated: "2026-07-27T05:38:22.272Z"
---

## 基本情報

| 項目 | 内容 |
| --- | --- |
| 英語名 | Security Group |
| 正式名称 | Security Group |
| 中国語の説明 | 安全组 |
| 日本語の説明 | セキュリティグループ |
| 出題頻度 | ⭐⭐⭐⭐⭐ |
| 混同しやすいもの | Network ACL |

## 一言で理解

> Security Group は ENI や対応リソースに関連付ける、**ステートフルで Allow のみ**の仮想ファイアウォールです。

## 主な役割

- ENI に出入りする通信を制御する。
- プロトコル、ポート、送信元・送信先 CIDR、別の Security Group をルールに指定できる。
- 同じ ENI に複数の Security Group を付けた場合、Allow ルールは和集合になる。
- 明示的な Deny ルールはない。

## ステートフルとは

受信リクエストが許可されると、その接続に対する戻り通信も自動的に許可されます。逆方向も同様です。

これは許可済みの接続を追跡するという意味であり、無関係な逆方向通信を無条件で通すという意味ではありません。

## デフォルト動作

- 新しい Security Group には受信 Allow ルールがない。
- 通常、送信はすべて許可される。
- Default Security Group には、同じグループを持つリソース間の受信許可ルールがある。
- デフォルト値は変更できるため、障害調査では実際のルールを確認する。

## 3 層構成

- **ALB SG**：Internet → 443 を許可。
- **Application SG**：ALB SG → アプリポートのみ許可。
- **RDS SG**：Application SG → DB ポートのみ許可。

固定 IP よりも Security Group 参照のほうが「誰が誰にアクセスできるか」を明確に表現できます。

## 試験ポイント

- ENI / リソースレベル。
- ステートフル。
- Allow ルールのみ。
- 複数 SG のルールは和集合。
- ALB → App → DB は SG 参照で最小権限化。
- Route、NACL、OS ファイアウォール、アプリの待受状態も合わせて確認。

## よくある誤解

- 明示的な Deny は設定できない。
- Subnet 全体に直接付けるものではない。
- ステートフルでも、すべての送信制限を無視するわけではない。
- SG を開けただけでは接続性は保証されない。

## Network ACL との比較

| 項目 | Security Group | Network ACL |
| --- | --- | --- |
| 対象 | ENI / リソース | Subnet 境界 |
| 状態 | ステートフル | ステートレス |
| ルール | Allow のみ | Allow と Deny |
| 評価 | Allow の和集合 | 番号順の最初の一致 |

## 重要ポイント

> **Security Group はリソースの門番。通行証を発行し、許可した接続を記憶する。**

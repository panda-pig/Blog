---
title: Network ACL
fullName: "Network Access Control List"
description: Subnet 境界で動作し、Allow と Deny の両方を設定できるステートレスなアクセス制御リスト。
service: NACL
category: networking
kind: service
lang: ja
frequency: "出題頻度 ⭐⭐⭐⭐⭐"
date: 2026-07-27
updated: 2026-07-30
tags: [Network ACL, Subnet, Stateless, SAA-C03]
notionId: 3a6964dc-ce4a-8196-a268-c8bdca7d4d53
notionUrl: https://app.notion.com/p/3a6964dcce4a8196a268c8bdca7d4d53
notionUpdated: "2026-07-27T05:38:24.209Z"
---

## 基本情報

| 項目 | 内容 |
| --- | --- |
| 英語名 | Network ACL |
| 正式名称 | Network Access Control List |
| 中国語名 | 网络访问控制列表 |
| 日本語名 | ネットワーク ACL |
| 出題頻度 | ⭐⭐⭐⭐⭐ |
| 混同しやすいもの | Security Group |

## 一言で理解

> Network ACL は Subnet 境界で動作する、**ステートレスで Allow と Deny の両方を設定できる**アクセス制御リストです。

## 主な役割

- Subnet に出入りする通信を粗い単位で制御する。
- プロトコル、ポート、CIDR により Allow または Deny を設定する。
- Security Group に加える第 2 層として、悪意あるネットワークなどを遮断する。

## ルール評価

- ルール番号の小さい順に評価する。
- 最初に一致したルールが即座に適用される。
- より具体的なルールには小さい番号を付けることが多い。
- 最後には暗黙の Deny がある。

## ステートレスとは

NACL は接続状態を追跡しません。リクエスト方向を許可しても、戻り方向は自動的に許可されません。戻り通信ではクライアントの Ephemeral Port が使われることがあり、その範囲は OS やクライアントによって異なります。

HTTPS の場合、受信 TCP 443 に加えて、送信側でクライアントの Ephemeral Port 範囲を許可する必要があります。

## デフォルト動作

- Default NACL は受信と送信をすべて許可する。
- 新しい Custom NACL には Allow ルールがなく、初期状態ではすべて拒否する。
- ルールは変更できるため、障害調査では現在の設定を確認する。

## 対象範囲

NACL は Subnet に関連付けられ、通信が Subnet 境界を越えるときに評価されます。同じ Subnet 内の通信は境界を越えないため、主に Security Group などで制御します。

## 試験ポイント

- ルール番号順の最初の一致。
- 受信と送信をそれぞれ許可する。
- Ephemeral Port。
- Default NACL と Custom NACL の初期状態。
- Security Group と組み合わせた障害調査。

## よくある誤解

- NACL はステートフルではない。
- 受信を許可しても戻り通信は自動で通らない。
- 小さい番号が先に一致すると、大きい番号の Deny は実行されない。
- リソースレベルの Security Group を置き換えるものではない。

## 重要ポイント

> **NACL は Subnet の検問所。方向ごとに再評価し、最初に一致した番号が勝つ。**

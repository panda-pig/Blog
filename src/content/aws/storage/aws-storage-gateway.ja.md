---
title: AWS Storage Gateway
fullName: "AWS Storage Gateway"
description: オンプレミスアプリにファイル、ブロック、テープのインターフェイスを提供し、AWS ストレージへ接続するハイブリッドサービス。
service: Storage Gateway
category: storage
kind: service
lang: ja
frequency: "出題頻度 ⭐⭐⭐⭐"
date: 2026-07-29
updated: 2026-07-30
tags: [Storage, Hybrid Cloud, Migration]
notionId: 3a6964dc-ce4a-8139-8147-f4863a4da4ca
notionUrl: https://app.notion.com/p/3a6964dcce4a81398147f4863a4da4ca
notionUpdated: "2026-07-29T04:42:42.955Z"
---

## 基本情報

| 項目 | 内容 |
| --- | --- |
| 英語名 | AWS Storage Gateway |
| 正式名称 | AWS Storage Gateway |
| 中国語の説明 | 混合云存储网关 |
| 日本語の説明 | ハイブリッドストレージゲートウェイ |
| 出題頻度 | ⭐⭐⭐⭐ |
| 混同しやすいもの | DataSync / S3 on Outposts / Direct Connect / AWS DRS |

## 一言で理解

> Storage Gateway は NFS/SMB、iSCSI、仮想テープの既存ワークフローを保ったまま AWS に接続します。

## 主な役割

- S3 File Gateway は NFS/SMB ファイルを S3 Object に対応付ける。
- Volume Gateway は iSCSI Volume を提供し Snapshot でバックアップ・復旧する。
- Tape Gateway は物理テープを仮想テープへ置き換える。

## 試験ポイント

- S3 へファイルなら File Gateway、ローカルブロックなら Volume Gateway、テープ代替なら Tape Gateway。
- DataSync は大量転送、Direct Connect/VPN はネットワーク、DRS はサーバー全体の復旧。
- ローカル Cache、帯域、権限、暗号化、復旧手順を設計する。

## よくある誤解

- Storage Gateway は専用線ではない。
- File Gateway の保存先は S3 Object だが、S3 自体は通常のファイルシステムではない。

## 重要ポイント

> **ファイル → File Gateway、Volume → Volume Gateway、テープ → Tape Gateway。**

## 関連サービス

S3、EBS Snapshot、DataSync、Direct Connect、AWS DRS。

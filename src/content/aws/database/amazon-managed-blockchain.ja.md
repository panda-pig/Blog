---
title: Amazon Managed Blockchain
fullName: "Amazon Managed Blockchain (AMB)"
description: 複数組織で共有し、検証可能で改ざんしにくい記録を提供するマネージドブロックチェーン機能。
service: AMB
category: database
kind: service
lang: ja
frequency: "出題頻度 ⭐"
date: 2026-07-29
updated: 2026-07-30
tags: [Database, Blockchain, Ledger]
notionId: 3ac964dc-ce4a-81ef-ba29-c54db8aa90b2
notionUrl: https://app.notion.com/p/3ac964dcce4a81efba29c54db8aa90b2
notionUpdated: "2026-07-29T08:07:57.567Z"
---

## 基本情報

| 項目 | 内容 |
| --- | --- |
| 英語名 | Amazon Managed Blockchain (AMB) |
| 正式名称 | Amazon Managed Blockchain (AMB) |
| 中国語名 | 托管区块链服务 |
| 日本語名 | マネージドブロックチェーンサービス |
| 出題頻度 | ⭐ |
| 混同しやすいもの | 普通数据库 / 审计日志 / QLDB |

## 一言で理解

> 独立した参加者が完全には信頼せず、共有 Ledger と検証可能な履歴が必要な場合に Managed Blockchain を検討します。

## 主な役割

- Blockchain Network 基盤の構築・運用負荷を減らす。
- Supply Chain 追跡、組織間金融 Network、Origin 検証、Asset 移転記録が代表例。
- 中心要件は複数参加者の共有と耐改ざん性で、通常 CRUD 性能ではない。

## 試験ポイント

- 複数参加者、共有 Ledger、耐改ざん、Traceability なら Blockchain。
- 単一企業の Order System や通常 Audit Log は RDS、NoSQL、Log の方が簡単。
- 本当に組織間 Trust 問題があるか先に確認する。

## よくある誤解

- Blockchain は Database の標準上位版ではない。
- Audit が必要なだけで Blockchain が必要とは限らない。

## 重要ポイント

> **複数組織 + 不完全な信頼 + 共有耐改ざん Ledger → Managed Blockchain。**

## 関連サービス

RDS、DynamoDB、Audit Logs、Supply Chain。

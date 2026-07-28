---
title: Security Group vs NACL
fullName: Security Group と Network ACL
description: ステートフルなリソースレベル制御と、ステートレスな Subnet レベル制御の違いを設計と障害調査の観点から比較します。
service: Networking Security
category: compare
kind: compare
lang: ja
frequency: "頻出比較"
date: 2026-07-27
updated: 2026-07-27
tags: [Security Group, NACL, Networking, SAA-C03]
notionId: 3a6964dc-ce4a-8166-b3cb-f4eaffa60db0
notionUrl: https://app.notion.com/p/3a6964dcce4a8166b3cbf4eaffa60db0
notionUpdated: "2026-07-27T05:38:26.424Z"
---

## 一言で選ぶ

> 日常のリソースレベル最小権限には **Security Group** を使います。Subnet 境界で特定 CIDR を明示的に拒否したい場合や、粗い追加制御が必要な場合は **Network ACL** を使います。

## 主な違い

| 項目 | Security Group | Network ACL |
| --- | --- | --- |
| 対象 | ENI / 対応リソース | Subnet 境界 |
| 状態 | ステートフル | ステートレス |
| ルール | Allow のみ | Allow と Deny |
| 評価 | Allow ルールの和集合 | 番号順で最初に一致 |
| 戻り通信 | 確立済み接続は自動許可 | 明示的な許可が必要 |
| デフォルト | 新規 SG は受信なし、通常は送信許可 | Default NACL は全許可、Custom NACL は全拒否 |
| 主な用途 | ALB → App → DB の最小権限 | CIDR 遮断、Subnet 境界の追加防御 |
| SG 参照 | 対応 | 非対応 |

## 代表的な構成

`Internet → ALB SG (443) → Application SG (ALB SG のみ) → Database SG (Application SG のみ)`

NACL は各 Subnet 境界で、業務通信と Ephemeral Port を許可したり、特定 CIDR を拒否したりします。

## ステートフルとステートレス

- Security Group は許可した接続の戻り通信を自動的に許可する。
- NACL は方向ごとに独立評価するため、戻り通信の Ephemeral Port も明示的に許可する。

## 試験での判断

- **ALB だけが EC2 に接続** → Security Group 参照。
- **特定 IP / CIDR を遮断** → Network ACL。
- **戻り通信を自動許可** → Security Group。
- **ルール番号、Allow / Deny、Ephemeral Port** → Network ACL。
- **Custom NACL 作成後に通信断** → 受信・送信の両方向ルールを確認。

## よくある落とし穴

- SG が正しくても、Route、NACL、アプリの待受が誤っていれば通信できない。
- 小さい番号の NACL ルールが大きい番号を隠すことがある。
- Default Security Group と新規 Security Group の受信初期設定は同じではない。
- 同一 Subnet 内通信の制御を NACL だけに依存しない。

## 面接でのまとめ

> Security Group はステートフルなリソースレベル最小権限に使い、NACL は明示的な CIDR 拒否が必要な場合のステートレスな Subnet 境界補助として使います。障害調査は Route → NACL の両方向 → SG → OS Firewall → Application Listener の順で確認します。

## 覚え方

> **SG：リソースの門番、Allow のみ、接続を記憶。NACL：Subnet の検問所、Deny 可能、記憶せず番号順。**

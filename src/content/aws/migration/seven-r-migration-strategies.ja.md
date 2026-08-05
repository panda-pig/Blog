---
title: "7R 移行戦略"
fullName: "Seven Migration Strategies"
description: "各 Application をそのまま移すか、最適化・再設計・置換・保持・廃止するかを選びます。"
service: "AWS Migration"
category: migration
kind: topic
lang: ja
topicKey: "7R 迁移策略"
frequency: "試験頻度 ⭐⭐⭐⭐⭐"
date: 2026-08-05
updated: 2026-08-05
tags: ["migration", "7R", "AWS"]
notionId: 3b3964dc-ce4a-810d-9392-cdcb7db0c5a2
notionUrl: https://app.notion.com/p/3b3964dcce4a810d9392cdcb7db0c5a2
notionUpdated: "2026-08-05T01:41:00.000Z"
---

## 一言で理解

Application ごとに、そのまま移行、Platform 全体の移行、小規模改善、再設計、製品置換、保持、廃止を判断します。

## 7R 一覧

| 戦略 | 判断方法 | 代表例 |
| --- | --- | --- |
| Rehost | ほぼ変更せず Lift and Shift | オンプレミス VM → EC2 |
| Relocate | Platform 全体をまとめて移す | VMware 環境 → AWS 上の同等環境 |
| Replatform | 中核 Architecture を変えず限定的に最適化 | 自己管理 MySQL → RDS |
| Refactor / Re-architect | Code を変更し再設計 | Monolith → Lambda / Microservices |
| Repurchase | 旧製品を SaaS に置き換える | 自社運用 CRM → SaaS |
| Retain | 現時点では移行せず運用を続ける | Compliance や依存関係が未解決 |
| Retire | 不要な System を停止する | 旧 System を廃止 |

## 混同しやすい点

- Rehost は個別 Server / Application、Relocate は Platform 全体を移す。
- Replatform は限定的改善、Refactor は Code と Architecture を大きく変更する。
- Retain は当面保持、Retire は停止。
- MGN は Rehost、Database VM から RDS への移行は Replatform の代表例。

## 重要ポイント

**そのまま Rehost、全体 Relocate、小改修 Replatform、大改修 Refactor、製品置換 Repurchase、保留 Retain、廃止 Retire。**

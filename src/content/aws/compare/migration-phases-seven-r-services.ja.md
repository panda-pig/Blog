---
title: "移行フェーズ・7R・移行サービス総比較"
fullName: "Migration Phases, 7Rs & AWS Migration Services"
description: "Project の順序、Application 戦略、評価・検出・複製・転送・管理サービスを分けて整理します。"
service: "AWS"
category: compare
kind: compare
lang: ja
topicKey: "迁移阶段・7R・迁移服务总对比"
frequency: "比較"
date: 2026-08-05
updated: 2026-08-15
tags: ["compare", "migration", "7R", "AWS"]
notionId: 3b3964dc-ce4a-817f-a6d4-dfb52a50e40e
notionUrl: https://app.notion.com/p/3b3964dcce4a817fa6d4dfb52a50e40e
notionUpdated: "2026-08-05T01:44:39.478Z"
---

## 3 種類の知識を分ける

| 概念 | 答える問い | 中核内容 |
| --- | --- | --- |
| 3 段階移行プロセス | Project をどの順で進めるか | Assess → Mobilize → Migrate & Modernize |
| AWS CAF | 誰が参加し、どの能力が必要か | Business、People、Governance、Platform、Security、Operations |
| 7R | 各 Application をどう扱うか | Rehost、Relocate、Replatform、Refactor、Repurchase、Retain、Retire |

## サービス責務マップ

| サービス | 担当 | 担当しないこと |
| --- | --- | --- |
| Migration Evaluator | TCO、License、Business Case | 複製の実行 |
| Application Discovery Service | 資産、Process、接続、依存関係 | TCO 専用計算 |
| Migration Hub / AWS Transform | 計画、協働、進捗 | 主な複製 Engine |
| AWS Transform MGN | Server の継続 Block Replication | Database Schema 変換 |
| AWS DMS | Database Full Load / CDC | 全 Application SQL の書き換え |
| AWS SCT | Schema / Code Object の評価・変換 | 業務 Data の継続転送 |
| AWS DataSync | File / Object のオンライン移行・同期 | 長期 Mount Interface |
| AWS Transfer Family | SFTP / FTPS / FTP / AS2 | 大量一括移行 Engine |
| Direct Connect | 安定した専用 Network Path | Data Copy 自体 |
| Snowball Edge | 旧問題のオフライン物理転送 | 新規顧客への提供 |

## 選択の近道

- 同種 Database は DMS、異種 Engine は SCT + DMS が基本。
- 大量 File の自動移行は DataSync、既存 Protocol の維持は Transfer Family。
- 長期専用 Network は Direct Connect、旧オフライン Device 問題は Snowball Edge。

## 現在の名称

- AWS Application Migration Service は AWS Transform MGN に改称され、Capability、API、Replication Engine は維持されている。
- 教材では旧名称も出るため、実案件では現在の入口と提供状況を確認する。

## 重要ポイント

**Evaluator は計算、Discovery は調査、Hub は管理、MGN は Server 移行。SCT は構造変換、DMS は DB Data、DataSync は File、Transfer は受け口、Direct Connect は経路。**

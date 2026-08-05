---
title: "AWS Transform MGN"
fullName: "AWS Transform MGN（旧 AWS Application Migration Service）"
description: "物理、仮想、クラウドのサーバーを複製して AWS へ移行する。"
service: "AWS Transform MGN"
category: migration
kind: service
lang: ja
topicKey: "AWS Transform MGN"
frequency: "試験頻度 ⭐⭐⭐⭐"
date: 2026-07-31
updated: 2026-08-05
tags: ["migration", "AWS Transform MGN", "AWS Application Migration Service", "AWS"]
notionId: 3a6964dc-ce4a-8178-a861-df3330fe93bc
notionUrl: https://app.notion.com/p/3a6964dcce4a8178a861df3330fe93bc
notionUpdated: "2026-08-05T01:39:32.738Z"
---

## 基本情報

| 項目 | 内容 |
| --- | --- |
| 英語 | AWS Transform MGN |
| 正式名称 | AWS Transform MGN（旧 AWS Application Migration Service） |
| 中国語 | AWS 服务器与应用迁移服务 |
| 日本語 | AWS Transform MGN（サーバー・アプリケーション移行サービス） |
| 試験頻度 | ⭐⭐⭐⭐ |
| 混同しやすいサービス | DMS / Migration Hub |

## ひとことで

物理、仮想、クラウドのサーバーを複製して AWS へ移行する。

## 段階まとめ

- **主な役割**：物理、仮想、クラウドのサーバーを複製して AWS へ移行する。
- **試験頻度**：⭐⭐⭐
- **比較ポイント**：DMS / Migration Hub

## 覚え方

AWS Transform MGN = Server / Application Migration

## 名称と Workflow

AWS Application Migration Service は 2026 年 6 月に **AWS Transform MGN** へ改称された。Core Capability、API、Replication Engine は継続し、旧問題では MGN または旧名称も使われる。

1. Source Server に Agent を導入し、Block-level の変更を AWS Staging Area へ継続複製する。
2. Test Instance で Application、Network、Performance、Dependency を検証する。
3. Cutover Window を設定し、最終同期後に Cutover Instance を起動する。
4. 結果を検証して切り替えを完了し、必要なら Rollback Plan を使う。

MGN は Server / Application、DMS は Database、DataSync は File / Object Data を移行する。

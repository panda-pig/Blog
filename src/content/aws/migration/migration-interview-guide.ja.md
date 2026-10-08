---
title: "Migration 面接ガイド"
fullName: "AWS Migration Interview Guide"
description: "Business Goal、Application Portfolio、Dependency、移行 Strategy、Cutover／Rollback、移行後 Modernization から答える。"
service: "AWS Migration Interview Guide"
category: migration
kind: topic
lang: ja
topicKey: "AWS Migration Interview Guide"
frequency: "面试专题"
date: 2026-10-08
updated: 2026-10-08
tags: ["migration","AWS Migration Interview Guide","AWS"]
notionId: 3b3964dc-ce4a-818c-843f-caff35e7d321
notionUrl: https://app.notion.com/p/3b3964dcce4a818c843fcaff35e7d321
notionUpdated: "2026-10-08T01:56:02.673Z"
---
## 基本情報

| 項目 | 内容 |
| --- | --- |
| 英語 / 正式名称 | AWS Migration Interview Guide |
| 中国語 | AWS 迁移面试 |
| 日本語 | AWS 移行面接ガイド |
| 復習優先度 | 面试专题 |
| 混同しやすい項目 | MGN / DRS / DMS / DataSync / Direct Connect |

## 一言で理解

Business Goal、Application Portfolio、Dependency、移行 Strategy、Cutover／Rollback、移行後 Modernization から答える。

## 要点整理

Assess、Mobilize、Migrate & Modernize で整理し、Dependency と Risk から Wave を作り、低 Risk Pilot から始める。

## 学習ポイント

- Server の低停止移行は MGN の Block Replication、Test、Cutover。
- 異種 Database は Schema／Code 変換後に DMS Full Load／CDC。
- DataSync は File、Transfer Family は Protocol Entry、Direct Connect は Network Path。
- Backup Plan には Assignment、Permission、Recovery Point、実 Restore Validation が必要。

## よくある誤解

- MGN は計画移行、DRS は継続 DR と Failback。
- Low Downtime は Zero Downtime ではなく、Cutover ごとに受入基準と Rollback 条件が必要。

## 重要ポイント

**発見・評価、Strategy と Wave、Test 後の Cutover、常に Rollback を準備する。**

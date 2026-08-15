---
title: "AWS Snowball Edge"
fullName: "AWS Snowball Edge Storage Optimized"
description: "教材で扱われる代表的なオフライン移行・エッジデバイスを、現在の提供状況と合わせて整理します。"
service: "AWS Snowball Edge"
category: migration
kind: service
lang: ja
topicKey: "AWS Snowball Edge"
frequency: "試験頻度 ⭐⭐⭐"
date: 2026-08-05
updated: 2026-08-15
tags: ["migration", "Snowball Edge", "AWS"]
notionId: 3b3964dc-ce4a-8154-bbfc-f52294dcff18
notionUrl: https://app.notion.com/p/3b3964dcce4a8154bbfcf52294dcff18
notionUpdated: "2026-08-05T01:41:27.434Z"
---

## 一言で理解

AWS が安全な Device を配送し、顧客が大量データを書き込んで返送すると、AWS が Cloud Storage へ取り込む代表的なオフライン移行方式です。

## 利用場面と流れ

- Network が利用できない、信頼性が低い、または TB / PB 級データのオンライン転送に時間がかかりすぎる場合。
- AWS が Device を配送 → 顧客がコピーと検証 → 返送 → AWS が取り込み、Device 上の顧客データを消去。
- 既存顧客は、切断環境や遠隔地で対応する Edge Workload にも利用できる。

## 現在の状況

- Snowball Edge は新規顧客には提供されていないが、旧試験問題ではオフライン物理移行の代表解として登場する。
- 新規顧客はオンライン転送に DataSync、物理転送に Data Transfer Terminal や Partner、Edge Computing に Outposts を検討する。

## 混同しやすい点

- DataSync はオンライン転送、Direct Connect は専用 Network Path、Snowball Edge は物理 Device。
- 物理転送でも暗号化、Chain of Custody、完全性検証は必要。

## 重要ポイント

**試験では「Network が弱い + 大量データ」なら Snowball Edge。実案件では現在の提供状況と代替案を先に確認する。**

## 公式リファレンス

- [AWS Snowball Edge availability change](https://docs.aws.amazon.com/snowball/latest/developer-guide/snowball-edge-availability-change.html)

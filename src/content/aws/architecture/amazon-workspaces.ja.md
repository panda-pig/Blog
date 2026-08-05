---
title: "Amazon WorkSpaces"
fullName: "Amazon WorkSpaces"
description: "User ごとに完全な Managed Windows / Linux Cloud Desktop を提供します。"
service: "Amazon WorkSpaces"
category: architecture
kind: service
lang: ja
topicKey: "Amazon WorkSpaces"
frequency: "試験頻度 ⭐⭐⭐"
date: 2026-08-05
updated: 2026-08-05
tags: ["architecture", "WorkSpaces", "AWS"]
notionId: 3b3964dc-ce4a-81a4-8564-c399f28400e3
notionUrl: https://app.notion.com/p/3b3964dcce4a81a48564c399f28400e3
notionUpdated: "2026-08-05T01:59:00.000Z"
---

## 一言で理解

Remote Work、一時的な Team、VDI 代替向けに、User ごとの完全な Windows / Linux Cloud Desktop を提供します。

## 主な役割

- Desktop Bundle、Directory、Image、Storage、Access を一元管理する。
- User は Client または対応 Browser で接続し、Compute と Data は主に AWS に保持される。
- 複数 Application、Persistent Environment、User Personalization が必要な場面に適する。

## 試験ポイントと注意点

- 完全 Desktop → WorkSpaces、個別 Application → WorkSpaces Applications、隔離 Browser → Secure Browser。
- Browser から WorkSpace へ接続する機能は Secure Browser Service とは別物。
- Directory、Latency、User Data、Image、Software License、Endpoint Policy を設計する。

## 重要ポイント

**完全な Cloud Desktop → Amazon WorkSpaces。**

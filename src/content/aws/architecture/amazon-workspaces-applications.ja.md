---
title: "Amazon WorkSpaces Applications"
fullName: "Amazon WorkSpaces Applications (formerly Amazon AppStream 2.0)"
description: "完全な仮想 Desktop ではなく、Desktop Application を AWS から Streaming 配信します。"
service: "Amazon WorkSpaces Applications"
category: architecture
kind: service
lang: ja
topicKey: "Amazon WorkSpaces Applications"
frequency: "試験頻度 ⭐⭐⭐"
date: 2026-08-05
updated: 2026-08-05
tags: ["architecture", "WorkSpaces Applications", "AWS"]
notionId: 3b3964dc-ce4a-81eb-a897-ffd12fbc0c94
notionUrl: https://app.notion.com/p/3b3964dcce4a81eba897ffd12fbc0c94
notionUpdated: "2026-08-05T01:59:00.000Z"
---

## 一言で理解

1 つ以上の Desktop Application を一元管理し、Client または HTML5 Browser へ Streaming 配信します。完全な Desktop は提供しません。

## 主な役割

- Application Image と Version を一元管理し、Session を必要に応じて Scale する。
- Application は AWS Compute 上で動き、Endpoint は主に画面と入力を扱う。
- Contractor、教育環境、Local Data 保存を制限したい用途に適する。

## 試験ポイントと注意点

- Application のみ → WorkSpaces Applications、完全 Desktop → WorkSpaces、隔離 Browser → Secure Browser。
- 旧教材の Amazon AppStream 2.0 は現在の WorkSpaces Applications に相当する。
- Fleet、Concurrency、Image、Identity、Network、Session Policy が Cost と体験を左右する。

## 重要ポイント

**完全な Desktop ではなく、Application だけを提供する。**

## 公式リファレンス

- [Amazon WorkSpaces Applications](https://docs.aws.amazon.com/appstream2/latest/developerguide/what-is-appstream.html)

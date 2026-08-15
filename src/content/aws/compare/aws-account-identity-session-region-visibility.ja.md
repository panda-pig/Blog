---
title: "AWS Account・Identity・Session・Region・可視性の総比較"
fullName: "AWS Account, Identity, Session, Region and Resource Visibility"
description: "AWS Resource が表示されない理由を階層ごとに切り分けます。"
service: "AWS Compare"
category: compare
kind: compare
lang: ja
topicKey: "AWS Account・Identity・Session・Region・资源可见性总对比"
frequency: "頻出比較"
date: 2026-08-13
updated: 2026-08-15
tags: ["compare", "AWS Account", "IAM", "Region"]
notionId: 3bb964dc-ce4a-81a6-8748-f8e9edccf76b
notionUrl: https://app.notion.com/p/3bb964dcce4a81a68748f8e9edccf76b
notionUpdated: "2026-08-13T04:40:08.503Z"
---

## 一言で理解

**Account は Resource と Billing の境界、Identity は誰か、Session は現在の Login、Region / AZ は配置、Policy は許可された操作を決めます。**

## 可視性の階層

| 階層 | 確認する質問 |
| --- | --- |
| Account | どの Account が Resource を所有するか |
| Identity | どの Principal が Request しているか |
| Session | この Window はどの Login Context か |
| Region / AZ | Resource はどこにあるか |
| Permission | List、Describe、Get などを許可されているか |

Admin が作成した EBS Volume は IAM User 個人ではなく、Account と対象 Region / AZ に属します。その後の API Action も毎回 Permission Evaluation されます。

## 調査順序

12 桁の Account ID、現在の Identity、選択 Region、List / Describe 権限、Console Filter と Resource State、最後に Global / Regional / Zonal Scope を確認します。

Multi-session は Login Context を並行保持するだけで、新しい Account、Resource Copy、Permission Merge、Ownership 変更は行いません。

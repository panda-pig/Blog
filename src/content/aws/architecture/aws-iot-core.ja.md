---
title: "AWS IoT Core"
fullName: "AWS IoT Core"
description: "多数の物理 Device を安全に AWS へ接続し、Telemetry と双方向 Command を扱います。"
service: "AWS IoT Core"
category: architecture
kind: service
lang: ja
topicKey: "AWS IoT Core"
frequency: "試験頻度 ⭐⭐⭐"
date: 2026-08-05
updated: 2026-08-05
tags: ["architecture", "IoT", "AWS"]
notionId: 3b3964dc-ce4a-81d4-8b8d-e0b62575728a
notionUrl: https://app.notion.com/p/3b3964dcce4a81d48b8de0b62575728a
notionUpdated: "2026-08-05T01:59:00.000Z"
---

## 一言で理解

Device Certificate と暗号化接続を使い、多数の Device が Topic へ Telemetry を Publish し、Cloud から Command を受信できます。

## 主な構成要素

- Device Gateway と Certificate が接続と Identity を提供する。
- Message Broker が MQTT Topic による Publish / Subscribe を行う。
- Rules Engine が Message を Lambda、S3、DynamoDB、Kinesis などへ Routing する。
- Device Shadow が Desired / Reported State を保持し、Offline Device と状態を調整する。

## 試験ポイントと注意点

- Device Identity、安全な接続、Telemetry、双方向 Command → IoT Core。
- Edge での Local Processing と Offline 実行 → IoT Greengrass。
- Kinesis は一般的な Stream、IoT Core は Device Identity・Protocol・Topic・State も扱う。
- 長期保存と分析には下流の Storage / Analytics Service が必要。

## 重要ポイント

**Device Certificate + MQTT Topic + Rules Engine + Device Shadow。**

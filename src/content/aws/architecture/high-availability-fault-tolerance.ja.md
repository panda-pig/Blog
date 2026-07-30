---
title: "高可用性とフォールトトレランス"
fullName: "High Availability & Fault Tolerance"
description: "High Availability は冗長化と復旧で停止を減らし、Fault Tolerance は障害中も最小限の中断で継続する。"
service: "Architecture"
category: architecture
kind: topic
lang: ja
topicKey: "High Availability & Fault Tolerance"
frequency: "試験頻度 ⭐⭐⭐⭐⭐"
date: 2026-07-30
updated: 2026-07-30
tags: ["architecture","High Availability & Fault Tolerance","AWS"]
notionId: 3a6964dc-ce4a-816d-833f-c03167b88b6c
notionUrl: https://app.notion.com/p/3a6964dcce4a816d833fc03167b88b6c
notionUpdated: "2026-07-23T08:25:18.648Z"
---

## 一言で理解

> High Availability は冗長化と復旧で停止を減らし、Fault Tolerance は障害中も最小限の中断で継続する。

## 要点

- 複数 Availability Zone へ配置し、単一 AZ 依存を避ける。
- Load Balancer、Health Check、Auto Scaling、複製 Data Layer で Single Point of Failure を除く。
- High Availability は短い復旧時間を許容する場合があり、Fault Tolerance はより多くの冗長性と費用を必要とする。

## 試験での判断

> Service 名だけで判断せず、Failure Domain、RTO、RPO、State、Recovery Test を定義する。

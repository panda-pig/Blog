---
title: "Amazon Connect"
fullName: "Amazon Connect"
description: "電話、Chat、IVR、Queue、Agent、Callback を備えた Cloud Contact Center です。"
service: "Amazon Connect"
category: architecture
kind: service
lang: ja
topicKey: "Amazon Connect"
frequency: "試験頻度 ⭐⭐⭐"
date: 2026-08-05
updated: 2026-08-05
tags: ["architecture", "Amazon Connect", "AWS"]
notionId: 3b3964dc-ce4a-81ab-9581-f2bd320a457a
notionUrl: https://app.notion.com/p/3b3964dcce4a81ab9581f2bd320a457a
notionUpdated: "2026-08-05T01:59:00.000Z"
---

## 一言で理解

Contact Flow、IVR、Queue、Routing を使い、電話や Chat を Agent または Self-service Flow へ接続する Cloud Contact Center です。

## 主な役割

- 電話、Chat、Outbound、Callback、Queue、Agent Workspace を管理する。
- Skill と Business Rule に基づき Contact を Routing する。
- Lambda で業務データ、Lex で自然言語、Polly で音声合成を拡張する。

## 試験ポイントと注意点

- IVR、Queue、Agent、Callback → Amazon Connect。
- SES は Application Email、SNS は通知、Connect はリアルタイム Contact Center。
- CloudFront は Web Content Distribution であり、電話や Chat を Routing しない。
- 顧客 Data 保護、Lambda の最小権限、Flow Monitoring が必要。

## 重要ポイント

**電話 / Chat + IVR + Queue + Agent + Callback → Amazon Connect。**

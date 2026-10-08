---
title: "AWS Systems Manager"
fullName: "AWS Systems Manager"
description: "AWS とハイブリッド環境のノードを一元管理し、運用と修復を自動化する。"
service: "AWS Systems Manager"
category: monitoring
kind: service
lang: ja
topicKey: "AWS Systems Manager"
frequency: "試験頻度 ⭐⭐⭐⭐"
date: 2026-07-31
updated: 2026-10-08
tags: ["monitoring", "AWS Systems Manager", "AWS"]
notionId: 3a6964dc-ce4a-8172-98e0-c06ec5cc85b8
notionUrl: https://app.notion.com/p/3a6964dcce4a817298e0c06ec5cc85b8
notionUpdated: "2026-10-08T02:56:58.732Z"
---

## 基本情報

| 項目 | 内容 |
| --- | --- |
| 英語 | AWS Systems Manager |
| 正式名称 | AWS Systems Manager |
| 中国語 | 集中式运维管理 |
| 日本語 | AWS Systems Manager（統合運用管理サービス） |
| 試験頻度 | ⭐⭐⭐⭐ |
| 混同しやすいサービス | CloudWatch / AWS Config / Secrets Manager |

## ひとことで

AWS とハイブリッド環境のノードを一元管理し、運用と修復を自動化する。

## 段階まとめ

- **主な役割**：AWS とハイブリッド環境のノードを一元管理し、運用と修復を自動化する。
- **試験頻度**：⭐⭐⭐⭐
- **比較ポイント**：CloudWatch / AWS Config / Secrets Manager

## 覚え方

AWS Systems Manager = AWS Systems Manager（統合運用管理サービス）

## 追加：Managed Access と運用 Automation

- Session Manager は Inbound 22／3389 を開けずに Session を提供するが、SSM Agent、Instance Role、Operator IAM、SSM への Outbound Path が必要。
- Run Command は一括 Command、Automation は Multi-step Operation、Patch Manager は Patch Baseline と Maintenance Window を扱う。
- Managed Node でも全 Command が許可されるわけではなく、Document、Target、Concurrency、Error Threshold、Log を設定する。

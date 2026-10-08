---
title: "AWS CloudHSM"
fullName: "AWS CloudHSM"
description: "暗号鍵をより強く顧客管理したい Workload に Single-tenant の専用 HSM を提供する。"
service: "AWS CloudHSM"
category: security
kind: service
lang: ja
topicKey: "AWS CloudHSM"
frequency: "考试频率 ⭐⭐⭐"
date: 2026-10-08
updated: 2026-10-08
tags: ["security","AWS CloudHSM","AWS"]
notionId: 3f3964dc-ce4a-81ec-8891-ea6d574e3954
notionUrl: https://app.notion.com/p/3f3964dcce4a81ec8891ea6d574e3954
notionUpdated: "2026-10-08T00:52:15.652Z"
---
## 基本情報

| 項目 | 内容 |
| --- | --- |
| 英語 / 正式名称 | AWS CloudHSM |
| 中国語 | 专用硬件安全模块服务 |
| 日本語 | 専用ハードウェアセキュリティモジュール |
| 復習優先度 | 考试频率 ⭐⭐⭐ |
| 混同しやすい項目 | AWS KMS / KMS Custom Key Store |

## 一言で理解

暗号鍵をより強く顧客管理したい Workload に Single-tenant の専用 HSM を提供する。

## 要点整理

AWS は Hardware を運用し、顧客は HSM 内の User、Key、Permission を管理する。Multi-AZ には複数 HSM が必要。

## 学習ポイント

- Symmetric Key と Asymmetric Key を扱える。
- KMS Custom Key Store の基盤として利用できる。
- IAM は Cluster Resource を制御し、HSM 内部権限を代替しない。
- AWS Service との Managed Integration が主目的なら通常は KMS。

## よくある誤解

- CloudHSM は通常の KMS Key Type ではない。
- CloudHSM を使うだけでは Multi-AZ HA にならない。

## 重要ポイント

**Dedicated HSM は CloudHSM、Service Integration は KMS、橋渡しは Custom Key Store。**

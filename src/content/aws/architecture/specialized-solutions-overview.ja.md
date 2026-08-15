---
title: "専門ソリューション概要"
fullName: "Specialized Solutions Overview"
description: "API、業務通信、エンドユーザーコンピューティング、IoT の対象からサービスを選びます。"
service: "Architecture"
category: architecture
kind: topic
lang: ja
topicKey: "专业解决方案概览"
frequency: "段階まとめ"
date: 2026-08-05
updated: 2026-08-15
tags: ["architecture", "specialized-solutions", "AWS"]
notionId: 3b3964dc-ce4a-8107-9461-e75f6bf2999e
notionUrl: https://app.notion.com/p/3b3964dcce4a81079461e75f6bf2999e
notionUpdated: "2026-08-05T01:59:49.822Z"
---

## 一言で理解

API 開発、業務通信、Application、完全な Desktop、隔離 Browser、Device 接続のどれを解決するかを先に判断します。

## 選択マップ

| 要件 | 最初に考えるサービス |
| --- | --- |
| Managed GraphQL API とリアルタイム購読 | AWS AppSync |
| Web/Mobile の Full-stack 開発と Hosting | AWS Amplify |
| 電話、Chat、IVR、Queue、Agent、Callback | Amazon Connect |
| Application からの Email 送信 | Amazon SES |
| 個別 Desktop Application の Streaming | Amazon WorkSpaces Applications |
| 完全な Windows / Linux Cloud Desktop | Amazon WorkSpaces |
| 制御された隔離 Browser Session | Amazon WorkSpaces Secure Browser |
| Device の安全な接続、Telemetry、双方向 Command | AWS IoT Core |

## 混同しやすい点

- AppSync は GraphQL、API Gateway は REST / HTTP / WebSocket、Amplify は Web/Mobile の Full-stack Delivery に重点を置く。
- Connect は Contact Center、SES は Email、SNS は Pub/Sub 通知。
- Applications は Application、WorkSpaces は Desktop、Secure Browser は隔離 Browser を提供する。
- IoT Core は Device Identity・接続・Message を担当し、保存・分析は下流サービスで行う。

## 重要ポイント

**製品名より先に、User または Device が最終的に何を受け取るかを確認する。**

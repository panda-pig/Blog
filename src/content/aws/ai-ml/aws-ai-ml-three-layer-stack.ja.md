---
title: "AWS AI/ML の3層スタック"
fullName: "AWS AI Services / AWS ML Services / ML Frameworks and Infrastructure"
description: "「事前学習済み AI サービス・ML プラットフォーム・ML インフラ」の3層から、制御性と運用負荷で選びます。"
service: "AWS AI/ML Stack"
category: ai-ml
kind: concept
lang: ja
topicKey: "AWS AI/ML 三层技术栈"
frequency: "出題頻度 ⭐⭐⭐⭐⭐"
date: 2026-07-31
updated: 2026-07-31
tags: ["ai-ml","AWS AI/ML 三层技术栈","AWS"]
notionId: 3ad964dc-ce4a-8125-a875-f2c3ea9362ff
notionUrl: https://app.notion.com/p/3ad964dcce4a8125a875f2c3ea9362ff
notionUpdated: "2026-07-30T08:04:05.363Z"
---

## 基本情報

| 項目 | 内容 |
| --- | --- |
| 英語名 | AWS AI/ML Stack |
| 正式名称 | AWS AI Services / AWS ML Services / ML Frameworks and Infrastructure |
| 中国語の説明 | AWS AI/ML 三层技术栈 |
| 日本語の説明 | AWS AI/ML 3層スタック |
| 出題頻度 | ⭐⭐⭐⭐⭐ |
| 混同しやすいもの | AI Services / SageMaker / EC2 + ML Frameworks |

## 一言で理解

「事前学習済み AI サービス・ML プラットフォーム・ML インフラ」の3層から、制御性と運用負荷で選びます。

## 要点

- AI Services は Polly、Transcribe、Comprehend、Textract、Rekognition などの完成済み API を提供します。
- SageMaker は独自モデルのデータ準備、学習、デプロイ、監視を提供します。
- EC2、EKS、GPU、ML フレームワークは最も高い制御性と運用責任を伴います。
- Bedrock は基盤モデルのマネージド API で生成 AI アプリ開発を支えます。

## 試験ポイント

- 完成済み機能ほど上位層、独自学習と低レベル制御ほど下位層です。

## よくある誤解

- 製品名だけで選ばず、データ型、遅延、制御性、運用、コスト制約を確認します。

## 重要ポイント

**AI API → SageMaker → 自主管理 ML インフラの順に、制御性と運用が増えます。**

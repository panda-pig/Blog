---
title: "AWS CodeBuild"
fullName: "AWS CodeBuild"
description: "一時的な環境でコードをコンパイルし、テストを実行してビルド成果物を生成する。"
service: "AWS CodeBuild"
category: devops
kind: service
lang: ja
topicKey: "AWS CodeBuild"
frequency: "試験頻度 ⭐⭐⭐"
date: 2026-07-31
updated: 2026-08-05
tags: ["devops", "AWS CodeBuild", "AWS"]
notionId: 3a6964dc-ce4a-813d-a5d5-d5fa9b9d81f8
notionUrl: https://app.notion.com/p/3a6964dcce4a813da5d5d5fa9b9d81f8
notionUpdated: "2026-08-05T01:57:34.782Z"
---

## 基本情報

| 項目 | 内容 |
| --- | --- |
| 英語 | AWS CodeBuild |
| 正式名称 | AWS CodeBuild |
| 中国語 | 托管构建服务 |
| 日本語 | マネージドビルド |
| 試験頻度 | ⭐⭐⭐ |
| 混同しやすいサービス | CodePipeline |

## ひとことで

一時的な環境でコードをコンパイルし、テストを実行してビルド成果物を生成する。

## 段階まとめ

- **主な役割**：一時的な環境でコードをコンパイルし、テストを実行してビルド成果物を生成する。
- **試験頻度**：⭐⭐⭐
- **比較ポイント**：CodePipeline

## 覚え方

AWS CodeBuild = マネージドビルド

## 動作の流れ

1. Repository、S3、CodePipeline から Source を取得する。
2. `buildspec.yml` の install、pre_build、build、post_build Phase を実行する。
3. 分離された一時 Environment で Compile、Test、Package を行う。
4. Artifact を出力し、Log を CloudWatch Logs へ送る。

CodeBuild は **Build / Test**、CodePipeline は **Orchestration**、CodeDeploy は **Target への Deploy** を担当する。Private Dependency と VPC Resource では Network、IAM Role、Secret も確認する。

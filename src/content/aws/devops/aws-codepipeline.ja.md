---
title: "AWS CodePipeline"
fullName: "AWS CodePipeline"
description: "ソースからビルド、テスト、デプロイまでのデリバリーフローを編成する。"
service: "AWS CodePipeline"
category: devops
kind: service
lang: ja
topicKey: "AWS CodePipeline"
frequency: "試験頻度 ⭐⭐⭐"
date: 2026-07-31
updated: 2026-08-05
tags: ["devops", "AWS CodePipeline", "AWS"]
notionId: 3a6964dc-ce4a-81a8-9761-d977429ec679
notionUrl: https://app.notion.com/p/3a6964dcce4a81a89761d977429ec679
notionUpdated: "2026-08-05T01:57:00.000Z"
---

## 基本情報

| 項目 | 内容 |
| --- | --- |
| 英語 | AWS CodePipeline |
| 正式名称 | AWS CodePipeline |
| 中国語 | 持续交付流水线 |
| 日本語 | 継続的デリバリーパイプライン |
| 試験頻度 | ⭐⭐⭐ |
| 混同しやすいサービス | CodeBuild / CodeDeploy |

## ひとことで

ソースからビルド、テスト、デプロイまでのデリバリーフローを編成する。

## 段階まとめ

- **主な役割**：ソースからビルド、テスト、デプロイまでのデリバリーフローを編成する。
- **試験頻度**：⭐⭐⭐
- **比較ポイント**：CodeBuild / CodeDeploy

## 覚え方

AWS CodePipeline = 継続的デリバリーパイプライン

## 動作の流れ

- Source、Build、Test、Manual Approval、Deploy を再現可能な Release Process に接続する。
- 各 Stage に Action があり、Artifact が Version と Result を Stage 間で渡す。
- Source Change や Event で起動し、Failure 時は後続 Stage を停止して履歴を残す。

CodePipeline は **Orchestration** を担当し、自身で Compile しない。CodeBuild は Build、CodeDeploy は Deploy、CloudFormation は Infrastructure Release に使う。

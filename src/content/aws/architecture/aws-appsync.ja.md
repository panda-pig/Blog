---
title: "AWS AppSync"
fullName: "AWS AppSync"
description: "GraphQL API、Resolver、複数 Data Source、リアルタイム購読を管理します。"
service: "AWS AppSync"
category: architecture
kind: service
lang: ja
topicKey: "AWS AppSync"
frequency: "試験頻度 ⭐⭐⭐"
date: 2026-08-05
updated: 2026-08-05
tags: ["architecture", "AppSync", "GraphQL", "AWS"]
notionId: 3b3964dc-ce4a-81e0-b578-d85ef67ddcdd
notionUrl: https://app.notion.com/p/3b3964dcce4a81e0b578d85ef67ddcdd
notionUpdated: "2026-08-05T01:59:00.000Z"
---

## 基本情報

| 項目 | 内容 |
| --- | --- |
| 中国語 | 托管 GraphQL API 与实时数据服务 |
| 日本語 | フルマネージド型 GraphQL API・リアルタイムデータサービス |
| 試験頻度 | ⭐⭐⭐ |
| 混同しやすいもの | API Gateway / Amplify |

## 一言で理解

GraphQL Schema に基づき、Client が必要な Data を 1 つ以上の Data Source から安全に取得し、リアルタイム購読も提供します。

## 主な構成要素

- Schema が読み書き可能な Data を定義し、Resolver が DynamoDB、Lambda、OpenSearch、HTTP などへ接続する。
- Query は取得、Mutation は変更、Subscription は接続中の Client へ更新を配信する。
- Cognito、IAM、OIDC などで認証できるが、Data Source 権限には最小権限が必要。

## 試験ポイントと注意点

- GraphQL、リアルタイム購読、複数 Data Source の統合 API → AppSync。
- API Gateway は REST / HTTP / WebSocket、Amplify は Web/Mobile の Full-stack Workflow。
- GraphQL だけで非効率な Backend Access は解決しない。Schema、Resolver、Cache、認可を設計する。

## 重要ポイント

**GraphQL Schema + Resolver + Data Source + Subscription。**

---
title: "AWS AppSync"
fullName: "AWS AppSync"
description: "托管 GraphQL API、Resolver、多数据源和实时订阅。"
service: "AWS AppSync"
category: architecture
kind: service
lang: zh
topicKey: "AWS AppSync"
frequency: "考试频率 ⭐⭐⭐"
date: 2026-08-05
updated: 2026-08-05
tags: ["architecture", "AppSync", "GraphQL", "AWS"]
notionId: 3b3964dc-ce4a-81e0-b578-d85ef67ddcdd
notionUrl: https://app.notion.com/p/3b3964dcce4a81e0b578d85ef67ddcdd
notionUpdated: "2026-08-05T01:59:00.000Z"
---

## 基本信息

| 字段 | 内容 |
| --- | --- |
| 中文 | 托管 GraphQL API 与实时数据服务 |
| 日文 | フルマネージド型 GraphQL API・リアルタイムデータサービス |
| 考试频率 | ⭐⭐⭐ |
| 易混淆 | API Gateway / Amplify |

## 一句话理解

根据 GraphQL Schema 把客户端需要的数据安全地连接到一个或多个数据源，并支持实时订阅。

## 核心组件

- Schema 定义可查询和修改的数据；Resolver 把字段映射到 DynamoDB、Lambda、OpenSearch 或 HTTP 等数据源。
- Query 读取，Mutation 修改，Subscription 将更新推送给订阅客户端。
- 认证可结合 Cognito、IAM、OIDC 等，数据源权限仍需遵循最小权限。

## 高频辨析

- GraphQL、实时订阅、多数据源统一 API → AppSync。
- REST / HTTP / WebSocket 的通用 API 前门 → API Gateway。
- Web/Mobile 全栈开发、构建和托管 → Amplify。
- GraphQL 不会自动消除低效查询，仍需设计 Schema、Resolver、缓存和数据访问。

## 重点记忆

**GraphQL Schema + Resolver + Data Source + Subscription。**

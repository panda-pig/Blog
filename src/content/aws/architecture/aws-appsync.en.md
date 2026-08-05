---
title: "AWS AppSync"
fullName: "AWS AppSync"
description: "Managed GraphQL APIs, resolvers, multiple data sources, and real-time subscriptions."
service: "AWS AppSync"
category: architecture
kind: service
lang: en
topicKey: "AWS AppSync"
frequency: "Exam frequency ⭐⭐⭐"
date: 2026-08-05
updated: 2026-08-05
tags: ["architecture", "AppSync", "GraphQL", "AWS"]
notionId: 3b3964dc-ce4a-81e0-b578-d85ef67ddcdd
notionUrl: https://app.notion.com/p/3b3964dcce4a81e0b578d85ef67ddcdd
notionUpdated: "2026-08-05T01:59:00.000Z"
---

## Basic Information

| Field | Value |
| --- | --- |
| Chinese | 托管 GraphQL API 与实时数据服务 |
| Japanese | フルマネージド型 GraphQL API・リアルタイムデータサービス |
| Exam frequency | ⭐⭐⭐ |
| Often confused with | API Gateway / Amplify |

## One-line summary

Use a GraphQL schema to securely connect clients to the exact data they request from one or more sources, with real-time subscriptions.

## Core components

- A schema defines readable and writable data; resolvers map fields to DynamoDB, Lambda, OpenSearch, HTTP, and other sources.
- Queries read, mutations change, and subscriptions push updates to connected clients.
- Authentication can use Cognito, IAM, or OIDC; data-source permissions still require least privilege.

## Exam focus and pitfalls

- GraphQL, real-time subscriptions, and a unified API over multiple sources point to AppSync.
- API Gateway is the general REST, HTTP, and WebSocket front door; Amplify provides a full-stack web/mobile workflow.
- GraphQL does not automatically prevent inefficient backend access; schemas, resolvers, caching, and authorization still need design.

## Key takeaway

**GraphQL schema + resolver + data source + subscription.**

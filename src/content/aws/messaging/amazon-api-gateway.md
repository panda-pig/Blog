---
title: "Amazon API Gateway"
fullName: "Amazon API Gateway"
description: "用于创建、发布、保护、监控和管理 REST、HTTP 与 WebSocket API 的托管服务。"
service: "Amazon API Gateway"
category: messaging
kind: service
lang: zh
topicKey: "Amazon API Gateway"
frequency: "考试频率 ⭐⭐⭐⭐⭐"
date: 2026-07-30
updated: 2026-07-31
tags: ["messaging","Amazon API Gateway","AWS"]
notionId: 3aa964dc-ce4a-816a-9659-d08ad7142c2d
notionUrl: https://app.notion.com/p/3aa964dcce4a816a9659d08ad7142c2d
notionUpdated: "2026-07-30T08:30:23.174Z"
---

## 基本信息

| 字段 | 内容 |
| --- | --- |
| 英文 | Amazon API Gateway |
| 全称 | Amazon API Gateway |
| 中文释义 | API 网关 |
| 日文释义 | Amazon API Gateway（API の作成・公開・管理サービス） |
| 考试频率 | ⭐⭐⭐⭐⭐ |
| 易混淆 | ALB / Internet Gateway / NAT Gateway |

## 一句话理解

用于创建、发布、保护、监控和管理 REST、HTTP 与 WebSocket API 的托管服务。

## 核心作用

- 作为客户端访问后端服务的 API 前门。
- 可集成 Lambda、HTTP 后端及其他 AWS 服务。
- 支持身份验证、授权、限流、配额、阶段和监控。
- 根据 API 类型提供 REST、HTTP 或 WebSocket 能力。

## 工作中的应用场景

客户端 → API Gateway → Lambda / HTTP 服务 / AWS 服务集成。

## Cloud Practitioner 考点

API Gateway 管理应用 API；IGW、NAT Gateway、VGW、TGW 解决网络连接路径，二者不是同一类“网关”。

## SAA-C03 考点

- REST API vs HTTP API vs WebSocket API。
- Lambda Proxy Integration。
- IAM、Cognito、Lambda Authorizer。
- Throttling、Caching、Stages、Custom Domain。
- Regional、Edge-optimized 与 Private API 选型。

## 常见误区

- API Gateway 不是用来连接两个 VPC 的网络网关。
- 它不会自动替代后端的身份、数据与业务安全设计。
- CloudFront 可位于 API Gateway 前面，但二者职责不同。

## 重点记忆

**API Gateway 管 API 请求；网络 Gateway 管网络路径。**

---
title: "无服务器架构"
fullName: "Serverless Architecture"
description: "用托管、按需执行的服务减少服务器管理，同时保留应用层安全与可靠性责任。"
service: "Architecture"
category: architecture
kind: topic
lang: zh
topicKey: "无服务器架构"
frequency: "考试频率 ★★★★★"
date: 2026-07-30
updated: 2026-07-30
tags: ["Architecture","Serverless","Lambda"]
notionId: 3a6964dc-ce4a-8102-802a-c8a0a767c8f3
notionUrl: https://app.notion.com/p/3a6964dcce4a8102802ac8a0a767c8f3
notionUpdated: "2026-07-30T01:08:04.047Z"
---

## 一句话理解

> Serverless 不是没有服务器，而是服务器的准备、维护和扩缩由 AWS 管理。

## 典型组成

- API Gateway 或 EventBridge 接收请求与事件。
- Lambda 运行短时事件函数；Fargate 运行无需管理服务器的容器。
- SQS / SNS 负责缓冲、解耦和广播；DynamoDB / S3 保存数据。
- Step Functions 管工作流，CloudWatch 管日志、指标和告警。

## Lambda、Fargate 与 EC2

- Lambda：短时、事件驱动的函数。
- Fargate：需要容器，但不想管理 EC2；仍由 ECS 或 EKS 编排。
- EC2：长期进程、特殊系统要求或最高控制权。

## 考试重点

- Lambda 消费 SQS 时按至少一次处理，函数应幂等并正确配置 Visibility Timeout 与 DLQ。
- Serverless 仍要管理 IAM、网络、数据、重试、并发、监控和成本。
- 自动扩缩不保证数据库等下游能够承受相同并发。
- 选择计算方式时重点看执行时长、运行模型和控制需求。

## 常见误区

- Serverless 不等于零成本，也不等于 Lambda。
- Fargate 是无服务器计算选项，不负责容器编排。
- Lambda 不适合长期持续进程，容器应用也不必都改写成函数。

## 重点记忆

> **Serverless = 管理责任上移；函数选 Lambda，容器选 Fargate，最高控制选 EC2。**

## 关联服务

Lambda、Fargate、ECS、EKS、SQS、EventBridge、API Gateway、DynamoDB、CloudWatch。

---
title: "AWS Lambda"
fullName: "AWS Lambda"
description: "事件发生时自动运行一段函数代码；不用管理服务器，并按调用次数和执行时长计费。"
service: "AWS Lambda"
category: compute
kind: service
lang: zh
topicKey: "AWS Lambda"
frequency: "考试频率 ⭐⭐⭐⭐⭐"
date: 2026-07-30
updated: 2026-07-31
tags: ["compute","AWS Lambda","AWS"]
notionId: 3a6964dc-ce4a-81f9-8d71-f17f423387eb
notionUrl: https://app.notion.com/p/3a6964dcce4a81f98d71f17f423387eb
notionUpdated: "2026-07-30T04:28:44.585Z"
---

## 基本信息

| 字段 | 内容 |
| --- | --- |
| 英文 | AWS Lambda |
| 全称 | AWS Lambda |
| 中文释义 | 无服务器函数计算 |
| 日文释义 | AWS Lambda（ラムダ） |
| 考试频率 | ⭐⭐⭐⭐⭐ |
| 易混淆 | EC2 / Fargate / AWS Batch |

## 一句话理解

事件发生时自动运行一段函数代码；不用管理服务器，并按调用次数和执行时长计费。

## 核心作用

- 处理事件驱动的短时任务。
- 自动扩缩并减少空闲服务器成本。
- 连接 S3、SQS、EventBridge、API Gateway、DynamoDB Streams 等服务。

## 为什么叫 FaaS

传统方式常把完整应用持续部署在 EC2 或容器中；Lambda 只需要上传一个函数及其依赖，由 AWS 在触发事件到来时运行。这个模式称为 **Function as a Service（FaaS，函数即服务）**。
- FaaS 是一种 Serverless 计算模式。
- Serverless 强调无需管理服务器；FaaS 强调部署和执行单位是函数。
- Lambda 是 FaaS 的 AWS 实现，但 Serverless 架构不只包含 Lambda。

## 工作原理

事件 / Trigger → Lambda 创建执行环境 → 运行函数 → 写入日志或调用下游 → 执行结束。
Serverless 不代表没有服务器，而是底层服务器由 AWS 管理。

## 使用场景

- S3 上传图片后自动压缩。
- SQS 到达订单消息后处理订单。
- EventBridge 事件触发自动化。
- API Gateway 接收请求后执行后端逻辑。
- 定时任务和轻量数据转换。

## Lambda + SQS

SQS 保存消息 → Lambda 的 Event Source Mapping 轮询队列 → Lambda 批量处理消息 → 成功后删除；失败时消息重新可见，达到重试阈值后可进入 DLQ。
### 注意事项
- Lambda Execution Role 必须允许读取 SQS、删除消息和写 CloudWatch Logs。
- 读取消息不等于立即删除，通常成功处理后才删除。
- 一次调用可能处理多条消息。
- Standard Queue 可能重复投递，消费者应具备幂等性。
- Visibility Timeout 应大于实际处理时间。

## 为什么最长 15 分钟

Lambda 面向短时、事件驱动任务。长时间批处理通常考虑 AWS Batch、ECS / Fargate 或 EC2。

## Cloud Practitioner 考点

- 无服务器、事件驱动、自动扩缩。
- 按请求和运行时间计费。
- 单次运行最长 15 分钟。
- 典型触发源与使用场景。

## SAA-C03 考点

- Execution Role 与 Resource-based Policy 的区别。
- Reserved / Provisioned Concurrency 的用途。
- SQS 批处理、失败重试、DLQ、幂等性和 Visibility Timeout。
- VPC 内访问资源时的网络影响。
- 同步调用、异步调用与事件源映射的差异。

## 常见误区

- Lambda 并非没有服务器。
- Lambda 不能完全替代 EC2。
- Lambda 不适合长期持续进程。
- 自动扩缩也可能受到并发配额限制。

## 面试高频问题

- 为什么不用 EC2 或 Fargate？
- 如何处理 Lambda 重试和重复消息？
- 如何降低冷启动影响？
- Lambda 访问 SQS、RDS 或 VPC 时要注意什么？

## 重点记忆

Lambda = 事件触发 + 短时函数 + 自动扩缩；SQS 场景要记住 Execution Role、批处理、幂等、Visibility Timeout 和 DLQ。

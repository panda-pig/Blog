---
title: "无服务器架构"
fullName: "Serverless Architecture"
description: "用托管、按需执行的服务减少服务器管理，同时保留应用层安全与可靠性责任。"
service: "Architecture"
category: architecture
kind: topic
lang: zh
topicKey: "无服务器架构"
frequency: "考试频率 ⭐⭐⭐⭐⭐"
date: 2026-07-30
updated: 2026-08-05
tags: ["Architecture","Serverless","Lambda"]
notionId: 3a6964dc-ce4a-8102-802a-c8a0a767c8f3
notionUrl: https://app.notion.com/p/3a6964dcce4a8102802ac8a0a767c8f3
notionUpdated: "2026-08-05T01:57:00.000Z"
---

## 基本信息

| 字段 | 内容 |
| --- | --- |
| 英文 | Serverless Architecture |
| 全称 | Serverless Architecture |
| 中文释义 | 无服务器架构 |
| 日文释义 | サーバーレスアーキテクチャ |
| 考试频率 | ⭐⭐⭐⭐⭐ |
| 易混淆 | 容器 / EC2 |

## 一句话理解

采用托管和按需执行服务减少服务器管理。

## 核心作用

- 把服务器维护、容量准备、扩缩和部分高可用工作交给 AWS。
- 让团队把注意力集中在业务逻辑和事件处理。
- 资源通常按需启用并随负载扩展，减少长期空闲容量。

## Serverless 不是什么

- 不代表底层不存在服务器，而是客户不需要直接配置和维护这些服务器。
- 不代表没有运维：客户仍负责代码、IAM、网络配置、数据、安全、监控、重试与成本。
- 不等于 Lambda；Fargate、DynamoDB、API Gateway 等也可用于无服务器架构。

## 典型组件

| 层次 | 常见服务 | 角色 |
| --- | --- | --- |
| 入口 | API Gateway / EventBridge | 接收 API 请求或事件 |
| 计算 | Lambda / Fargate | 运行函数或容器 |
| 消息 | SQS / SNS | 缓冲、解耦或广播 |
| 数据 | DynamoDB / S3 | 无服务器数据与对象存储 |
| 编排与监控 | Step Functions / CloudWatch | 工作流、日志、指标和告警 |

## Lambda + SQS 示例

SQS 保存消息 → Lambda Event Source Mapping 轮询并批量调用函数 → 成功后删除消息 → 失败后消息重新可见并重试 → 超过阈值后可进入 DLQ。
要点：事件源映射按至少一次方式处理，可能重复，所以函数应幂等；Visibility Timeout 应覆盖处理与重试需要。

## Lambda、Fargate 与 EC2

| 选择 | 更适合 | 客户主要管理 |
| --- | --- | --- |
| Lambda | 短时、事件驱动的函数 | 代码、依赖、权限和业务逻辑 |
| Fargate | 不想管服务器但需要运行容器 | 容器镜像、Task / Pod、网络与权限 |
| EC2 | 长期进程、特殊系统需求、最高控制 | 操作系统、补丁、运行时、容量与应用 |

## 工作中的应用场景

- S3 上传后触发 Lambda 处理图片。
- API Gateway + Lambda 构建轻量 API。
- EventBridge 触发自动化任务。
- SQS 缓冲订单，Lambda 按队列积压扩展消费。
- ECS / EKS on Fargate 运行无服务器容器。

## 工作原理

事件或请求到达 → 托管服务分配执行资源 → 代码或容器运行 → 写入数据 / 发布下游事件 → 释放或回收执行资源。

## Cloud Practitioner 考点

- Serverless = 无需预置或管理服务器。
- Lambda 按事件运行并自动扩缩。
- Fargate 是无服务器容器计算，仍需 ECS 或 EKS 负责容器编排。

## SAA-C03 考点

- 根据执行时长、运行模型和控制需求选择 Lambda / Fargate / EC2。
- 设计重试、幂等、DLQ、并发和可观察性。
- Serverless 仍受服务配额、超时和下游容量限制。
- 正确配置 Execution Role、Resource-based Policy 与网络访问。

## 常见误区

- Serverless 不等于零成本；高调用量、日志和数据传输仍会产生费用。
- 自动扩缩不保证下游数据库也能承受相同并发。
- Lambda 不适合长期持续进程；容器化工作负载不一定适合改写成函数。
- Fargate 不负责容器编排。

## 易混淆服务

Lambda vs Fargate vs EC2；Serverless vs Fully Managed；事件源映射 vs 同步 / 异步直接调用。

## 面试高频问题

- 为什么选择 Lambda 而不是 Fargate？
- 如何处理冷启动、并发激增和下游限流？
- Lambda 消费 SQS 时如何处理重复消息和部分失败？
- Serverless 架构怎样做本地调试和可观察性？

## 重点记忆

Serverless = 管理责任上移，不是服务器消失；选型看“函数、容器还是虚拟机”。

## 关联服务

AWS Lambda、AWS Fargate、Amazon ECS、Amazon EKS、Amazon SQS、Amazon EventBridge、API Gateway、DynamoDB、S3、CloudWatch。

## 官方参考

- [AWS Lambda 概览](https://docs.aws.amazon.com/lambda/latest/dg/welcome.html)
- [Lambda 与 SQS 集成](https://docs.aws.amazon.com/lambda/latest/dg/with-sqs.html)

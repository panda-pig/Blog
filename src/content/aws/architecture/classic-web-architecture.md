---
title: "经典 Web 架构：从单机到 Stateless Multi-AZ"
fullName: "Classic Web Architecture: From a Single Server to Stateless Multi-AZ"
description: "沿着单点、状态、容量、数据库和静态内容五条主线演进 AWS Web 架构。"
service: "AWS Architecture"
category: architecture
kind: topic
lang: zh
topicKey: "Classic Web Architecture"
frequency: "SAA 高频"
date: 2026-09-29
updated: 2026-09-29
tags: ["architecture", "multi-AZ", "stateless", "web"]
notionId: 3e9964dc-ce4a-8167-833b-ed8b7001bbed
notionUrl: https://app.notion.com/p/3e9964dcce4a8167833bed8b7001bbed
notionUpdated: "2026-09-28T04:06:59.327Z"
---

## 演进主线

单机把入口、应用、Session 和数据库集中在一个故障域。可靠架构逐步拆开这些职责：

1. Route 53 提供 DNS。
2. CloudFront 缓存静态与可缓存内容，并可在边缘配合 WAF。
3. ALB 分发 HTTP / HTTPS 流量。
4. Auto Scaling Group 在多个 AZ 维护无状态应用节点。
5. Session 外置到 ElastiCache 或 DynamoDB。
6. 静态文件与上传对象进入 S3。
7. RDS / Aurora 使用 Multi-AZ 处理数据库高可用，并按需要增加 Read Replica。
8. SQS、EventBridge 或 Step Functions 解耦后台任务和长流程。

## 为什么必须无状态

如果 Session、上传文件或任务状态只在本机，替换实例和横向扩展都会破坏用户体验。无状态不是没有状态，而是把状态放到所有节点都能可靠访问的托管存储中。

## 高可用不等于备份

Multi-AZ、健康检查与自动替换解决可用性；Snapshot、PITR、跨 Region 复制和恢复演练解决数据恢复。两者都需要，但目标不同。

## 常见误区

- 只有 ALB，没有多个 AZ 与健康的后端，不构成高可用。
- Sticky Session 可以暂时缓解会话问题，但不是无状态设计的替代。
- Read Replica 解决读扩展，不能替代 Multi-AZ 的同步故障转移。
- NAT Gateway 应按 AZ 设计，避免跨 AZ 依赖与额外数据路径。
- “Serverless”仍需设计配额、重试、幂等、可观察性与成本边界。

## 重点记忆

**先移除单点，再外置状态；每一层都独立考虑扩展、故障域、安全、可观察性和恢复。**

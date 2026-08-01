---
title: "AWS CloudTrail"
fullName: "AWS CloudTrail"
description: "记录账户中的 API 调用和活动，回答谁在何时对什么做了什么。"
service: "AWS CloudTrail"
category: monitoring
kind: service
lang: zh
topicKey: "AWS CloudTrail"
frequency: "考试频率 ⭐⭐⭐⭐⭐"
date: 2026-08-01
updated: 2026-08-01
tags: ["monitoring", "AWS CloudTrail", "AWS"]
notionId: 3a6964dc-ce4a-81ff-a189-fa2cb5f01fbc
notionUrl: https://app.notion.com/p/3a6964dcce4a81ffa189fa2cb5f01fbc
notionUpdated: "2026-07-31T08:18:14.118Z"
---

## 基本信息

| 字段 | 内容 |
| --- | --- |
| 英文 | AWS CloudTrail |
| 全称 | AWS CloudTrail |
| 中文 | 账户活动与 API 审计日志 |
| 日文 | AWS CloudTrail（API 操作履歴・監査ログ） |
| 考试频率 | ⭐⭐⭐⭐⭐ |
| 易混淆 | Amazon CloudWatch / AWS Config |
## 一句话理解
记录 AWS 账户中的 API 调用和活动，回答“谁在什么时候、从哪里、对什么做了什么”。
## 核心作用
- 记录控制台、CLI、SDK 和 AWS 服务发起的 API 活动。
- 事件包含调用者、时间、源 IP、区域、请求参数和结果等上下文。
- Trail 可把事件持续交付到 S3，并可集成 CloudWatch Logs、EventBridge。
- CloudTrail Insights 可识别异常的管理事件调用模式。
## 工作中的应用场景
- 调查谁删除了资源或修改了安全策略。
- 为安全调查和合规审计保留长期操作记录。
- 对关键 API 事件触发告警或自动响应。
## 工作原理
用户或服务调用 AWS API 后产生事件。Event history 提供近期管理事件查询；Trail 负责持续交付和长期保存。管理事件关注控制面操作，数据事件关注 S3 对象、Lambda 调用等资源级活动。
## Cloud Practitioner 考点
- CloudTrail = AWS API 活动与用户操作审计。
- 需要知道“谁做了什么”时优先考虑 CloudTrail。
## SAA-C03 考点
- S3 对象级 GetObject/DeleteObject 等通常需要启用 Data Events。
- 多账户审计可用组织 Trail 集中记录。
- 日志文件验证可帮助检测文件是否被修改或删除。
- Trail + S3 + CloudWatch Logs/EventBridge 构成长期留存、告警与响应链路。
## 常见误区
- CloudTrail 不主要监控 CPU、延迟和应用性能。
- 默认事件历史不等于完整长期留存；长期审计应配置 Trail。
- 管理事件与数据事件范围、费用和用途不同。
## 易混淆服务
- **CloudTrail**：API 活动和操作审计。
- **CloudWatch**：指标、日志、告警和可观测性。
- **Config**：资源配置历史与规则合规。
## 面试高频问题
- 如何调查是谁删除了一个生产资源？
- CloudTrail Management Events 与 Data Events 有什么区别？
- 如何设计跨账户集中审计日志？
## 重点记忆
**谁、何时、从哪里、调用什么 API → CloudTrail。**
## 关联服务
Amazon S3 / CloudWatch Logs / Amazon EventBridge / AWS Organizations / AWS KMS

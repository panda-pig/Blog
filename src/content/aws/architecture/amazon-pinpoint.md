---
title: "Amazon Pinpoint（历史概念）"
fullName: "Amazon Pinpoint"
description: "课程中的 Pinpoint 用 Segment、Campaign 与 Journey 组织多渠道客户触达和互动分析。"
service: "Amazon Pinpoint"
category: architecture
kind: service
lang: zh
topicKey: "Amazon Pinpoint"
frequency: "课程历史概念 ⭐⭐"
date: 2026-10-08
updated: 2026-10-08
tags: ["architecture","Amazon Pinpoint","AWS"]
notionId: 3f3964dc-ce4a-81f7-91b0-edd84cc2d484
notionUrl: https://app.notion.com/p/3f3964dcce4a81f791b0edd84cc2d484
notionUpdated: "2026-10-08T02:55:11.306Z"
---
## 基本信息

| 字段 | 内容 |
| --- | --- |
| 英文 / 全称 | Amazon Pinpoint |
| 中文 | 客户分群与多渠道营销触达（历史） |
| 日文 | 顧客セグメント・マルチチャネル施策（旧サービス） |
| 复习优先级 | 课程历史概念 ⭐⭐ |
| 易混淆 | Amazon SES / Amazon SNS / AWS End User Messaging |

## 一句话理解

课程中的 Pinpoint 用 Segment、Campaign 与 Journey 组织多渠道客户触达和互动分析。

## 核心整理

Pinpoint 已停止接受新客户并计划于 2026-10-30 结束支持；新项目按当前迁移指引和可用服务选型。

## 学习重点

- SES 负责应用邮件发送。
- SNS 负责 Topic 发布订阅和扇出。
- AWS End User Messaging 继续提供 SMS、Voice、Push 等消息 API。
- 客户分群、旅程和活动需要迁移到 Amazon Connect 等当前能力。

## 常见误区

- Pinpoint 结束支持不等于所有短信、推送 API 一起结束。
- Endpoint 在这里是客户或设备触达地址，不是 VPC Endpoint。

## 重点记忆

**SES 管邮件，SNS 管扇出，Pinpoint 历史上管受众与营销流程。**

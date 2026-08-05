---
title: "专业解决方案概览"
fullName: "Specialized Solutions Overview"
description: "按 API、业务通信、终端计算和 IoT 的实际对象选择服务。"
service: "Architecture"
category: architecture
kind: topic
lang: zh
topicKey: "专业解决方案概览"
frequency: "阶段性总结"
date: 2026-08-05
updated: 2026-08-05
tags: ["architecture", "specialized-solutions", "AWS"]
notionId: 3b3964dc-ce4a-8107-9461-e75f6bf2999e
notionUrl: https://app.notion.com/p/3b3964dcce4a81079461e75f6bf2999e
notionUpdated: "2026-08-05T01:57:00.000Z"
---

## 一句话理解

先确认题目要解决的是 API 开发、业务通信、应用、完整桌面、隔离浏览器还是设备连接，再选择服务。

## 选型地图

| 需求 | 首先想到 |
| --- | --- |
| 托管 GraphQL API 与实时订阅 | AWS AppSync |
| Web/Mobile 全栈开发与托管 | AWS Amplify |
| 电话、聊天、IVR、队列、座席与回拨 | Amazon Connect |
| 应用程序发送邮件 | Amazon SES |
| 流式交付单个桌面应用 | Amazon WorkSpaces Applications |
| 完整 Windows / Linux 云桌面 | Amazon WorkSpaces |
| 受控、隔离的浏览器会话 | Amazon WorkSpaces Secure Browser |
| 设备安全连接、遥测与双向命令 | AWS IoT Core |

## 高频辨析

- AppSync 专注 GraphQL；API Gateway 是 REST、HTTP、WebSocket 的通用 API 前门；Amplify 面向前端/移动团队的全栈交付体验。
- Connect 是联络中心，SES 是 Email，SNS 是 Pub/Sub 通知。
- Applications 给应用，WorkSpaces 给完整桌面，Secure Browser 只给隔离浏览器。
- IoT Core 管设备身份、连接和消息；长期存储与分析仍需下游服务。

## 重点记忆

**先问用户或设备最终获得什么，再看服务名称。**

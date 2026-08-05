---
title: "Amazon Connect"
fullName: "Amazon Connect"
description: "按需建立包含电话、聊天、IVR、队列、座席与回拨的云联络中心。"
service: "Amazon Connect"
category: architecture
kind: service
lang: zh
topicKey: "Amazon Connect"
frequency: "考试频率 ⭐⭐⭐"
date: 2026-08-05
updated: 2026-08-05
tags: ["architecture", "Amazon Connect", "AWS"]
notionId: 3b3964dc-ce4a-81ab-9581-f2bd320a457a
notionUrl: https://app.notion.com/p/3b3964dcce4a81ab9581f2bd320a457a
notionUpdated: "2026-08-05T01:59:00.000Z"
---

## 一句话理解

按需建立云联络中心，用 Contact Flow、IVR、队列和路由把电话或聊天连接到座席或自助流程。

## 核心作用

- 管理电话、聊天、外呼、回拨、队列和座席工作区。
- 根据技能和业务规则路由客户联络。
- 结合 Lambda 查询业务数据，Lex 理解自然语言，Polly 合成语音。

## 考试重点与误区

- IVR、Queue、Agent、Callback → Amazon Connect。
- SES 负责应用邮件；SNS 负责发布通知；Connect 是实时客户联络中心。
- CloudFront 只分发 Web 内容，不负责电话或聊天路由。
- 扩展业务流程时仍要保护客户数据、限制 Lambda 权限并监控联络流程。

## 重点记忆

**电话 / Chat + IVR + Queue + Agent + Callback → Amazon Connect。**

---
title: "Amazon SES"
fullName: "Amazon Simple Email Service"
description: "让应用通过 API 或 SMTP 发送事务性、通知性和营销邮件。"
service: "Amazon SES"
category: architecture
kind: service
lang: zh
topicKey: "Amazon SES"
frequency: "考试频率 ⭐⭐⭐"
date: 2026-08-05
updated: 2026-08-05
tags: ["architecture", "SES", "email", "AWS"]
notionId: 3b3964dc-ce4a-8146-aa99-cef193233027
notionUrl: https://app.notion.com/p/3b3964dcce4a8146aa99cef193233027
notionUpdated: "2026-08-05T01:59:00.000Z"
---

## 一句话理解

让应用通过 API 或 SMTP 大规模发送注册验证、密码重置、订单确认、通知和营销邮件。

## 核心作用

- 托管邮件发送、域名或邮箱身份验证、模板和发送统计。
- 处理退信、投诉、抑制列表与投递事件。
- 可组成 S3 → API Gateway → Lambda → SES 的无服务器联系表单。

## 考试重点与误区

- 应用程序发 Email → SES；向多个订阅者发布通知 → SNS；联络中心 → Connect。
- Lambda 可以调用 SES，但 Lambda 本身不是邮件系统。
- 生产设计要考虑 Sandbox、发送配额、SPF / DKIM / DMARC、信誉、防滥用和最小权限。

## 重点记忆

**应用程序发邮件 → Amazon SES。**

---
title: "Amazon Cognito"
fullName: "Amazon Cognito"
description: "为 Web 和移动应用提供注册、登录与访问控制。"
service: "Amazon Cognito"
category: security
kind: service
lang: zh
topicKey: "Amazon Cognito"
frequency: "考试频率 ⭐⭐⭐⭐"
date: 2026-07-31
updated: 2026-09-29
tags: ["security", "Amazon Cognito", "AWS"]
notionId: 3a6964dc-ce4a-8127-8404-f710d2103003
notionUrl: https://app.notion.com/p/3a6964dcce4a81278404f710d2103003
notionUpdated: "2026-09-28T07:51:39.985Z"
---

## 基本信息

| 字段 | 内容 |
| --- | --- |
| 英文 | Amazon Cognito |
| 全称 | Amazon Cognito |
| 中文释义 | 应用用户身份服务 |
| 日文释义 | アプリユーザー認証 |
| 考试频率 | ⭐⭐⭐⭐ |
| 易混淆 | IAM / IAM Identity Center |

## 一句话理解

为 Web 和移动应用提供注册、登录与访问控制。

## 阶段小结

- **核心定位**：为 Web 和移动应用提供注册、登录与访问控制。
- **考试频率**：⭐⭐⭐⭐
- **对比检查**：IAM / IAM Identity Center

## 重点记忆

Amazon Cognito = 应用用户身份服务

+## 本轮补充：User Pool 与 Identity Pool

- User Pool 是应用用户目录与 Authentication，完成 Sign-up / Sign-in 并返回 ID、Access、Refresh Token。
- Identity Pool 将 User Pool 或外部 IdP 身份换成受 IAM Role 限制的临时 AWS Credentials。
- Token 可由 API Gateway / ALB 验证，但不是 AWS Access Key。
- 面向员工的 Workforce Identity 通常使用 IAM Identity Center；Cognito 面向客户应用用户。

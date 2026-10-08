---
title: "AWS Directory Service"
fullName: "AWS Directory Service"
description: "根据目录位置和是否已有本地 AD，在 Managed Microsoft AD、AD Connector 与 Simple AD 之间选择。"
service: "AWS Directory Service"
category: security
kind: service
lang: zh
topicKey: "AWS Directory Service"
frequency: "考试频率 ⭐⭐⭐⭐"
date: 2026-10-08
updated: 2026-10-08
tags: ["security","AWS Directory Service","AWS"]
notionId: 3f3964dc-ce4a-8120-8453-e3e74bfb9001
notionUrl: https://app.notion.com/p/3f3964dcce4a81208453e3e74bfb9001
notionUpdated: "2026-10-08T00:20:24.463Z"
---
## 基本信息

| 字段 | 内容 |
| --- | --- |
| 英文 / 全称 | AWS Directory Service |
| 中文 | 托管目录与 Active Directory 集成 |
| 日文 | マネージドディレクトリと Active Directory 連携 |
| 复习优先级 | 考试频率 ⭐⭐⭐⭐ |
| 易混淆 | Managed Microsoft AD / AD Connector / Simple AD / IAM Identity Center |

## 一句话理解

根据目录位置和是否已有本地 AD，在 Managed Microsoft AD、AD Connector 与 Simple AD 之间选择。

## 核心整理

Managed Microsoft AD 是 AWS 中的真正 Microsoft AD；AD Connector 把认证代理到本地 AD；Simple AD 是独立兼容目录。

## 学习重点

- 云内需要真实 AD、管理用户并可建 Trust：Managed Microsoft AD。
- 复用本地凭证且不在 AWS 保存用户：AD Connector。
- 没有本地 AD，只需简单独立目录：Simple AD。
- 员工跨账户 SSO 仍由 IAM Identity Center 负责。

## 常见误区

- Directory Service 与 IAM Identity Center、Cognito 职责不同。
- Simple AD 不能与本地 AD 建 Trust。

## 重点记忆

**Cloud AD → Managed Microsoft AD；Proxy → AD Connector；Standalone → Simple AD。**

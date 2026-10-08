---
title: "AWS Firewall Manager"
fullName: "AWS Firewall Manager"
description: "在 AWS Organizations 的账户、OU 和资源范围内集中部署并持续维护安全策略。"
service: "AWS Firewall Manager"
category: security
kind: service
lang: zh
topicKey: "AWS Firewall Manager"
frequency: "考试频率 ⭐⭐⭐"
date: 2026-10-08
updated: 2026-10-08
tags: ["security","AWS Firewall Manager","AWS"]
notionId: 3f3964dc-ce4a-81ff-8fa7-e438933cef1b
notionUrl: https://app.notion.com/p/3f3964dcce4a81ff8fa7e438933cef1b
notionUpdated: "2026-10-08T01:27:32.796Z"
---
## 基本信息

| 字段 | 内容 |
| --- | --- |
| 英文 / 全称 | AWS Firewall Manager |
| 中文 | 多账户安全策略集中管理 |
| 日文 | 複数アカウントのセキュリティポリシー一元管理 |
| 复习优先级 | 考试频率 ⭐⭐⭐ |
| 易混淆 | AWS WAF / Shield / Security Group / Network Firewall |

## 一句话理解

在 AWS Organizations 的账户、OU 和资源范围内集中部署并持续维护安全策略。

## 核心整理

Firewall Manager 是治理层，可集中管理 WAF、Shield Advanced、Security Group、Network Firewall 与 DNS Firewall 策略。

## 学习重点

- 新资源可自动纳入符合范围的策略。
- 检查管理员账户、Policy Scope、Region 和资源类型。
- 具体 WAF 规则由 WAF 定义。
- 实际网络包检查由 Network Firewall 执行。

## 常见误区

- Firewall Manager 不是 Network Firewall。
- 集中管理不代表单个资源的路由和端点已经正确。

## 重点记忆

**WAF 定规则，Network Firewall 查流量，Firewall Manager 跨账户铺策略。**

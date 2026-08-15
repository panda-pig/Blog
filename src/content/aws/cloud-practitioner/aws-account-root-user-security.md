---
title: "AWS 账户与 Root User 安全"
fullName: "AWS Account and AWS Account Root User Security"
description: "Root User 用于建立和恢复账户，不应作为日常管理员身份使用。"
service: "Cloud Foundations"
category: cloud-practitioner
kind: topic
lang: zh
topicKey: "AWS 账户与 Root User 安全"
frequency: "考试频率 ⭐⭐⭐⭐⭐"
date: 2026-08-13
updated: 2026-08-15
tags: ["AWS Account", "Root User", "Security", "AWS"]
notionId: 3bb964dc-ce4a-81c3-9d23-dd3deb0dda3e
notionUrl: https://app.notion.com/p/3bb964dcce4a81c39d23dd3deb0dda3e
notionUpdated: "2026-08-13T08:20:08.794Z"
---

## 基本信息

| 字段 | 内容 |
| --- | --- |
| 英文 | AWS Account & Root User Security |
| 全称 | AWS Account and AWS Account Root User Security |
| 中文释义 | AWS 账户与根用户安全 |
| 日文释义 | AWS アカウントとルートユーザーのセキュリティ |
| 考试频率 | ⭐⭐⭐⭐⭐ |
| 易混淆 | Root User / IAM User / IAM Identity Center |

## 一句话理解

注册邮箱创建的是拥有账户最高权限的 **Root User**。它用于建立、恢复账户和少数特殊任务，不应作为日常管理员身份使用。

## Root User 是什么

- 使用创建 AWS Account 时的邮箱和密码登录。
- 拥有账户内所有服务与资源的完整访问能力，并能执行部分 Root-only Tasks。
- 不是 IAM User，不能当成普通管理员用户管理。
- Root、管理员 IAM User 与普通 IAM User 可以属于同一个 Account；它们是不同身份，不是不同账户。
- IAM User 创建的 EBS 等资源归属于 Account 的相应 Region / AZ，而不是创建者私人所有。

## 安全基线

1. 创建账户后立即启用 MFA，并为关键账户准备受保护的备用设备与恢复流程。
2. 使用强且唯一的密码，保护注册邮箱、电话、付款方式等恢复渠道。
3. 不创建 Root Access Key；若已有且不需要，应删除。
4. 不共享 Root 密码、MFA、Access Key 或恢复信息。
5. 日常人员访问优先 IAM Identity Center / Federation，工作负载使用 IAM Role 与临时凭证。
6. 企业账户使用受控群组邮箱、多人审批、紧急访问与审计流程。
7. 配置 Billing、Budget 与 Free Tier 监控；Credits 不是预算上限。

## MFA 选择

| 方式 | 特点 | 注意事项 |
| --- | --- | --- |
| Passkey / Security Key | FIDO 公钥认证，抗钓鱼 | 优先考虑并准备备用设备 |
| Authenticator App / Virtual MFA | 扫码绑定并生成 TOTP | QR Code / Secret Key 是敏感配置 |
| Hardware TOTP Token | 实体令牌生成一次性 Code | 防丢失并设计恢复方案 |

当前 Root User 最多可注册 8 个受支持的 MFA Device。IAM Account Password Policy 不控制 Root Password；Root Password 通过账户安全凭证与恢复流程管理。

## 账户、身份与会话

- AWS Account 是资源与账单边界。
- Root User、IAM User、Role、Identity Center 是访问身份。
- Console Multi-session 只是并行保存登录上下文，不创建账户、不复制资源、不合并权限。
- Account Alias 只是 IAM User 登录时可替代 Account ID 的唯一别名。
- 谁能查看资源取决于 Account、Region、资源作用域与 IAM Policy。

## 高频误区

- Root User 不等于拥有 AdministratorAccess 的 IAM User。
- IAM User 不等于 AWS Account。
- Free account plan 不等于所有 AWS 服务永久免费。
- Basic Support 是支持层级，不是账户计费计划。
- Credits 不能替代 Budgets 和 Billing Alerts。
- MFA QR Code 是初次绑定的敏感信息，不是每次登录都扫描的登录码。

## 重点记忆

**Account 是资源与账单边界；Root、User、Role 是身份；Session 是登录上下文；Root 只做特殊任务，日常访问遵循最小权限。**

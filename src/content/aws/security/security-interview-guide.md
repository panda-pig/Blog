---
title: "AWS Security 面试速查"
fullName: "AWS Security Interview Guide"
description: "用身份、网络、数据、检测、响应和责任共担框架回答 AWS 安全面试题。"
service: "AWS Security"
category: security
kind: topic
lang: zh
topicKey: "AWS Security Interview Guide"
frequency: "面试高频"
date: 2026-08-25
updated: 2026-08-25
tags: ["security", "interview", "IAM", "AWS"]
notionId: 3a6964dc-ce4a-819d-888a-ff9320ed7cf0
notionUrl: https://app.notion.com/p/3a6964dcce4a819d888aff9320ed7cf0
notionUpdated: "2026-08-25T07:25:32.550Z"
---

## 回答框架

先说明 **资产与风险 → 身份与最小权限 → 网络边界 → 数据保护 → 日志检测 → 响应恢复**，最后补充责任共担、自动化与验证方式。

## 高频问题速答

| 问题 | 回答重点 |
| --- | --- |
| Authentication vs Authorization | 前者确认身份，后者决定权限；MFA 管认证，Policy 管授权 |
| Role 为什么优于长期 Key | STS 临时凭证有到期时间，减少泄露、复制与忘记轮换风险 |
| Trust vs Permissions Policy | Trust 决定谁能 AssumeRole；Permissions 决定代入后能做什么 |
| 多账户员工访问 | Organizations + IAM Identity Center + 企业 IdP + Permission Set |
| KMS / Secrets Manager / ACM | 加密密钥 / Secret 与轮换 / TLS 证书 |
| 互联网 Web 应用保护 | CloudFront、WAF、Shield、ALB、多 AZ、Auto Scaling、SG、ACM |
| GuardDuty / Inspector / Detective / Security Hub | 威胁检测 / 漏洞扫描 / 调查 / Finding 汇总 |
| S3 敏感数据 | Macie + Block Public Access + Policy + KMS + CloudTrail Data Events |
| 不开放 SSH 管理 EC2 | Systems Manager Session Manager + Instance Role + 日志 |
| Shared Responsibility | AWS 负责 Security of the Cloud；客户负责 Security in the Cloud |
| 新账户加固 | Root MFA、无 Root Key、保护恢复渠道、SSO/Role、Billing/Budgets、CloudTrail |
| Access Denied 排查 | 确认 Principal/Account/Region，从 Action 入手，查 Allow、Explicit Deny、Boundary、SCP、Condition |
| 安全凭证选择 | 人员用 Identity Center/Federation；Workload 用 Role；长期 Key 仅兼容场景 |
| 最小权限审查 | Report 盘点、Advisor 看使用、Analyzer 查路径、Simulator 验证、CloudTrail 取证 |

## 项目回答模板

1. 业务资产、信任边界和威胁是什么。
2. 采用了哪些预防、检测与响应控制。
3. 服务之间如何分工，为什么这样选。
4. 如何收集审计证据、验证告警和恢复。
5. 最终降低了什么风险，下一步如何持续改进。

## 重点记忆

**先讲风险和边界，再讲最小权限、分层防御、可追溯性与恢复；服务名只是方案中的控制点。**

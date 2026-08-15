---
title: "安全与合规"
fullName: "Security and Compliance"
description: "汇总责任共担、IAM、数据保护、安全检测、审计证据和多账户治理。"
service: "CLF-C02"
category: cloud-practitioner
kind: topic
lang: zh
topicKey: "安全与合规"
frequency: "考试频率 ★★★★★"
date: 2026-08-13
updated: 2026-08-15
tags: ["Security", "Compliance", "CLF-C02", "AWS"]
notionId: 3a6964dc-ce4a-8119-86e2-cb66c29308cd
notionUrl: https://app.notion.com/p/3a6964dcce4a811986e2cb66c29308cd
notionUpdated: "2026-08-13T08:35:26.054Z"
---

## 必须掌握

- Shared Responsibility：AWS 负责 Security **of** the Cloud；客户负责 Security **in** the Cloud，边界随服务模型变化。
- IAM 默认拒绝，适用的显式 Deny 优先；工作负载优先 Role 与临时凭证。
- Root User 只做 Root-only Tasks 并启用 MFA。
- Group 只能包含 User，不能嵌套；一个 User 可加入多个 Group。
- Managed Policy 可附加给 User、Group、Role；Inline Policy 可嵌入单个 User、Group、Role。
- Identity-based Policy 不写 Principal；Resource-based / Trust Policy 才常见 Principal。
- IAM Password Policy 不控制 Root Password、Access Key 或 Identity Center Password。
- 加密不替代授权、审计与备份。

## 身份与数据保护

| 需求 | 首先想到 | 不要混淆 |
| --- | --- | --- |
| 员工多账户统一登录 | IAM Identity Center | 不是应用顾客登录 |
| Web / Mobile 顾客注册登录 | Amazon Cognito | 不是员工 SSO |
| 工作负载访问 AWS | IAM Role | 避免长期 Access Key |
| 创建和控制加密密钥 | AWS KMS | 不是保存数据库密码 |
| 密码、API Key、自动轮换 | Secrets Manager | 可配合 KMS |
| 公有 TLS 证书 | ACM | 不选 KMS |
| S3 敏感数据发现 | Amazon Macie | 不是威胁检测 |

## 防护、检测与调查

| 需求 | 服务 |
| --- | --- |
| SQL 注入、XSS 等 Web 请求过滤 | AWS WAF |
| DDoS 防护 | AWS Shield |
| 基于活动与威胁情报检测异常 | Amazon GuardDuty |
| EC2、ECR、Lambda 漏洞评估 | Amazon Inspector |
| S3 敏感数据发现 | Amazon Macie |
| 调查攻击路径与时间线 | Amazon Detective |
| 汇总安全发现与标准检查 | AWS Security Hub |

## 运行监控、审计与合规

- CloudWatch：Metric、Log、Alarm，回答系统现在运行得怎样。
- CloudTrail：API Event，回答谁在何时做了什么。
- AWS Config：资源配置历史与规则合规。
- AWS Artifact：下载 AWS 的 SOC、ISO、PCI 报告与协议。
- Audit Manager：按审计框架收集客户环境证据。
- AWS Health Dashboard：查看 AWS 事件是否影响当前账户资源。

## 多账户治理

Organizations 管理 Account、OU、SCP 与合并计费；SCP 是权限护栏，不独立授权。Control Tower 建立 Landing Zone、Account Factory 与 Controls。Service Catalog 发布企业批准产品供受控自助部署。

## 考前速记

**身份看 IAM / Identity Center / Cognito；密钥看 KMS / Secrets / ACM；防护看 WAF / Shield；检测调查看 GuardDuty / Inspector / Macie / Detective / Security Hub；监控审计合规看 CloudWatch / CloudTrail / Config / Artifact / Audit Manager。**

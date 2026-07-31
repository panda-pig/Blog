---
title: "Inspector vs GuardDuty vs Macie vs Detective vs Security Hub"
fullName: "Inspector vs GuardDuty vs Macie vs Detective vs Security Hub"
description: "漏洞扫描、威胁检测、敏感数据发现、事件调查与统一汇总，各自负责安全流程中的不同阶段。"
service: "AWS Compare"
category: compare
kind: compare
lang: zh
topicKey: "Inspector vs GuardDuty vs Macie vs Detective vs Security Hub"
frequency: "高频对比"
date: 2026-07-31
updated: 2026-07-31
tags: ["compare", "Inspector vs GuardDuty vs Macie vs Detective vs Security Hub", "AWS"]
notionId: 3ae964dc-ce4a-81e7-b1fb-e71132a8c36d
notionUrl: https://app.notion.com/p/3ae964dcce4a81e7b1fbe71132a8c36d
notionUpdated: "2026-07-31T04:09:10.477Z"
---

## 一句话结论

- **Amazon Inspector**：扫描 EC2、ECR 镜像和 Lambda 的软件漏洞。
- **Amazon GuardDuty**：持续检测账户、网络和工作负载中的可疑行为。
- **Amazon Macie**：发现 S3 中的 PII 等敏感数据。
- **Amazon Detective**：调查事件根因、关系和攻击路径。
- **AWS Security Hub**：汇总并标准化多个安全服务的 Findings。

## 核心差异

| 服务 | 核心对象 | 典型关键词 | 主要输出 |
| --- | --- | --- | --- |
| Inspector | EC2、ECR、Lambda | CVE、软件包、漏洞扫描 | 漏洞 Finding 与修复建议 |
| GuardDuty | 账户、网络、工作负载行为 | 恶意 IP、异常 API、威胁情报 | 威胁 Finding |
| Macie | Amazon S3 数据 | PII、敏感数据、数据发现 | 敏感数据 Finding |
| Detective | 安全事件上下文 | 根因、时间线、关系图 | 调查线索与影响范围 |
| Security Hub | 多来源安全结果 | 聚合、标准化、合规检查 | 统一安全视图与 Insights |

## 组合流程

Inspector / GuardDuty / Macie 发现问题 → Security Hub 集中汇总与排序 → Detective 深入调查 → EventBridge 触发自动响应。

## 常见陷阱

- Inspector 不是行为威胁检测服务。
- GuardDuty 不负责修补漏洞。
- Macie 重点关注 S3 敏感数据。
- Detective 用于调查，不是 Findings 汇总中心。

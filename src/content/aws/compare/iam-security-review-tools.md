---
title: "Credentials Report・Access Advisor・Access Analyzer・Policy Simulator 对比"
fullName: "IAM Credentials Report, Access Advisor, Access Analyzer and Policy Simulator"
description: "分清凭证盘点、使用时间、访问路径分析与请求授权模拟。"
service: "AWS Compare"
category: compare
kind: compare
lang: zh
topicKey: "IAM Security Review Tools"
frequency: "高频对比"
date: 2026-08-25
updated: 2026-08-25
tags: ["compare", "IAM", "Security", "AWS"]
notionId: 3c7964dc-ce4a-81ef-83a8-e4f919ae927a
notionUrl: https://app.notion.com/p/3c7964dcce4a81ef83a8e4f919ae927a
notionUpdated: "2026-08-25T06:00:03.628Z"
---

## 一句话结论

**Credentials Report 看 IAM User 的凭证状态；Access Advisor 看允许访问的服务 / 操作与最后访问时间；Access Analyzer 分析访问路径、未使用权限和 Policy；Policy Simulator 模拟具体请求。**

## 核心对比

| 工具 | 主要范围 | 主要回答 | 不能替代 |
| --- | --- | --- | --- |
| IAM Credentials Report | Account 内 IAM Users | Password、Access Key、MFA 状态如何？ | 不分析资源共享，也不判断某个 API 是否允许 |
| IAM Access Advisor / Last Accessed | User、Group、Role、Policy 等 IAM 实体 | 允许访问什么，最后何时访问？ | 不是完整实时审计日志 |
| IAM Access Analyzer | Account / Organization 的资源、身份和 Policy | 是否存在外部、内部、未使用访问或 Policy 风险？ | 不等于逐请求模拟或漏洞扫描 |
| IAM Policy Simulator | 指定 Principal、Action、Resource、Context | 该请求会 Allow 还是 Deny？ | 不提供长期趋势或凭证清单 |

## 场景速判

- 检查所有 IAM User 是否启用 MFA、Key 是否长期未轮换 → **Credentials Report**。
- 判断某个 Role 的 S3 权限是否长期未使用 → **Access Advisor / Last Accessed**。
- 发现 S3 Bucket 或 Trust Policy 是否向外部开放 → **Access Analyzer**。
- 上线前验证某 Principal 对某 ARN 的操作 → **Policy Simulator**。
- 依据真实活动生成更精细的 Policy → **Access Analyzer Policy Generation + CloudTrail**。

## 易错判断

- Credentials Report 不会列出每个 Role 的临时凭证。
- Last Accessed 显示未使用，不代表可以立刻删除；还要考虑统计范围、低频任务与应急场景。
- Access Analyzer Finding 可能是预期共享，不一定代表攻击。
- Policy Simulator 不能替代记录真实 API 活动的 CloudTrail。

## 最小权限闭环

1. Credentials Report 找出闲置、未轮换或缺少 MFA 的长期凭证。
2. Last Accessed Information 识别低频或未使用的 Service / Action 权限。
3. Access Analyzer 检查外部、内部、未使用访问与 Policy 问题。
4. 修改 Policy 后用 Policy Simulator 验证关键请求。
5. 用 CloudTrail 观察真实调用并持续复核。

## 重点记忆

**凭证盘点看 Report；使用时间看 Advisor；访问路径和策略风险看 Analyzer；请求结果看 Simulator；真实调用看 CloudTrail。**

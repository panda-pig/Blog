---
title: "IAM Access Analyzer"
fullName: "AWS Identity and Access Management Access Analyzer"
description: "分析外部访问、策略和未使用权限，帮助落实最小权限。"
service: "IAM Access Analyzer"
category: security
kind: service
lang: zh
topicKey: "IAM Access Analyzer"
frequency: "考试频率 ⭐⭐⭐⭐"
date: 2026-08-01
updated: 2026-08-25
tags: ["security", "IAM Access Analyzer", "AWS"]
notionId: 3ae964dc-ce4a-8137-ab78-e4c595870913
notionUrl: https://app.notion.com/p/3ae964dcce4a8137ab78e4c595870913
notionUpdated: "2026-08-25T06:01:20.017Z"
---

## 基本信息

| 字段 | 内容 |
| --- | --- |
| 英文 | IAM Access Analyzer |
| 全称 | AWS Identity and Access Management Access Analyzer |
| 中文 | 访问权限分析器 |
| 日文 | IAM Access Analyzer（外部アクセス・未使用アクセスの分析） |
| 考试频率 | ⭐⭐⭐⭐ |
| 易混淆 | AWS Trusted Advisor / IAM Policy Simulator |
## 一句话理解
分析资源和策略，发现意外的外部访问、未使用访问或过宽权限，帮助落实最小权限。
## 核心作用
- 分析资源策略和信任关系，识别向组织、账户之外或公众开放的访问路径。
- 验证 IAM 策略并提供语法、安全性和最佳实践检查。
- 根据访问活动协助生成更精细的策略，并识别未使用的访问。
## 工作中的应用场景
- 检查 S3 Bucket、KMS Key、IAM Role 等是否允许外部账户访问。
- 上线前验证策略是否过宽或存在错误。
- 根据实际使用记录收紧角色权限。
## 工作原理
使用策略逻辑分析资源策略与信任关系并生成 Findings；管理员确认访问是否符合预期，再归档发现或修正策略。
## Cloud Practitioner 考点
- 发现资源是否被外部账户或公众访问 → IAM Access Analyzer。
## SAA-C03 考点
- 跨账户资源策略或 Role 信任策略的外部访问分析 → Access Analyzer。
- 它帮助实现最小权限，但不替代策略设计和审批。
## 常见误区
- Policy Simulator 测试请求是否允许；Access Analyzer 分析策略和访问路径。
- Trusted Advisor 给出多类别最佳实践建议；Access Analyzer 专注权限。
- Finding 不一定代表恶意访问，也可能是业务预期的共享关系。
## 易混淆服务
- **IAM Access Analyzer**：外部访问、策略验证、未使用访问与最小权限。
- **IAM Policy Simulator**：模拟某主体执行某操作是否允许。
- **Trusted Advisor**：账户级多类别最佳实践建议。
## 面试高频问题
- 如何发现 S3 Bucket 或 IAM Role 被意外共享给外部账户？
- Access Analyzer 与 Policy Simulator 有什么区别？
## 重点记忆
**谁能从外部访问？策略是否过宽？→ IAM Access Analyzer。**
## 关联服务
AWS IAM / Amazon S3 / AWS KMS / AWS Organizations / AWS CloudTrail

## 当前能力范围

- **External access findings**：识别公开访问或 Organization / Account 之外的访问路径。
- **Internal access findings**：在组织内部分析指定关键资源的访问关系。
- **Unused access findings**：发现长期未使用的 Role、Access Key、Password、Service 或 Action 权限。
- **Policy validation**：检查语法错误、安全警告与最佳实践建议。
- **Policy generation**：根据 CloudTrail 中的实际活动生成更精细的 Identity-based Policy 草案。

Finding 不一定表示攻击，也可能是业务预期的公开或跨账户共享。应先确认业务意图，再归档 Finding 或收紧 Policy。

## 与相邻工具的边界

Credentials Report 盘点 IAM User 凭证；Access Advisor / Last Accessed 查看身份或 Policy 的使用时间；Access Analyzer 分析访问路径、未使用权限与 Policy；Policy Simulator 模拟具体请求；CloudTrail 记录实际 API 活动。

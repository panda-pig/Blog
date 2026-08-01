---
title: "AWS Organizations"
fullName: "AWS Organizations"
description: "集中管理 AWS 账户、OU、SCP 权限边界和合并计费。"
service: "AWS Organizations"
category: security
kind: service
lang: zh
topicKey: "AWS Organizations"
frequency: "考试频率 ⭐⭐⭐⭐⭐"
date: 2026-08-01
updated: 2026-08-01
tags: ["security", "AWS Organizations", "AWS"]
notionId: 3a6964dc-ce4a-811f-8285-dd7360095a9f
notionUrl: https://app.notion.com/p/3a6964dcce4a811f8285dd7360095a9f
notionUpdated: "2026-07-31T08:22:49.155Z"
---

## 基本信息

| 字段 | 内容 |
| --- | --- |
| 英文 | AWS Organizations |
| 全称 | AWS Organizations |
| 中文 | 多账户集中管理 |
| 日文 | AWS Organizations（複数アカウントの一元管理） |
| 考试频率 | ⭐⭐⭐⭐⭐ |
| 易混淆 | AWS Control Tower / AWS IAM |
## 一句话理解
集中管理多个 AWS 账户、组织单位、策略边界和合并计费。
## 核心作用
- 通过一个 Organization 管理多个成员账户。
- 使用 Organizational Unit（OU）按业务、环境或安全边界分组。
- 使用 Service Control Policy（SCP）设置账户可用权限的最高边界。
- 使用 Consolidated Billing 汇总账单并共享部分规模优惠。
## 工作中的应用场景
- 将生产、开发、安全与日志账户隔离。
- 对某个 OU 禁止离开组织或关闭安全服务。
- 集中结算多个账户费用。
## 工作原理
管理账户创建组织并邀请或创建成员账户；账户进入 OU；SCP 从 Root/OU/Account 继承并参与权限评估。SCP 只限制最大可用权限，实际操作仍需 IAM Policy 等明确 Allow。
## Cloud Practitioner 考点
- Organizations = 多账户集中管理 + OU + SCP + 合并计费。
## SAA-C03 考点
- SCP 不授予权限；它定义权限上限，显式 Deny 优先。
- 管理账户不受成员账户 SCP 的相同方式约束，应严格保护。
- 多账户隔离有助于安全边界、账单和日志集中化。
## 常见误区
- SCP 不是 IAM Policy 的替代品。
- Consolidated Billing 不会合并各账户的资源和登录身份。
- OU 是逻辑分组，不是单独 AWS 账户。
## 易混淆服务
- **Organizations**：账户、OU、SCP、合并计费。
- **Control Tower**：在 Organizations 之上建立 Landing Zone、Account Factory 和 Controls。
- **IAM**：账户内的身份和权限。
## 面试高频问题
- SCP 为什么不能直接授予 S3 访问权限？
- 如何设计生产、开发、安全和日志账户结构？
- Organizations 与 Control Tower 如何分工？
## 重点记忆
**Organizations 管账户和权限边界；SCP 只能限制，不能授权。**
## 关联服务
AWS Control Tower / AWS IAM / AWS IAM Identity Center / AWS CloudTrail / AWS Config

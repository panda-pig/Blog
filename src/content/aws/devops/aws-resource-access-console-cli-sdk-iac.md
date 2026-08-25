---
title: "AWS 资源交互方式｜Console・CLI・SDK・IaC"
fullName: "AWS Management Console / AWS CLI / AWS SDK / Infrastructure as Code"
description: "Console、CLI、SDK 和 IaC 都调用 AWS API，区别在操作入口、凭证来源和自动化层级。"
service: "AWS Resource Interaction Methods"
category: devops
kind: service
lang: zh
topicKey: "AWS 资源交互方式｜Console・CLI・SDK・IaC"
frequency: "考试频率 ⭐⭐⭐⭐⭐"
date: 2026-07-30
updated: 2026-08-25
tags: ["devops", "AWS CLI", "AWS SDK", "IaC"]
notionId: 3a6964dc-ce4a-818b-a203-e86b13e2eada
notionUrl: https://app.notion.com/p/3a6964dcce4a818ba203e86b13e2eada
notionUpdated: "2026-08-25T06:01:23.511Z"
---

## 基本信息

| 字段 | 内容 |
| --- | --- |
| 英文 | AWS Resource Interaction Methods |
| 全称 | AWS Management Console / AWS CLI / AWS SDK / Infrastructure as Code |
| 中文释义 | AWS 资源交互方式 |
| 日文释义 | AWS リソースの操作方法 |
| 考试频率 | ⭐⭐⭐⭐⭐ |
| 易混淆 | Console / CLI / SDK / IaC / Region Selector |

## 一句话理解

**Console、CLI、SDK 与 IaC 最终都调用 AWS API；区别在于由人点击、命令脚本、应用代码还是声明式模板发起。**

## 四种方式

| 方式 | 工作方式 | 典型场景 | 常见凭证 |
| --- | --- | --- | --- |
| Console | Web 图形界面 | 探索、可视化、一次性操作 | Password + MFA 或 SSO Session |
| CLI | 命令与 Shell Script | 批量和例行自动化 | Identity Center、Role、Profile |
| SDK | Application Code | 业务流程内调用 AWS | Credential Provider Chain |
| CloudFormation / IaC | 声明期望状态 | 一致、可重复、多环境部署 | 调用者权限或 Service Role |

## Region Selector 与资源可见性

Region Selector 决定当前 Console 的区域上下文。Route 53 是 Global 视图，EC2 按 Region 显示，WAF Scope 取决于保护对象。区域级资源“消失”时，按 **Account → Identity → Region → Permission → Filter / State** 排查。

Multi-session 只并行保存登录上下文，不创建新 Account、不复制资源、不合并权限。每个窗口都要确认 Account ID / Alias、Identity 与 Region。

## Local CLI、CloudShell 与 aws configure

| 对象 | 本质 | 权限来源 |
| --- | --- | --- |
| Local CLI | 本地安装的命令工具 | Identity Center、AssumeRole、Profile、环境或 Workload Role |
| CloudShell | Console 内预配置 Shell | 当前 Console 身份的临时轮换凭证 |
| `aws configure` | 保存 CLI Profile 配置 | 不授予权限，只保存凭证、Region、输出格式 |

`aws iam list-users` 需要 `iam:ListUsers`。能成功配置 CLI 不代表 API 调用有权限。CLI 与 CloudShell 的入口不同，但都经过相同的 IAM 评估。

## Access Key 边界

Access Key ID 标识凭证，Secret Access Key 用于签名，临时凭证还包含 Session Token 并会到期。CLI / SDK 不等于长期 Key；人员优先 Identity Center，Workload 优先 Role，Secret 不进代码。

## SAA-C03 速判

- 多账户、多 Region、多环境重复建设 → IaC。
- EC2 应用访问 S3 → SDK + Instance Role。
- 开发者本地批量管理 → CLI + Identity Center。
- 找不到区域资源 → 先核对 Account、Region 与 Describe 权限。
- CloudFormation Template 不保存长期 Secret，部署权限遵循最小权限。

## 重点记忆

**Session 不是 Account；Console 靠点、CLI 靠命令、SDK 靠代码、IaC 靠模板；人员用 SSO，工作负载用 Role。**

## Role 与 Credential Provider Chain

在 EC2 上运行的 CLI / SDK 应通过 Instance Profile 使用 IAM Role，并从 IMDS 自动获取和轮换临时凭证。不要在实例中执行 aws configure 写入长期 Secret。把 Role 关联给服务的操作通常需要受限的 iam:PassRole；它与当前用户自己 AssumeRole 不同。

## CloudShell 的边界

CloudShell 基于当前 Console 身份获取临时凭证，预装 AWS CLI，并提供按 Region 分离的持久 HOME 存储。单条命令可用 --region 覆盖默认 Region，但任何 Region 选择都不会绕过 IAM Policy。适合临时管理和排障，不应被当作独立身份或更高权限入口。

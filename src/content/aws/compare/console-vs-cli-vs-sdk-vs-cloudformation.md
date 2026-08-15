---
title: "Console vs Local CLI vs CloudShell vs SDK vs CloudFormation"
fullName: "Console, Local CLI, CloudShell, SDK and CloudFormation"
description: "比较图形操作、本地命令、浏览器 Shell、应用代码与声明式基础设施。"
service: "AWS Compare"
category: compare
kind: compare
lang: zh
topicKey: "Console vs CLI vs SDK vs CloudFormation"
frequency: "高频对比"
date: 2026-07-30
updated: 2026-08-15
tags: ["compare", "Console", "CLI", "SDK", "CloudFormation"]
notionId: 3a6964dc-ce4a-8171-a18c-ca9aeea29add
notionUrl: https://app.notion.com/p/3a6964dcce4a8171a18cca9aeea29add
notionUpdated: "2026-08-13T08:38:08.489Z"
---

## 一句话结论

Console 人工点，Local CLI 本地命令，CloudShell 浏览器命令，SDK 应用代码，CloudFormation 模板声明基础设施。

## 对比表

| 维度 | Console | Local CLI / CloudShell | SDK | CloudFormation |
| --- | --- | --- | --- | --- |
| 主要形式 | Web UI | Command / Shell Script | Application Code | YAML / JSON |
| 最适合 | 探索、一次性操作 | 例行与批量任务 | 应用集成 | 一致、可重复部署 |
| 凭证 | Password + MFA / SSO | Identity Center、Role、Profile | Credential Provider Chain | 调用者或 Service Role |
| 主要风险 | 选错 Account / Region | 批量误操作、长期 Key | 硬编码 Secret | 模板权限与变更范围 |

## Local CLI 与 CloudShell

Local CLI 需要自行安装，凭证来自 Identity Center、AssumeRole、Profile、环境或 Workload Role。CloudShell 已预安装 CLI，并自动使用当前 Console 身份的临时轮换凭证；它不会获得更高权限。

`aws configure` 只保存 Profile 的 Access Key、Default Region 与 Output Format，不创建身份或权限。`aws iam list-users` 仍需要 `iam:ListUsers`。

## Access Key 三个字段

| 字段 | 作用 |
| --- | --- |
| Access Key ID | 标识一组 API 凭证 |
| Secret Access Key | 参与请求签名，必须保密 |
| Session Token | 临时凭证的额外组成部分，会到期 |

CLI / SDK 是交互方式，不是凭证类型。长期与临时凭证都可能包含 Access Key ID 与 Secret，临时凭证还包含 Session Token。

## 高频速判

- Shell Script 批量处理 → CLI。
- Python / Java 应用访问 S3 → SDK + Role。
- 跨账户、跨 Region 重复部署 → CloudFormation。
- 本地开发者命令操作 → Local CLI + Identity Center。
- Console 中直接运行命令 → CloudShell。
- Secret 泄露 → 撤销 / 轮换并调查 CloudTrail，不只是删除代码。

## Declarative 与 Imperative

CloudFormation 是 Declarative，描述“我要什么”；CLI Script 通常是 Imperative，描述“依次怎么做”。

## 记忆口诀

**Console 靠点，CLI 靠命令，SDK 靠代码，CloudFormation 靠模板；人员用 SSO，工作负载用 Role，Secret 不进代码。**

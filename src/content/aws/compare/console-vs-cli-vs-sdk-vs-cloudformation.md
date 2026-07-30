---
title: "Console vs CLI vs SDK vs CloudFormation"
fullName: "Console vs CLI vs SDK vs CloudFormation"
description: "Console 靠点，CLI 靠命令，SDK 靠代码，CloudFormation 靠模板。"
service: "AWS Compare"
category: compare
kind: compare
lang: zh
topicKey: "Console vs CLI vs SDK vs CloudFormation"
frequency: "高频对比"
date: 2026-07-30
updated: 2026-07-30
tags: ["compare","Console vs CLI vs SDK vs CloudFormation","AWS"]
notionId: 3a6964dc-ce4a-8171-a18c-ca9aeea29add
notionUrl: https://app.notion.com/p/3a6964dcce4a8171a18cca9aeea29add
notionUpdated: "2026-07-23T08:23:51.932Z"
---

## 一句话结论

- Console：人工图形操作。
- CLI：命令和脚本操作。
- SDK：应用代码调用 AWS。
- CloudFormation：模板声明整套基础设施。

## 对比表

| 维度 | Console | CLI | SDK | CloudFormation |
| --- | --- | --- | --- | --- |
| 主要形式 | Web UI | 命令 | 程序代码 | YAML / JSON 模板 |
| 最适合 | 探索、一次性操作 | 例行和批量任务 | 应用集成 | 一致、可重复的架构部署 |
| 自动化 | 较低 | 中 | 高 | 高 |
| 管理粒度 | 单项操作 | 命令级 | 业务逻辑级 | 基础设施架构级 |
| 最终是否调用 AWS API | 是 | 是 | 是 | 是 |

## 高频判断

- “新手图形界面” → Console。
- “Shell 脚本批量处理” → CLI。
- “Python / Java 应用调用 S3” → SDK。
- “跨账户、跨 Region 重复创建相同环境” → CloudFormation。

## Declarative vs Imperative

- CloudFormation：Declarative，描述“我要什么”。
- CLI 脚本：通常更偏 Imperative，描述“依次怎么做”。

## 记忆口诀

Console 靠点，CLI 靠命令，SDK 靠代码，CloudFormation 靠模板。

---
title: "AWS 资源交互方式｜Console・CLI・SDK・IaC"
fullName: "AWS Management Console / AWS CLI / AWS SDK / Infrastructure as Code"
description: "从 Console、CLI、SDK 到 IaC，按使用场景理解 AWS 的四种主要交互方式。"
service: "AWS 资源交互方式｜Console・CLI・SDK・IaC"
category: devops
kind: service
lang: zh
topicKey: "AWS 资源交互方式｜Console・CLI・SDK・IaC"
frequency: "考试频率 ⭐⭐⭐⭐⭐"
date: 2026-07-30
updated: 2026-07-30
tags: ["devops","AWS 资源交互方式｜Console・CLI・SDK・IaC","AWS"]
notionId: 3a6964dc-ce4a-818b-a203-e86b13e2eada
notionUrl: https://app.notion.com/p/3a6964dcce4a818ba203e86b13e2eada
notionUpdated: "2026-07-23T08:23:50.016Z"
---

## 基本信息

| 字段 | 内容 |
| --- | --- |
| 英文 | AWS Resource Interaction Methods |
| 全称 | AWS Management Console / AWS CLI / AWS SDK / Infrastructure as Code |
| 中文 | AWS 资源交互方式 |
| 日文 | AWS リソース操作方法 |
| 考试频率 | ⭐⭐⭐⭐⭐ |
| 易混淆 | Console / CLI / SDK / CloudFormation |

## 核心前提

管理 AWS 资源，本质上都需要与 AWS API 交互。Console、CLI、SDK 和 CloudFormation 只是不同的操作入口与抽象层级。

## 四种方式

| 方式 | 主要使用者 | 工作方式 | 典型场景 |
| --- | --- | --- | --- |
| AWS Management Console | 初学者、管理员 | Web 图形界面 | 探索服务、一次性配置、账单与可视化 |
| AWS CLI | 运维、开发人员 | 命令和 Shell 脚本 | 例行任务、批量操作、简单自动化 |
| AWS SDK | 应用开发人员 | 在程序代码中调用 API | 应用内上传 S3、调用服务、自动业务流程 |
| CloudFormation / IaC | DevOps、平台团队 | 声明整个基础设施 | 一致、可重复、可版本控制的环境部署 |

## 一句话区分

Console 靠点，CLI 靠命令，SDK 靠代码，CloudFormation 靠模板。

## CLI

- 从命令行管理多种 AWS 服务。
- 可写入脚本，适合批量和例行操作。
- 示例：定期创建 EBS Snapshot、批量列出资源。

## SDK

- 为 Python、Java、JavaScript 等语言提供 AWS API 封装。
- 适合把 AWS 服务调用嵌入应用流程。
- 示例：应用收到文件后调用 SDK 上传 S3。

## IaC

- 把基础设施定义为模板或代码。
- 可存入 Git，进行评审、版本控制和重复部署。
- 适合多账户、多 Region、多环境的一致化建设。

## Cloud Practitioner 考点

识别四种工具的用途，并知道它们最终都与 AWS API 交互。

## SAA-C03 考点

- 手动操作不利于一致性与重现。
- 多环境和多 Region 复制优先考虑 IaC。
- CLI 脚本适合命令级自动化；CloudFormation 适合架构级资源声明。
- 应用程序内部调用服务通常使用 SDK。

## 常见误区

- Console 并非“不调用 API”，只是把 API 操作包装成图形界面。
- CLI 不等于 IaC；命令脚本通常描述操作步骤，CloudFormation 描述期望状态。
- SDK 主要面向程序集成，不是整套基础设施声明工具。

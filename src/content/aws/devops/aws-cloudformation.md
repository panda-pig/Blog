---
title: "AWS CloudFormation"
fullName: "AWS CloudFormation"
description: "用 YAML 或 JSON 模板声明需要哪些 AWS 资源，CloudFormation 自动调用 AWS API，以一致、可重复的方式创建和管理整套基础设施。"
service: "AWS CloudFormation"
category: devops
kind: service
lang: zh
topicKey: "AWS CloudFormation"
frequency: "考试频率 ⭐⭐⭐⭐⭐"
date: 2026-07-30
updated: 2026-07-31
tags: ["devops","AWS CloudFormation","AWS"]
notionId: 3a6964dc-ce4a-81fe-8a73-c98ed403b25b
notionUrl: https://app.notion.com/p/3a6964dcce4a81fe8a73c98ed403b25b
notionUpdated: "2026-07-30T08:30:26.959Z"
---

## 基本信息

| 字段 | 内容 |
| --- | --- |
| 英文 | AWS CloudFormation |
| 全称 | AWS CloudFormation |
| 中文释义 | AWS 基础设施即代码服务 |
| 日文释义 | AWS CloudFormation（コードによるインフラストラクチャ管理サービス） |
| 考试频率 | ⭐⭐⭐⭐⭐ |
| 易混淆 | AWS CLI / SDK / CDK / Terraform / Elastic Beanstalk |

## 一句话理解

用 YAML 或 JSON 模板声明需要哪些 AWS 资源，CloudFormation 自动调用 AWS API，以一致、可重复的方式创建和管理整套基础设施。

## 什么是 IaC

Infrastructure as Code：用模板或代码管理服务器、网络、数据库、权限等基础设施，而不是依赖人工点击控制台。

## 为什么需要 IaC

如果手动在不同账户、环境或 Region 创建大量资源：
- 速度慢。
- 容易遗漏配置。
- 难以重现。
- 难以审核和版本控制。
- 灾备重建不可靠。
IaC 可以把基础设施模板存入 Git，通过评审和流水线持续管理。

## Template

CloudFormation Template 通常使用 YAML 或 JSON，描述期望资源和关系。
常见顶层部分：
- Parameters
- Mappings
- Conditions
- Resources
- Outputs
Resources 是核心，用来声明 EC2、S3、RDS、IAM、VPC、Lambda 等资源。

## 工作原理

Template → CloudFormation Stack → CloudFormation 调用各服务 API → 创建 / 更新资源 → 维持和跟踪 Stack 状态。

## Declarative

CloudFormation 是声明式工具：描述“最终需要什么”，而不是逐步说明“先做什么、再做什么”。
- Declarative：我要 VPC、ALB、ASG 和 RDS。
- Imperative：依次执行多条 CLI 命令创建这些资源。

## 与其他方式的区别

| 工具 | 主要用途 |
| --- | --- |
| Console | 图形化人工操作 |
| CLI | 命令和脚本级自动化 |
| SDK | 在应用代码中调用 AWS API |
| CloudFormation | 声明并管理整套基础设施 |
| CDK | 用编程语言定义基础设施，再合成为 CloudFormation |
| Elastic Beanstalk | 面向应用部署，底层可使用多个 AWS 资源 |

## 核心能力

- Stack：一组作为整体管理的资源。
- Change Set：预览更新将产生的变化。
- Drift Detection：发现实际资源与模板不一致。
- Outputs / Export：输出和跨 Stack 引用信息。
- StackSets：跨账户和 Region 部署 Stack。

## 使用场景

- 开发、测试、生产环境保持一致。
- 多账户和多 Region 重复部署。
- CI/CD 自动创建或更新基础设施。
- 灾备环境快速重建。
- 基础设施配置审查与版本回退。

## Cloud Practitioner 考点

- AWS 官方 IaC 服务。
- 自动化、可重复、一致、减少人为错误。
- 用模板定义资源并自动预置。

## SAA-C03 考点

- Stack、Template、Change Set、Rollback。
- 跨账户 / Region 使用 StackSets。
- 参数化与依赖关系。
- 与 Beanstalk、CDK、CLI 的职责区别。
- 更新失败时的回滚行为。

## 常见误区

- CloudFormation 不只是“一次创建资源”，还负责后续更新和删除。
- CLI 脚本不等于声明式 IaC。
- CloudFormation 不会自动理解业务需求，模板本身仍需正确设计。
- IaC 提高可重复性，不会自动保证架构安全和高可用。

## 重点记忆

Console 靠点，CLI 靠命令，SDK 靠代码，CloudFormation 靠模板；CloudFormation 的核心是 Declarative + Repeatable + Consistent。

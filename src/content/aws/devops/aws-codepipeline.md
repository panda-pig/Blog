---
title: "AWS CodePipeline"
fullName: "AWS CodePipeline"
description: "编排从源代码到构建、测试和部署的交付流程。"
service: "AWS CodePipeline"
category: devops
kind: service
lang: zh
topicKey: "AWS CodePipeline"
frequency: "考试频率 ⭐⭐⭐"
date: 2026-07-31
updated: 2026-08-05
tags: ["devops", "AWS CodePipeline", "AWS"]
notionId: 3a6964dc-ce4a-81a8-9761-d977429ec679
notionUrl: https://app.notion.com/p/3a6964dcce4a81a89761d977429ec679
notionUpdated: "2026-08-05T01:57:00.000Z"
---

## 基本信息

| 字段 | 内容 |
| --- | --- |
| 英文 | AWS CodePipeline |
| 全称 | AWS CodePipeline |
| 中文释义 | 持续交付流水线 |
| 日文释义 | 継続的デリバリーパイプライン |
| 考试频率 | ⭐⭐⭐ |
| 易混淆 | CodeBuild / CodeDeploy |

## 一句话理解

编排从源代码到构建、测试和部署的交付流程。

## 阶段小结

- **核心定位**：编排从源代码到构建、测试和部署的交付流程。
- **考试频率**：⭐⭐⭐
- **对比检查**：CodeBuild / CodeDeploy

## 重点记忆

AWS CodePipeline = 持续交付流水线

## 工作原理

- 把 Source、Build、Test、Manual Approval、Deploy 等阶段连接成可重复的发布流程。
- 每个阶段包含一个或多个 Action，阶段之间通过 Artifact 传递版本与构建结果。
- 源代码变化或事件可触发流水线；失败会停止后续阶段并保留执行记录。

CodePipeline 负责**编排**，本身不编译代码。CodeBuild 执行构建，CodeDeploy 执行部署，CloudFormation 可发布基础设施。

---
title: "AWS CodeBuild"
fullName: "AWS CodeBuild"
description: "在临时环境中编译、测试并生成构建产物。"
service: "AWS CodeBuild"
category: devops
kind: service
lang: zh
topicKey: "AWS CodeBuild"
frequency: "考试频率 ⭐⭐⭐"
date: 2026-07-31
updated: 2026-08-05
tags: ["devops", "AWS CodeBuild", "AWS"]
notionId: 3a6964dc-ce4a-813d-a5d5-d5fa9b9d81f8
notionUrl: https://app.notion.com/p/3a6964dcce4a813da5d5d5fa9b9d81f8
notionUpdated: "2026-08-05T01:57:34.782Z"
---

## 基本信息

| 字段 | 内容 |
| --- | --- |
| 英文 | AWS CodeBuild |
| 全称 | AWS CodeBuild |
| 中文释义 | 托管构建服务 |
| 日文释义 | マネージドビルド |
| 考试频率 | ⭐⭐⭐ |
| 易混淆 | CodePipeline |

## 一句话理解

在临时环境中编译、测试并生成构建产物。

## 阶段小结

- **核心定位**：在临时环境中编译、测试并生成构建产物。
- **考试频率**：⭐⭐⭐
- **对比检查**：CodePipeline

## 重点记忆

AWS CodeBuild = 托管构建服务

## 工作原理

1. 从代码仓库、S3 或 CodePipeline 取得源代码。
2. 按 `buildspec.yml` 的 install、pre_build、build、post_build 阶段执行命令。
3. 在隔离的临时环境中编译、测试和打包。
4. 输出 Artifact，并把日志发送到 CloudWatch Logs。

CodeBuild **执行构建和测试**；CodePipeline **编排流水线**；CodeDeploy **部署到目标环境**。私有依赖与 VPC 资源访问还要检查网络、IAM Role 和 Secrets。

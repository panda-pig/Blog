---
title: "Amazon ECR"
fullName: "Amazon Elastic Container Registry"
description: "ECR 是“存放容器镜像的仓库”，不负责运行容器。"
service: "Amazon ECR"
category: compute
kind: service
lang: zh
topicKey: "Amazon ECR"
frequency: "考试频率 ⭐⭐⭐⭐"
date: 2026-07-30
updated: 2026-07-30
tags: ["compute","Amazon ECR","AWS"]
notionId: 3a6964dc-ce4a-81a9-9648-e0852b505c1e
notionUrl: https://app.notion.com/p/3a6964dcce4a81a99648e0852b505c1e
notionUpdated: "2026-07-23T07:17:27.703Z"
---

## 基本信息

| 字段 | 内容 |
| --- | --- |
| 英文 | Amazon ECR |
| 全称 | Amazon Elastic Container Registry |
| 中文 | 容器镜像仓库 |
| 日文 | Amazon ECR（コンテナレジストリ） |
| 考试频率 | ⭐⭐⭐⭐ |
| 易混淆 | ECS / EKS / Fargate |

## 一句话理解

ECR 是“存放容器镜像的仓库”，不负责运行容器。

## 核心作用

- 保存、版本化和分发容器镜像。
- 支持符合 OCI 标准的容器镜像。
- 可通过常见容器工具和 CLI 推送、拉取及管理镜像。

## 工作原理

代码与依赖 → 构建 Container Image → 推送到 ECR → ECS / EKS 调度 → EC2 / Fargate 实际运行。

## Cloud Practitioner 考点

- ECR 存储镜像。
- ECS / EKS 负责容器编排。
- EC2 / Fargate 提供运行容器的计算资源。

## SAA-C03 考点

- ECR 与 ECS / EKS 集成。
- 私有镜像访问需要正确 IAM 权限。
- 需要理解镜像、Task Definition、Task 和 Service 之间的关系。

## 常见误区

- ECR 不能运行容器。
- ECR 不是容器编排服务。
- 镜像是静态模板，容器是镜像运行后的实例。

## 重点记忆

ECR = 仓库；ECS / EKS = 调度管理；EC2 / Fargate = 实际运行。

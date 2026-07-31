---
title: "AWS AI Services、SageMaker 与 ML 基础设施"
fullName: "AWS AI Services vs SageMaker vs ML Infrastructure"
description: "三层的主要差异是现成能力、自定义程度、底层控制和运维责任。"
service: "AWS Comparison"
category: compare
kind: comparison
lang: zh
topicKey: "AWS AI Services vs SageMaker vs ML Infrastructure"
frequency: "阶段性总结"
date: 2026-07-31
updated: 2026-07-31
tags: ["compare","AWS AI Services vs SageMaker vs ML Infrastructure","AWS"]
notionId: 3ad964dc-ce4a-8142-9cb4-d6f40f390789
notionUrl: https://app.notion.com/p/3ad964dcce4a81429cb4d6f40f390789
notionUpdated: "2026-07-30T08:06:14.194Z"
---

## 一句话理解

三层的主要差异是现成能力、自定义程度、底层控制和运维责任。

## 核心要点

- AWS AI Services：直接调用预训练 API，最快、运维最少。
- SageMaker：使用自己的数据构建、训练、部署和监控模型。
- EC2/EKS/GPU + 框架：控制最高，也承担最多基础设施工作。

## 考试重点

- 题目要求越标准化、越快交付，越偏上层；越强调自定义和底层控制，越偏下层。

## 常见误区

- 不要只凭产品名称选择服务，先确认数据类型、延迟、控制力、运维与成本限制。

## 重点记忆

**现成 API → SageMaker 平台 → 自建基础设施。**

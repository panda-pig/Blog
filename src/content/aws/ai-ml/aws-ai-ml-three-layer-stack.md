---
title: "AWS AI/ML 三层技术栈"
fullName: "AWS AI Services / AWS ML Services / ML Frameworks and Infrastructure"
description: "按“预训练 AI 服务、机器学习平台、ML 基础设施”三层选择合适的控制力与运维负担。"
service: "AWS AI/ML Stack"
category: ai-ml
kind: concept
lang: zh
topicKey: "AWS AI/ML 三层技术栈"
frequency: "考试频率 ⭐⭐⭐⭐⭐"
date: 2026-07-31
updated: 2026-07-31
tags: ["ai-ml","AWS AI/ML 三层技术栈","AWS"]
notionId: 3ad964dc-ce4a-8125-a875-f2c3ea9362ff
notionUrl: https://app.notion.com/p/3ad964dcce4a8125a875f2c3ea9362ff
notionUpdated: "2026-07-30T08:04:05.363Z"
---

## 基本信息

| 字段 | 内容 |
| --- | --- |
| 英文 | AWS AI/ML Stack |
| 全称 | AWS AI Services / AWS ML Services / ML Frameworks and Infrastructure |
| 中文释义 | AWS AI/ML 三层技术栈 |
| 日文释义 | AWS AI/ML 3層スタック |
| 考试频率 | ⭐⭐⭐⭐⭐ |
| 易混淆 | AI Services / SageMaker / EC2 + ML Frameworks |

## 一句话理解

按“预训练 AI 服务、机器学习平台、ML 基础设施”三层选择合适的控制力与运维负担。

## 核心要点

- AI Services 提供现成 API，例如 Polly、Transcribe、Comprehend、Textract 和 Rekognition。
- SageMaker 提供自定义模型的数据准备、训练、部署和监控生命周期。
- EC2、EKS、GPU 和 ML 框架提供最高控制，但基础设施责任也最高。
- Bedrock 位于生成式 AI 应用层，通过托管 API 使用基础模型。

## 考试重点

- 题目越强调快速使用现成能力，越靠上层；越强调自定义训练和底层控制，越靠下层。

## 常见误区

- 不要只凭产品名称选择服务，先确认数据类型、延迟、控制力、运维与成本限制。

## 重点记忆

**能力 API → SageMaker 平台 → 自建 ML 基础设施，控制力和运维逐层增加。**

---
title: "AWS CloudHSM"
fullName: "AWS CloudHSM"
description: "为需要 Single-tenant 专用 HSM 和更高密钥控制权的工作负载提供托管硬件。"
service: "AWS CloudHSM"
category: security
kind: service
lang: zh
topicKey: "AWS CloudHSM"
frequency: "考试频率 ⭐⭐⭐"
date: 2026-10-08
updated: 2026-10-08
tags: ["security","AWS CloudHSM","AWS"]
notionId: 3f3964dc-ce4a-81ec-8891-ea6d574e3954
notionUrl: https://app.notion.com/p/3f3964dcce4a81ec8891ea6d574e3954
notionUpdated: "2026-10-08T00:52:15.652Z"
---
## 基本信息

| 字段 | 内容 |
| --- | --- |
| 英文 / 全称 | AWS CloudHSM |
| 中文 | 专用硬件安全模块服务 |
| 日文 | 専用ハードウェアセキュリティモジュール |
| 复习优先级 | 考试频率 ⭐⭐⭐ |
| 易混淆 | AWS KMS / KMS Custom Key Store |

## 一句话理解

为需要 Single-tenant 专用 HSM 和更高密钥控制权的工作负载提供托管硬件。

## 核心整理

AWS 运维 HSM 硬件，客户管理 HSM 内的用户、密钥和权限；多 AZ 高可用需要部署多个 HSM。

## 学习重点

- 支持对称和非对称密钥。
- 可作为 KMS Custom Key Store 的底层 HSM。
- IAM 控制集群资源，不代替 HSM 内部权限。
- 与 AWS 服务深度托管集成通常优先 KMS。

## 常见误区

- CloudHSM 不是 KMS 的普通 Key Type。
- 使用 CloudHSM 不会自动形成多 AZ 高可用。

## 重点记忆

**Dedicated HSM → CloudHSM；服务集成 → KMS；桥接 → Custom Key Store。**

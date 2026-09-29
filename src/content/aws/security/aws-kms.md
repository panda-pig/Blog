---
title: "AWS KMS"
fullName: "AWS Key Management Service"
description: "管理用来锁定和解锁数据的加密密钥，而不是保存业务数据。"
service: "AWS KMS"
category: security
kind: service
lang: zh
topicKey: "AWS KMS"
frequency: "考试频率 ⭐⭐⭐⭐⭐"
date: 2026-07-31
updated: 2026-09-29
tags: ["security", "AWS KMS", "AWS"]
notionId: 3a6964dc-ce4a-81e1-9905-e5b2a49bdc26
notionUrl: https://app.notion.com/p/3a6964dcce4a81e19905e5b2a49bdc26
notionUpdated: "2026-09-28T04:42:21.030Z"
---

## 基本信息

| 字段 | 内容 |
| --- | --- |
| 英文 | AWS KMS |
| 全称 | AWS Key Management Service |
| 中文释义 | 密钥管理服务 |
| 日文释义 | AWS KMS（暗号鍵管理サービス） |
| 考试频率 | ⭐⭐⭐⭐⭐ |
| 易混淆 | CloudHSM / Secrets Manager / ACM |

## 一句话理解

管理用来锁定和解锁数据的加密密钥，而不是保存业务数据。

## 阶段小结

- **核心定位**：管理用来锁定和解锁数据的加密密钥，而不是保存业务数据。
- **考试频率**：⭐⭐⭐⭐⭐
- **对比检查**：CloudHSM / Secrets Manager / ACM

## 重点记忆

AWS KMS = 密钥管理服务

+## 本轮补充：S3 加密边界

- SSE-S3 使用 S3 管理密钥；SSE-KMS 同时受 S3 权限与 KMS Key Policy / Grant 控制，并产生 KMS 审计与费用。
- S3 Bucket Key 可减少 SSE-KMS 对 KMS 的请求次数与成本。
- DSSE-KMS 提供两层独立静态加密，面向高合规要求；它不是 TLS + SSE-KMS。
- SSE-C 由客户每次请求提供密钥，S3 不保存密钥且必须使用 HTTPS。

---
title: "KMS vs Secrets Manager vs ACM"
fullName: "KMS vs Secrets Manager vs ACM"
description: "KMS 管理加密密钥，Secrets Manager 管理机密值，ACM 管理用于 HTTPS 的证书。"
service: "AWS Compare"
category: compare
kind: compare
lang: zh
topicKey: "KMS vs Secrets Manager vs ACM"
frequency: "高频对比"
date: 2026-07-31
updated: 2026-07-31
tags: ["compare", "KMS vs Secrets Manager vs ACM", "AWS"]
notionId: 3ae964dc-ce4a-8160-adb5-fb18d6e81d89
notionUrl: https://app.notion.com/p/3ae964dcce4a8160adb5fb18d6e81d89
notionUpdated: "2026-07-31T04:09:10.498Z"
---

## 一句话结论

- **AWS KMS**：管理加密密钥。
- **AWS Secrets Manager**：保存并轮换密码、Token 和 API Key。
- **AWS Certificate Manager**：管理用于 HTTPS 的 SSL/TLS 证书。

## 核心差异

| 维度 | KMS | Secrets Manager | ACM |
| --- | --- | --- | --- |
| 管理对象 | 加密密钥 | 机密值 | SSL/TLS 证书 |
| 典型需求 | 加密 S3、EBS、RDS 数据 | 数据库密码自动轮换 | ALB、CloudFront 启用 HTTPS |
| 保护阶段 | 静态数据加密 | 机密生命周期 | 传输中加密 |
| 常见集成 | S3、EBS、RDS、DynamoDB | RDS、Lambda、IAM Role | ALB、CloudFront、API Gateway |

## 场景判断

看到“加密密钥”选 KMS；看到“密码或 Token 自动轮换”选 Secrets Manager；看到“HTTPS 证书”选 ACM。

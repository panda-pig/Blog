---
title: Amazon S3
fullName: Amazon Simple Storage Service
description: 通过 API 或 HTTP 保存完整对象的高持久、可扩展 Region 级对象存储。
service: S3
category: storage
kind: service
lang: zh
frequency: "考试频率 ★★★★★"
date: 2026-07-29
updated: 2026-07-29
tags: [Storage, Object Storage, SAA-C03]
notionId: 3a6964dc-ce4a-8167-bdc7-d3b96eb969dc
notionUrl: https://app.notion.com/p/3a6964dcce4a8167bdc7d3b96eb969dc
notionUpdated: "2026-07-29T04:41:23.982Z"
---

## 一句话理解

> S3 是 AWS 的对象存储：Bucket 负责容纳和管理，Object 保存数据与元数据，Key 在 Bucket 中唯一定位对象。

## 核心作用

- 单个对象最大 5 TB；超过 5 GB 的上传必须使用 Multipart Upload。
- 默认私有，可结合 IAM、Bucket Policy、Block Public Access、Presigned URL 与加密控制访问。
- Versioning 防误覆盖，Lifecycle 管理转层和过期，Replication 与 Object Lock 提供额外保护。

## 考试重点

- 对象、静态资源、日志、备份和 Data Lake 通常选择 S3。
- 根据访问频率、检索时间和总成本选择 Standard、IA、Glacier 或 Intelligent-Tiering。
- CloudFront 配合私有 S3 Origin 是常见的安全内容分发方案。

## 常见误区

- Key 中的斜线只是 Prefix 表现，S3 不是 POSIX 文件系统。
- Versioning 会保留历史版本并产生费用，不能等同于免费备份。

## 重点记忆

> **Bucket 装 Object，Key 定位对象；Policy 管权限，Versioning 防误删，Lifecycle 管成本。**

## 关联服务

CloudFront、IAM、KMS、CloudTrail、AWS Backup。

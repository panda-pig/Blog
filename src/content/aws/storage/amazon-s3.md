---
title: Amazon S3
fullName: "Amazon Simple Storage Service"
description: 通过 API 或 HTTP 保存完整对象的高持久、可扩展 Region 级对象存储。
service: S3
category: storage
kind: service
lang: zh
frequency: "考试频率 ⭐⭐⭐⭐⭐"
date: 2026-07-29
updated: 2026-07-31
tags: [Storage, Object Storage, SAA-C03]
notionId: 3a6964dc-ce4a-8167-bdc7-d3b96eb969dc
notionUrl: https://app.notion.com/p/3a6964dcce4a8167bdc7d3b96eb969dc
notionUpdated: "2026-07-30T04:27:36.877Z"
---

## 基本信息

| 字段 | 内容 |
| --- | --- |
| 英文 | Amazon S3 |
| 全称 | Amazon Simple Storage Service |
| 中文释义 | 对象存储 |
| 日文释义 | オブジェクトストレージ |
| 考试频率 | ⭐⭐⭐⭐⭐ |
| 易混淆 | EBS / EFS / S3 on Outposts |

## 一句话理解

通过 API/HTTP 保存和读取完整对象的高持久、可扩展 Region 级对象存储服务。

## 三个核心概念

- **Bucket**：对象容器、权限与管理边界；创建时选择 Region。
- **Object**：数据本身 + Metadata 等属性。
- **Key**：对象在 Bucket 中的唯一名称；斜线形成的“文件夹”只是 Prefix。

## 容量与扩展

- 单个对象最大 5 TB。
- 单次 PUT 最大 5 GB；超过 5 GB 必须使用 Multipart Upload。
- Bucket 容量不需要预先配置，会随对象数量和大小扩展。
- 普通 Bucket 名称需在相应 AWS Partition 内全局唯一。

## Durability vs Availability

S3 Standard 等常见类别按 99.999999999%（11 个 9）对象持久性设计。
- Durability：数据是否永久丢失或损坏。
- Availability：此刻能否成功访问。
底层冗余防硬件故障，但不能防止具有权限的误删、覆盖或恶意操作，因此仍需 Versioning、Object Lock、Replication 或备份设计。

## 典型使用场景

- 图片、视频、PDF、下载文件。
- 静态网站资源。
- 备份、日志和归档。
- Data Lake 与分析源数据。
- CloudFront Origin。
- 跨账户数据交换。

## 访问与安全摘要

- Bucket 和对象默认私有。
- IAM Policy 管身份权限，Bucket Policy 管资源权限。
- Block Public Access 防止意外公开。
- Presigned URL 在签名者权限范围内提供限时访问。
- Access Points 为不同应用或团队提供独立入口。
- HTTPS 保护传输中数据；服务器端加密保护静态数据。
- CloudTrail Data Events 可审计对象 API。
另见《S3 安全与管理》。

## 数据管理摘要

- Versioning 防止误覆盖/误删；删除可能创建 Delete Marker。
- Lifecycle 自动转换存储类别、清理旧版本和过期数据。
- SRR / CRR 按规则复制对象。
- Object Lock 提供 WORM 保留。
- Metadata 与 Tags 是不同机制。
- Inventory 提供周期性对象清单。
另见《S3 存储类别与生命周期》。

## S3 + CloudFront

常见安全路径：用户 → CloudFront → 私有 S3 Origin。
S3 保存对象；CloudFront 在边缘分发与缓存。S3 静态网站端点与普通 S3 Origin 的能力和 HTTPS 设计不同，生产环境通常优先使用 CloudFront。

## Cloud Practitioner 考点

- S3 是对象存储，不是块设备或传统共享文件系统。
- 图片、视频、备份、静态资源、日志归档 → S3。
- 默认私有，高持久，可扩展。
- Standard / IA / Glacier / Intelligent-Tiering 基本定位。

## SAA-C03 考点

- Versioning、Lifecycle、Replication、Object Lock。
- Bucket Policy、IAM、Access Points、Presigned URL。
- CloudTrail Data Events、Inventory、加密。
- Storage Class、检索时间与总成本。
- CloudFront + 私有 S3 Origin。
- S3 on Outposts 与 Storage Gateway。

## 常见误区

- Key Prefix 看起来像目录，但 S3 不是 POSIX 文件系统。
- Object URL 不代表任何人都能访问。
- Versioning 不是免费备份，历史版本会计费。
- Block Public Access 不会阻止所有经过授权的访问。
- CORS 不是授权机制。
- 多 AZ 冗余不代表不需要防误删与备份。
- S3 on Outposts 的对象数据位于本地 Outposts；合规仍需检查完整数据流与配置。

## 面试高频问题

1. S3 为什么适合对象而不适合数据库块设备？
2. 如何防止误删、公开和勒索软件修改？
3. Lifecycle 与 Intelligent-Tiering 如何选？
4. 如何向外部用户临时提供私有对象？

## 重点记忆

**Bucket 装 Object，Key 定位对象；Policy 管权限，Versioning 防误删，Lifecycle 管成本。**

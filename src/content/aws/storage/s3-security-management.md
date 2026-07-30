---
title: "S3 安全与管理"
fullName: "Amazon S3 Security and Management"
description: "从默认私有、权限策略、版本控制、加密审计到复制与 Object Lock，系统整理 S3 的安全和对象管理。"
service: "Amazon S3"
category: storage
kind: service
lang: zh
topicKey: "S3 安全与管理"
frequency: "考试频率 ⭐⭐⭐⭐⭐"
date: 2026-07-30
updated: 2026-07-30
tags: ["S3", "Security", "Versioning", "SAA-C03"]
notionId: 3ac964dc-ce4a-81ed-a53b-d11b4044717f
notionUrl: https://app.notion.com/p/3ac964dcce4a81eda53bd11b4044717f
notionUpdated: "2026-07-30"
---

## 基本信息

| 字段 | 内容 |
| --- | --- |
| 英文 | S3 Security & Management |
| 全称 | Amazon S3 Security and Management |
| 中文 | S3 安全与管理 |
| 日文 | S3 セキュリティと管理 |
| 考试频率 | ⭐⭐⭐⭐⭐ |
| 易混淆 | IAM Policy / Bucket Policy / ACL / Block Public Access |

## 默认安全状态

- S3 Bucket 和对象默认私有。
- Block Public Access 用于防止意外公开，但不阻止经过 IAM、Bucket Policy、Access Point、CloudFront 或预签名 URL 授权的访问。
- 现代架构通常使用 Bucket Owner Enforced，禁用 ACL，并主要依靠 IAM 与 Bucket Policy。

## 权限工具

| 工具 | 作用 |
| --- | --- |
| IAM Policy | 附加到用户/角色的身份策略 |
| Bucket Policy | 附加到 Bucket 的资源策略 |
| Access Point | 为不同应用/团队提供独立入口和策略 |
| Presigned URL | 在签名者权限范围内提供限时访问 |
| Block Public Access | 阻止公共访问配置 |
| VPC Endpoint Policy | 限制经 VPC Endpoint 的访问 |

## Bucket Policy 核心字段

- Effect：Allow / Deny。
- Principal：谁。
- Action：允许/拒绝什么 API。
- Resource：作用于 Bucket 还是对象 ARN。
- Condition：HTTPS、来源账户、组织、VPC Endpoint、IP 等条件。

## Versioning 与恢复

- 保留同一 Key 的多个版本。
- 普通删除通常创建 Delete Marker，旧版本仍存在。
- 可删除 Delete Marker 或复制旧版本成为新的当前版本。
- Versioning 启用后只能 Suspended，不能回到从未启用状态。
- 历史版本会产生费用，应结合 Lifecycle 管理。

## 加密与审计

- 传输中：HTTPS/TLS。
- 静态：SSE-S3、SSE-KMS 等。
- CloudTrail Management Events：Bucket 配置操作。
- CloudTrail Data Events：GetObject、PutObject、DeleteObject 等对象操作。
- S3 Server Access Logging：访问请求日志。
- S3 Inventory：周期性对象清单。

## Object 管理

- Key：对象唯一名称；控制台文件夹本质是 Prefix。
- Metadata：对象属性，修改用户元数据通常需要复制/重写对象。
- Tags：可单独管理，用于 Lifecycle、权限和成本分类。
- Checksums：验证完整性。
- Object Lock：WORM 保留与合规保护。
- Object URL：只是地址，不代表拥有访问权限。

## CORS

CORS 只告诉浏览器哪些跨源请求可以尝试，不是授权机制。请求仍需通过 IAM、Bucket Policy 或预签名 URL 等权限检查。

## Replication

- Same-Region Replication（SRR）。
- Cross-Region Replication（CRR）。
- 可用于合规、隔离、区域访问和灾难恢复。
- 通常需要 Versioning；复制范围、历史对象与删除行为需按规则设计。

## 高频场景

- 防误删/覆盖 → Versioning。
- 临时分享私有对象 → Presigned URL。
- 多团队独立入口 → Access Points。
- 防止公开 → Block Public Access。
- 审计对象 API → CloudTrail Data Events。
- 合规防修改/删除 → Object Lock。
- 浏览器跨域 → CORS，同时仍要授权。
- 全球私有内容分发 → CloudFront + 私有 S3 Origin。

## 重点记忆

**S3 默认私有；Policy 管权限，Versioning 防误删，Lifecycle 管成本，Replication 管副本，Object Lock 管不可变。**

---
title: "安全架构设计"
fullName: "Design Secure Architectures"
description: "2. 保持 Block Public Access，除非业务明确需要公开。"
service: "SAA-C03"
category: saa-c03
kind: topic
lang: zh
topicKey: "安全架构设计"
frequency: "阶段性总结"
date: 2026-07-30
updated: 2026-07-30
tags: ["saa-c03","Design Secure Architectures","AWS"]
notionId: 3a6964dc-ce4a-815e-9db0-d8343bfa6db7
notionUrl: https://app.notion.com/p/3a6964dcce4a815e9db0d8343bfa6db7
notionUpdated: "2026-07-29T08:13:15.938Z"
---

> 已加入“05 联网”与“06 存储”的 SAA 安全架构考点。

## 必须掌握

- IAM 身份策略 vs Resource Policy。
- S3 默认私有与 Block Public Access。
- S3 Bucket Policy、Access Point、Presigned URL。
- 静态加密与传输中加密。
- Versioning、Replication、Object Lock 与备份隔离。
- CloudTrail Management Events vs S3 Data Events。
- EBS Snapshot、EFS、FSx 与 Backup 的访问权限。
- Security Group、NACL 与 VPC Endpoint。
- AWS Shared Responsibility Model。

## 存储安全关键词 → 服务

| 需求 | 首先想到 | 还要检查 |
| --- | --- | --- |
| 防 S3 意外公开 | Block Public Access | Bucket Policy、ACL、Access Point |
| 临时分享私有对象 | Presigned URL | 签名者权限与过期时间 |
| 多团队访问同一 Bucket | S3 Access Points | 每个入口策略与网络限制 |
| 审计 GetObject / DeleteObject | CloudTrail Data Events | Trail、成本与目标日志 |
| 合规不可修改 | S3 Object Lock | Versioning、Retention Mode |
| 强制 HTTPS | Bucket Policy Deny 非 TLS | 例外与服务访问 |
| 私有访问 S3 | Gateway VPC Endpoint | Endpoint/Bucket Policy |
| EFS 网络访问 | Mount Target + SG | TCP 2049、IAM/POSIX 权限 |
| 备份防删除 | Backup Vault / 不可变策略 | 权限隔离与恢复测试 |

## S3 最小权限思路

1. 默认保持 Bucket 私有。
2. 保持 Block Public Access，除非业务明确需要公开。
3. 优先 IAM Role 和最小权限。
4. 用 Bucket Policy 表达资源端条件和显式拒绝。
5. CloudFront 访问私有 Origin，而不是公开 Bucket。
6. 对敏感对象启用适当加密和审计。
7. 用 Versioning / Object Lock / Backup 防止误删和篡改。

## 高频陷阱

- CORS 不是授权。
- Object URL 不等于公开。
- S3 底层冗余不能防止授权用户误删。
- Presigned URL 的能力不会超过签名者权限，但链接持有者在有效期内可使用。
- 快照成功不自动保证应用事务一致性。
- Server-side encryption 不替代 IAM、Policy 和日志。
- 备份与生产账号/权限完全相同会削弱勒索软件防护。

## 错题回写

- “谁读取/删除了对象” → CloudTrail Data Events。
- “防覆盖/误删并可恢复旧版本” → Versioning。
- “强制保留期间不可删除” → Object Lock。
- “不经过公网访问 S3” → VPC Endpoint + Policy。

## 考前一分钟复习

**默认私有、最小权限、加密、审计、版本/不可变、备份隔离。**

## Database 安全补充

- 生产 RDS / Aurora 通常放在私有子网，使用 Security Group 限制应用层来源。
- 使用 KMS 静态加密、TLS 传输加密和 Secrets Manager 管理/轮换凭据。
- 数据库账号权限与 IAM 权限是不同层次；都遵循最小权限。
- DynamoDB 使用 IAM 控制 API，敏感数据仍需分类、加密、备份与审计。
- DAX、ElastiCache、DocumentDB 和 Neptune 也需要网络隔离、身份验证和加密配置。
- 托管服务不会自动替客户修复公开访问、过宽 SG、弱账号或错误备份权限。

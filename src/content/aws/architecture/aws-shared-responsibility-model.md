---
title: "AWS 责任共担模型"
fullName: "AWS Shared Responsibility Model"
description: "AWS 负责“云本身的安全”，客户负责“云中配置、身份、应用与数据”；服务越托管，AWS 承担的底层责任通常越多。"
service: "Architecture"
category: architecture
kind: topic
lang: zh
topicKey: "AWS 责任共担模型"
frequency: "考试频率 ⭐⭐⭐⭐⭐"
date: 2026-07-30
updated: 2026-07-30
tags: ["architecture","AWS Shared Responsibility Model","AWS"]
notionId: 3a6964dc-ce4a-81b5-b6d2-c6ee58ed36d9
notionUrl: https://app.notion.com/p/3a6964dcce4a81b5b6d2c6ee58ed36d9
notionUpdated: "2026-07-29T08:13:08.678Z"
---

## 基本信息

| 字段 | 内容 |
| --- | --- |
| 英文 | AWS Shared Responsibility Model |
| 全称 | AWS Shared Responsibility Model |
| 中文 | AWS 责任共担模型 |
| 日文 | AWS 責任共有モデル |
| 考试频率 | ⭐⭐⭐⭐⭐ |
| 易混淆 | AWS 的责任 / 客户的责任 / 托管服务边界 |

## 一句话理解

AWS 负责“云本身的安全”，客户负责“云中配置、身份、应用与数据”；服务越托管，AWS 承担的底层责任通常越多。

## AWS 负责：Security of the Cloud

- 数据中心、物理安全与硬件。
- 物理服务器、存储和网络设备。
- 虚拟化基础设施。
- 托管服务底层扩展、硬件维护与 AWS 承诺的可用能力。

## 客户负责：Security in the Cloud

- 数据分类、保留、备份和删除策略。
- IAM、身份验证、授权与最小权限。
- 网络 CIDR、路由、Security Group、NACL。
- 加密选择、KMS 权限与证书。
- EC2 Guest OS、补丁、应用与主机防火墙。
- 恢复测试、RTO/RPO 和业务连续性流程。

## 网络服务中的责任例子

| 服务 | AWS 主要负责 | 客户主要负责 |
| --- | --- | --- |
| Amazon VPC | 底层网络基础设施 | CIDR、Subnet、Route、安全规则 |
| NAT Gateway | 托管扩展与基础设施 | AZ、Route、EIP 与成本设计 |
| Client VPN | 托管 VPN 服务端 | 身份、授权、Route、目标网络 |
| Site-to-Site VPN | AWS 端 VPN 服务 | Customer Gateway、双隧道与路由 |
| Direct Connect | AWS 侧服务能力 | 冗余、路由、加密与本地线路 |
| PrivateLink | 私有连接基础设施 | Endpoint、Policy、SG 与服务权限 |

## 存储服务中的责任例子

| 服务 | AWS 主要负责 | 客户主要负责 |
| --- | --- | --- |
| Amazon S3 | 底层存储、扩展与硬件冗余 | Bucket Policy、数据、加密、Versioning、Lifecycle |
| Amazon EBS | 卷基础设施与同 AZ 复制 | 卷类型、Delete on Termination、Snapshot、加密 |
| Amazon EFS | 托管文件系统基础设施 | Mount Target、SG、POSIX/IAM 权限、生命周期 |
| AWS Backup | 备份服务基础设施 | 资源选择、频率、保留、Vault 权限、恢复测试 |
| AWS DRS | 复制与恢复服务基础设施 | Agent、启动/网络设置、Failover、Failback、演练 |

## 责任边界随服务变化

- EC2：客户负责 OS、补丁、运行时、应用和数据。
- RDS：AWS 管更多底层数据库基础设施，客户仍负责数据、账号、网络与参数。
- Lambda：AWS 管服务器和扩展，客户负责代码、依赖、权限、数据和配置。
- S3：AWS 提供高持久底层存储，客户仍需防公开、误删和错误 Lifecycle。

## Cloud Practitioner 考点

先判断问题位于物理基础设施、平台、配置、身份、应用还是数据层。托管式服务不等于客户无需配置。

## SAA-C03 考点

- EBS 持久不代表 AWS 自动替客户创建快照。
- S3 11 个 9不代表客户无需 Versioning / Backup。
- AWS Backup 成功不代表恢复流程自动满足 RTO/RPO。
- Site-to-Site VPN 双隧道不代表客户侧已正确使用。
- Direct Connect 专用连接不等于默认加密。
- 合规是共同责任，使用合规服务不等于工作负载自动合规。

## 常见误区

- AWS 不会自动修复 EC2 Guest OS 的所有漏洞。
- S3 公开通常属于客户配置责任。
- Serverless 也需要客户管理代码、权限与数据安全。
- 自动备份或复制不能替代恢复测试。

## 重点记忆

**AWS 管底层云；客户管配置、权限、数据、备份策略和能否真正恢复。**

## 数据库服务中的责任例子

| 服务 | AWS 主要负责 | 客户主要负责 |
| --- | --- | --- |
| EC2 自建数据库 | 硬件、物理设施、虚拟化 | OS、数据库软件、补丁、高可用、备份、数据和访问 |
| Amazon RDS | 硬件、托管平台、备份能力和部分补丁 | Schema、数据、账号、网络、参数、查询、保留期和恢复验证 |
| Amazon DynamoDB | 底层服务器、分区基础设施和扩展能力 | 键与索引、IAM、数据、容量/成本、备份和恢复策略 |
| Amazon ElastiCache | 托管缓存基础设施 | 缓存键、TTL、失效、一致性、访问权限和源数据库保护 |
**Fully Managed / Serverless 仍然是共同责任：AWS 管更多底层，客户仍管数据模型、身份、配置、安全、成本和恢复。**

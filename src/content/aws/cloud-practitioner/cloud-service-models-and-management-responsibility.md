---
title: "云服务模型与管理责任"
fullName: "Cloud Service Models and Management Responsibility"
description: "“完全托管、托管、非托管”描述的是运维责任程度，不是 AWS 所有服务都严格采用的三档官方分类。应按具体服务文档判断责任边界。"
service: "Cloud Foundations"
category: cloud-practitioner
kind: topic
lang: zh
topicKey: "云服务模型与管理责任"
frequency: "考试频率 ⭐⭐⭐⭐⭐"
date: 2026-07-30
updated: 2026-07-30
tags: ["cloud-practitioner","云服务模型与管理责任","AWS"]
notionId: 3a6964dc-ce4a-81b3-a226-c3c0676e726d
notionUrl: https://app.notion.com/p/3a6964dcce4a81b3a226c3c0676e726d
notionUpdated: "2026-07-29T08:11:48.200Z"
---

## 基本信息

| 字段 | 内容 |
| --- | --- |
| 英文 | Cloud Service Models & Management Responsibility |
| 全称 | Cloud Service Models and Management Responsibility |
| 中文释义 | 云服务模型与管理责任 |
| 日文释义 | クラウドサービスモデルと管理責任 |
| 考试频率 | ⭐⭐⭐⭐⭐ |
| 易混淆 | IaaS / PaaS / FaaS / Managed / Serverless |
> “完全托管、托管、非托管”描述的是运维责任程度，不是 AWS 所有服务都严格采用的三档官方分类。应按具体服务文档判断责任边界。

## 管理责任是一条连续谱

| 模式 | 客户主要负责 | AWS / 平台主要负责 |
| --- | --- | --- |
| EC2 自建数据库 | OS、数据库安装与补丁、备份、高可用、监控、数据与访问 | 物理设施、硬件和虚拟化 |
| Amazon RDS | Schema、数据、账号、网络、参数、查询优化、备份保留与恢复验证 | 硬件、基础数据库平台、自动备份能力和部分补丁 |
| DynamoDB 等 Serverless 数据库 | 键与访问模式、IAM、数据、容量/成本选项、备份和恢复策略 | 服务器、分区基础设施、扩展和服务可用能力 |

## 数据库中的责任例子

- RDS：AWS 管更多底层运维，但客户仍需设计 SQL、索引、账号、Security Group、加密、备份策略和恢复演练。
- DynamoDB：AWS 管服务器和自动扩展能力，客户仍需设计 Partition Key、索引、IAM 与数据保护。
- EC2 + MySQL：客户拥有最大控制，也承担最多补丁、高可用和备份责任。
- AWS Backup：提供集中备份能力，但不会自动保护所有资源；必须选择资源、保留期和恢复测试。

## 典型例子

- EC2：IaaS，用户管理操作系统和补丁。
- Elastic Beanstalk：PaaS 风格，上传代码后自动部署常见基础设施。
- Lambda：FaaS / Serverless，按事件执行函数。
- Fargate：无服务器容器计算，但仍需 ECS 或 EKS 编排。
- RDS：托管数据库，客户仍负责数据、账号和配置。

## 重要提醒

**Managed / Fully Managed / Serverless 都不等于客户没有安全、配置、成本、数据建模和恢复责任。**

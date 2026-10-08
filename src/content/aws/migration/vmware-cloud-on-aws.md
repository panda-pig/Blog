---
title: "VMware Cloud on AWS"
fullName: "VMware Cloud on AWS"
description: "把 VMware SDDC 延伸到 AWS，并继续使用熟悉的 VMware 软件与管理方式。"
service: "VMware Cloud on AWS"
category: migration
kind: service
lang: zh
topicKey: "VMware Cloud on AWS"
frequency: "考试频率 ⭐⭐"
date: 2026-10-08
updated: 2026-10-08
tags: ["migration","VMware Cloud on AWS","AWS"]
notionId: 3f3964dc-ce4a-814d-bafa-fc7d9b76fa1b
notionUrl: https://app.notion.com/p/3f3964dcce4a814dbafafc7d9b76fa1b
notionUpdated: "2026-10-08T01:44:50.384Z"
---
## 基本信息

| 字段 | 内容 |
| --- | --- |
| 英文 / 全称 | VMware Cloud on AWS |
| 中文 | AWS 上的 VMware 云环境 |
| 日文 | AWS 上の VMware クラウド環境 |
| 复习优先级 | 考试频率 ⭐⭐ |
| 易混淆 | AWS Transform MGN / VM Import/Export / AWS DRS |

## 一句话理解

把 VMware SDDC 延伸到 AWS，并继续使用熟悉的 VMware 软件与管理方式。

## 核心整理

本地 VMware 与 AWS 上的 vSphere、vSAN、NSX 环境连接，适合平台延伸、迁移、混合云和灾备。

## 学习重点

- 保留 VMware 管理方式属于 Relocate 思路。
- 迁入原生 EC2 的低停机 Rehost 可考虑 MGN。
- 访问原生 AWS 服务仍需网络、IAM 和加密配置。
- 灾备仍要明确复制、RPO/RTO、恢复与演练。

## 常见误区

- 源端是 VMware 不代表目标只能是 VMware Cloud。
- 平台延伸与持续块级复制解决的是不同目标。

## 重点记忆

**保留 VMware 管理方式 → VMware Cloud；迁成原生 EC2 → MGN 或镜像导入。**

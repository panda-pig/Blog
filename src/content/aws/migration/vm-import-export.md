---
title: "VM Import/Export"
fullName: "VM Import/Export"
description: "把符合条件的 VM 镜像导入 AWS 生成 EC2 镜像或实例，也可导出符合条件的 AWS 镜像。"
service: "VM Import/Export"
category: migration
kind: service
lang: zh
topicKey: "VM Import/Export"
frequency: "考试频率 ⭐⭐"
date: 2026-10-08
updated: 2026-10-08
tags: ["migration","VM Import/Export","AWS"]
notionId: 3f3964dc-ce4a-8103-b195-cff86463077d
notionUrl: https://app.notion.com/p/3f3964dcce4a8103b195cff86463077d
notionUpdated: "2026-10-08T01:44:50.384Z"
---
## 基本信息

| 字段 | 内容 |
| --- | --- |
| 英文 / 全称 | VM Import/Export |
| 中文 | 虚拟机镜像导入与导出 |
| 日文 | 仮想マシンイメージのインポート／エクスポート |
| 复习优先级 | 考试频率 ⭐⭐ |
| 易混淆 | AWS Transform MGN / VMware Cloud on AWS |

## 一句话理解

把符合条件的 VM 镜像导入 AWS 生成 EC2 镜像或实例，也可导出符合条件的 AWS 镜像。

## 核心整理

准备镜像并上传 S3，配置服务角色后发起导入；网络、IAM、许可和应用依赖仍需单独配置。

## 学习重点

- 适合少量、允许离线窗口的 VM。
- 持续块级复制和低停机迁移使用 MGN。
- 继续使用 VMware 管理体系则考虑 VMware Cloud on AWS。
- 导入生成原生 EC2，不会持续同步源端变化。

## 常见误区

- 不是所有 Marketplace AMI、加密镜像或许可都支持导出。
- 同样存放在 S3 的文件也可能使用完全不同的恢复入口。

## 重点记忆

**VM Import/Export 搬镜像；MGN 持续搬服务器；VMware Cloud 保留 VMware 模型。**

---
title: Amazon FSx
fullName: "Amazon FSx"
description: 托管 Windows、Lustre、NetApp ONTAP 与 OpenZFS 等专业文件系统的产品家族。
service: FSx
category: storage
kind: service
lang: zh
frequency: "考试频率 ⭐⭐⭐⭐"
date: 2026-07-29
updated: 2026-07-30
tags: [Storage, File Storage, Hybrid]
notionId: 3a6964dc-ce4a-81e5-a908-cd990d3f12be
notionUrl: https://app.notion.com/p/3a6964dcce4a81e5a908cd990d3f12be
notionUpdated: "2026-07-29T04:42:39.476Z"
---

## 基本信息

| 字段 | 内容 |
| --- | --- |
| 英文 | Amazon FSx |
| 全称 | Amazon FSx |
| 中文 | 托管专业文件系统家族 |
| 日文 | マネージドファイルシステム |
| 考试频率 | ⭐⭐⭐⭐ |
| 易混淆 | Amazon EFS |

## 一句话理解

AWS 托管 Windows、Lustre、NetApp ONTAP 和 OpenZFS 等成熟文件系统，便于迁移传统应用或满足专业性能需求。

## 四种主要文件系统

| 服务 | 关键词 | 典型场景 |
| --- | --- | --- |
| FSx for Windows File Server | Windows、SMB、Active Directory | 企业共享盘、Windows 应用 |
| FSx for Lustre | HPC、并行 I/O、ML、S3 集成 | 科研、GPU 训练、大规模计算 |
| FSx for NetApp ONTAP | ONTAP、NFS/SMB/iSCSI、企业存储 | NetApp 工作负载迁移 |
| FSx for OpenZFS | OpenZFS、NFS、快照、克隆 | Linux/ZFS 应用迁移 |

## 核心价值

- AWS 管理硬件、部署、补丁和基础设施。
- 保留熟悉的协议、文件系统特性和管理体验。
- 让企业减少改写应用的成本。
- 根据文件系统提供高可用、备份、复制或性能选项。

## EFS vs FSx

- 普通 Linux NFS 共享、自动扩容 → EFS。
- Windows/SMB/AD → FSx for Windows。
- HPC/并行高吞吐 → FSx for Lustre。
- 已有 ONTAP/OpenZFS 依赖 → 对应 FSx。
FSx 不是一个单一文件系统，而是一组不同托管文件系统产品，能力和部署选项必须分别判断。

## Cloud Practitioner 考点

看到文件系统生态名称，直接匹配：
- SMB / Windows → FSx for Windows。
- HPC / ML / Lustre → FSx for Lustre。
- NetApp / ONTAP → FSx for ONTAP。
- OpenZFS → FSx for OpenZFS。
- 普通 Linux / NFS / 多 EC2 → EFS。

## SAA-C03 考点

- 协议、操作系统与工作负载匹配。
- Single-AZ / Multi-AZ 部署选项。
- FSx for Lustre 与 S3 数据集组合。
- FSx for ONTAP 的多协议与企业迁移。
- 吞吐、SSD/HDD、备份与成本。

## 常见误区

- EFS 不是所有文件存储场景的答案。
- FSx 不是“EFS 的高级版”，而是不同文件系统家族。
- Lustre 面向并行高性能文件 I/O，不是普通 Windows 文件共享。
- 选择 FSx 时必须先确认协议和既有应用依赖。

## 面试高频问题

1. EFS 与 FSx 如何选？
2. 为什么 HPC 选择 FSx for Lustre？
3. 如何把 Windows 文件服务器迁移到 AWS？

## 重点记忆

**普通 Linux 共享用 EFS；专业文件系统按名称选择对应 FSx。**

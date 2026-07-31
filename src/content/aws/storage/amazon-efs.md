---
title: Amazon EFS
fullName: "Amazon Elastic File System"
description: 供多台 Linux 客户端通过 NFS 共享挂载、容量自动伸缩的托管文件系统。
service: EFS
category: storage
kind: service
lang: zh
frequency: "考试频率 ⭐⭐⭐⭐"
date: 2026-07-29
updated: 2026-07-30
tags: [Storage, File Storage, NFS]
notionId: 3a6964dc-ce4a-81c2-8fc7-def0bc74e454
notionUrl: https://app.notion.com/p/3a6964dcce4a81c28fc7def0bc74e454
notionUpdated: "2026-07-29T04:41:30.363Z"
---

## 基本信息

| 字段 | 内容 |
| --- | --- |
| 英文 | Amazon EFS |
| 全称 | Amazon Elastic File System |
| 中文释义 | 弹性共享文件系统 |
| 日文释义 | 共有ファイルストレージ |
| 考试频率 | ⭐⭐⭐⭐ |
| 易混淆 | EBS / S3 / FSx |

## 一句话理解

可供多台 Linux 客户端通过 NFS 同时挂载、容量自动伸缩的托管共享文件系统。

## 核心能力

- 传统目录、路径、权限和文件系统语义。
- 多个 EC2 / 容器并发挂载同一目录。
- 容量随文件增加或删除自动扩缩。
- Standard 文件系统跨同一 Region 的多个 AZ 设计；也有 One Zone 选项。
- 生命周期管理把冷文件转到 IA / Archive，并可按配置在访问后回到 Standard。

## Mount Target

EFS 通过 VPC 子网中的 Mount Target 提供网络入口。
典型高可用设计：
- AZ A 子网 → Mount Target A。
- AZ B 子网 → Mount Target B。
- AZ C 子网 → Mount Target C。
客户端通常使用同 AZ Mount Target；Security Group 需要允许 NFS TCP 2049。

## EFS vs EBS

| 维度 | EBS | EFS |
| --- | --- | --- |
| 类型 | 块存储 | 文件存储 |
| 范围 | 单 AZ | Standard 为 Region / Multi-AZ |
| 使用方式 | 格式化后像磁盘 | NFS 共享目录 |
| 容量 | 预置并调整 | 自动扩缩 |
| 多实例 | 通常单实例；特定场景 Multi-Attach | 天然多客户端共享 |
| 典型场景 | 系统盘、数据库 | CMS、共享上传目录、用户主目录 |

## EFS vs S3

- 应用必须使用路径、挂载、追加、重命名、文件锁 → EFS。
- 应用通过 GetObject / PutObject 操作完整对象 → S3。
- “多台服务器都能访问”不能单独决定；关键是 NFS 文件语义还是对象 API。

## EFS vs FSx

- 普通 Linux / NFS 共享目录 → EFS。
- Windows / SMB / Active Directory → FSx for Windows。
- HPC / Lustre → FSx for Lustre。
- 既有 NetApp ONTAP / OpenZFS 工作负载 → 对应 FSx。

## 典型场景

- 多台 Web EC2 共享用户上传目录。
- WordPress 多实例共享 wp-content。
- Linux 用户主目录。
- 传统 NFS 应用迁移。
- 多节点共享媒体处理工作目录。
长期图片分发、备份和归档通常更适合 S3；两者可在同一架构中配合。

## Cloud Practitioner 考点

Linux、NFS、多台 EC2、共享目录、自动扩缩 → EFS。

## SAA-C03 考点

- Mount Target、Security Group、TCP 2049。
- Regional vs One Zone。
- Lifecycle 与存储类别。
- 吞吐与并发。
- EFS vs EBS / S3 / FSx。
- 跨 VPC/Region 访问需要额外网络，EFS 本身不是全球文件系统。

## 常见误区

- “不受 AZ 限制”不是“天然跨全球”。
- EFS Multi-AZ 指数据与服务设计，不代表无需各 AZ Mount Target 和网络配置。
- EFS 自动扩展的是容量，不代表任何吞吐需求都自动满足。
- EFS 主要面向 Linux/NFS，不是 Windows SMB 首选。
- EBS Multi-Attach 不能替代普通共享文件系统。

## 面试高频问题

1. 多台 EC2 访问同一批图片时，如何判断用 EFS 还是 S3？
2. Mount Target 的作用是什么？
3. EFS 与 FSx 如何选？

## 重点记忆

**要挂载共享 Linux 目录 → EFS；要通过 API 存对象 → S3。**

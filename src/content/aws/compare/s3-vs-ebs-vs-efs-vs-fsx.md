---
title: "S3 vs EBS vs EFS vs FSx"
fullName: "S3 vs EBS vs EFS vs FSx"
description: "对象 API 用 S3；EC2 持久硬盘用 EBS；Linux 共享目录用 EFS；专业文件系统按生态选择 FSx。"
service: "AWS Compare"
category: compare
kind: compare
lang: zh
topicKey: "S3 vs EBS vs EFS vs FSx"
frequency: "高频对比"
date: 2026-07-30
updated: 2026-07-30
tags: ["compare","S3 vs EBS vs EFS vs FSx","AWS"]
notionId: 3a6964dc-ce4a-819b-89e7-eedbf8ad32aa
notionUrl: https://app.notion.com/p/3a6964dcce4a819b89e7eedbf8ad32aa
notionUpdated: "2026-07-29T04:42:48.621Z"
---

## 一句话选型

**对象 API 用 S3；EC2 持久硬盘用 EBS；Linux 共享目录用 EFS；专业文件系统按生态选择 FSx。**

## 核心差异

| 维度 | Amazon S3 | Amazon EBS | Amazon EFS | Amazon FSx |
| --- | --- | --- | --- | --- |
| 存储模型 | Object | Block | File | File |
| 访问方式 | API / HTTP | EC2 块设备 | NFS 挂载 | SMB / NFS / Lustre 等 |
| 范围 | Region 级服务 | 单 AZ | Standard 为 Region / Multi-AZ | 视具体 FSx 部署 |
| 共享方式 | 多客户端通过 API | 通常单实例，特定卷可 Multi-Attach | 多客户端共享 | 按文件系统共享 |
| 容量 | 自动扩展 | 预置并调整 | 自动扩缩 | 按具体产品配置 |
| 典型场景 | 静态资源、备份、归档、数据湖 | OS、数据库、高 IOPS | Linux 共享目录、CMS | Windows、HPC、ONTAP、OpenZFS |
| 关键词 | Bucket、Object、Key | Volume、IOPS、Snapshot | NFS、Mount Target、TCP 2049 | SMB、Lustre、ONTAP、OpenZFS |

## 三个经典案例

### 静态网站和媒体
HTML、CSS、JS、图片、视频主要完整读取，通过 API/HTTP 访问 → **S3**。全球分发常配合 CloudFront。
### EC2 数据库
数据库频繁随机读写和局部更新，需要块设备与高 IOPS → **EBS**。高性能数据库可能使用 io2。
### 多台 Linux EC2 共享目录
应用必须看到同一 /shared 路径并使用 NFS 文件语义 → **EFS**。

## EFS vs S3 的真正判断点

图片、视频、日志既能放文件系统，也能作为对象。不要只看文件类型，要看访问方式：
- open/read/write/rename/append/file lock → EFS / 文件系统。
- GetObject/PutObject/HTTP → S3。
- 长期归档、Lifecycle、CloudFront → S3。
- 旧应用不能修改且依赖共享路径 → EFS。

## EFS vs FSx

- Linux NFS 共享 → EFS。
- Windows SMB / AD → FSx for Windows。
- HPC / ML 并行 I/O → FSx for Lustre。
- NetApp / OpenZFS 迁移 → 对应 FSx。

## 高频陷阱

- 多台服务器访问同一数据不一定选 EFS；如果通过对象 API，S3 更合适。
- S3 不是传统文件系统，不能直接作为普通操作系统盘。
- EBS 是单 AZ，不是共享 Region 文件系统。
- EFS 自动扩容不等于吞吐无限。
- FSx 是产品家族，不是一种统一文件系统。
- 实际架构可同时使用 EBS、EFS 和 S3，各自承担不同层次。

## 面试回答模板

“我先判断应用需要块设备、对象 API 还是文件系统语义，再看共享范围、延迟、IOPS/吞吐、AZ/Region 容灾与成本。数据库和系统盘通常选 EBS；海量静态对象和归档选 S3；多台 Linux 服务器共享目录选 EFS；Windows、Lustre、ONTAP 或 OpenZFS 选择对应 FSx。”

## 记忆口诀

**硬盘 EBS，仓库 S3，共享 Linux 目录 EFS，专业文件系统 FSx。**

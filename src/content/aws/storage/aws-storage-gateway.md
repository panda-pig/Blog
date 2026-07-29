---
title: AWS Storage Gateway
fullName: AWS Storage Gateway
description: 让本地应用以文件、块或磁带接口接入 AWS 云存储的混合云服务。
service: Storage Gateway
category: storage
kind: service
lang: zh
frequency: "考试频率 ★★★★"
date: 2026-07-29
updated: 2026-07-29
tags: [Storage, Hybrid Cloud, Migration]
notionId: 3a6964dc-ce4a-8139-8147-f4863a4da4ca
notionUrl: https://app.notion.com/p/3a6964dcce4a81398147f4863a4da4ca
notionUpdated: "2026-07-29T04:42:42.955Z"
---

## 一句话理解

> Storage Gateway 保留本地应用熟悉的 NFS/SMB、iSCSI 或虚拟磁带工作流，并把数据连接到 AWS。

## 核心作用

- S3 File Gateway 把本地 NFS/SMB 文件映射为 S3 对象。
- Volume Gateway 提供 iSCSI 卷，并通过快照支持备份与恢复。
- Tape Gateway 用虚拟磁带替代物理磁带基础设施。

## 考试重点

- 文件进 S3 选 File Gateway；本地块卷选 Volume Gateway；替代磁带选 Tape Gateway。
- DataSync 偏高速批量迁移，Direct Connect/VPN 是网络连接，DRS 面向整台服务器恢复。
- 本地缓存、带宽、权限、加密和恢复流程都需要设计。

## 常见误区

- Storage Gateway 不是网络专线。
- File Gateway 的目标是 S3 对象，但 S3 本身仍不是普通文件系统。

## 重点记忆

> **文件 → File Gateway；磁盘卷 → Volume Gateway；磁带 → Tape Gateway。**

## 关联服务

S3、EBS Snapshot、DataSync、Direct Connect、AWS DRS。

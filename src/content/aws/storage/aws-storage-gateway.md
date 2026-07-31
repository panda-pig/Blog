---
title: AWS Storage Gateway
fullName: "AWS Storage Gateway"
description: 让本地应用以文件、块或磁带接口接入 AWS 云存储的混合云服务。
service: Storage Gateway
category: storage
kind: service
lang: zh
frequency: "考试频率 ⭐⭐⭐⭐"
date: 2026-07-29
updated: 2026-07-31
tags: [Storage, Hybrid Cloud, Migration]
notionId: 3a6964dc-ce4a-8139-8147-f4863a4da4ca
notionUrl: https://app.notion.com/p/3a6964dcce4a81398147f4863a4da4ca
notionUpdated: "2026-07-30T04:28:58.736Z"
---

## 基本信息

| 字段 | 内容 |
| --- | --- |
| 英文 | AWS Storage Gateway |
| 全称 | AWS Storage Gateway |
| 中文释义 | 混合云存储网关 |
| 日文释义 | ハイブリッドストレージゲートウェイ |
| 考试频率 | ⭐⭐⭐⭐ |
| 易混淆 | DataSync / S3 on Outposts / Direct Connect / AWS DRS |

## 一句话理解

让本地应用继续使用熟悉的文件、块或磁带接口，同时把数据接入 AWS 云存储。

## 三种主要类型

| 类型 | 本地看到 | 云端主要落点 | 典型场景 |
| --- | --- | --- | --- |
| S3 File Gateway | NFS / SMB 文件共享 | S3 Object | 文件备份、归档、NAS 扩展 |
| Volume Gateway | iSCSI 块存储卷 | EBS Snapshot 等 | 本地卷备份与灾难恢复 |
| Tape Gateway | 虚拟磁带库 | S3 / 归档层 | 替代物理磁带 |

## S3 File Gateway

本地应用 → NFS/SMB → File Gateway → S3。
本地应用不必改成直接调用 S3 API；常用数据可利用本地 Cache，提高访问速度。

## Volume Gateway

- Cached Volumes：完整数据主要在云中，本地缓存常用数据。
- Stored Volumes：完整数据主要在本地，异步生成云端备份。
本地故障时，可从快照在 AWS 创建 EBS Volume 并恢复。

## Tape Gateway

让现有备份软件继续使用磁带工作流，但底层改为虚拟磁带和 AWS 存储，减少物理磁带采购、运输和保管。

## 服务边界

- **Storage Gateway**：长期混合存储接口。
- **DataSync**：高速批量迁移或定期同步大量数据。
- **Direct Connect / VPN**：网络道路，不提供文件/卷/磁带语义。
- **S3 on Outposts**：对象数据主要留在本地 Outposts。
- **AWS DRS**：持续复制并快速恢复整台服务器。

## Cloud Practitioner 考点

- 本地 NFS/SMB 文件进 S3 → File Gateway。
- 本地 iSCSI 卷与快照 → Volume Gateway。
- 替代物理磁带 → Tape Gateway。
- 数据必须留在本地并使用 S3 API → S3 on Outposts。

## SAA-C03 考点

- Cached vs Stored Volumes。
- 本地 Cache 容量与网络。
- File / Volume / Tape 选型。
- Storage Gateway 与 DataSync、Direct Connect、DRS 的组合。
- 权限、加密、带宽与恢复流程。

## 常见误区

- Storage Gateway 不等于网络专线。
- File Gateway 把文件映射为 S3 对象，但 S3 本身仍不是普通文件系统。
- Gateway 连接云存储不代表数据必须一直留在本地。
- Storage Gateway 不负责快速启动整台恢复服务器。

## 面试高频问题

1. 三种 Gateway 如何选？
2. Storage Gateway 与 DataSync 区别是什么？
3. S3 on Outposts 与 File Gateway 区别是什么？

## 重点记忆

**文件 → S3 File Gateway；磁盘卷 → Volume Gateway；磁带 → Tape Gateway。**

---
title: "AWS DataSync"
fullName: "AWS DataSync"
description: "通过网络快速自动迁移本地、AWS 和其他云之间的数据。"
service: "AWS DataSync"
category: migration
kind: service
lang: zh
topicKey: "AWS DataSync"
frequency: "考试频率 ⭐⭐⭐⭐"
date: 2026-07-30
updated: 2026-07-30
tags: ["migration","AWS DataSync","AWS"]
notionId: 3a6964dc-ce4a-8155-9ae9-f3e18ec458d5
notionUrl: https://app.notion.com/p/3a6964dcce4a81559ae9f3e18ec458d5
notionUpdated: "2026-07-30T01:52:42.983Z"
---

## 基本信息

| 字段 | 内容 |
| --- | --- |
| 英文 | AWS DataSync |
| 全称 | AWS DataSync |
| 中文 | 在线数据传输 |
| 日文 | オンラインデータ転送 |
| 考试频率 | ⭐⭐⭐⭐ |
| 易混淆 | Storage Gateway / Snow Family |

## 一句话理解

通过网络快速自动迁移本地、AWS 和其他云之间的数据。

## 核心作用

- 通过网络高速传输文件或对象数据。
- 执行一次性迁移、定期同步、数据归档和数据分发。
- 在本地 / 自管存储与 Amazon S3、Amazon EFS、Amazon FSx 等 AWS 存储之间传输数据。
- 自动处理传输任务、重试、数据完整性验证和监控，减少自建复制脚本。

## 工作中的应用场景

- 把本地 NAS 的大量文件迁移到 Amazon S3。
- 定期把本地 NFS / SMB 数据同步到 EFS 或 FSx。
- 在 AWS 存储服务或 Region 之间复制文件数据。
- 把冷数据迁移到 S3，再结合 Lifecycle 转入归档层。

## 工作原理

1. 创建 Source Location 和 Destination Location。
2. 创建 DataSync Task，定义复制内容、元数据、权限、删除行为和验证选项。
3. 本地或自管存储场景通常部署 DataSync Agent；具体是否需要 Agent 取决于源、目标和网络位置。
4. 手动、按计划或通过自动化启动任务。
5. DataSync 传输并验证数据，通过 CloudWatch 等观察执行结果。

## 与 Storage Gateway 的区别

| 需求 | 选择 |
| --- | --- |
| 快速搬运大量数据、一次性迁移或定期同步 | AWS DataSync |
| 让本地应用长期使用 NFS / SMB、iSCSI 或虚拟磁带接口访问云存储 | AWS Storage Gateway |
简单记忆：**DataSync 管“搬运与同步”；Storage Gateway 管“长期混合存储接口”。**

## Cloud Practitioner 考点

- DataSync 是在线数据传输服务，不是存储服务。
- 关键词“批量迁移、定期同步、大量文件、S3 / EFS / FSx”优先想到 DataSync。
- 网络条件不适合在线传输时，再考虑 Snow Family 等离线方案。

## SAA-C03 考点

- 根据源和目标创建 Location，再由 Task 执行传输。
- 本地数据传输通常需要 Agent 和合适的网络路径。
- 可结合互联网、VPN 或 Direct Connect；网络服务负责路径，DataSync 负责数据传输流程。
- 关注 IAM、加密、带宽、元数据保留、验证方式、任务调度与传输费用。
- 与 Storage Gateway、Transfer Family、Snow Family 的选型区别。

## 常见误区

- DataSync 不会提供可供应用长期挂载的混合存储接口。
- DataSync 不是数据库迁移工具；数据库迁移主要考虑 DMS。
- DataSync 通过网络传输，带宽不足会影响迁移窗口。
- Agent 并非所有场景都必须使用，应按源、目标和传输位置判断。

## 易混淆服务

- Storage Gateway：长期混合存储访问。
- Snow Family：离线或受限网络环境的大规模数据迁移。
- Transfer Family：通过 SFTP / FTPS / FTP / AS2 访问 S3 或 EFS。
- DMS：迁移或持续复制数据库。

## 面试高频问题

1. DataSync 与 Storage Gateway 如何选择？
2. 本地 NAS 迁移到 S3 时需要设计哪些网络、权限和验证？
3. 什么时候使用 DataSync，什么时候使用 Snow Family？
4. 如何安排增量同步并控制迁移切换窗口？

## 重点记忆

**大量文件在线搬运 / 定期同步 → DataSync；长期文件、卷或磁带接口 → Storage Gateway。**

## 关联服务

Amazon S3、Amazon EFS、Amazon FSx、AWS Storage Gateway、AWS Snow Family、AWS Direct Connect、Site-to-Site VPN、Amazon CloudWatch。

## 官方参考

- [What is AWS DataSync?](https://docs.aws.amazon.com/datasync/latest/userguide/what-is-datasync.html)
- [How AWS DataSync works](https://docs.aws.amazon.com/datasync/latest/userguide/how-datasync-transfer-works.html)

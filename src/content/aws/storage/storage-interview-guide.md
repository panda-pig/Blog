---
title: "AWS Storage 面试速查"
fullName: "AWS Storage Interview Guide"
description: "用对象、块、文件、性能、共享范围和生命周期回答 AWS 存储面试题。"
service: "AWS Storage"
category: storage
kind: topic
lang: zh
topicKey: "AWS Storage Interview Guide"
frequency: "面试高频"
date: 2026-09-29
updated: 2026-09-29
tags: ["storage", "interview", "S3", "EBS", "EFS"]
notionId: 3a6964dc-ce4a-81a7-8b03-f472f569ea58
notionUrl: https://app.notion.com/p/3a6964dcce4a81a78b03f472f569ea58
notionUpdated: "2026-09-27T05:21:17.403Z"
---

## 选型主线

先判断 **对象 / 块 / 文件**，再看共享范围、AZ 边界、性能模型、生命周期、加密与恢复目标。

| 场景 | 首选 |
| --- | --- |
| 海量对象、静态内容、数据湖 | S3 |
| 单台 EC2 的启动盘或数据库块存储 | EBS |
| 多台 Linux EC2 共享 POSIX 文件 | EFS |
| Windows SMB、Lustre、NetApp ONTAP、OpenZFS | 对应 Amazon FSx |
| On-prem 与 AWS 混合文件/卷/磁带 | Storage Gateway |
| 大规模离线迁移 | Snow Family |

## 高频问题

- S3 强一致不等于所有分布式应用不需要重试或幂等。
- Versioning、Replication、Object Lock、MFA Delete 解决不同保护层；Replication 不替代 Backup。
- EBS 属于一个 AZ；Snapshot 存在区域级 S3 基础设施，可创建到其他 AZ 的卷。
- EBS Multi-Attach 需要受支持卷、同 AZ 和 Cluster-aware 应用/文件系统。
- EFS Mount Target 是各 AZ 的网络入口；Security Group 通常允许 NFS TCP 2049。
- S3 私有内容经 CloudFront 分发时优先 OAC，而不是公开 Bucket。

## 回答结构

访问协议 → 一致性和性能 → 故障域 → 加密与权限 → Lifecycle 与成本 → Backup / DR。

## 重点记忆

**对象用 S3，块用 EBS，共享 Linux 文件用 EFS；性能、高可用和备份必须分别说明。**

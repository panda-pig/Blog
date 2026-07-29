---
title: Amazon FSx
fullName: Amazon FSx
description: 托管 Windows、Lustre、NetApp ONTAP 与 OpenZFS 等专业文件系统的产品家族。
service: FSx
category: storage
kind: service
lang: zh
frequency: "考试频率 ★★★★"
date: 2026-07-29
updated: 2026-07-29
tags: [Storage, File Storage, Hybrid]
notionId: 3a6964dc-ce4a-81e5-a908-cd990d3f12be
notionUrl: https://app.notion.com/p/3a6964dcce4a81e5a908cd990d3f12be
notionUpdated: "2026-07-29T04:42:39.476Z"
---

## 一句话理解

> FSx 让传统或高性能应用保留熟悉的协议和文件系统能力，同时由 AWS 管理底层基础设施。

## 核心作用

- FSx for Windows 支持 SMB、Active Directory 与企业共享盘。
- FSx for Lustre 面向 HPC、机器学习和并行高吞吐，并可结合 S3 数据集。
- FSx for ONTAP 与 OpenZFS 适合迁移已有企业存储或 ZFS 工作负载。

## 考试重点

- 普通 Linux NFS 共享优先 EFS；Windows/SMB/AD 选择 FSx for Windows。
- HPC、ML、Lustre 选择 FSx for Lustre。
- 选择 FSx 时先确认协议、操作系统、性能目标与既有依赖。

## 常见误区

- FSx 不是单一文件系统，而是一组不同产品。
- FSx 不是简单的“EFS 高级版”。

## 重点记忆

> **普通 Linux 共享用 EFS；专业文件系统按名称选择对应 FSx。**

## 关联服务

EFS、S3、Active Directory、HPC、AWS Backup。

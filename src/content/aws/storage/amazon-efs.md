---
title: Amazon EFS
fullName: Amazon Elastic File System
description: 供多台 Linux 客户端通过 NFS 共享挂载、容量自动伸缩的托管文件系统。
service: EFS
category: storage
kind: service
lang: zh
frequency: "考试频率 ★★★★"
date: 2026-07-29
updated: 2026-07-29
tags: [Storage, File Storage, NFS]
notionId: 3a6964dc-ce4a-81c2-8fc7-def0bc74e454
notionUrl: https://app.notion.com/p/3a6964dcce4a81c28fc7def0bc74e454
notionUpdated: "2026-07-29T04:41:30.363Z"
---

## 一句话理解

> EFS 提供传统目录与文件语义，多台 EC2 或容器可以同时挂载同一目录。

## 核心作用

- Standard 文件系统按 Region / Multi-AZ 设计，也提供 One Zone 选项。
- 每个使用的 AZ 通常配置 Mount Target；Security Group 需允许 NFS TCP 2049。
- 容量自动扩缩，Lifecycle 可把冷文件转入 IA 或 Archive。

## 考试重点

- Linux、NFS、多实例共享目录通常选择 EFS。
- 磁盘块和数据库卷选择 EBS；对象 API 与静态内容选择 S3；专业文件系统选择 FSx。
- EFS 本身不是全球文件系统，跨 VPC 或 Region 仍需额外网络设计。

## 常见误区

- 容量自动扩展不代表任何吞吐需求都自动满足。
- Multi-AZ 设计不代表可以忽略 Mount Target 和安全组。

## 重点记忆

> **需要共享 Linux 目录就选 EFS；需要对象 API 就选 S3。**

## 关联服务

EC2、ECS、EKS、NFS、FSx、AWS Backup。

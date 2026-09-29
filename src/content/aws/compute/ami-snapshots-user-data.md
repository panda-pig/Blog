---
title: "AMI：自定义镜像、Snapshot 与 User Data"
fullName: "Amazon Machine Image, EBS Snapshot, and EC2 User Data"
description: "分清可启动模板、卷级时间点副本和启动初始化脚本，并组合 Golden AMI 与 User Data。"
service: "Amazon EC2"
category: compute
kind: topic
lang: zh
topicKey: "AMI Snapshots and User Data"
frequency: "SAA 高频"
date: 2026-09-29
updated: 2026-09-29
tags: ["AMI", "EBS Snapshot", "User Data", "EC2"]
notionId: 3e8964dc-ce4a-810b-8665-f7b4195be3f8
notionUrl: https://app.notion.com/p/3e8964dcce4a810b8665f7b4195be3f8
notionUpdated: "2026-09-28T04:09:12.223Z"
---

## 一句话理解

**AMI 是可启动的 EC2 模板，Snapshot 是 EBS 卷的时间点副本，User Data 是启动初始化脚本。**

| 概念 | 保存什么 | 主要用途 | 不保存什么 |
| --- | --- | --- | --- |
| AMI | 系统模板、Block Device Mapping、关联 Snapshot | 批量启动一致的 EC2 | 原实例 ID、ENI、IP、RAM、进程 |
| EBS Snapshot | 一个卷的块级时间点数据 | 恢复卷、跨 AZ / Region 迁移 | 完整 EC2 启动配置 |
| User Data | 启动时执行的脚本 | 环境相关的轻量动态配置 | 可复用镜像 |
| Hibernate | RAM 写入 Root EBS | 恢复原进程状态 | 部署模板 |

## 设计要点

- 创建 EBS-backed AMI 会创建相关 EBS Snapshot；默认 Reboot 有助于文件系统一致性。
- AMI 是 Region 级资源，跨 Region 使用需要 Copy AMI。
- Public AMI 不等于可信；要核对 Owner、补丁状态与来源。
- 跨账户共享加密 AMI 时，还要处理 Snapshot 与 KMS Key 权限。
- Deregister AMI 不会自动删除所有 Backing Snapshot。

## 推荐组合

把稳定、体积大、安装慢的依赖烘焙进 Golden AMI；用 User Data 注入环境配置、注册服务并完成最后一公里初始化。脚本应可重复执行且不在明文中保存长期密钥。

## 重点记忆

**AMI 决定“启动成什么”，Snapshot 保存“卷在某一刻的数据”，User Data 完成“启动后如何配置”。**

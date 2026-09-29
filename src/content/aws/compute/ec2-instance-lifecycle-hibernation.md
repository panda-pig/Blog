---
title: "EC2 生命周期：Reboot、Stop、Hibernate 与 Terminate"
fullName: "EC2 Instance Lifecycle and Hibernation"
description: "比较 EC2 重启、停止、休眠和终止时内存、EBS、Instance Store、地址与费用的变化。"
service: "Amazon EC2"
category: compute
kind: topic
lang: zh
topicKey: "EC2 Instance Lifecycle and Hibernation"
frequency: "SAA 高频"
date: 2026-09-29
updated: 2026-09-29
tags: ["EC2", "hibernation", "lifecycle", "EBS"]
notionId: 3e8964dc-ce4a-81e0-a2dc-e71df7e51224
notionUrl: https://app.notion.com/p/3e8964dcce4a81e0a2dce71df7e51224
notionUpdated: "2026-09-27T05:01:04.233Z"
---

## 核心对比

| 操作 | RAM / 进程 | EBS | Instance Store | 能否再启动 |
| --- | --- | --- | --- | --- |
| Reboot | 重新启动 OS | 保留 | 通常保留 | 自动回到 Running |
| Stop | 清空 | 保留 | 丢失 | 可以 |
| Hibernate | RAM 写入加密 Root EBS，恢复时还原 | 保留 | 丢失 | 可以 |
| Terminate | 清空 | 由 Delete on Termination 决定 | 丢失 | 不可以 |

Hibernate 必须在 Launch 时启用，并要求受支持的 AMI、OS、Instance Type，以及容量充足且加密的 EBS Root Volume。

## 容易混淆的边界

- Hibernate 保存运行状态，但不是 Backup、Snapshot、DR 或 Multi-AZ HA。
- Stop / Hibernate 后计算费用停止，EBS 与 Public IPv4 等资源仍可能收费。
- Primary Private IPv4 通常保持；普通 Public IPv4 通常释放；Elastic IP 保持关联。
- Stop → Start 与 Hibernate → Start 默认都不会自动重新执行首次启动 User Data。
- Terminate 时卷是否删除必须看 Block Device Mapping 的 Delete on Termination。

## 场景判断

保存 RAM 与进程现场并快速恢复 → Hibernate；普通关机 → Stop；只重启 OS → Reboot；永久删除 → Terminate。

## 重点记忆

**Stop 保磁盘不保内存；Hibernate 把内存写入加密 Root EBS；Terminate 不可恢复。**

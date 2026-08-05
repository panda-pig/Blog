---
title: "Amazon WorkSpaces"
fullName: "Amazon WorkSpaces"
description: "为用户提供完整、受管的 Windows 或 Linux 云桌面。"
service: "Amazon WorkSpaces"
category: architecture
kind: service
lang: zh
topicKey: "Amazon WorkSpaces"
frequency: "考试频率 ⭐⭐⭐"
date: 2026-08-05
updated: 2026-08-05
tags: ["architecture", "WorkSpaces", "AWS"]
notionId: 3b3964dc-ce4a-81a4-8564-c399f28400e3
notionUrl: https://app.notion.com/p/3b3964dcce4a81a48564c399f28400e3
notionUpdated: "2026-08-05T01:59:00.000Z"
---

## 一句话理解

为每位用户提供完整、受管的 Windows 或 Linux 云桌面，用于远程办公、临时团队或传统 VDI 替代。

## 核心作用

- 集中管理桌面规格、目录、镜像、存储和访问。
- 用户通过客户端或支持的浏览器远程连接，计算和数据主要保留在 AWS。
- 适合需要多个应用、持久环境和用户个性化设置的场景。

## 考试重点与误区

- 完整虚拟桌面 → WorkSpaces；单个应用 → WorkSpaces Applications；隔离浏览器 → Secure Browser。
- “通过浏览器访问 WorkSpace”只是完整桌面的访问方式，不等于 Secure Browser 服务。
- 仍需设计目录集成、网络延迟、用户数据持久性、镜像、软件许可和端点策略。

## 重点记忆

**完整云桌面 → Amazon WorkSpaces。**

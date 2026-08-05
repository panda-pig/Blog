---
title: "Amazon WorkSpaces Applications"
fullName: "Amazon WorkSpaces Applications (formerly Amazon AppStream 2.0)"
description: "把桌面应用从 AWS 流式交付给用户，而不是提供完整虚拟桌面。"
service: "Amazon WorkSpaces Applications"
category: architecture
kind: service
lang: zh
topicKey: "Amazon WorkSpaces Applications"
frequency: "考试频率 ⭐⭐⭐"
date: 2026-08-05
updated: 2026-08-05
tags: ["architecture", "WorkSpaces Applications", "AWS"]
notionId: 3b3964dc-ce4a-81eb-a897-ffd12fbc0c94
notionUrl: https://app.notion.com/p/3b3964dcce4a81eba897ffd12fbc0c94
notionUpdated: "2026-08-05T01:59:00.000Z"
---

## 一句话理解

集中托管一个或多个桌面应用，并通过客户端或 HTML5 浏览器流式交付，而不是给用户整套桌面。

## 核心作用

- 统一维护应用镜像和版本，按需扩展流式会话。
- 应用在 AWS 计算资源中运行，终端主要接收画面和输入。
- 适合承包商、教学环境或需要限制数据下载的受控应用访问。

## 考试重点与误区

- 只交付桌面应用 → WorkSpaces Applications；完整桌面 → WorkSpaces；隔离浏览器 → Secure Browser。
- 课程或旧题中的 Amazon AppStream 2.0 对应当前 WorkSpaces Applications。
- Fleet、并发、镜像、身份、网络和会话策略决定成本与体验。

## 重点记忆

**只给应用，不给整台桌面。**

## 官方参考

- [Amazon WorkSpaces Applications](https://docs.aws.amazon.com/appstream2/latest/developerguide/what-is-appstream.html)

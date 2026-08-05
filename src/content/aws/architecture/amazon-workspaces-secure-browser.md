---
title: "Amazon WorkSpaces Secure Browser"
fullName: "Amazon WorkSpaces Secure Browser (formerly Amazon WorkSpaces Web)"
description: "从现有浏览器进入 AWS 托管的隔离浏览会话。"
service: "Amazon WorkSpaces Secure Browser"
category: architecture
kind: service
lang: zh
topicKey: "Amazon WorkSpaces Secure Browser"
frequency: "考试频率 ⭐⭐⭐"
date: 2026-08-05
updated: 2026-08-05
tags: ["architecture", "Secure Browser", "AWS"]
notionId: 3b3964dc-ce4a-81a9-942a-d9a0079c05f3
notionUrl: https://app.notion.com/p/3b3964dcce4a81a9942ad9a0079c05f3
notionUpdated: "2026-08-05T01:59:00.000Z"
---

## 一句话理解

让用户从现有浏览器进入一次性的 AWS 托管隔离浏览会话，安全访问内部网站、SaaS 或互联网。

## 核心作用

- 网页和潜在风险在云端隔离浏览器中运行，终端只接收流式内容。
- 通过 Portal、身份提供商、VPC 网络和浏览器策略控制访问。
- 可限制 URL、剪贴板、文件传输和打印，降低个人设备访问时的数据外泄风险。

## 考试重点与误区

- 只需要受控浏览器访问 → Secure Browser；完整桌面 → WorkSpaces；桌面应用 → Applications。
- 旧名是 Amazon WorkSpaces Web。
- WorkSpaces Web Access 是访问完整 WorkSpace 的客户端方式，不等于 Secure Browser。

## 重点记忆

**只给受控、隔离的浏览器，不给完整桌面。**

## 官方参考

- [Amazon WorkSpaces Secure Browser](https://docs.aws.amazon.com/workspaces-web/latest/adminguide/)

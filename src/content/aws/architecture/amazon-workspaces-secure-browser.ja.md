---
title: "Amazon WorkSpaces Secure Browser"
fullName: "Amazon WorkSpaces Secure Browser (formerly Amazon WorkSpaces Web)"
description: "既存 Browser から AWS 管理の隔離 Browser Session へ接続します。"
service: "Amazon WorkSpaces Secure Browser"
category: architecture
kind: service
lang: ja
topicKey: "Amazon WorkSpaces Secure Browser"
frequency: "試験頻度 ⭐⭐⭐"
date: 2026-08-05
updated: 2026-08-05
tags: ["architecture", "Secure Browser", "AWS"]
notionId: 3b3964dc-ce4a-81a9-942a-d9a0079c05f3
notionUrl: https://app.notion.com/p/3b3964dcce4a81a9942ad9a0079c05f3
notionUpdated: "2026-08-05T01:59:00.000Z"
---

## 一言で理解

既存の Browser から使い捨ての AWS 管理隔離 Browser Session へ入り、Private Site、SaaS、Internet へ安全にアクセスします。

## 主な役割

- Web Content と Risk を Cloud Browser 内で隔離し、Endpoint へ体験を Streaming する。
- Portal、Identity Provider、VPC Network、Browser Policy で Access を制御する。
- URL、Clipboard、File Transfer、Print を制限し、個人 Device からの Data Exfiltration Risk を下げる。

## 試験ポイントと注意点

- Browser だけを制御 → Secure Browser、完全 Desktop → WorkSpaces、Desktop Application → Applications。
- 旧名称は Amazon WorkSpaces Web。
- WorkSpaces Web Access は完全 WorkSpace への接続方法であり、Secure Browser Service とは異なる。

## 重要ポイント

**完全な Desktop ではなく、制御された隔離 Browser だけを提供する。**

## 公式リファレンス

- [Amazon WorkSpaces Secure Browser](https://docs.aws.amazon.com/workspaces-web/latest/adminguide/)

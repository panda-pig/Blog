---
title: "S3 vs EBS vs EFS vs FSx"
fullName: "S3 vs EBS vs EFS vs FSx"
description: "Object は S3、Instance 接続 Block は EBS、共有 Linux File は EFS、専用 Managed File System は FSx。"
service: "AWS Compare"
category: compare
kind: compare
lang: ja
topicKey: "S3 vs EBS vs EFS vs FSx"
frequency: "学習まとめ"
date: 2026-07-30
updated: 2026-07-30
tags: ["compare","S3 vs EBS vs EFS vs FSx","AWS"]
notionId: 3a6964dc-ce4a-819b-89e7-eedbf8ad32aa
notionUrl: https://app.notion.com/p/3a6964dcce4a819b89e7eedbf8ad32aa
notionUpdated: "2026-07-29T04:42:48.621Z"
---

## 一言で理解

> Object は S3、Instance 接続 Block は EBS、共有 Linux File は EFS、専用 Managed File System は FSx。

## 要点

- S3 は Object API を使い大規模に拡張できるが、通常の Mounted Disk ではない。
- EBS は Availability Zone に属する Block Storage で、主に EC2 に接続する。
- EFS は Linux Workload 向けの Regional Shared NFS File System。

## 試験での判断

> FSx は Windows File Server、Lustre、NetApp ONTAP、OpenZFS などの Managed File System を提供する。

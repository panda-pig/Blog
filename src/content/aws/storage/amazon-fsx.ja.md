---
title: Amazon FSx
fullName: Amazon FSx
description: Windows、Lustre、NetApp ONTAP、OpenZFS などを提供する専門マネージドファイルシステム群。
service: FSx
category: storage
kind: service
lang: ja
frequency: "試験頻度 ★★★★"
date: 2026-07-29
updated: 2026-07-29
tags: [Storage, File Storage, Hybrid]
notionId: 3a6964dc-ce4a-81e5-a908-cd990d3f12be
notionUrl: https://app.notion.com/p/3a6964dcce4a81e5a908cd990d3f12be
notionUpdated: "2026-07-29T04:42:39.476Z"
---

## 一言で理解

> FSx は従来または高性能アプリの使い慣れたプロトコルと機能を保ちながら、基盤管理を AWS に任せます。

## 主な役割

- FSx for Windows は SMB、Active Directory、企業共有に対応。
- FSx for Lustre は HPC、機械学習、並列高スループット向けで S3 と連携できる。
- FSx for ONTAP / OpenZFS は既存企業ストレージや ZFS の移行に適する。

## 試験ポイント

- 一般的な Linux NFS 共有は EFS、Windows/SMB/AD は FSx for Windows。
- HPC、ML、Lustre は FSx for Lustre。
- プロトコル、OS、性能目標、既存依存関係から選ぶ。

## よくある誤解

- FSx は 1 つのファイルシステムではなく製品群。
- FSx は単なる EFS の上位版ではない。

## 重要ポイント

> **一般 Linux 共有は EFS、専門ファイルシステムは対応する FSx を選ぶ。**

## 関連サービス

EFS、S3、Active Directory、HPC、AWS Backup。

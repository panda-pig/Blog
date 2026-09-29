---
title: "AMI：カスタムイメージ、Snapshot、User Data"
fullName: "Amazon Machine Image, EBS Snapshot, and EC2 User Data"
description: "起動テンプレート、Volume の時点コピー、初期化 Script を区別し、Golden AMI と User Data を組み合わせます。"
service: "Amazon EC2"
category: compute
kind: topic
lang: ja
topicKey: "AMI Snapshots and User Data"
frequency: "SAA 高频"
date: 2026-09-29
updated: 2026-09-29
tags: ["AMI", "EBS Snapshot", "User Data", "EC2"]
notionId: 3e8964dc-ce4a-810b-8665-f7b4195be3f8
notionUrl: https://app.notion.com/p/3e8964dcce4a810b8665f7b4195be3f8
notionUpdated: "2026-09-28T04:09:12.223Z"
---

## ひとことで

**AMI は起動可能な EC2 Template、Snapshot は EBS Volume の時点コピー、User Data は起動時の初期化 Script です。**

| 概念 | 保存内容 | 主な用途 | 保存しないもの |
| --- | --- | --- | --- |
| AMI | System Template、Block Device Mapping、関連 Snapshot | 同一構成の EC2 を起動 | 元の Instance ID、ENI、IP、RAM、Process |
| EBS Snapshot | Volume の Block-level データ | Volume 復元、AZ / Region 間移行 | 完全な EC2 起動設定 |
| User Data | 起動時 Script | 環境依存の軽量な動的設定 | 再利用可能な Image |
| Hibernate | RAM を Root EBS に保存 | 元の Process 状態を復元 | Deployment Template |

## 設計ポイント

- EBS-backed AMI の作成では関連 Snapshot が作られ、既定の Reboot は File System の整合性を高めます。
- AMI は Region Resource で、Region 間では Copy が必要です。
- Public AMI でも自動的に信頼せず、Owner、Patch、出所を確認します。
- 暗号化 AMI の Cross-account 共有では Snapshot と KMS Key の権限も必要です。
- AMI の Deregister はすべての Backing Snapshot を自動削除しません。

## 推奨構成

安定して大きく、導入に時間がかかる依存物は Golden AMI に含め、環境設定・Service 登録・最後の初期化は User Data で行います。Script は冪等にし、長期 Credential を埋め込みません。

## 要点

**AMI は「何として起動するか」、Snapshot は「Volume の時点データ」、User Data は「起動後の設定」を定義します。**

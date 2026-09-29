---
title: "EC2 ライフサイクル：Reboot、Stop、Hibernate、Terminate"
fullName: "EC2 Instance Lifecycle and Hibernation"
description: "EC2 の各操作で RAM、EBS、Instance Store、IP、料金がどう変わるかを比較します。"
service: "Amazon EC2"
category: compute
kind: topic
lang: ja
topicKey: "EC2 Instance Lifecycle and Hibernation"
frequency: "SAA 高频"
date: 2026-09-29
updated: 2026-09-29
tags: ["EC2", "hibernation", "lifecycle", "EBS"]
notionId: 3e8964dc-ce4a-81e0-a2dc-e71df7e51224
notionUrl: https://app.notion.com/p/3e8964dcce4a81e0a2dce71df7e51224
notionUpdated: "2026-09-27T05:01:04.233Z"
---

## 基本比較

| 操作 | RAM / Process | EBS | Instance Store | 再起動 |
| --- | --- | --- | --- | --- |
| Reboot | OS を再起動 | 維持 | 通常維持 | 自動で Running |
| Stop | 消去 | 維持 | 消失 | 可能 |
| Hibernate | RAM を暗号化 Root EBS に保存し、起動時に復元 | 維持 | 消失 | 可能 |
| Terminate | 消去 | Delete on Termination に従う | 消失 | 不可 |

Hibernate は Launch 時に有効化し、対応する AMI / OS / Instance Type と、十分な容量を持つ暗号化 Root EBS が必要です。

## 境界

- Hibernate は実行状態を保存しますが、Backup、Snapshot、DR、Multi-AZ HA の代替ではありません。
- Stop / Hibernate 後は Compute 料金が止まっても、EBS や Public IPv4 などは課金され得ます。
- Primary Private IPv4 は通常維持、Auto-assigned Public IPv4 は通常解放、Elastic IP は関連付けを維持します。
- 再起動しても初回起動用 User Data は通常再実行されません。
- Terminate 時の Volume 削除は Delete on Termination 設定で決まります。

## 選択

RAM と Process を復元 → Hibernate、通常の停止 → Stop、OS の再起動 → Reboot、永久削除 → Terminate。

## 要点

**Stop は Disk を維持して Memory を失い、Hibernate は Memory を暗号化 Root EBS に保存し、Terminate は復元できません。**

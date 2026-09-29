---
title: "EC2 の初期化・接続・権限エラー総比較"
fullName: "EC2 Initialization Connection and Permission Errors"
description: "初期化、Network 到達性、OS Login、AWS API Authorization の 4 系統で EC2 障害を切り分けます。"
service: "AWS Compare"
category: compare
kind: compare
lang: ja
topicKey: "EC2 Initialization Connection and Permission Errors"
frequency: "高频对比"
date: 2026-09-29
updated: 2026-09-29
tags: ["compare", "EC2", "troubleshooting", "IAM"]
notionId: 3e8964dc-ce4a-8132-a559-df7d19cc2637
notionUrl: https://app.notion.com/p/3e8964dcce4a8132a559df7d19cc2637
notionUpdated: "2026-09-27T02:35:48.957Z"
---

## 制御系統を分ける

EC2 障害は主に **起動初期化、Network 到達性、OS Login、AWS API Authorization** の 4 系統です。変更前に失敗 Layer を特定します。

| 現象 | 意味 | 最初に確認 |
| --- | --- | --- |
| Application 未配備 | User Data / Bootstrapping 失敗 | cloud-init Log、Script、DNS、Egress、Package Source |
| Connection timeout | Network 応答がない | Address、Route、IGW、NACL、SG、Corporate Firewall |
| Connection refused | Host 到達後に Port が拒否 | sshd / Application Listener、Host Firewall |
| Permission denied | SSH 到達後の認証失敗 | Private Key、OS Username、authorized_keys |
| Unable to locate credentials | SDK / CLI に Credential がない | Instance Profile、IMDS、Provider Chain |
| AccessDenied | Identity はあるが権限不足 | Action、Resource、Condition、Explicit Deny、SCP、Boundary |

## 接続方式の境界

- EC2 Instance Connect も SSH を使い、IAM、正しい OS User、EIC、Network Path が必要です。
- Session Manager は SSM Agent と Outbound Channel を使うため、Inbound 22 は不要です。
- OS Login と AWS API 呼び出しは別で、Application 権限は EC2 IAM Role が決めます。
- EC2 は Instance Profile 経由で一時 Credential を取得し、人の長期 Access Key を保存しません。

## 調査順序

Address / DNS → Route / IGW / NAT → NACL → Security Group → Host Firewall → Service Listener → OS Authentication → IAM Authorization。

## 要点

**Timeout は経路、Refused は Service、Permission denied は SSH Identity、AccessDenied は IAM を確認します。**

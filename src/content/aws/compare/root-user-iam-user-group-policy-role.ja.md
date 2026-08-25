---
title: "Root User・IAM User・Group・Policy・Role 総比較"
fullName: "Root User, IAM User, Group, Policy and Role"
description: "Identity、User 集合、権限規則、Assume 可能な一時 Identity を区別します。"
service: "AWS Compare"
category: compare
kind: compare
lang: ja
topicKey: "Root User・IAM User・Group・Policy・Role 总对比"
frequency: "頻出比較"
date: 2026-08-13
updated: 2026-08-25
tags: ["compare", "IAM", "Security", "AWS"]
notionId: 3bb964dc-ce4a-81be-9246-cfcc1cefab44
notionUrl: https://app.notion.com/p/3bb964dcce4a81be9246cfcc1cefab44
notionUpdated: "2026-08-25T06:01:18.994Z"
---

## 一言で理解

**User は Identity、Group は User をまとめる権限管理単位、Policy は権限規則、Role は Assume できる一時権限 Identity です。**

## 総比較

| 対象 | 意味 | 主な用途 |
| --- | --- | --- |
| Root User | Account 固有の Identity | Account Recovery、Root-only Task |
| IAM User | Account 内の長期 Identity | 限定的な長期 Identity 用途 |
| IAM Group | IAM User の権限管理集合 | 同じ職務の User への共通権限 |
| IAM Policy | JSON 権限文書 | Effect、Action、Resource、Condition |
| IAM Role | Assume 可能な権限 Identity | Workload、Cross-account、一時 Access |
| IAM Identity Center | 従業員の Multi-account Access | SSO、Permission Set |

## 試験ルール

Group に入れられるのは IAM User のみで、Group の入れ子はできません。User は複数 Group に所属でき、適用される全 Policy を継承します。Explicit Deny は Allow より優先します。

Managed Policy は User、Group、Role に Attach でき、Inline Policy は 1 つの User、Group、Role に Embed できます。Policy は Identity ではなく、Identity-based Policy に Principal は書きません。

## 場面判断

共通 User 権限は Group、EC2 から S3 は Role、従業員の Multi-account Access は IAM Identity Center、Application Customer は Cognito、Root-only Task のみ Root User を選びます。

## Role の 3 つの重要要素

| 要素 | 役割 |
| --- | --- |
| Trusted Entity / Trust Policy | 誰が Role を Assume できるかを定義 |
| Permissions Policy | Role Session が実行できる Action と Resource を定義 |
| STS Temporary Credentials | 有効期限付き Access Key ID、Secret Access Key、Session Token を提供 |

EC2 は Instance Profile 経由で Role を利用するため、Role の作成だけでは不十分で Instance への関連付けが必要です。Operator が Role を EC2、Lambda などへ渡す場合は通常 iam:PassRole が必要です。**PassRole は「Service に Role を渡す」、AssumeRole は「Principal 自身が Role を利用する」操作です。**

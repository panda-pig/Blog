---
title: "AWS IAM"
fullName: "AWS Identity and Access Management"
description: "誰が Request しているかを確認し、Policy でどの Resource に何ができるかを判断します。"
service: "AWS IAM"
category: security
kind: service
lang: ja
topicKey: "AWS IAM"
frequency: "試験頻度 ⭐⭐⭐⭐⭐"
date: 2026-07-31
updated: 2026-08-15
tags: ["security", "AWS IAM", "AWS"]
notionId: 3a6964dc-ce4a-814c-981d-d23eb8d66e71
notionUrl: https://app.notion.com/p/3a6964dcce4a814c981dd23eb8d66e71
notionUpdated: "2026-08-13T08:35:21.640Z"
---

## 一言で理解

**IAM は誰が Request しているかを確認し、Policy でどの Resource にどの Action を許可するか決めます。**

## Identity

Root は Account 固有の Identity で、Recovery と Root-only Task に限定します。IAM User は長期 Identity。Group は User のみを含み、入れ子にできず、1 User は複数 Group に所属できます。Role は Assume 可能で Temporary Credentials を提供します。

従業員の Multi-account Access は IAM Identity Center / Federation、Workload は Role を優先します。

## Password、MFA、API Credential

IAM Password Policy は IAM User Console Password だけを制御し、Root、Access Key、Identity Center Password は対象外です。MFA は Authentication を強化しますが Authorization は付与しません。

Long-term Credentials は Access Key ID + Secret Access Key、Temporary Credentials は Session Token を追加して期限切れになります。Secret はハードコードせず、Temporary Credentials を優先します。

Console は Password + MFA または SSO。CLI は Identity Center、AssumeRole、Profile、Workload Role を利用でき、SDK は Credential Provider Chain を使います。aws configure は設定保存だけで権限を付与しません。

## Policy

Version は Policy Language Version、Statement は規則、Effect は Allow / Deny、Action は API、Resource は Scope、Condition は Context 制限です。Principal は Resource-based / Trust Policy で使い、Identity-based Policy には書きません。

Managed Policy は再利用でき、Inline Policy は User、Group、Role のいずれか一つに埋め込みます。User 権限は Direct、Group 経由、Inline の複数 Source から成ります。

## Evaluation

初期状態は Implicit Deny。適用される Allow があり、Explicit Deny がない場合だけ許可されます。Explicit Deny は Allow より優先し、Boundary、Session Policy、SCP は権限を制限するだけです。

## 重点記憶

**Group は入れ子不可、User は複数 Group 可、Policy は権限、People は SSO、Workload は Role、Explicit Deny 優先です。**

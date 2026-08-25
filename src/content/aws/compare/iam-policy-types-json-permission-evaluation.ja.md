---
title: "IAM Policy 種類・JSON 要素・権限評価の総比較"
fullName: "IAM Policy Types, JSON Elements and Permission Evaluation"
description: "IAM Policy の配置、JSON 要素、最終的な Permission Evaluation をつなげて理解します。"
service: "AWS Compare"
category: compare
kind: compare
lang: ja
topicKey: "IAM Policy 类型・JSON 元素・权限评估总对比"
frequency: "頻出比較"
date: 2026-08-13
updated: 2026-08-25
tags: ["compare", "IAM Policy", "Security", "AWS"]
notionId: 3bb964dc-ce4a-81f6-9c5e-cfb3f87cedb2
notionUrl: https://app.notion.com/p/3bb964dcce4a81f69c5ecfb3f87cedb2
notionUpdated: "2026-08-25T06:01:17.651Z"
---

## 一言で理解

**Policy 種類は Attach 先と Principal の要否を決め、Permission Evaluation は適用される全 Policy の組み合わせを決めます。**

## Policy 種類

AWS Managed、Customer Managed、Inline は Identity-based で Principal を書きません。Resource-based と Role Trust Policy は通常 Principal を指定します。Permissions Boundary と SCP は権限上限であり、単独では権限を付与しません。

Managed Policy は再利用・集中管理でき、Inline Policy は 1 つの Identity と一対一で、その Identity とともに削除されます。

## JSON 要素

Version は Policy Language Version、Statement は権限規則、Sid は識別子、Effect は Allow / Deny、Action は API 操作、Resource は ARN Scope、Condition は Request Context の条件です。Principal は Resource-based / Trust Policy で使います。

## 権限評価

初期状態は Implicit Deny。適用される Allow があり、Explicit Deny がない場合だけ許可されます。Explicit Deny は Allow より優先し、Boundary、Session Policy、SCP は権限を縮小するだけです。

Access Denied では失敗した Action から始め、Principal、Direct / Inherited Policy、Explicit Deny、Resource ARN、Condition、Boundary、SCP、Session Policy を確認します。

## Role 関連の Policy と Operation

| 対象 | 決定すること | よくある混同 |
| --- | --- | --- |
| Trust Policy | 誰が Role を Assume できるか | Role Session がアクセスできる業務 Resource は決めない |
| Permissions Policy | Role Session が何を実行できるか | 誰が Role を Assume できるかは決めない |
| iam:PassRole | Caller が指定 Role を AWS Service へ渡せるか | AssumeRole ではない |
| sts:AssumeRole | Trusted Principal が Role の Temporary Credentials を取得できるか | Trust Policy と権限条件も満たす必要がある |

Role の権限問題は 2 段階で切り分けます。まず Principal が Role を Assume / Pass できるか確認し、次に Role Session の Permissions Policy、Boundary、Session Policy、SCP、Resource Policy、Explicit Deny を評価します。

---
title: "IAM Policy Types, JSON, and Permission Evaluation"
fullName: "IAM Policy Types, JSON Elements and Permission Evaluation"
description: "Connects IAM policy attachment, JSON elements, and final permission evaluation."
service: "AWS Compare"
category: compare
kind: compare
lang: en
topicKey: "IAM Policy 类型・JSON 元素・权限评估总对比"
frequency: "High-frequency comparison"
date: 2026-08-13
updated: 2026-08-25
tags: ["compare", "IAM Policy", "Security", "AWS"]
notionId: 3bb964dc-ce4a-81f6-9c5e-cfb3f87cedb2
notionUrl: https://app.notion.com/p/3bb964dcce4a81f69c5ecfb3f87cedb2
notionUpdated: "2026-08-25T06:01:17.651Z"
---

## In one sentence

**Policy type determines where a policy attaches and whether it names a Principal; evaluation determines how all applicable policies combine.**

## Policy types

AWS managed, customer managed, and inline policies are identity-based and omit Principal. Resource-based and role trust policies normally name a Principal. Permissions boundaries and SCPs cap permissions but grant nothing by themselves.

Managed policies are reusable and centrally maintained; inline policies are one-to-one and disappear with their identity.

## JSON elements

Version is the policy-language version, Statement holds rules, Sid is only an identifier, Effect is Allow or Deny, Action names API operations, Resource scopes ARNs, and Condition limits request context. Principal belongs in resource-based and trust policies, not identity-based policies.

## Evaluation

AWS starts with implicit Deny. A request needs an applicable Allow and no applicable explicit Deny. Explicit Deny overrides Allow. Boundaries, session policies, and SCPs can only reduce the effective permission set.

For Access Denied, start with the failed Action, then inspect the current principal, direct and inherited policies, explicit denies, resource ARN, conditions, boundary, SCP, and session policy.

## Role-related policies and operations

| Object | What it decides | Common confusion |
| --- | --- | --- |
| Trust policy | Who can assume the role | Does not define the business resources a role session may access |
| Permissions policy | What the role session can do | Does not define who may assume the role |
| iam:PassRole | Whether a caller may pass a specified role to an AWS service | Is not AssumeRole |
| sts:AssumeRole | Whether a trusted principal may obtain temporary role credentials | Trust-policy and permission conditions must still be satisfied |

Troubleshoot role access in two stages: first verify that the principal may assume or pass the role, then evaluate the role session's permissions policy, boundary, session policy, SCP, resource policy, and any explicit deny.

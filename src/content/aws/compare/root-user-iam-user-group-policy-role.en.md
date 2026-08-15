---
title: "Root User, IAM User, Group, Policy, and Role"
fullName: "Root User, IAM User, Group, Policy and Role"
description: "Distinguishes identities, user collections, permission rules, and assumable temporary identities."
service: "AWS Compare"
category: compare
kind: compare
lang: en
topicKey: "Root User・IAM User・Group・Policy・Role 总对比"
frequency: "High-frequency comparison"
date: 2026-08-13
updated: 2026-08-15
tags: ["compare", "IAM", "Security", "AWS"]
notionId: 3bb964dc-ce4a-81be-9246-cfcc1cefab44
notionUrl: https://app.notion.com/p/3bb964dcce4a81be9246cfcc1cefab44
notionUpdated: "2026-08-13T05:01:05.684Z"
---

## In one sentence

**A user is an identity, a group organizes users, a policy describes permissions, and a role is an assumable identity that provides temporary permissions.**

## Comparison

| Object | Meaning | Main use |
| --- | --- | --- |
| Root User | The account's inherent identity | Recovery and root-only tasks |
| IAM User | A long-term identity inside one account | Limited legacy or compatibility cases |
| IAM Group | A permission-management collection of IAM users | Shared job-role permissions |
| IAM Policy | A JSON permissions document | Effect, Action, Resource, and Condition |
| IAM Role | An assumable permissions identity | Workloads, cross-account access, temporary access |
| IAM Identity Center | Workforce access across accounts | SSO and permission sets |

## Exam rules

Groups contain users only, cannot contain groups, cannot sign in, and cannot be assumed. A user may belong to multiple groups and inherits all applicable group policies. An applicable explicit Deny still overrides Allow.

Managed policies can attach to users, groups, or roles. Inline policies can be embedded in one user, group, or role. Policies are not identities, and identity-based policies do not contain Principal.

## Scenario choices

Use a group for shared user permissions, a role for EC2-to-S3 access, IAM Identity Center for workforce multi-account access, Cognito for application customers, and root only for required root tasks.

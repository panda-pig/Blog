---
title: "AWS IAM"
fullName: "AWS Identity and Access Management"
description: "Verify who is making the request, then use policies to decide what that identity may do to which resources."
service: "AWS IAM"
category: security
kind: service
lang: en
topicKey: "AWS IAM"
frequency: "Exam frequency ⭐⭐⭐⭐⭐"
date: 2026-07-31
updated: 2026-08-15
tags: ["security", "AWS IAM", "AWS"]
notionId: 3a6964dc-ce4a-814c-981d-d23eb8d66e71
notionUrl: https://app.notion.com/p/3a6964dcce4a814c981dd23eb8d66e71
notionUpdated: "2026-08-13T08:35:21.640Z"
---

## In one sentence

**IAM verifies who is requesting, then policies decide which actions that identity may perform on which resources.**

## Identities

Root is the account's inherent identity and is reserved for recovery and root-only tasks. IAM users are long-term account identities. Groups contain users only, cannot be nested, and one user may join several. Roles are assumable identities that provide expiring credentials.

Use IAM Identity Center or federation for workforce access across accounts and roles for workloads.

## Passwords, MFA, and API credentials

IAM password policy controls IAM user console passwords only, not root, access keys, or Identity Center passwords. MFA strengthens authentication but grants no authorization.

Long-term credentials contain an access key ID and secret access key. Temporary credentials add a session token and expire. Prefer temporary credentials, never hard-code secrets, and rotate a leaked or lost key.

Console usually uses password plus MFA or SSO. CLI may use Identity Center, AssumeRole, profiles, or workload roles. SDKs use a credential provider chain. aws configure stores local settings but grants no permission; CloudShell remains limited to the current console identity.

## Policies

Version is the policy-language version; Statement contains rules; Effect is Allow or Deny; Action names APIs; Resource scopes resources; Condition limits context. Principal belongs in resource-based and trust policies, not identity-based policies.

Managed policies are reusable and attachable. Inline policies are embedded one-to-one in a user, group, or role. A user's permissions may be direct, inherited through groups, or inline.

## Evaluation

IAM begins with implicit Deny. A request needs an applicable Allow and no applicable explicit Deny. Explicit Deny overrides Allow. Permissions boundaries, session policies, and SCPs limit effective permissions but do not grant them.

## Key takeaway

**Groups do not nest, users may join multiple groups, policies describe permissions, people should prefer SSO, workloads should use roles, and explicit Deny wins.**

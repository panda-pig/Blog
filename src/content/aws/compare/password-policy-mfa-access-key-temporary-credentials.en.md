---
title: "Password Policy, MFA, Access Key, and Temporary Credentials"
fullName: "Password Policy, MFA, Access Key and Temporary Credentials"
description: "Separates password rules, additional authentication factors, long-term keys, and expiring credentials."
service: "AWS Compare"
category: compare
kind: compare
lang: en
topicKey: "Password Policy・MFA・Access Key・Temporary Credentials 总对比"
frequency: "High-frequency comparison"
date: 2026-08-13
updated: 2026-08-15
tags: ["compare", "MFA", "Access Key", "IAM"]
notionId: 3bb964dc-ce4a-816d-962e-c17440cc39cc
notionUrl: https://app.notion.com/p/3bb964dcce4a816d962ec17440cc39cc
notionUpdated: "2026-08-13T08:35:29.475Z"
---

## In one sentence

**Password policy controls IAM user password rules, MFA adds an authentication factor, access keys sign API requests, and temporary credentials expire automatically.**

## Boundaries

Password policy applies to IAM user console passwords, not root passwords, access keys, or IAM Identity Center passwords. MFA strengthens authentication but grants no authorization; a policy condition may require an MFA context.

Long-term credentials contain an access key ID and secret access key and do not expire automatically. Temporary credentials add a session token and have an expiration. Prefer IAM Identity Center or federation for people and roles for workloads.

Console normally uses password plus MFA or an SSO session. CLI and SDK can use Identity Center, AssumeRole, workload roles, or access keys. aws configure stores profile settings but grants no permissions, and CloudShell cannot exceed the current console identity.

Never share or hard-code secrets. A leaked key must be revoked or rotated, with CloudTrail and the exposure scope investigated.

---
title: "AWS Account and Root User Security"
fullName: "AWS Account and AWS Account Root User Security"
description: "The root user establishes and recovers an account but should not be a daily administrator identity."
service: "Cloud Foundations"
category: cloud-practitioner
kind: topic
lang: en
topicKey: "AWS 账户与 Root User 安全"
frequency: "Exam frequency ⭐⭐⭐⭐⭐"
date: 2026-08-13
updated: 2026-08-25
tags: ["AWS Account", "Root User", "Security", "AWS"]
notionId: 3bb964dc-ce4a-81c3-9d23-dd3deb0dda3e
notionUrl: https://app.notion.com/p/3bb964dcce4a81c39d23dd3deb0dda3e
notionUpdated: "2026-08-13T08:20:08.794Z"
---

## In one sentence

The registration email creates the account's highest-privilege **root user**. Use it for account establishment, recovery, and the few required root tasks, never as the daily administrator identity.

## Security baseline

- Enable MFA immediately and protect backup devices and recovery procedures.
- Use a strong unique password and protect the registration email, phone number, and payment channels.
- Do not create root access keys; delete existing unnecessary ones.
- Prefer IAM Identity Center or federation for people and roles with temporary credentials for workloads.
- Add billing, budget, and Free Tier monitoring; credits are not a spending cap.
- For organizations, use controlled group email, approval, emergency-access, and audit procedures.

## Identity boundaries

Root is not an IAM user. Root, administrator users, and restricted users can be identities in the same account. Resources created by a user belong to the account and target Region / AZ, not privately to the creator.

Console multi-session only stores parallel login contexts. It does not create accounts, copy resources, merge permissions, or change ownership. An account alias is only a unique sign-in-friendly replacement for the account ID.

## MFA choices

Passkeys and security keys provide phishing-resistant FIDO authentication. Authenticator apps create TOTP codes after initial QR or secret-key enrollment. Hardware TOTP tokens are physical alternatives. Enrollment secrets are sensitive credentials.

## Key takeaway

**The account is the resource and billing boundary; root, users, and roles are identities; sessions are login contexts; root is reserved for special tasks.**

## Cost visibility and alerts

After the root user enables **IAM user and role access to billing information**, IAM users and roles with appropriate permissions can view billing data. Use Billing/Bills to locate charges, Free Tier for current and forecast usage, and zero-spend or monthly budgets to detect unexpected cost early.

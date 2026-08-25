---
title: "IAM Access Analyzer"
fullName: "AWS Identity and Access Management Access Analyzer"
description: "Analyze external access, policies, and unused permissions to enforce least privilege."
service: "IAM Access Analyzer"
category: security
kind: service
lang: en
topicKey: "IAM Access Analyzer"
frequency: "考试频率 ⭐⭐⭐⭐"
date: 2026-08-01
updated: 2026-08-25
tags: ["security", "IAM Access Analyzer", "AWS"]
notionId: 3ae964dc-ce4a-8137-ab78-e4c595870913
notionUrl: https://app.notion.com/p/3ae964dcce4a8137ab78e4c595870913
notionUpdated: "2026-08-25T06:01:20.017Z"
---

## Basic Information

| Field | Value |
| --- | --- |
| English | IAM Access Analyzer |
| Full name | AWS Identity and Access Management Access Analyzer |
| Chinese | 访问权限分析器 |
| Japanese | IAM Access Analyzer（外部アクセス・未使用アクセスの分析） |
| Exam frequency | ⭐⭐⭐⭐ |
| Often confused with | AWS Trusted Advisor / IAM Policy Simulator |

## One-line summary

Analyze external access, policies, and unused permissions to enforce least privilege.

## Core capabilities and use cases

- Analyzes resource policies and trust relationships to find public or external-account access paths.
- Validates IAM policies for syntax, security, and best-practice issues.
- Uses access activity to help refine policies and identify unused permissions.
- Typical targets include S3 buckets, KMS keys, and IAM role trust policies.
- Administrators review findings, archive expected sharing, or correct unintended access.

## Exam focus and common pitfalls

- Use Access Analyzer when the question asks who can access a resource from outside the account or organization.
- Policy Simulator tests whether a request is allowed; Access Analyzer examines policies and access paths.
- A finding can represent expected business sharing and is not automatically malicious.

## Key takeaway

**Who can access from outside, and is the policy too broad? Think IAM Access Analyzer.**

## Current capability scope

- **External-access findings** identify public access or paths from outside an organization or account.
- **Internal-access findings** analyze access relationships to selected critical resources inside an organization.
- **Unused-access findings** identify roles, access keys, passwords, services, or action permissions that have not been used for an extended period.
- **Policy validation** reports syntax errors, security warnings, and best-practice suggestions.
- **Policy generation** uses observed CloudTrail activity to draft a more precise identity-based policy.

A finding does not automatically mean an attack; it can describe intended public or cross-account sharing. Confirm the business intent before archiving the finding or tightening the policy.

## Boundary with adjacent tools

Credentials Report inventories IAM user credentials; Access Advisor / last-accessed information shows usage timing for identities or policies; Access Analyzer evaluates access paths, unused permissions, and policies; Policy Simulator models a specific request; CloudTrail records actual API activity.

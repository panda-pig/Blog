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
updated: 2026-08-01
tags: ["security", "IAM Access Analyzer", "AWS"]
notionId: 3ae964dc-ce4a-8137-ab78-e4c595870913
notionUrl: https://app.notion.com/p/3ae964dcce4a8137ab78e4c595870913
notionUpdated: "2026-07-31T08:17:19.589Z"
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

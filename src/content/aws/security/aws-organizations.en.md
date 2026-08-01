---
title: "AWS Organizations"
fullName: "AWS Organizations"
description: "Centrally manage AWS accounts, OUs, SCP permission boundaries, and consolidated billing."
service: "AWS Organizations"
category: security
kind: service
lang: en
topicKey: "AWS Organizations"
frequency: "考试频率 ⭐⭐⭐⭐⭐"
date: 2026-08-01
updated: 2026-08-01
tags: ["security", "AWS Organizations", "AWS"]
notionId: 3a6964dc-ce4a-811f-8285-dd7360095a9f
notionUrl: https://app.notion.com/p/3a6964dcce4a811f8285dd7360095a9f
notionUpdated: "2026-07-31T08:22:49.155Z"
---

## Basic Information

| Field | Value |
| --- | --- |
| English | AWS Organizations |
| Full name | AWS Organizations |
| Chinese | 多账户集中管理 |
| Japanese | AWS Organizations（複数アカウントの一元管理） |
| Exam frequency | ⭐⭐⭐⭐⭐ |
| Often confused with | AWS Control Tower / AWS IAM |

## One-line summary

Centrally manage AWS accounts, OUs, SCP permission boundaries, and consolidated billing.

## Core capabilities and use cases

- Groups member accounts into organizational units (OUs) by business, environment, or security boundary.
- Service control policies (SCPs) define the maximum available permissions and inherit from the root, OU, or account.
- SCPs restrict permissions but never grant them; an IAM or resource policy must still allow the action.
- Consolidated billing aggregates charges and can share eligible volume discounts.
- Separate production, development, security, and log-archive accounts to create stronger boundaries.

## Exam focus and common pitfalls

- Organizations: accounts, OUs, SCPs, and consolidated billing.
- Control Tower builds a governed landing zone on top of Organizations; IAM manages identities inside an account.
- An OU is a logical grouping, not an AWS account.

## Key takeaway

**Organizations manages accounts and permission boundaries; SCPs can restrict but cannot grant.**

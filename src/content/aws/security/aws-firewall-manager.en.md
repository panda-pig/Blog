---
title: "AWS Firewall Manager"
fullName: "AWS Firewall Manager"
description: "Centrally deploys and maintains security policies across AWS Organizations accounts, OUs, and resources."
service: "AWS Firewall Manager"
category: security
kind: service
lang: en
topicKey: "AWS Firewall Manager"
frequency: "考试频率 ⭐⭐⭐"
date: 2026-10-08
updated: 2026-10-08
tags: ["security","AWS Firewall Manager","AWS"]
notionId: 3f3964dc-ce4a-81ff-8fa7-e438933cef1b
notionUrl: https://app.notion.com/p/3f3964dcce4a81ff8fa7e438933cef1b
notionUpdated: "2026-10-08T01:27:32.796Z"
---
## Basic information

| Field | Details |
| --- | --- |
| English / full name | AWS Firewall Manager |
| Chinese | 多账户安全策略集中管理 |
| Japanese | 複数アカウントのセキュリティポリシー一元管理 |
| Review priority | 考试频率 ⭐⭐⭐ |
| Often confused with | AWS WAF / Shield / Security Group / Network Firewall |

## In one sentence

Centrally deploys and maintains security policies across AWS Organizations accounts, OUs, and resources.

## Core summary

Firewall Manager is a governance layer for policies covering WAF, Shield Advanced, security groups, Network Firewall, and DNS Firewall.

## Study points

- New resources can automatically enter policies whose scope matches.
- Verify the administrator account, policy scope, Region, and resource type.
- WAF defines the actual web rules.
- Network Firewall performs packet inspection on routed traffic.

## Common pitfalls

- Firewall Manager is not Network Firewall.
- Central governance does not mean each resource's endpoint and routing are already correct.

## Key memory

**WAF defines rules, Network Firewall inspects traffic, and Firewall Manager distributes policy across accounts.**
